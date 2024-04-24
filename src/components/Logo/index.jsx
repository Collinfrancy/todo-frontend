import './logo.css';

const Logo = ({ onClick, completed }) => {
  return (
    <div className="logo">
      <h1>
        TODO <span>LIST</span>
      </h1>{' '}
      {completed == 'true' ? (
        <div className="logo1">
          <h5 onClick={onClick}>Create a Newproject</h5>
          <i class="fa-solid fa-plus"></i>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Logo;
