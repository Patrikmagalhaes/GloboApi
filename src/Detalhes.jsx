import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "./Header";
function Detalhes() {
    const { id, nome } = useParams()
    const [times, setTimes] = useState(null)


    useEffect(() => {
        fetch(`https://api.cartola.globo.com/atletas/mercado/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTimes(data);
                console.log(data)
            });
    }, []);

    const mudarResolucao = (imagem) => {

        const formato = imagem.replace('FORMATO', '220x220')

        return formato

    }

    if (!times || times == null) return "Carregando"
    return (
        <>
            <Header />
            <div className="container">

                <div >
                    <h2 className="titulo">Jogadores do {nome}</h2>
                    {times.atletas.map((item) => (
                        <div className="time-foto" key={item.id}>

                            <div className="flex">

                                <img className="jogador" src={mudarResolucao(item.foto)} alt="" />
                                <h3 >{item.apelido}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Detalhes