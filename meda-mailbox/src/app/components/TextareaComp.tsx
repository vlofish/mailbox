export function TextareaComp(props: {title: string, handleChange?: any}) {
  return(
    <div>
      <label> { props.title } </label>
      <div>
        <textarea onChange={props.handleChange}></textarea>
      </div>
    </div>
  );
}