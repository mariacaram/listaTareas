import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h2 className='text-center text-light'>Tareas de la Comision {props.comision}</h2>
        </div>
    );
};

export default Subtitulo;