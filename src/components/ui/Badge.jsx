const VARIANT_CLASS = {
  trust: 'badge-trust',
  primary: 'badge-primary',
  accent: 'badge-accent',
  emergency: 'badge-emergency',
};

const Badge = ({ variant = 'primary', icon, children, className = '' }) => (
  <span className={`badge ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`}>
    {icon}
    {children}
  </span>
);

export default Badge;
