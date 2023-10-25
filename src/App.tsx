import React, {useState} from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";

import {Accordion} from "./components/Accordion/Accordion";
import {Button} from "./components/Button/Button";
import {OnOff} from "./components/Button/OnOff";
import {Select} from "./components/Select/Select";


type ItemsType={
    id:number,
    title:string
}

export type selectedItemsType=Array<ItemsType>

function App() {
    let [open, setOpen]=useState(false)

    let [ratingValue,setRatingValue]=useState(0)

    let [on, setOn]=useState(false)

    let [value, setValue]=useState<string>('Default select')
    let [valueState, setValueState]=useState(false)

    let selectedItems:selectedItemsType=[
        {id:1, title:'Default select'},
        {id:2, title:'First select'},
        {id:3, title:'Second select'},
        {id:4, title:'Third select'}
    ]

    const openAccordion=()=>{
        setOpen(!open)
    }

    function selectedStar(value:number){
        setRatingValue(value)
    }

    function tumbler(){
        setOn(!on)
    }

    const onClickItem=(title:string)=>{
        setValue(title)
        setValueState(!valueState)
    }
    const onClickHead=()=>{
        setValueState(!valueState)
    }



  return (
    <div>
        {/*<Accordion title={"Menu"} open={open} onChange={openAccordion}/>*/}
        {/*<Rating value={ratingValue} onChange={selectedStar}/>*/}
        {/*<OnOff on={on}  onChange={tumbler}/>*/}
        {/*<Button title={'On'} onChange={tumbler}/>*/}
        <Select value={value}
                selectedItems={selectedItems}
                valueState={valueState}
                onClickHead={onClickHead}
                onClickItem={onClickItem}/>
    </div>


  );
}

type AppTitlePropsType={
    title:string
}

function AppTitle(props:AppTitlePropsType) {
    return (
      <div>{props.title}</div>
    )
}



export default App;
