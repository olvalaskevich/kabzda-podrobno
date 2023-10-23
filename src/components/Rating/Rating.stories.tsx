import React from 'react';

import '../../index.css'

import type {Meta, StoryObj} from '@storybook/react';

import { Rating } from './Rating';
import { withActions } from '@storybook/addon-actions/decorator';

const meta: Meta<typeof Rating> = {
    component: Rating,
    argTypes:{
        value:{
            options: [1,2,3,4,5],
            control: { type: 'radio' },
        },



    },
    parameters: {
        actions: {
            handles: ['click', 'click .btn'],
        },
    },
    decorators: [withActions],
};

export default meta;

type Story=StoryObj<typeof Rating>

export const DefaultRating: Story= {
    args: {
        value: 3,

    }
}


















