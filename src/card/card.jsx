import React from 'react'
import "../card/card.css"
import Button from '../components/button/button'
import { useState } from 'react'

const Card = props => {
    const [count, setCount] = useState(0)
    const { course, onAddItem, onRemoveItem } = props

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        onAddItem(course)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1);
        onRemoveItem(course)
    }

    return (
        <div className='card'>
            <span className={`${count != 0 ? 'card-badge' : 'card-badge_hidden'}`}>{count}</span>

            <div className="image-container">
                <img src={course.Image} width={"100%"} height={"230px"} alt={course.title} />
            </div>

            <div className="card-body">
                <h2 className='card-title'>{course.title}</h2>

                <div className="card-price">
                    {course.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            </div>

            <div className="hr"></div>


            <div className="btn-container">
                <Button title={"+"} onClick={handleIncrement} type={'add'}/>
                {count != 0 && (

                    <Button title={"-"} onClick={handleDecrement} type={'remove'}/>
                )}
            </div>
        </div>
    )
}

export default Card