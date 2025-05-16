export function Button({ variant = 'default', size = 'default', children, asChild = false, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium';
  const variantStyles = {
    default: 'globalButton text-white hover:bg-blue-700',
    outline: 'globalButton bg-transparent hover:bg-gray-100',
    ghost: 'bg-transparent globalButton hover:bg-gray-100',
  };
  const sizeStyles = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1 text-xs',
  };

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (asChild) {
    const Comp = props.as || 'button';
    return <Comp className={className} {...props}>{children}</Comp>;
  }

  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}