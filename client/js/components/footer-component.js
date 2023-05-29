/**
 * @module footer-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react'], (_export, _context) => {

  let h;

  const FooterComponent = () => {
    return h('footer', {
      
      style: {
          backgroundColor: 'black',
          color: 'white'
      }
    })
  }

  const setters = [
    ({ default: react }) => { 
      h = react.createElement 
    }
  ]

  const execute = () => {
    _export('default', FooterComponent)
  }

  return { setters, execute }
})