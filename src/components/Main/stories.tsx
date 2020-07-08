import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Ttile', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, React, Next e Styled Components'
    )}
  />
)
