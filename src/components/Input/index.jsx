import './input.css';
const Input = ({
  className = '',
  type = 'text',
  onChange,
  onKeyDown,
  placeholder,
}) => {
  return (
    <input
      className={`custom-input ${className}`}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;
