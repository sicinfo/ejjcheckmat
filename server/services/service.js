/**
 * @module service
 * @author moreira 2023-05027
 */
const { BadRequest } = require('http-errors')
const { Service } = require('sicinfo-router');

/** @param {{method:string}} arg */
const _methodBadRequestNotId = ({ method }) => {
  return Promise.reject(new BadRequest(`Method ${method} required ID`))
}

module.exports = class extends Service {
  
  /** 
   * @param {unknown} options
   * @override 
   */
  doPut(options) {
    if (this.id === 'undefined') return _methodBadRequestNotId(this);

    return this.body.then(({ data: body }) => {
      const keys = Object.keys(body);

    })

  }

}