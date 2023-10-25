import '../../index.css'
import type {Meta, StoryObj} from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
    component: Rating,
    argTypes:{
        value:{
            options: [1,2,3,4,5],
            control: { type: 'radio' },
        },

    },
};

export default meta;

type Story=StoryObj<typeof Rating>


export const DefaultRatingStory: Story= {
    args: {
        value: 3,
    },
}


















