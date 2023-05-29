/**
 * @author moreira 2023-05-24
 */
'use strict'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const DateComponent = ({ type = 'date', ...props }) => {

    return h('input', { type, ...props })
  }

  return {
    setters: [
      ({ default: a }) => { [h] = [a.createElement] }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', DateComponent)
    }
  }
})