import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Journal from "./features/journal/Journal";
import Quote from "./features/quote/Quote";
import NextButton from "./features/backgroundImage/components/NextButton";
import PreviousButton from "./features/backgroundImage/components/PreviousButton";

function App() {
  return (
    <div>
      <BackgroundImage>
        <header>
          <Weather />
        </header>
        <main>
          <aside>
            <PreviousButton />
          </aside>
          <Journal />
          <aside>
            <NextButton />
          </aside>
        </main>
        <footer>
          <Quote />
        </footer>
      </BackgroundImage>
    </div>
  );
}

export default App;
