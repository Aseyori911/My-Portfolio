"use client";

import { useEffect } from "react";

const ThreeInitializer = () => {
  useEffect(() => {
    const initThree = async () => {
      const { initBackground } = await import('../lib/threeBackground');
      initBackground();
    };
    initThree();
  }, []);

  return null;
};

export default ThreeInitializer;
