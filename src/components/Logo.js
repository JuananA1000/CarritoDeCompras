import { Component } from "react";

const estilo = {
    logo: {
        maxHeight: "100px",
        maxWidth: "100px",
        fontWeight: "700",
        fontSize: "2rem",
    },

    img: {
        width: "100%",
    },
};

class Logo extends Component {
    render() {
        return (
            <div style={estilo.logo}>
                <img
                    style={estilo.img}
                    src="/productos/logoFruta.png"
                    alt="[logo]"
                />
            </div>
        );
    }
}

export default Logo;
