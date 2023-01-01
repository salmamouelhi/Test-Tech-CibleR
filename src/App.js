import React, {useState} from 'react';
import './App.css';
import Landing from "./components/Landing";
import Validation from "./components/Validation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CiblerContext, initCiblerContext,
  fetchPartner,
  saveContext, getImagePath,
} from "./tools/toolbox";
import NoBudget from './components/Validation';

function App() {
  const [screen, setScreen] = useState('landing');
  const [loaded, setLoaded] = useState(false);

  React.useEffect(() => {
    if (!CiblerContext().endpoint) {
      initCiblerContext();

      fetchPartner().then(() => {
        setLoaded(true);
      });
    }
  })

  const router = {
    landing: Landing,
    validation: Validation,
  }

  const handleChangeScreen = (screen) => {
    CiblerContext().currentScreen = screen;
    saveContext();
    setScreen(screen);
  }

  const Component = router[screen];
  return (
    <div className="appBackground">
      <div className={`app ${screen}`}>
        {loaded &&
          <>
            <Component
              setScreen={handleChangeScreen}
            />
          </>
        }
      </div>
    </div>
  );

  
}

export default App;
