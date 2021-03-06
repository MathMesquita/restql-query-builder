import { curry, assoc, assocPath, fromPairs, cond, is, identity as I, always as K } from 'ramda';

export const createFromBlock = function(fromResource) {
  return K(assoc('from', fromResource, {}));
};

export const createAsBlock = function(resourceAlias) {
  return K(assoc('as', resourceAlias, {}));
};

export const createTimeoutBlock = function(timeoutValue) {
  return K(assoc('timeout', timeoutValue, {}));
};

const toHeaders = cond([[is(Array), fromPairs], [K(true), I]]);

export const createHeaderBlock = function(headersMap) {
  const header = toHeaders(headersMap);
  return K(assoc('headers', header, {}));
};

export const createWithBlock = curry(function(paramName, paramValue) {
  return K(assocPath(['with', paramName], paramValue, {}));
});

const toArray = cond([[is(Array), I], [K(true), Array.of]]);

export const createOnlyBlock = function(filters) {
  return K(assoc('only', toArray(filters), {}));
};

export const createHiddenBlock = function(shouldBeHidden = true) {
  return K(assoc('hidden', shouldBeHidden, {}));
};

export const createIgnoreErrorsBlock = function(shouldIgnoreErrors = true) {
  return K(assoc('ignoreErrors', shouldIgnoreErrors, {}));
};

export const createModifiersBlock = function(modifiers) {
  const modifiersObj = fromPairs(modifiers);
  return K(assoc('modifiers', modifiersObj, {}));
};
