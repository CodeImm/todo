import { NoteStatus } from './NoteStatus';

export interface Note {
  id: number;
  title?: string;
  text?: string;
  status: NoteStatus;
}
