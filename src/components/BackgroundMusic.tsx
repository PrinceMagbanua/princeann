import { useEffect, useRef, useState } from "react";
import musicSrc from "@/assets/music/collide-howie-day-instrumental.mp3";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [overlayClosing, setOverlayClosing] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);
  const [rippleScaled, setRippleScaled] = useState(false);

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
      // play ripple + fade overlay, then remove it after animation
      setOverlayClosing(true);
      setRippleActive(true);
      // next frame -> scale up (enables CSS transition)
      requestAnimationFrame(() => setRippleScaled(true));
      window.setTimeout(() => {
        setShowOverlay(false);
        setOverlayClosing(false);
        setRippleActive(false);
        setRippleScaled(false);
      }, 700);
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
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${overlayClosing ? "opacity-0" : "opacity-100"}`}
          onClick={handleStart}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleStart(); }}
          role="button"
          tabIndex={0}
          aria-label="Enter site"
        >
          <div className="mx-6 max-w-md rounded-xl bg-white/10 p-8 text-center text-white shadow-2xl ring-1 ring-white/20 transition-opacity duration-500">
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">Welcome</div>
            <h1 className="mb-5 text-3xl font-semibold tracking-wide">Prince & Ann</h1>
            <div className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-black transition-colors hover:bg-white">
              Enter
            </div>
          </div>
        </div>
      )}

      {rippleActive && (
        <div className="pointer-events-none fixed inset-0 z-[10001]">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "200vmax",
              height: "200vmax",
              backgroundImage: "radial-gradient(circle, hsl(var(--primary)/0.18) 0%, hsl(var(--primary)/0.12) 35%, hsl(var(--primary)/0) 70%)",
              transform: `translate(-50%, -50%) scale(${rippleScaled ? 1 : 0})`,
              transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease-out",
              opacity: rippleScaled ? 0 : 1,
            }}
          />
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;


