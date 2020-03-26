import React from 'react';
import Item from './item'

function ListaDeCompras() {
    return (
        <ul>
            <Item nome="Arroz" />
            <Item nome="Feijão" />
            <Item nome="Banana" />
            <Item nome="Suco" />
            <Item nome="Álcool em Gel" />
        </ul>
    );
}

export default ListaDeCompras