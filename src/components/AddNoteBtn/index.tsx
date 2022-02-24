import { FC } from 'react';

import './style.css';

interface Props {
  onAddNote: () => void;
}

const AddNoteBtn: FC<Props> = ({ onAddNote }) => {
  return (
    <button className="addNoteBtn" onClick={onAddNote}>
      <span className="plus">+</span> Добавить заметку
    </button>
  );
};

export default AddNoteBtn;
