import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.length == 0 || values.length < 6) {
      setError(true);
    }
    if (values === "sasaisfun") {
      window.location.replace = "";
    }
  };

  return (
    <div className="start">
      <form>
        <input
          className="startInput"
          placeholder="what's the code"
          onChange={(e) => setValues(e.target.value)}
        />
        {error && values.length <= 0 ? (
          <label>Password can't be Empty</label>
        ) : (
          ""
        )}
        <button onClick={handleSubmit} className="startButton">
          Submit
        </button>
      </form>
    </div>
  );
}
