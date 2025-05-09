export function Button({ variant = 'default', size = 'default', children, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium';
  const variantStyles = {
    default: ' globalButton text-white hover:bg-blue-700',
    outline: ' globalButton bg-transparent hover:bg-gray-100',
    ghost: 'bg-transparent globalButton hover:bg-gray-100',
  };
  const sizeStyles = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1 text-xs',
  };

  return (
    <button
      className="globalButton"
      {...props}
    >
      {children}
    </button>
  );
}