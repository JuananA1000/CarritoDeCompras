import { Component } from "react";

const estilo = {
    logo: {
        fontWeight: "700",
        fontSize: "2rem",
    },
};

class Logo extends Component {
    render() {
        return <div style={estilo.logo}>&#127813;</div>;
    }
}

export default Logo;
