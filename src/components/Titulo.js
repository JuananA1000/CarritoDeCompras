import { Component } from "react";

const estilo = {
    titulo: {
        marginBottom: "30px",
    },
};

class Titulo extends Component {
    render() {
        return <h2 style={estilo.titulo}>Productos</h2>;
    }
}

export default Titulo;
