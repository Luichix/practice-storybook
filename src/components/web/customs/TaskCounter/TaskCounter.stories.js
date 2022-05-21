import { TaskCounter, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(TaskCounter, styles)

export default {
  title: 'Molecules/TaskCounter',
  component: TaskCounter,
  args: {
    title: 'Em Sméagol body.',
    current: 2,
    children: 'Fells defeated veins this.',
  },
}

export const Default = Template.bind({})
export const Total = Template.bind({})
Total.args = { total: 10 }

export const Toggleable = Template.bind({})
Toggleable.args = {
  isToggleable: true,
  total: 10,
}
