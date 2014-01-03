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
var _imageop_methods;
var _imageop_backward_compatible_bcos;
var __str9;
var __str8;
var __str7;
var __str6;
var __str5;
var __str4;
var __str36;
var __str35;
var __str34;
var __str33;
var __str32;
var __str31;
var __str30;
var __str3;
var __str29;
var __str28;
var __str27;
var __str26;
var __str25;
var __str24;
var __str23;
var __str22;
var __str21;
var __str20;
var __str2;
var __str19;
var __str18;
var __str17;
var __str16;
var __str15;
var __str14;
var __str13;
var __str12;
var __str11;
var __str10;
var __str1;
var __str;
var _ImageopError;
var _ImageopDict;
_imageop_methods=allocate([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_imageop_backward_compatible_bcos=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([100,105,116,104,101,114,50,109,111,110,111,0], "i8", ALLOC_NORMAL);
__str8=allocate([103,114,101,121,50,103,114,101,121,52,0,0], "i8", ALLOC_NORMAL);
__str7=allocate([103,114,101,121,50,103,114,101,121,50,0,0], "i8", ALLOC_NORMAL);
__str6=allocate([103,114,101,121,50,109,111,110,111,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([115,99,97,108,101,0,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([99,114,111,112,0,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([97,98,115,40,110,101,119,121,50,45,110,101,119,121,49,41,43,49,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([97,98,115,40,110,101,119,120,50,45,110,101,119,120,49,41,43,49,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([115,35,105,105,105,105,105,105,105,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([110,101,119,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([110,101,119,120,0,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0,0,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([115,35,105,105,105,105,105,0], "i8", ALLOC_NORMAL);
__str3=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([115,35,105,105,105,105,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([109,97,120,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([109,97,120,0], "i8", ALLOC_NORMAL);
__str26=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,32,111,114,32,52,0,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([115,35,105,105,105,0,0,0], "i8", ALLOC_NORMAL);
__str24=allocate([98,97,99,107,119,97,114,100,95,99,111,109,112,97,116,105,98,108,101,0], "i8", ALLOC_NORMAL);
__str23=allocate([37,115,32,118,97,108,117,101,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,117,108,0], "i8", ALLOC_NORMAL);
__str22=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,114,114,101,99,116,32,108,101,110,103,116,104,0], "i8", ALLOC_NORMAL);
__str21=allocate([121,0,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([120,0,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([105,109,97,103,101,111,112,46,101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([115,35,105,105,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([103,114,101,121,50,114,103,98,0,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([114,103,98,50,103,114,101,121,0,0,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([114,103,98,56,50,114,103,98,0,0,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([114,103,98,50,114,103,98,56,0,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([116,111,118,105,100,101,111,0], "i8", ALLOC_NORMAL);
__str13=allocate([103,114,101,121,52,50,103,114,101,121,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([103,114,101,121,50,50,103,114,101,121,0,0], "i8", ALLOC_NORMAL);
__str11=allocate([109,111,110,111,50,103,114,101,121,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([100,105,116,104,101,114,50,103,114,101,121,50,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([105,109,97,103,101,111,112,0], "i8", ALLOC_NORMAL);
__str=allocate([116,104,101,32,105,109,97,103,101,111,112,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,0,0,0], "i8", ALLOC_NORMAL);
_ImageopError=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_ImageopDict=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_imageop_methods)>>2)]=((__str4)|0);
HEAP32[(((_imageop_methods)+(4))>>2)]=(FUNCTION_TABLE_OFFSET + 10);
HEAP32[(((_imageop_methods)+(16))>>2)]=((__str5)|0);
HEAP32[(((_imageop_methods)+(20))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_imageop_methods)+(32))>>2)]=((__str6)|0);
HEAP32[(((_imageop_methods)+(36))>>2)]=(FUNCTION_TABLE_OFFSET + 2);
HEAP32[(((_imageop_methods)+(48))>>2)]=((__str7)|0);
HEAP32[(((_imageop_methods)+(52))>>2)]=(FUNCTION_TABLE_OFFSET + 16);
HEAP32[(((_imageop_methods)+(64))>>2)]=((__str8)|0);
HEAP32[(((_imageop_methods)+(68))>>2)]=(FUNCTION_TABLE_OFFSET + 20);
HEAP32[(((_imageop_methods)+(80))>>2)]=((__str9)|0);
HEAP32[(((_imageop_methods)+(84))>>2)]=(FUNCTION_TABLE_OFFSET + 14);
HEAP32[(((_imageop_methods)+(96))>>2)]=((__str10)|0);
HEAP32[(((_imageop_methods)+(100))>>2)]=(FUNCTION_TABLE_OFFSET + 18);
HEAP32[(((_imageop_methods)+(112))>>2)]=((__str11)|0);
HEAP32[(((_imageop_methods)+(116))>>2)]=(FUNCTION_TABLE_OFFSET + 8);
HEAP32[(((_imageop_methods)+(128))>>2)]=((__str12)|0);
HEAP32[(((_imageop_methods)+(132))>>2)]=(FUNCTION_TABLE_OFFSET + 28);
HEAP32[(((_imageop_methods)+(144))>>2)]=((__str13)|0);
HEAP32[(((_imageop_methods)+(148))>>2)]=(FUNCTION_TABLE_OFFSET + 26);
HEAP32[(((_imageop_methods)+(160))>>2)]=((__str14)|0);
HEAP32[(((_imageop_methods)+(164))>>2)]=(FUNCTION_TABLE_OFFSET + 30);
HEAP32[(((_imageop_methods)+(176))>>2)]=((__str15)|0);
HEAP32[(((_imageop_methods)+(180))>>2)]=(FUNCTION_TABLE_OFFSET + 6);
HEAP32[(((_imageop_methods)+(192))>>2)]=((__str16)|0);
HEAP32[(((_imageop_methods)+(196))>>2)]=(FUNCTION_TABLE_OFFSET + 4);
HEAP32[(((_imageop_methods)+(208))>>2)]=((__str17)|0);
HEAP32[(((_imageop_methods)+(212))>>2)]=(FUNCTION_TABLE_OFFSET + 12);
HEAP32[(((_imageop_methods)+(224))>>2)]=((__str18)|0);
HEAP32[(((_imageop_methods)+(228))>>2)]=(FUNCTION_TABLE_OFFSET + 22);
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_imageop_grey2mono,0,_imageop_rgb82rgb,0,_imageop_rgb2rgb8,0,_imageop_mono2grey,0,_imageop_crop
,0,_imageop_rgb2grey,0,_imageop_dither2mono,0,_imageop_grey2grey2,0,_imageop_dither2grey2,0,_imageop_grey2grey4
,0,_imageop_grey2rgb,0,_imageop_scale,0,_imageop_grey42grey,0,_imageop_grey22grey,0,_imageop_tovideo,0]);
// EMSCRIPTEN_START_FUNCS
function _initimageop(){var r1,r2;do{if((HEAP32[_Py_Py3kWarningFlag>>2]|0)!=0){if((_PyErr_WarnEx(HEAP32[_PyExc_DeprecationWarning>>2],__str|0,2)|0)>=0){break}return}}while(0);r1=_Py_InitModule4_64(__str1|0,_imageop_methods|0,0,0,1013);if((r1|0)==0){return}r2=_PyModule_GetDict(r1);HEAP32[_ImageopDict>>2]=r2;r2=_PyErr_NewException(__str2|0,0,0);HEAP32[_ImageopError>>2]=r2;if((r2|0)==0){return}_PyDict_SetItemString(HEAP32[_ImageopDict>>2],__str3|0,r2);return}function _imageop_crop(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33;r1=0;r3=STACKTOP;STACKTOP=STACKTOP+36|0;r4=r3;r5=r3+4;r6=r3+8,r7=r6>>2;r8=r3+12;r9=r3+16;r10=r3+20,r11=r10>>2;r12=r3+24,r13=r12>>2;r14=r3+28,r15=r14>>2;r16=r3+32,r17=r16>>2;if((_PyArg_ParseTuple(r2,__str34|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+36|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r8,HEAP32[tempInt+16>>2]=r9,HEAP32[tempInt+20>>2]=r10,HEAP32[tempInt+24>>2]=r14,HEAP32[tempInt+28>>2]=r12,HEAP32[tempInt+32>>2]=r16,tempInt))|0)==0){r18=0;STACKTOP=r3;return r18}r16=HEAP32[r7];if((r16-1|0)>>>0>1&(r16|0)!=4){_PyErr_SetString(HEAP32[_ImageopError>>2],__str31|0);r18=0;STACKTOP=r3;return r18}if((_check_multiply_size(HEAP32[r5>>2],HEAP32[r8>>2],__str20|0,HEAP32[r9>>2],__str21|0,r16)|0)==0){r18=0;STACKTOP=r3;return r18}r16=HEAP32[r11];r5=HEAP32[r13];r12=(r16|0)<(r5|0)?1:-1;r14=(HEAP32[r15]|0)<(HEAP32[r17]|0)?1:-1;r10=r5-r16|0;r16=HEAP32[r17]-HEAP32[r15]|0;r5=Math.imul(Math.imul(HEAP32[r7],((r10|0)>-1?r10:-r10|0)+1|0),((r16|0)>-1?r16:-r16|0)+1|0);r16=HEAP32[r13]-HEAP32[r11]|0;r10=HEAP32[r17]-HEAP32[r15]|0;if((_check_multiply_size(r5,((r16|0)>-1?r16:-r16|0)+1|0,__str35|0,((r10|0)>-1?r10:-r10|0)+1|0,__str36|0,HEAP32[r7])|0)==0){r18=0;STACKTOP=r3;return r18}r10=_PyString_FromStringAndSize(0,r5);if((r10|0)==0){r18=0;STACKTOP=r3;return r18}r5=_PyString_AsString(r10);r16=HEAP32[r17]+r14|0;HEAP32[r17]=r16;HEAP32[r13]=HEAP32[r13]+r12|0;r6=HEAP32[r15];if((r6|0)==(r16|0)){r18=r10;STACKTOP=r3;return r18}r16=r5;r15=r6;r6=r5;r2=r5;while(1){r5=HEAP32[r11];L34:do{if((r5|0)==(HEAP32[r13]|0)){r19=r16;r20=r6;r21=r2}else{r22=(r15|0)<0;r23=r16;r24=r5;r25=r6;r26=r2;while(1){do{if(r22){r1=24}else{if((r15|0)>=(HEAP32[r9>>2]|0)|(r24|0)<0){r1=24;break}r27=HEAP32[r8>>2];if((r24|0)>=(r27|0)){r1=24;break}r28=HEAP32[r7];if((r28|0)==1){HEAP8[r26]=HEAP8[HEAP32[r4>>2]+Math.imul(r27,r15)+r24|0];r29=r26+1|0;r30=r25;r31=r23;break}r32=HEAP32[r4>>2];r33=Math.imul(r27,r15)+r24|0;if((r28|0)==2){HEAP16[r25>>1]=HEAP16[r32+(r33<<1)>>1];r29=r26;r30=r25+2|0;r31=r23;break}else{HEAP32[r23>>2]=HEAP32[r32+(r33<<2)>>2];r29=r26;r30=r25;r31=r23+4|0;break}}}while(0);do{if(r1==24){r1=0;if((HEAP32[r7]|0)==1){HEAP8[r26]=0;r29=r26+1|0;r30=r25;r31=r23;break}else{HEAP32[r23>>2]=0;r29=r26;r30=r25;r31=r23+4|0;break}}}while(0);r33=r24+r12|0;if((r33|0)==(HEAP32[r13]|0)){r19=r31;r20=r30;r21=r29;break L34}else{r23=r31;r24=r33;r25=r30;r26=r29}}}}while(0);r5=r15+r14|0;if((r5|0)==(HEAP32[r17]|0)){r18=r10;break}else{r16=r19;r15=r5;r6=r20;r2=r21}}STACKTOP=r3;return r18}function _imageop_scale(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31;r1=STACKTOP;STACKTOP=STACKTOP+28|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;r8=r1+16;r9=r1+20,r10=r9>>2;r11=r1+24,r12=r11>>2;if((_PyArg_ParseTuple(r2,__str30|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+28|0,HEAP32[tempInt>>2]=r3,HEAP32[tempInt+4>>2]=r4,HEAP32[tempInt+8>>2]=r5,HEAP32[tempInt+12>>2]=r7,HEAP32[tempInt+16>>2]=r8,HEAP32[tempInt+20>>2]=r9,HEAP32[tempInt+24>>2]=r11,tempInt))|0)==0){r13=0;STACKTOP=r1;return r13}r11=HEAP32[r6];if((r11-1|0)>>>0>1&(r11|0)!=4){_PyErr_SetString(HEAP32[_ImageopError>>2],__str31|0);r13=0;STACKTOP=r1;return r13}if((_check_multiply_size(HEAP32[r4>>2],HEAP32[r7>>2],__str20|0,HEAP32[r8>>2],__str21|0,r11)|0)==0){r13=0;STACKTOP=r1;return r13}r11=HEAP32[r10];r4=HEAP32[r12];r9=Math.imul(r4,r11);r5=HEAP32[r6];r2=Math.imul(r9,r5);if((_check_multiply_size(r2,r11,__str32|0,r4,__str33|0,r5)|0)==0){r13=0;STACKTOP=r1;return r13}r5=_PyString_FromStringAndSize(0,r2);if((r5|0)==0){r13=0;STACKTOP=r1;return r13}r2=_PyString_AsString(r5);if((HEAP32[r12]|0)<=0){r13=r5;STACKTOP=r1;return r13}r4=r2;r11=0;r9=r2;r14=r2;while(1){r2=HEAP32[r10];L78:do{if((r2|0)>0){r15=r4;r16=0;r17=r9;r18=r14;r19=r2;while(1){r20=HEAP32[r7>>2];r21=(Math.imul(r20,r16)|0)/(r19|0)&-1;r22=(Math.imul(HEAP32[r8>>2],r11)|0)/(HEAP32[r12]|0)&-1;r23=HEAP32[r6];do{if((r23|0)==1){HEAP8[r18]=HEAP8[HEAP32[r3>>2]+Math.imul(r22,r20)+r21|0];r24=r18+1|0;r25=r17;r26=r15}else{r27=HEAP32[r3>>2];r28=Math.imul(r22,r20)+r21|0;if((r23|0)==2){HEAP16[r17>>1]=HEAP16[r27+(r28<<1)>>1];r24=r18;r25=r17+2|0;r26=r15;break}else{HEAP32[r15>>2]=HEAP32[r27+(r28<<2)>>2];r24=r18;r25=r17;r26=r15+4|0;break}}}while(0);r23=r16+1|0;r21=HEAP32[r10];if((r23|0)<(r21|0)){r15=r26;r16=r23;r17=r25;r18=r24;r19=r21}else{r29=r26;r30=r25;r31=r24;break L78}}}else{r29=r4;r30=r9;r31=r14}}while(0);r2=r11+1|0;if((r2|0)<(HEAP32[r12]|0)){r4=r29;r11=r2;r9=r30;r14=r31}else{r13=r5;break}}STACKTOP=r1;return r13}function _imageop_grey2mono(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17;r1=STACKTOP;STACKTOP=STACKTOP+20|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12,r7=r6>>2;r8=r1+16;if((_PyArg_ParseTuple(r2,__str25|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+20|0,HEAP32[tempInt>>2]=r8,HEAP32[tempInt+4>>2]=r6,HEAP32[tempInt+8>>2]=r4,HEAP32[tempInt+12>>2]=r5,HEAP32[tempInt+16>>2]=r3,tempInt))|0)==0){r9=0;STACKTOP=r1;return r9}if((_check_multiply(HEAP32[r7],HEAP32[r4>>2],HEAP32[r5>>2])|0)==0){r9=0;STACKTOP=r1;return r9}r5=_PyString_FromStringAndSize(0,(HEAP32[r7]+7|0)/8&-1);if((r5|0)==0){r9=0;STACKTOP=r1;return r9}r4=_PyString_AsString(r5);if((HEAP32[r7]|0)>0){r10=r4;r11=0;r12=0;r13=128}else{r9=r5;STACKTOP=r1;return r9}while(1){if((HEAPU8[HEAP32[r8>>2]+r12|0]|0)>(HEAP32[r3>>2]|0)){r14=(r13|r11&255)&255}else{r14=r11}r4=r13>>1;if((r4|0)==0){HEAP8[r10]=r14;r15=128;r16=0;r17=r10+1|0}else{r15=r4;r16=r14;r17=r10}r4=r12+1|0;if((r4|0)<(HEAP32[r7]|0)){r10=r17;r11=r16;r12=r4;r13=r15}else{break}}if((r15|0)==128){r9=r5;STACKTOP=r1;return r9}HEAP8[r17]=r16;r9=r5;STACKTOP=r1;return r9}function _imageop_grey2grey2(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r8=0;STACKTOP=r1;return r8}r4=_PyString_FromStringAndSize(0,(HEAP32[r6]+3|0)/4&-1);if((r4|0)==0){r8=0;STACKTOP=r1;return r8}r3=_PyString_AsString(r4);if((HEAP32[r6]|0)>0){r9=r3;r10=0;r11=0;r12=0}else{r8=r4;STACKTOP=r1;return r8}while(1){r3=((HEAP8[HEAP32[r7>>2]+r11|0]&192)>>>(r12>>>0)|r10&255)&255;r5=r12+2|0;if((r5|0)==8){HEAP8[r9]=r3;r13=0;r14=0;r15=r9+1|0}else{r13=r5;r14=r3;r15=r9}r3=r11+1|0;if((r3|0)<(HEAP32[r6]|0)){r9=r15;r10=r14;r11=r3;r12=r13}else{break}}if((r13|0)==0){r8=r4;STACKTOP=r1;return r8}HEAP8[r15]=r14;r8=r4;STACKTOP=r1;return r8}function _imageop_grey2grey4(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r8=0;STACKTOP=r1;return r8}r4=_PyString_FromStringAndSize(0,(HEAP32[r6]+1|0)/2&-1);if((r4|0)==0){r8=0;STACKTOP=r1;return r8}r3=_PyString_AsString(r4);if((HEAP32[r6]|0)>0){r9=r3;r10=0;r11=0;r12=0}else{r8=r4;STACKTOP=r1;return r8}while(1){r3=((HEAP8[HEAP32[r7>>2]+r11|0]&240)>>>(r12>>>0)|r10&255)&255;r5=r12+4|0;if((r5|0)==8){HEAP8[r9]=r3;r13=0;r14=0;r15=r9+1|0}else{r13=r5;r14=r3;r15=r9}r3=r11+1|0;if((r3|0)<(HEAP32[r6]|0)){r9=r15;r10=r14;r11=r3;r12=r13}else{break}}if((r13|0)==0){r8=r4;STACKTOP=r1;return r8}HEAP8[r15]=r14;r8=r4;STACKTOP=r1;return r8}function _imageop_dither2mono(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r8=0;STACKTOP=r1;return r8}r4=_PyString_FromStringAndSize(0,(HEAP32[r6]+7|0)/8&-1);if((r4|0)==0){r8=0;STACKTOP=r1;return r8}r3=_PyString_AsString(r4);if((HEAP32[r6]|0)>0){r9=0;r10=r3;r11=0;r12=0;r13=128}else{r8=r4;STACKTOP=r1;return r8}while(1){r3=HEAPU8[HEAP32[r7>>2]+r12|0]+r9|0;if((r3|0)>255){r14=(r13|r11&255)&255;r15=r3-256|0}else{r14=r11;r15=r3}r3=r13>>1;if((r3|0)==0){HEAP8[r10]=r14;r16=128;r17=0;r18=r10+1|0}else{r16=r3;r17=r14;r18=r10}r3=r12+1|0;if((r3|0)<(HEAP32[r6]|0)){r9=r15;r10=r18;r11=r17;r12=r3;r13=r16}else{break}}if((r16|0)==128){r8=r4;STACKTOP=r1;return r8}HEAP8[r18]=r17;r8=r4;STACKTOP=r1;return r8}function _imageop_dither2grey2(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r8=0;STACKTOP=r1;return r8}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r8=0;STACKTOP=r1;return r8}r4=_PyString_FromStringAndSize(0,(HEAP32[r6]+3|0)/4&-1);if((r4|0)==0){r8=0;STACKTOP=r1;return r8}r3=_PyString_AsString(r4);do{if((HEAP32[r6]|0)>0){r5=0;r2=r3;r9=0;r10=1;r11=0;while(1){r12=HEAPU8[HEAP32[r7>>2]+r9|0]+r11|0;r13=r12&384;r14=(r13>>>(r10>>>0)|r5&255)&255;r15=r10+2|0;if((r15|0)==9){HEAP8[r2]=r14;r16=1;r17=r2+1|0;r18=0}else{r16=r15;r17=r2;r18=r14}r14=r9+1|0;if((r14|0)<(HEAP32[r6]|0)){r5=r18;r2=r17;r9=r14;r10=r16;r11=r12-r13|0}else{break}}if((r16|0)==0){r8=r4}else{r19=r17;r20=r18;break}STACKTOP=r1;return r8}else{r19=r3;r20=0}}while(0);HEAP8[r19]=r20;r8=r4;STACKTOP=r1;return r8}function _imageop_mono2grey(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12;r1=STACKTOP;STACKTOP=STACKTOP+24|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12;r7=r1+16;r8=r1+20,r9=r8>>2;if((_PyArg_ParseTuple(r2,__str29|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+24|0,HEAP32[tempInt>>2]=r8,HEAP32[tempInt+4>>2]=r7,HEAP32[tempInt+8>>2]=r5,HEAP32[tempInt+12>>2]=r6,HEAP32[tempInt+16>>2]=r3,HEAP32[tempInt+20>>2]=r4,tempInt))|0)==0){r10=0;STACKTOP=r1;return r10}r8=HEAP32[r5>>2];r5=HEAP32[r6>>2];r6=Math.imul(r5,r8);if((_check_multiply(r6,r8,r5)|0)==0){r10=0;STACKTOP=r1;return r10}if(((r6+7|0)/8&-1|0)!=(HEAP32[r7>>2]|0)){_PyErr_SetString(HEAP32[_ImageopError>>2],__str22|0);r10=0;STACKTOP=r1;return r10}r7=_PyString_FromStringAndSize(0,r6);if((r7|0)==0){r10=0;STACKTOP=r1;return r10}r2=_PyString_AsString(r7);if((r6|0)<=0){r10=r7;STACKTOP=r1;return r10}r6=Math.imul(r5,r8);r8=r2;r2=0;r5=128;while(1){HEAP8[r8]=((HEAPU8[HEAP32[r9]]&r5|0)==0?HEAP32[r3>>2]:HEAP32[r4>>2])&255;r11=r5>>1;if((r11|0)==0){HEAP32[r9]=HEAP32[r9]+1|0;r12=128}else{r12=r11}r11=r2+1|0;if((r11|0)==(r6|0)){r10=r7;break}else{r8=r8+1|0;r2=r11;r5=r12}}STACKTOP=r1;return r10}function _imageop_grey22grey(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r7=0;STACKTOP=r1;return r7}r2=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r3,r2);if((_check_multiply(r4,r2,r3)|0)==0){r7=0;STACKTOP=r1;return r7}if(((r4+3|0)/4&-1|0)!=(HEAP32[r5>>2]|0)){_PyErr_SetString(HEAP32[_ImageopError>>2],__str22|0);r7=0;STACKTOP=r1;return r7}r5=_PyString_FromStringAndSize(0,r4);if((r5|0)==0){r7=0;STACKTOP=r1;return r7}r8=_PyString_AsString(r5);if((r4|0)<=0){r7=r5;STACKTOP=r1;return r7}r4=Math.imul(r3,r2);r2=r8;r8=0;r3=0;r9=0;while(1){if((r3|0)==0){r10=HEAP32[r6>>2];HEAP32[r6>>2]=r10+1|0;r11=HEAPU8[r10];r12=8}else{r11=r9;r12=r3}r10=r12-2|0;r13=r11>>r10&3;HEAP8[r2]=(r13<<2|r13|r13<<4|r13<<6)&255;r13=r8+1|0;if((r13|0)==(r4|0)){r7=r5;break}else{r2=r2+1|0;r8=r13;r3=r10;r9=r11}}STACKTOP=r1;return r7}function _imageop_grey42grey(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12;if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r7=0;STACKTOP=r1;return r7}r2=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r3,r2);if((_check_multiply(r4,r2,r3)|0)==0){r7=0;STACKTOP=r1;return r7}if(((r4+1|0)/2&-1|0)!=(HEAP32[r5>>2]|0)){_PyErr_SetString(HEAP32[_ImageopError>>2],__str22|0);r7=0;STACKTOP=r1;return r7}r5=_PyString_FromStringAndSize(0,r4);if((r5|0)==0){r7=0;STACKTOP=r1;return r7}r8=_PyString_AsString(r5);if((r4|0)<=0){r7=r5;STACKTOP=r1;return r7}r4=Math.imul(r3,r2);r2=r8;r8=0;r3=0;r9=0;while(1){if((r3|0)==0){r10=HEAP32[r6>>2];HEAP32[r6>>2]=r10+1|0;r11=HEAPU8[r10];r12=8}else{r11=r9;r12=r3}r10=r12-4|0;r13=r11>>r10&15;HEAP8[r2]=(r13<<4|r13)&255;r13=r8+1|0;if((r13|0)==(r4|0)){r7=r5;break}else{r2=r2+1|0;r8=r13;r3=r10;r9=r11}}STACKTOP=r1;return r7}function _imageop_tovideo(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;r1=STACKTOP;STACKTOP=STACKTOP+20|0;r3=r1,r4=r3>>2;r5=r1+4,r6=r5>>2;r7=r1+8;r8=r1+12,r9=r8>>2;r10=r1+16;if((_PyArg_ParseTuple(r2,__str25|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+20|0,HEAP32[tempInt>>2]=r8,HEAP32[tempInt+4>>2]=r7,HEAP32[tempInt+8>>2]=r10,HEAP32[tempInt+12>>2]=r3,HEAP32[tempInt+16>>2]=r5,tempInt))|0)==0){r11=0;STACKTOP=r1;return r11}r5=HEAP32[r10>>2];if(!((r5|0)==4|(r5|0)==1)){_PyErr_SetString(HEAP32[_ImageopError>>2],__str26|0);r11=0;STACKTOP=r1;return r11}if((_check_multiply_size(HEAP32[r7>>2],HEAP32[r4],__str27|0,HEAP32[r6],__str28|0,r5)|0)==0){r11=0;STACKTOP=r1;return r11}r5=_PyString_FromStringAndSize(0,HEAP32[r7>>2]);if((r5|0)==0){r11=0;STACKTOP=r1;return r11}r7=_PyString_AsString(r5);r3=HEAP32[r9];r8=HEAP32[r4];if((HEAP32[r10>>2]|0)==1){_memcpy(r7,r3,r8);if((HEAP32[r6]|0)<=1){r11=r5;STACKTOP=r1;return r11}r10=HEAP32[r4];r2=1;r12=r7+r10|0;r13=r10;while(1){L294:do{if((r13|0)>0){r10=0;r14=r12;r15=r13;while(1){r16=Math.imul(r15,r2)+r10|0;r17=HEAP32[r9];r18=r14+1|0;HEAP8[r14]=(HEAPU8[r17+(r16-r15)|0]+HEAPU8[r17+r16|0]|0)>>>1&255;r16=r10+1|0;r17=HEAP32[r4];if((r16|0)<(r17|0)){r10=r16;r14=r18;r15=r17}else{r19=r18;break L294}}}else{r19=r12}}while(0);r15=r2+1|0;if((r15|0)>=(HEAP32[r6]|0)){r11=r5;break}r2=r15;r12=r19;r13=HEAP32[r4]}STACKTOP=r1;return r11}else{_memcpy(r7,r3,r8<<2);if((HEAP32[r6]|0)<=1){r11=r5;STACKTOP=r1;return r11}r8=HEAP32[r4];r3=1;r13=(r8<<2)+r7|0;r7=r8;while(1){L306:do{if((r7|0)>0){r8=0;r19=r13;r12=r7;while(1){r2=Math.imul(r12,r3)+r8<<2;r15=r2|1;HEAP8[r19]=0;r14=HEAP32[r9];HEAP8[r19+1|0]=(HEAPU8[r14+(r15-(HEAP32[r4]<<2))|0]+HEAPU8[r14+r15|0]|0)>>>1&255;r14=r15+1|0;r15=HEAP32[r9];HEAP8[r19+2|0]=(HEAPU8[r15+(r14-(HEAP32[r4]<<2))|0]+HEAPU8[r15+r14|0]|0)>>>1&255;r14=r2|3;r2=HEAP32[r9];r15=r19+4|0;HEAP8[r19+3|0]=(HEAPU8[r2+(r14-(HEAP32[r4]<<2))|0]+HEAPU8[r2+r14|0]|0)>>>1&255;r14=r8+1|0;r2=HEAP32[r4];if((r14|0)<(r2|0)){r8=r14;r19=r15;r12=r2}else{r20=r15;break L306}}}else{r20=r13}}while(0);r12=r3+1|0;if((r12|0)>=(HEAP32[r6]|0)){r11=r5;break}r3=r12;r13=r20;r7=HEAP32[r4]}STACKTOP=r1;return r11}}function _imageop_rgb2rgb8(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12,r7=r6>>2;r8=_imageop_backward_compatible();if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r9=0;STACKTOP=r1;return r9}if((_check_multiply_size(HEAP32[r5>>2],HEAP32[r3>>2],__str20|0,HEAP32[r4>>2],__str21|0,4)|0)==0){r9=0;STACKTOP=r1;return r9}r5=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r3,r5);if((_check_multiply(r4,r5,r3)|0)==0){r9=0;STACKTOP=r1;return r9}r6=_PyString_FromStringAndSize(0,r4);if((r6|0)==0){r9=0;STACKTOP=r1;return r9}r2=_PyString_AsString(r6);if((r4|0)<=0){r9=r6;STACKTOP=r1;return r9}r4=(r8|0)==0;r8=Math.imul(r3,r5);r5=0;r3=r2;while(1){r2=HEAP32[r7];if(r4){r10=r2+2|0;HEAP32[r7]=r10;r11=HEAPU8[r2+1|0]|0;r12=r2+3|0;HEAP32[r7]=r12;r13=HEAPU8[r10]|0;HEAP32[r7]=r2+4|0;r14=r11;r15=r13;r16=HEAPU8[r12]|0}else{r12=HEAP32[r2>>2];HEAP32[r7]=r2+4|0;r14=(r12>>>16&255)>>>0;r15=(r12>>>8&255)>>>0;r16=(r12&255)>>>0}HEAP8[r3]=(r15/255*7+.5&-1|(r14/255*3+.5&-1)<<3|(r16/255*7+.5&-1)<<5)&255;r12=r5+1|0;if((r12|0)==(r8|0)){r9=r6;break}else{r5=r12;r3=r3+1|0}}STACKTOP=r1;return r9}function _imageop_rgb82rgb(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;r8=_imageop_backward_compatible();if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r9=0;STACKTOP=r1;return r9}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r9=0;STACKTOP=r1;return r9}r5=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r5<<2,r3);if((_check_multiply_size(r4,r5,__str20|0,r3,__str21|0,4)|0)==0){r9=0;STACKTOP=r1;return r9}r3=_PyString_FromStringAndSize(0,r4);if((r3|0)==0){r9=0;STACKTOP=r1;return r9}r4=_PyString_AsString(r3);if((HEAP32[r6]|0)<=0){r9=r3;STACKTOP=r1;return r9}r5=(r8|0)==0;r8=0;r2=r4;while(1){r4=HEAP32[r7>>2];HEAP32[r7>>2]=r4+1|0;r10=HEAPU8[r4];r4=r10>>>5;r11=r10&7;r12=r10>>>3&3;r13=r4<<3|r10>>>6|r4<<5;r4=r11<<5|r11<<3|r11>>>1;r11=r12<<4|r12|r12<<6|r12<<2;if(r5){HEAP8[r2]=0;HEAP8[r2+1|0]=r11&255;HEAP8[r2+2|0]=r4&255;HEAP8[r2+3|0]=r13&255}else{HEAP32[r2>>2]=r4<<8|r13|r11<<16}r11=r8+1|0;if((r11|0)<(HEAP32[r6]|0)){r8=r11;r2=r2+4|0}else{r9=r3;break}}STACKTOP=r1;return r9}function _imageop_rgb2grey(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8;r6=r1+12,r7=r6>>2;r8=_imageop_backward_compatible();if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r6,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r9=0;STACKTOP=r1;return r9}if((_check_multiply_size(HEAP32[r5>>2],HEAP32[r3>>2],__str20|0,HEAP32[r4>>2],__str21|0,4)|0)==0){r9=0;STACKTOP=r1;return r9}r5=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r3,r5);if((_check_multiply(r4,r5,r3)|0)==0){r9=0;STACKTOP=r1;return r9}r6=_PyString_FromStringAndSize(0,r4);if((r6|0)==0){r9=0;STACKTOP=r1;return r9}r2=_PyString_AsString(r6);if((r4|0)<=0){r9=r6;STACKTOP=r1;return r9}r4=(r8|0)==0;r8=Math.imul(r3,r5);r5=0;r3=r2;while(1){r2=HEAP32[r7];if(r4){r10=r2+2|0;HEAP32[r7]=r10;r11=HEAPU8[r2+1|0];r12=r2+3|0;HEAP32[r7]=r12;r13=HEAPU8[r10];HEAP32[r7]=r2+4|0;r14=r11;r15=r13;r16=HEAPU8[r12]}else{r12=HEAP32[r2>>2];HEAP32[r7]=r2+4|0;r14=((r12>>>16&255)>>>0)/255*3+.5&-1;r15=((r12>>>8&255)>>>0)/255*7+.5&-1;r16=((r12&255)>>>0)/255*7+.5&-1}r12=r16*.3+r15*.59+r14*.11&-1;HEAP8[r3]=(r12|0)>255?-1:r12&255;r12=r5+1|0;if((r12|0)==(r8|0)){r9=r6;break}else{r5=r12;r3=r3+1|0}}STACKTOP=r1;return r9}function _imageop_grey2rgb(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10;r1=STACKTOP;STACKTOP=STACKTOP+16|0;r3=r1;r4=r1+4;r5=r1+8,r6=r5>>2;r7=r1+12;r8=_imageop_backward_compatible();if((_PyArg_ParseTuple(r2,__str19|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r7,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r3,HEAP32[tempInt+12>>2]=r4,tempInt))|0)==0){r9=0;STACKTOP=r1;return r9}if((_check_multiply(HEAP32[r6],HEAP32[r3>>2],HEAP32[r4>>2])|0)==0){r9=0;STACKTOP=r1;return r9}r5=HEAP32[r3>>2];r3=HEAP32[r4>>2];r4=Math.imul(r5<<2,r3);if((_check_multiply_size(r4,r5,__str20|0,r3,__str21|0,4)|0)==0){r9=0;STACKTOP=r1;return r9}r3=_PyString_FromStringAndSize(0,r4);if((r3|0)==0){r9=0;STACKTOP=r1;return r9}r4=_PyString_AsString(r3);if((HEAP32[r6]|0)<=0){r9=r3;STACKTOP=r1;return r9}r5=(r8|0)==0;r8=0;r2=r4;while(1){r4=HEAP32[r7>>2];HEAP32[r7>>2]=r4+1|0;r10=HEAP8[r4];if(r5){HEAP8[r2]=0;HEAP8[r2+1|0]=r10;HEAP8[r2+2|0]=r10;HEAP8[r2+3|0]=r10}else{r4=r10&255;HEAP32[r2>>2]=r4<<8|r4|r4<<16}r4=r8+1|0;if((r4|0)<(HEAP32[r6]|0)){r8=r4;r2=r2+4|0}else{r9=r3;break}}STACKTOP=r1;return r9}function _imageop_backward_compatible(){var r1,r2,r3,r4;if((HEAP32[_ImageopDict>>2]|0)==0){r1=1;return r1}do{if((HEAP32[_imageop_backward_compatible_bcos>>2]|0)==0){r2=_PyString_FromString(__str24|0);HEAP32[_imageop_backward_compatible_bcos>>2]=r2;if((r2|0)==0){r1=1}else{break}return r1}}while(0);r2=_PyDict_GetItem(HEAP32[_ImageopDict>>2],HEAP32[_imageop_backward_compatible_bcos>>2]);if((r2|0)==0){r1=1;return r1}if((HEAP32[HEAP32[r2+4>>2]+84>>2]&8388608|0)==0){r1=1;return r1}r3=_PyInt_AsLong(r2);if((_PyErr_Occurred()|0)==0){r4=r3}else{_PyErr_Clear();r4=1}r1=(r4|0)!=0&1;return r1}function _check_multiply(r1,r2,r3){return _check_multiply_size(r1,r2,__str20|0,r3,__str21|0,1)}function _check_multiply_size(r1,r2,r3,r4,r5,r6){var r7;if((_check_coordonnate(r2,r3)|0)==0){r7=0;return r7}if((_check_coordonnate(r4,r5)|0)==0){r7=0;return r7}if((((r1|0)/(r4|0)&-1|0)/(r2|0)&-1|0)==(r6|0)){r7=1;return r7}_PyErr_SetString(HEAP32[_ImageopError>>2],__str22|0);r7=0;return r7}function _check_coordonnate(r1,r2){var r3,r4;r3=STACKTOP;if((r1|0)>0){r4=1;STACKTOP=r3;return r4}_PyErr_Format(HEAP32[_PyExc_ValueError>>2],__str23|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r2,tempInt));r4=0;STACKTOP=r3;return r4}
// EMSCRIPTEN_END_FUNCS
Module["_initimageop"] = _initimageop;
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
