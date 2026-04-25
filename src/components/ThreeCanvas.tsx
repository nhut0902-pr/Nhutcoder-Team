"use client";
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function ThreeCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Suspense fallback={<div className="text-teal-500">Loading 3D...</div>}>
        <Spline
          scene="https://prod.spline.design/0rw2a6Mqs81w2UIM4w7UhPc1/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
