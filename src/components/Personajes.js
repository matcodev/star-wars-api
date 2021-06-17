import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Personajes = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("https://www.swapi.tech/api/people")
        const personajes = await data.json()
        setEquipo(personajes.results)
    }

    return (
        <div className="container text-light">
            <div className="row">
                <h1>Personajes</h1>
            </div>
            <div className="row">
                {
                    equipo.map(item => {
                        return (
                            <div className="col-4">
                                <div className="my-3" key={item.uid}>
                                    <div className=" card bg-dark">
                                        <img src="https://dummyimage.com/300.png/09f/fff" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid.
                                            </p>
                                            <div className="d-grid gap-2 d-md-flex justify-content-between">
                                                <Link to={`/personajes/${item.uid}`} className="btn btn-primary">Ver más</Link>
                                                <button className="btn btn-danger" type="button"><i className="fas fa-heart" /></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Personajes;