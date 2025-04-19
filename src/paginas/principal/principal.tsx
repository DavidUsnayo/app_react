import style from './principal.module.css'
import { CardPosteo } from "../../componentes/cardPosteo/cardPosteio"

//CONETEXTO
import { useContext } from "react"
import { Contexto } from "../../contexto/contexto"

export function Principal(){
    const {resultados} = useContext(Contexto)
    return(
        <div className={style.contenedor_principal}>
            <div className={style.publicaciones}>
                {resultados?.length == 0 ? <p>No hay Resultados</p> : resultados && resultados.map((info,index)=>{
                    return(
                        <CardPosteo key={index} rutaId={info.id} title={info.title} idUser={info.userId} />
                    )
                })}
            </div>
        </div>
    )
}