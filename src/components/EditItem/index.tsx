import { FC } from 'react';

import StatusRadioGroup from './StatusRadioGroup';

import { NoteStatus } from '../../domains/Note/NoteStatus';
import { Note } from '../../domains/Note/Note';
import './style.css';

interface Props {
  selectedNote?: Note;
  onChangeNote: (newNote: Note) => void;
  onDeleteNote: (id: number) => void;
}

const EditItem: FC<Props> = ({ selectedNote, onChangeNote, onDeleteNote }) => {
  const handleChange = (status: NoteStatus) => {
    selectedNote && onChangeNote({ ...selectedNote, status: status });
  };

  return selectedNote ? (
    <>
      <div className="noteHandler">
        {selectedNote && (
          <StatusRadioGroup
            status={selectedNote.status}
            onStatusChange={handleChange}
          />
        )}
        <button
          title="Удалить заметку"
          className="deleteNoteBtn"
          onClick={() => onDeleteNote(selectedNote.id)}
        >
          🧺
        </button>
      </div>
      <div className="editItem">
        <div>
          <input
            multiple
            className="titleInput"
            autoFocus
            value={selectedNote.title ?? ''}
            onChange={(e) =>
              onChangeNote({ ...selectedNote, title: e.target.value })
            }
            placeholder="Название"
          />
        </div>

        <div>
          <textarea
            className="textTextarea"
            value={selectedNote.text ?? ''}
            placeholder="Текст"
            onChange={(e) =>
              onChangeNote({ ...selectedNote, text: e.target.value })
            }
          />
        </div>
      </div>
    </>
  ) : (
    <div className="editItem"></div>
  );
};

export default EditItem;
