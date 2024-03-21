import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Detalhes.css"

function Detalhes() {
    const { imdbID } = useParams()
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

    if (!filme) return "Carregando"
    return (
        <>
            <div className="container">
                <h1>Discolândia </h1>F
                <div>
                    <img src={filme.Poster} />
                    <h1>{filme.Title}</h1>
                </div>
            </div>

        </>
    )
}

export default Detalhes