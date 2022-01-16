import "./App.css";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  const { appState } = useSelector(({ quiz }) => {
    return {
      appState: quiz.appState,
    };
  });
  return (
    <div className="App">
      {appState === "initial" && <Home />}
      {appState === "instructions" && <Instructions />}
      {appState === "quizStarted" && <Quiz />}
      {appState === "quizEnded" && <Result />}
    </div>
  );
};

export default App;
