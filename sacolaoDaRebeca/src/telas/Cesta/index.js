import React from 'react';
import Descricao from './componentes/Descricao.js';
import Topo from './componentes/Topo.js';
import Itens from './componentes/itens.js';
import { ScrollView } from 'react-native';

export default function Cesta({topo, detalhes, itens}) {
    return <ScrollView>
        <Topo {...topo}/>
        <Descricao {...detalhes}/>
        <Itens{...itens}/>
    </ScrollView>
}
