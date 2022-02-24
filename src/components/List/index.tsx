import { FC } from 'react';

import ListItem from './ListItem';

import { Note } from '../../domains/Note/Note';


interface Props {
  notes: Note[];
  selectedNoteId: number | null;
  onSelectedNote: (id: number) => void;
}

const List: FC<Props> = ({ notes, selectedNoteId: selectedNote, onSelectedNote }) => {
  console.log(selectedNote);

  return (
    <div className="list">
      {notes.map((note) => (
        <ListItem
          key={note.id}
          style={
            selectedNote === note.id
              ? { backgroundColor: 'rgba(21, 96, 189, 0.4)' }
              : {}
          }
          id={note.id}
          title={note.title}
          text={note.text}
          status={note.status}
          onSelectedNote={onSelectedNote}
        />
      ))}
      <div style={{ width: '100%', minHeight: '30px' }}></div>
    </div>
  );
};

export default List;
