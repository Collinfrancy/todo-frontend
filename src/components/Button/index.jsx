import './button.css';
const Button = ({ onClick, children = 'Click', className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};
//hello
export default Button;
