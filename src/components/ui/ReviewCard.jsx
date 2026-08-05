import { memo } from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa6';

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

/**
 * <ReviewCard name="John D." rating={5} date="2 weeks ago"
 *   text="Great crew, finished the replacement in a day." image="/optional-project-photo.jpg" />
 */
const ReviewCard = ({ name, rating = 5, date, text, image }) => (
  <div className="card h-full overflow-hidden flex flex-col">
    {image && (
      <img src={image} alt={`Project photo from ${name}'s review`} loading="lazy" className="h-40 w-full object-cover" />
    )}
    <div className="p-6 flex flex-1 flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-50)] font-heading font-bold text-[var(--color-primary-600)]">
          {initials(name)}
        </span>
        <div>
          <p className="font-heading font-bold text-sm text-[var(--color-text-primary)]">{name}</p>
          {date && <p className="text-xs text-[var(--color-text-muted)]">{date}</p>}
        </div>
        <FaGoogle className="ml-auto text-[var(--color-text-muted)]" aria-label="Google review" />
      </div>

      <div className="mt-3 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-border)]'}
          />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">&ldquo;{text}&rdquo;</p>
    </div>
  </div>
);

export default memo(ReviewCard);
