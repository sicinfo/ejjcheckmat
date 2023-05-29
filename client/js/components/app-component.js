/**
 * @module app-component
 * @author moreira 2023-05-20
*/
'use strict';

System.register(['react', 'react-router-dom'], (_export, _context) => {

  /** @type {ReactCreateElement} */ let h;
  /** @type {ReactLazy} */ let lazy;
  /** @type {ReactSuspense} */ let Suspense;
  /** @type {ReactRouterBrowserRouter} */ let BrowserRouter;
  /** @type {ReactRouterNavigate} */ let Navigate;

  const AppComponent = () => {

    const props = {};

    return h(Suspense, {
      children: h(BrowserRouter, {
        children: [
          h(lazy(() => System.import(`header-component`)), { key: 0, ...props }),
          // h(lazy(() => System.import(`menu-component`)), { key: 1, ...props }),
          h(lazy(() => System.import(`router-component`)), { key: 2, ...props }),
          h(lazy(() => System.import(`footer-component`)), { key: 3, ...props })
        ]
      })
    })
}

  return {
    
    setters: [
      
      ({default:react}) => {
        h = react.createElement;
        lazy = react.lazy;
        Suspense = react.Suspense;
      },

      ({default:router}) => {
        BrowserRouter = router.BrowserRouter;
        Navigate = router.Navigate;
      }

    ], 

    execute: () => {
      _export('version', '0.1.0');
      _export('default', AppComponent);
    }

  }

})


// (React, ReactDom, Router) => {

//   return () => React.createElement('p', null, 'teste ')

// })
// // System.register([], (_export, _context) => ({
// //   execute: () => {
// //     System.import('react').then(a => a.default).then(React => {
// //       // System.import('react-router-dom').then(a => a.default).then(Router => {

// //         _export('default', () => React.createElement('p', null, 'teste '))

// //       // }).catch(e => console.log(e))
// //     })
// //   }


// // }))
    
    
    
//     // Promise.resolve(System.import('react').then(a => a.default)).then(React => {
//     // Promise.resolve(System.import('react-router-dom').then(a => a.default)).then(Router => {
//     //   console.log(1);
      
  
//         // return { setters: [], execute : () => {
//         //   _export('default', () => h('p', null, 'teste'))
//         // }}
  
// // })
  

// // Promise.resolve(System.import('react').then(a => a.default)).then(React => {
// //   Promise.resolve(System.import('react-router-dom').then(a => a.default)).then(Router => {
// //     console.log(1);
    

// //       return { setters: [], execute : () => {
// //         _export('default', () => h('p', null, 'teste'))
// //       }}

// //     })
// //   })
// // })





// // Promise.resolve(System.import('react').then(a => a.default)).then(React => {
// //   Promise.resolve(System.import('react-router-dom').then(a => a.default)).then(Router => {
// //     System.register([], (_export, _context) => {

// //       console.log(React.createElement)

// //   const { createElement: h, lazy, Suspense } = React;
// //   const { BrowserRouter } = Router;

// //   const AppComponent = () => {

// //     const props = {};

// //     return h(Suspense, {
// //       children: h(BrowserRouter, {
// //         children: [
// //           h(lazy(() => System.import(`header-component`)), Object.assign({ key: 0 }, props)),
// //           h(lazy(() => System.import(`router-component`)), Object.assign({ key: 1 }, props)),
// //           h(lazy(() => System.import(`footer-component`)), Object.assign({ key: 2 }, props))
// //         ]
// //       })
// //     })
// //   }

// //   const setters = [
    
// //     ({ default: react }) => {
// //       h = react.createElement;
// //       lazy = react.lazy;
// //       Suspense = react.Suspense
// //     },

// //     ({ default: router }) => {
// //       BrowserRouter = router.BrowserRouter;
// //     }

// //   ];

// //   const execute = () => {
// //     _export('version', VERSION);
// //     _export('default', AppComponent);
// //   }

// //   return { setters, execute }
// // })
// // // })

// // // System.register([
// // //   'react', 'react-router-dom', 'config-datahandle'/*, 'idcreate'/*, 'jsdata-util'*/, 'react-util'
// // // ], (_export, _context) => {

// // //   /** @type {ReactCreateElement} */ let h;
// // //   /** @type {ReactUseContext} */ let useContext;
// // //   /** @type {ReactSuspense} */ let Suspense;
// // //   /** @type {ReactUseState} */ let useState;
// // //   /** @type {ReactUseMemo} */ let useMemo;
// // //   /** @type {ReactLazy} */ let lazy;
// // //   /** @type {ReactRouterDomBrowserRouter} */ let BrowserRouter
// // //   /** @type {ReactRouterDomNavigate} */ let Navigate
// // //   /** @type {ReactRouterDomRoutes} */ let Routes
// // //   /** @type {ReactRouterDomRoute} */ let Route
// // //   /** @type {function} */ let newId;
// // //   /** @type {JSDataStore} */ let DataStore;
// // //   /** @type {JSDataHttpAdapter} */ let HttpAdapter;
// // //   /** @type {function} */ let wrapPromise;

// // //   const setters = [
    
// // //     a => (a => {
// // //       h = a.createElement;
// // //       lazy = a.lazy;
// // //       useMemo = a.useMemo;
// // //       useState = a.useState;
// // //       useContext = a.useContext;
// // //       Suspense = a.Suspense;
// // //     })(a.default),
    
// // //     a => (a => {
// // //       BrowserRouter = a.BrowserRouter;
// // //       Navigate = a.Navigate;
// // //       Routes = a.Routes;
// // //       Route = a.Route;
// // //     })(a.default),
    
// // //     a => (a => {
// // //     })(a.default),
    
// // //     // a => (a => {
// // //     //   newId = a.newId.bind(this);
// // //     // })(a.default),
    
// // //     // a => (a => {
// // //     //   DataStore = a.DataStore;
// // //     //   HttpAdapter = a.HttpAdapter;
// // //     // })(a.default),

// // //     a => (a => {
// // //       wrapPromise = a.wrapPromise;
// // //       newId = a.newId.bind(this);
// // //   })(a.default)

// // //   ];

// // //   /** @type {any} */ let _store;
// // //   /** @type {any} */ let _resource;
// // //   /** @type {function} */ let fetchConfig;
// // //   const execute = () => {
    
// // //     _export('version', '0.1.0');
// // //     _export('default', MainComponent)
// // //   }

// // //   let count = 0;
// // //   /** @type {function} */ let setstateconfig;

// // //   const MainComponent = () => {

// // //     // const store = _store.read();

// // //     /** @type {[Record<string,any>, function]} */
// // //     const [config, setConfig] = useState(() => {
// // //       return {
// // //         routes: { 
// // //           home: { 
// // //             path: '/' 
// // //           } 
// // //         }
// // //       }
// // //     });

// // //     // console.log(
// // //     //   count++, 
// // //     //   config, 
// // //     //   resource
// // //     // );

// // //     const routes = useMemo(() => {

// // //       // console.log('dentro')

// // //       const routes = [];

// // //       for (const name in config.routes || {}) {

// // //         const {
// // //           path = `/${name}`,
// // //           props = {},
// // //           component = `${name}-component`
// // //         } = config.routes[name];

// // //         routes.push({
// // //           path,
// // //           element: h(lazy(() => System.import(component)), props)
// // //         })
      
// // //       }
 
// // //       return routes.concat({
// // //         path: '*',
// // //         element: h(Navigate, { replace: true, to: '/'})
// // //       });

// // //     }, [config]);

// // //     // console.log('fora');

// // //     return h(Suspense, {
// // //       children: h(BrowserRouter, {
// // //         children: [

// // //           h(lazy(() => System.import('header-component')), {
// // //             key: newId(),
// // //             config: Object.assign({ setstateconfig }, config)
// // //           }),

// // //           h(Routes, {
// // //             key: newId(),
// // //             children: routes.map(props => h(Route, props))
// // //           }),

// // //           h(lazy(() => System.import('footer-component')), {
// // //             key: newId(),
// // //             config
// // //           })

// // //         ]
// // //       })
// // //     })
// // //   }

// // //   return { setters, execute }
// // })
// // })

