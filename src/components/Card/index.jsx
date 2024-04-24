import './Card.css';

const Card = props => {
  return (
    <div className="Card">
      <p>{props.item.todo}</p>
      {props.completed ? (
        ' '
      ) : (
        <button onClick={props.onClick}>{props.bute}</button>
      )}
      <div className="font">
        <i className="fa-solid fa-pen-to-square" onClick={props.update}></i>
        <i className="fa-solid fa-trash" onClick={props.trash}></i>
      </div>
    </div>
  );
};

export default Card;
