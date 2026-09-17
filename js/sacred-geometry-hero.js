/**
 * Sacred Geometry & Futuristic Architectural Wireframe Canvas
 * VASTUSHED Hero Interactive Background
 */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let mouse = { x: null, y: null, targetX: 0, targetY: 0 };
  let angle = 0;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const count = Math.floor(Math.min(width, height) / 18);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(229, 185, 92,' : 'rgba(56, 189, 248,',
        alpha: Math.random() * 0.5 + 0.15
      });
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();

  function drawSacredRings(cx, cy, radius, rot) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);

    // Outer Concentric Circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 16-Segment Compass Ticks
    const segments = 16;
    for (let i = 0; i < segments; i++) {
      const a = (i * Math.PI * 2) / segments;
      const x1 = Math.cos(a) * (radius - 10);
      const y1 = Math.sin(a) * (radius - 10);
      const x2 = Math.cos(a) * radius;
      const y2 = Math.sin(a) * radius;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = i % 4 === 0 ? 'rgba(229, 185, 92, 0.6)' : 'rgba(229, 185, 92, 0.2)';
      ctx.lineWidth = i % 4 === 0 ? 1.5 : 1;
      ctx.stroke();
    }

    // Inner Concentric Circle
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.72, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Ancient Intersecting Sacred Triangles (Sri Yantra & Vastu Geometries)
    const triRadius = radius * 0.72;
    for (let t = 0; t < 4; t++) {
      const offset = (t * Math.PI) / 2 + (t % 2 === 0 ? 0 : Math.PI / 4);
      ctx.beginPath();
      for (let j = 0; j < 3; j++) {
        const theta = offset + (j * 2 * Math.PI) / 3;
        const tx = Math.cos(theta) * triRadius;
        const ty = Math.sin(theta) * triRadius;
        if (j === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.closePath();
      ctx.strokeStyle = t % 2 === 0 ? 'rgba(229, 185, 92, 0.22)' : 'rgba(200, 99, 58, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Parametric Architectural 9x9 Vastu Grid in Center
    const gridSize = radius * 0.45;
    const step = (gridSize * 2) / 6;
    ctx.strokeStyle = 'rgba(229, 185, 92, 0.15)';
    ctx.lineWidth = 0.8;
    for (let x = -gridSize; x <= gridSize; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, -gridSize);
      ctx.lineTo(x, gridSize);
      ctx.stroke();
    }
    for (let y = -gridSize; y <= gridSize; y += step) {
      ctx.beginPath();
      ctx.moveTo(-gridSize, y);
      ctx.lineTo(gridSize, y);
      ctx.stroke();
    }

    // Core Brahma Sthana (Center Sacred Point)
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#e5b95c';
    ctx.fill();
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#e5b95c';
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  function drawParametricElevation(cx, cy, rot) {
    ctx.save();
    ctx.translate(cx, cy);

    // Futuristic Architectural Wireframe Silhouette
    ctx.beginPath();
    const cols = 12;
    const span = Math.min(width * 0.7, 700);
    const startX = -span / 2;
    const dx = span / cols;

    for (let i = 0; i <= cols; i++) {
      const px = startX + i * dx;
      const h = Math.sin(i * 0.6 + rot * 2) * 45 + Math.cos(i * 0.3) * 60 + 130;
      
      // Vertical Mullion Line
      ctx.moveTo(px, 260);
      ctx.lineTo(px, 260 - h);

      // Floor slab cross connects
      if (i > 0) {
        const prevPx = startX + (i - 1) * dx;
        const prevH = Math.sin((i - 1) * 0.6 + rot * 2) * 45 + Math.cos((i - 1) * 0.3) * 60 + 130;
        ctx.moveTo(prevPx, 260 - prevH * 0.5);
        ctx.lineTo(px, 260 - h * 0.5);
        ctx.moveTo(prevPx, 260 - prevH);
        ctx.lineTo(px, 260 - h);
      }
    }
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Smooth cursor interpolation
    if (mouse.x !== null) {
      mouse.targetX += (mouse.x - mouse.targetX) * 0.04;
      mouse.targetY += (mouse.y - mouse.targetY) * 0.04;
    }

    angle += 0.0015;

    // Draw cosmic energy particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();
    });

    // Center of Sacred Matrix
    const centerX = width > 1024 ? width * 0.68 : width / 2;
    const centerY = height * 0.52;
    const responsiveRadius = Math.min(width, height) * 0.38;

    // Shift slightly toward cursor for 3D parallax depth
    const shiftX = (mouse.targetX - width / 2) * 0.03;
    const shiftY = (mouse.targetY - height / 2) * 0.03;

    drawSacredRings(centerX + shiftX, centerY + shiftY, responsiveRadius, angle);
    drawSacredRings(centerX + shiftX, centerY + shiftY, responsiveRadius * 0.6, -angle * 1.5);
    drawParametricElevation(centerX + shiftX, centerY + shiftY, angle);

    requestAnimationFrame(animate);
  }

  animate();
})();
