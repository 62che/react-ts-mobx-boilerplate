import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.tsx$/), module)
