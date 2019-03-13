'use strict';

const {requireOnDemand} = require('../reporters');
requireOnDemand(require, exports, ['bdd'], './bdd');
requireOnDemand(require, exports, ['tdd'], './tdd');
requireOnDemand(require, exports, ['qunit'], './qunit');
requireOnDemand(require, exports, ['exports'], './exports');
