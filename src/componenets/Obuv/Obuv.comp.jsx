import { useState ,useEffect } from 'react'
import Axios from 'axios'
import { CgAdidas } from 'react-icons/cg'
import './Obuv.comp.css'
export default function Obuv() {
  const [massiv, setMassiv] = useState([])
  useEffect(() => {
    Axios.get('https://api.npoint.io/09f380758dc525dc73d7')
      .then(ress => {
        console.log(ress);
        setMassiv(ress.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className='container obuv_container'>
      <p className='obuv_title'>Oбуви</p>
      <div className="obuv">
        {
          (massiv) && massiv.map((item, index) => {
            return (
              <div key={index} className='obuvi'>
                <div className='obuv_card'>
                  <img width="100%" style={{objectFit: 'cover'}} src={item.img} alt={item.name} />
                  <div className='Card_footer'>
                    <div className='footer_end'>
                      <p className='item_narxi'>{item.price} $</p>
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
