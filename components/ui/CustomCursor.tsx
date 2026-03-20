"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 600, damping: 35 });
  const y = useSpring(rawY, { stiffness: 600, damping: 35 });

  useEffect(() => {
    // Only activate on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsFinePointer(true);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, [role='button']"));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, visible]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        scale: hovered ? 3 : 1,
        opacity: visible ? (hovered ? 0.5 : 0.85) : 0,
      }}
      transition={{ scale: { duration: 0.25 }, opacity: { duration: 0.2 } }}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
    />
  );
}
