import { defineParameterType } from '../'

// should allow a single regexp
defineParameterType({
  regexp: /particular/,
  transformer: (s) => s.toUpperCase(),
  name: 'param',
})

// should allow an array of regexp
defineParameterType({
  regexp: [/particular/, /particularly/],
  transformer: (s) => s.toUpperCase(),
  name: 'param',
})

// should allow a single string
defineParameterType({
  regexp: `/particular/`,
  transformer: (s) => s.toUpperCase(),
  name: 'param',
})

// should allow an array of strings
defineParameterType({
  regexp: [`/particular/`, `/particularly/`],
  transformer: (s) => s.toUpperCase(),
  name: 'param',
})
