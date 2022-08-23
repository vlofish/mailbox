export function CheckboxGroupComp() {
  return(
    <>
      How u felt?
      <input type="radio" id="sad" name="mailbox_feeling" value="Sad" />
      <label>SAD</label>

      <input type="radio" id="happy" name="mailbox_feeling" value="Happy" />
      <label>Happy</label>
      <br />
    </>
  );
}