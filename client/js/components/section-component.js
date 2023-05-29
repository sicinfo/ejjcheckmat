/**
 * @module section-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react'], (_export, _context) => {

  let h;

  const SectionComponent = () => {
    return h('section', {
      children: 'section'
    })
  }

  const setters = [
    ({ default: react }) => { 
      h = react.createElement 
    }
  ]

  const execute = () => {
    _export('default', SectionComponent)
  }

  return { setters, execute }
})