import React from 'react';
import './App.css';

const getNoteTitle = () => `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}\n---------------------------\n`;

function App() {
  const [notes, setNotes] = React.useState([getNoteTitle()]);
  const [activeNote, setActiveNote] = React.useState(0);
  const hasNotes = notes.length > 0;
  const isEditing = activeNote !== undefined;
  const editorRef = React.useRef();


  const createNote = () => {    
    const noteId = notes.length;
    setNotes((currentNotes) => [...currentNotes, getNoteTitle()])
    setActiveNote(noteId);
  }

  const clearNotes = () => {
    setNotes([]);
    setActiveNote(undefined);
  }

  const updateNote = (e) => {
    const currentNotes = [...notes];
    currentNotes.splice(activeNote, 1, e.target.value);
    setNotes(currentNotes);
  }

  return (
    <>
      <header>
        <h1>Note Taker</h1>
        <button onClick={createNote}>New Note</button>
        <button onClick={clearNotes}>Clear All Notes</button>
      </header>
      <div id="content">
        <nav>
          <ul>
            {
              notes.map((note, index) => <li><button onClick={() => setActiveNote(index)}>{note.substring(0,25).replace(/\n/g, ' ')}</button></li>)
            }
          </ul>
        </nav>
        <main>
          <textarea 
            onChange={isEditing ? updateNote : undefined}
            value={hasNotes && isEditing ? notes[activeNote] : 'Click to create a new note!'}
            onClick={hasNotes ? undefined : createNote}
            disabled={!isEditing && hasNotes}
            ref={editorRef}
          />
        </main>
      </div>
    </>
  );
}

export default App;
