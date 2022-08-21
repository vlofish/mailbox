import { ButtonCompInterface } from "../common/interfaces/componentsInterfaces";


export function ButtonComp(props: ButtonCompInterface) {
  return (
    <button>
      { props.text }
    </button>
  );
}