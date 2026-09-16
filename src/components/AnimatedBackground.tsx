import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

interface SignalPacket {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  color: string;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLight, setIsLight] = useState(false);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  // Listen to theme changes
  useEffect(() => {
    const checkTheme = () => {
      const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light' || document.documentElement.classList.contains('light');
      setIsLight(isLightTheme);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize neural/industrial telemetry network particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const colorsDark = [
      'rgba(99, 102, 241, ', // Indigo
      'rgba(56, 189, 248, ', // Sky
      'rgba(168, 85, 247, ', // Purple
      'rgba(52, 211, 153, '  // Emerald
    ];

    const colorsLight = [
      'rgba(79, 70, 229, ',  // Indigo
      'rgba(2, 132, 199, ',  // Sky
      'rgba(124, 58, 237, ', // Purple
      'rgba(5, 150, 105, '   // Emerald
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const colors = isLight ? colorsLight : colorsDark;
      const r = Math.random() * 2 + 1.2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: r,
        baseRadius: r,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2
      };
    });

    const packets: SignalPacket[] = [];
    const maxPackets = 12;

    const floatingNodes = [
      { text: '01 / ECE 9.23', x: 0.15, y: 0.2, speed: 0.0006 },
      { text: 'PLC IEC 61131-3', x: 0.82, y: 0.28, speed: 0.0008 },
      { text: 'GENAI AGENTS', x: 0.1, y: 0.65, speed: 0.0005 },
      { text: 'RAG EMBEDDINGS', x: 0.85, y: 0.72, speed: 0.0007 },
      { text: 'FASTAPI · REST', x: 0.5, y: 0.88, speed: 0.0004 },
      { text: 'MODBUS / SCADA', x: 0.75, y: 0.15, speed: 0.0009 }
    ];

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw animated flowing aurora wave glow in background
      const grad1X = width * 0.5 + Math.sin(time * 0.6) * width * 0.25;
      const grad1Y = height * 0.35 + Math.cos(time * 0.5) * height * 0.2;
      const grad2X = width * 0.75 + Math.cos(time * 0.4) * width * 0.2;
      const grad2Y = height * 0.65 + Math.sin(time * 0.7) * height * 0.2;

      const auroraGrad1 = ctx.createRadialGradient(grad1X, grad1Y, 10, grad1X, grad1Y, Math.min(width, height) * 0.55);
      const auroraGrad2 = ctx.createRadialGradient(grad2X, grad2Y, 10, grad2X, grad2Y, Math.min(width, height) * 0.5);

      if (isLight) {
        auroraGrad1.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
        auroraGrad1.addColorStop(0.6, 'rgba(56, 189, 248, 0.04)');
        auroraGrad1.addColorStop(1, 'rgba(248, 250, 252, 0)');

        auroraGrad2.addColorStop(0, 'rgba(168, 85, 247, 0.06)');
        auroraGrad2.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
        auroraGrad2.addColorStop(1, 'rgba(248, 250, 252, 0)');
      } else {
        auroraGrad1.addColorStop(0, 'rgba(99, 102, 241, 0.16)');
        auroraGrad1.addColorStop(0.6, 'rgba(56, 189, 248, 0.07)');
        auroraGrad1.addColorStop(1, 'rgba(7, 9, 14, 0)');

        auroraGrad2.addColorStop(0, 'rgba(168, 85, 247, 0.14)');
        auroraGrad2.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
        auroraGrad2.addColorStop(1, 'rgba(7, 9, 14, 0)');
      }

      ctx.fillStyle = auroraGrad1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = auroraGrad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Floating Technological Badges & Telemetry Nodes
      ctx.font = '500 11px "Geist Mono", monospace';
      floatingNodes.forEach((node, i) => {
        const nx = (node.x * width + Math.sin(time + i * 2) * 25) % width;
        const ny = (node.y * height + Math.cos(time * 0.8 + i) * 20) % height;
        const alpha = isLight ? 0.28 : 0.22;

        ctx.fillStyle = isLight ? `rgba(79, 70, 229, ${alpha})` : `rgba(165, 180, 252, ${alpha})`;
        ctx.fillText(node.text, nx, ny);

        // Draw tiny blinking anchor dot
        ctx.beginPath();
        ctx.arc(nx - 8, ny - 3, 2, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? `rgba(2, 132, 199, ${alpha * 1.5})` : `rgba(56, 189, 248, ${alpha * 1.8})`;
        ctx.fill();
      });

      // 3. Connect nodes with dynamic signal vectors
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isLight ? 0.15 : 0.2);
            ctx.beginPath();
            ctx.strokeStyle = isLight
              ? `rgba(99, 102, 241, ${alpha})`
              : `rgba(99, 102, 241, ${alpha * 1.3})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Occasionally spawn a moving telemetry signal packet along active conduits
            if (packets.length < maxPackets && Math.random() < 0.003) {
              packets.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: Math.random() * 0.02 + 0.01,
                color: Math.random() > 0.5 ? '#38BDF8' : '#818CF8'
              });
            }
          }
        }
      }

      // 4. Draw & advance active telemetry signal packets
      for (let pIdx = packets.length - 1; pIdx >= 0; pIdx--) {
        const pkt = packets[pIdx];
        pkt.progress += pkt.speed;

        const p1 = particles[pkt.fromIdx];
        const p2 = particles[pkt.toIdx];

        if (!p1 || !p2 || pkt.progress >= 1) {
          packets.splice(pIdx, 1);
          continue;
        }

        const curX = p1.x + (p2.x - p1.x) * pkt.progress;
        const curY = p1.y + (p2.y - p1.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = isLight ? 4 : 8;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      // 5. Update and render particles with cursor gravity
      const mouse = mouseRef.current;
      particles.forEach((p) => {
        p.pulsePhase += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;

        // Interactive mouse gravity
        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 160 && mDist > 0) {
            const force = (160 - mDist) / 160;
            p.x -= (mdx / mDist) * force * 1.5;
            p.y -= (mdy / mDist) * force * 1.5;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.radius, 0.8), 0, Math.PI * 2);
        ctx.fillStyle = p.color + (isLight ? '0.75)' : '0.85)');
        ctx.shadowColor = p.color + '0.5)';
        ctx.shadowBlur = isLight ? 3 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLight]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated canvas video effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Cybernetic geometric scanline grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Top & Bottom Vignette Transitions */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07090E] light:from-[#F8FAFC] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090E] light:from-[#F8FAFC] to-transparent pointer-events-none" />
    </div>
  );
};
