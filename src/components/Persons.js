import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Persons = () => {

    const { id } = useParams();

    const [persons, setPersons] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [persons])

    const obtenerDatos = async () => {
        const data = await fetch(`https://swapi.dev/api/people/${id}`)
        const personajes = await data.json()
        setPersons(personajes)
    }


    return (
        <div className="col-6 container my-3 text-light text-center">
            <div className="card bg-dark py-3">
                <h3 className="card-title">{persons.name}</h3>
                <p>Gender: {persons.gender}</p>
                <p>Hair-Color: {persons.hair_color}</p>
                <p>Eye-color: {persons.eye_color}</p>
            </div>
        </div>
    )
}

export default Persons
