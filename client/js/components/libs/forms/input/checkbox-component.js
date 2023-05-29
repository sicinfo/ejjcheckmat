/**
 * @author moreira 2023-05-23
 */
'use strict'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const CheckboxComponent = ({options, legend, ...props }) => {
    h('fieldset', { 
          style: { display: 'flex'},
          children: [
            h('legend', { key: -1 }, `${legend}:`)
          ].concat(options.map((props, key) => h('input', { 
            key, 
            name, 
            type: 'checkbox', 
            display: 'flex' 
          })))
         })  }

  return {
    setters: [
      ({ default: a }) => {
        [h] = [a.createElement]
      }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', CheckboxComponent)
    }
  }
})



// const checkBox = ({ title = '', name, options }) => {

//   return h('fieldset', { 
//     style: { display: 'flex'},
//     children: [
//       h('legend', { key: 0 }, `${title || name}:`)
//     ].concat(options.map((name, key) => h(inputBox, { key, name, type: 'checkbox', display: 'flex' })))
//    })
// }
