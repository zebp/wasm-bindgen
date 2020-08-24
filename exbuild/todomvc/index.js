/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_773e85b6bd68ae2d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlElement_773e85b6bd68ae2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_ad58660599a0a910": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_dataset_ad58660599a0a910"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_52638818d4866675": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_sethidden_52638818d4866675"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_9d7efde622525050": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_blur_9d7efde622525050"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_f5a9f4b6a353d1d1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_focus_f5a9f4b6a353d1d1"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_fe5d800aeb00d291": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_EventTarget_fe5d800aeb00d291"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_116c561435e7160d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_116c561435e7160d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_8f13c12873d4a8d8": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_8f13c12873d4a8d8"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_d9ceb7fdf4ca5166": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeEventListener_d9ceb7fdf4ca5166"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_a94f19ebc19e9217": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Element_a94f19ebc19e9217"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_5c90ce56028589a5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setclassName_5c90ce56028589a5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_498bed1ff4bc8a0d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_classList_498bed1ff4bc8a0d"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_03a283e035437b16": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setinnerHTML_03a283e035437b16"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_ec8875ca39624b79": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelector_ec8875ca39624b79"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_b9acacc64a9095fe": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Node_b9acacc64a9095fe"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_0ae2308f59c109d2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parentElement_0ae2308f59c109d2"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_f236fda2771c2599": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_textContent_f236fda2771c2599"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_d2083d38d155212a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_settextContent_d2083d38d155212a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_8658f795c44d1316": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_8658f795c44d1316"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_91f430365ad3a28a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isEqualNode_91f430365ad3a28a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_be8cb6ec13799e04": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeChild_be8cb6ec13799e04"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getItem_cc3eb492f776efb9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getItem_cc3eb492f776efb9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_c183fc6be942b37e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setItem_c183fc6be942b37e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_location_1cf36dc6a04b61e1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_location_1cf36dc6a04b61e1"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_61c142aa6eae691f": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_61c142aa6eae691f"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_d00b8e24838e36e1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_d00b8e24838e36e1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_4af162be59c08fa0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelectorAll_4af162be59c08fa0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_add_13e910c44590d3c8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_add_13e910c44590d3c8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_9669bf20deff86ca": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_remove_9669bf20deff86ca"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_22c223cbc0371245": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_22c223cbc0371245"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_69dcc1dadd487476": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_69dcc1dadd487476"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_exception_7b8e1f459f2613ad": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_exception_7b8e1f459f2613ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_4d896f2a1fbf25c3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_KeyboardEvent_4d896f2a1fbf25c3"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_d74097d530e093a8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_keyCode_d74097d530e093a8"](p0i32);
/******/ 					},
/******/ 					"__wbg_target_9d8c7027b8164233": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_target_9d8c7027b8164233"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e8f84259147dce74": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_e8f84259147dce74"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_d3b6d86af1c5d199": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_d3b6d86af1c5d199"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_af1e27404b88ec8d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_localStorage_af1e27404b88ec8d"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_aae90057bd26cb78": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlInputElement_aae90057bd26cb78"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_b48f7fd8d5b7330a": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_checked_b48f7fd8d5b7330a"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_4c76d21b2d916833": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setchecked_4c76d21b2d916833"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_6d2605b80cdcbc03": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_6d2605b80cdcbc03"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_dc3cce23da13c2e9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setvalue_dc3cce23da13c2e9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_hash_118e5e08a994d5a7": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_hash_118e5e08a994d5a7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_a5974f36008a0d8c": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_length_a5974f36008a0d8c"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_6d6e3c7bc98181de": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_6d6e3c7bc98181de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_parse_24b8c67fcc435259": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parse_24b8c67fcc435259"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_8c18f0f492e30c30": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stringify_8c18f0f492e30c30"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_2e96a823c1c5a5bd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_2e96a823c1c5a5bd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_17534eac4df3cd22": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_17534eac4df3cd22"]();
/******/ 					},
/******/ 					"__wbg_isArray_184f51bb3cd68808": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isArray_184f51bb3cd68808"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_7114ccbf1c58e41f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_push_7114ccbf1c58e41f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_ce20fc5c837b8c8b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_shift_ce20fc5c837b8c8b"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e2fdfe2af14a2323": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_e2fdfe2af14a2323"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_e9f0ce4da840ab94": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_e9f0ce4da840ab94"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_610093e8f95067a4": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_610093e8f95067a4"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_ff567d625ac44e49": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_ff567d625ac44e49"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_deb5f896b3ea14eb": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_deb5f896b3ea14eb"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_5b6409ce10298b82": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_5b6409ce10298b82"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_ad54c8b6865a8103": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_now_ad54c8b6865a8103"]();
/******/ 					},
/******/ 					"__wbg_iterator_fe2907a0b53cd987": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_fe2907a0b53cd987"]();
/******/ 					},
/******/ 					"__wbg_globalThis_8ebfea75c2dd63ee": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_8ebfea75c2dd63ee"]();
/******/ 					},
/******/ 					"__wbg_self_179e8c2a5a4c73a3": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_179e8c2a5a4c73a3"]();
/******/ 					},
/******/ 					"__wbg_window_492cfe63a6e41dfa": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_492cfe63a6e41dfa"]();
/******/ 					},
/******/ 					"__wbg_global_62ea2619f58bf94d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_62ea2619f58bf94d"]();
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper628": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper628"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper630": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper630"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"0b37083804d1c1daec95"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });