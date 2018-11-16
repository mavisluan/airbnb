import React from 'react'
import '../header.css'

const Header = () => (
    <div className='header'>
        <div className='logo'>
            <span>Airbnb</span>
            Book unique homes and expriences.
        </div>
        <div className='search-input'>
            <div className='location'>
                WHERE
                <input
                    type='text' 
                    placeholder='Beijing, China'
                />
            </div>
            <div className='duration'>
                <div>
                    <span>CHECK IN</span>
                    <span>CHECK OUT</span>
                </div>
                <div>
                    <input
                        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0,  borderRight: 0
                        }}
                        type='text' placeholder='mm/dd/yyyy'
                    />
                    <input
                        style={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0,
                        }}
                        type='text' placeholder='mm/dd/yyyy'
                    />
                </div>
            </div>
            <div className='people'>
                GUESTS
                <input
                    placeholder='Guests'
                />
            </div>
            <div className='search'>
                <div>Search</div>
            </div>
        </div>
    </div>
)

export default Header