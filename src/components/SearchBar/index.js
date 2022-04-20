import { ButtonSearch } from '../material-ui/ui-button';
import { InputSearchBar } from '../material-ui/ui-search-bar';

const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    <>
      <form data-testid="searchBarForm" className="search" onSubmit={onSubmit}>
        <InputSearchBar
          id="demo-helper-text-aligned-no-helper"
          label="Search gif here"
          type="search"
          size="small"
          value={query}
          onChange={onChange}
        />
        <ButtonSearch variant="contained" type="submit">Search</ButtonSearch>
      </form>
    </>
  );
};

export default SearchBar;