export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  type = "button",
  className = ""
}) {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}