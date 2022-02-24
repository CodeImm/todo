import './App.css';
import AddNoteBtn from './components/AddNoteBtn';
import EditItem from './components/EditItem';
import List from './components/List';
import SearchField from './components/SearchField';

import useNotes from './hooks/useNotes';
import useResize from './hooks/useResize';

function App() {
  const [resizableRef] = useResize();

  const [
    notes,
    addNote,
    selectedNoteId,
    selectNote,
    changeNote,
    deleteNote,
    changeSearchPhrase,
  ] = useNotes();

  return (
    <>
      <div className="App">
        <header className="header">
          <span className="headerTitle">Xenday</span> Notes
        </header>
        <main className="main">
          <div className="row">
            <aside ref={resizableRef} className="aside">
              <AddNoteBtn onAddNote={addNote} />
              <SearchField onSearchPhraseChanged={changeSearchPhrase} />
              <List
                notes={notes}
                selectedNoteId={selectedNoteId}
                onSelectedNote={selectNote}
              />
            </aside>
            <article className="article">
              <EditItem
                selectedNote={notes.find((note) => note.id === selectedNoteId)}
                onChangeNote={changeNote}
                onDeleteNote={deleteNote}
              />
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
