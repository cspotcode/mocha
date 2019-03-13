'use strict';

exports.requireOnDemand = requireOnDemand;
function requireOnDemand(require, target, props, modulePath) {
  let module = undefined;
  let loaded = false;
  function getter() {
    if(!loaded) module = require(modulePath);
    loaded = true;
    return module;
  }
  for(const prop of props) {
    Object.defineProperty(target, prop, {
      enumerable: true,
      configurable: true,
      get: getter,
      // Allow reassignment
      set(v) {
        delete target[prop];
        return target[prop] = v;
      }
    });
  }
}

// exports.(.*) = exports.(.*) = require\((.*)\);
// requireOnDemand(require, exports, ['$1', '$2'], $3);

// Alias exports to a their normalized format Mocha#reporter to prevent a need
// for dynamic (try/catch) requires, which Browserify doesn't handle.
requireOnDemand(require, exports, ['Base', 'base'], './base');
requireOnDemand(require, exports, ['Dot', 'dot'], './dot');
requireOnDemand(require, exports, ['Doc', 'doc'], './doc');
requireOnDemand(require, exports, ['TAP', 'tap'], './tap');
requireOnDemand(require, exports, ['JSON', 'json'], './json');
requireOnDemand(require, exports, ['HTML', 'html'], './html');
requireOnDemand(require, exports, ['List', 'list'], './list');
requireOnDemand(require, exports, ['Min', 'min'], './min');
requireOnDemand(require, exports, ['Spec', 'spec'], './spec');
requireOnDemand(require, exports, ['Nyan', 'nyan'], './nyan');
requireOnDemand(require, exports, ['XUnit', 'xunit'], './xunit');
requireOnDemand(require, exports, ['Markdown', 'markdown'], './markdown');
requireOnDemand(require, exports, ['Progress', 'progress'], './progress');
requireOnDemand(require, exports, ['Landing', 'landing'], './landing');
requireOnDemand(require, exports, ['JSONStream', 'json-stream'], './json-stream');
