import { FC, HTMLProps, memo } from 'react';

import { NoteStatus } from '../../../domains/Note/NoteStatus';

import './style.css';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
  id: number;
  title?: string;
  text?: string;
  status: NoteStatus;
  onSelectedNote: (id: number) => void;
}

const ListItem: FC<Props> = ({
  id,
  title,
  text,
  status,
  onSelectedNote,
  ...props
}) => {
  let backgroundColor;
  switch (status) {
    case 'pending':
      backgroundColor = '#767171';
      break;
    case 'process':
      backgroundColor = '#5B9BD5';
      break;
    case 'completed':
      backgroundColor = '#00B050';
      break;
    default:
      backgroundColor = '#fff';
  }

  return (
    <div
      {...props}
      className="root"
      onClick={() => {
        console.log(id);
        onSelectedNote(id);
      }}
    >
      <div
        className="noteStatus"
        style={{
          backgroundColor: backgroundColor,
        }}
      ></div>
      <div className="title">{title ? title : 'Без названия'}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default memo(ListItem);
