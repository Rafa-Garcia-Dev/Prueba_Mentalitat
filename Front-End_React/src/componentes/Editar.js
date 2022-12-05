import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/Api"

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datosCargados:false,
            paciente:[]
         }
    }

    cambioValor = (e) =>{
        const state=this.state.paciente;
        state[e.target.name]=e.target.value;
        this.setState({paciente:state});
    }
    envairDatos = (e) =>{
        e.preventDefault();
        const{id,tipodoc,documento,nombre,apellido,sexo}= this.state.paciente;
        var datosEnvio={id:id,tipodoc:tipodoc,documento:documento, nombre:nombre,apellido:apellido, sexo:sexo}


        fetch(Api+"?actualizar=1",{
        method:"POST",
        body: JSON.stringify(datosEnvio)

        })
            .then(respuesta=>respuesta.json())
            .then((datosDerespuesta)=>{
                 this.props.history.push("/");
            })
            .catch(console.log)


    }
    componentDidMount(){

        fetch(Api+"?consultar="+this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then((datosDerespuesta)=>
        { 

            this.setState({datosCargados:true,
                 paciente:datosDerespuesta[0]
            })
        })
        .catch(console.log)
    }
    
    render() { 
        const{datosCargados, paciente}=this.state

        if(!datosCargados){return(<div>Cargando...</div>); }
        else{
        return ( 
            <div className="card">
                <div className="card-header">
                    Editar Paciente
                </div>

                <div className="card-body">

                    <form onSubmit={this.envairDatos}>
                 
                        <div className="form-group">
                            <label htmlFor="">ID:</label>
                            <input required type="text" readOnly className="form-control" value={paciente.id} name="id" id="id" onChange={this.cambioValor} aria-describedby="helpId" placeholder=""/>
                            <small id="helpId" className="form-text text-muted">clave</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Tipo Documento:</label>
                            <input required type="text" name="tipodoc" onChange={this.cambioValor} value={paciente.tipodoc} id="tipodoc" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Ingrese el tipo de documento del paciente</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Documento:</label>
                            <input required type="text" name="documento" onChange={this.cambioValor} value={paciente.documento} id="documento" className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Ingrese numero de documento del paciente</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Nombre:</label>
                            <input required type="text" name="nombre" onChange={this.cambioValor} value={paciente.nombre} id="nombre"     className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Ingrese primer nombre del paciente</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Apellido:</label>
                            <input required type="text" name="apellido" onChange={this.cambioValor} value={paciente.apellido} id="apellido"   className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Ingrese primer apellido del paciente</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Sexo:</label>
                            <input required type="text" name="sexo" onChange={this.cambioValor} value={paciente.sexo} id="sexo"   className="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="text-muted">Ingrese el sexo del paciente</small>
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-dark">Atualizar paciente</button>
                        <Link to={"/"} className="btn btn-danger">Cancelar</Link>

                        </div>
                    </form>
                </div>

                <div className="card-footer text-muted">
                    
                </div>

            </div>
         );
        }
    }
}
 
export default Editar;