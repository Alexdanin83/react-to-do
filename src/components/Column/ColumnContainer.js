import {connect} from 'react-redux';
import Column from './Column.js';
import {getCardsForList, createActionAddCard}  from '../../redux/cardsRedux.js';

//Funkcja zwraca tablicę zawierającą wyłącznie listId
const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});
//funkcja, która nadaje komponentowi propsy,
// w których znajdą się funkcje wysyłające akcje do magazynu.
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
