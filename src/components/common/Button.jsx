import React from 'react';

/**
 * Reusable Button Component
 * Supports primary, secondary, outline, sm, and icon variants
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  download,
  target,
  rel,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const getButtonClass = () => {
    let classes = 'btn';
    if (variant === 'primary') classes += ' btn-primary';
    else if (variant === 'secondary') classes += ' btn-secondary';
    else if (variant === 'outline') classes += ' btn-outline';
    else if (variant === 'icon') classes += ' btn-icon';

    if (size === 'sm') classes += ' btn-sm';
    if (className) classes += ` ${className}`;
    return classes;
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={getButtonClass()}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
