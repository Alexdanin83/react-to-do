import {connect} from 'react-redux';
import List from './List.js';
import {getColumnsForList, createActionAddColumn}  from '../../redux/columnsRedux.js';

//Funkcja zwraca tablicę zawierającą wyłącznie listId
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};
//funkcja, która nadaje komponentowi propsy,
// w których znajdą się funkcje wysyłające akcje do magazynu.
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
