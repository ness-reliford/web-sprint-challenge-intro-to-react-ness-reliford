import React from 'react'
import { useState } from 'react'

function Character({name, homeworld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeworld, setIsHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setIsHomeworld(!isHomeworld)
  }

  return (


    <div>
      <div  onClick={toggleHomeworld} className="character-card" >
        <h3 className="character-name">{name}</h3>
        {isHomeworld && (<p >Planet: 
          <span  className='character-planet'>{homeworld.name}</span>
        </p>)}
        
      </div>


      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
