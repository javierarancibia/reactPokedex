import React, { useState, useEffect} from 'react'

const Pokemons = () => {

    const apiUrl = 'https://pokeapi.co/api/v2/'
    const [pokemons, setPokemons] = useState([])

    useEffect(() =>{
        fetch(apiUrl).then((response) =>{
            return response.json()
        }).then((data) => {
            const requestedPokeProperties = data.results.map(poke => {
                return {
                    
                }
            })
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}
export default Pokemons