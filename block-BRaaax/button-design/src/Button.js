function Button(props) {
  function getStyle() {
    let { type, size } = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <>
      <button
        onClick={props.onClickHandler}
        className={getStyle()}
        disabled={props.disabled}
      >
        {props.label || 'Button'}
      </button>
    </>
  );
}

export default Button;
