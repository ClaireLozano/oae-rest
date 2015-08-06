/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var RestUtil = require('./util');

var getInvitations = module.exports.getInvitations = function(restCtx, resourceType, resourceId, callback) {
    resourceType = RestUtil.encodeURIComponent(resourceType);
    resourceId = RestUtil.encodeURIComponent(resourceId);
    RestUtil.RestRequest(restCtx, '/api/' + resourceType + '/' + resourceId + '/invitations', 'GET', null, callback);
};

var resendInvitation = module.exports.resendInvitation = function(restCtx, resourceType, resourceId, email, callback) {
    resourceType = RestUtil.encodeURIComponent(resourceType);
    resourceId = RestUtil.encodeURIComponent(resourceId);
    email = RestUtil.encodeURIComponent(email);
    RestUtil.RestRequest(restCtx, '/api/' + resourceType + '/' + resourceId + '/invitations/' + email + '/resend', 'POST', null, callback);
};

var acceptInvitation = module.exports.acceptInvitation = function(restCtx, token, callback) {
    RestUtil.RestRequest(restCtx, '/api/invitations/accept', 'POST', {'token': token}, callback);
};
