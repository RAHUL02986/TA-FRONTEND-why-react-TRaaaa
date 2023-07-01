// - Create another button with text `How can I help you?`
// - Handle a event of type `click`
// - When user clicks `alert` three different messages as given below
//   - To learn React use https://reactjs.org
//   - React and ReactDOM works together
//   - Babel helps in writing JSX

function QuestionTwo() {
  return (
    <>
      <h2>This is Second Message!</h2>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}
function handleClick(event) {
  alert(`            To learn React use https://reactjs.org
  React and ReactDOM works together
  Babel helps in writing JSX
`);
}

export default QuestionTwo;