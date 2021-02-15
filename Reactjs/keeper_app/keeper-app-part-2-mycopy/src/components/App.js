import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map(notetile => 
      <Note 
        key={notetile.key}
        title={notetile.title}
        content={notetile.content} />)}
      <Footer />
    </div>
  );
}

export default App;
