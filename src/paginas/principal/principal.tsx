import { CardPosteo } from "../../componentes/cardPosteo/cardPosteio"

//CONETEXTO
import { useContext } from "react"
import { Contexto } from "../../contexto/contexto"

export function Principal(){
    const {resultados} = useContext(Contexto)
    return(
        <div className="w-5/7  !mx-auto mt-[150px]">
            <div className="flex justify-center gap-7 flex-wrap py-10">
                {resultados?.length == 0 ? <p>No hay Resultados</p> : resultados && resultados.map((info,index)=>{
                    return(
                        <CardPosteo key={index} rutaId={info.id} title={info.title} idUser={info.userId} />
                    )
                })}
            </div>
        </div>
    )
}