import './App.css'
import React, { useState } from 'react'
import { getData } from './components/db'
import Card from './card/card'
import Cart from './components/cart/cart'

const courses = getData()

const telegram = <window className="Telegram WebApp"></window>
const App = () => {

  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    telegram.ready();
  })
  const onAddItem = item => {
    const existItem = cartItems.find(c => c.id == item.id);

    if(existItem){
      const data = cartItems.map(c => c.id == item.id ? {...existItem, quantity: existItem.quantity + 1} : c)
      setcartItems(data)
    } else {
      const newData = [...cartItems, {...item, quantity: 1}];
      setcartItems(newData)
    }
  }

  const onRemoveItem = item => {
    const existItem = cartItems.find(c => c.id == item.id);
    if(existItem === 1){
      const newData = cartItems.filter(c => c.id != existItem.id);
      setcartItems(newData)
    } else{
      const newData = cartItems.map(c => c.id === existItem.id ? {...existItem, quantity: existItem.quantity -1} : c);
      setcartItems(newData)
    }
  }

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib Olish";
    telegram.MainButton.show()
  }
  return (
    <>
      <h1 className='heading'>Mustafo</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className='cards-container'>
        {courses.map(course => (
          <>
          <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>
          </>
        ))}
      </div>
    </>
  )
}

export default App