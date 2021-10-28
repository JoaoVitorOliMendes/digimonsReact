import { connect } from 'react-redux';
import { digimonUpdated } from '../../Redux/actions';
import Lista from './Lista';

const mapStateToProps = store => ({
    digimons: store.digimonState.digimons
});

const mapDispatchToProps = dispatch => ({
    digimonUpdated: (value) => dispatch(digimonUpdated(value))
});

const ListaConnected = connect(mapStateToProps, mapDispatchToProps)(Lista);

export { ListaConnected as Lista }