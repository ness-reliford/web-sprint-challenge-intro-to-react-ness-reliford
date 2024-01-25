import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {

  const [people, setPeople] = useState([])
  console.log(people)
  
  
  useEffect(() => {

    axios.get(urlPeople).then(res => {
      const peopleData = res.data
      //console.log(peopleData)

      axios.get(urlPlanets).then(res2 => {
        const planetsData = res2.data
        //console.log(planetsData)

        const peopleWithPlanets = peopleData.map((person) => {
          return {
            ... person,
            homeworld: planetsData.find((planet) => planet.id === person.homeworld)
          }
        })
        setPeople(peopleWithPlanets);
      })
    })

  }, [])
  
 
  return (
    
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      
      
      {people.map((char, idx) => (

        <Character key = {idx} name = {char.name} homeworld = {char.homeworld}/>

      ))}
    
 
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
