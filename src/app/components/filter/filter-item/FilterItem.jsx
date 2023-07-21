import '../Filter.css'
import { useState } from "react"

export const FilterItem = (props) => {
    const { title, data, state, handleClick } = props
    const [isActive, setIsActive] = useState(state)

    return (
        <>
            <div className="list-collapse">
                <a className={isActive ? "collapse-dropdown active" : "collapse-dropdown"} onClick={() => setIsActive(!isActive)}>
                    <span>{title}</span>
                </a>
                {
                    isActive && (
                        <div className="collapse-content">
                            <div className="input-search">
                                <input className="input-search__input" placeholder="Поиск" />
                            </div>
                            <div className="checkbox-group">
                                {data.map((item, idx) =>
                                    <label className="checkbox" key={idx}>
                                        <span>{item.title}</span>
                                        <input onClick={(event) => {
                                            handleClick(event.target)
                                        }} className="checkbox__input" id={idx} type="checkbox" value="idx" />
                                        <span className="checkbox__box"></span>
                                    </label>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}