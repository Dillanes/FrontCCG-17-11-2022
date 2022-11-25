import { createContext,useState,useEffect,useContext } from "react";
import axios from 'axios'
import LoginContext from "./LoginContext";

 const concretoReforzadoContext = createContext()

   const ConcretoReforzadoProvider = ({children})=> {
    const {token} = useContext(LoginContext)

    const URLBASE = 'http://127.0.0.1:8000/api/'
    const config = {
        headers : {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token.access_token}`
           }
    }
    
    const [resistenciaConcreto, setResistenciaConcreto] = useState()
    const [claseExposicion, setClaseExposicion] = useState()
    const [edadResistencia, setEdadResistencia] = useState()
    const [contraccionSecado, setContraccionSecado] = useState()
    const [cemento, setCemento] = useState()
    const [agregado, setAgregado] = useState()
    const [moduloElasticidad, setModuloElasticidad] = useState()
    const [densidadConcreto, setDensidadConcreto] = useState()
    const [fibra, setFibra] = useState()
    const [TMA, setTMA] = useState()
    const [colocacionConcreto, setColocacionConcreto] = useState()
    const [revenimiento, setRevenimiento] = useState()
    const [adictivo, setAdictivo] = useState()
    const [colorConcreto, setColorConcreto] = useState()
    const [permeabilidadIonCloruro, setPermeabilidadIonCloruro] = useState()
    const [concretoPremez, setConcretoPremez] = useState()



    useEffect(() => {
        fechData()
    }, [])
    
    const fechData = ()=>{

        axios.get(`${URLBASE}resistenciaConcreto/`,config)
        .then(result=>{
            setResistenciaConcreto(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))


        axios.get(`${URLBASE}claseExposicion/`,config)
        .then(result=>{
            setClaseExposicion(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}edadResistencia/`,config)
        .then(result=>{
            setEdadResistencia(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}contraccionSecado/`,config)
        .then(result=>{
            setContraccionSecado(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}cemento/`,config)
        .then(result=>{
            setCemento(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}agregado/`,config)
        .then(result=>{
            setAgregado(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}moduloElasticidad/`,config)
        .then(result=>{
            setModuloElasticidad(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}densidadConcreto/`,config)
        .then(result=>{
            setDensidadConcreto(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}fibra/`,config)
        .then(result=>{
            setFibra(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))
        
        axios.get(`${URLBASE}TMA/`,config)
        .then(result=>{
            setTMA(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}colocacionConcreto/`,config)
        .then(result=>{
            setColocacionConcreto(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        
        axios.get(`${URLBASE}revenimiento/`,config)
        .then(result=>{
            setRevenimiento(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}adictivo/`,config)
        .then(result=>{
            setAdictivo(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}colorConcreto/`,config)
        .then(result=>{
            setColorConcreto(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))

        axios.get(`${URLBASE}permeabilidadIonCloruro/`,config)
        .then(result=>{
            setPermeabilidadIonCloruro(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))


        axios.get(`${URLBASE}concretoPremezclado/`,config)
        .then(result=>{
            setConcretoPremez(result.data.detail[0].data)
        })
        .catch(err => console.log('****************',err))
    }


    const saveCementoPremezclado = (data)=>{
        axios.post(`${URLBASE}concretoPremezclado/`,data,config)
        .then(res => {

            fechData()
            alert('Registro guardado')}
            
            )
        .catch(err => console.log(err))
    }

    const deleteCementoPremezclado = (id)=>{
        axios.delete(`${URLBASE}concretoPremezclado/${id}/`,config,data)
        .then(res => {
            fechData()
            alert('Registro Eliminado')}   
            )
        .catch(err => {
            console.log(err)
            alert('No se pudo eliminar el registro')
        }
            
            )
    }


    const data = {
        resistenciaConcreto,
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
        revenimiento,
        adictivo,
        colorConcreto,
        permeabilidadIonCloruro,
        saveCementoPremezclado,
        concretoPremez,
        deleteCementoPremezclado
      }

    return <concretoReforzadoContext.Provider value={data}>{children}</concretoReforzadoContext.Provider>
 }

   export {ConcretoReforzadoProvider}
   export default concretoReforzadoContext