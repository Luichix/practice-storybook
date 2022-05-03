import React from 'react'
import Button from './Button'

export default {
  title: 'line/Button',
  component: Button,
}

export const Primary  = () =>  <Button type="primary">Primary</Button>
export const Secundary = () =>  <Button type="secundary" size='large'>Secundary</Button>