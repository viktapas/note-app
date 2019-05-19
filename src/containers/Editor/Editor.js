import React, { Component } from "react";
import moment from "moment";
import store from "../../store";
import { updateNote } from "../../store/actions";
import Empty from "../../components/Empty/Empty";

import * as styles from "./Editor.module.css";

class Editor extends Component {
  render() {
    return (
      <div className={styles.Editor}>
        {this.props.note ? (
          <div className={styles.Flex}>
            <p className={styles.Timestamp}>
              {moment(this.props.note.lastUpdate).format("LL")}
              <span> at </span>
              {moment(this.props.note.lastUpdate).format("LT")}
            </p>
            <textarea
              value={this.props.note.title}
              onChange={this.handleChangeEvent}
            />
          </div>
        ) : (
          <Empty />
        )}
      </div>
    );
  }

  handleChangeEvent = e => {
    const title = e.target.value;
    const lastUpdate = new Date();
    store.dispatch(updateNote(this.props.note.note_id, title, lastUpdate));
  };
}

export default Editor;
