import { Link } from "react-router-dom"
import style from './cardPosteo.module.css'

import { Contexto } from "../../contexto/contexto";
import { useContext } from "react";

interface propCard{
    rutaId:number;
    title:string;
    idUser:number
}

export function obtenerColor(name:any){
    switch (name) {
        case 'Leanne Graham': return 'lightblue'
        case 'Ervin Howell': return 'lightgreen'
        case 'Clementine Bauch': return 'pink'
        case 'Patricia Lebsack': return 'orange'
        case 'Chelsey Dietrich': return 'lightcoral'
        case 'Mrs. Dennis Schulist': return 'gold'
        case 'Kurtis Weissnat': return 'lightyellow'
        case 'Nicholas Runolfsdottir V': return 'skyblue'
        case 'Glenna Reichert': return 'lightgray'
        case 'Clementina DuBuque': return 'khaki'
        default: return 'white'
    }
}

export function CardPosteo({rutaId, title, idUser}:propCard){
    const {usuarios} = useContext(Contexto)
    const person = usuarios?.find(item => item.id == idUser)
    return(
        <Link to={`/pagina-principal/${rutaId}`}>
            <div className={style.post}>
                <div className={style.imagen}>
                    <p style={{background: obtenerColor(person?.name)}}> {person && person.name} </p>
                </div>
                <div className={style.info}>
                    <h4>{title} </h4>
                </div>
            </div>
        </Link>
    )
}