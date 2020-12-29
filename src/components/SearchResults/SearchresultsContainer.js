import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCarfsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCarfsForSearchResults(state, props.match.params.searchString),
});


export default connect(mapStateToProps)(SearchResults);
