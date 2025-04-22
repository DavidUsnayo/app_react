import { Link } from "react-router-dom"

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
        <Link to={`/pagina-principal/${rutaId}`}>  {/**min y max**/}
            <div className="my-1.5 rounded-xl bg-gray-50 min-w-[300px] max-w-[300px] sm:w-[340px] md:w-[300px] flex flex-col justify-between shadow-lg shadow-gray-300 overflow-hidden duration-500 hover:scale-[105%] ">
                <div className="h-[150px] bg-[#eaeaea] rounded-br-2xl rounded-bl-2xl">
                    <p className="m-2 py-[7px] px-3 rounded-lg text-[12px] opacity-70 w-fit" style={{background: obtenerColor(person?.name)}}> {person && person.name} </p>
                </div>
                <div className="flex justify-between p-2">
                    <h4 className="text-gray-700 heigh-[20px] font-bold w-7/10 overflow-hidden whitespace-nowrap text-ellipsis">{title} </h4>
                </div>
            </div>
        </Link>
    )
}