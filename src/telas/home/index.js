import React from "react";
import Topo from './componentes/Topo';
import Produtores from "./componentes/produtores";

export default function home () {
    return <>
    <Produtores topo= {Topo}/>
    </>
}