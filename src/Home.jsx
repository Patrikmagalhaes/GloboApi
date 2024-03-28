import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        fetch(`https://api.cartola.globo.com/clubes`)
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

    if (!times || !Array.isArray(times)) {
        return "Carregando"; // ou outra mensagem de carregamento
    }

    return (
        <>
            <h1>prova</h1>
            <div>
                {times.map((item) => (
                    <div className="time-foto" key={item.id}>
                        <img src={item.escudos["45x45"]} />
                        <Link to={`detalhes/${item.id}`}>
                            <div className="times-nome">
                                <h2>{item.nome}</h2>
                                <h3>{item.apelido}</h3>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;

