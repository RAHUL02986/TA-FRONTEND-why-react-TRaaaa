let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];
//   ```

//   - Map over the data and create button for each
//   - Each button should have different text based on the value
//   - When user clicks on the button display the name of fruit in `alert`
//   - Don't forget to use `key` when you are using `map` on array

function QuestionFour() {
  return (
    <>
      {fruits.map((fruit) => (
        <button onClick={() => handleClick(fruit.value)} key={fruit.id}>
          {fruit.value}
        </button>
      ))}
    </>
  );
}
function handleClick(value) {
  alert(`hello ${value}`);
}

export default QuestionFour;