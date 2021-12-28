import { Component } from "react";

import BurbujaDeAlerta from "./BurbujaDeAlerta";
import DetalleCarro from "./DetalleCarro";

const estilo = {
    carro: {
        backgroundColor: "#359A2C",
        color: "#fff",
        border: "none",
        padding: "10px",
        borderRadius: "15px",
        cursor: "pointer",
        fontSize: "20pt",
    },

    burbuja: {
        position: "relative",
        left: 12,
        top: 20,
    },
};

class Carro extends Component {
    render() {
        const { carro, carroVisible, mostrarCarro } = this.props;

        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div>
                <span style={estilo.burbuja}>
                    {cantidad !== 0 ? (
                        <BurbujaDeAlerta value={cantidad} />
                    ) : null}
                </span>
                <button onClick={mostrarCarro} style={estilo.carro}>
                    &#128722;
                </button>
                {carroVisible ? <DetalleCarro carro={carro} /> : null}
            </div>
        );
    }
}

export default Carro;
