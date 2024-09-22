import React, { useEffect, useRef, useState } from "react";

const Personalizar = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500 * 2;
    canvas.height = 500 * 2;
    canvas.style.width = `${500}px`;
    canvas.style.height = `${500}px`;
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (isDrawing) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "#ededed"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const descargarCanvas = () => {
    const canvas = canvasRef.current;
    const extension = canvas.toDataURL("image/png");
    const descargar = document.createElement("a");
    descargar.download = "Mochila-logan-personalizado.png";
    descargar.href = extension;
    descargar.click();
  }

  return (
    <>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        style={{ background: "#ededed" }}
        ref={canvasRef}
        width={600}
        height={600}
      />
      <button onClick={clearCanvas}>Borrar</button>
      <button onClick={descargarCanvas}>Descargar</button>
    </>
  );
};

export default Personalizar;
