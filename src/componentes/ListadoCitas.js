import React from 'react'
import ListaCita from './ListaCita'

class ListadoCitas extends React.Component{
    
    render(){
        const citas=this.props.listardatos
        const mensaje=Object.keys(citas).length === 0 ? 'No hay citas' : '';

        return (
            <div>
                <div className="card"> 
                    <div className="card-header">
                       
                    </div>

                    

                    <div className="card-body">
                        <div className="media mt-3">

                            <div className="media-body">
                        <h2 className="text-center">{mensaje}</h2>
                        {Object.keys(this.props.listardatos).map(
                            key=>(<ListaCita key={key} cita={this.props.listardatos[key]} borrarCita={this.props.borrarcita}/>)
                        )}
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ListadoCitas