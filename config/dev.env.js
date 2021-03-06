'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://112.253.11.114:9000/"',
  // BASE_API: '"http://localhost:9000/"',
})
