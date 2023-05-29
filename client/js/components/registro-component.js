/**
 * @module registro-component
 * @author moreira 2023-05-21
 */
'use strict';

System.register(['react', 'form-component', 'input-component'], (_export, _context) => {

  /** @type {ReactCreateElement} */ let h;
  /** @type {FormHTMLComponent} */ let Form;
  /** @type {InputHTMLComponent} */ let Input;
  /** @type {SelectHTMLComponent} */ let Select;

  const RegistroComponent = () => {

    return h(Form, {
      header: 'FICHA DE REGISTRO DE ATLETA',

      ctrls: [
        
        h(Input, {
          label: 'Ficah nº',
          name: 'ficha'
        }),
        
        h('fieldset', {
          children: [
            h('legend', null, 'DADOS DO ALUNO'),

            h('div', null, [
              h(Input, {
                label: 'Nome',
                name: 'nome',
                size: 48
              }),
              h(Input, {
                label: 'Data de nascimento',
                name: 'nascimento',
                type: 'date'
              }),
              h(Input, {
                label: 'Nome do pai',
                name: 'pai',
                size: 48
              }),
              h(Input, {
                label: 'Nome da mãe',
                name: 'mae',
                size: 48
              }),
              h(Input, {
                label: 'CPF',
                name: 'cpf',
                size: 14
              }),
              h(Input, {
                label: 'Rg',
                name: 'identidade',
                size: 20
              }),
              h(Input, {
                label: 'Estado civil',
                name: 'estadocivil',
                size: 12
              }),
              h(Input, {
                label: 'Profissão',
                name: 'profissao',
                size: 16
              })
            ]),

            h('div', null, [
              h(Input, {
                label: 'Endereço',
                name: 'logradouro',
                size: 48
              }),
              h(Input, {
                label: 'Número',
                name: 'numero',
                size: 10
              }),
              h(Input, {
                label: 'Quadra',
                name: 'quadra',
                size: 10
              }),
              h(Input, {
                label: 'Lote',
                name: 'lote',
                size: 10
              }),
              h(Input, {
                label: 'Setor',
                name: 'bairro',
                size: 32
              }),
              h(Input, {
                label: 'CEP',
                name: 'cep',
                size: 9
              }),
              h(Input, {
                label: 'Complemento',
                name: 'complemento',
                size: 48
              }),
              h(Input, {
                label: 'Cidade',
                name: 'cidade',
                size: 32
              }),
              h(Input, {
                label: 'Fone/Whatsapp',
                name: 'celular',
                size: 13
              }),
              h(Input, {
                label: 'Fone recado',
                name: 'fone',
                size: 13
              })
            ])
          ]
        }),
        
        h('fieldset', {
          children: [
            h('legend', null, 'GRADUAÇÃO'),
            h('div', null, [
              'Branco',
              'Amarela', 'Amarela e branco',
              'Verde', 'Verde e branco',
              'Azul', 'Azul e branco',
              'Marrom', 'Marrom e branco',
              'Vermelho', 'Vermelho e branco',
              'Preto', 'Preto e branco',
              'Prata', 'Ouro','Ouro e prata'
            ].map(label => h(Input, {
              label, 
              name: `graducao${label.toLocaleLowerCase().replace(' ','')}`,
              size: 12
            }))),
            h('div', null, [
              h(Input, {
                label: 'Origem',
                name: 'origem',
                size: 48
              }),
              h('div', null, h(Input, {
                label: 'Horário de treino',
                name: 'treino',
                type: 'select',
                inline: true,
                options: ['','7h','8h','9h','14h','15h','16h','17h','18h','19h','20h','21h']
              }))
            ])
          ]
        }),
        
        h('fieldset', {
          children: [
            h('legend', null, 'MENSALIDADE'),
            h('div', null, [
              h(Input, {
                label: 'Data início',
                name: 'inicio',
                type: 'date'
              }),
              h(Input, {
                label: 'Valor mensal',
                name: 'mensalidade',
                type: 'currency'
              }),
              h(Input, {
                label: 'Data do vencimento',
                name: 'vencimento',
                type: 'date'
              }),
              h(Input, {
                label: 'Observação',
                name: 'observação',
                size: 48
              }),
            ])
          ]
        }),
        
        h('fieldset', {
          children: [
            h('legend', null, 'CONTROLE DE PAGAMENTO'),
            h('div', null, ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'].map(label => h(Input, {
              label, 
              name: `graducao${label.toLocaleLowerCase().replace(' ','')}`,
              size: 12
            })))
          ]
        })
      ]

    })


  }

  return {
    setters: [
      ({ default: react }) => { h = react.createElement },
      ({ default: form }) => { Form = form },
      ({ default: input }) => { Input = input }
    ],

    execute: () => {
      _export('version', '0.1.0')
      _export('default', RegistroComponent)
    }
  }
})



  // const inputBox = ({
  //   title, 
  //   display ='flex',
  //   flexDirection = 'column',
  //   size = 256,
  //   name,
  //   ...props
  // }) => {
   
  //   return h('label', {
  //     style: { display, ...(flexDirection ? { flexDirection } : {}) },
  //     children: [
  //       title || name, 
  //       h(Input, { name, size, maxLength: size, ...props })
  //     ]
  //   })



    // return h('label', {
    //   style,
    //   children: [
    //     h('span', { children: title || name }),
    //     h('input', { key: 1, name, type, size, maxlength: size })
    //   ]
    // })
// }

  // const selectBox = ({ title = '', name, options }) => h('label', {
  //   children: [
  //     h('span', { key: 0 }, title || name ),
  //     h('select', { key: 1, children: options.map((value, key) => h('option', { key, value, children: value || '---' })) })
  //   ]
  // })

  // const checkBox = ({ title = '', name, options }) => {

  //   return h('fieldset', { 
  //     style: { display: 'flex'},
  //     children: [
  //       h('legend', { key: 0 }, `${title || name}:`)
  //     ].concat(options.map((name, key) => h(inputBox, { key, name, type: 'checkbox', display: 'flex' })))
  //    })
  // }

  // const inputs = {
  //   'ficha de registro de atleta': [ 
  //     {name: 'ficha'}
  //   ]
  // }

  // const _inputs = {
  //     'ficha de registro de atleta': [ 
  //       {name: 'ficha', size: 6 }
  //     ],
  //     'dados do aluno': [ 
  //       {name: 'nome'},
  //       {name: 'nascimento', type: 'date'},
  //     // endereço
  //     {name: 'logradouro'},
  //     {name: 'numero'},
  //     {name: 'quadra'},
  //     {name: 'lote'},
  //     {name: 'setor'},
  //     {name: 'cep'},
  //     {name: 'complemento'},
  //     {name: 'cidade'},
  //     // telefone
  //     {name: 'whatsapp'},
  //     {name: 'contato'},
  //     // aluno
  //     {name: 'pai'},
  //     {name: 'mae'},
  //     {name: 'cpf'},
  //     {name: 'identidade'},
  //     {name: 'estadocivil'},
  //     {name: 'profissão'}
  //   ],
  //   'graduação': [
  //     {name: 'branca'},
  //     {name: 'amarela'},
  //     {name: 'amarelobranco'},
  //     {name: 'verde'},
  //     {name: 'verdebranco'},
  //     {name: 'azul'},
  //     {name: 'azulbranco'},
  //     {name: 'marrom'},
  //     {name: 'marrombranco'},
  //     {name: 'vermelho'},
  //     {name: 'vermelhobranco'},
  //     {name: 'preto'},
  //     {name: 'pretobranco'},
  //     {name: 'prata'},
  //     {name: 'ouro'},
  //     {name: 'ouroprata'},
  //     {name: 'origem'},
  //     {
  //       h(Input, {
  //         type: 'checkbox',
  //         legend: 'Horário de Treino',
  //         options: ['','7h', '8h', '9h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h'] 
  //       })
  //     }
  //   ],
  //   'mensalidade': [
  //     {
  //       name: 'inicio', 
  //       type: 'date'
  //     },
  //     {
  //       name: 'valor'
  //     },
  //     {
  //       name: 'vencimento'
  //     },
  //     {
  //       name: 'observacao'
  //     },
  //     { 
  //       Tag: checkBox,
  //       name: 'pagamentos',
  //       options: ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ']
  //     }
  //   ]
  // }

  // const RegistroComponent = () => {


  //   return [
  //     h('header', { key: 0 }, 'registro'),
  //     h('form', {
  //       key: 1,
  //       children: Object.keys(inputs).map((title, key) => h('fieldset', {
  //         style: {display:'block'},
  //         key, 
  //         children: [
  //           h('legend', { children: title }), 
  //           inputs[title].map(({Tag = inputBox, ...props}, key) => h(Tag, 
  //             // @ts-ignore
  //             {key, ...props}              
  //           ))
  //         ]
  //       }))
  //     }),
  //     h('footer', {key: 2})
  //   ]
  // }
