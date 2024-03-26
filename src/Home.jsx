import { useState, useEffect,  } from "react"
import { Link } from "react-router-dom"
import './Home.css'
import { motion } from 'framer-motion'
import Carousel from "./Carousel"
function Home() {
    const [pesquisa, setPesquisa] = useState("Batman")
    const [filmes, setFilmes] = useState(null)
  



    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=28d0dee8&type=movie&s=${pesquisa}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response == 'False') {
                    console.log(data)
                } else {
                    setFilmes(data)
                }
            })

    }, [pesquisa])

    const pesquisarItens = (valorPesquisa) => {

        const valorInput = valorPesquisa.split("")
        if (valorInput.length > 2) return setPesquisa(valorPesquisa)

    }


 

    if (!filmes) return "Carregando"



    return (
        <>
            <div className="container">

                <header style={{ backgroundImage: 'url("https://img.freepik.com/vetores-premium/paisagem-dos-planetas-espaciais-da-galaxia-ai-gerou-cena-de-jogo-de-pixels-de-8-bits-mundo-virtual-inspirado-em-retro-com-charme-nostalgico-pixelado-superficie-do-planeta-alienigena-com-paisagem-estelar-do-universo-distante-nivel-de-jogo-2d_8071-54914.jpg?w=826")', height: '50vh', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                    <div className="inicio">
                        <motion.h1 >NebulaFlix</motion.h1>
                        <div className="pesquisa">
                            <input placeholder="Pesquise por filmes, séries..." onChange={(e) => pesquisarItens(e.target.value)} />
                            <button>Buscar</button>
                        </div>
                    </div>
                </header>

                <Carousel filmes={filmes}/>

                <ul> {filmes.Search.map((item) =>
                    <Link to={`detalhes/${item.imdbID}`}>  <li>
                        <span className="titulo">{item.Title} </span>< img src={item.Poster} />
                    </li></Link>)}
                </ul>
            </div>
        </>
    )
}

export default Home