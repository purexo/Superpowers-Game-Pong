(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

SupAPI.registerPlugin("typescript", "EventEmitter", {
    code: null,
    defs: "declare class EventEmitter {\r\n  static listenerCount(emitter: EventEmitter, event: string): number;\r\n\r\n  addListener(event: string, listener: Function): EventEmitter;\r\n  on(event: string, listener: Function): EventEmitter;\r\n  once(event: string, listener: Function): EventEmitter;\r\n  removeListener(event: string, listener: Function): EventEmitter;\r\n  removeAllListeners(event?: string): EventEmitter;\r\n  setMaxListeners(n: number): void;\r\n  listeners(event: string): Function[];\r\n  emit(event: string, ...args: any[]): boolean;\r\n}\r\n"
});

},{}]},{},[1]);
