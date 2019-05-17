/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SwaggerRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SwaggerRule'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.SwaggerUpdateRuleParameters = factory(root.OryOathkeeper.ApiClient, root.OryOathkeeper.SwaggerRule);
  }
}(this, function(ApiClient, SwaggerRule) {
  'use strict';




  /**
   * The SwaggerUpdateRuleParameters model module.
   * @module model/SwaggerUpdateRuleParameters
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerUpdateRuleParameters</code>.
   * SwaggerUpdateRuleParameters SwaggerUpdateRuleParameters swagger update rule parameters
   * @alias module:model/SwaggerUpdateRuleParameters
   * @class
   * @param id {String} in: path
   */
  var exports = function(id) {
    var _this = this;


    _this['id'] = id;
  };

  /**
   * Constructs a <code>SwaggerUpdateRuleParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerUpdateRuleParameters} obj Optional instance to populate.
   * @return {module:model/SwaggerUpdateRuleParameters} The populated <code>SwaggerUpdateRuleParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = SwaggerRule.constructFromObject(data['Body']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SwaggerRule} Body
   */
  exports.prototype['Body'] = undefined;
  /**
   * in: path
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


