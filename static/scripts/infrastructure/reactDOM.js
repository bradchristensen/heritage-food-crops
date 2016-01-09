import React from 'react';

var browserDom = React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var serverDom = React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

export default typeof window !== 'undefined' ? browserDom : serverDom;
