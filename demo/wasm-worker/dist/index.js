(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(4)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 2);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QRWorker\", function() { return QRWorker; });\nconst Module = __webpack_require__(1);\n\nconst isEmptyObject = (obj) => {\n    return Object.entries(obj).length === 0 && typeof obj === \"object\"\n};\n\n// this file is meant to be used using comlink-loader\nclass QRWorker {\n    isReady() {\n        return new Promise(resolve => {\n            setInterval(() => {\n                let asmModule = Module.asm;\n                if (!isEmptyObject(asmModule)) resolve();\n            }, 100);\n        })\n    };\n    \n    decodeQrCode(rawJpeg) {\n        let rawJpegObj = {};\n    \n        /*\n        * Create new unsigned int array of rawJpeg\n        * */\n        rawJpegObj.asTypedArray = new Uint8Array(rawJpeg);\n    \n        /*\n        * Allocate memory to store the rawJpegAsTypedArray\n        * */\n        let srcBuf = Module._malloc(rawJpegObj.asTypedArray.length * rawJpegObj.asTypedArray.BYTES_PER_ELEMENT);\n    \n        /*\n        * Write rawJpegAsTypedArray to allocated memory\n        * */\n        Module.writeArrayToMemory(rawJpegObj.asTypedArray, srcBuf);\n    \n        /*\n        * Load image from allocated memory buffer\n        * */\n        let pImage = Module._setSrcImage(srcBuf, rawJpegObj.asTypedArray.length);\n    \n        /*\n        * Get the image data such as width, height, and image\n        * */\n        let width = Module.getValue(pImage + 0, 'i32');\n        let height = Module.getValue(pImage + 4, 'i32');\n        let image = Module.getValue(pImage + 8, 'i32');\n    \n        /*\n        * Decode image data and return the result\n        * */\n        const QUIRC_MAX_PAYLOAD = 8896;\n        let resultPtr = Module._decode_qr(image, width, height);\n        const strArray = [];\n        for (let pointer = 0; pointer < QUIRC_MAX_PAYLOAD; pointer++) {\n            let char = Module.HEAP8[resultPtr / Uint8Array.BYTES_PER_ELEMENT + pointer];\n            if (char !== 0) {\n                strArray.push(char);\n            } else {\n                break;\n            }\n        }\n        let resultStr = String.fromCharCode.apply(null, strArray);\n    \n        /*\n        * Clean the buffer\n        * */\n        Module._free(srcBuf);\n        Module._free(image);\n        Module._free(pImage);\n        delete rawJpegObj.asTypedArray;\n    \n        return resultStr;\n    };\n}\n\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\n\nvar Module = (\nfunction(Module) {\n  Module = Module || {};\n\n\"use strict\";var Module=typeof Module!==\"undefined\"?Module:{};Module={onRuntimeInitialized:()=>{setSrcImage=Module.cwrap(\"setSrcImage\",\"number\",[\"number\",\"number\"]);decode_qr=Module.cwrap(\"decode_qr\",\"string\",[\"number\",\"number\",\"number\"])}};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram=\"./this.program\";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=true;var scriptDirectory=\"\";function locateFile(path){if(Module[\"locateFile\"]){return Module[\"locateFile\"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf(\"blob:\")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf(\"/\")+1)}else{scriptDirectory=\"\"}{read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.responseType=\"arraybuffer\";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,true);xhr.responseType=\"arraybuffer\";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module[\"print\"]||console.log.bind(console);var err=Module[\"printErr\"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module[\"arguments\"])arguments_=Module[\"arguments\"];if(Module[\"thisProgram\"])thisProgram=Module[\"thisProgram\"];if(Module[\"quit\"])quit_=Module[\"quit\"];var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var getTempRet0=function(){return tempRet0};var wasmBinary;if(Module[\"wasmBinary\"])wasmBinary=Module[\"wasmBinary\"];var noExitRuntime;if(Module[\"noExitRuntime\"])noExitRuntime=Module[\"noExitRuntime\"];if(typeof WebAssembly!==\"object\"){err(\"no native wasm support detected\")}function getValue(ptr,type,noSafe){type=type||\"i8\";if(type.charAt(type.length-1)===\"*\")type=\"i32\";switch(type){case\"i1\":return HEAP8[ptr>>0];case\"i8\":return HEAP8[ptr>>0];case\"i16\":return HEAP16[ptr>>1];case\"i32\":return HEAP32[ptr>>2];case\"i64\":return HEAP32[ptr>>2];case\"float\":return HEAPF32[ptr>>2];case\"double\":return HEAPF64[ptr>>3];default:abort(\"invalid type for getValue: \"+type)}return null}var wasmMemory;var wasmTable=new WebAssembly.Table({\"initial\":153,\"maximum\":153+0,\"element\":\"anyfunc\"});var ABORT=false;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort(\"Assertion failed: \"+text)}}function getCFunc(ident){var func=Module[\"_\"+ident];assert(func,\"Cannot call unknown function \"+ident+\", make sure it is exported\");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={\"string\":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},\"array\":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType===\"string\")return UTF8ToString(ret);if(returnType===\"boolean\")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}function cwrap(ident,returnType,argTypes,opts){argTypes=argTypes||[];var numericArgs=argTypes.every(function(type){return type===\"number\"});var numericRet=returnType!==\"string\";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var UTF8Decoder=typeof TextDecoder!==\"undefined\"?new TextDecoder(\"utf8\"):undefined;function UTF8ArrayToString(u8Array,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(u8Array[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var str=\"\";while(idx<endPtr){var u0=u8Array[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|u8Array[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):\"\"}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var UTF16Decoder=typeof TextDecoder!==\"undefined\"?new TextDecoder(\"utf-16le\"):undefined;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var WASM_PAGE_SIZE=65536;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module[\"HEAP8\"]=HEAP8=new Int8Array(buf);Module[\"HEAP16\"]=HEAP16=new Int16Array(buf);Module[\"HEAP32\"]=HEAP32=new Int32Array(buf);Module[\"HEAPU8\"]=HEAPU8=new Uint8Array(buf);Module[\"HEAPU16\"]=HEAPU16=new Uint16Array(buf);Module[\"HEAPU32\"]=HEAPU32=new Uint32Array(buf);Module[\"HEAPF32\"]=HEAPF32=new Float32Array(buf);Module[\"HEAPF64\"]=HEAPF64=new Float64Array(buf)}var DYNAMIC_BASE=5258640,DYNAMICTOP_PTR=15600;var INITIAL_TOTAL_MEMORY=Module[\"TOTAL_MEMORY\"]||16777216;if(Module[\"wasmMemory\"]){wasmMemory=Module[\"wasmMemory\"]}else{wasmMemory=new WebAssembly.Memory({\"initial\":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_TOTAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback==\"function\"){callback();continue}var func=callback.func;if(typeof func===\"number\"){if(callback.arg===undefined){Module[\"dynCall_v\"](func)}else{Module[\"dynCall_vi\"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module[\"preRun\"]){if(typeof Module[\"preRun\"]==\"function\")Module[\"preRun\"]=[Module[\"preRun\"]];while(Module[\"preRun\"].length){addOnPreRun(Module[\"preRun\"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module[\"postRun\"]){if(typeof Module[\"postRun\"]==\"function\")Module[\"postRun\"]=[Module[\"postRun\"]];while(Module[\"postRun\"].length){addOnPostRun(Module[\"postRun\"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module[\"preloadedImages\"]={};Module[\"preloadedAudios\"]={};function abort(what){if(Module[\"onAbort\"]){Module[\"onAbort\"](what)}what+=\"\";out(what);err(what);ABORT=true;EXITSTATUS=1;what=\"abort(\"+what+\"). Build with -s ASSERTIONS=1 for more info.\";throw new WebAssembly.RuntimeError(what)}var dataURIPrefix=\"data:application/octet-stream;base64,\";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile=self.publicPath+\"quirc-wasm-emcc/a951b346f69613dccd0b9f7a2ea454d9.wasm\";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw\"both async and sync fetching of the wasm failed\"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch===\"function\"){return fetch(wasmBinaryFile,{credentials:\"same-origin\"}).then(function(response){if(!response[\"ok\"]){throw\"failed to load wasm binary file at '\"+wasmBinaryFile+\"'\"}return response[\"arrayBuffer\"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={\"env\":asmLibraryArg,\"wasi_snapshot_preview1\":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module[\"asm\"]=exports;removeRunDependency(\"wasm-instantiate\")}addRunDependency(\"wasm-instantiate\");function receiveInstantiatedSource(output){receiveInstance(output[\"instance\"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err(\"failed to asynchronously prepare wasm: \"+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming===\"function\"&&!isDataURI(wasmBinaryFile)&&typeof fetch===\"function\"){fetch(wasmBinaryFile,{credentials:\"same-origin\"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err(\"wasm streaming compile failed: \"+reason);err(\"falling back to ArrayBuffer instantiation\");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module[\"instantiateWasm\"]){try{var exports=Module[\"instantiateWasm\"](info,receiveInstance);return exports}catch(e){err(\"Module.instantiateWasm callback failed with error: \"+e);return false}}instantiateAsync();return{}}__ATINIT__.push({func:function(){___wasm_call_ctors()}});function _emscripten_get_heap_size(){return HEAP8.length}var setjmpId=0;function _saveSetjmp(env,label,table,size){env=env|0;label=label|0;table=table|0;size=size|0;var i=0;setjmpId=setjmpId+1|0;HEAP32[env>>2]=setjmpId;while((i|0)<(size|0)){if((HEAP32[table+(i<<3)>>2]|0)==0){HEAP32[table+(i<<3)>>2]=setjmpId;HEAP32[table+((i<<3)+4)>>2]=label;HEAP32[table+((i<<3)+8)>>2]=0;setTempRet0(size|0);return table|0}i=i+1|0}size=size*2|0;table=_realloc(table|0,8*(size+1|0)|0)|0;table=_saveSetjmp(env|0,label|0,table|0,size|0)|0;setTempRet0(size|0);return table|0}function _testSetjmp(id,table,size){id=id|0;table=table|0;size=size|0;var i=0,curr=0;while((i|0)<(size|0)){curr=HEAP32[table+(i<<3)>>2]|0;if((curr|0)==0)break;if((curr|0)==(id|0)){return HEAP32[table+((i<<3)+4)>>2]|0}i=i+1|0}return 0}function _longjmp(env,value){_setThrew(env,value||1);throw\"longjmp\"}function _emscripten_longjmp(env,value){_longjmp(env,value)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest)}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=_emscripten_get_heap_size();var PAGE_MULTIPLE=65536;var LIMIT=2147483648-PAGE_MULTIPLE;if(requestedSize>LIMIT){return false}var MIN_TOTAL_MEMORY=16777216;var newSize=Math.max(oldSize,MIN_TOTAL_MEMORY);while(newSize<requestedSize){if(newSize<=536870912){newSize=alignUp(2*newSize,PAGE_MULTIPLE)}else{newSize=Math.min(alignUp((3*newSize+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}var replacement=emscripten_realloc_buffer(newSize);if(!replacement){return false}return true}var ENV={};function _emscripten_get_environ(){if(!_emscripten_get_environ.strings){var env={\"USER\":\"web_user\",\"LOGNAME\":\"web_user\",\"PATH\":\"/\",\"PWD\":\"/\",\"HOME\":\"/home/web_user\",\"LANG\":(typeof navigator===\"object\"&&navigator.languages&&navigator.languages[0]||\"C\").replace(\"-\",\"_\")+\".UTF-8\",\"_\":thisProgram};for(var x in ENV){env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(x+\"=\"+env[x])}_emscripten_get_environ.strings=strings}return _emscripten_get_environ.strings}function _environ_get(__environ,environ_buf){var strings=_emscripten_get_environ();var bufSize=0;strings.forEach(function(string,i){var ptr=environ_buf+bufSize;HEAP32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=_emscripten_get_environ();HEAP32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAP32[penviron_buf_size>>2]=bufSize;return 0}function _exit(status){exit(status)}var PATH={splitPath:function(filename){var splitPathRe=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:function(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last===\".\"){parts.splice(i,1)}else if(last===\"..\"){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift(\"..\")}}return parts},normalize:function(path){var isAbsolute=path.charAt(0)===\"/\",trailingSlash=path.substr(-1)===\"/\";path=PATH.normalizeArray(path.split(\"/\").filter(function(p){return!!p}),!isAbsolute).join(\"/\");if(!path&&!isAbsolute){path=\".\"}if(path&&trailingSlash){path+=\"/\"}return(isAbsolute?\"/\":\"\")+path},dirname:function(path){var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return\".\"}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:function(path){if(path===\"/\")return\"/\";var lastSlash=path.lastIndexOf(\"/\");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},extname:function(path){return PATH.splitPath(path)[3]},join:function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join(\"/\"))},join2:function(l,r){return PATH.normalize(l+\"/\"+r)}};var SYSCALLS={buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:0,get:function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(){var ret=UTF8ToString(SYSCALLS.get());return ret},get64:function(){var low=SYSCALLS.get(),high=SYSCALLS.get();return low},getZero:function(){SYSCALLS.get()}};function _fd_close(fd){try{return 0}catch(e){if(typeof FS===\"undefined\"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{return 0}catch(e){if(typeof FS===\"undefined\"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_write(fd,iov,iovcnt,pnum){try{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS===\"undefined\"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _getTempRet0(){return getTempRet0()|0}function _setTempRet0($i){setTempRet0($i|0)}var asmLibraryArg={\"d\":_emscripten_longjmp,\"l\":_emscripten_memcpy_big,\"m\":_emscripten_resize_heap,\"n\":_environ_get,\"o\":_environ_sizes_get,\"r\":_exit,\"q\":_fd_close,\"k\":_fd_seek,\"p\":_fd_write,\"a\":_getTempRet0,\"e\":invoke_ii,\"i\":invoke_iii,\"h\":invoke_iiii,\"g\":invoke_vi,\"f\":invoke_viii,\"memory\":wasmMemory,\"j\":_saveSetjmp,\"b\":_setTempRet0,\"table\":wasmTable,\"c\":_testSetjmp};var asm=createWasm();Module[\"asm\"]=asm;var ___wasm_call_ctors=Module[\"___wasm_call_ctors\"]=function(){return Module[\"asm\"][\"s\"].apply(null,arguments)};var _decode_qr=Module[\"_decode_qr\"]=function(){return Module[\"asm\"][\"t\"].apply(null,arguments)};var _malloc=Module[\"_malloc\"]=function(){return Module[\"asm\"][\"u\"].apply(null,arguments)};var _free=Module[\"_free\"]=function(){return Module[\"asm\"][\"v\"].apply(null,arguments)};var _setSrcImage=Module[\"_setSrcImage\"]=function(){return Module[\"asm\"][\"w\"].apply(null,arguments)};var _realloc=Module[\"_realloc\"]=function(){return Module[\"asm\"][\"x\"].apply(null,arguments)};var _setThrew=Module[\"_setThrew\"]=function(){return Module[\"asm\"][\"y\"].apply(null,arguments)};var dynCall_vi=Module[\"dynCall_vi\"]=function(){return Module[\"asm\"][\"z\"].apply(null,arguments)};var dynCall_viii=Module[\"dynCall_viii\"]=function(){return Module[\"asm\"][\"A\"].apply(null,arguments)};var dynCall_ii=Module[\"dynCall_ii\"]=function(){return Module[\"asm\"][\"B\"].apply(null,arguments)};var dynCall_iii=Module[\"dynCall_iii\"]=function(){return Module[\"asm\"][\"C\"].apply(null,arguments)};var dynCall_iiii=Module[\"dynCall_iiii\"]=function(){return Module[\"asm\"][\"D\"].apply(null,arguments)};var stackSave=Module[\"stackSave\"]=function(){return Module[\"asm\"][\"E\"].apply(null,arguments)};var stackAlloc=Module[\"stackAlloc\"]=function(){return Module[\"asm\"][\"F\"].apply(null,arguments)};var stackRestore=Module[\"stackRestore\"]=function(){return Module[\"asm\"][\"G\"].apply(null,arguments)};function invoke_ii(index,a1){var sp=stackSave();try{return dynCall_ii(index,a1)}catch(e){stackRestore(sp);if(e!==e+0&&e!==\"longjmp\")throw e;_setThrew(1,0)}}function invoke_viii(index,a1,a2,a3){var sp=stackSave();try{dynCall_viii(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0&&e!==\"longjmp\")throw e;_setThrew(1,0)}}function invoke_iii(index,a1,a2){var sp=stackSave();try{return dynCall_iii(index,a1,a2)}catch(e){stackRestore(sp);if(e!==e+0&&e!==\"longjmp\")throw e;_setThrew(1,0)}}function invoke_iiii(index,a1,a2,a3){var sp=stackSave();try{return dynCall_iiii(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0&&e!==\"longjmp\")throw e;_setThrew(1,0)}}function invoke_vi(index,a1){var sp=stackSave();try{dynCall_vi(index,a1)}catch(e){stackRestore(sp);if(e!==e+0&&e!==\"longjmp\")throw e;_setThrew(1,0)}}Module[\"asm\"]=asm;Module[\"cwrap\"]=cwrap;Module[\"getValue\"]=getValue;Module[\"writeArrayToMemory\"]=writeArrayToMemory;var calledRun;function ExitStatus(status){this.name=\"ExitStatus\";this.message=\"Program terminated with exit(\"+status+\")\";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;if(ABORT)return;initRuntime();preMain();if(Module[\"onRuntimeInitialized\"])Module[\"onRuntimeInitialized\"]();postRun()}if(Module[\"setStatus\"]){Module[\"setStatus\"](\"Running...\");setTimeout(function(){setTimeout(function(){Module[\"setStatus\"](\"\")},1);doRun()},1)}else{doRun()}}Module[\"run\"]=run;function exit(status,implicit){if(implicit&&noExitRuntime&&status===0){return}if(noExitRuntime){}else{ABORT=true;EXITSTATUS=status;exitRuntime();if(Module[\"onExit\"])Module[\"onExit\"](status)}quit_(status,new ExitStatus(status))}if(Module[\"preInit\"]){if(typeof Module[\"preInit\"]==\"function\")Module[\"preInit\"]=[Module[\"preInit\"]];while(Module[\"preInit\"].length>0){Module[\"preInit\"].pop()()}}noExitRuntime=true;run();var workerResponded=false,workerCallbackId=-1;(function(){var messageBuffer=null,buffer=0,bufferSize=0;function flushMessages(){if(!messageBuffer)return;if(runtimeInitialized){var temp=messageBuffer;messageBuffer=null;temp.forEach(function(message){onmessage(message)})}}function messageResender(){flushMessages();if(messageBuffer){setTimeout(messageResender,100)}}onmessage=function onmessage(msg){if(!runtimeInitialized){if(!messageBuffer){messageBuffer=[];setTimeout(messageResender,100)}messageBuffer.push(msg);return}flushMessages();var func=Module[\"_\"+msg.data[\"funcName\"]];if(!func)throw\"invalid worker function to call: \"+msg.data[\"funcName\"];var data=msg.data[\"data\"];if(data){if(!data.byteLength)data=new Uint8Array(data);if(!buffer||bufferSize<data.length){if(buffer)_free(buffer);bufferSize=data.length;buffer=_malloc(data.length)}HEAPU8.set(data,buffer)}workerResponded=false;workerCallbackId=msg.data[\"callbackId\"];if(data){func(buffer,data.length)}else{func(0,0)}}})();\n\n\n  return Module\n}\n)(typeof Module === 'object' ? Module : {});\nif (true)\n      module.exports = Module;\n    else {}\n    \n\n/***/ }),\n/* 2 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/comlinkjs/comlink.es6.js\n/**\n * Copyright 2017 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nconst Comlink = (function () {\n    const TRANSFERABLE_TYPES = [ArrayBuffer, MessagePort];\n    const uid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);\n    const proxyValueSymbol = Symbol(\"proxyValue\");\n    const throwSymbol = Symbol(\"throw\");\n    const proxyTransferHandler = {\n        canHandle: (obj) => obj && obj[proxyValueSymbol],\n        serialize: (obj) => {\n            const { port1, port2 } = new MessageChannel();\n            expose(obj, port1);\n            return port2;\n        },\n        deserialize: (obj) => {\n            return proxy(obj);\n        }\n    };\n    const throwTransferHandler = {\n        canHandle: (obj) => obj && obj[throwSymbol],\n        serialize: (obj) => obj.toString() + \"\\n\" + obj.stack,\n        deserialize: (obj) => {\n            throw Error(obj);\n        }\n    };\n    /* export */ const transferHandlers = new Map([\n        [\"PROXY\", proxyTransferHandler],\n        [\"THROW\", throwTransferHandler]\n    ]);\n    let pingPongMessageCounter = 0;\n    /* export */ function proxy(endpoint, target) {\n        if (isWindow(endpoint))\n            endpoint = windowEndpoint(endpoint);\n        if (!isEndpoint(endpoint))\n            throw Error(\"endpoint does not have all of addEventListener, removeEventListener and postMessage defined\");\n        activateEndpoint(endpoint);\n        return cbProxy(async (irequest) => {\n            let args = [];\n            if (irequest.type === \"APPLY\" || irequest.type === \"CONSTRUCT\")\n                args = irequest.argumentsList.map(wrapValue);\n            const response = await pingPongMessage(endpoint, Object.assign({}, irequest, { argumentsList: args }), transferableProperties(args));\n            const result = response.data;\n            return unwrapValue(result.value);\n        }, [], target);\n    }\n    /* export */ function proxyValue(obj) {\n        obj[proxyValueSymbol] = true;\n        return obj;\n    }\n    /* export */ function expose(rootObj, endpoint) {\n        if (isWindow(endpoint))\n            endpoint = windowEndpoint(endpoint);\n        if (!isEndpoint(endpoint))\n            throw Error(\"endpoint does not have all of addEventListener, removeEventListener and postMessage defined\");\n        activateEndpoint(endpoint);\n        attachMessageHandler(endpoint, async function (event) {\n            if (!event.data.id || !event.data.callPath)\n                return;\n            const irequest = event.data;\n            let that = await irequest.callPath\n                .slice(0, -1)\n                .reduce((obj, propName) => obj[propName], rootObj);\n            let obj = await irequest.callPath.reduce((obj, propName) => obj[propName], rootObj);\n            let iresult = obj;\n            let args = [];\n            if (irequest.type === \"APPLY\" || irequest.type === \"CONSTRUCT\")\n                args = irequest.argumentsList.map(unwrapValue);\n            if (irequest.type === \"APPLY\") {\n                try {\n                    iresult = await obj.apply(that, args);\n                }\n                catch (e) {\n                    iresult = e;\n                    iresult[throwSymbol] = true;\n                }\n            }\n            if (irequest.type === \"CONSTRUCT\") {\n                try {\n                    iresult = new obj(...args); // eslint-disable-line new-cap\n                    iresult = proxyValue(iresult);\n                }\n                catch (e) {\n                    iresult = e;\n                    iresult[throwSymbol] = true;\n                }\n            }\n            if (irequest.type === \"SET\") {\n                obj[irequest.property] = irequest.value;\n                // FIXME: ES6 Proxy Handler `set` methods are supposed to return a\n                // boolean. To show good will, we return true asynchronously ¯\\_(ツ)_/¯\n                iresult = true;\n            }\n            iresult = makeInvocationResult(iresult);\n            iresult.id = irequest.id;\n            return endpoint.postMessage(iresult, transferableProperties([iresult]));\n        });\n    }\n    function wrapValue(arg) {\n        // Is arg itself handled by a TransferHandler?\n        for (const [key, transferHandler] of transferHandlers) {\n            if (transferHandler.canHandle(arg)) {\n                return {\n                    type: key,\n                    value: transferHandler.serialize(arg)\n                };\n            }\n        }\n        // If not, traverse the entire object and find handled values.\n        let wrappedChildren = [];\n        for (const item of iterateAllProperties(arg)) {\n            for (const [key, transferHandler] of transferHandlers) {\n                if (transferHandler.canHandle(item.value)) {\n                    wrappedChildren.push({\n                        path: item.path,\n                        wrappedValue: {\n                            type: key,\n                            value: transferHandler.serialize(item.value)\n                        }\n                    });\n                }\n            }\n        }\n        for (const wrappedChild of wrappedChildren) {\n            const container = wrappedChild.path\n                .slice(0, -1)\n                .reduce((obj, key) => obj[key], arg);\n            container[wrappedChild.path[wrappedChild.path.length - 1]] = null;\n        }\n        return {\n            type: \"RAW\",\n            value: arg,\n            wrappedChildren\n        };\n    }\n    function unwrapValue(arg) {\n        if (transferHandlers.has(arg.type)) {\n            const transferHandler = transferHandlers.get(arg.type);\n            return transferHandler.deserialize(arg.value);\n        }\n        else if (isRawWrappedValue(arg)) {\n            for (const wrappedChildValue of arg.wrappedChildren || []) {\n                if (!transferHandlers.has(wrappedChildValue.wrappedValue.type))\n                    throw Error(`Unknown value type \"${arg.type}\" at ${wrappedChildValue.path.join(\".\")}`);\n                const transferHandler = transferHandlers.get(wrappedChildValue.wrappedValue.type);\n                const newValue = transferHandler.deserialize(wrappedChildValue.wrappedValue.value);\n                replaceValueInObjectAtPath(arg.value, wrappedChildValue.path, newValue);\n            }\n            return arg.value;\n        }\n        else {\n            throw Error(`Unknown value type \"${arg.type}\"`);\n        }\n    }\n    function replaceValueInObjectAtPath(obj, path, newVal) {\n        const lastKey = path.slice(-1)[0];\n        const lastObj = path\n            .slice(0, -1)\n            .reduce((obj, key) => obj[key], obj);\n        lastObj[lastKey] = newVal;\n    }\n    function isRawWrappedValue(arg) {\n        return arg.type === \"RAW\";\n    }\n    function windowEndpoint(w) {\n        if (self.constructor.name !== \"Window\")\n            throw Error(\"self is not a window\");\n        return {\n            addEventListener: self.addEventListener.bind(self),\n            removeEventListener: self.removeEventListener.bind(self),\n            postMessage: (msg, transfer) => w.postMessage(msg, \"*\", transfer)\n        };\n    }\n    function isEndpoint(endpoint) {\n        return (\"addEventListener\" in endpoint &&\n            \"removeEventListener\" in endpoint &&\n            \"postMessage\" in endpoint);\n    }\n    function activateEndpoint(endpoint) {\n        if (isMessagePort(endpoint))\n            endpoint.start();\n    }\n    function attachMessageHandler(endpoint, f) {\n        // Checking all possible types of `endpoint` manually satisfies TypeScript’s\n        // type checker. Not sure why the inference is failing here. Since it’s\n        // unnecessary code I’m going to resort to `any` for now.\n        // if(isWorker(endpoint))\n        //   endpoint.addEventListener('message', f);\n        // if(isMessagePort(endpoint))\n        //   endpoint.addEventListener('message', f);\n        // if(isOtherWindow(endpoint))\n        //   endpoint.addEventListener('message', f);\n        endpoint.addEventListener(\"message\", f);\n    }\n    function detachMessageHandler(endpoint, f) {\n        // Same as above.\n        endpoint.removeEventListener(\"message\", f);\n    }\n    function isMessagePort(endpoint) {\n        return endpoint.constructor.name === \"MessagePort\";\n    }\n    function isWindow(endpoint) {\n        // TODO: This doesn’t work on cross-origin iframes.\n        // return endpoint.constructor.name === 'Window';\n        return [\"window\", \"length\", \"location\", \"parent\", \"opener\"].every(prop => prop in endpoint);\n    }\n    /**\n     * `pingPongMessage` sends a `postMessage` and waits for a reply. Replies are\n     * identified by a unique id that is attached to the payload.\n     */\n    function pingPongMessage(endpoint, msg, transferables) {\n        const id = `${uid}-${pingPongMessageCounter++}`;\n        return new Promise(resolve => {\n            attachMessageHandler(endpoint, function handler(event) {\n                if (event.data.id !== id)\n                    return;\n                detachMessageHandler(endpoint, handler);\n                resolve(event);\n            });\n            // Copy msg and add `id` property\n            msg = Object.assign({}, msg, { id });\n            endpoint.postMessage(msg, transferables);\n        });\n    }\n    function cbProxy(cb, callPath = [], target = function () { }) {\n        return new Proxy(target, {\n            construct(_target, argumentsList, proxy) {\n                return cb({\n                    type: \"CONSTRUCT\",\n                    callPath,\n                    argumentsList\n                });\n            },\n            apply(_target, _thisArg, argumentsList) {\n                // We use `bind` as an indicator to have a remote function bound locally.\n                // The actual target for `bind()` is currently ignored.\n                if (callPath[callPath.length - 1] === \"bind\")\n                    return cbProxy(cb, callPath.slice(0, -1));\n                return cb({\n                    type: \"APPLY\",\n                    callPath,\n                    argumentsList\n                });\n            },\n            get(_target, property, proxy) {\n                if (property === \"then\" && callPath.length === 0) {\n                    return { then: () => proxy };\n                }\n                else if (property === \"then\") {\n                    const r = cb({\n                        type: \"GET\",\n                        callPath\n                    });\n                    return Promise.resolve(r).then.bind(r);\n                }\n                else {\n                    return cbProxy(cb, callPath.concat(property), _target[property]);\n                }\n            },\n            set(_target, property, value, _proxy) {\n                return cb({\n                    type: \"SET\",\n                    callPath,\n                    property,\n                    value\n                });\n            }\n        });\n    }\n    function isTransferable(thing) {\n        return TRANSFERABLE_TYPES.some(type => thing instanceof type);\n    }\n    function* iterateAllProperties(value, path = [], visited = null) {\n        if (!value)\n            return;\n        if (!visited)\n            visited = new WeakSet();\n        if (visited.has(value))\n            return;\n        if (typeof value === \"string\")\n            return;\n        if (typeof value === \"object\")\n            visited.add(value);\n        if (ArrayBuffer.isView(value))\n            return;\n        yield { value, path };\n        const keys = Object.keys(value);\n        for (const key of keys)\n            yield* iterateAllProperties(value[key], [...path, key], visited);\n    }\n    function transferableProperties(obj) {\n        const r = [];\n        for (const prop of iterateAllProperties(obj)) {\n            if (isTransferable(prop.value))\n                r.push(prop.value);\n        }\n        return r;\n    }\n    function makeInvocationResult(obj) {\n        for (const [type, transferHandler] of transferHandlers) {\n            if (transferHandler.canHandle(obj)) {\n                const value = transferHandler.serialize(obj);\n                return {\n                    value: { type, value }\n                };\n            }\n        }\n        return {\n            value: {\n                type: \"RAW\",\n                value: obj\n            }\n        };\n    }\n    return { proxy, proxyValue, transferHandlers, expose };\n})();\n\n// CONCATENATED MODULE: ./node_modules/comlink-loader/dist/comlink-worker-loader.js!./node_modules/babel-loader/lib??ref--4!./wasm-worker/wrapper.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QRWorker\", function() { return QRWorker; });\n\n// eslint-disable-next-line\nself.publicPath = \"http://localhost:8000/\";\n\nvar _require = __webpack_require__(0),\n    QRWorker = _require.QRWorker;\n\n\nfor(var $$ in __webpack_exports__)if ($$!='__esModule')Comlink.expose(__webpack_exports__[$$],self)\n\n/***/ })\n/******/ ]);", __webpack_require__.p + "9ebb080d264dd75c81fb.worker.js");
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*! FPSMeter 0.3.0 - 24th Apr 2013 | https://github.com/Darsain/fpsmeter */
(function (r, j) {
  function s(a, e) {
    for (var g in e) {
      try {
        a.style[g] = e[g];
      } catch (j) {}
    }

    return a;
  }

  function H(a) {
    return Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function R(a, e) {
    if ("array" !== H(e)) return -1;
    if (e.indexOf) return e.indexOf(a);

    for (var g = 0, j = e.length; g < j; g++) {
      if (e[g] === a) return g;
    }

    return -1;
  }

  function I() {
    var a = arguments,
        e;

    for (e in a[1]) {
      if (a[1].hasOwnProperty(e)) switch (H(a[1][e])) {
        case "object":
          a[0][e] = I({}, a[0][e], a[1][e]);
          break;

        case "array":
          a[0][e] = a[1][e].slice(0);
          break;

        default:
          a[0][e] = a[1][e];
      }
    }

    return 2 < a.length ? I.apply(null, [a[0]].concat(Array.prototype.slice.call(a, 2))) : a[0];
  }

  function N(a) {
    a = Math.round(255 * a).toString(16);
    return 1 === a.length ? "0" + a : a;
  }

  function S(a, e, g, j) {
    if (a.addEventListener) a[j ? "removeEventListener" : "addEventListener"](e, g, !1);else if (a.attachEvent) a[j ? "detachEvent" : "attachEvent"]("on" + e, g);
  }

  function D(a, e) {
    function g(b, a, d, c) {
      return y[0 | b][Math.round(Math.min((a - d) / (c - d) * J, J))];
    }

    function r() {
      f.legend.fps !== q && (f.legend.fps = q, f.legend[T] = q ? "FPS" : "ms");
      K = q ? b.fps : b.duration;
      f.count[T] = 999 < K ? "999+" : K.toFixed(99 < K ? 0 : d.decimals);
    }

    function m() {
      z = A();
      L < z - d.threshold && (b.fps -= b.fps / Math.max(1, 60 * d.smoothing / d.interval), b.duration = 1E3 / b.fps);

      for (c = d.history; c--;) {
        E[c] = 0 === c ? b.fps : E[c - 1], F[c] = 0 === c ? b.duration : F[c - 1];
      }

      r();

      if (d.heat) {
        if (w.length) for (c = w.length; c--;) {
          w[c].el.style[h[w[c].name].heatOn] = q ? g(h[w[c].name].heatmap, b.fps, 0, d.maxFps) : g(h[w[c].name].heatmap, b.duration, d.threshold, 0);
        }
        if (f.graph && h.column.heatOn) for (c = u.length; c--;) {
          u[c].style[h.column.heatOn] = q ? g(h.column.heatmap, E[c], 0, d.maxFps) : g(h.column.heatmap, F[c], d.threshold, 0);
        }
      }

      if (f.graph) for (p = 0; p < d.history; p++) {
        u[p].style.height = (q ? E[p] ? Math.round(O / d.maxFps * Math.min(E[p], d.maxFps)) : 0 : F[p] ? Math.round(O / d.threshold * Math.min(F[p], d.threshold)) : 0) + "px";
      }
    }

    function k() {
      20 > d.interval ? (x = M(k), m()) : (x = setTimeout(k, d.interval), P = M(m));
    }

    function G(a) {
      a = a || window.event;
      a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : (a.returnValue = !1, a.cancelBubble = !0);
      b.toggle();
    }

    function U() {
      d.toggleOn && S(f.container, d.toggleOn, G, 1);
      a.removeChild(f.container);
    }

    function V() {
      f.container && U();
      h = D.theme[d.theme];
      y = h.compiledHeatmaps || [];

      if (!y.length && h.heatmaps.length) {
        for (p = 0; p < h.heatmaps.length; p++) {
          y[p] = [];

          for (c = 0; c <= J; c++) {
            var b = y[p],
                e = c,
                g;
            g = 0.33 / J * c;
            var j = h.heatmaps[p].saturation,
                m = h.heatmaps[p].lightness,
                n = void 0,
                k = void 0,
                l = void 0,
                t = l = void 0,
                v = n = k = void 0,
                v = void 0,
                l = 0.5 >= m ? m * (1 + j) : m + j - m * j;
            0 === l ? g = "#000" : (t = 2 * m - l, k = (l - t) / l, g *= 6, n = Math.floor(g), v = g - n, v *= l * k, 0 === n || 6 === n ? (n = l, k = t + v, l = t) : 1 === n ? (n = l - v, k = l, l = t) : 2 === n ? (n = t, k = l, l = t + v) : 3 === n ? (n = t, k = l - v) : 4 === n ? (n = t + v, k = t) : (n = l, k = t, l -= v), g = "#" + N(n) + N(k) + N(l));
            b[e] = g;
          }
        }

        h.compiledHeatmaps = y;
      }

      f.container = s(document.createElement("div"), h.container);
      f.count = f.container.appendChild(s(document.createElement("div"), h.count));
      f.legend = f.container.appendChild(s(document.createElement("div"), h.legend));
      f.graph = d.graph ? f.container.appendChild(s(document.createElement("div"), h.graph)) : 0;
      w.length = 0;

      for (var q in f) {
        f[q] && h[q].heatOn && w.push({
          name: q,
          el: f[q]
        });
      }

      u.length = 0;

      if (f.graph) {
        f.graph.style.width = d.history * h.column.width + (d.history - 1) * h.column.spacing + "px";

        for (c = 0; c < d.history; c++) {
          u[c] = f.graph.appendChild(s(document.createElement("div"), h.column)), u[c].style.position = "absolute", u[c].style.bottom = 0, u[c].style.right = c * h.column.width + c * h.column.spacing + "px", u[c].style.width = h.column.width + "px", u[c].style.height = "0px";
        }
      }

      s(f.container, d);
      r();
      a.appendChild(f.container);
      f.graph && (O = f.graph.clientHeight);
      d.toggleOn && ("click" === d.toggleOn && (f.container.style.cursor = "pointer"), S(f.container, d.toggleOn, G));
    }

    "object" === H(a) && a.nodeType === j && (e = a, a = document.body);
    a || (a = document.body);
    var b = this,
        d = I({}, D.defaults, e || {}),
        f = {},
        u = [],
        h,
        y,
        J = 100,
        w = [],
        W = 0,
        B = d.threshold,
        Q = 0,
        L = A() - B,
        z,
        E = [],
        F = [],
        x,
        P,
        q = "fps" === d.show,
        O,
        K,
        c,
        p;
    b.options = d;
    b.fps = 0;
    b.duration = 0;
    b.isPaused = 0;

    b.tickStart = function () {
      Q = A();
    };

    b.tick = function () {
      z = A();
      W = z - L;
      B += (W - B) / d.smoothing;
      b.fps = 1E3 / B;
      b.duration = Q < L ? B : z - Q;
      L = z;
    };

    b.pause = function () {
      x && (b.isPaused = 1, clearTimeout(x), C(x), C(P), x = P = 0);
      return b;
    };

    b.resume = function () {
      x || (b.isPaused = 0, k());
      return b;
    };

    b.set = function (a, c) {
      d[a] = c;
      q = "fps" === d.show;
      -1 !== R(a, X) && V();
      -1 !== R(a, Y) && s(f.container, d);
      return b;
    };

    b.showDuration = function () {
      b.set("show", "ms");
      return b;
    };

    b.showFps = function () {
      b.set("show", "fps");
      return b;
    };

    b.toggle = function () {
      b.set("show", q ? "ms" : "fps");
      return b;
    };

    b.hide = function () {
      b.pause();
      f.container.style.display = "none";
      return b;
    };

    b.show = function () {
      b.resume();
      f.container.style.display = "block";
      return b;
    };

    b.destroy = function () {
      b.pause();
      U();

      b.tick = b.tickStart = function () {};
    };

    V();
    k();
  }

  var A,
      m = r.performance;
  A = m ? m[m.now ? "now" : "webkitNow"].bind(m) : function () {
    return +new Date();
  };

  for (var C = r.cancelAnimationFrame || r.cancelRequestAnimationFrame, M = r.requestAnimationFrame, m = ["moz", "webkit", "o"], G = 0, k = 0, Z = m.length; k < Z && !C; ++k) {
    M = (C = r[m[k] + "CancelAnimationFrame"] || r[m[k] + "CancelRequestAnimationFrame"]) && r[m[k] + "RequestAnimationFrame"];
  }

  C || (M = function M(a) {
    var e = A(),
        g = Math.max(0, 16 - (e - G));
    G = e + g;
    return r.setTimeout(function () {
      a(e + g);
    }, g);
  }, C = function C(a) {
    clearTimeout(a);
  });
  var T = "string" === H(document.createElement("div").textContent) ? "textContent" : "innerText";
  D.extend = I;
  window.FPSMeter = D;
  D.defaults = {
    interval: 100,
    smoothing: 10,
    show: "fps",
    toggleOn: "click",
    decimals: 1,
    maxFps: 60,
    threshold: 100,
    position: "absolute",
    zIndex: 10,
    left: "5px",
    top: "5px",
    right: "auto",
    bottom: "auto",
    margin: "0 0 0 0",
    theme: "dark",
    heat: 0,
    graph: 0,
    history: 20
  };
  var X = ["toggleOn", "theme", "heat", "graph", "history"],
      Y = "position zIndex left top right bottom margin".split(" ");
})(window);

(function (r, j) {
  j.theme = {};
  var s = j.theme.base = {
    heatmaps: [],
    container: {
      heatOn: null,
      heatmap: null,
      padding: "5px",
      minWidth: "95px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "right",
      textShadow: "none"
    },
    count: {
      heatOn: null,
      heatmap: null,
      position: "absolute",
      top: 0,
      right: 0,
      padding: "5px 10px",
      height: "30px",
      fontSize: "24px",
      fontFamily: "Consolas, Andale Mono, monospace",
      zIndex: 2
    },
    legend: {
      heatOn: null,
      heatmap: null,
      position: "absolute",
      top: 0,
      left: 0,
      padding: "5px 10px",
      height: "30px",
      fontSize: "12px",
      lineHeight: "32px",
      fontFamily: "sans-serif",
      textAlign: "left",
      zIndex: 2
    },
    graph: {
      heatOn: null,
      heatmap: null,
      position: "relative",
      boxSizing: "padding-box",
      MozBoxSizing: "padding-box",
      height: "100%",
      zIndex: 1
    },
    column: {
      width: 4,
      spacing: 1,
      heatOn: null,
      heatmap: null
    }
  };
  j.theme.dark = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.8,
      lightness: 0.8
    }],
    container: {
      background: "#222",
      color: "#fff",
      border: "1px solid #1a1a1a",
      textShadow: "1px 1px 0 #222"
    },
    count: {
      heatOn: "color"
    },
    column: {
      background: "#3f3f3f"
    }
  });
  j.theme.light = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.5,
      lightness: 0.5
    }],
    container: {
      color: "#666",
      background: "#fff",
      textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
    },
    count: {
      heatOn: "color"
    },
    column: {
      background: "#eaeaea"
    }
  });
  j.theme.colorful = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.5,
      lightness: 0.6
    }],
    container: {
      heatOn: "backgroundColor",
      background: "#888",
      color: "#fff",
      textShadow: "1px 1px 0 rgba(0,0,0,.2)",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
    },
    column: {
      background: "#777",
      backgroundColor: "rgba(0,0,0,.2)"
    }
  });
  j.theme.transparent = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.8,
      lightness: 0.5
    }],
    container: {
      padding: 0,
      color: "#fff",
      textShadow: "1px 1px 0 rgba(0,0,0,.5)"
    },
    count: {
      padding: "0 5px",
      height: "40px",
      lineHeight: "40px"
    },
    legend: {
      padding: "0 5px",
      height: "40px",
      lineHeight: "42px"
    },
    graph: {
      height: "40px"
    },
    column: {
      width: 5,
      background: "#999",
      heatOn: "backgroundColor",
      opacity: 0.5
    }
  });
})(window, FPSMeter);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/comlinkjs/comlink.es6.js
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Comlink = (function () {
    const TRANSFERABLE_TYPES = [ArrayBuffer, MessagePort];
    const uid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const proxyValueSymbol = Symbol("proxyValue");
    const throwSymbol = Symbol("throw");
    const proxyTransferHandler = {
        canHandle: (obj) => obj && obj[proxyValueSymbol],
        serialize: (obj) => {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port1);
            return port2;
        },
        deserialize: (obj) => {
            return proxy(obj);
        }
    };
    const throwTransferHandler = {
        canHandle: (obj) => obj && obj[throwSymbol],
        serialize: (obj) => obj.toString() + "\n" + obj.stack,
        deserialize: (obj) => {
            throw Error(obj);
        }
    };
    /* export */ const transferHandlers = new Map([
        ["PROXY", proxyTransferHandler],
        ["THROW", throwTransferHandler]
    ]);
    let pingPongMessageCounter = 0;
    /* export */ function proxy(endpoint, target) {
        if (isWindow(endpoint))
            endpoint = windowEndpoint(endpoint);
        if (!isEndpoint(endpoint))
            throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
        activateEndpoint(endpoint);
        return cbProxy(async (irequest) => {
            let args = [];
            if (irequest.type === "APPLY" || irequest.type === "CONSTRUCT")
                args = irequest.argumentsList.map(wrapValue);
            const response = await pingPongMessage(endpoint, Object.assign({}, irequest, { argumentsList: args }), transferableProperties(args));
            const result = response.data;
            return unwrapValue(result.value);
        }, [], target);
    }
    /* export */ function proxyValue(obj) {
        obj[proxyValueSymbol] = true;
        return obj;
    }
    /* export */ function expose(rootObj, endpoint) {
        if (isWindow(endpoint))
            endpoint = windowEndpoint(endpoint);
        if (!isEndpoint(endpoint))
            throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
        activateEndpoint(endpoint);
        attachMessageHandler(endpoint, async function (event) {
            if (!event.data.id || !event.data.callPath)
                return;
            const irequest = event.data;
            let that = await irequest.callPath
                .slice(0, -1)
                .reduce((obj, propName) => obj[propName], rootObj);
            let obj = await irequest.callPath.reduce((obj, propName) => obj[propName], rootObj);
            let iresult = obj;
            let args = [];
            if (irequest.type === "APPLY" || irequest.type === "CONSTRUCT")
                args = irequest.argumentsList.map(unwrapValue);
            if (irequest.type === "APPLY") {
                try {
                    iresult = await obj.apply(that, args);
                }
                catch (e) {
                    iresult = e;
                    iresult[throwSymbol] = true;
                }
            }
            if (irequest.type === "CONSTRUCT") {
                try {
                    iresult = new obj(...args); // eslint-disable-line new-cap
                    iresult = proxyValue(iresult);
                }
                catch (e) {
                    iresult = e;
                    iresult[throwSymbol] = true;
                }
            }
            if (irequest.type === "SET") {
                obj[irequest.property] = irequest.value;
                // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
                // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
                iresult = true;
            }
            iresult = makeInvocationResult(iresult);
            iresult.id = irequest.id;
            return endpoint.postMessage(iresult, transferableProperties([iresult]));
        });
    }
    function wrapValue(arg) {
        // Is arg itself handled by a TransferHandler?
        for (const [key, transferHandler] of transferHandlers) {
            if (transferHandler.canHandle(arg)) {
                return {
                    type: key,
                    value: transferHandler.serialize(arg)
                };
            }
        }
        // If not, traverse the entire object and find handled values.
        let wrappedChildren = [];
        for (const item of iterateAllProperties(arg)) {
            for (const [key, transferHandler] of transferHandlers) {
                if (transferHandler.canHandle(item.value)) {
                    wrappedChildren.push({
                        path: item.path,
                        wrappedValue: {
                            type: key,
                            value: transferHandler.serialize(item.value)
                        }
                    });
                }
            }
        }
        for (const wrappedChild of wrappedChildren) {
            const container = wrappedChild.path
                .slice(0, -1)
                .reduce((obj, key) => obj[key], arg);
            container[wrappedChild.path[wrappedChild.path.length - 1]] = null;
        }
        return {
            type: "RAW",
            value: arg,
            wrappedChildren
        };
    }
    function unwrapValue(arg) {
        if (transferHandlers.has(arg.type)) {
            const transferHandler = transferHandlers.get(arg.type);
            return transferHandler.deserialize(arg.value);
        }
        else if (isRawWrappedValue(arg)) {
            for (const wrappedChildValue of arg.wrappedChildren || []) {
                if (!transferHandlers.has(wrappedChildValue.wrappedValue.type))
                    throw Error(`Unknown value type "${arg.type}" at ${wrappedChildValue.path.join(".")}`);
                const transferHandler = transferHandlers.get(wrappedChildValue.wrappedValue.type);
                const newValue = transferHandler.deserialize(wrappedChildValue.wrappedValue.value);
                replaceValueInObjectAtPath(arg.value, wrappedChildValue.path, newValue);
            }
            return arg.value;
        }
        else {
            throw Error(`Unknown value type "${arg.type}"`);
        }
    }
    function replaceValueInObjectAtPath(obj, path, newVal) {
        const lastKey = path.slice(-1)[0];
        const lastObj = path
            .slice(0, -1)
            .reduce((obj, key) => obj[key], obj);
        lastObj[lastKey] = newVal;
    }
    function isRawWrappedValue(arg) {
        return arg.type === "RAW";
    }
    function windowEndpoint(w) {
        if (self.constructor.name !== "Window")
            throw Error("self is not a window");
        return {
            addEventListener: self.addEventListener.bind(self),
            removeEventListener: self.removeEventListener.bind(self),
            postMessage: (msg, transfer) => w.postMessage(msg, "*", transfer)
        };
    }
    function isEndpoint(endpoint) {
        return ("addEventListener" in endpoint &&
            "removeEventListener" in endpoint &&
            "postMessage" in endpoint);
    }
    function activateEndpoint(endpoint) {
        if (isMessagePort(endpoint))
            endpoint.start();
    }
    function attachMessageHandler(endpoint, f) {
        // Checking all possible types of `endpoint` manually satisfies TypeScript’s
        // type checker. Not sure why the inference is failing here. Since it’s
        // unnecessary code I’m going to resort to `any` for now.
        // if(isWorker(endpoint))
        //   endpoint.addEventListener('message', f);
        // if(isMessagePort(endpoint))
        //   endpoint.addEventListener('message', f);
        // if(isOtherWindow(endpoint))
        //   endpoint.addEventListener('message', f);
        endpoint.addEventListener("message", f);
    }
    function detachMessageHandler(endpoint, f) {
        // Same as above.
        endpoint.removeEventListener("message", f);
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function isWindow(endpoint) {
        // TODO: This doesn’t work on cross-origin iframes.
        // return endpoint.constructor.name === 'Window';
        return ["window", "length", "location", "parent", "opener"].every(prop => prop in endpoint);
    }
    /**
     * `pingPongMessage` sends a `postMessage` and waits for a reply. Replies are
     * identified by a unique id that is attached to the payload.
     */
    function pingPongMessage(endpoint, msg, transferables) {
        const id = `${uid}-${pingPongMessageCounter++}`;
        return new Promise(resolve => {
            attachMessageHandler(endpoint, function handler(event) {
                if (event.data.id !== id)
                    return;
                detachMessageHandler(endpoint, handler);
                resolve(event);
            });
            // Copy msg and add `id` property
            msg = Object.assign({}, msg, { id });
            endpoint.postMessage(msg, transferables);
        });
    }
    function cbProxy(cb, callPath = [], target = function () { }) {
        return new Proxy(target, {
            construct(_target, argumentsList, proxy) {
                return cb({
                    type: "CONSTRUCT",
                    callPath,
                    argumentsList
                });
            },
            apply(_target, _thisArg, argumentsList) {
                // We use `bind` as an indicator to have a remote function bound locally.
                // The actual target for `bind()` is currently ignored.
                if (callPath[callPath.length - 1] === "bind")
                    return cbProxy(cb, callPath.slice(0, -1));
                return cb({
                    type: "APPLY",
                    callPath,
                    argumentsList
                });
            },
            get(_target, property, proxy) {
                if (property === "then" && callPath.length === 0) {
                    return { then: () => proxy };
                }
                else if (property === "then") {
                    const r = cb({
                        type: "GET",
                        callPath
                    });
                    return Promise.resolve(r).then.bind(r);
                }
                else {
                    return cbProxy(cb, callPath.concat(property), _target[property]);
                }
            },
            set(_target, property, value, _proxy) {
                return cb({
                    type: "SET",
                    callPath,
                    property,
                    value
                });
            }
        });
    }
    function isTransferable(thing) {
        return TRANSFERABLE_TYPES.some(type => thing instanceof type);
    }
    function* iterateAllProperties(value, path = [], visited = null) {
        if (!value)
            return;
        if (!visited)
            visited = new WeakSet();
        if (visited.has(value))
            return;
        if (typeof value === "string")
            return;
        if (typeof value === "object")
            visited.add(value);
        if (ArrayBuffer.isView(value))
            return;
        yield { value, path };
        const keys = Object.keys(value);
        for (const key of keys)
            yield* iterateAllProperties(value[key], [...path, key], visited);
    }
    function transferableProperties(obj) {
        const r = [];
        for (const prop of iterateAllProperties(obj)) {
            if (isTransferable(prop.value))
                r.push(prop.value);
        }
        return r;
    }
    function makeInvocationResult(obj) {
        for (const [type, transferHandler] of transferHandlers) {
            if (transferHandler.canHandle(obj)) {
                const value = transferHandler.serialize(obj);
                return {
                    value: { type, value }
                };
            }
        }
        return {
            value: {
                type: "RAW",
                value: obj
            }
        };
    }
    return { proxy, proxyValue, transferHandlers, expose };
})();

// CONCATENATED MODULE: ./node_modules/comlink-loader/dist/comlink-loader.js?inline!./wasm-worker/wrapper.js
var inst;function f() {inst = inst || Comlink.proxy(__webpack_require__(3)());return this instanceof f ? new inst : inst;}
// EXTERNAL MODULE: ./vendor/fpsmeter.js
var fpsmeter = __webpack_require__(5);

// CONCATENATED MODULE: ./wasm-worker/index.js



 // setup an FPS meter

var fpsMeter = new FPSMeter();
fpsMeter.tickStart();

var nextTick = function nextTick() {
  fpsMeter.tick();
  requestAnimationFrame(nextTick);
};

requestAnimationFrame(nextTick);

asyncToGenerator_default()(
/*#__PURE__*/
regenerator_default.a.mark(function _callee2() {
  var worker, $output, video, toggle, scale, shouldRedirect, constraints, decodeQr, captureImage, initialize;
  return regenerator_default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return new f();

        case 2:
          worker = _context2.sent;
          $output = document.getElementById("output");
          video = document.getElementById("video");
          toggle = document.getElementById("toggle");
          scale = 0.25;
          shouldRedirect = true;
          constraints = {
            video: {
              facingMode: "environment"
            }
          };

          decodeQr =
          /*#__PURE__*/
          function () {
            var _ref2 = asyncToGenerator_default()(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee(byteArray) {
              var start, output, usedOutput, timeTaken;
              return regenerator_default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      start = new Date().getTime();
                      _context.next = 3;
                      return worker.decodeQrCode(byteArray);

                    case 3:
                      output = _context.sent;
                      usedOutput = output.includes("]") ? "N/A" : output;
                      timeTaken = new Date().getTime() - start;
                      requestAnimationFrame(function () {
                        $output.innerHTML = usedOutput;
                        document.getElementById("time").innerHTML = timeTaken + " ms";
                      });
                      console.log({
                        output: usedOutput,
                        timeTaken: timeTaken
                      });

                      if (shouldRedirect) {
                        if (/^https?:/.test(usedOutput)) {
                          toggle.dispatchEvent(new Event("click"));
                          window.open(usedOutput);
                        }
                      }

                      window.decoded = output;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function decodeQr(_x) {
              return _ref2.apply(this, arguments);
            };
          }();

          captureImage = function captureImage() {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
            window.myCanvas = canvas;
            canvas.toBlob(function (blob) {
              var reader = new FileReader();
              reader.addEventListener("loadend", function () {
                var arrayBuffer = reader.result;
                window.ab = arrayBuffer;
                decodeQr(new Uint8Array(arrayBuffer));
              });
              reader.readAsArrayBuffer(blob);
            }, "image/jpeg");
          };

          initialize = function initialize() {
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
              video.srcObject = stream;
            });
            toggle.addEventListener("click", function () {
              shouldRedirect = !shouldRedirect;

              if (shouldRedirect) {
                toggle.style = "";
                toggle.innerText = "Redirect: true";
              } else {
                toggle.style = "background: red";
                toggle.innerText = "Redirect: false";
              }
            });
            setInterval(captureImage, 300);
          };

          initialize();

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();

/***/ })
/******/ ]);
});