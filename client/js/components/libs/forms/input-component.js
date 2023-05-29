/**
 * @author moreira 2022-04-28
 * 
 * @release 0.2.0
 * refatoração do código
 */
'use strict'

System.register(['react'], (_export, _context) => {

    /** @type {React.createElement } */ let h;
    /** @type {React.useState } */ let useState;
    /** @type {React.lazy } */ let lazy;
    /** @type {React.Suspense } */ let Suspense;

  /** @type {InputHTMLComponent} */
  const InputComponent = ({ 
    label, 
    name,
    type = 'text',
    inline = false,
    ...props
   }) => {

    const [input] = useState(() => {
      return () => h(lazy(() => System.import(`input-${type}-component`)), {
        name: name || label || type, 
        ...props
      })
    })

    return h(Suspense, {
      children: label ? h('label', {
        style: {
          display:'inline-block',
          margin: '2px'
        },
        // children: [`${label}:`, input()]
        children: [`${label}:`, inline ? '' : h('br'), input()]
      }) : input()
    })

  }

  return {
    setters: [
      ({ default: a }) => { [h, lazy, useState, Suspense] = [a.createElement, a.lazy, a.useState, a.Suspense] }
    ],

    execute: () => {
      _export('version', '0.2.0');
      _export('default', InputComponent)
    }
  }
})