import React, { Component } from "react";
import store from "../../store";
import { searchNotes } from "../../store/actions";
import "./SearchNotes.css";
const searchObject = store.getState().notes;

class SearchNotes extends Component {
  constructor(props) {
    super(props);
    this.searchResult = null;
  }
  render() {
    return (
      <input
        className="Search"
        type="search"
        placeholder="Search notes..."
        value={store.getState().search.queryText}
        onChange={e => this.search(e)}
      />
    );
  }

  // this search only on `title` key
  search(e) {
    let query = e.target.value;
    const notes = store.getState().notes;
    store.dispatch(searchNotes(notes, query));
  }
}

export default SearchNotes;
