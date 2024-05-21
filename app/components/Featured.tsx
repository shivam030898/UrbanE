"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MovingTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    if (!textElement) return;

    // GSAP animation timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Animation loop with easing
    tl.fromTo(
      textElement,
      { x: "-50%" },
      { x: "100%", duration: 10, ease: "power1.inOut", repeat: -10 }
    );

    return () => {
      tl.kill(); // Cleanup animation on unmount
    };
  }, []);

  return (
    <div className="bg-yellow-400 border-t-8 border-b-8 border-black ">
      <motion.div
        ref={textRef}
        className="text-black font-extrabold text-9xl whitespace-nowrap overflow-hidden text-center bg-yellow-400 w-full uppercase"
      >
        Slay in your Drip
      </motion.div>
    </div>
  );
};

export default MovingTextAnimation;
