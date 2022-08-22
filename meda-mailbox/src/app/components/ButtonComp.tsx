import { ButtonCompInterface } from "../common/interfaces/";


export function ButtonComp(props: ButtonCompInterface) {
  return (
    <button onClick={ props.handleClick }>
      { props.text }
    </button>
  );
}