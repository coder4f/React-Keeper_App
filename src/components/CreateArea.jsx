import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.addNote(inputText);
    setInputText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={inputText.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
