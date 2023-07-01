// - Create three button with text `Arya`, `John` and `Bran`
// - When clicked on any button alert message with the name like `Hello Arya|John|Bran`
// - Don't write three different click handler function
// - One function should be able to handle this.

function QuestionThree() {
  return (
    <>
      <div>
        {['Arya', 'John', 'Bran'].map((name) => (
          <button onClick={() => handleName(name)} key={name}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
}
function handleName(name) {
  alert(`hello ${name}`);
}

export default QuestionThree;
