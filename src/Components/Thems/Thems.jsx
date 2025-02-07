import React, { useEffect, useState } from 'react'
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from "react-icons/bs"
import "./thems.css"
import ThemsItem from './../ThemsItem';
import {themes} from "../../data"

const getStorageColor=()=>{
    let color = 'hsl(252 ,35%,51%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}
const getStorageTheme=()=>{
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
}



const Thems = () => {
    const[showSwitch, setShowSwitch]=useState(false)
    const[color , setColor]=useState(getStorageColor())
    const [theme , setTheme]= useState(getStorageTheme())
    const changeColor= (color)=>{
        setColor(color)
    }


    const toogleTheme=()=>{
        if(theme==='light-theme'){
            setTheme('dark-theme')
        }else{
            setTheme('light-theme')
        }
    }
    useEffect(()=>{
document.documentElement.style.setProperty('--first-color',color);
localStorage.setItem('color', color);
    },[color])


    useEffect(()=>{
        document.documentElement.className=theme;
        localStorage.setItem('theme', theme);

            },[theme])

    return (
        <div>
            <div className={`${showSwitch ? 'show-switcher' : ''} style__switcher`}>
                <div onClick={()=>setShowSwitch(!showSwitch)} className="style__switcher__toggler" >
                    <FaCog />
                </div>
                <div className="theme__toggler" onClick={toogleTheme}>
                    {theme==='light-theme' ?<BsMoon/> :<BsSun/>}
                </div>
                <h3 className="style__switcher__title">Style Switcher</h3>
                <div className="style__switcher__items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemsItem key={index} {...theme} changeColor={changeColor} />
                        )
                    })}
                </div>
                <div className="style__switcher__close" onClick={()=>setShowSwitch(!showSwitch)}>
                <i class="fa-solid fa-rectangle-xmark"></i>
                </div>
            </div>
        </div>
    )
}

export default Thems
