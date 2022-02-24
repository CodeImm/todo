import { ChangeEvent, FC } from 'react';

import { NoteStatus } from '../../domains/Note/NoteStatus';

import './style.css';

interface Props {
  status: NoteStatus;
  onStatusChange: (status: NoteStatus) => void;
}

const StatusRadioGroup: FC<Props> = ({ status, onStatusChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onStatusChange(value as NoteStatus);
  };

  return (
    <fieldset id="radioGroup">
      <div className="radio">
        <input
          type="radio"
          id="statusChoice1"
          name="status"
          value="pending"
          onChange={handleChange}
          checked={status === 'pending'}
        />
        <label htmlFor="statusChoice1" style={{ color: '#767171' }}>
          Ожидает
        </label>
      </div>

      <div className="radio">
        <input
          type="radio"
          id="statusChoice2"
          name="status"
          value="process"
          onChange={handleChange}
          checked={status === 'process'}
        />
        <label htmlFor="statusChoice2" style={{ color: '##5B9BD5' }}>
          В процессе
        </label>
      </div>

      <div className="radio">
        <input
          type="radio"
          id="statusChoice3"
          name="status"
          value="completed"
          onChange={handleChange}
          checked={status === 'completed'}
        />
        <label htmlFor="statusChoice3" style={{ color: '#00B050' }}>
          Выполнена
        </label>
      </div>
    </fieldset>
  );
};

export default StatusRadioGroup;
