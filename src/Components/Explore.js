import React from 'react'
import { data } from '../static-data'

const Explore = () => (
    <div className='explore'>
        <h2>Explore Airbnb</h2>
        <div className='categories'>
            {data.explore.map(category => (
                <div className='category'>
                    <img
                        src={category.src}
                        alt={category.name}
                        width='100px'
                        height='70px'
                    />
                    <span>{category.name}</span>
                </div>
            ))}
        </div>
    </div>
)

export default Explore