import { useState, useEffect } from "react"

function Home() {
    const [pesquisa, setPesquisa] = useState("Bat")
    const [filmes, setFilmes] = useState()

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=28d0dee8&type=movie&s=${pesquisa}`)

            .then(response => response.json())
            .then(data => {
                setFilmes(data)
            })



    }, [pesquisa])

    const pesquisarItens = (valorPesquisa) => {
        setPesquisa(valorPesquisa)
    }
    if (!filmes) {
        "Carregando"
    }
    else {
        return (
            <>
                <div>
                    {filmes.Search.map((item) => <li>{item.Title}</li>)}
                    <h1>Ola </h1>
                    <input onChange={(e) => pesquisarItens(e.target.value)} />
                    <button ></button>
                    <h2></h2>
                </div>
            </>
        )
    }
}

export default Home