import { useState ,useEffect } from 'react'
import Axios from 'axios'
import { CgAdidas } from 'react-icons/cg'
import './Kiyim.comp.css'
export default function Kiyim() {
  const [massiv, setMassiv] = useState([])
  useEffect(() => {
    Axios.get('https://api.npoint.io/98d1a460461688d7ee46')
      .then(ress => {
        console.log(ress);
        setMassiv(ress.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className='container kiyim_container'>
      <p className='Kiyim_title'>Одежды</p>
      <div className="obuv">
        {
          (massiv) && massiv.map((item, index) => {
            return (
              <div key={index} className='obuvi'>
                <div className='obuv_card'>
                  <img width="100%" style={{objectFit: 'cover'}} src={item.img} alt={item.name} />
                  <div className='Card_footer'>
                    <div className='footer_end'>
                      <p className='item_narxi'>{item.narx} $</p>
                      <p className='Item_nomi'>Krasovka</p>
                    </div>
                    <span className='adidas_icon'><CgAdidas /></span>
                  </div>
                </div>
                <button type='button' className='dobavit_btn'>Добавлять</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
