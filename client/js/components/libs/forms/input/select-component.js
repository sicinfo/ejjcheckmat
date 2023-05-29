/**
 * @author moreira 2023-05-24
 */
'use strict'

System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const SelectComponent = ({ name, options }) => {

    return h('select', {
      name,
      children: options.map(props => {
        if (typeof (props) === 'string') props = { value: props };
        if (!('children' in props)) props.children = props.value;
        return h('option', props);
      })
    })
  }

  return {
    setters: [
      ({ default: a }) => { [h] = [a.createElement] }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', SelectComponent)
    }
  }
})