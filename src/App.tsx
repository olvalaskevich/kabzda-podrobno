import React, {useState} from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";

import {Accordion} from "./components/Accordion/Accordion";
import {Button} from "./Button";

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


        <Accordion title={"Menu"} open={open} openAccordion={openAccordion}/>
        <Rating value={ratingValue} selectedStar={selectedStar}/>
        {/*<OnOff on={on} tumbler={tumbler}/>*/}
        <Button title={'On'}/>
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
