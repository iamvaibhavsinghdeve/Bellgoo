import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  /** start muted so autoplay is allowed by browsers */
  autoPlay?: boolean;
  loop?: boolean;
}

/**
 * Luxury video player with custom play / pause / mute / unmute controls.
 * Designed to drop in anywhere an iframe used to live.
 *
 * NOTE: The current source files are converted from animated WebPs and have
 * no audio track, so toggling mute/unmute is a no-op audibly — but the
 * controls are still functional on the underlying <video> element.
 */
export const VideoPlayer = ({
  src,
  poster,
  title,
  className = "",
  autoPlay = true,
  loop = true,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // Keep state in sync with native events (e.g. ended, external pause)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {
        /* autoplay blocked — user action will succeed next tap */
      });
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div
      className={`relative w-full h-full group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => setShowControls((s) => !s)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        autoPlay={autoPlay}
        loop={loop}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* gradient overlay so controls stay legible over any frame */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* control bar */}
      <div
        className={`absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 transition-all duration-300 ${
          showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition flex items-center justify-center"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition flex items-center justify-center"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* big center-play hint while paused (and controls hidden) */}
      {!isPlaying && !showControls && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-gold/50 text-gold flex items-center justify-center hover:scale-110 transition">
            <Play size={24} className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
