import { useEffect, useRef } from "react";

function drawAttractiveDesign1(ctx, width, height) {

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  const colors = ["red", "orange", "white", "green", "blue", "purple"];

  class Turtle {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.angle = 0; 
      this.ctx.lineWidth = 2; 
      this.ctx.strokeStyle = "white";
    }

    setColor(color) {
      this.ctx.strokeStyle = color;
    }

    setPenSize(size) {
      this.ctx.lineWidth = size;
    }

    right(deg) {
      this.angle += (deg * Math.PI) / 180;
    }

    forward(dist) {
      const startX = this.x;
      const startY = this.y;
      this.x += Math.cos(this.angle) * dist;
      this.y += Math.sin(this.angle) * dist;

      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(this.x, this.y);
      this.ctx.stroke();
    }
  }

  const pen = new Turtle(ctx, width / 2, height / 2); 
  pen.setPenSize(2);

  for (let i = 0; i < 180; i++) {
    pen.setColor(colors[i % 6]);
    pen.forward(200);
    pen.right(65);
    pen.forward(100);
    pen.right(120);
    pen.forward(100);
    pen.right(65);
    pen.forward(200);
    pen.right(181);
  }
}

export default function Statistic() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    drawAttractiveDesign1(ctx, canvas.width, canvas.height);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      style={{
        display: "block",
        margin: "0 auto",
        background: "black",
      }}
    />
  );
}
