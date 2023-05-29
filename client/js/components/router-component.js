/**
 * @module footer-component
 * @author moreira 2023-05-20
 */
'use strict';

System.register(['react', 'react-router-dom'], (_export, _context) => {

  /** @type {ReactCreateElement} */ let h;
  /** @type {ReactLazy} */ let lazy;
  /** @type {ReactSuspense} */ let Suspense;
  /** @type {ReactUseEffect} */ let useEffect;
  /** @type {ReactRouterNavigate} */ let Navigate;
  /** @type {ReactRouterRoutes} */ let Routes;
  /** @type {ReactRouterRoute} */ let Route;

  const RouterComponent = () => {

    const props = {};

    // useEffect(() => {
    // }, [])

    return h(Suspense, {
      children: h('main', {
        style: { overflowY: 'scroll' },
        children: h(Routes, {
          children: [
            h(Route, {
              key: 0,
              path: '/',
              element: h(lazy(() => System.import('home-component')))
            }),

            h(Route, {
              key: 1,
              path: '/registro/:registroId?',
              element: h(lazy(() => System.import('registro-component')))
            }),

            h(Route, {
              key: 99,
              path: '*',
              element: h(Navigate, { to: '/' })
            })

          ]
        })
      })

    })
  }

  return {

    setters: [

      ({ default: react }) => {
        h = react.createElement;
        lazy = react.lazy;
        Suspense = react.Suspense;
        useEffect = react.useEffect;
      },

      ({ default: router }) => {
        Navigate = router.Navigate;
        Routes = router.Routes;
        Route = router.Route;
      }

    ],

    execute: () => {
      _export('version', '0.1.0');
      _export('default', RouterComponent);
    }
  }
})








//   System.register(['react', 'react-router-dom'], (_export, _context) => {

//   let h, lazy, Suspense;
//   let Navigate, Routes, Route;

//   const RouterComponent = () => {

//     return h(Routes, {
//         children: h(Suspense, {
//           children: [
//             h(Route, {
//               path: '/registro',
//               element: h(lazy(() => System.import('registro-component')))
//             })
//           ]
//         })
//     })
    
    
//     // h(Suspense, {
//     //   children: [
//     //     h(lazy(() => System.import('menu-component')), { key: 0 }),
//     //     h(lazy(() => System.import('section-component')), { key: 1 })
//     //   ]
//     // })
//   }

//   const setters = [

//     ({ default: react }) => { 
//       h = react.createElement;
//       lazy = react.lazy;
//       Suspense = react.Suspense;
//     },

//     ({ default: router }) => {
//       Navigate = router.Navigate;
//       Routes = router.Routes;
//       Route = router.Route;
//     }

//   ]

//   const execute = () => {
//     _export('default', RouterComponent)
//   }

//   return { setters, execute }
// })