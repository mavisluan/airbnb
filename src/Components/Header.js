import React from 'react'
import SearchInput from './SearchInput'
import '../header.css'

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <span>Airbnb</span>
            Book unique homes and expriences.
        </div>
        <SearchInput />
    </div>
)

export default Header