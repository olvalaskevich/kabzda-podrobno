import React from 'react';
import './index.css'
import {Button} from "./Button";


export type OnOffPropsType={
    on:boolean,
    title:string,
    name:string
    tumbler?:()=>void
}




export const OnOff = (props:OnOffPropsType) => {

    return (
        <div>

            {props.on &&
                <div>
                    <Button name='on' title={'On'}/>
                    <Button tumbler={props.tumbler} title={'Off'}/>
                    <img src='https://avatars.mds.yandex.net/get-mpic/4120716/img_id6365070089787389708.jpeg/9' alt='on'/>
                </div> ||
                <div>
                    <Button tumbler={props.tumbler} title={'On'}/>
                    <Button name='off' title={'Off'}/>
                    <img src='https://avatars.mds.yandex.net/i?id=2e5ac2b9020e562f100bf5549029665709f99062-10767321-images-thumbs&n=13' alt='off'/>
                </div>}

        </div>
    );
};

