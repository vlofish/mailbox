import { ButtonCompInterface } from "../common/interfaces/";


export function ButtonComp(props: ButtonCompInterface) {
  return (
    <button>
      { props.text }
    </button>
  );
}