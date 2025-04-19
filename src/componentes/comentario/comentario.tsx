import style from './comentario.module.css'

interface Comments {
    postId: number;
    id: string;
    name: string
    email: string
    body: string
}
interface propCommet{
    listas:Comments[]
}

export function Comentario({listas}:propCommet){
    return(
        <>
        {listas.map((info,index)=>{
            return(
            <div className={style.comentario} key={index}>
                <div className={style.circle}></div>
                <div>
                    <h4> {info.email} </h4>
                    <p> {info.body} </p>
                </div>
            </div>
            )
        })}
        </>
    )
}