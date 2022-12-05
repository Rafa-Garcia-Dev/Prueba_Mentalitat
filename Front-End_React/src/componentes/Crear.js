import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/Api"

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            tipodoc:"",
            documento:"",
            nombre :"",
            apellido:"",
            sexo :"",
            errores:[]
        }
    }

    cambioValor = (e) =>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state,errores:[]});
    }

    verificarError(elemento){
        return this.state.errores.indexOf (elemento) !==-1;
    }


    envairDatos = (e) =>{
        e.preventDefault();
        const{tipodoc,documento,nombre,apellido,sexo}=this.state;
 

        var errores=[];
        if(!tipodoc)errores.push("error_tipodoc");
        if(!documento)errores.push("error_documento");
        if(!nombre)errores.push("error_nombre");
        if(!apellido)errores.push("error_apellido");
        if(!sexo)errores.push("error_sexo");

        this.setState({errores:errores});
        if(errores.length>0)return false;
        var datosEnvio={tipodoc:tipodoc,documento:documento, nombre:nombre,apellido:apellido, sexo:sexo}

        fetch(Api+"?insertar=1",{
        method:"POST",
        body: JSON.stringify(datosEnvio)

        })
            .then(respuesta=>respuesta.json())
            .then((datosDerespuesta)=>{
                this.props.history.push("/");
            })
            .catch(console.log);
    }
  
    render() { 

        const{tipodoc,documento,nombre,apellido,sexo}=this.state;

        return ( 
            <div className="card">
                <div className="card-header">
                    Pacientes
                </div>
                <div className="card-body">
                    <form onSubmit={this.envairDatos}>

                    <div className="form-group">
                          <label htmlFor="">Tipo Documento:</label>
                          <select  name="tipodoc" onChange={this.cambioValor} value={tipodoc} id="tipodoc" className= "form-control">
                            <option value="">Seleccione una opción</option>
                            <option value="Registro civil de nacimiento">Registro civil de nacimiento</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Tarjeta de extranjería">Tarjeta de extranjería </option>
                            <option value="Cédula de extranjería">Cédula de extranjería </option>
                            <option value="NIT">NIT </option>
                            <option value="Pasaporte">Pasaporte </option>
                            </select>
                          <small id="helpId" className="invalid-feedback">Ingrese el tipo de documento del paciente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Documento:</label>
                          <input type="text" name="documento" onChange={this.cambioValor} value={documento} id="documento" className={ ((this.verificarError("error_documento"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="invalid-feedback">Ingrese numero de documento del paciente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Nombre:</label>
                          <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" className={ ((this.verificarError("error_nombre"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="invalid-feedback">Ingrese primer nombre del paciente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Apellido:</label>
                          <input type="text" name="apellido" onChange={this.cambioValor} value={apellido} id="apellido" className={ ((this.verificarError("error_apellido"))?"is-invalid":"")+" form-control"} placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="invalid-feedback">Ingrese primer apellido del paciente</small>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Sexo:</label>
                          <input type="text" name="sexo" onChange={this.cambioValor} value={sexo} id="sexo" className={ ((this.verificarError("error_sexo"))?"is-invalid":"")+" form-control"}placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" className="invalid-feedback">Ingrese el sexo del paciente</small>
                        </div>

                        <br>
                        </br>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-dark">Agregar nuevo paciente</button>
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
 
export default Crear;