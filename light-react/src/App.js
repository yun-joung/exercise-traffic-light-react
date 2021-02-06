import './App.scss';
import React, {useState} from "react";

function App() {
  const [state, setState] = useState(" ");


    return (
        <div className="background1">
        <div className="background2">
          <div className={`red light + ${state==='red'? "selected" : " "}`} onClick = {()=>setState("red")}></div>
          <div className={`yellow light + ${state==='yellow'? "selected" : " "}`} onClick = {()=>setState("yellow")}></div>
          <div className={`green light + ${state==='green'? "selected" : " "}`} onClick = {()=>setState("green")}></div>
        </div>
      </div>
    );
}

export default App;
