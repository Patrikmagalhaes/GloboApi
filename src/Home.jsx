import { useState, useEffect } from "react"

function Home() {
    const [pesquisa, setPesquisa] = useState("Batman")
    const [filmes, setFilmes] = useState(null)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=28d0dee8&type=movie&s=${pesquisa}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response == 'False') {
                    console.log(data)
                }else{
                    setFilmes(data)
                }
            })

    }, [pesquisa])

    const pesquisarItens = (valorPesquisa) => {

        const valorInput = valorPesquisa.split("")
        if (valorInput.length > 2) return setPesquisa(valorPesquisa)

    }

 if(!filmes)return"Carregando"
        return (
            <>
                <div>
                <h1>Discolândia </h1>
                <input onChange={(e) => pesquisarItens(e.target.value)} />
                    <button>Buscar</button>
                   <ul>{filmes.Search.map((item) => <li>{item.Title} < img src={item.Poster}/></li>)}</ul>
                    <h2></h2>
                </div>
            </>
        )
    }
export default Home