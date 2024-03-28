import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Detalhes.css"

function Detalhes() {
    const { id } = useParams()
    const [times, setTimes] = useState(null)
    console.log(id)

    useEffect(() => {
        fetch(`https://api.cartola.globo.com/atletas/mercado/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Verifica se data é um objeto
                if (typeof data === "object" && !Array.isArray(data)) {
                    // Transforma o objeto em um array
                    const timesArray = Object.values(data);
                    setTimes(timesArray);
                } else {
                    console.error("A resposta da API não é um objeto válido.");
                }
            });
    }, []);

    if (!times) return "Carregando"
    return (
        <>
            <div className="container">
                <h1>Discolândia </h1>

                <div>
                {times.map((item) => (
                    <div className="time-foto" key={item.id}>
                     
                     
                            <div className="times-nome">
                                <h2>{item.atletas.apelido}</h2>
                            
                            </div>

                       
                    </div>
                ))}
            </div>

            </div>
        </>
    )
}

export default Detalhes