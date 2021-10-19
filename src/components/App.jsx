import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(object => {
        return (
          <Note 
          key={object.key}
          title={object.title}
          content={object.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;