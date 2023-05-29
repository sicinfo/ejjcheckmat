/**
 * @author moreira 2022-04-28
 */
'use strict'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const CurrencyComponent = ({
    type = 'text',
    size = 10,
    maxLength,
    ...props
  }) => {

    return h('input', { 
      type, 
      maxLength: maxLength || size,
      size: size * 1.2,
      ...props 
    })
  }

  return {
    setters: [
      ({ default: a }) => { [h] = [a.createElement] }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', CurrencyComponent)
    }
  }
})