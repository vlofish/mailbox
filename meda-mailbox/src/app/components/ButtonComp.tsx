export function ButtonComp(props: {text: string, handleClick: any}) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}
