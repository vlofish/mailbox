import TextareaAutosize from "@mui/material/TextareaAutosize";

export function TextareaComp(props: { placeholder: string, handleChange?: any }) {
  return (
    <TextareaAutosize
      onChange={props.handleChange}
      minRows={5}
      maxRows={10}
      aria-label="maximum height"
      placeholder={props.placeholder}
      style={{ width: 270 }}
    />
  );
}