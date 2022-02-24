import { useState } from 'react';

import { Note } from '../domains/Note/Note';

/**
 * Хук, хранящий заметки и предоставляющий взаимодествие с ними
 */
const useNotes = (): [
  Note[],
  () => void,
  number | null,
  (id: number) => void,
  (note: Note) => void,
  (id: number) => void,
  (searchPhrase: string) => void
] => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(
    notes[0]?.id ?? null
  );

  const addNote = () => {
    const id = Number(new Date());

    setNotes((prevState) => [
      {
        id: id,
        title: undefined,
        text: '',
        status: 'pending',
      } as Note,
      ...prevState,
    ]);
    setSelectedNoteId(id);
  };

  const changeNote = (newNote: Note): void => {
    setNotes(
      notes.map((note) => {
        if (note.id !== newNote.id) {
          return note;
        }

        return newNote;
      })
    );
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const searchNote = (searchPhrase: string) => {
    setSearchPhrase(searchPhrase);
    setSelectedNoteId(null);
  };

  return [
    !searchPhrase
      ? notes
      : notes.filter(
          (note) =>
            note.title && new RegExp(`${searchPhrase}`, 'gi').test(note.title)
        ),
    addNote,
    selectedNoteId,
    setSelectedNoteId,
    changeNote,
    deleteNote,
    searchNote,
  ];
};

export default useNotes;
