/**
 * @module ejjcheckmat
 * 
 * @author moreira 2023-05-20
 */
'use strict';

Promise.all([
  'react', 'react-dom'
].map(a => System.import(a).then(a => a.default))).then((

  /** @type {[React,ReactDom]} */
  [
    { Suspense, createElement: h, lazy }, 
    { createRoot }
  ]

) => {

    (
      document.head.querySelector('title') ||
      document.head.appendChild(document.createElement('title'))
    ).innerHTML = "IAM CT / Escola-Jiu-Jitsu Checkmat"
    ;

    sessionStorage.clear();

    createRoot(

      (el => (el?.classList.add('app'), el))(
        document.body.querySelector('div') ||
        document.body.insertAdjacentElement('afterbegin', document.createElement('div'))
      )

    ).render(

      h(Suspense, {
        fallback: h('span', { children: 'wait...' }),
        children: h(lazy(() => System.import('app-component')))
      })

    )

  }
)
