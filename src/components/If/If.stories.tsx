import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import If from './index'
import Then from './Then'
import ElseIf from './ElseIf'
import Else from './Else'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/If',
  component: If,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof If>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof If> = (args) => (
  <If {...args} >
    <Then>
      Then
    </Then>
    <Then>
      Then2
    </Then>
    <Else>
      Else
    </Else>
    <ElseIf condition={true}>
      ElseIf
    </ElseIf>
  </If>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  condition: true,
}
