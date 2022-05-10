import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
<ul class="list-group">
{props.arregloTareas.map((elemento, indice) => <ItemTarea key={indice} dato={elemento} borrarTarea = {props.borrarTarea}></ItemTarea>)}
</ul>
    );
};

export default ListaTareas;