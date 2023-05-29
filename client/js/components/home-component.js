/**
 * @module home-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react'], (_export, _context) => {

  let h;

  const HomeComponent = () => {
    return h('section', {
      style: {
        backgroundColor: 'seashell'
      },
      children: 'home'
    })
  }

  return {
    setters: [
      ({ default: react }) => {
        h = react.createElement
      }
    ],

    execute: () => {
      _export('version', '0.1.0')
      _export('default', HomeComponent)
    }
  }
})