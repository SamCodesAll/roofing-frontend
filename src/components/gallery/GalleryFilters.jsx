import { HiMagnifyingGlass, HiArrowsRightLeft } from 'react-icons/hi2';
import { GALLERY_CATEGORIES } from '@data/galleryCategories';

/**
 * <GalleryFilters
 *   activeCategory={activeCategory} onCategoryChange={setActiveCategory}
 *   search={search} onSearchChange={setSearch}
 *   compareMode={compareMode} onCompareModeChange={setCompareMode}
 * />
 */
const GalleryFilters = ({
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  compareMode,
  onCompareModeChange,
}) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat.key
                ? 'bg-[var(--color-primary-500)] text-white'
                : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary-300)]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => onCompareModeChange(!compareMode)}
        aria-pressed={compareMode}
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          compareMode
            ? 'bg-[var(--color-accent-500)] text-white'
            : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-300)]'
        }`}
      >
        <HiArrowsRightLeft />
        Before &amp; After
      </button>
    </div>

    <div className="relative max-w-sm">
      <HiMagnifyingGlass className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search projects, cities, or work type..."
        className="input-field pl-10"
        aria-label="Search gallery projects"
      />
    </div>
  </div>
);

export default GalleryFilters;
