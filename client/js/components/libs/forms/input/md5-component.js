/**
 * @author moreira 2022-04-28
 */
 'use strict'

 System.register(['react', 'md5'], (_export, _context) => {
 
  /** @type {React.createElement} */ let h;  
  /** @type {React.lazy} */ let lazy;  
  /** @type {function} */ let MD5;
  
  const onChange = ({ target }) => {
    target['value'] = MD5(target['value'])
  }
  
  const Md5Component = ({ name, type = 'password' }) => {
    
    return h(lazy(() => System.import('./password-component.js')), { 
      name, 
      type, 
      onChange 
    })
  }
 
   return {
     setters: [
       ({ default: a }) => { [h, lazy] = [a.createElement, a.lazy] },
       ({ default: a }) => { MD5 = a }
     ],
     
     execute: () => {
       _export('version', '0.1.0');
       _export('default', Md5Component)
     }
   }
 })