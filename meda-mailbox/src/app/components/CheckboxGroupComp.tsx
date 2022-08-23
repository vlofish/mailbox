export function CheckboxGroupComp(props: any) {
  return(
    <div onChange={ props.handleChange }>
      <label>Tell us how you felt using our mailbox?</label>
      <input type="radio" id="dissapointed" name="mailbox_feeling" value="dissapointed" />
      <label> Dissapointed </label>

      <input type="radio" id="ok" name="mailbox_feeling" value="ok" />
      <label> Ok </label>

      <input type="radio" id="happy" name="mailbox_feeling" value="happy" />
      <label> Happy </label>
    </div>
  );
}