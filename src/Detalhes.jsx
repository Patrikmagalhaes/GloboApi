import { useParams } from "react-router-dom"

function Detalhes(){
    const {imdbID} = useParams()
    return(
        <>
        <h1>Opa</h1>
        </>
    )
}

export default Detalhes