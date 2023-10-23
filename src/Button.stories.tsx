import React from 'react';

import './index.css'

import type {Meta, StoryObj} from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story=StoryObj<typeof Button>

export const FirstStory: Story={
    args:{
        title:'On',
        name:'on',
        tumbler:()=> {}
        }
    }


















// export default {
//     title:'OnOff',
//     component:OnOff,
//
// }
//
// const Template=(arg:OnOffPropsType)=><OnOff {...arg}/>
//
// export const Default=()=> Template.bind({})
//
// Default.args={
//     on: true,
//     title:'On',
//     name:'on'
//
// }