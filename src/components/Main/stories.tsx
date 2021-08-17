import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'dfsdfdsd',
  description: 'dsfdsf'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: '123',
  description: 'abcs'
}
