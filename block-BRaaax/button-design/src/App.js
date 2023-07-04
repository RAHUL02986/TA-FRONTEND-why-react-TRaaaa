import Button from './Button';
function App() {
  return (
    <>
      <Button label="click" />
      <Button label="Click Me" type="secondary" size="large" />
      <Button label="Click Me" type="tertiary" size="medium" />
      <Button />
      <Button disabled />
      <Button
        size="large"
        label="Button"
        type="tertiary"
        onClickHandler={() => alert('You Click Me!')}
      />
    </>
  );
}
export default App;
