const SIZE = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
};

const Spinner = ({ size = 'md', inverted = false, className = '' }) => (
  <span
    role="status"
    aria-label="Loading"
    className={`inline-block animate-spin rounded-full ${SIZE[size]} ${
      inverted
        ? 'border-white/30 border-t-white'
        : 'border-[var(--color-border)] border-t-[var(--color-primary-500)]'
    } ${className}`}
  />
);

export default Spinner;
