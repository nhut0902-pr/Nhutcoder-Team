"use client";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/4f26ebce-8bcd-43f5-87d8-e6f4373ceb0a/cbCFUC4JJA.lottie"
        loop
        autoplay
        className="w-full h-full max-w-2xl"
      />
    </div>
  );
}
