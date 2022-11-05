import React, { Component } from 'react'
import style from './GlassStyle.module.css'
const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
export default class GlassesLayout extends Component {

    renderGlass = () => {
        return data.map((item, index) => {
            return <div className="col-4" key={index}>
                <img src={item.url} alt="" height={'100%'} width={'100%'} onClick={() => { this.changeGlass(item) }} />
            </div>
        })
    }

    render() {
        const { id, price, name, url, desc } = this.state.glass
        return (
            <div>
                <h3 className='bg-dark text-white text-center p-5'>TRY GLASSES APP ONLINE</h3>
                <div className="container">
                    <div className="row text-center mt-5">
                        <h3>Model</h3>
                        <div className='row'>
                            <div className="col-6">
                                <img src="./img/model.jpg" alt="..." />
                            </div>
                            <div className="col-6" style={{ position: 'relative' }}>
                                <img src="./img/model.jpg" alt="..." />
                                <div className={`${style['glass-change']}`}>
                                    <img src={url} alt="" width={'50%'} />
                                    <div className={`${style['glass-info']}`} >
                                        <p className='px-5 text-success'>{name}</p>
                                        <p className='px-5 text-danger'>{price} $</p>
                                        <p className='px-5 text-primary'>{desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 text-center">
                            <h3>Glass List</h3>
                            <div className="row">
                                {this.renderGlass()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    state = {
        glass: {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changeGlass = (itemClick) => {
        this.setState({
            glass: itemClick
        })
    }

}
