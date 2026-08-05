import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  outlineInverse: 'btn-outline-inverse',
  ghost: 'btn-ghost',
};

const SIZE_CLASS = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

/**
 * <Button to="/contact">...</Button>          -> internal React Router Link
 * <Button href="tel:+1...">...</Button>        -> external/native anchor
 * <Button onClick={...}>...</Button>           -> button element
 *
 * variant: primary | secondary | outline | outlineInverse | ghost
 * size: sm | md | lg
 */
const Button = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = `btn ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${SIZE_CLASS[size]} ${className} ${
    disabled || loading ? 'opacity-60 pointer-events-none' : ''
  }`;

  const content = (
    <>
      {loading ? <Spinner size="sm" inverted={variant === 'primary' || variant === 'secondary'} /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
};

export default Button;
