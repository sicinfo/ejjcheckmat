/**
 * @author moreira 2022-04-28
 */
 'use strict';

 System.register(['react'], (_export, _context) => {

  /** @type {React.createElement} */ let h;

  /** @type {LabelHTMLComponent} */
   const LabelComponent = ({ children, input, ...props }) => {

     if (input) (({ Input, props: { name, type, ...props }}) => {
       children = [children || name || type, h(Input, { name, type, ...props })];
     })(input)

    //  else if (select) (({Select, props}) => {

    //  })(select)

    // else Object.assign(props, { children });

     return h('label', { children, ...props })
   }

   return {
     setters: [
      ({default:a}) => { h = a.createElement }
    ],
     execute: () => {
       _export('version', '0.2.0');
       _export('default', LabelComponent)
     }
   }
 })


//  System.register(['react', 'input-component'], (_export, _context) => {
 
//   /** @type {ReactJs} */ let ReactJs;
//   /** @type {React.FunctionComponent } */ let InputComponent

//  const generator = function* (a = '', i = 0) { while (true) yield window.btoa(`${a}_${++i}`) }
//  const Key = generator('label')

//  const _default = ({
//    className = 'HtmlLabelComponent',
//    title, name, type = 'text'
//  }) => {
//   const { createElement: h, lazy } = ReactJs;

//    return h('label', {
//      className,
//      children: [
//        h('span', {
//          key: Key.next().value,
//          children: title || (title = name || type)
//        }),
//        h(InputComponent, {
//          key: Key.next().value,
//          name: name || title, type
//        })
//      ]
//    })

//  }

//  return {
//    setters: [
//     a => { ReactJs = a.default },
//     a => { InputComponent = a.default }
//   ],
//    execute: () => {
//      _export('version', '0.1.0');
//      _export('default', _default)
//    }
//  }
// })