   _http_post = function(url,params) {
      if (typeof XMLHttpRequest !=='unefined') {
        Module.AJAX=new XMLHttpRequest();
      } else {
        Module.AJAX=new ActiveXObject('Microsoft.XMLHTTP');
      }
      if (Module.AJAX) {
        Module.AJAX.open('POST', Pointer_stringify(url), false);
        Module.AJAX.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        Module.AJAX.send(Pointer_stringify(params));
        var someString = Module.AJAX.responseText;
	return allocate(intArrayFromString(someString), 'i8', ALLOC_STACK);
      }
   };
   _http_get = function(url) {
      if (typeof XMLHttpRequest !=='unefined') {
        Module.AJAX=new XMLHttpRequest();
      } else {
        Module.AJAX=new ActiveXObject('Microsoft.XMLHTTP');
      }
      if (Module.AJAX) {
        Module.AJAX.open('GET', Pointer_stringify(url), false);
        Module.AJAX.send(null);
        var someString = Module.AJAX.responseText;
	return allocate(intArrayFromString(someString), 'i8', ALLOC_STACK);
      }
   };

// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, globalScope) {
  var Module = {};
  var args = [];
  Module.arguments = [];
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
var _s_methods;
var _s__doc__;
var __str3;
var __str2;
var __str1;
var __str;
_s_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_s__doc__=allocate([117,114,108,111,112,101,110,40,117,114,108,44,32,112,97,114,97,109,115,41,32,45,62,32,115,116,114,105,110,103,10,116,104,105,115,32,102,117,110,99,116,105,111,110,32,111,112,101,110,115,32,97,106,97,120,32,114,101,113,117,101,115,116,32,105,110,32,101,109,115,99,114,105,112,116,101,110,32,101,110,118,105,114,111,110,109,101,110,116,10,119,104,105,99,104,32,108,111,97,100,115,32,97,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,102,105,108,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,114,101,116,117,114,110,115,32,105,116,32,97,115,32,97,32,115,116,114,105,110,103,46,10,73,102,32,116,104,101,32,115,101,99,111,110,100,32,111,112,116,105,111,110,97,108,32,112,97,114,97,109,101,116,101,114,32,105,115,32,117,115,101,100,40,99,111,110,116,97,105,110,105,110,103,32,117,114,108,101,110,99,111,100,101,100,32,112,97,114,97,109,101,116,101,114,115,41,44,10,116,104,101,32,80,79,83,84,32,109,101,116,104,111,100,32,119,105,108,108,32,98,101,32,117,115,101,100,46,0], "i8", ALLOC_NORMAL);
__str3=allocate([115,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([115,124,115,58,117,114,108,111,112,101,110,0], "i8", ALLOC_NORMAL);
__str1=allocate([117,114,108,111,112,101,110,0], "i8", ALLOC_NORMAL);
__str=allocate([95,115,111,99,107,101,116,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_s_methods)>>2)]=((__str1)|0);
HEAP32[(((_s_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_s_methods)+(12))>>2)]=((_s__doc__)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_em_urlopen,0]);
// EMSCRIPTEN_START_FUNCS
function _init_socket(){_Py_InitModule4_64(__str|0,_s_methods|0,0,0,1013);return}function _em_urlopen(r1,r2){var r3,r4,r5,r6;r1=STACKTOP;STACKTOP=STACKTOP+8|0;r3=r1;r4=r1+4;HEAP32[r4>>2]=0;if((_PyArg_ParseTuple(r2,__str2|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r5=0;STACKTOP=r1;return r5}r2=HEAP32[r4>>2];r4=HEAP32[r3>>2];if((r2|0)==0){r6=_http_get(r4)}else{r6=_http_post(r4,r2)}r5=_Py_BuildValue(__str3|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r6,tempInt));STACKTOP=r1;return r5}
// EMSCRIPTEN_END_FUNCS
Module["_init_socket"] = _init_socket;
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
