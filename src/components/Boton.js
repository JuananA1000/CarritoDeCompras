import { Component } from "react";

const estilos = {
    button: {
        backgroundColor:"#0A283E",
        color: "#fff",
        padding: "15px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer", // Aparece la mano al pasar por encima
        // PENDIENTE: le quiero meter un hover al botón
    },
};

class Boton extends Component {
    render() {
        return (
            /*
                El operador '...' le pasa a <button/> TODAS las propiedades del
                componente Boton.
            */
            <button style={estilos.button} {...this.props} />
        );
    }
}

export default Boton;
