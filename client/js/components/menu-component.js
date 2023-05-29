/**
 * @module menu-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react', 'react-router-dom'], (_export, _context) => {

  /** @type {ReactCreateElement} */ let h;
  /** @type {ReactRouterLink} */ let Link;
  /** @type {ReactRouterNavigate} */ let Navigate;

  const MenuComponent = () => {

    const options = [
      { path: '/', text: 'home'},
      { text: "registro" }
    ];

    return h('nav', {
      
      style: {
        // width: 'inherit',
        backgroundColor: 'navajowhite'
      },

      children: h('ul', {

        style: {
          margin: '5px'
        },

        children: options.map(({path , text: children}, key) => h('li', {
          style: { 
            display: 'inline',
            padding: '5px'
          },
          key, children: h(Link, { to: path || `/${children}`, children })
        }))

      })
    })
  }

  return { 
    
    setters: [

      ({ default: react }) => { 
        h = react.createElement;
      },

      ({ default: router }) => { 
        Link = router.Link; 
        Navigate = router.Navigate; 
      }

    ], 
    
    execute: () => {
      _export('version', '0.1.0');
      _export('default', MenuComponent);
    } 

  }
})