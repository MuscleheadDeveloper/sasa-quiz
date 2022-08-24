import { Routes, Route, Link } from "react-router-dom";
import Start from "./Start";
export default function Restart() {
  return (
    <>
      <Routes>
        <Route path="/start" element={<Start />} />
      </Routes>

      <div className="start">
        <Link to="/start" className="startButton">
          {" "}
          Restart
        </Link>
      </div>
    </>
  );
}
