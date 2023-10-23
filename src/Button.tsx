import React from 'react';
import './index.css'

export type BtnPropsType={
    title:string
    name?:string
    tumbler?:()=>void
}

export const Button = (props:BtnPropsType)=> {
    return (<div>
        <button className={props.name} onClick={props.tumbler}>{props.title}</button>
    </div>)
}

