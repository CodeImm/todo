import { FC } from 'react';

import './style.css';

interface Props {
  onSearchPhraseChanged: (searchPhrase: string) => void;
}

const SearchField: FC<Props> = ({ onSearchPhraseChanged }) => {
  // TODO: не контролируемый?
  return (
    <div className="search">
      <div className="loupe">🔎</div>
      <input
        type="search"
        className="searchField"
        onChange={(e) => onSearchPhraseChanged(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};

export default SearchField;
