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
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str3;
var __str2;
var __str15;
var __str14;
var __str13;
var __str12;
var __str11;
var __str10;
var __str1;
var __str;
var _SHAtype;
var _SHA_update__doc__;
var _SHA_new_kwlist;
var _SHA_new__doc__;
var _SHA_methods;
var _SHA_hexdigest__doc__;
var _SHA_getseters;
var _SHA_functions;
var _SHA_digest__doc__;
var _SHA_copy__doc__;
__str9=allocate([110,97,109,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([98,108,111,99,107,95,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([95,115,104,97,46,115,104,97,0,0,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([124,115,42,58,110,101,119,0], "i8", ALLOC_NORMAL);
__str5=allocate([115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([110,101,119,0], "i8", ALLOC_NORMAL);
__str3=allocate([100,105,103,101,115,116,95,115,105,122,101,0], "i8", ALLOC_NORMAL);
__str2=allocate([100,105,103,101,115,116,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([115,42,58,117,112,100,97,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([117,112,100,97,116,101,0,0], "i8", ALLOC_NORMAL);
__str13=allocate([104,101,120,100,105,103,101,115,116,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([100,105,103,101,115,116,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([99,111,112,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([83,72,65,49,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([98,108,111,99,107,115,105,122,101,0,0,0], "i8", ALLOC_NORMAL);
__str=allocate([95,115,104,97,0,0,0,0], "i8", ALLOC_NORMAL);
_SHAtype=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_update__doc__=allocate([85,112,100,97,116,101,32,116,104,105,115,32,104,97,115,104,105,110,103,32,111,98,106,101,99,116,39,115,32,115,116,97,116,101,32,119,105,116,104,32,116,104,101,32,112,114,111,118,105,100,101,100,32,115,116,114,105,110,103,46,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_new_kwlist=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_new__doc__=allocate([82,101,116,117,114,110,32,97,32,110,101,119,32,83,72,65,32,104,97,115,104,105,110,103,32,111,98,106,101,99,116,46,32,32,65,110,32,111,112,116,105,111,110,97,108,32,115,116,114,105,110,103,32,97,114,103,117,109,101,110,116,10,109,97,121,32,98,101,32,112,114,111,118,105,100,101,100,59,32,105,102,32,112,114,101,115,101,110,116,44,32,116,104,105,115,32,115,116,114,105,110,103,32,119,105,108,108,32,98,101,32,97,117,116,111,109,97,116,105,99,97,108,108,121,10,104,97,115,104,101,100,46,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_hexdigest__doc__=allocate([82,101,116,117,114,110,32,116,104,101,32,100,105,103,101,115,116,32,118,97,108,117,101,32,97,115,32,97,32,115,116,114,105,110,103,32,111,102,32,104,101,120,97,100,101,99,105,109,97,108,32,100,105,103,105,116,115,46,0,0], "i8", ALLOC_NORMAL);
_SHA_getseters=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_functions=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_SHA_digest__doc__=allocate([82,101,116,117,114,110,32,116,104,101,32,100,105,103,101,115,116,32,118,97,108,117,101,32,97,115,32,97,32,115,116,114,105,110,103,32,111,102,32,98,105,110,97,114,121,32,100,97,116,97,46,0], "i8", ALLOC_NORMAL);
_SHA_copy__doc__=allocate([82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,104,97,115,104,105,110,103,32,111,98,106,101,99,116,46,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[(((_SHAtype)+(12))>>2)]=((__str7)|0);
HEAP32[(((_SHAtype)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_SHAtype)+(116))>>2)]=((_SHA_methods)|0);
HEAP32[(((_SHAtype)+(124))>>2)]=((_SHA_getseters)|0);
HEAP32[((_SHA_new_kwlist)>>2)]=((__str5)|0);
HEAP32[((_SHA_methods)>>2)]=((__str11)|0);
HEAP32[(((_SHA_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
HEAP32[(((_SHA_methods)+(12))>>2)]=((_SHA_copy__doc__)|0);
HEAP32[(((_SHA_methods)+(16))>>2)]=((__str12)|0);
HEAP32[(((_SHA_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_SHA_methods)+(28))>>2)]=((_SHA_digest__doc__)|0);
HEAP32[(((_SHA_methods)+(32))>>2)]=((__str13)|0);
HEAP32[(((_SHA_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_SHA_methods)+(44))>>2)]=((_SHA_hexdigest__doc__)|0);
HEAP32[(((_SHA_methods)+(48))>>2)]=((__str14)|0);
HEAP32[(((_SHA_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_SHA_methods)+(60))>>2)]=((_SHA_update__doc__)|0);
HEAP32[((_SHA_getseters)>>2)]=((__str3)|0);
HEAP32[(((_SHA_getseters)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_SHA_getseters)+(20))>>2)]=((__str8)|0);
HEAP32[(((_SHA_getseters)+(24))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_SHA_getseters)+(40))>>2)]=((__str9)|0);
HEAP32[(((_SHA_getseters)+(44))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_SHA_getseters)+(60))>>2)]=((__str2)|0);
HEAP32[(((_SHA_getseters)+(64))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[((_SHA_functions)>>2)]=((__str4)|0);
HEAP32[(((_SHA_functions)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_SHA_functions)+(12))>>2)]=((_SHA_new__doc__)|0);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_SHA_new,0,_SHA_digest,0,_SHA_update,0,_SHA_get_name,0,_SHA_dealloc,0,_SHA_hexdigest,0,_SHA_copy,0,_SHA_get_digest_size,0,_SHA_get_block_size,0]);
// EMSCRIPTEN_START_FUNCS
function _sha_init(r1){var r2;r2=r1>>2;HEAP32[r2+25]=1;HEAP32[r2+2]=1732584193;HEAP32[r2+3]=-271733879;HEAP32[r2+4]=-1732584194;HEAP32[r2+5]=271733878;HEAP32[r2+6]=-1009589776;HEAP32[r2+7]=0;HEAP32[r2+8]=0;HEAP32[r2+26]=0;return}function _init_sha(){var r1;HEAP32[_SHAtype+4>>2]=_PyType_Type;if((_PyType_Ready(_SHAtype)|0)<0){return}r1=_Py_InitModule4_64(__str|0,_SHA_functions|0,0,0,1013);if((r1|0)==0){return}_PyModule_AddIntConstant(r1,__str1|0,1);_PyModule_AddIntConstant(r1,__str2|0,20);_PyModule_AddIntConstant(r1,__str3|0,20);return}function _SHA_new(r1,r2,r3){var r4,r5,r6;r1=STACKTOP;STACKTOP=STACKTOP+52|0;r4=r1;_memset(r4,0,52);if((_PyArg_ParseTupleAndKeywords(r2,r3,__str6|0,_SHA_new_kwlist|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt))|0)==0){r5=0;STACKTOP=r1;return r5}r3=_newSHAobject();if((r3|0)==0){_PyBuffer_Release(r4);r5=0;STACKTOP=r1;return r5}_sha_init(r3);if((_PyErr_Occurred()|0)==0){r2=HEAP32[r4+8>>2];if((r2|0)>0){_sha_update(r3,HEAP32[r4>>2],r2)}_PyBuffer_Release(r4);r5=r3;STACKTOP=r1;return r5}else{r2=r3|0;r6=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r6;if((r6|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r3+4>>2]+24>>2]](r3)}_PyBuffer_Release(r4);r5=0;STACKTOP=r1;return r5}}function _newSHAobject(){return __PyObject_New(_SHAtype)}function _sha_update(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11;r4=r1+28|0;r5=_llvm_uadd_with_overflow_i32(HEAP32[r4>>2],r3<<3);if(tempRet0){r6=r1+32|0;HEAP32[r6>>2]=HEAP32[r6>>2]+1|0}HEAP32[r4>>2]=r5;r5=r1+32|0;HEAP32[r5>>2]=HEAP32[r5>>2]+(r3>>>29)|0;r5=(r1+104|0)>>2;r4=HEAP32[r5];do{if((r4|0)==0){r7=r2;r8=r3}else{r6=64-r4|0;r9=r6>>>0>r3>>>0?r3:r6;_memcpy(r1+(r4+36)|0,r2,r9);r6=HEAP32[r5]+r9|0;HEAP32[r5]=r6;if((r6|0)==64){_sha_transform(r1);r7=r2+r9|0;r8=r3-r9|0;break}else{return}}}while(0);r3=r1+36|0;L39:do{if(r8>>>0>63){r2=r8;r4=r7;while(1){_memcpy(r3,r4,64);r9=r4+64|0;r6=r2-64|0;_sha_transform(r1);if(r6>>>0>63){r2=r6;r4=r9}else{r10=r6;r11=r9;break L39}}}else{r10=r8;r11=r7}}while(0);_memcpy(r3,r11,r10);HEAP32[r5]=r10;return}function _sha_transform(r1){var r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14;r2=STACKTOP;STACKTOP=STACKTOP+320|0;r3=r2,r4=r3>>2;_memcpy(r3,r1+36|0,64);r5=r3|0;_longReverse(r5,HEAP32[r1+100>>2]);r3=16;while(1){r6=HEAP32[(r3-8<<2>>2)+r4]^HEAP32[(r3-3<<2>>2)+r4]^HEAP32[(r3-14<<2>>2)+r4]^HEAP32[(r3-16<<2>>2)+r4];HEAP32[(r3<<2>>2)+r4]=r6<<1|r6>>>31;r6=r3+1|0;if((r6|0)==80){break}else{r3=r6}}r3=r1+8|0;r6=HEAP32[r3>>2];r7=(r1+12|0)>>2;r8=HEAP32[r7];r9=(r1+16|0)>>2;r10=HEAP32[r9];r11=(r1+20|0)>>2;r12=HEAP32[r11];r13=(r1+24|0)>>2;r1=(r6<<5|r6>>>27)+HEAP32[r13]+HEAP32[r5>>2]+((r12^r10)&r8^r12)+1518500249|0;r5=r8<<30|r8>>>2;r8=r12+((r5^r10)&r6^r10)+HEAP32[r4+1]+(r1<<5|r1>>>27)+1518500249|0;r12=r6<<30|r6>>>2;r14=r10+HEAP32[r4+2]+(r1&(r5^r12)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=r5+HEAP32[r4+3]+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=r12+HEAP32[r4+4]+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=r10+HEAP32[r4+5]+(r1&(r12^r5)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+6]+r5+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+7]+r12+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+8]+r10+(r1&(r12^r5)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+9]+r5+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+10]+r12+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+11]+r10+(r1&(r12^r5)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+12]+r5+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+13]+r12+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+14]+r10+(r1&(r12^r5)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+15]+r5+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+16]+r12+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+17]+r10+(r1&(r12^r5)^r5)+(r8<<5|r8>>>27)+1518500249|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+18]+r5+(r8&(r10^r12)^r12)+(r14<<5|r14>>>27)+1518500249|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+19]+r12+(r14&(r5^r10)^r10)+(r1<<5|r1>>>27)+1518500249|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+20]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+21]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+22]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+23]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+24]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+25]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+26]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+27]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+28]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+29]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+30]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+31]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+32]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+33]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+34]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+35]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+36]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+37]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)+1859775393|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+38]+r10+(r12^r5^r1)+(r8<<5|r8>>>27)+1859775393|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+39]+r5+(r10^r12^r8)+(r14<<5|r14>>>27)+1859775393|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+40]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+41]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+42]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+43]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+44]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+45]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+46]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+47]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+48]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+49]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+50]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+51]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+52]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+53]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+54]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+55]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+56]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+57]-1894007588+r5+((r8|r10)&r12|r8&r10)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+58]-1894007588+r12+((r14|r5)&r10|r14&r5)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+59]-1894007588+r10+((r1|r12)&r5|r1&r12)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+60]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+61]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+62]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+63]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+64]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+65]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+66]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+67]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+68]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+69]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+70]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+71]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+72]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+73]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+74]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+75]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;r8=HEAP32[r4+76]-899497514+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;r12=r14<<30|r14>>>2;r14=HEAP32[r4+77]-899497514+r10+(r12^r5^r1)+(r8<<5|r8>>>27)|0;r10=r1<<30|r1>>>2;r1=HEAP32[r4+78]-899497514+r5+(r10^r12^r8)+(r14<<5|r14>>>27)|0;r5=r8<<30|r8>>>2;HEAP32[r3>>2]=r6-899497514+HEAP32[r4+79]+r12+(r5^r10^r14)+(r1<<5|r1>>>27)|0;HEAP32[r7]=r1+HEAP32[r7]|0;HEAP32[r9]=(r14<<30|r14>>>2)+HEAP32[r9]|0;HEAP32[r11]=r5+HEAP32[r11]|0;HEAP32[r13]=r10+HEAP32[r13]|0;STACKTOP=r2;return}function _longReverse(r1,r2){var r3;if((r2|0)==0){return}r2=r1+4|0;HEAP32[r1>>2]=_llvm_bswap_i32(HEAP32[r1>>2]);r3=r1+8|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+12|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+16|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+20|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+24|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+28|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+32|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+36|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+40|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+44|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+48|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+52|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);r3=r1+56|0;HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);r2=r1+60|0;HEAP32[r3>>2]=_llvm_bswap_i32(HEAP32[r3>>2]);HEAP32[r2>>2]=_llvm_bswap_i32(HEAP32[r2>>2]);return}function _SHA_dealloc(r1){_PyObject_Free(r1);return}function _SHA_get_digest_size(r1,r2){return _PyInt_FromLong(20)}function _SHA_get_block_size(r1,r2){return _PyInt_FromLong(64)}function _SHA_get_name(r1,r2){return _PyString_FromStringAndSize(__str10|0,4)}function _SHA_copy(r1,r2){var r3;r2=_newSHAobject();if((r2|0)==0){r3=0}else{_SHAcopy(r1,r2);r3=r2}return r3}function _SHA_digest(r1,r2){var r3;r2=STACKTOP;STACKTOP=STACKTOP+128|0;r3=r2+20;_SHAcopy(r1,r3);r1=r2|0;_sha_final(r1,r3);r3=_PyString_FromStringAndSize(r1,20);STACKTOP=r2;return r3}function _SHA_hexdigest(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r2=STACKTOP;STACKTOP=STACKTOP+128|0;r3=r2;r4=r2+20;_SHAcopy(r1,r4);_sha_final(r3|0,r4);r4=_PyString_FromStringAndSize(0,40);if((r4|0)==0){r5=0;STACKTOP=r2;return r5}r1=_PyString_AsString(r4);if((r1|0)!=0){r6=0;r7=0;while(1){r8=r3+r6|0;r9=HEAP8[r8];r10=(r9&255)>>>4;HEAP8[r1+r7|0]=(r9&255)>159?r10+87&255:r10|48;r10=HEAP8[r8]&15;HEAP8[r1+(r7|1)|0]=(r10&255)>9?r10+87&255:r10|48;r10=r6+1|0;if((r10|0)==20){r5=r4;break}else{r6=r10;r7=r7+2|0}}STACKTOP=r2;return r5}r7=r4|0;r6=HEAP32[r7>>2]-1|0;HEAP32[r7>>2]=r6;if((r6|0)!=0){r5=0;STACKTOP=r2;return r5}FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);r5=0;STACKTOP=r2;return r5}function _SHA_update(r1,r2){var r3,r4,r5;r3=STACKTOP;STACKTOP=STACKTOP+52|0;r4=r3;if((_PyArg_ParseTuple(r2,__str15|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt))|0)==0){r5=0;STACKTOP=r3;return r5}_sha_update(r1,HEAP32[r4>>2],HEAP32[r4+8>>2]);_PyBuffer_Release(r4);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r5=__Py_NoneStruct;STACKTOP=r3;return r5}function _SHAcopy(r1,r2){var r3,r4;HEAP32[r2+100>>2]=HEAP32[r1+100>>2];HEAP32[r2+104>>2]=HEAP32[r1+104>>2];HEAP32[r2+28>>2]=HEAP32[r1+28>>2];HEAP32[r2+32>>2]=HEAP32[r1+32>>2];r3=(r2+8|0)>>2;r4=(r1+8|0)>>2;HEAP32[r3]=HEAP32[r4];HEAP32[r3+1]=HEAP32[r4+1];HEAP32[r3+2]=HEAP32[r4+2];HEAP32[r3+3]=HEAP32[r4+3];HEAP32[r3+4]=HEAP32[r4+4];_memcpy(r2+36|0,r1+36|0,64);return}function _sha_final(r1,r2){var r3,r4,r5,r6,r7;r3=HEAP32[r2+28>>2];r4=HEAP32[r2+32>>2];r5=r3>>>3&63;r6=r5+1|0;HEAP8[r2+(r5+36)|0]=-128;r7=r2+(r6+36)|0;if(r6>>>0>56){_memset(r7,0,r5^63);_sha_transform(r2);_memset(r2+36|0,0,56)}else{_memset(r7,0,55-r5|0)}HEAP8[r2+92|0]=r4>>>24&255;HEAP8[r2+93|0]=r4>>>16&255;HEAP8[r2+94|0]=r4>>>8&255;HEAP8[r2+95|0]=r4&255;HEAP8[r2+96|0]=r3>>>24&255;HEAP8[r2+97|0]=r3>>>16&255;HEAP8[r2+98|0]=r3>>>8&255;HEAP8[r2+99|0]=r3&255;_sha_transform(r2);r3=(r2+8|0)>>2;HEAP8[r1]=HEAP32[r3]>>>24&255;HEAP8[r1+1|0]=HEAP32[r3]>>>16&255;HEAP8[r1+2|0]=HEAP32[r3]>>>8&255;HEAP8[r1+3|0]=HEAP32[r3]&255;r3=(r2+12|0)>>2;HEAP8[r1+4|0]=HEAP32[r3]>>>24&255;HEAP8[r1+5|0]=HEAP32[r3]>>>16&255;HEAP8[r1+6|0]=HEAP32[r3]>>>8&255;HEAP8[r1+7|0]=HEAP32[r3]&255;r3=(r2+16|0)>>2;HEAP8[r1+8|0]=HEAP32[r3]>>>24&255;HEAP8[r1+9|0]=HEAP32[r3]>>>16&255;HEAP8[r1+10|0]=HEAP32[r3]>>>8&255;HEAP8[r1+11|0]=HEAP32[r3]&255;r3=(r2+20|0)>>2;HEAP8[r1+12|0]=HEAP32[r3]>>>24&255;HEAP8[r1+13|0]=HEAP32[r3]>>>16&255;HEAP8[r1+14|0]=HEAP32[r3]>>>8&255;HEAP8[r1+15|0]=HEAP32[r3]&255;r3=(r2+24|0)>>2;HEAP8[r1+16|0]=HEAP32[r3]>>>24&255;HEAP8[r1+17|0]=HEAP32[r3]>>>16&255;HEAP8[r1+18|0]=HEAP32[r3]>>>8&255;HEAP8[r1+19|0]=HEAP32[r3]&255;return}
// EMSCRIPTEN_END_FUNCS
Module["_init_sha"] = _init_sha;
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
