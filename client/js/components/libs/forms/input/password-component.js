/**
 * @author moreira 2022-04-28
 * 
 * @updated 2023-05-23
 * @release 0.2.0
 * refatoração do código
 */
'use stric'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const PasswordComponet = ({ name, type = 'password' }) => {

    return h('input', { name, type })
  }

  return {
    setters: [
      ({ default: a }) => { [h] = [a.createElement] }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', PasswordComponet)
    }
  }
})