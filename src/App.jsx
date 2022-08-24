import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Restart from "./components/Restart";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is a SASA Astronaut called?",
      answers: [
        {
          text: "Astronomer",
          correct: false,
        },
        {
          text: "Sastronaut",
          correct: true,
        },
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "SasaMan",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "SASA wants us to have the heart of a ______?",
      answers: [
        {
          text: "Lion",
          correct: true,
        },
        {
          text: "Racoon",
          correct: false,
        },
        {
          text: "Beaver",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who invented the Heliocentric Telescope?",
      answers: [
        {
          text: "Mr. Obinna",
          correct: false,
        },
        {
          text: "Mr. Richard",
          correct: false,
        },
        {
          text: "The Director",
          correct: false,
        },
        {
          text: "Galileo Galilay",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <>
      <div className="app">
        {!username ? (
          <Start setUsername={setUsername} />
        ) : (
          <>
            <div className="main">
              {timeOut ? (
                <h1 className="endText">You earned: {earned}</h1>
              ) : (
                <>
                  <div className="top">
                    {/* <div className="restart">
                      <Restart />
                    </div> */}
                    <div className="timer">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
