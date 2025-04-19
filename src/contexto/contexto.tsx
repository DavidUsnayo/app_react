import { createContext, useState, ReactNode, useEffect } from "react";

interface User {
    id: number;
    name: string;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface ContextoType {
    name: string;
    setName: (name: string) => void;
    load:boolean;
    setLoad: (load:boolean) => void;
    post:Post[] | null;
    setPost: (info:Post[]) => void;
    usuarios:User[] | null;
    setUsuarios: (usuarios:User[]) => void;
    client: string;
    setClient: (usuarios:string) => void;
    filtrarCard: Post[];
    resultados: Post[] | null;
    setResultados: (resultados:Post[]) => void;
}

export const Contexto = createContext<ContextoType>({
    name: "",
    setName: () => {},
    load: true,
    setLoad: () => {},
    post: null,
    setPost: () => {},
    usuarios: null,
    setUsuarios: () => {},
    client: "",
    setClient: () => {},
    resultados: [],
    setResultados: () => {},
    filtrarCard: []
})

interface VariablesContextoProps {children: ReactNode}

export function VariablesContexto({ children }: VariablesContextoProps) {
    const [name, setName] = useState("dav");
    const [load, setLoad] = useState(true);
    const [post, setPost] = useState<Post[]>([])
    const [usuarios, setUsuarios] = useState<User[]>([])
    
    
    //Filtrar por cliente y Busqueda
    const [client, setClient] = useState('')
    const filtrarCard = client == '' ? post : post?.filter((card)=> card.userId == parseInt(client))
    const [resultados, setResultados] = useState(filtrarCard)

    useEffect(()=>{
        setResultados(filtrarCard)
    },[client,post])

    async function obtenerPosteos(){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()            
            console.log(data)
            setPost(data)
            obtenerUsuarios()
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoad(false)
        }
    }
    function obtenerUsuarios(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data:User[]) => {
            const filteredData = data.map(({ id, name }) => ({ id, name }));
            setUsuarios(filteredData);
        })
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        obtenerPosteos()
    },[])

    return (
        <Contexto.Provider value={{ 
            name, setName, post, setPost, load, setLoad, usuarios, setUsuarios,
            client, setClient, filtrarCard, resultados, setResultados}}>
            {load ? <p>LOADING...</p> : children}
        </Contexto.Provider>
    );
}
