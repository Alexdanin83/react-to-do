import {connect} from 'react-redux';
import List from './List.js';
import {getColumnsForList, createActionAddColumn}  from '../../redux/columnsRedux.js';

//Funkcja zwraca tablicę zawierającą wyłącznie listId
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});
//funkcja, która nadaje komponentowi propsy,
// w których znajdą się funkcje wysyłające akcje do magazynu. 
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
