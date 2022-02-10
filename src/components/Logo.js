import { Component } from 'react';
import logo from './productos/logo.png';

const estilo = {
    logo: {
        maxHeight: '100px',
        maxWidth: '100px',
        fontWeight: '700',
        fontSize: '2rem',
        marginBottom: '15px',
    },

    img: {
        width: '100%',
    },
};

class Logo extends Component {
    render() {
        return (
            <div style={estilo.logo}>
                <img style={estilo.img} src={logo} alt='[logo]' />
            </div>
        );
    }
}

export default Logo;
