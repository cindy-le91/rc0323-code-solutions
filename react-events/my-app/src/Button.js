import './Button.css'
export default function Button(props) {

  return (
    <button className={props.color} onClick={() => props.onCustomClick(props.text)}>
      {props.text}
    </button>
  );
}
