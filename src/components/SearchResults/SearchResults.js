import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
class SearchResults extends React.Component {
  constructor (props) {
    super (props);
  }

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.node,
    searchText: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }


  render() {
    const {title, icon, cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}> {title}<span className={styles.icon}>
            <Icon name={icon}/></span></h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}

          </div>

        </section>
      </Container>
    );
  }
}

export default SearchResults;
