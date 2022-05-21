const { choices, decisions } = require('../tokens')
const toKebabCase = require('../utils/toKebabCase')
const toCapitalize = require('../utils/toCapitalize')
const toCamelCase = require('../utils/toCamelCase')
const fs = require('fs')

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n')

function transformTokensCSS(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokensCSS, objectKey) => {
    const value = object[objectKey]
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`)

    if (Array.isArray(value)) {
      return `${transformedTokensCSS}\n  --${customProperty}: ${value.join(
        ', '
      )};`
    } else if (typeof value === 'object') {
      return `${transformedTokensCSS}\n${transformTokensCSS(
        customProperty,
        value
      )}`
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`
    return `${transformedTokensCSS}\n  ${label}: ${value};`
  }, '')
}

export function buildTokens() {
  const transformedChoices = transformTokensCSS(null, choices)
  const transformedDecisions = transformTokensCSS(null, decisions)
  const customProperties = `${transformedChoices}${transformedDecisions}`

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`

  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (error) throw error
    console.log('🎨 Custom properties created!')
  })
}

// buildTokens()

export function transformTokensStyleSheet(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokensStyleSheet, objectKey) => {
    const value = object[objectKey]

    const customProperty = parentKey
      ? toCamelCase(`${parentKey}-${objectKey}`)
      : toCapitalize(`${objectKey}`)

    if (Array.isArray(value)) {
      return `${transformedTokensStyleSheet}\n  ${customProperty}: '${value.join(
        ', '
      )};`
    } else if (typeof value === 'object') {
      return `${transformedTokensStyleSheet}\n${transformTokensStyleSheet(
        customProperty,
        value
      )}`
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`
    return `${transformedTokensStyleSheet}\n  ${label}: ${value};`
  }, '')
}
