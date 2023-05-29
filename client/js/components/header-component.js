/**
 * @module header-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react'], (_export, _context) => {

  let h;

  const HeaderComponent = () => {
    return h('header', {
      
      style: { 
        // minHeight: 'max-content',
        minHeight: '91px',
        height: 'inherit',
        backgroundColor: 'floralwhite'
      },

      children: h('figure', {
        children: [
          h('img', { 
            style: {
              with: '640px',
              height: '91px'
            },
            key: 0, 
            src: '/img/checkmat-900x128.png', 
            alt: 'painel'
          }),
          // h('figcaption', { 
          //   key: 1, 
          //   children: 'Servos BJJ'
          // })
        ]
      })
    })
  }

  const setters = [
    ({ default: react }) => { 
      h = react.createElement 
    }
  ]

  const execute = () => {
    _export('default', HeaderComponent)
  }

  return { setters, execute }
})