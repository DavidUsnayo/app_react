import { useEffect, useState, useContext } from 'react'
import style from './navegacion.module.css'
import { useLocation } from 'react-router-dom'
import { Post } from '../../contexto/contexto'

//contexto
import { Contexto } from '../../contexto/contexto'

export function Navegacion(){

    const {usuarios, client, setClient, filtrarCard, setResultados } = useContext(Contexto)

    const location = useLocation()
    
    const cambio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setClient(e.target.value);
    }

    //Mostrar y Ocultar Navegacion
    useEffect(() => {
        if (location.pathname === "/pagina-principal") {
            setTall("0px"); 
        } else {
            setTall("-200px"); 
        }
    }, [location.pathname]);

    //FILTRAR BUSCADOR
    function buscar(e: React.ChangeEvent<HTMLInputElement>){
        filtrarResultados(e.target.value)
    }
    function filtrarResultados(valor:string){
        if (valor === '') {
            setResultados(filtrarCard)
        } else {
            const filtrados: Post[] = filtrarCard?.filter(item =>
                item.title.toLowerCase().includes(valor.toLowerCase()) //filtrar sin importar mayusculas o minusculas
            )
            setResultados(filtrados);
        }
    };

    const [tall, setTall] = useState('0px')

    return(
        <div className={style.caja_nav}>
            <div className={style.navegacion} style={{top:tall}}>
                <form className={style.form}>
                    <input type="text" placeholder='Buscar Publicacion' onChange={buscar}/>
                    <button>BUSCAR</button>
                </form>
                <div className={style.filtrar}>
                        <p>Filtrar : </p>
                        <select value={client} onChange={cambio}>
                            <option value=''> TODO </option>
                            {usuarios && usuarios.map((us, index)=>{
                                return(
                                    <option key={index} value={us.id}> {us.name} </option>
                                    )
                                })}
                        </select>
                    </div>
            </div>
        </div>
    )
}