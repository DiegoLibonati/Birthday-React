import React from 'react'

export const List = ({people}) => {
  return (
    <>
    {
        people.map(person => {
            const {id, name, age, image} = person;
            return (
                <div key={id} className="person_container">
                    <img src={image} alt={name}></img>
                    <div className='person_container_text'>
                        <h3>{name}</h3>
                        <p>{age} years</p>
                    </div>
                </div>
            );
        })
    }
    </>
  )
}

