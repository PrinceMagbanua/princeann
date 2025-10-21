import { useEffect, useRef, useState } from "react";
import musicSrc from "@/assets/music/collide-howie-day-instrumental.mp3";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.loop = true;

    const detectAutoplay = async () => {
      if (!audioRef.current) return;
      // Try to autoplay with sound. If it fails, we'll show the overlay to request user input.
      try {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.1;
        await audioRef.current.play();
        setShowOverlay(false);
      } catch {
        // Autoplay is blocked; require a user gesture via the splash.
        setShowOverlay(true);
      }
    };

    const timeoutId = window.setTimeout(detectAutoplay, 600);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleStart = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = false;
    audioRef.current.volume = 0.1;
    audioRef.current.play().then(() => {
      setShowOverlay(false);
      setIsMuted(false);
    }).catch(() => {
      // If still blocked, keep overlay visible
      setShowOverlay(true);
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <audio ref={audioRef} src={musicSrc} preload="auto" />
      {/* Fixed mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed top-4 right-4 z-[10000] inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 text-foreground shadow-md ring-1 ring-black/10 backdrop-blur hover:bg-white"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
      {showOverlay && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm opacity-0 animate-fade-in"
          onClick={handleStart}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleStart(); }}
          role="button"
          tabIndex={0}
          aria-label="Enter site"
        >
          <div className="mx-6 max-w-md rounded-xl bg-white/10 p-8 text-center text-white shadow-2xl ring-1 ring-white/20 opacity-0 animate-fade-in">
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80 animate-fade-in" style={{ animationDelay: "100ms" }}>Welcome</div>
            <h1 className="mb-5 text-3xl font-semibold tracking-wide animate-fade-in" style={{ animationDelay: "180ms" }}>Prince & Ann</h1>
            <div className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-black transition-colors hover:bg-white animate-fade-in" style={{ animationDelay: "260ms" }}>
              Enter
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;


