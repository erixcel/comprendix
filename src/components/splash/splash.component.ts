import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  // Parámetros ajustados
  private readonly yellowLight = '#f5e9a6';
  private readonly yellowDark = '#e6c84c';
  private readonly maxScale = 15; // Aumentado para mayor cobertura
  private readonly speed = 0.05;
  private readonly waveInterval = 600;

  private ctx!: CanvasRenderingContext2D | null;
  private waves: { scale: number }[] = [];
  private lastWaveTime = 0;
  private animationId = 0;
  private lastFrameTime = 0;

  private router = inject(Router);


  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: false });

    if (!this.ctx) return;

    // Agregar ondas iniciales
    for (let i = 0; i < 5; i++) {
      this.waves.push({ scale: i * 3 });
    }

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas);
    this.animate()
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeCanvas);
  }

  redirectToWelcome(): void {
    this.router.navigate(['content/welcome']).then(() => {});
  }

  private animate = (timestamp?: number) => {
    if (!this.ctx) return;

    const deltaTime = timestamp ? timestamp - this.lastFrameTime : 16;
    this.lastFrameTime = timestamp || 0;

    this.drawFrame(deltaTime);
    this.animationId = requestAnimationFrame(this.animate);
  };

  private resizeCanvas = () => {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
      this.ctx.imageSmoothingEnabled = false;
    }
  };

  private drawFrame(deltaTime: number): void {
    if (!this.ctx) return;

    const currentTime = Date.now();
    const canvas = this.canvasRef.nativeElement;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxVisibleRadius = Math.hypot(centerX, centerY) * 1.25; // 25% más grande
    const scaleFactor = maxVisibleRadius / this.maxScale;

    // Añadir nuevas ondas
    if (currentTime - this.lastWaveTime >= this.waveInterval) {
      this.waves.push({ scale: 0 });
      this.lastWaveTime = currentTime;
    }

    // Actualizar escalas
    const scaleIncrement = this.speed * (deltaTime / 16);
    this.waves.forEach(wave => wave.scale += scaleIncrement);

    // Filtrar ondas completadas
    this.waves = this.waves.filter(wave => wave.scale < this.maxScale);

    // Limpiar canvas
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar círculos concéntricos
    this.waves.forEach(wave => {
      for (let i = this.maxScale; i >= 0; i--) {
        const radius = (i + wave.scale) * scaleFactor;
        this.ctx!.fillStyle = i % 2 === 0 ? this.yellowLight : this.yellowDark;
        this.ctx!.beginPath();
        this.ctx!.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx!.fill();
      }
    });
  }
}
