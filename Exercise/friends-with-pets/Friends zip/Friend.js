import React from 'react'

const Friend = props => {
    console.log(props)

    const mappedPets = props.pets.map((pet, i) => {
        console.log(pet)
        return(
            <div>
                <p>Pet Name: {pet.name}</p>
                <p>Pet Breed: {pet.breed}</p>
            </div>
        )
    })

    return(
        <div>
            <h4>{props.name}</h4>
            <h6>{props.age}</h6>
            <div>
                <p><ul>Pets:</ul></p>
                { mappedPets }
            </div>
        </div>
    )
}

export default Friend