"use client";
import React, { useRef, useEffect } from 'react';

interface VideoSectionProps {
  src: string;
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ src, className }) => {
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
        <video
          ref={videoRef}
          className={className}
          loop
          muted
          autoPlay
          playsInline
         
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
  );
};

export default VideoSection;