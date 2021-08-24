import { useSelector, useDispatch } from "react-redux";
import { scoreAction } from "./actions";
import Button from "./components/Button";
import Score from "./components/Score";

const App = () => {
  const dispatch = useDispatch();
  const { good, ok, bad } = useSelector(state => state);

  return (
    <div>
      <Button handleClick={() => dispatch(scoreAction("good"))} type="good" />
      <Button handleClick={() => dispatch(scoreAction("ok"))} type="ok" />
      <Button handleClick={() => dispatch(scoreAction("bad"))} type="bad" />
      <Button handleClick={() => dispatch(scoreAction("reset"))} type="reset" />
      <Score type="good" score={good} />
      <Score type="ok" score={ok} />
      <Score type="bad" score={bad} />
    </div>
  );
};

export default App;
