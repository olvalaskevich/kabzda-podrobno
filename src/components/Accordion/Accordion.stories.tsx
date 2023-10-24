import '../../index.css'
import type {Meta, StoryObj} from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    argTypes:{


    },
};

export default meta;

type Story=StoryObj<typeof Accordion>


export const CollapsedOrOpenAccordion: Story= {
    args: {
        title:'Menu',
        open: true,

    },
}