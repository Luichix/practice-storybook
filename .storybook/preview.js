import '../styles/globals.css'
import '../styles/tokens.css'

export const parameters = {
  argTypes: {
    styles: { table: { disable: true } },
    getStyles: { table: { disable: true } },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}