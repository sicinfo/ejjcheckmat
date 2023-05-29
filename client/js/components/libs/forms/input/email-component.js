/**
 * @author moreira 2022-04-28
 */
'use stric'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const EmailComponent = ({ name, type = 'email' }) => {

    return h('input', { name, type })
  }

  return {
    setters: [
      ({ default: a }) => {
        [h] = [a.createElement]
      }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', EmailComponent)
    }
  }
})