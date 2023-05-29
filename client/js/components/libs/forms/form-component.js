
/**
 * @author moreira 2022-04-28
 */

'use strict';


System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  const Gen = (function* (a = '', i = 0) { while (true) yield `${a}_${++i}` })('form')

  const FormComponent = ({ header, ctrls }) => {

    if (!Array.isArray(ctrls)) ctrls = [ctrls]

    return h('form', {
      children: [
        
        h('header', {
          children: header
        })
      ].concat(...ctrls)
    })
  }

  return {
    setters: [
      ({ default: a }) => { [h] = [a.createElement] }
    ],

    execute: () => {
      _export('version', '0.1.0');
      _export('default', FormComponent)
    }
  }
})




// System.register(['react'], (_export, _context) => {

//   /** @type {React.createElement} */ let h;

//   const Gen = (function* (a = '', i = 0) { while (true) yield `${a}_${++i}` })('form')

//   const FormComponent = ({
//     className = 'HtmlFormComponent',
//     onSend = (a) => {},
//     children, title
//   }) => {

//     const Header = h('header', {
//       key: Gen.next().value,
//       style: { width: '100%' },
//       children: h('h3', null, title)
//     })

//     const Form = h('form', { 
//       key: Gen.next().value,
//       className: 'HtmlFormMainSection',
//       name: 'form0',
//       children
//     })

//     const Footer = h('footer', {
//       key: Gen.next().value,
//       className: 'HtmlFormFooterSection',
//       children: h('button', {
//         type: 'button',
//         children: 'send',
//         onClick: evt => {
//           evt.stopPropagation();

//           const data = {};
//           for (const { name, value } of document.forms['form0'].elements) {
//             Reflect.set(data, name, value);
//           }

//           onSend(data);
//         }
//       })
//     })

//     return h('div', {
//       key: Gen.next().value,
//       className,
//       children: [Header, Form, Footer]
//     })
//   }

//   return {
//     setters: [
//       ({default:a}) => { [h] = [a.createElement] }
//     ],

//     execute: () => {
//       _export('version', '0.1.0');
//       _export('default', FormComponent)
//     }
//   }
// })