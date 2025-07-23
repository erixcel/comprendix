import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

interface QuestionProgress {
  readingIndex: number;
  questionIndex: number;
  attempts: number;
  isCompleted: boolean;
  pointsEarned: number;
  userId: string;
  wrongAnswers: number[]; // Array of wrong answer indices
}

interface UserProgress {
  userId: string;
  questions: QuestionProgress[];
  temporaryScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private authService = inject(AuthService);

  private drawerState = new BehaviorSubject<{
    isOpen: boolean
  }>({
    isOpen: false
  });

  private temporaryScore = new BehaviorSubject<number>(0);

  drawerState$ = this.drawerState.asObservable();
  temporaryScore$ = this.temporaryScore.asObservable();

  constructor() {
    this.loadTemporaryScore();

    // Subscribe to user changes to reload progress
    this.authService.currentUser$.subscribe(user => {
      if (user?.id) {
        this.loadTemporaryScore();
      } else {
        this.temporaryScore.next(0);
      }
    });
  }

  private loadTemporaryScore(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return;

    const userId = this.getUserId(currentUser);
    if (!userId) return;

    const progress = this.getUserProgress(userId);
    this.temporaryScore.next(progress.temporaryScore);
  }

  private getUserId(user: any): string | null {
    return user.id || user.username || null;
  }

  private getUserProgress(userId: string): UserProgress {
    const progressKey = `userProgress_${userId}`;
    const stored = localStorage.getItem(progressKey);

    if (stored) {
      return JSON.parse(stored);
    }

    return {
      userId,
      questions: [],
      temporaryScore: 0
    };
  }

  private saveUserProgress(progress: UserProgress): void {
    const progressKey = `userProgress_${progress.userId}`;
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }

  openDrawer() {
    this.drawerState.next({
      isOpen: true
    });
  }

  closeDrawer() {
    this.drawerState.next({
      isOpen: false
    });
  }

  toggleDrawer() {
    const currentState = this.drawerState.value;
    this.drawerState.next({
      isOpen: !currentState.isOpen
    });
  }

  addTemporaryPoints(points: number): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return;

    const userId = this.getUserId(currentUser);
    if (!userId) return;

    const progress = this.getUserProgress(userId);
    progress.temporaryScore = Math.max(0, progress.temporaryScore + points);

    this.temporaryScore.next(progress.temporaryScore);
    this.saveUserProgress(progress);

    // Check if we should update Firebase
    this.checkAndUpdateFirebaseScore();
  }

  isQuestionCompleted(readingIndex: number, questionIndex: number): boolean {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return false;

    const userId = this.getUserId(currentUser);
    if (!userId) return false;

    const progress = this.getUserProgress(userId);
    return progress.questions.some(q =>
      q.readingIndex === readingIndex &&
      q.questionIndex === questionIndex &&
      q.isCompleted
    );
  }

  getQuestionAttempts(readingIndex: number, questionIndex: number): number {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return 0;

    const userId = this.getUserId(currentUser);
    if (!userId) return 0;

    const progress = this.getUserProgress(userId);
    const question = progress.questions.find(q =>
      q.readingIndex === readingIndex &&
      q.questionIndex === questionIndex
    );

    return question?.attempts || 0;
  }

  recordQuestionAttempt(readingIndex: number, questionIndex: number, selectedOptionIndex: number, isCorrect: boolean): { pointsEarned: number, totalAttempts: number } {
    
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return { pointsEarned: 0, totalAttempts: 0 };

    const userId = this.getUserId(currentUser);
    if (!userId) return { pointsEarned: 0, totalAttempts: 0 };

    const progress = this.getUserProgress(userId);
    let question = progress.questions.find(q =>
      q.readingIndex === readingIndex &&
      q.questionIndex === questionIndex
    );

    if (!question) {
      question = {
        readingIndex,
        questionIndex,
        attempts: 0,
        isCompleted: false,
        pointsEarned: 0,
        userId: userId,
        wrongAnswers: []
      };
      progress.questions.push(question);
    }

    // If already completed, don't add more attempts or points
    if (question.isCompleted) {
      return { pointsEarned: 0, totalAttempts: question.attempts };
    }

    question.attempts++;

    if (isCorrect) {
      question.isCompleted = true;
      const basePoints = 4;
      question.pointsEarned = Math.max(1, basePoints - (question.attempts - 1));
      progress.temporaryScore += question.pointsEarned;
      this.temporaryScore.next(progress.temporaryScore);
    } else {
      // Record wrong answer and subtract 1 point for wrong attempt
      if (!question.wrongAnswers.includes(selectedOptionIndex)) {
        question.wrongAnswers.push(selectedOptionIndex);
      }
    }

    this.saveUserProgress(progress);

    if (isCorrect) {
      this.checkAndUpdateFirebaseScore();
    }

    return {
      pointsEarned: isCorrect ? question.pointsEarned : -1,
      totalAttempts: question.attempts
    };
  }

  getQuestionWrongAnswers(readingIndex: number, questionIndex: number): number[] {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return [];

    const userId = this.getUserId(currentUser);
    if (!userId) return [];

    const progress = this.getUserProgress(userId);
    const question = progress.questions.find(q =>
      q.readingIndex === readingIndex &&
      q.questionIndex === questionIndex
    );

    return question?.wrongAnswers || [];
  }

  private async checkAndUpdateFirebaseScore(): Promise<void> {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return;

    const userId = this.getUserId(currentUser);
    if (!userId) return;

    const firebaseScore = currentUser.score || 0;
    const temporaryScore = this.temporaryScore.value;

    if (temporaryScore > firebaseScore) {
      const success = await this.authService.updateScore(temporaryScore);
      if (success) {
        // Reset temporary score after successful update
        const progress = this.getUserProgress(userId);
        this.saveUserProgress(progress);
      }
    }
  }

  getCurrentDisplayScore(): number {
    return this.temporaryScore.value;
  }

  getFirebaseScore(): number {
    const currentUser = this.authService.getCurrentUser();
    return currentUser?.score || 0;
  }

  getCurrentTemporaryScore(): number {
    return this.temporaryScore.value;
  }

  resetTemporaryScore(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      const userId = this.getUserId(currentUser);
      if (userId) {
        const progress = this.getUserProgress(userId);
        progress.temporaryScore = 0;
        this.saveUserProgress(progress);
      }
    }
    this.temporaryScore.next(0);
  }

  clearUserProgress(userId: string): void {
    const progressKey = `userProgress_${userId}`;
    localStorage.removeItem(progressKey);
    this.temporaryScore.next(0);
  }

  resetGameProgress(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) return;

    const userId = this.getUserId(currentUser);
    if (!userId) return;

    // Clear all game progress but keep user data
    const progress: UserProgress = {
      userId,
      questions: [],
      temporaryScore: 0
    };

    this.saveUserProgress(progress);
    this.temporaryScore.next(0);
  }
}