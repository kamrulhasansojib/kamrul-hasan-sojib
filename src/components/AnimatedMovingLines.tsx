import React, { useEffect, useRef } from "react";

export const AnimatedMovingLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width =
      canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height =
      canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    let time = 0;
    const lineCount = 60; // Dense stream of parallel contour lines like the image

    const render = () => {
      time += 0.008; // Smooth motion speed
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1.0;

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();

        const t = i / (lineCount - 1); // 0 to 1 across the bundle

        // Dynamic pinch and fan out offset for the ribbon shape
        const spreadFactor = Math.sin(t * Math.PI) * 0.8 + 0.2;

        // Color selection matching the rich indigo/purple/cyan palette in the image
        const alpha = Math.max(
          0.03,
          (0.12 + Math.sin(time * 0.5 + t * 4) * 0.05) *
            (1 - Math.abs(t - 0.5) * 1.2),
        );

        if (i % 3 === 0) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 1.5})`; // Purple
        } else if (i % 3 === 1) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 1.4})`; // Indigo
        } else {
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 1.2})`; // Cyan
        }

        const pointsCount = 120;
        for (let j = 0; j <= pointsCount; j++) {
          const ratio = j / pointsCount; // 0 (left) to 1 (right)
          const x = ratio * width;

          // Main diagonal baseline sweeping down from top-left towards bottom-right
          const baseY = height * 0.05 + ratio * (height * 0.85);

          // S-curve deformation (concave to convex arc)
          const arc = Math.sin(ratio * Math.PI * 1.2) * (height * 0.3);

          // Ribbon thickness offset (pinches in the middle, fans out at ends)
          const offset =
            (t - 0.5) *
            (height * 0.45) *
            (0.6 + 0.8 * Math.sin(ratio * Math.PI));

          // Moving undulating wave simulation along each line
          const wave =
            Math.sin(ratio * 6 - time * 1.5 + i * 0.08) * (18 * spreadFactor) +
            Math.cos(ratio * 3 + time * 1.0) * 12;

          const y = baseY - arc + offset + wave;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
};
