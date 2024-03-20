import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Detalhes(){
    const {imdbID} = useParams()
const [filme, setFilme] = useState(null)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=28d0dee8&type=movie&i=${imdbID}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response == 'False') {
                    console.log(data)
                } else {
                    setFilme(data)
                }
            })

    }, [filme])

    if(!filme)return"Carregando"
    return(
        <>
     <h1>{filme.Title}</h1>
     <img src={filme.Poster}/>
        </>
    )
}

export default Detalhes