import { Component } from 'react';
import logoFruta from './productos/logoFruta.png';

const estilo = {
    logo: {
        maxHeight: '100px',
        maxWidth: '100px',
        fontWeight: '700',
        fontSize: '2rem',
    },

    img: {
        width: '100%',
    },
};

class Logo extends Component {
    render() {
        return (
            <div style={estilo.logo}>
                <img style={estilo.img} src={logoFruta} alt='[logo]' />
            </div>
        );
    }
}

export default Logo;
