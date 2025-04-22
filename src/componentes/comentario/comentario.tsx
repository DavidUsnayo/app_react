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
            <div className="flex gap-3 m-3 py-4 px-3 bg-[#fcfcfc] rounded-xl" key={index}>
                <div className='bg-gray-400 min-w-9 max-h-9  rounded-full'></div>
                <div>
                    <h4 className='text-bold'> {info.email} </h4>
                    <p className='text-[15px] text-gray-500 leading-[20px]'> {info.body} </p>
                </div>
            </div>
            )
        })}
        </>
    )
}