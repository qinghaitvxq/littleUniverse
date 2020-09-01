import React, { useState, useEffect, useRef } from "react";
// import "antd/lib/button/style/index.css";
// import "antd/dist/antd.css";
import "./index.scss";

function DrawImageCenter({ imageUrl, onDrawComplete, style, center }) {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  let canvasEl = useRef(null);
  let containerEl = useRef(null);

  const drawCenter = (x, y) => {
    const ctx = canvasEl.current.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);

    ctx.strokeStyle = "#FF8C00";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
      setCanvasByImg(img);
    };
  }, [imageWidth]);

  useEffect(() => {
    drawCenter(centerX, centerY);
  }, [centerX, centerY]);

  const setCanvasByImg = (img) => {
    const containerWidth = containerEl.current.offsetWidth;
    const imgWHRatio = img.width / img.height;
    const containerHeight = containerWidth / imgWHRatio;
    setCanvasWidth(containerWidth);
    setCanvasHeight(containerHeight);
    setCenterX(center.x);
    setCenterY(center.y);
  };

  const getCenter = (evt) => {
    const rect = evt.target.getBoundingClientRect();
    const x = evt.clientX - rect.left; // x position within the element.
    const y = evt.clientY - rect.top; // y position within the element.
    setCenterX(x);
    setCenterY(y);
    onDrawComplete({
      width: imageWidth,
      height: imageHeight,
      centerX,
      centerY,
    });
  };

  return (
    <div
      style={style}
      ref={containerEl}
      onClick={getCenter}
      className="lu-drawcenter-container"
    >
      <div style={{ position: "relative" }}>
        <img src={imageUrl} width="100%" />
        <canvas
          className="lu-canvas-center"
          ref={canvasEl}
          width={canvasWidth}
          height={canvasHeight}
        />
      </div>
    </div>
  );
}

export default DrawImageCenter;
