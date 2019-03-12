import React from 'react';
import PropTypes from 'prop-types';



class Formulario extends React.Component{
    nombregasto=React.createRef();
    cantidad=React.createRef();


    leerFormulario = (e) => {
        e.preventDefault();
        

        //crea el objeto
        const infogastos={
            nombregasto:this.nombregasto.current.value,
            cantidad:this.cantidad.current.value
        }
        //console.log(infogastos);

        this.props.datos(infogastos);

    }


render(){
    
    return (
        <form onSubmit={this.leerFormulario}>
    <h2>Agrega tus gastos aqui</h2>
    <div className="campo">
        <label>Nombre Gasto</label>
        <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombregasto}/>
    </div>

    <div className="campo">
        <label>Cantidad</label>
        <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidad}/>
    </div>

    <input className="button-primary u-full-width" type="submit" value="Agregar" />
</form>
    )
}


} 


Formulario.propTypes={
    datos:PropTypes.func.isRequired
}



export default Formulario