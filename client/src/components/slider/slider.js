import React, { useState } from 'react'
import './slider.css'

export const Slider = (props) => {
    let [currentSlide, setCurrentSlide] = useState(0)
    const goNext = () => {
        setCurrentSlide(currentSlide === props.children.length - 1 ?
            currentSlide = 0 :
            currentSlide += 1);
        console.log('next', props.children);
    };
    const goPrev = () => {
        setCurrentSlide(currentSlide === 0 ?
            currentSlide = props.children.length - 1 :
            currentSlide -= 1);
        console.log('prev', currentSlide);
    };
    return (
        <div className="carousel-container">
            <button
                {...{
                    onClick: goPrev
                }}
            >{'<'}</button>

            <div className="slides-container">
                {props.children[currentSlide === 0 ? props.children.length - 1 : currentSlide - 1]}
                {props.children[currentSlide]}
                {props.children[currentSlide === props.children.length - 1 ? 0 : currentSlide + 1]}
            </div>

            <button
                {...{
                    onClick: goNext
                }}
            >{'>'}</button>
        </div>
    )
}