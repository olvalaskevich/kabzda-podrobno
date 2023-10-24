import React from "react";

type AccordionPropsType={
    title:string
    onChange:()=>void
    open:boolean
}

type AccordionTitlePropsType={
    titles:string
    onChange:()=>void
}


export function Accordion (props:AccordionPropsType) {

    return (
        <div>
            <AccordionTitle titles={props.title} onChange={props.onChange}/>
            {props.open && <AccordionBody/> }
        </div>
    )

}

function AccordionTitle(props:AccordionTitlePropsType) {
        return (
        <><h3 onClick={props.onChange}>{props.titles}</h3></>
    )
}

function AccordionBody() {
    return(
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

