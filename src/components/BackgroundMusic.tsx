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

    audioElement.volume = 0.1;
    audioElement.loop = true;

    const tryPlay = () => {
      if (!audioRef.current) return;
      const playAttempt = audioRef.current.play();
      if (playAttempt && typeof (playAttempt as Promise<void>).then === "function") {
        (playAttempt as Promise<void>).catch(() => {
          // Autoplay blocked – show overlay to request a user gesture
          setShowOverlay(true);
        });
      }
    };

    const timeoutId = window.setTimeout(tryPlay, 2000);

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
    audioRef.current.volume = 0.1;
    audioRef.current.play().then(() => {
      setShowOverlay(false);
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleStart}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleStart(); }}
          role="button"
          tabIndex={0}
          aria-label="Enter site"
        >
          <div className="mx-6 max-w-md rounded-xl bg-white/10 p-8 text-center text-white shadow-2xl ring-1 ring-white/20">
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">Welcome</div>
            <h1 className="mb-5 text-3xl font-semibold tracking-wide">Prince & Ann</h1>
            <div className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-black transition-colors hover:bg-white">
              Enter
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;


