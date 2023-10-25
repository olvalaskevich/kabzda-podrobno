import React from 'react';
import '../../index.css'

export type BtnPropsType={
    title:string
    name?:string
    onChange?:()=>void
}

export const Button = (props:BtnPropsType)=> {
    return (<div>
        <button className={props.name} onClick={props.onChange}>{props.title}</button>
    </div>)
}

