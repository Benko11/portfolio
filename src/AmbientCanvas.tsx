"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
}

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function redraw() {
    const canvas = canvasRef.current;
    if (canvas == null) return;

    const ctx = canvas.getContext("2d");
    if (ctx == null) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth * 0.7;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Particle system setup
    const particles: Particle[] = [];
    const particleCount = 50;

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width * 0.6 + canvas.width * 0.4, // Start from 40% of width
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    animate(canvas, ctx, particles);
  }

  useEffect(() => {
    window.addEventListener("resize", redraw);
    redraw();

    return () => {
      window.removeEventListener("resize", redraw);
    };
  }, []);

  function animate(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    particles: Particle[]
  ) {
    if (canvas == null || ctx == null) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create gradient background
    const gradient = ctx.createLinearGradient(
      canvas.width * 0.4,
      0,
      canvas.width,
      0
    );
    gradient.addColorStop(0, "rgba(5, 8, 10, 1)");
    gradient.addColorStop(0.3, "rgba(0, 12, 25, 0.8)");
    gradient.addColorStop(1, "rgba(0, 24, 48, 0.9)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < canvas.width * 0.4) particle.x = canvas.width * 0.4;
      if (particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Draw particle with glow effect
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius * 4
      );
      gradient.addColorStop(0, `rgba(64, 164, 255, ${particle.alpha})`);
      gradient.addColorStop(1, "rgba(64, 164, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw light rays
    for (let i = 0; i < 3; i++) {
      const time = Date.now() * 0.001 + i * 2;
      const x = canvas.width * 0.7 + Math.cos(time * 0.2) * 100; // Moved further right
      const y = canvas.height * 0.5 + Math.sin(time * 0.3) * 100;

      ctx.beginPath();
      const rayGradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
      rayGradient.addColorStop(0, "rgba(64, 164, 255, 0.02)"); // Slightly reduced opacity
      rayGradient.addColorStop(1, "rgba(64, 164, 255, 0)");
      ctx.fillStyle = rayGradient;
      ctx.arc(x, y, 200, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(() => animate(canvas, ctx, particles));
  }

  return <canvas ref={canvasRef} style={{ height: "100%" }} />;
}
