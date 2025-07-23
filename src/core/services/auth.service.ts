import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { firebaseConfig } from '../constants/firebase.config';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.currentUserSubject.next(user);
    }
  }

  async signUp(username: string, correo: string, contraseña: string): Promise<{ success: boolean; message: string }> {
    try {
      // Check if username or email already exists
      const usernameQuery = query(collection(this.db, 'users'), where('username', '==', username));
      const emailQuery = query(collection(this.db, 'users'), where('correo', '==', correo));

      const [usernameSnapshot, emailSnapshot] = await Promise.all([
        getDocs(usernameQuery),
        getDocs(emailQuery)
      ]);

      if (!usernameSnapshot.empty) {
        return { success: false, message: 'El nombre de usuario ya existe' };
      }

      if (!emailSnapshot.empty) {
        return { success: false, message: 'El correo ya está registrado' };
      }

      // Create new user
      const newUser: Omit<User, 'id'> = {
        username,
        correo,
        contraseña, // In production, this should be hashed
        score: 0
      };

      const docRef = await addDoc(collection(this.db, 'users'), newUser);
      const userWithId = { ...newUser, id: docRef.id };

      // Save to localStorage and update subject
      localStorage.setItem('currentUser', JSON.stringify(userWithId));
      this.currentUserSubject.next(userWithId);

      return { success: true, message: 'Usuario registrado exitosamente' };
    } catch (error) {
      console.error('Error during sign up:', error);
      return { success: false, message: 'Error al registrar usuario' };
    }
  }

  async signIn(usernameOrEmail: string, contraseña: string): Promise<{ success: boolean; message: string }> {
    try {
      // Try to find user by username or email
      const usernameQuery = query(collection(this.db, 'users'), where('username', '==', usernameOrEmail));
      const emailQuery = query(collection(this.db, 'users'), where('correo', '==', usernameOrEmail));

      const [usernameSnapshot, emailSnapshot] = await Promise.all([
        getDocs(usernameQuery),
        getDocs(emailQuery)
      ]);

      let userDoc = null;
      if (!usernameSnapshot.empty) {
        userDoc = usernameSnapshot.docs[0];
      } else if (!emailSnapshot.empty) {
        userDoc = emailSnapshot.docs[0];
      }

      if (!userDoc) {
        return { success: false, message: 'Usuario no encontrado' };
      }

      const userData = userDoc.data() as User;

      // Check password (in production, compare hashed passwords)
      if (userData.contraseña !== contraseña) {
        return { success: false, message: 'Contraseña incorrecta' };
      }

      const userWithId = { ...userData, id: userDoc.id };

      // Save to localStorage and update subject
      localStorage.setItem('currentUser', JSON.stringify(userWithId));
      this.currentUserSubject.next(userWithId);

      return { success: true, message: 'Inicio de sesión exitoso' };
    } catch (error) {
      console.error('Error during sign in:', error);
      return { success: false, message: 'Error al iniciar sesión' };
    }
  }



  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  async updateScore(newScore: number): Promise<boolean> {
    try {
      const currentUser = this.getCurrentUser();
      if (!currentUser) return false;

      // Only update if the new score is higher than current score
      if (newScore <= (currentUser.score || 0)) {
        return true; // Consider it successful but no update needed
      }

      const userRef = doc(this.db, 'users', currentUser.id);
      await updateDoc(userRef, { score: newScore });

      // Update local storage and subject
      const updatedUser = { ...currentUser, score: newScore };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.currentUserSubject.next(updatedUser);

      return true;
    } catch (error) {
      console.error('Error updating score:', error);
      return false;
    }
  }

  signOut(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      // Clear user-specific progress
      const progressKey = `userProgress_${currentUser.id}`;
      localStorage.removeItem(progressKey);
    }
    localStorage.removeItem('currentUser');
    localStorage.removeItem('temporaryScore'); // Clear temporary score on logout
    this.currentUserSubject.next(null);
  }
}