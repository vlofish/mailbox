export function TextareaComp(props: {title: string, handleChange?: any}) {
  return(
    <>
      <p> { props.title } </p>
      <textarea onChange={props.handleChange}></textarea>
    </>
  );
}