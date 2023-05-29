/**
 * @author moreira 2022-04-28
 */
'use stric'

System.register(['react'], (_export, _context) => {
  
  /** @type {ReactJs} */ let ReactJs;

  const generator = function* (a = '', i = 0) { while (true) yield `${a}_${++i}` }
  const Key = generator('form')

  const _default = ({
    className = 'HtmlFormComponent',
    onSend = (a) => {},
    children, title
  }) => {
    const { createElement: h } = ReactJs;

    const Header = h('header', {
      key: Key.next().value,
      style: { width: '100%' },
      children: h('h3', null, title)
    })

    const Form = h('form', { 
      key: Key.next().value,
      className: 'HtmlFormMainSection',
      name: 'form0',
      children
    })

    const Footer = h('footer', {
      key: Key.next().value,
      className: 'HtmlFormFooterSection',
      children: h('button', {
        type: 'button',
        children: 'send',
        onClick: evt => {
          evt.stopPropagation();

          const data = {};
          for (const { name, value } of document.forms['form0'].elements) {
            Reflect.set(data, name, value);
          }

          onSend(data);
        }
      })
    })

    return h('section', {
      key: Key.next().value,
      className,
      children: [Header, Form, Footer]
    })
  }

  return {
    setters: [
      a => { ReactJs = a.default }
    ],
    execute: () => {
      _export('version', '0.1.0');
      _export('default', _default)
    }
  }
})