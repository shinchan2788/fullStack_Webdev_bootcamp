import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notestext from "..notes/";
function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {Notestext.map(notecard => 
      <Note 
      key={notecard.id}
      title={notecard.title}
      context={notecard.context} />
      )};
      <Footer />
    </div>
  );
}

export default App;
