import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/Api"

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             datosCargados:false,
             pacientes:[]
        }
    }

    borrarRegistros= (id) =>{
        fetch(Api+"?borrar="+id)
        .then(respuesta=>respuesta.json())
        .then((datosDerespuesta)=>{
            this.cargarDatos();
        })
        .catch(console.log)
    }

        cargarDatos(){
            fetch(Api)
            .then(respuesta=>respuesta.json())
            .then((datosDerespuesta)=>{
                console.log(datosDerespuesta);
                this.setState({datosCargados:true, pacientes:datosDerespuesta})
            })
            .catch(console.log)
        }

        componentDidMount(){
            this.cargarDatos();
        }



    render() { 

        const{datosCargados, pacientes}=this.state

        if(!datosCargados){return(<div>Cargando...</div>); }
        else{
        return (
            
            <div className="card">
                <div className="card-header">
                <Link className="btn btn-dark" to="/crear">Agregar nuevo paciente</Link>
                </div>
                <div className  ="card-body">
                    <h4>  Lista de Pacientes</h4>
                <table className="table">
            <thead>
                <tr>
                    <th>Tipo Documento</th>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Sexo</th>
                    <th>Aciones</th>
                </tr>
            </thead>
            <tbody>

                {
                    pacientes.map(
                        (paciente)=>(
                        <tr key={paciente.id}>
                            <td>{paciente.tipodoc}</td>
                            <td>{paciente.documento}</td>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.apellido}</td>
                            <td>{paciente.sexo}</td>
                            <td>
                             <div className="btn-group" role="group" aria-label="">

                                <Link className="btn btn-primary"
                                 to={"/editar/"+paciente.id}
                                
                                >Editar</Link>

                                <button type="button" className="btn btn-danger"
                                onClick={()=>this.borrarRegistros(paciente.id)}
                                >Borrar</button>

                             </div>
                            </td>
                        </tr>
                        )
                    )
                }
                
            </tbody>
        </table>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>

           );
        }
    }
}
 
export default Listar;