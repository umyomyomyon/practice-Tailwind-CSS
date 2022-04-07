import { useState } from "react";

import "./App.css";

import Container from "./components/Container";
import Button from "./components/Button";
import ListContainer from "./components/contents/ListContainer";

const App: React.FC = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleListButtonClick = () => setIsListOpen(!isListOpen);
  const handleCardButtonClick = () => setIsCardOpen(!isCardOpen);

  return (
    <div className="App">
      <header className="App-header">
        <Container justify="center">
          <Button text="List" onClick={handleListButtonClick} />
          <Button text="Card" onClick={handleCardButtonClick} />
        </Container>
        {isListOpen && <ListContainer />}
      </header>
    </div>
  );
};

export default App;
