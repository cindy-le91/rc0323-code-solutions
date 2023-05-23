import './Button.css'
export default function Button(props) {
  console.log(props.text)
  return (
    <button className={props.color}>
     {props.text}
    </button>
  );
}
