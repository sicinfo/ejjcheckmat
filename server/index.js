/**
 * @module checkmat
 * 
 * powered by moreira 2023-05-24
 * @author moreira
 * https://arangodb.github.io/arangojs/7.7.0/
 * https://www.arangodb.com/docs/stable/data-modeling-documents-document-methods.html#exists
 */
'use strict';

const { Router } = require('sicinfo-router');

/** @type {Record<string,any>} */
const options = {};

module.exports = class extends Router {

  /** @override */
  get dirname() { return __dirname }
}
