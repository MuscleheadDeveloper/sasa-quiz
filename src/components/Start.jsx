import { useRef, useState } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(false);
  
  const handleClick = () => {
    if (password === "sasaisfun") {
      inputRef.current.value && setUsername(inputRef.current.value);
    } else {
      alert("INCORRECT CREDENTIALS");
    }
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <input
        className="startInput"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="what's the magic word?"
      />
      {/* {<p className={errorMessage? " errorMessage" : "errorMessageNot"} value={"INCORRECT CREDENTIALS"}> INCORRECT CREDENTIALS </p>} */}
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
