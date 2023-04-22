import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./menu.css"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
    <div className="navBar">
        <Link className="ligaMenu" to="/"> Sushi Logo</Link>
        <Link className="ligaMenu" to="/productos/tradicional">Sushi Tradicional</Link>
        <Link className="ligaMenu" to="/productos/frutal">Sushi Frutal</Link>
        <Link className="ligaMenu" to="/productos/picante">Sushi Picante</Link>
        
        <Link className="carrito" href="/Cart"><CartWidget/></Link>
    </div>

    );
}
