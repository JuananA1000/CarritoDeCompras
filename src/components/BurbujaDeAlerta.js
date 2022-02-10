import { Component } from "react";

const estilo = {
    burbujaDeAlerta: {
        fontFamily: 'arial',
        backgroundColor: "#E9725A",
        borderRadius: "15px",
        color: "#fff",
        padding: "2px 5px",
        fontSize: "0.7rem",
        width: "20px",
    },
};

class BurbujaDeAlerta extends Component {
    obtenerNumeroBurbuja(numero) {
        if (!numero) {
            // Si no hay definido un número
            return "";
        } else if (numero > 9) {
            return "9+";
        }

        return numero;
    }

    render() {
        const { value } = this.props;
        
        return (
            <span style={estilo.burbujaDeAlerta}>
                {this.obtenerNumeroBurbuja(value)}
            </span>
        );
    }
}

export default BurbujaDeAlerta;
