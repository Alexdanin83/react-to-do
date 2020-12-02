import {connect} from 'react-redux';
import Home from './Home';
//zwraca object w którym zwraca klucz właściwości oraz wartość
const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});
//połączenie komponenta z magazynem
export default connect(mapStateToProps)(Home);
