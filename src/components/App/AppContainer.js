import {connect} from 'react-redux';
import App from './App';
//zwraca object w którym zwraca klucz właściwości oraz wartość
const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});
//połączenie komponenta z magazynem
export default connect(mapStateToProps)(App);
