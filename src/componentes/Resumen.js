import React from 'react';


class Resumen extends React.Component{

render(){
    const {marca, year, pan}= this.props.datos;
    if(!marca || !year || !pan) return null;
    return(
        <div>
            <p>Resumen</p>
            <ul>
                <li>Modelo : {marca} </li>
                <li>Año : {year} </li>
                <li>Plan : {pan} </li>
            </ul>
        
        </div>
    )
}

}

export default Resumen