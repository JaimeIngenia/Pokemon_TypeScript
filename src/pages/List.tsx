import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPokemons } from '../controller/getpokemon';
import { Pokemon } from '../models/pokemon.m';
import Figure from 'react-bootstrap/Figure';

export const List = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("")

    useEffect(()=>{
        const ObtenerTodos = async( )=>{
            const allPokemons = await getPokemons(); 
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    })

    const filtrarpoquemon = pokemons?.slice(0.101).filter((pokemon) =>{
        return pokemon.name.toLowerCase().match(query.toLocaleLowerCase())
    })

  return (
    <>


        <h1>Pokemon JaimeCode</h1>

        <header className='mt-3 mb-3'>
            <input 
            type="text" 
            value={query}
            placeholder='Buscar Pokemon'
            onChange={(event) => setQuery(event.target.value.trim())}
            />
        </header>

        <div className="content-wrapper">
            <div className="content">
                <div className="row gap-3">


                    {filtrarpoquemon?.slice(0,101).map( (pokemon) =>(

                    



                    <Card key= {pokemon.id} className='mx-auto' style={{ width: '18rem'}}>
                        <Card.Header> <b>Tipo:</b>  {pokemon.type}</Card.Header>
                        <Card.Img className='d-block mx-auto w-50' width='80' height='100' variant="top" src={pokemon.imggif} />
                        <Card.Body >
                            <Card.Title className='text-center'>{pokemon.id} - {pokemon.name}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                        <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/9673/9673958.png"
                                            />
                                            <b> HP:</b>  {pokemon.hp}

                                </ListGroup.Item>

                                <ListGroup.Item> 
                                        <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/458/458549.png"
                                            />
                                        <b> Ataque:</b>  {pokemon.attack} 
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                        <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/1866/1866922.png"
                                            />
                                    <b> Defensa:</b>  {pokemon.defense}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/4694/4694753.png"
                                            />
                                    <b> E.Ataque:</b>  {pokemon.sp_atk}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/5106/5106304.png"
                                            />
                                    <b> E.Defensa:</b>  {pokemon.sp_def}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image
                                            width={16}
                                            height={16}
                                            src="https://cdn-icons-png.flaticon.com/128/2315/2315647.png"
                                            />
                                    <b> velocidad:</b>  {pokemon.speed}
                                </ListGroup.Item>

                            </ListGroup>
                    
                        </Card.Body>
                    </Card>
                    ))}
                </div>
            </div>
        </div>
        
    </>
  )
}


