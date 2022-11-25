import React,{ useContext,useState } from 'react'
import './concretoPremezclado.css'
import concretoReforzadoContext from '../../../Context/concretoPremezcladoContext'
import {AiTwotoneDelete} from 'react-icons/ai'





function CementoPremezclado() {

    const {resistenciaConcreto,
        claseExposicion,
        edadResistencia,
        contraccionSecado,
        cemento,
        agregado,
        moduloElasticidad,
        densidadConcreto,
        fibra,
        TMA,
        colocacionConcreto,
        permeabilidadIonCloruro,
        revenimiento,
        adictivo,
        colorConcreto,
        saveCementoPremezclado,
        concretoPremez,
        deleteCementoPremezclado
    } = useContext(concretoReforzadoContext)

 

    const [flag, setFlag] = useState(false)

    const [fromres, setFormres] = useState(false)

    const [resConcreto, setResConcreto] = useState()
    const [claseEx, setClaseEx] = useState()
    const [edadRes, setEdadRes] = useState()
    const [contraccionSe, setContraccionSe] = useState()
    const [ceme, setCeme] = useState()
    const [agre, setAgre] = useState()
    const [moduloElas, setModuloElas] = useState()
    const [densidadCon, setDensidadCon] = useState()
    const [fib, setFib] = useState()
    const [tma, setTma] = useState()
    const [colocacionCon, setColocacionCon] = useState()
    const [permeabilidadIon, setPermeabilidadIon] = useState()
    const [reven, setReven] = useState()
    const [adic, setAdic] = useState()
    const [colorC, setColorC] = useState()

    const listData = [resConcreto,claseEx,edadRes,contraccionSe,ceme,agre,moduloElas,densidadCon,fib,tma,colocacionCon,permeabilidadIon,reven,adic,colorC]
    const listreset = [setResConcreto,setClaseEx,setEdadRes,setContraccionSe,setCeme,setAgre,setModuloElas,setDensidadCon,setFib,setTma,setColocacionCon,
        setPermeabilidadIon,setReven,setAdic,setColorC]

    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');


function asignarValores(e) {
    setFormres(true)
   switch (e.target.id) {
    case 'kgcm2':
        setResConcreto( resistenciaConcreto.filter(data=> data._id === e.target.value)[0])
        break;
    case 'categoria':
        setClaseEx(claseExposicion.filter(data=> data._id === e.target.value)[0])
    break;
    case 'dias':
        setEdadRes(edadResistencia.filter(data=> data._id === e.target.value)[0])
    break;
    case 'contraccionSecado':
        setContraccionSe(contraccionSecado.filter(data=> data._id === e.target.value)[0])
    break;
    case 'tipoCemento':
        setCeme(cemento.filter(data=> data._id === e.target.value)[0])
    break;
    case 'agregado':
        setAgre(agregado.filter(data=> data._id === e.target.value)[0])
    break;

    case 'MPa':
        setModuloElas(moduloElasticidad.filter(data=> data._id === e.target.value)[0])
    break;

    case 'kgm3':
        setDensidadCon(densidadConcreto.filter(data=> data._id === e.target.value)[0])
    break;

    case 'tipoFibraMaterial':
        setFib(fibra.filter(data=> data._id === e.target.value)[0])
    break;

    case 'tmaMM':
        setTma(TMA.filter(data=> data._id === e.target.value)[0])
    break;
    
    case 'sistemaColocacion':
        setColocacionCon(colocacionConcreto.filter(data=> data._id === e.target.value)[0])
    break;

    case 'penetrabilidadIonCloruro':
        setPermeabilidadIon(permeabilidadIonCloruro.filter(data=> data._id === e.target.value)[0])
    break;

    case 'mm':
        setReven(revenimiento.filter(data=> data._id === e.target.value)[0])
    break;

    case 'adictivo':
        setAdic(adictivo.filter(data=> data._id === e.target.value)[0])
    break;

    case 'color':
        setColorC(colorConcreto.filter(data=> data._id === e.target.value)[0])
    break;

    default:
        break;
   }

}



const RegistrarConcretoP = (e)=>{
    e.preventDefault()

    console.log(e.target.desCorta.value);

    let form = document.getElementById('formConPre')

    for (let item of listData){
        if(!item ){
            alert('Todos los campos son necesarios')
            return 
        }
    }



    let data ={
        "codigoOmniclass": e.target.codigoOmniclass.value,
        "codigoBimsa": e.target.codigoBimsa.value,
        "codigoCyC": e.target.codigoCyC.value,
        "desCorta": e.target.desCorta.value,
        "desCortaIngles": e.target.desCortaIngles.value,
        "desLarga":  e.target.desLarga.value,
        "desLargaIngles": e.target.desLargaIngles.value,
        "uso": e.target.uso.value,
        "materialcol": e.target.materialcol.value,
        "fk_resistenciaConcreto": resConcreto._id,
        "fk_edadResistencia": edadRes._id,
        "fk_moduloElasticidad": moduloElas._id,
        "fk_densidadConcreto": densidadCon._id,
        "fk_revenimiento": reven._id,
        "fk_contraccionSecado": contraccionSe._id,
        "fk_agregado": agre._id,
        "fk_fibra": fib._id,
        "fk_TMA": tma._id,
        "fk_adictivo": adic._id,
        "fk_colocacionConcreto": colocacionCon._id,
        "fk_claseExposicion": claseEx._id,
        "fk_permeabilidadIonCloruro": permeabilidadIon._id,
        "fk_cemento": ceme._id
      }
      
      saveCementoPremezclado(data)

      for(let item of listreset){
        console.log(item);
        item(null)
      }

    form.reset()
    setFormres(false)
}
 

  
const eliminarReg =(id)=>{

    let confirmado =  window.confirm(`Deseas eliminar el registro con el id ${id}`)
    console.log(confirmado);
    if (confirmado){
        deleteCementoPremezclado(id)
    } 

}


    return (
    <div style={{paddingTop:'20px'}}>
       <input type='button' onClick={()=>setFlag(!flag)} className='btn btn-info' value={!flag?`consultar->`:'<-Registrar'}></input>
        {flag?
        <div>
            <div style={{paddingBottom:'40px'}}>
        <h1 className='concreto-premezclado-head'>Consultar Concreto Premezclado</h1>

        <table class="table" style={{width:"80%",margin:"auto"}}>
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">codigoOmniclass</th>
                <th scope="col">codigoCyC</th>
                <th scope="col">desCorta</th>
                <th scope="col">desCortaIngles</th>
                <th scope="col">desLarga</th>
                <th scope="col">desLargaIngles</th>
                <th scope="col">uso</th>
                <th scope="col">materialcol</th>
                <th>edit</th>
                <th>delete</th>
                
            </tr>
            </thead>
            <tbody>
                {concretoPremez?(
                    concretoPremez.map((item,id)=>(
                    <tr key={item._id}>
                        <td>{id+1}</td>
                        <td>{item.codigoOmniclass}</td>
                        <td>{item.codigoCyC}</td>
                        <td>{item.desCorta}</td>
                        <td>{item.desCortaIngles}</td>
                        <td>{item.desLarga}</td>
                        <td>{item.desLargaIngles}</td>
                        <td>{item.uso}</td>
                        <td>{item.materialcol}</td>
                        <td><button className='btn btn-success'>Edit</button> </td>
                        <td><button className='btn btn-danger' onClick={()=>eliminarReg(item._id)}>delet</button></td>
                    </tr>
                    ))

                ):(<tr><h2>No hay datos para mostrar...</h2></tr>)
        
                }
            </tbody>
        </table>

            

            

            
        </div>
        </div>
            :
        <div style={{paddingBottom:'40px'}}>
        <h1 className='concreto-premezclado-head'>Concreto Premezclado</h1>
        <form onSubmit={RegistrarConcretoP} id='formConPre'> 
            <div className='concreto-premezclado-form-head'>

            </div>
            <div className='container '>

{/*resistencia concreto*/} 
<div className='mb-4' >
                <h5>Resistencia concreto:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='kgcm2' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select kgcm2</option>
                        {resistenciaConcreto?(resistenciaConcreto.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.kgcm2}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">MPa</label>
                    <input type="text" id='MPa' readOnly disabled value={resConcreto?.MPa} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">PSI</label>
                    <input type="text" id='PSI' readOnly disabled value={resConcreto?.PSI} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoResistencia</label>
                    <input type="text" id='tipoResistencia' readOnly disabled value={resConcreto?.tipoResistencia} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">clase</label>
                    <input type="text" id='clase' readOnly disabled value={resConcreto?.clase} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*clase exposicion*/}   
<div className='mb-4'>
                <h5>clase exposicion:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='categoria' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select categoria</option>
                        {claseExposicion?(claseExposicion.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.categoria}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">condicion</label>
                    <input type="text" id='condicion' readOnly disabled value={claseEx?.condicion} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">minimaac</label>
                    <input type="text" id='minimaac' readOnly disabled value={claseEx?.minima} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">minimafc</label>
                    <input type="text" id='minimafc' readOnly disabled value={claseEx?.minimafc} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cometarios</label>
                    <input type="text" id='cometarios' readOnly disabled value={claseEx?.cometarios} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">clase</label>
                    <input type="text" id='clase' readOnly disabled value={claseEx?.clase} className="form-control"/>
                    </div>

                </div>
                </div>

{/*Edad resistencia*/}   
<div className='mb-4'>
                <h5>Edad Resistencia:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='dias' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select dias</option>
                        {edadResistencia?(edadResistencia.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.dias}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">descripcion</label>
                    <input type="text" id='descripcion' readOnly disabled value={edadRes?.descripcion} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Contraccion Secado*/}   
<div className='mb-4'>
                <h5>Contraccion Secado:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='contraccionSecado' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select contraccionSecado</option>
                        {contraccionSecado?(contraccionSecado.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.contraccionSecado}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoClase</label>
                    <input type="text" id='tipoClase' readOnly disabled value={contraccionSe?.tipoClase} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-8 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cometarios</label>
                    <input type="text" id='cometarios' readOnly disabled value={contraccionSe?.cometarios} className="form-control"/>
                    </div> 

                </div>
                </div>
{/*Cemento*/}   
<div className='mb-4'>
                <h5>Cemento:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" onChange={asignarValores} id='tipoCemento'  aria-label="Default select example">
                        <option selected>select tipoCemento</option>
                        {cemento?(cemento.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id}>{item.tipoCemento}</option>
                        ))):(null)
                        }
                    </select>
                </div>
                </div>

{/*Agregado*/}   
<div className='mb-4'>
                <h5>Agregado:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='agregado' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select agregado</option>
                        {agregado?(agregado.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.agregado}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoAgregado</label>
                    <input type="text" id='tipoAgregado' readOnly disabled value={agre?.tipoAgregado} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">origen</label>
                    <input type="text" id='origen' readOnly disabled value={agre?.origen} className="form-control"/>
                    </div> 
                </div>
                </div>

{/*Modulo Elasticidad*/}   
<div className='mb-4'>
                <h5>Modulo Elasticidad:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='MPa' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select MPa</option>
                        {moduloElasticidad?(moduloElasticidad.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.MPa}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">PSI</label>
                    <input type="text" id='PSI' readOnly disabled value={moduloElas?.PSI} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">kgcm2</label>
                    <input type="text" id='kgcm2' readOnly disabled value={moduloElas?.kgcm2} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Densidad Concreto*/}   
<div className='mb-4'>
                <h5>Densidad Concreto:</h5>
                <div className='row '>
                    
                    <select className="form-select mb-3" id='kgm3' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select kgm3</option>
                        {densidadConcreto?(densidadConcreto.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.kgm3}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-2 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoConcreto</label>
                    <input type="text" id='tipoConcreto' readOnly disabled value={densidadCon?.tipoConcreto} className="form-control"/>
                    </div> 
                    
                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">comentarios</label>
                    <input type="text" id='comentarios' readOnly disabled value={densidadCon?.comentarios} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">lbft3</label>
                    <input type="text" id='lbft3' readOnly disabled value={densidadCon?.lbft3} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Fibra*/}   
<div className='mb-4'>
                <h5>Fibra:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='tipoFibraMaterial' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select tipoFibraMaterial</option>
                        {fibra?(fibra.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.tipoFibraMaterial}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">fibraConcreto</label>
                    <input type="text" id='fibraConcreto' readOnly disabled value={fib?.fibraConcreto} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoFibra</label>
                    <input type="text" id='tipoFibra' readOnly disabled value={fib?.tipoFibra} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*TMA*/}   
<div className='mb-4'>
                <h5>TMA:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='tmaMM' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select tmaMM</option>
                        {TMA?(TMA.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.tmaMM}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoTMA</label>
                    <input type="text" id='tipoTMA' readOnly disabled value={tma?.tipoTMA} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tmaIN</label>
                    <input type="text" id='tmaIN' readOnly disabled value={tma?.tmaIN} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">comentarios</label>
                    <input type="text" id='comentarios' readOnly disabled value={tma?.comentarios} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Colocacion Concreto*/}   
<div className='mb-4'>
                <h5>Colocacion Concreto:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='sistemaColocacion' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select sistemaColocacion</option>
                        {colocacionConcreto?(colocacionConcreto.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.sistemaColocacion}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">equipos</label>
                    <input type="text" id='equipos' readOnly disabled value={colocacionCon?.equipos} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-8 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">comentarios</label>
                    <input type="text" id='comentarios' readOnly disabled value={colocacionCon?.comentarios} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Permeabilidad Ion Cloruro*/}   
<div className='mb-4'>
                <h5>Permeabilidad Ion Cloruro:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='penetrabilidadIonCloruro' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select penetrabilidadIonCloruro</option>
                        {permeabilidadIonCloruro?(permeabilidadIonCloruro.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.penetrabilidadIonCloruro}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cargaPesada</label>
                    <input type="text" id='cargaPesada' readOnly disabled value={permeabilidadIon?.cargaPesada} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-8 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cometarios</label>
                    <input type="text" id='cometarios' readOnly disabled value={permeabilidadIon?.cometarios} className="form-control"/>
                    </div> 
                </div>
                </div>

{/*Revenimiento*/}   
<div className='mb-4'>
                <h5>Revenimiento:</h5>
                <hr></hr>
                <div className='row '>
                    <select className="form-select mb-3" id='mm' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select mm</option>
                        {revenimiento?(revenimiento.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.mm}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cm</label>
                    <input type="text" id='cm' readOnly disabled value={reven?.cm} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">IN</label>
                    <input type="text" id='IN' readOnly disabled value={reven?.IN} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipoConsistencia</label>
                    <input type="text" id='tipoConsistencia' readOnly disabled value={reven?.tipoConsistencia} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-12 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">cometarios</label>
                    <input type="text" id='cometarios' readOnly disabled value={reven?.cometarios} className="form-control"/>
                    </div> 


                </div>
                </div>

{/*Adictivo*/}   
<div className='mb-4'>
                <h5>Adictivo:</h5>
                <div className='row '>
                    <select className="form-select mb-3" id='adictivo' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select adictivo</option>
                        {adictivo?(adictivo.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.adictivo}</option>
                        ))):(null)
                        }
                    </select>

                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tipo</label>
                    <input type="text" id='tipo' readOnly disabled value={adic?.tipo} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-8 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">comentario</label>
                    <input type="text" id='comentario' readOnly disabled value={adic?.comentario} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-12 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">usoAplicaciones</label>
                    <input type="text" id='usoAplicaciones' readOnly disabled value={adic?.usoAplicaciones} className="form-control"/>
                    </div> 

                </div>
                </div>

{/*Color Concreto*/}   
<div className='mb-4'>
                <h5>Color Concreto:</h5>
                <div className='row '>
                    <select className="form-select mb-3" id='color' onChange={asignarValores}  aria-label="Default select example">
                        <option selected>select color</option>
                        {colorConcreto?(colorConcreto.map((item)=>(
                            <option key={item._id}  id={item._id} value={item._id} >{item.color}</option>
                        ))):(null)
                        }
                    </select>
                    
                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">absorcionCapilarMM</label>
                    <input type="text" id='absorcionCapilarMM' readOnly disabled value={colorC?.absorcionCapilarMM} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tiempoTrabajabilidad</label>
                    <input type="text" id='tiempoTrabajabilidadExtendidahrs' readOnly disabled value={colorC?.tiempoTrabajabilidadExtendidahrs} className="form-control"/>
                    </div> 

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">tansmiteLuz</label>
                    <input type="text" id='tansmiteLuz' readOnly disabled value={colorC?.tansmiteLuz ? 'si':'no'} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">coeficienteDilatacionT</label>
                    <input type="text" id='coeficienteDilatacionTermica' readOnly disabled value={colorC?.coeficienteDilatacionTermica} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">emisividad</label>
                    <input type="text" id='emisividad' readOnly disabled value={colorC?.emisividad} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">permeabilidadAgua</label>
                    <input type="text" id='permeabilidadAgua' readOnly disabled value={colorC?.permeabilidadAgua} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">reflexivilidad</label>
                    <input type="text" id='reflexivilidad' readOnly disabled value={colorC?.reflexivilidad} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">resistividadElectricaOhmios</label>
                    <input type="text" id='resistividadElectricaOhmios' readOnly disabled value={colorC?.resistividadElectricaOhmios} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">contenidoCloruro</label>
                    <input type="text" id='contenidoCloruro' readOnly disabled value={colorC?.contenidoCloruro} className="form-control"/>
                    </div>
                    
                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">comportamiento</label>
                    <input type="text" id='comportamiento' readOnly disabled value={colorC?.comportamiento} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">contenidoAire</label>
                    <input type="text" id='contenidoAire' readOnly disabled value={colorC?.contenidoAire} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">ConductividadT-kcalm2hC</label>
                    <input type="text" id='conductividadTermica_kcalm2hC' readOnly disabled value={colorC?.conductividadTermica_kcalm2hC} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">conductividadTe-wm2k</label>
                    <input type="text" id='conductividadTermica_wm2k' readOnly disabled value={colorC?.conductividadTermica_wm2k} className="form-control"/>
                    </div>

                    <div className="mb-3 col-md-3 col-sm-12">
                    <label htmlFor="exampleInputEmail1"   className="form-label">calorEspecifico_JKGc</label>
                    <input type="text" id='calorEspecifico_JKGc' readOnly disabled value={colorC?.calorEspecifico_JKGc} className="form-control"/>
                    </div>

                </div>
                </div>
{/*Concreto Premezclado*/} 

<div className='mb-4' >

                <h5>Concreto Premezclado:</h5>
                <div className='row'>
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">codigoOmniclass</label>
                    <input type="text" id='codigoOmniclass' value='23-133113' disabled readOnly className="form-control" />
                    </div> 
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">codigoBimsa</label>
                    <input type="text" id='codigoBimsa' value='8989-5445-455454' disabled readOnly className="form-control"/>
                    </div> 
                    <div className="mb-3 col-md-4 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">codigoCyC</label>
                    <input type="text" id='codigoCyC' value={`23-133113-${genRanHex(5)}`} disabled readOnly className="form-control"/>
                    </div> 
                    <div className="mb-6 col-md-6 col-sm-12">
                    <label className="form-label">descripción Corta</label>
                    <input type="text" id='desCorta' value={fromres?`Resistencia ${resConcreto?.kgcm2} classe Exposicion ${claseEx?.categoria}`:''} disabled readOnly className="form-control"/>
                    </div> 
                    <div className="mb-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Descripción Corta en Inglés</label>
                    <input type="text" id='desCortaIngles' disabled readOnly value={fromres ? `Resistencia ${resConcreto?.kgcm2} classe Exposicion ${claseEx?.categoria}`:''} className="form-control" />
                    </div> 

                    <div className="mb-3 col-md-12 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Descripción Larga</label>
                    <input type="text" id='desLarga' value={fromres?`Resistencia ${resConcreto?.kgcm2} classe Exposicion ${claseEx?.categoria}`:''} disabled readOnly className="form-control"  />
                    </div> 

                    <div className="mb-3 col-md-12 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">Descripción Larga en Inglés</label>
                    <input type="text" id='desLargaIngles' value={fromres?`Resistencia ${resConcreto?.kgcm2} classe Exposicion ${claseEx?.categoria}`:''} disabled readOnly className="form-control" />
                    </div> 

                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">uso</label>
                    <input type="text" id='uso' className="form-control" required/>
                    </div> 

                    <div className="mb-3 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">materialcol</label>
                    <input type="text" id='materialcol' className="form-control" required />
                    </div> 
                </div>
                </div>
                <div style={{textAlign:'right'}}>
                <input type='submit'  className='btn btn-success' value='Registrar'></input>
                </div>
                
            </div>
            <div className='concreto-premezclado-form-footer'>
                
            </div>
        </form>
        </div>}
    </div>
  )
}

export default CementoPremezclado