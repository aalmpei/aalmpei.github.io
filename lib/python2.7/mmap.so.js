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
var _new_mmap_object_keywords;
var _mmap_object_type;
var _mmap_object_methods;
var _mmap_module_error;
var _mmap_doc;
var _mmap_as_sequence;
var _mmap_as_mapping;
var _mmap_as_buffer;
var __str9;
var __str81;
var __str80;
var __str8;
var __str79;
var __str78;
var __str77;
var __str76;
var __str75;
var __str74;
var __str73;
var __str72;
var __str71;
var __str70;
var __str7;
var __str69;
var __str68;
var __str67;
var __str66;
var __str65;
var __str64;
var __str63;
var __str62;
var __str61;
var __str60;
var __str6;
var __str59;
var __str58;
var __str57;
var __str56;
var __str55;
var __str54;
var __str53;
var __str52;
var __str51;
var __str50;
var __str5;
var __str49;
var __str48;
var __str47;
var __str46;
var __str45;
var __str44;
var __str43;
var __str42;
var __str41;
var __str40;
var __str4;
var __str39;
var __str38;
var __str37;
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
var ___func___mmap_read_method;
_new_mmap_object_keywords=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_object_type=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_object_methods=allocate([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_module_error=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_doc=allocate([87,105,110,100,111,119,115,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,116,97,103,110,97,109,101,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,104,97,110,100,108,101,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,108,97,114,103,101,114,32,116,104,97,110,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,10,111,102,32,116,104,101,32,102,105,108,101,44,32,116,104,101,32,102,105,108,101,32,105,115,32,101,120,116,101,110,100,101,100,32,116,111,32,99,111,110,116,97,105,110,32,108,101,110,103,116,104,32,98,121,116,101,115,46,32,32,73,102,32,108,101,110,103,116,104,10,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,32,105,115,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,44,10,101,120,99,101,112,116,32,116,104,97,116,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,101,109,112,116,121,32,87,105,110,100,111,119,115,32,114,97,105,115,101,115,32,97,110,32,101,120,99,101,112,116,105,111,110,32,40,121,111,117,32,99,97,110,110,111,116,10,99,114,101,97,116,101,32,97,110,32,101,109,112,116,121,32,109,97,112,112,105,110,103,32,111,110,32,87,105,110,100,111,119,115,41,46,10,10,85,110,105,120,58,32,109,109,97,112,40,102,105,108,101,110,111,44,32,108,101,110,103,116,104,91,44,32,102,108,97,103,115,91,44,32,112,114,111,116,91,44,32,97,99,99,101,115,115,91,44,32,111,102,102,115,101,116,93,93,93,93,41,10,10,77,97,112,115,32,108,101,110,103,116,104,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,116,104,101,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,105,108,101,110,111,44,10,97,110,100,32,114,101,116,117,114,110,115,32,97,32,109,109,97,112,32,111,98,106,101,99,116,46,32,32,73,102,32,108,101,110,103,116,104,32,105,115,32,48,44,32,116,104,101,32,109,97,120,105,109,117,109,32,108,101,110,103,116,104,32,111,102,32,116,104,101,32,109,97,112,10,119,105,108,108,32,98,101,32,116,104,101,32,99,117,114,114,101,110,116,32,115,105,122,101,32,111,102,32,116,104,101,32,102,105,108,101,32,119,104,101,110,32,109,109,97,112,32,105,115,32,99,97,108,108,101,100,46,10,102,108,97,103,115,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,110,97,116,117,114,101,32,111,102,32,116,104,101,32,109,97,112,112,105,110,103,46,32,77,65,80,95,80,82,73,86,65,84,69,32,99,114,101,97,116,101,115,32,97,10,112,114,105,118,97,116,101,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,97,112,112,105,110,103,44,32,115,111,32,99,104,97,110,103,101,115,32,116,111,32,116,104,101,32,99,111,110,116,101,110,116,115,32,111,102,32,116,104,101,32,109,109,97,112,10,111,98,106,101,99,116,32,119,105,108,108,32,98,101,32,112,114,105,118,97,116,101,32,116,111,32,116,104,105,115,32,112,114,111,99,101,115,115,44,32,97,110,100,32,77,65,80,95,83,72,65,82,69,68,32,99,114,101,97,116,101,115,32,97,32,109,97,112,112,105,110,103,10,116,104,97,116,39,115,32,115,104,97,114,101,100,32,119,105,116,104,32,97,108,108,32,111,116,104,101,114,32,112,114,111,99,101,115,115,101,115,32,109,97,112,112,105,110,103,32,116,104,101,32,115,97,109,101,32,97,114,101,97,115,32,111,102,32,116,104,101,32,102,105,108,101,46,10,84,104,101,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,105,115,32,77,65,80,95,83,72,65,82,69,68,46,10,10,84,111,32,109,97,112,32,97,110,111,110,121,109,111,117,115,32,109,101,109,111,114,121,44,32,112,97,115,115,32,45,49,32,97,115,32,116,104,101,32,102,105,108,101,110,111,32,40,98,111,116,104,32,118,101,114,115,105,111,110,115,41,46,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_sequence=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_mapping=allocate([0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
_mmap_as_buffer=allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NORMAL);
__str9=allocate([77,65,80,95,65,78,79,78,89,77,79,85,83,0,0,0], "i8", ALLOC_NORMAL);
__str81=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,99,111,110,99,97,116,101,110,97,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str80=allocate([109,109,97,112,115,32,100,111,110,39,116,32,115,117,112,112,111,114,116,32,114,101,112,101,97,116,32,111,112,101,114,97,116,105,111,110,0,0,0,0], "i8", ALLOC_NORMAL);
__str8=allocate([77,65,80,95,65,78,79,78,0,0,0,0], "i8", ALLOC_NORMAL);
__str79=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0,0,0], "i8", ALLOC_NORMAL);
__str78=allocate([0,0,0,0], "i8", ALLOC_NORMAL);
__str77=allocate([109,109,97,112,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0,0,0,0], "i8", ALLOC_NORMAL);
__str76=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,105,115,32,119,114,111,110,103,32,115,105,122,101,0], "i8", ALLOC_NORMAL);
__str75=allocate([109,109,97,112,32,115,108,105,99,101,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0,0], "i8", ALLOC_NORMAL);
__str74=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,115,108,105,99,101,32,100,101,108,101,116,105,111,110,0,0], "i8", ALLOC_NORMAL);
__str73=allocate([109,109,97,112,32,97,115,115,105,103,110,109,101,110,116,32,109,117,115,116,32,98,101,32,115,105,110,103,108,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,0], "i8", ALLOC_NORMAL);
__str72=allocate([109,109,97,112,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,115,117,112,112,111,114,116,32,105,116,101,109,32,100,101,108,101,116,105,111,110,0,0,0], "i8", ALLOC_NORMAL);
__str71=allocate([109,109,97,112,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0], "i8", ALLOC_NORMAL);
__str70=allocate([65,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,109,109,97,112,32,115,101,103,109,101,110,116,0], "i8", ALLOC_NORMAL);
__str7=allocate([77,65,80,95,80,82,73,86,65,84,69,0], "i8", ALLOC_NORMAL);
__str69=allocate([97,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,98,117,102,102,101,114,32,115,101,103,109,101,110,116,0,0,0], "i8", ALLOC_NORMAL);
__str68=allocate([115,35,124,110,110,58,102,105,110,100,0,0], "i8", ALLOC_NORMAL);
__str67=allocate([115,35,124,110,110,58,114,102,105,110,100,0], "i8", ALLOC_NORMAL);
__str66=allocate([102,108,117,115,104,32,118,97,108,117,101,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str65=allocate([124,110,110,58,102,108,117,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str64=allocate([115,111,117,114,99,101,44,32,100,101,115,116,105,110,97,116,105,111,110,44,32,111,114,32,99,111,117,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0], "i8", ALLOC_NORMAL);
__str63=allocate([107,107,107,58,109,111,118,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str62=allocate([115,35,0,0], "i8", ALLOC_NORMAL);
__str61=allocate([115,101,108,102,45,62,115,105,122,101,32,62,61,32,115,101,108,102,45,62,112,111,115,0], "i8", ALLOC_NORMAL);
__str60=allocate([46,46,47,77,111,100,117,108,101,115,47,109,109,97,112,109,111,100,117,108,101,46,99,0], "i8", ALLOC_NORMAL);
__str6=allocate([77,65,80,95,83,72,65,82,69,68,0,0], "i8", ALLOC_NORMAL);
__str59=allocate([110,58,114,101,97,100,0,0], "i8", ALLOC_NORMAL);
__str58=allocate([114,101,97,100,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0], "i8", ALLOC_NORMAL);
__str57=allocate([99,0,0,0], "i8", ALLOC_NORMAL);
__str56=allocate([109,109,97,112,32,99,97,110,39,116,32,114,101,115,105,122,101,32,97,32,114,101,97,100,111,110,108,121,32,111,114,32,99,111,112,121,45,111,110,45,119,114,105,116,101,32,109,101,109,111,114,121,32,109,97,112,46,0,0,0], "i8", ALLOC_NORMAL);
__str55=allocate([109,109,97,112,58,32,114,101,115,105,122,105,110,103,32,110,111,116,32,97,118,97,105,108,97,98,108,101,45,45,110,111,32,109,114,101,109,97,112,40,41,0,0,0], "i8", ALLOC_NORMAL);
__str54=allocate([110,58,114,101,115,105,122,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str53=allocate([115,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str52=allocate([117,110,107,110,111,119,110,32,115,101,101,107,32,116,121,112,101,0,0,0], "i8", ALLOC_NORMAL);
__str51=allocate([110,124,105,58,115,101,101,107,0,0,0,0], "i8", ALLOC_NORMAL);
__str50=allocate([100,97,116,97,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0], "i8", ALLOC_NORMAL);
__str5=allocate([80,82,79,84,95,87,82,73,84,69,0,0], "i8", ALLOC_NORMAL);
__str49=allocate([115,35,58,119,114,105,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str48=allocate([109,109,97,112,32,99,97,110,39,116,32,109,111,100,105,102,121,32,97,32,114,101,97,100,111,110,108,121,32,109,101,109,111,114,121,32,109,97,112,46,0,0,0,0], "i8", ALLOC_NORMAL);
__str47=allocate([119,114,105,116,101,32,98,121,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0], "i8", ALLOC_NORMAL);
__str46=allocate([99,58,119,114,105,116,101,95,98,121,116,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str45=allocate([109,109,97,112,32,99,108,111,115,101,100,32,111,114,32,105,110,118,97,108,105,100,0,0], "i8", ALLOC_NORMAL);
__str44=allocate([119,114,105,116,101,95,98,121,116,101,0,0], "i8", ALLOC_NORMAL);
__str43=allocate([119,114,105,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str42=allocate([116,101,108,108,0,0,0,0], "i8", ALLOC_NORMAL);
__str41=allocate([115,101,101,107,0,0,0,0], "i8", ALLOC_NORMAL);
__str40=allocate([114,101,115,105,122,101,0,0], "i8", ALLOC_NORMAL);
__str4=allocate([80,82,79,84,95,82,69,65,68,0,0,0], "i8", ALLOC_NORMAL);
__str39=allocate([114,101,97,100,108,105,110,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str38=allocate([114,101,97,100,95,98,121,116,101,0,0,0], "i8", ALLOC_NORMAL);
__str37=allocate([114,101,97,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str36=allocate([109,111,118,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str35=allocate([102,108,117,115,104,0,0,0], "i8", ALLOC_NORMAL);
__str34=allocate([114,102,105,110,100,0,0,0], "i8", ALLOC_NORMAL);
__str33=allocate([102,105,110,100,0,0,0,0], "i8", ALLOC_NORMAL);
__str32=allocate([99,108,111,115,101,0,0,0], "i8", ALLOC_NORMAL);
__str31=allocate([109,97,112,32,115,105,122,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,0,0], "i8", ALLOC_NORMAL);
__str30=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,37,115,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0,0,0], "i8", ALLOC_NORMAL);
__str3=allocate([80,82,79,84,95,69,88,69,67,0,0,0], "i8", ALLOC_NORMAL);
__str29=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0,0,0], "i8", ALLOC_NORMAL);
__str28=allocate([109,109,97,112,32,108,101,110,103,116,104,32,105,115,32,116,111,111,32,108,97,114,103,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str27=allocate([109,109,97,112,32,111,102,102,115,101,116,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,102,105,108,101,32,115,105,122,101,0,0,0], "i8", ALLOC_NORMAL);
__str26=allocate([109,109,97,112,32,105,110,118,97,108,105,100,32,97,99,99,101,115,115,32,112,97,114,97,109,101,116,101,114,46,0,0], "i8", ALLOC_NORMAL);
__str25=allocate([109,109,97,112,32,99,97,110,39,116,32,115,112,101,99,105,102,121,32,98,111,116,104,32,97,99,99,101,115,115,32,97,110,100,32,102,108,97,103,115,44,32,112,114,111,116,46,0], "i8", ALLOC_NORMAL);
__str24=allocate([109,101,109,111,114,121,32,109,97,112,112,101,100,32,111,102,102,115,101,116,32,109,117,115,116,32,98,101,32,112,111,115,105,116,105,118,101,0,0,0], "i8", ALLOC_NORMAL);
__str23=allocate([115,105,122,101,0,0,0,0], "i8", ALLOC_NORMAL);
__str22=allocate([105,79,124,105,105,105,108,0], "i8", ALLOC_NORMAL);
__str21=allocate([111,102,102,115,101,116,0,0], "i8", ALLOC_NORMAL);
__str20=allocate([97,99,99,101,115,115,0,0], "i8", ALLOC_NORMAL);
__str2=allocate([101,114,114,111,114,0,0,0], "i8", ALLOC_NORMAL);
__str19=allocate([112,114,111,116,0,0,0,0], "i8", ALLOC_NORMAL);
__str18=allocate([102,108,97,103,115,0,0,0], "i8", ALLOC_NORMAL);
__str17=allocate([108,101,110,103,116,104,0,0], "i8", ALLOC_NORMAL);
__str16=allocate([102,105,108,101,110,111,0,0], "i8", ALLOC_NORMAL);
__str15=allocate([109,109,97,112,46,109,109,97,112,0,0,0], "i8", ALLOC_NORMAL);
__str14=allocate([65,67,67,69,83,83,95,67,79,80,89,0], "i8", ALLOC_NORMAL);
__str13=allocate([65,67,67,69,83,83,95,87,82,73,84,69,0,0,0,0], "i8", ALLOC_NORMAL);
__str12=allocate([65,67,67,69,83,83,95,82,69,65,68,0], "i8", ALLOC_NORMAL);
__str11=allocate([65,76,76,79,67,65,84,73,79,78,71,82,65,78,85,76,65,82,73,84,89,0,0,0], "i8", ALLOC_NORMAL);
__str10=allocate([80,65,71,69,83,73,90,69,0,0,0,0], "i8", ALLOC_NORMAL);
__str1=allocate([109,109,97,112,46,101,114,114,111,114,0,0], "i8", ALLOC_NORMAL);
__str=allocate([109,109,97,112,0,0,0,0], "i8", ALLOC_NORMAL);
___func___mmap_read_method=allocate([109,109,97,112,95,114,101,97,100,95,109,101,116,104,111,100,0,0,0,0], "i8", ALLOC_NORMAL);
/* no memory initializer */
function runPostSets() {
HEAP32[((_new_mmap_object_keywords)>>2)]=((__str16)|0);
HEAP32[(((_new_mmap_object_keywords)+(4))>>2)]=((__str17)|0);
HEAP32[(((_new_mmap_object_keywords)+(8))>>2)]=((__str18)|0);
HEAP32[(((_new_mmap_object_keywords)+(12))>>2)]=((__str19)|0);
HEAP32[(((_new_mmap_object_keywords)+(16))>>2)]=((__str20)|0);
HEAP32[(((_new_mmap_object_keywords)+(20))>>2)]=((__str21)|0);
HEAP32[(((_mmap_object_type)+(12))>>2)]=((__str15)|0);
HEAP32[(((_mmap_object_type)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 58));
HEAP32[(((_mmap_object_type)+(52))>>2)]=_mmap_as_sequence;
HEAP32[(((_mmap_object_type)+(56))>>2)]=_mmap_as_mapping;
HEAP32[(((_mmap_object_type)+(72))>>2)]=(FUNCTION_TABLE_OFFSET + 36);
HEAP32[(((_mmap_object_type)+(80))>>2)]=_mmap_as_buffer;
HEAP32[(((_mmap_object_type)+(88))>>2)]=((_mmap_doc)|0);
HEAP32[(((_mmap_object_type)+(116))>>2)]=((_mmap_object_methods)|0);
HEAP32[(((_mmap_object_type)+(152))>>2)]=(FUNCTION_TABLE_OFFSET + 44);
HEAP32[(((_mmap_object_type)+(156))>>2)]=(FUNCTION_TABLE_OFFSET + 24);
HEAP32[(((_mmap_object_type)+(160))>>2)]=(FUNCTION_TABLE_OFFSET + 38);
HEAP32[((_mmap_object_methods)>>2)]=((__str32)|0);
HEAP32[(((_mmap_object_methods)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 28));
HEAP32[(((_mmap_object_methods)+(16))>>2)]=((__str33)|0);
HEAP32[(((_mmap_object_methods)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 42));
HEAP32[(((_mmap_object_methods)+(32))>>2)]=((__str34)|0);
HEAP32[(((_mmap_object_methods)+(36))>>2)]=((FUNCTION_TABLE_OFFSET + 32));
HEAP32[(((_mmap_object_methods)+(48))>>2)]=((__str35)|0);
HEAP32[(((_mmap_object_methods)+(52))>>2)]=((FUNCTION_TABLE_OFFSET + 26));
HEAP32[(((_mmap_object_methods)+(64))>>2)]=((__str36)|0);
HEAP32[(((_mmap_object_methods)+(68))>>2)]=((FUNCTION_TABLE_OFFSET + 12));
HEAP32[(((_mmap_object_methods)+(80))>>2)]=((__str37)|0);
HEAP32[(((_mmap_object_methods)+(84))>>2)]=((FUNCTION_TABLE_OFFSET + 10));
HEAP32[(((_mmap_object_methods)+(96))>>2)]=((__str38)|0);
HEAP32[(((_mmap_object_methods)+(100))>>2)]=((FUNCTION_TABLE_OFFSET + 6));
HEAP32[(((_mmap_object_methods)+(112))>>2)]=((__str39)|0);
HEAP32[(((_mmap_object_methods)+(116))>>2)]=((FUNCTION_TABLE_OFFSET + 16));
HEAP32[(((_mmap_object_methods)+(128))>>2)]=((__str40)|0);
HEAP32[(((_mmap_object_methods)+(132))>>2)]=((FUNCTION_TABLE_OFFSET + 20));
HEAP32[(((_mmap_object_methods)+(144))>>2)]=((__str41)|0);
HEAP32[(((_mmap_object_methods)+(148))>>2)]=((FUNCTION_TABLE_OFFSET + 2));
HEAP32[(((_mmap_object_methods)+(160))>>2)]=((__str23)|0);
HEAP32[(((_mmap_object_methods)+(164))>>2)]=((FUNCTION_TABLE_OFFSET + 4));
HEAP32[(((_mmap_object_methods)+(176))>>2)]=((__str42)|0);
HEAP32[(((_mmap_object_methods)+(180))>>2)]=((FUNCTION_TABLE_OFFSET + 48));
HEAP32[(((_mmap_object_methods)+(192))>>2)]=((__str43)|0);
HEAP32[(((_mmap_object_methods)+(196))>>2)]=((FUNCTION_TABLE_OFFSET + 46));
HEAP32[(((_mmap_object_methods)+(208))>>2)]=((__str44)|0);
HEAP32[(((_mmap_object_methods)+(212))>>2)]=((FUNCTION_TABLE_OFFSET + 18));
HEAP32[((_mmap_as_sequence)>>2)]=((FUNCTION_TABLE_OFFSET + 34));
HEAP32[(((_mmap_as_sequence)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 64));
HEAP32[(((_mmap_as_sequence)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 54));
HEAP32[(((_mmap_as_sequence)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 56));
HEAP32[(((_mmap_as_sequence)+(16))>>2)]=((FUNCTION_TABLE_OFFSET + 62));
HEAP32[(((_mmap_as_sequence)+(20))>>2)]=((FUNCTION_TABLE_OFFSET + 60));
HEAP32[(((_mmap_as_sequence)+(24))>>2)]=((FUNCTION_TABLE_OFFSET + 40));
HEAP32[((_mmap_as_mapping)>>2)]=((FUNCTION_TABLE_OFFSET + 34));
HEAP32[(((_mmap_as_mapping)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 8));
HEAP32[(((_mmap_as_mapping)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 30));
HEAP32[((_mmap_as_buffer)>>2)]=((FUNCTION_TABLE_OFFSET + 22));
HEAP32[(((_mmap_as_buffer)+(4))>>2)]=((FUNCTION_TABLE_OFFSET + 50));
HEAP32[(((_mmap_as_buffer)+(8))>>2)]=((FUNCTION_TABLE_OFFSET + 52));
HEAP32[(((_mmap_as_buffer)+(12))>>2)]=((FUNCTION_TABLE_OFFSET + 14));
}
if (!awaitingMemoryInitializer) runPostSets();
FUNCTION_TABLE.push.apply(FUNCTION_TABLE, [0,0,_mmap_seek_method,0,_mmap_size_method,0,_mmap_read_byte_method,0,_mmap_subscript,0,_mmap_read_method
,0,_mmap_move_method,0,_mmap_buffer_getcharbuffer,0,_mmap_read_line_method,0,_mmap_write_byte_method,0,_mmap_resize_method
,0,_mmap_buffer_getreadbuf,0,_new_mmap_object,0,_mmap_flush_method,0,_mmap_close_method,0,_mmap_ass_subscript
,0,_mmap_rfind_method,0,_mmap_length,0,_PyObject_GenericGetAttr,0,_PyObject_Free,0,_mmap_ass_slice
,0,_mmap_find_method,0,_PyType_GenericAlloc,0,_mmap_write_method,0,_mmap_tell_method,0,_mmap_buffer_getwritebuf
,0,_mmap_buffer_getsegcount,0,_mmap_repeat,0,_mmap_item,0,_mmap_object_dealloc,0,_mmap_ass_item,0,_mmap_slice,0,_mmap_concat,0]);
// EMSCRIPTEN_START_FUNCS
function _initmmap(){var r1,r2;if((_PyType_Ready(_mmap_object_type)|0)<0){return}r1=_Py_InitModule4_64(__str|0,0,0,0,1013);if((r1|0)==0){return}r2=_PyModule_GetDict(r1);if((r2|0)==0){return}r1=_PyErr_NewException(__str1|0,HEAP32[_PyExc_EnvironmentError>>2],0);HEAP32[_mmap_module_error>>2]=r1;if((r1|0)==0){return}_PyDict_SetItemString(r2,__str2|0,r1);_PyDict_SetItemString(r2,__str|0,_mmap_object_type);_setint(r2,__str3|0,4);_setint(r2,__str4|0,1);_setint(r2,__str5|0,2);_setint(r2,__str6|0,1);_setint(r2,__str7|0,2);_setint(r2,__str8|0,4096);_setint(r2,__str9|0,4096);r1=_my_getpagesize();_setint(r2,__str10|0,r1);r1=_my_getpagesize();_setint(r2,__str11|0,r1);_setint(r2,__str12|0,1);_setint(r2,__str13|0,2);_setint(r2,__str14|0,3);return}function _setint(r1,r2,r3){var r4;r4=_PyInt_FromLong(r3);if((r4|0)==0){return}if((_PyDict_SetItemString(r1,r2,r4)|0)!=0){return}r2=r4|0;r1=HEAP32[r2>>2]-1|0;HEAP32[r2>>2]=r1;if((r1|0)!=0){return}FUNCTION_TABLE[HEAP32[HEAP32[r4+4>>2]+24>>2]](r4);return}function _my_getpagesize(){return _sysconf(8)}function _mmap_object_dealloc(r1){var r2,r3,r4,r5;r2=r1>>2;r3=HEAP32[r2+6];if((r3|0)>-1){_close(r3)}r3=r1+8|0;r4=HEAP32[r3>>2];if((r4|0)!=0){r5=HEAP32[r2+7];if(!((r5|0)==1|(r5|0)==3)){_msync(r4,HEAP32[r2+3],0)}_munmap(HEAP32[r3>>2],HEAP32[r2+3])}FUNCTION_TABLE[HEAP32[HEAP32[r2+1]+160>>2]](r1);return}function _new_mmap_object(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+96|0;r6=r5,r7=r6>>2;r8=r5+72;r9=r5+76,r10=r9>>2;r11=r5+80,r12=r11>>2;r13=r5+84,r14=r13>>2;r15=r5+88,r16=r15>>2;r17=r5+92,r18=r17>>2;HEAP32[r8>>2]=0;HEAP32[r10]=0;HEAP32[r14]=1;HEAP32[r16]=3;HEAP32[r18]=0;if((__PyArg_ParseTupleAndKeywords_SizeT(r2,r3,__str22|0,_new_mmap_object_keywords|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+24|0,HEAP32[tempInt>>2]=r11,HEAP32[tempInt+4>>2]=r8,HEAP32[tempInt+8>>2]=r13,HEAP32[tempInt+12>>2]=r15,HEAP32[tempInt+16>>2]=r17,HEAP32[tempInt+20>>2]=r9,tempInt))|0)==0){r19=0;STACKTOP=r5;return r19}r9=__GetMapSize(HEAP32[r8>>2]);if((r9|0)<0){r19=0;STACKTOP=r5;return r19}if((HEAP32[r10]|0)<0){_PyErr_SetString(HEAP32[_PyExc_OverflowError>>2],__str24|0);r19=0;STACKTOP=r5;return r19}L47:do{if((HEAP32[r18]|0)==0){r4=41}else{do{if((HEAP32[r14]|0)==1){if((HEAP32[r16]|0)!=3){break}r8=HEAP32[r18];if((r8|0)==3){HEAP32[r14]=2;HEAP32[r16]=3;break L47}else if((r8|0)==0){r4=41;break L47}else if((r8|0)==1){HEAP32[r14]=1;HEAP32[r16]=1;break L47}else if((r8|0)==2){HEAP32[r14]=1;HEAP32[r16]=3;break L47}else{r19=_PyErr_Format(HEAP32[_PyExc_ValueError>>2],__str26|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+3>>2<<2,HEAP32[tempInt>>2]=0,tempInt));STACKTOP=r5;return r19}}}while(0);r19=_PyErr_Format(HEAP32[_PyExc_ValueError>>2],__str25|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+3>>2<<2,HEAP32[tempInt>>2]=0,tempInt));STACKTOP=r5;return r19}}while(0);do{if(r4==41){r8=HEAP32[r16];if((r8&3|0)==3){break}if((r8&2|0)==0){HEAP32[r18]=1;break}else{HEAP32[r18]=2;break}}}while(0);r4=HEAP32[r12];do{if((r4|0)==-1){r20=r9}else{if((_fstat(r4,r6)|0)!=0){r20=r9;break}if((HEAP32[r7+2]&61440|0)!=32768){r20=r9;break}r8=HEAP32[r10];if((r9|0)!=0){if((r8+r9|0)>>>0<=HEAP32[r7+7]>>>0){r20=r9;break}_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str29|0);r19=0;STACKTOP=r5;return r19}r17=HEAP32[r7+7];if((r8|0)<(r17|0)){r20=r17-r8|0;break}_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str27|0);r19=0;STACKTOP=r5;return r19}}while(0);r7=FUNCTION_TABLE[HEAP32[r1+152>>2]](r1,0),r1=r7>>2;if((r7|0)==0){r19=0;STACKTOP=r5;return r19}r9=r7+8|0;r6=r9;r4=(r9|0)>>2;HEAP32[r4]=0;HEAP32[r1+3]=r20;HEAP32[r1+4]=0;HEAP32[r1+5]=HEAP32[r10];r9=HEAP32[r12];do{if((r9|0)==-1){HEAP32[r1+6]=-1;HEAP32[r14]=HEAP32[r14]|4096}else{r8=_dup(r9);HEAP32[r1+6]=r8;if((r8|0)!=-1){break}r8=r7|0;r17=HEAP32[r8>>2]-1|0;HEAP32[r8>>2]=r17;if((r17|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+1]+24>>2]](r7)}_PyErr_SetFromErrno(HEAP32[_mmap_module_error>>2]);r19=0;STACKTOP=r5;return r19}}while(0);HEAP32[r4]=_mmap(0,r20,HEAP32[r16],HEAP32[r14],HEAP32[r12],HEAP32[r10]);if((HEAP32[r6>>2]|0)!=-1){HEAP32[r1+7]=HEAP32[r18];r19=r7;STACKTOP=r5;return r19}HEAP32[r4]=0;r4=r7|0;r18=HEAP32[r4>>2]-1|0;HEAP32[r4>>2]=r18;if((r18|0)==0){FUNCTION_TABLE[HEAP32[HEAP32[r1+1]+24>>2]](r7)}_PyErr_SetFromErrno(HEAP32[_mmap_module_error>>2]);r19=0;STACKTOP=r5;return r19}function __GetMapSize(r1){var r2,r3,r4,r5,r6;r2=STACKTOP;L102:do{if((r1|0)==0){r3=0}else{r4=HEAP32[r1+4>>2];r5=HEAP32[r4+48>>2];do{if((r5|0)!=0){if((HEAP32[r4+84>>2]&131072|0)==0){break}if((HEAP32[r5+152>>2]|0)==0){break}r6=_PyNumber_AsSsize_t(r1,HEAP32[_PyExc_OverflowError>>2]);if((r6|0)==-1){if((_PyErr_Occurred()|0)!=0){r3=-1;break L102}}else{if((r6|0)>=0){r3=r6;break L102}}_PyErr_Format(HEAP32[_PyExc_OverflowError>>2],__str30|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=__str23|0,tempInt));r3=-1;break L102}}while(0);_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str31|0);r3=-1}}while(0);STACKTOP=r2;return r3}function _mmap_close_method(r1,r2){var r3;r2=r1+24|0;r3=HEAP32[r2>>2];if((r3|0)>-1){_close(r3)}HEAP32[r2>>2]=-1;r2=r1+8|0;r3=HEAP32[r2>>2];if((r3|0)!=0){_munmap(r3,HEAP32[r1+12>>2]);HEAP32[r2>>2]=0}HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;return __Py_NoneStruct}function _mmap_find_method(r1,r2){return _mmap_gfind(r1,r2,0)}function _mmap_rfind_method(r1,r2){return _mmap_gfind(r1,r2,1)}function _mmap_flush_method(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;r5=r3+4;HEAP32[r4>>2]=0;r6=r1+12|0;HEAP32[r5>>2]=HEAP32[r6>>2];r7=r1+8|0;do{if((HEAP32[r7>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r8=0}else{if((__PyArg_ParseTuple_SizeT(r2,__str65|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,tempInt))|0)==0){r8=0;break}r9=HEAP32[r4>>2];r10=HEAP32[r5>>2];if((r10+r9|0)>>>0>HEAP32[r6>>2]>>>0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str66|0);r8=0;break}r11=HEAP32[r1+28>>2];if((r11|0)==1|(r11|0)==3){r8=_PyLong_FromLong(0);break}if((_msync(HEAP32[r7>>2]+r9|0,r10,0)|0)==-1){_PyErr_SetFromErrno(HEAP32[_mmap_module_error>>2]);r8=0;break}else{r8=_PyInt_FromLong(0);break}}}while(0);STACKTOP=r3;return r8}function _mmap_move_method(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11;r3=STACKTOP;STACKTOP=STACKTOP+12|0;r4=r3;r5=r3+4;r6=r3+8;r7=r1+8|0;if((HEAP32[r7>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r8=0;STACKTOP=r3;return r8}if((__PyArg_ParseTuple_SizeT(r2,__str63|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+12|0,HEAP32[tempInt>>2]=r4,HEAP32[tempInt+4>>2]=r5,HEAP32[tempInt+8>>2]=r6,tempInt))|0)==0){r8=0;STACKTOP=r3;return r8}if((_is_writeable(r1)|0)==0){r8=0;STACKTOP=r3;return r8}r2=HEAP32[r6>>2];r6=HEAP32[r4>>2];r4=_llvm_uadd_with_overflow_i32(r2,r6);do{if(!tempRet0){r9=HEAP32[r5>>2];r10=_llvm_uadd_with_overflow_i32(r2,r9);if(tempRet0){break}r11=HEAP32[r1+12>>2];if(r9>>>0>r11>>>0|r10>>>0>r11>>>0|r6>>>0>r11>>>0|r4>>>0>r11>>>0){break}r11=HEAP32[r7>>2];_memmove(r11+r6|0,r11+r9|0,r2,1,0);HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r8=__Py_NoneStruct;STACKTOP=r3;return r8}}while(0);_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str64|0);r8=0;STACKTOP=r3;return r8}function _mmap_read_byte_method(r1,r2){var r3,r4,r5,r6;r2=STACKTOP;r3=HEAP32[r1+8>>2];if((r3|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r4=0;STACKTOP=r2;return r4}r5=r1+16|0;r6=HEAP32[r5>>2];if(r6>>>0<HEAP32[r1+12>>2]>>>0){r1=HEAP8[r3+r6|0];HEAP32[r5>>2]=r6+1|0;r4=__Py_BuildValue_SizeT(__str57|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r1<<24>>24,tempInt));STACKTOP=r2;return r4}else{_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str58|0);r4=0;STACKTOP=r2;return r4}}function _mmap_read_line_method(r1,r2){var r3,r4,r5,r6,r7;r2=HEAP32[r1+8>>2];r3=(r1+16|0)>>2;r4=HEAP32[r3];r5=r2+r4|0;r6=HEAP32[r1+12>>2];if((r2|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r1=0;return r1}else{r7=_memchr(r5,10,r6-r4|0);r4=((r7|0)==0?r2+r6|0:r7+1|0)-r5|0;r7=_PyString_FromStringAndSize(r5,r4);HEAP32[r3]=r4+HEAP32[r3]|0;r1=r7;return r1}}function _mmap_resize_method(r1,r2){var r3;r3=STACKTOP;STACKTOP=STACKTOP+4|0;do{if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0)}else{if((__PyArg_ParseTuple_SizeT(r2,__str54|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r3,tempInt))|0)==0){break}if((_is_resizeable(r1)|0)==0){break}_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str55|0)}}while(0);STACKTOP=r3;return 0}function _mmap_seek_method(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r3=r1>>2;r1=0;r4=STACKTOP;STACKTOP=STACKTOP+8|0;r5=r4,r6=r5>>2;r7=r4+4;HEAP32[r7>>2]=0;if((HEAP32[r3+2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r8=0;STACKTOP=r4;return r8}if((__PyArg_ParseTuple_SizeT(r2,__str51|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r7,tempInt))|0)==0){r8=0;STACKTOP=r4;return r8}r5=HEAP32[r7>>2];do{if((r5|0)==0){r7=HEAP32[r6];if((r7|0)<0){break}else{r9=r7;r1=153;break}}else if((r5|0)==1){r7=HEAP32[r3+4];r2=HEAP32[r6];if((r2+r7|0)<0){break}r9=r2+r7|0;r1=153;break}else if((r5|0)==2){r7=HEAP32[r3+3];r2=HEAP32[r6];if((r2+r7|0)<0){break}r9=r2+r7|0;r1=153;break}else{_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str52|0);r8=0;STACKTOP=r4;return r8}}while(0);do{if(r1==153){if(r9>>>0>HEAP32[r3+3]>>>0){break}HEAP32[r3+4]=r9;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r8=__Py_NoneStruct;STACKTOP=r4;return r8}}while(0);_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str53|0);r8=0;STACKTOP=r4;return r8}function _mmap_size_method(r1,r2){var r3,r4;r2=STACKTOP;STACKTOP=STACKTOP+72|0;r3=r2;if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r4=0;STACKTOP=r2;return r4}if((_fstat(HEAP32[r1+24>>2],r3)|0)==-1){_PyErr_SetFromErrno(HEAP32[_mmap_module_error>>2]);r4=0;STACKTOP=r2;return r4}else{r4=_PyInt_FromLong(HEAP32[r3+28>>2]);STACKTOP=r2;return r4}}function _mmap_tell_method(r1,r2){if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r2=0;return r2}else{r2=_PyInt_FromSize_t(HEAP32[r1+16>>2]);return r2}}function _mmap_write_method(r1,r2){var r3,r4,r5,r6,r7,r8,r9;r3=STACKTOP;STACKTOP=STACKTOP+8|0;r4=r3;r5=r3+4;r6=r1+8|0;if((HEAP32[r6>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r7=0;STACKTOP=r3;return r7}if((__PyArg_ParseTuple_SizeT(r2,__str49|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=r5,HEAP32[tempInt+4>>2]=r4,tempInt))|0)==0){r7=0;STACKTOP=r3;return r7}if((_is_writeable(r1)|0)==0){r7=0;STACKTOP=r3;return r7}r2=(r1+16|0)>>2;r8=HEAP32[r2];r9=HEAP32[r4>>2];if((r9+r8|0)>>>0>HEAP32[r1+12>>2]>>>0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str50|0);r7=0;STACKTOP=r3;return r7}else{_memcpy(HEAP32[r6>>2]+r8|0,HEAP32[r5>>2],r9);HEAP32[r2]=HEAP32[r4>>2]+HEAP32[r2]|0;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r7=__Py_NoneStruct;STACKTOP=r3;return r7}}function _mmap_read_method(r1,r2){var r3,r4,r5,r6,r7,r8;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3,r5=r4>>2;r6=r1+8|0;if((HEAP32[r6>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r7=0;STACKTOP=r3;return r7}if((__PyArg_ParseTuple_SizeT(r2,__str59|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt))|0)==0){r7=0;STACKTOP=r3;return r7}r4=HEAP32[r1+12>>2];r2=(r1+16|0)>>2;r1=HEAP32[r2];if(r4>>>0<r1>>>0){___assert_func(__str60|0,251,___func___mmap_read_method|0,__str61|0)}r8=r4-r1|0;r1=(r8|0)<0?2147483647:r8;r8=HEAP32[r5];if((r8|0)<0|(r8|0)>(r1|0)){HEAP32[r5]=r1}r1=HEAP32[r5];r8=__Py_BuildValue_SizeT(__str62|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+8|0,HEAP32[tempInt>>2]=HEAP32[r6>>2]+HEAP32[r2]|0,HEAP32[tempInt+4>>2]=r1,tempInt));HEAP32[r2]=HEAP32[r2]+HEAP32[r5]|0;r7=r8;STACKTOP=r3;return r7}function _mmap_write_byte_method(r1,r2){var r3,r4,r5,r6,r7;r3=STACKTOP;STACKTOP=STACKTOP+4|0;r4=r3;r5=r1+8|0;if((HEAP32[r5>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r6=0;STACKTOP=r3;return r6}if((__PyArg_ParseTuple_SizeT(r2,__str46|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+4|0,HEAP32[tempInt>>2]=r4,tempInt))|0)==0){r6=0;STACKTOP=r3;return r6}if((_is_writeable(r1)|0)==0){r6=0;STACKTOP=r3;return r6}r2=(r1+16|0)>>2;r7=HEAP32[r2];if(r7>>>0<HEAP32[r1+12>>2]>>>0){HEAP8[HEAP32[r5>>2]+r7|0]=HEAP8[r4];HEAP32[r2]=HEAP32[r2]+1|0;HEAP32[__Py_NoneStruct>>2]=HEAP32[__Py_NoneStruct>>2]+1|0;r6=__Py_NoneStruct;STACKTOP=r3;return r6}else{_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str47|0);r6=0;STACKTOP=r3;return r6}}function _is_writeable(r1){var r2,r3;r2=STACKTOP;if((HEAP32[r1+28>>2]|0)!=1){r3=1;STACKTOP=r2;return r3}_PyErr_Format(HEAP32[_PyExc_TypeError>>2],__str48|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+3>>2<<2,HEAP32[tempInt>>2]=0,tempInt));r3=0;STACKTOP=r2;return r3}function _is_resizeable(r1){var r2,r3,r4;r2=STACKTOP;r3=HEAP32[r1+28>>2];if((r3|0)==2|(r3|0)==0){r4=1;STACKTOP=r2;return r4}_PyErr_Format(HEAP32[_PyExc_TypeError>>2],__str56|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+1|0,STACKTOP=STACKTOP+3>>2<<2,HEAP32[tempInt>>2]=0,tempInt));r4=0;STACKTOP=r2;return r4}function _mmap_gfind(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+16|0;r6=r5,r7=r6>>2;r8=r5+4,r9=r8>>2;r10=r5+8;r11=r5+12;HEAP32[r7]=HEAP32[r1+16>>2];r12=(r1+12|0)>>2;HEAP32[r9]=HEAP32[r12];r13=(r1+8|0)>>2;if((HEAP32[r13]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r14=0;STACKTOP=r5;return r14}r1=(r3|0)!=0;if((__PyArg_ParseTuple_SizeT(r2,r1?__str67|0:__str68|0,(tempInt=STACKTOP,STACKTOP=STACKTOP+16|0,HEAP32[tempInt>>2]=r10,HEAP32[tempInt+4>>2]=r11,HEAP32[tempInt+8>>2]=r6,HEAP32[tempInt+12>>2]=r8,tempInt))|0)==0){r14=0;STACKTOP=r5;return r14}r8=r1?-1:1;r6=HEAP32[r7];do{if((r6|0)<0){r2=HEAP32[r12]+r6|0;HEAP32[r7]=r2;if((r2|0)>=0){r15=r2;r4=231;break}HEAP32[r7]=0;break}else{r15=r6;r4=231}}while(0);do{if(r4==231){r6=HEAP32[r12];if(r15>>>0<=r6>>>0){break}HEAP32[r7]=r6}}while(0);r15=HEAP32[r9];do{if((r15|0)<0){r6=HEAP32[r12]+r15|0;HEAP32[r9]=r6;if((r6|0)>=0){r16=r6;r4=236;break}HEAP32[r9]=0;break}else{r16=r15;r4=236}}while(0);do{if(r4==236){r15=HEAP32[r12];if(r16>>>0<=r15>>>0){break}HEAP32[r9]=r15}}while(0);r16=HEAP32[r13];r12=HEAP32[r7];r7=r16+r12|0;r15=HEAP32[r9];r9=r16+r15|0;do{if(r1){r6=r15-HEAP32[r11>>2]|0;if((r6|0)<(r12|0)){break}else{r17=r16+r6|0;r4=240;break}}else{r17=r7;r4=240}}while(0);L298:do{if(r4==240){r16=HEAP32[r11>>2];r12=HEAP32[r10>>2];r15=r17;while(1){if((r15+r16|0)>>>0>r9>>>0){break L298}else{r18=0}while(1){if((r18|0)>=(r16|0)){break}if((HEAP8[r12+r18|0]|0)==(HEAP8[r15+r18|0]|0)){r18=r18+1|0}else{break}}if((r18|0)==(r16|0)){break}r1=r15+r8|0;if(r1>>>0<r7>>>0){break L298}else{r15=r1}}r14=_PyInt_FromSsize_t(r15-HEAP32[r13]|0);STACKTOP=r5;return r14}}while(0);r14=_PyInt_FromLong(-1);STACKTOP=r5;return r14}function _mmap_buffer_getreadbuf(r1,r2,r3){var r4,r5;r4=HEAP32[r1+8>>2];if((r4|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r5=-1;return r5}if((r2|0)==0){HEAP32[r3>>2]=r4;r5=HEAP32[r1+12>>2];return r5}else{_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str70|0);r5=-1;return r5}}function _mmap_buffer_getwritebuf(r1,r2,r3){var r4,r5;r4=r1+8|0;if((HEAP32[r4>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r5=-1;return r5}if((r2|0)!=0){_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str70|0);r5=-1;return r5}if((_is_writeable(r1)|0)==0){r5=-1;return r5}HEAP32[r3>>2]=HEAP32[r4>>2];r5=HEAP32[r1+12>>2];return r5}function _mmap_buffer_getsegcount(r1,r2){var r3;if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r3=-1;return r3}if((r2|0)==0){r3=1;return r3}HEAP32[r2>>2]=HEAP32[r1+12>>2];r3=1;return r3}function _mmap_buffer_getcharbuffer(r1,r2,r3){if((r2|0)==0){HEAP32[r3>>2]=HEAP32[r1+8>>2];r3=HEAP32[r1+12>>2];return r3}else{_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str69|0);r3=-1;return r3}}function _mmap_length(r1){var r2;if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r2=-1;return r2}else{r2=HEAP32[r1+12>>2];return r2}}function _mmap_subscript(r1,r2){var r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r3=0;r4=STACKTOP;STACKTOP=STACKTOP+16|0;r5=r4;r6=r4+4;r7=r4+8;r8=r4+12,r9=r8>>2;r10=(r1+8|0)>>2;if((HEAP32[r10]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r11=0;STACKTOP=r4;return r11}r12=r2+4|0;r13=HEAP32[r12>>2];r14=HEAP32[r13+48>>2];if((r14|0)==0){r15=r13}else{do{if((HEAP32[r13+84>>2]&131072|0)!=0){if((HEAP32[r14+152>>2]|0)==0){break}r16=_PyNumber_AsSsize_t(r2,HEAP32[_PyExc_IndexError>>2]);do{if((r16|0)==-1){if((_PyErr_Occurred()|0)==0){r3=301;break}else{r11=0}STACKTOP=r4;return r11}else{if((r16|0)<0){r3=301;break}else{r17=r16;r3=302;break}}}while(0);do{if(r3==301){r18=HEAP32[r1+12>>2]+r16|0;if((r18|0)<0){break}else{r17=r18;r3=302;break}}}while(0);do{if(r3==302){if(r17>>>0>=HEAP32[r1+12>>2]>>>0){break}r11=_PyString_FromStringAndSize(HEAP32[r10]+r17|0,1);STACKTOP=r4;return r11}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str71|0);r11=0;STACKTOP=r4;return r11}}while(0);r15=HEAP32[r12>>2]}if((r15|0)!=(_PySlice_Type|0)){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str79|0);r11=0;STACKTOP=r4;return r11}if((_PySlice_GetIndicesEx(r2,HEAP32[r1+12>>2],r5,r6,r7,r8)|0)<0){r11=0;STACKTOP=r4;return r11}r8=HEAP32[r9];if((r8|0)<1){r11=_PyString_FromStringAndSize(__str78|0,0);STACKTOP=r4;return r11}if((HEAP32[r7>>2]|0)==1){r11=_PyString_FromStringAndSize(HEAP32[r10]+HEAP32[r5>>2]|0,r8);STACKTOP=r4;return r11}r6=_PyMem_Malloc(r8);if((r6|0)==0){r11=_PyErr_NoMemory();STACKTOP=r4;return r11}r8=HEAP32[r9];L398:do{if((r8|0)>0){r1=HEAP32[r5>>2];r2=0;while(1){HEAP8[r6+r2|0]=HEAP8[HEAP32[r10]+r1|0];r15=r2+1|0;r12=HEAP32[r9];if((r15|0)<(r12|0)){r1=HEAP32[r7>>2]+r1|0;r2=r15}else{r19=r12;break L398}}}else{r19=r8}}while(0);r8=_PyString_FromStringAndSize(r6,r19);_PyMem_Free(r6);r11=r8;STACKTOP=r4;return r11}function _mmap_ass_subscript(r1,r2,r3){var r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19;r4=0;r5=STACKTOP;STACKTOP=STACKTOP+16|0;r6=r5;r7=r5+4;r8=r5+8;r9=r5+12,r10=r9>>2;r11=(r1+8|0)>>2;L405:do{if((HEAP32[r11]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r12=-1}else{r13=r2+4|0;r14=HEAP32[r13>>2];r15=HEAP32[r14+48>>2];if((r15|0)==0){r16=r14}else{do{if((HEAP32[r14+84>>2]&131072|0)!=0){if((HEAP32[r15+152>>2]|0)==0){break}r17=_PyNumber_AsSsize_t(r2,HEAP32[_PyExc_IndexError>>2]);do{if((r17|0)==-1){if((_PyErr_Occurred()|0)==0){r4=338;break}else{r12=-1;break L405}}else{if((r17|0)<0){r4=338;break}else{r18=r17;r4=339;break}}}while(0);do{if(r4==338){r19=HEAP32[r1+12>>2]+r17|0;if((r19|0)<0){break}else{r18=r19;r4=339;break}}}while(0);do{if(r4==339){if(r18>>>0>=HEAP32[r1+12>>2]>>>0){break}if((r3|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str72|0);r12=-1;break L405}do{if((HEAP32[HEAP32[r3+4>>2]+84>>2]&134217728|0)!=0){if((_PyString_Size(r3)|0)!=1){break}if((_is_writeable(r1)|0)==0){r12=-1;break L405}r17=HEAP8[_PyString_AsString(r3)];HEAP8[HEAP32[r11]+r18|0]=r17;r12=0;break L405}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str73|0);r12=-1;break L405}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str71|0);r12=-1;break L405}}while(0);r16=HEAP32[r13>>2]}if((r16|0)!=(_PySlice_Type|0)){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str77|0);r12=-1;break}if((_PySlice_GetIndicesEx(r2,HEAP32[r1+12>>2],r6,r7,r8,r9)|0)<0){r12=-1;break}if((r3|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str74|0);r12=-1;break}if((HEAP32[HEAP32[r3+4>>2]+84>>2]&134217728|0)==0){_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str75|0);r12=-1;break}if((_PyString_Size(r3)|0)!=(HEAP32[r10]|0)){_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str76|0);r12=-1;break}if((_is_writeable(r1)|0)==0){r12=-1;break}if((HEAP32[r10]|0)==0){r12=0;break}r15=(HEAP32[r8>>2]|0)==1;r14=_PyString_AsString(r3);r17=(r14|0)==0;if(r15){if(r17){r12=-1;break}_memcpy(HEAP32[r11]+HEAP32[r6>>2]|0,r14,HEAP32[r10]);r12=0;break}if(r17){r12=-1;break}if((HEAP32[r10]|0)<=0){r12=0;break}r17=HEAP32[r6>>2];r15=0;while(1){HEAP8[HEAP32[r11]+r17|0]=HEAP8[r14+r15|0];r19=r15+1|0;if((r19|0)<(HEAP32[r10]|0)){r17=HEAP32[r8>>2]+r17|0;r15=r19}else{r12=0;break L405}}}}while(0);STACKTOP=r5;return r12}function _mmap_concat(r1,r2){if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);return 0}else{_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str81|0);return 0}}function _mmap_repeat(r1,r2){if((HEAP32[r1+8>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);return 0}else{_PyErr_SetString(HEAP32[_PyExc_SystemError>>2],__str80|0);return 0}}function _mmap_item(r1,r2){var r3,r4;r3=HEAP32[r1+8>>2];if((r3|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r4=0;return r4}do{if((r2|0)>=0){if(HEAP32[r1+12>>2]>>>0<=r2>>>0){break}r4=_PyString_FromStringAndSize(r3+r2|0,1);return r4}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str71|0);r4=0;return r4}function _mmap_slice(r1,r2,r3){var r4,r5,r6,r7,r8;r4=r1+8|0;if((HEAP32[r4>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r5=0;return r5}if((r2|0)<0){r6=0}else{r7=HEAP32[r1+12>>2];r6=r7>>>0<r2>>>0?r7:r2}r2=(r3|0)<0?0:r3;if((r2|0)<(r6|0)){r8=r6}else{r3=HEAP32[r1+12>>2];r8=r2>>>0>r3>>>0?r3:r2}r5=_PyString_FromStringAndSize(HEAP32[r4>>2]+r6|0,r8-r6|0);return r5}function _mmap_ass_item(r1,r2,r3){var r4,r5,r6;r4=r1+8|0;if((HEAP32[r4>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r5=-1;return r5}do{if((r2|0)>=0){if(HEAP32[r1+12>>2]>>>0<=r2>>>0){break}if((r3|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str72|0);r5=-1;return r5}do{if((HEAP32[HEAP32[r3+4>>2]+84>>2]&134217728|0)!=0){if((_PyString_Size(r3)|0)!=1){break}if((_is_writeable(r1)|0)==0){r5=-1;return r5}r6=HEAP8[_PyString_AsString(r3)];HEAP8[HEAP32[r4>>2]+r2|0]=r6;r5=0;return r5}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str73|0);r5=-1;return r5}}while(0);_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str71|0);r5=-1;return r5}function _mmap_ass_slice(r1,r2,r3,r4){var r5,r6,r7,r8,r9;r5=r1+8|0;if((HEAP32[r5>>2]|0)==0){_PyErr_SetString(HEAP32[_PyExc_ValueError>>2],__str45|0);r6=-1;return r6}if((r2|0)<0){r7=0}else{r8=HEAP32[r1+12>>2];r7=r8>>>0<r2>>>0?r8:r2}r2=(r3|0)<0?0:r3;if((r2|0)<(r7|0)){r9=r7}else{r3=HEAP32[r1+12>>2];r9=r2>>>0>r3>>>0?r3:r2}if((r4|0)==0){_PyErr_SetString(HEAP32[_PyExc_TypeError>>2],__str74|0);r6=-1;return r6}if((HEAP32[HEAP32[r4+4>>2]+84>>2]&134217728|0)==0){_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str75|0);r6=-1;return r6}r2=r9-r7|0;if((_PyString_Size(r4)|0)!=(r2|0)){_PyErr_SetString(HEAP32[_PyExc_IndexError>>2],__str76|0);r6=-1;return r6}if((_is_writeable(r1)|0)==0){r6=-1;return r6}r1=_PyString_AsString(r4);_memcpy(HEAP32[r5>>2]+r7|0,r1,r2);r6=0;return r6}
// EMSCRIPTEN_END_FUNCS
Module["_initmmap"] = _initmmap;
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
