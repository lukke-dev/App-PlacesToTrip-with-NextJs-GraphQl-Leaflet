import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('title', 'react avançado')}
    description={text('description', 'dasuhduashduashd')}
  />
)
