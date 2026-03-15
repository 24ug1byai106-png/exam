"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollyCanvasProps {
  frameCount: number;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ frameCount = 192 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
        imagePromises.push(
          new Promise<HTMLImageElement>((resolve) => {
            img.onload = () => resolve(img);
          })
        );
      }

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, [frameCount]);

  // Draw to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || images.length === 0) return;

      const currentFrame = Math.round(frameIndex.get());
      const img = images[currentFrame] || images[0];

      // Handle object-fit: cover logic
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const imageWidth = img.width;
      const imageHeight = img.height;
      const ratio = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
      const newWidth = imageWidth * ratio;
      const newHeight = imageHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, newWidth, newHeight);
    };

    const unsubscribe = frameIndex.on("change", render);
    // Initial render
    if (!isLoading) render();

    window.addEventListener("resize", render);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [images, frameIndex, isLoading]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/20 text-sm font-light tracking-widest uppercase"
            >
              Loading Sequence...
            </motion.div>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};
