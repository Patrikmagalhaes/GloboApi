import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
function Carousel({ filmes }) {


    const [width, setWidth] = useState(0)
    const carrousel = useRef()


    useEffect(() => {
        setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
        console.log("Valor", width)
    }, [width])

    return (
        <motion.div className="carrousel"
            ref={carrousel} >
            <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}>
                {filmes.Search.map((item) =>
                    <motion.div className="item" >
                        <Link
                            whileTap={{ cursor: "grabbing" }}
                            className="link"
                            to={`detalhes/${item.imdbID}`}>
                            < img src={item.Poster} />
                            <button>Detalhes</button>
                        </Link>
                    </motion.div>)}
            </motion.div>

        </motion.div>
    )

}

export default Carousel