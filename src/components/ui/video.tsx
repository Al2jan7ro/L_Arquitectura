"use client";
import React, { useRef, useEffect } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          el?.play?.().catch(() => {/* noop: el usuario puede usar controles */});
        } else {
          el?.pause?.();
        }
      });
    }, options);

    const el = videoRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-6xl mx-auto">
        <video
          ref={videoRef}
          className="w-full md:h-[90vh] max-h-screen rounded-xl object-cover bg-black"
          loop
          muted
          autoPlay
          controls
          preload="auto"
          playsInline
          poster="/assets/video-poster.jpg"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          <source src="/assets/video2.webm" type="video/webm" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;