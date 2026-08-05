import { FaGoogle, FaStar } from 'react-icons/fa6';
import { COMPANY } from '@data/company';
import { REVIEWS } from '@data/reviews';

const RatingSummary = () => {
  const total = REVIEWS.length;
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: REVIEWS.filter((r) => r.rating === star).length,
  }));

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] sm:grid-cols-2">
      <div className="text-center sm:border-r sm:border-[var(--color-border)]">
        <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)]">
          <FaGoogle />
          <span className="text-sm font-semibold">Google Rating</span>
        </div>
        <p className="mt-2 font-heading text-5xl font-extrabold text-[var(--color-primary-600)]">
          {COMPANY.rating}
        </p>
        <div className="mt-2 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(COMPANY.rating) ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-border)]'}
            />
          ))}
        </div>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Based on {COMPANY.reviewCount} reviews</p>
      </div>

      <div className="space-y-2">
        {counts.map(({ star, count }) => (
          <div key={star} className="flex items-center gap-2 text-sm">
            <span className="w-10 shrink-0 font-medium text-[var(--color-text-secondary)]">{star} star</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-bg-section)]">
              <div
                className="h-full rounded-full bg-[var(--color-accent-500)]"
                style={{ width: total ? `${(count / total) * 100}%` : '0%' }}
              />
            </div>
            <span className="w-6 shrink-0 text-right text-[var(--color-text-muted)]">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
