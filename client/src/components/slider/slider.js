import React, { useState } from 'react'
import './slider.css'
import goNextImg from './goNext.png'
import goPrevImg from './goPrev.png'


export class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.currentSlide = 0;
        this.slidesContainer = React.createRef();
        this.disabledBtns = false;
    }

    render(props) {
        var me = this;
        const goNext = () => {
            me.slidesContainer.current.classList.add('go-next-click');
            me.setState({disabledBtns: true});
            setTimeout(() => {
                me.setState({currentSlide: me.currentSlide === me.props.children.length - 1 ?
                    me.currentSlide = 0 :
                    me.currentSlide += 1,
                    disabledBtns: false
                });
                me.slidesContainer.current.classList.remove('go-next-click');
            }, 990);
        };
        const goPrev = () => {
            me.slidesContainer.current.classList.add('go-prev-click');
            me.setState({disabledBtns: true});
            setTimeout(() => {
                me.setState({
                    currentSlide: me.currentSlide === 0 ?
                        me.currentSlide = me.props.children.length - 1 :
                        me.currentSlide -= 1,
                    disabledBtns: false
                });
                me.slidesContainer.current.classList.remove('go-prev-click');
            }, 990);
        };

        return (
            <div className="carousel-container">
                <button
                    {...{
                        onClick: goPrev,
                        disabled: me.disabledBtns
                    }}
                >
                    <img src={goPrevImg} width="56" alt="<"/>
                </button>

                <div className="slides-container" ref={this.slidesContainer}>
                    {me.props.children[me.currentSlide === 0 ? me.props.children.length - 1 : me.currentSlide - 1]}
                    {me.props.children[me.currentSlide]}
                    {me.props.children[me.currentSlide === me.props.children.length - 1 ? 0 : me.currentSlide + 1]}
                </div>

                <button
                    {...{
                        onClick: goNext,
                        disabled: me.disabledBtns
                    }}
                >
                    <img src={goNextImg} width="56" alt=">"/>
                </button>
            </div>
        )
    }
}