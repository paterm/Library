import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Switch, { Case, Default } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Switch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} >
    <Case value='red'>
      Red
    </Case>
    <Case value='green'>
      Green
    </Case>
    <Case value='gray'>
      Gray
    </Case>
    <Default>
      Default
    </Default>
  </Switch>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  expression: 'red',
}
