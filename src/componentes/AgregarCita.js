

import React from "react"
import uuid from 'uuid';

class AgregarCita extends React.Component{
    state={
        error:false
    } 
    nombre=React.createRef();
     autor=React.createRef();
     fecha=React.createRef();
     hora=React.createRef();
     sintoma=React.createRef();

envioparametros =(e)=>{
    e.preventDefault();


const nombre=this.nombre.current.value,
        autor=this.autor.current.value,
fecha=this.fecha.current.value,
hora=this.hora.current.value,
sintoma=this.sintoma.current.value
if(nombre===''|| autor===''|| fecha===''|| hora===''|| sintoma===''){
    
    console.log('Faltan campos')
    this.setState({
        error:true
    })
}else{
    const datos_formulario={
        id:uuid(),
        nombre,
        autor,
        fecha,hora,sintoma

        
    }
    
    e.target.reset();
    this.props.formulario(datos_formulario)

    this.setState({
        error:false
    })
}
    
}

    
    render(){

        const existeError=this.state.error

    
        return (
            <div>
            <form onSubmit={this.envioparametros}>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                <div className="col-sm-8 col-lg-10">
                    <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.nombre} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                <div className="col-sm-8 col-lg-10">
                    <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" ref={this.autor} />
                </div>
            </div>
      
             <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                    <input type="date" className="form-control" ref={this.fecha}/>
                </div>                            
      
                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                <div className="col-sm-8 col-lg-4">
                    <input type="time" className="form-control" ref={this.hora}/>
                </div>
            </div>
      
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                <div className="col-sm-8 col-lg-10">
                    <textarea  className="form-control" ref={this.sintoma}></textarea>
                </div>
            </div>
            <div className="form-group row justify-content-end">
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                </div>
            </div>
        </form>
        
                <p>
                    {existeError ? <div className="alert alert-danger"> Faltan campos obligatorios </div>:'No'}
                </p>

        </div>
            
        )
    }
}

export default AgregarCita

