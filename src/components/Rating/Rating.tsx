import React from "react";


type RatingPropsType={
    value:number,
    onChange:(value:number)=>void
}

export function Rating(props:RatingPropsType) {

    return (
            <div>
              <Star selected={props.value>0} onChange={()=>{props.onChange(1)}}/>
              <Star selected={props.value>1} onChange={()=>{props.onChange(2)}}/>
              <Star selected={props.value>2} onChange={()=>{props.onChange(3)}}/>
              <Star selected={props.value>3} onChange={()=>{props.onChange(4)}}/>
              <Star selected={props.value>4} onChange={()=>{props.onChange(5)}}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean
    onChange:()=>void
}

function Star(props: StarPropsType) {

    return <span onClick={props.onChange}>{props.selected ? <b>star </b> : 'star' }</span>
}





