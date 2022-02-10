import { Component } from "react";
import Boton from "./Boton";

const estilo = {
    producto: {
        border: "solid 1px #eee",
        boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
        width: "30%",
        padding: "10px 15px",
        borderRadius: "15px",
    },

    img: {
        width: "100%",
    },
};

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        return (
            <div style={estilo.producto}>
                <img
                    style={estilo.img}
                    alt={producto.nombre}
                    src={producto.img}
                />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Boton onClick={() => agregarAlCarro(producto)}>
                    Añadir al carro
                </Boton>
            </div>
        );
    }
}

export default Producto;
