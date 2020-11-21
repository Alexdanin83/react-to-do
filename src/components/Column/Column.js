import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';
class Column extends React.Component {
  static propTypes = {
   nameColumsFromList: PropTypes.string,
 }
  render() {
    return (
      <section className={styles.component}>
      <h3 className={styles.title}> {this.props.nameColumsFromList}</h3>
      </section>
    )
  }
}

export default Column;
