import React from "react";


type RatingPropsType={
    value:number,
    selectedStar:(value:number)=>void
}

export function Rating(props:RatingPropsType) {

    return (
            <div>
              <Star selected={props.value>0} selectedStar={()=>{props.selectedStar(1)}}/>
              <Star selected={props.value>1} selectedStar={()=>{props.selectedStar(2)}}/>
              <Star selected={props.value>2} selectedStar={()=>{props.selectedStar(3)}}/>
              <Star selected={props.value>3} selectedStar={()=>{props.selectedStar(4)}}/>
              <Star selected={props.value>4} selectedStar={()=>{props.selectedStar(5)}}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean
    selectedStar:()=>void
}

function Star(props: StarPropsType) {

    return <span onClick={props.selectedStar}>{props.selected ? <b>star </b> : 'star' }</span>
}





