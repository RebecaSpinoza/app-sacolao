import React from "react";

import Texto from "../../../componentes/Texto";

export default function Itens({titulo}){
    return <>
        <Texto>{titulo}</Texto>
        {/*exibe os itens da lista com o MAP do JS*/}
        {lista.map((nome,imagem)=>{
            return <Texto key={nome}>{nome}</Texto>
        })}
    </>
}