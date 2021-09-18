import React from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState();

  return (
    <div>
      <header>
        <h1>Note Taker</h1>
      </header>
      <nav>
        <button>New Note</button>
        <button>Clear All Notes</button>
        <button>Export</button>
        <ul>
          {
            notes.map((note, index) => <li><button onClick={() => setActiveNote(index)}>{note.substring(0,10)}</button></li>)
          }
        </ul>
      </nav>
      <main>
        <textarea onChange={(e) => {
          const currentNotes = [...notes];
          currentNotes.splice(activeNote, 1, e.target.value);
          setNotes(currentNotes);
        }}
        value={notes[activeNote]}/>
      </main>
    </div>
  );
}

export default App;
