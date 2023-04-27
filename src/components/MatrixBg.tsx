import React, { useRef, useEffect } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const matrix =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
    const matrixChars = matrix.split('');
    const font_size = 16;
    const columns = canvas.width / font_size;
    const drops: any = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00eeff';
      ctx.font = font_size + 'px arial';

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    const intervalId = setInterval(() => draw(), 40);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-100 absolute opacity-50 bg-[#090f29]"
    />
  );
};

export default MatrixRain;
