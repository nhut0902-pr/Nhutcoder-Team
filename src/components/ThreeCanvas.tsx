"use client";
import React, { Suspense, Component, ErrorInfo, ReactNode } from 'react';
import Spline from '@splinetool/react-spline';

class SplineErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline Rendering Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-slate-900/20 rounded-3xl border border-teal-500/10 backdrop-blur-sm relative overflow-hidden group">
          {/* Decorative background for fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-pulse" />

          <div className="relative z-10 text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-[#16A394] to-[#F97316] p-[1px]">
               <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#16A394] animate-ping" />
               </div>
            </div>
            <div className="text-white font-black text-xl tracking-tighter mb-2 uppercase">Core Engine Stabilizing</div>
            <p className="text-slate-500 text-xs max-w-[200px] mx-auto leading-relaxed">
              We are optimizing the 3D experience for your device.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ThreeCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SplineErrorBoundary>
        <Suspense fallback={
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-teal-500/20 border-t-teal-500 rounded-full animate-spin" />
            <div className="text-[10px] font-mono text-teal-500 uppercase tracking-widest animate-pulse">Linking_Neural_Interface...</div>
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/0rw2a6Mqs81w2UIM4w7UhPc1/scene.splinecode"
          />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}
