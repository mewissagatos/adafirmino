import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // Unmute: ensure video is playing first
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {
        // Browser blocked — keep muted
        video.muted = true;
        return;
      });
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
    setHasInteracted(true);
  };

  return (
    <section className="w-full overflow-hidden bg-secundaria relative" aria-label="Vídeo institucional">
      <video
        ref={videoRef}
        src="/FOTOS/ADASITE.mp4"
        loop
        playsInline
        preload="metadata"
        muted
        className="w-full h-auto max-h-[90vh] object-cover block"
      />

      {/* Botão de som */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        className="absolute bottom-5 right-5 z-10 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-xs font-corpo tracking-widest uppercase px-4 py-2 transition-all duration-300 backdrop-blur-sm"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        {isMuted ? 'Ativar som' : 'Desativar som'}
      </button>
    </section>
  );
};

export default VideoSection;
