function Hello(props) {
  function handleClick() {
    alert("hello click from a function");
  }

  return (
    <>
      <h1>
        heloooo {props.name}, you are {props.age} years old
      </h1>
      <button onClick={() => alert("hello world")}>click me</button>
      <br />
      <button onClick={handleClick}>click me again</button>
    </>
  );
}

export default Hello;
