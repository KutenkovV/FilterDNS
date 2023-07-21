'use client'

import { useState } from "react"
import { FilterItem } from './filter-item/FilterItem'
import "./Filter.css"

export const Filter = () => {

    const select_options = [
        { title: 'Samsung' },
        { title: 'Acer' },
        { title: 'AMD' },
        { title: 'Apple' },
        { title: 'Dell' },
        { title: 'Huawei' },
    ]

    const stock = [
        { title: 'В наличии' },
        { title: 'Под заказ: сегодня' },
        { title: 'Под заказ: завтра' },
        { title: 'Под заказ: позже' },
        { title: 'Отсутствующие в продаже' },
    ]

    const [isActive, setIsActive] = useState(true)
    const [position, setPosition] = useState(0)

    const handleClick = (event) => {
        let position = event.getBoundingClientRect()
        setPosition(position.y)
        setIsActive(false)

        setTimeout(() => {
            setIsActive(true)
        }, 2000)
    }

    return (
        <>
            <div className="filters">
                <div className="filters__list">
                    <FilterItem title={'Наличие в магазинах'} data={stock} state={true} handleClick={handleClick} />
                    <FilterItem title={'Производители'} data={select_options} state={false} handleClick={handleClick} />
                </div>
                <div className="filters-buttons">
                    <button className="btn-main">Применить</button>
                    <button className="btn-drop">Сбросить</button>
                </div>
                <div className={isActive ? "filters-float-btn" : "filters-float-btn btn-active"} onClick={() => console.log('Самый лучший программист')} style={{ top: `${position - 96}px` }}></div>
            </div>
        </>
    )

}