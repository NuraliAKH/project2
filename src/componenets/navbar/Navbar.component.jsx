import React from 'react'
import './Navbar.component.css'
import { BsChevronDown, BsCart3 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'



export default function Navbar() {
    return (
        <div className='container'>
            <div className="navbar_category">
                <div className="select_col">
                    <select className='nav_select'>
                        <option selected value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                        <option value="Katigori">Категории</option>
                    </select>
                </div>
                <div className="nav_input">
                    <input type="number" className='' placeholder='start' />
                    <input type="number" className='summa_input' placeholder='end' />
                </div>
            </div>

            <div className=" search">
                <div className="search_bar">
                <span className='search_icon'> <AiOutlineMenu /> </span>
                <input type="text" className='form-control search_input' placeholder='Пoиск' />
                </div>
                <button type="button" className="korzinka position-relative">
                    < BsCart3 />
                    <span class="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-danger">
                        0
                    </span>
                </button>
            </div>

        </div>
    )
}
