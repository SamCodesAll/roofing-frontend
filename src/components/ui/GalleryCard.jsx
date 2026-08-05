import { memo } from 'react';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';

/**
 * <GalleryCard image="/img.jpg" title="Metal Roof — Ocala, FL" category="Roof Replacement" onClick={...} />
 */
const GalleryCard = ({ image, title, category, onClick, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative block w-full overflow-hidden rounded-xl border border-[var(--color-border)] text-left ${className}`}
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[var(--color-primary-900)]/80 via-[var(--color-primary-900)]/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {category && (
        <span className="mb-1 inline-block w-fit rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
          {category}
        </span>
      )}
      {title && <span className="font-heading font-bold text-white text-sm">{title}</span>}
    </div>
    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--color-primary-600)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <HiMagnifyingGlassPlus />
    </span>
  </button>
);

export default memo(GalleryCard);
