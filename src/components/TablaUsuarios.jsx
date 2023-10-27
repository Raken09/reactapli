import PropTypes from 'prop-types';

export function TablaUsuarios ({ usuario }) {
    return (
        <div>
            <h1>{usuario.username}</h1>
        </div>
    );
}

TablaUsuarios.propTypes = {
    usuario: PropTypes.shape({
        username: PropTypes.string.isRequired,
    }).isRequired,
};
