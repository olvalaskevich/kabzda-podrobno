import '../../index.css'
import type {Meta, StoryObj} from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    component: Select,
    argTypes:{
        value:{
            options:['Default select','First select','Second select','Third select'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

type Story=StoryObj<typeof Select>


export const DefaultRatingStory: Story= {
    args: {
        value:'Default select',
        valueState: false,
    },
}