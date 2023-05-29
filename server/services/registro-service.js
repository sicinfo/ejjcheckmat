/**
 * @module registro-service
 * @author moreira 
 * @version 0.1.0
 */
'use strict';
const { BadRequest, InternalServerError, isHttpError } = require('http-errors')
const { Service } = require('sicinfo-router');

module.exports = class extends Service {

  /** @override */
  doGet() {
    return Promise.resolve({
      data: { ficha: 'this.id' }
    })
  }

  /** @override */
  doPut() {

    
    return this.body.then(body => {
      
      console.log(body)
      
      return {data: {a: body}}

      
    })
  }

}