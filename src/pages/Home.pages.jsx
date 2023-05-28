import React from 'react'
import './Home.pages.css'
import Navbar from '../componenets/navbar/Navbar.component'
import Circle_carousel from '../componenets/curcles/Curcles.component'
import Main from '../componenets/main/Main.component'
import Kategoriya from '../componenets/categories/Categ.comp'
import Obuv from '../componenets/Obuv/Obuv.comp'
import Kiyim from '../componenets/Kiyim/Kiyim.comp'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Circle_carousel/>
      <Main/>
      <Kategoriya/>
      <Obuv/>
      <Kiyim/>
    </div>
  )
}
