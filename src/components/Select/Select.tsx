import React from 'react';
import {selectedItemsType} from "../../App";
import s from './Select.module.css'

type SelectPropsType={
    value:string,
    selectedItems:selectedItemsType,
    valueState:boolean,
    onClickHead:()=>void,
    onClickItem:(title:string)=>void

}

export const Select = (props:SelectPropsType) => {
    return (
        <div className={s.wrapper}>

            <div className={s.title} onClick={props.onClickHead}>{props.value}</div>
<div className={s.wrapper2}>
            {props.valueState && props.selectedItems.map((i)=>{
                return <div className={s.children} key={i.id} onClick={()=>props.onClickItem(i.title)}>{i.title}</div>
            })}
</div>


        </div>
    );
};

