import { useCallback, useRef, useState } from 'react';
import { HiArrowsRightLeft } from 'react-icons/hi2';

/**
 * <BeforeAfterSlider before="/img-before.jpg" after="/img-after.jpg" alt="Roof replacement" />
 */
const BeforeAfterSlider = ({ before, after, alt = 'Before and after comparison', className = '' }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [width, setWidth] = useState(0);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setWidth(rect.width);
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;

    // Capture all pointer events while dragging
    e.currentTarget.setPointerCapture(e.pointerId);

    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const stopDragging = (e) => {
    draggingRef.current = false;

    if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className={`swiper-no-swiping relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl ${className}`}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      <img src={after} alt={`${alt} — after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />

      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          className="h-full max-w-none object-cover"
          style={{ width: width || '100%' }}
          draggable={false}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-[var(--color-primary-900)]/70 px-2.5 py-1 text-xs font-semibold text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-[var(--color-accent-500)]/90 px-2.5 py-1 text-xs font-semibold text-white">
        After
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 flex w-1 cursor-ew-resize touch-none items-center justify-center bg-white/90"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-primary-600)] shadow-md">
          <HiArrowsRightLeft className="text-sm" />
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
