import React from 'react'



class ListaCita extends React.Component{
    eliminarCita=()=>{
        //console.log(`Eliminando cita ${this.props.cita.id}`)
        this.props.borrarCita(this.props.cita.id)
    }
    render(){
        return (
            <React.Fragment>
                <p>Nombre:{this.props.cita.nombre}</p>
                <p>Dueño:{this.props.cita.autor}</p>
                <p>Fecha y Hora:{this.props.cita.fecha} {this.props.cita.hora}</p>
                <p>Patologia:{this.props.cita.sintoma}</p>
                <button className="btn btn-primary" onClick={this.eliminarCita}>Borrar</button>
                <hr></hr>
               
            </React.Fragment>
        )
    }

}


export default ListaCita