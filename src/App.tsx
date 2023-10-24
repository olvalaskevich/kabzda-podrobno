import React, {useState} from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";

import {Accordion} from "./components/Accordion/Accordion";
import {Button} from "./components/Button/Button";
import {OnOff} from "./components/Button/OnOff";

function App() {
    let [open, setOpen]=useState(false)

    let [ratingValue,setRatingValue]=useState(0)

    let [on, setOn]=useState(false)

    const openAccordion=()=>{
        setOpen(!open)
    }

    function selectedStar(value:number){
        setRatingValue(value)
    }

    function tumbler(){
        setOn(!on)
    }


  return (
    <div>


        <Accordion title={"Menu"} open={open} onChange={openAccordion}/>
        <Rating value={ratingValue} onChange={selectedStar}/>
        <OnOff on={on}  onChange={tumbler}/>
        <Button title={'On'} onChange={tumbler}/>
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
