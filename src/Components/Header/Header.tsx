import React from "react";
import style from "./Header.module.css";


function Header<T extends object>(props: T) {
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>Manga Adviser</h1>
            <div className={style.actionsWrapper}>
                <button className={style.header__action}>Random</button>
                <button className={style.header__action}>Filters</button>
            </div>
            <input type="text" className={style.header__searchField}/>
        </header>
    )
}

export default Header