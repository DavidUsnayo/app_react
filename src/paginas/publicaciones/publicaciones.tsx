import { useParams, Link } from "react-router-dom"
import style from './publicaciones.module.css'
import { useContext, useState, useEffect } from "react"
import { Contexto } from "../../contexto/contexto"
import { obtenerColor } from "../../componentes/cardPosteo/cardPosteio"

import { Comentario } from "../../componentes/comentario/comentario"

interface Comments {
    postId: number;
    id: string;
    name: string
    email: string
    body: string
}

export function Publicaciones(){

    const params = useParams()
    const {post, usuarios} = useContext(Contexto)

    const [comentarios, setComentarios] = useState<Comments[]>([])
    
    const id = params.id ? parseInt(params.id) : 0;

    const publicacion = post?.find(item => item.id == id) //buscar publicacion Especifico
    const person = usuarios?.find(item => item.id == publicacion?.userId) //buscar usuario especifico

    //Obtener Comentarios de Publicacion
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then((data) => {
            setComentarios(data)
            console.log('Comentarios', data)
        })
        .catch((err)=>{console.log(err)})
    },[id])

    return(
        <div className={style.contenedor_publicaciones}>
            <div className={style.perfil}>
                <div className={style.foto} style={{border: `2px solid ${obtenerColor(person?.name)}`}}></div>
                <h3 className="font-bold text-xl"> {person && person.name} </h3>
            </div>
            <div className={style.publi}></div>
            <div className={style.box_card}>
                <h3> {publicacion && publicacion.title} </h3>
                <p> {publicacion && publicacion.body} </p>
            </div>
            <div className={style.links}>
                <Link to={`/pagina-principal/${id-1}`}> ANTERIOR </Link>
                <Link to={`/pagina-principal/${id+1}`}> SIGUIENTE </Link>
            </div>
            <hr className={style.linea}/>
            <h2 className={style.comment}>Comentarios</h2>
            <div className={style.caja_comentarios}>
                <Comentario listas={comentarios}/>
            </div>
        </div>
    )
}