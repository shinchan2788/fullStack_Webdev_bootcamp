import React from "react";
import emojipedia from "../emojipedia";
import Dict from "./dictionary";
function createcard(emojipedia){
  return(
  
    <Dict 
    key={emojipedia.id}
    emoji= {emojipedia.emoji}
    name ={emojipedia.name}
    meaning={emojipedia.meaning}
    />
  
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
        {emojipedia.map(createcard)}
      </dl>
      
    </div>
  );
}

export default App;
