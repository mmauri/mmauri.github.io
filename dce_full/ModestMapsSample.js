(function (console, $hx_exports, $global) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
$hx_exports.lime = $hx_exports.lime || {};
$hx_exports.ModestMapsSample = $hx_exports.ModestMapsSample || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.config = { build : "12", company : "", file : "ModestMapsSample", fps : 60, name : "ModestMapsSample", orientation : "", packageName : "com.modestmaps.sample.ModestMapsSample", version : "1.0.0", windows : [{ allowHighDPI : false, antialiasing : 0, background : 16777215, borderless : false, depthBuffer : false, display : 0, fullscreen : false, hardware : true, height : 0, hidden : null, maximized : null, minimized : null, parameters : "{}", resizable : true, stencilBuffer : true, title : "ModestMapsSample", vsync : false, width : 0, x : null, y : null}]};
};
ApplicationMain.create = function() {
	var app = new openfl_display_Application();
	app.create(ApplicationMain.config);
	var library = new DefaultAssetLibrary();
	lime_utils_Assets.registerLibrary("default",library);
	ApplicationMain.preloader = new openfl_display_Preloader(new openfl_display_DefaultPreloader());
	app.setPreloader(ApplicationMain.preloader);
	ApplicationMain.preloader.create(ApplicationMain.config);
	ApplicationMain.preloader.onComplete.add(ApplicationMain.start);
	ApplicationMain.preloader.addLibrary(library);
	ApplicationMain.preloader.load();
	var result = app.exec();
};
ApplicationMain.embed = $hx_exports.ModestMapsSample.embed = function(element,width,height,background,assetsPrefix) {
	var htmlElement = null;
	if(typeof(element) == "string") htmlElement = window.document.getElementById(js_Boot.__cast(element , String)); else if(element == null) htmlElement = window.document.createElement("div"); else htmlElement = element;
	var color = null;
	if(background != null && background != "") {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	if(width == null) width = 0;
	if(height == null) height = 0;
	ApplicationMain.config.windows[0].background = color;
	ApplicationMain.config.windows[0].element = htmlElement;
	ApplicationMain.config.windows[0].width = width;
	ApplicationMain.config.windows[0].height = height;
	ApplicationMain.config.assetsPrefix = assetsPrefix;
	ApplicationMain.create();
};
ApplicationMain._embed = $hx_exports.lime.embed = function(element,width,height,background,assetsPrefix) {
	ApplicationMain.embed(element,width,height,background,assetsPrefix);
};
ApplicationMain._embed2 = $hx_exports.openfl.embed = function(element,width,height,background,assetsPrefix) {
	ApplicationMain.embed(element,width,height,background,assetsPrefix);
};
ApplicationMain.start = function() {
	try {
		new DocumentClass();
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		openfl_Lib.current.stage.__handleError(e);
	}
	openfl_Lib.current.stage.dispatchEvent(new openfl_events_Event("resize",false,false));
	if(openfl_Lib.current.stage.window.__fullscreen) openfl_Lib.current.stage.dispatchEvent(new openfl_events_FullScreenEvent("fullScreen",false,false,true,true));
};
var openfl_events_IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl_events_IEventDispatcher;
openfl_events_IEventDispatcher.__name__ = ["openfl","events","IEventDispatcher"];
openfl_events_IEventDispatcher.prototype = {
	addEventListener: null
	,__class__: openfl_events_IEventDispatcher
};
var openfl_events_EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl_events_EventDispatcher;
openfl_events_EventDispatcher.__name__ = ["openfl","events","EventDispatcher"];
openfl_events_EventDispatcher.__interfaces__ = [openfl_events_IEventDispatcher];
openfl_events_EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl_events_EventDispatcher.prototype = {
	__eventMap: null
	,__iterators: null
	,__targetDispatcher: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(listener == null) return;
		if(this.__eventMap == null) {
			this.__eventMap = new haxe_ds_StringMap();
			this.__iterators = new haxe_ds_StringMap();
		}
		if(!this.__eventMap.exists(type)) {
			var list = [];
			list.push(new openfl_events__$EventDispatcher_Listener(listener,useCapture,priority));
			var iterator = new openfl_events__$EventDispatcher_DispatchIterator(list);
			this.__eventMap.set(type,list);
			this.__iterators.set(type,[iterator]);
		} else {
			var list1 = this.__eventMap.get(type);
			var _g1 = 0;
			var _g = list1.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(list1[i].match(listener,useCapture)) return;
			}
			var iterators = this.__iterators.get(type);
			var _g2 = 0;
			while(_g2 < iterators.length) {
				var iterator1 = iterators[_g2];
				++_g2;
				if(iterator1.active) iterator1.copy();
			}
			list1.push(new openfl_events__$EventDispatcher_Listener(listener,useCapture,priority));
			list1.sort(openfl_events_EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		return this.__dispatchEvent(event);
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null || listener == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var iterators = this.__iterators.get(type);
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,useCapture)) {
				var _g2 = 0;
				while(_g2 < iterators.length) {
					var iterator = iterators[_g2];
					++_g2;
					iterator.remove(list[i],i);
				}
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) {
			this.__eventMap.remove(type);
			this.__iterators.remove(type);
		}
		if(!this.__eventMap.iterator().hasNext()) {
			this.__eventMap = null;
			this.__iterators = null;
		}
	}
	,__dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return true;
		var type = event.type;
		var list = this.__eventMap.get(type);
		if(list == null) return true;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 1;
		var index = 0;
		var iterators = this.__iterators.get(type);
		var iterator = iterators[0];
		if(iterator.active) {
			iterator = new openfl_events__$EventDispatcher_DispatchIterator(list);
			iterators.push(iterator);
		}
		iterator.reset(list);
		while( iterator.hasNext() ) {
			var listener = iterator.next();
			if(listener == null) continue;
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCanceledNow) break;
			}
		}
		if(iterator != iterators[0]) HxOverrides.remove(iterators,iterator);
		return true;
	}
	,__class__: openfl_events_EventDispatcher
};
var openfl_display_IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl_display_IBitmapDrawable;
openfl_display_IBitmapDrawable.__name__ = ["openfl","display","IBitmapDrawable"];
var openfl_display_DisplayObject = function() {
	openfl_events_EventDispatcher.call(this);
	this.__alpha = 1;
	this.__blendMode = 10;
	this.__cacheAsBitmap = false;
	this.__transform = new openfl_geom_Matrix();
	this.__visible = true;
	this.__rotation = 0;
	this.__rotationSine = 0;
	this.__rotationCosine = 1;
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl_geom_Matrix();
	this.__worldColorTransform = new openfl_geom_ColorTransform();
	this.__renderTransform = new openfl_geom_Matrix();
	this.set_name("instance" + ++openfl_display_DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl_display_DisplayObject;
openfl_display_DisplayObject.__name__ = ["openfl","display","DisplayObject"];
openfl_display_DisplayObject.__interfaces__ = [openfl_display_IBitmapDrawable];
openfl_display_DisplayObject.__super__ = openfl_events_EventDispatcher;
openfl_display_DisplayObject.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	opaqueBackground: null
	,parent: null
	,stage: null
	,__alpha: null
	,__blendMode: null
	,__cacheAsBitmap: null
	,__cairo: null
	,__children: null
	,__filters: null
	,__graphics: null
	,__isMask: null
	,__loaderInfo: null
	,__mask: null
	,__name: null
	,__objectTransform: null
	,__renderable: null
	,__renderDirty: null
	,__renderParent: null
	,__renderTransform: null
	,__renderTransformChanged: null
	,__rotation: null
	,__rotationCosine: null
	,__rotationSine: null
	,__scrollRect: null
	,__transform: null
	,__transformDirty: null
	,__visible: null
	,__worldAlpha: null
	,__worldAlphaChanged: null
	,__worldClip: null
	,__worldClipChanged: null
	,__worldColorTransform: null
	,__worldTransform: null
	,__worldVisible: null
	,__worldVisibleChanged: null
	,__worldZ: null
	,__canvas: null
	,__context: null
	,__style: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!openfl_display_DisplayObject.__broadcastEvents.exists(type)) openfl_display_DisplayObject.__broadcastEvents.set(type,[]);
			var dispatchers = openfl_display_DisplayObject.__broadcastEvents.get(type);
			if(HxOverrides.indexOf(dispatchers,this,0) == -1) dispatchers.push(this);
			break;
		default:
		}
		openfl_events_EventDispatcher.prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
	}
	,dispatchEvent: function(event) {
		if(js_Boot.__instanceof(event,openfl_events_MouseEvent)) {
			var mouseEvent = event;
			mouseEvent.stageX = this.__getRenderTransform().__transformX(mouseEvent.localX,mouseEvent.localY);
			mouseEvent.stageY = this.__getRenderTransform().__transformY(mouseEvent.localX,mouseEvent.localY);
		} else if(js_Boot.__instanceof(event,openfl_events_TouchEvent)) {
			var touchEvent = event;
			touchEvent.stageX = this.__getRenderTransform().__transformX(touchEvent.localX,touchEvent.localY);
			touchEvent.stageY = this.__getRenderTransform().__transformY(touchEvent.localX,touchEvent.localY);
		}
		return openfl_events_EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix;
		if(targetCoordinateSpace != null) {
			matrix = this.__getWorldTransform().clone();
			matrix.concat(targetCoordinateSpace.__getWorldTransform().clone().invert());
		} else {
			matrix = openfl_geom_Matrix.__temp;
			matrix.identity();
		}
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,globalToLocal: function(pos) {
		pos = pos.clone();
		this.__getRenderTransform().__transformInversePoint(pos);
		return pos;
	}
	,localToGlobal: function(point) {
		return this.__getRenderTransform().transformPoint(point);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
		openfl_events_EventDispatcher.prototype.removeEventListener.call(this,type,listener,useCapture);
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!this.hasEventListener(type)) {
				if(openfl_display_DisplayObject.__broadcastEvents.exists(type)) {
					var _this = openfl_display_DisplayObject.__broadcastEvents.get(type);
					HxOverrides.remove(_this,this);
				}
			}
			break;
		default:
		}
	}
	,__cleanup: function() {
		this.__cairo = null;
		this.__canvas = null;
		this.__context = null;
		if(this.__graphics != null) this.__graphics.__cleanup();
	}
	,__dispatch: function(event) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl_events_EventDispatcher.prototype.__dispatchEvent.call(this,event);
			if(event.__isCanceled) return true;
			return result;
		}
		return true;
	}
	,__dispatchChildren: function(event) {
		return this.__dispatchEvent(event);
	}
	,__dispatchEvent: function(event) {
		var result = openfl_events_EventDispatcher.prototype.__dispatchEvent.call(this,event);
		if(event.__isCanceled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = 3;
			if(event.target == null) event.target = this;
			this.parent.__dispatchEvent(event);
		}
		return result;
	}
	,__enterFrame: function(deltaTime) {
	}
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix);
	}
	,__getCursor: function() {
		return null;
	}
	,__getInteractive: function(stack) {
		return false;
	}
	,__getRenderTransform: function() {
		this.__getWorldTransform();
		return this.__renderTransform;
	}
	,__getWorldTransform: function() {
		if(this.__transformDirty || openfl_display_DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			if(this.parent == null) {
				if(transformDirty) this.__update(true,false);
			} else while(current != this.stage && current != null) {
				list.push(current);
				current = current.parent;
				if(current != this.stage && current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.__graphics != null) {
			if(!hitObject.get_visible() || this.__isMask) return false;
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
			if(this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
				if(stack != null && !interactiveOnly) stack.push(hitObject);
				return true;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.__graphics != null) {
			if(this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) return true;
		}
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl__$internal_renderer_cairo_CairoDisplayObject.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl__$internal_renderer_cairo_CairoGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		openfl__$internal_renderer_canvas_CanvasDisplayObject.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl__$internal_renderer_canvas_CanvasGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.opaqueBackground != null && this.get_width() > 0 && this.get_height() > 0) {
		}
		openfl__$internal_renderer_dom_DOMShape.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		openfl__$internal_renderer_opengl_GLDisplayObject.render(this,renderSession);
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl_display_DisplayObject.__worldRenderDirty++;
		}
	}
	,__setStageReference: function(stage) {
		this.stage = stage;
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl_display_DisplayObject.__worldTransformDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask && (this.parent == null || !this.parent.__isMask);
		this.__updateTransforms();
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl_display_DisplayObject.__worldTransformDirty--;
		}
		if(maskGraphics != null) this.__updateMask(maskGraphics);
		if(!transformOnly) {
			if(!this.__worldColorTransform.__equals(this.get_transform().get_colorTransform())) this.__worldColorTransform = this.get_transform().get_colorTransform().__clone();
			var __parent;
			if(this.parent != null) __parent = this.parent; else __parent = this.__renderParent;
			if(__parent != null) {
				this.__worldAlpha = this.get_alpha() * __parent.__worldAlpha;
				this.__worldColorTransform.__combine(__parent.__worldColorTransform);
				if(this.get_blendMode() == null || this.get_blendMode() == 10) this.__blendMode = __parent.__blendMode;
			} else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask && (this.parent == null || !this.parent.__isMask);
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl_display_DisplayObject.__worldTransformDirty--;
		}
	}
	,__updateMask: function(maskGraphics) {
		if(this.__graphics != null) {
			maskGraphics.__commands.overrideMatrix(this.__worldTransform);
			maskGraphics.__commands.append(this.__graphics.__commands);
			maskGraphics.set___dirty(true);
			maskGraphics.__visible = true;
			if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl_geom_Rectangle();
			this.__graphics.__getBounds(maskGraphics.__bounds,openfl_geom_Matrix.__identity);
		}
	}
	,__updateTransforms: function(overrideTransform) {
		var overrided = overrideTransform != null;
		var local;
		if(overrided) local = overrideTransform; else local = this.__transform;
		if(this.__worldTransform == null) this.__worldTransform = new openfl_geom_Matrix();
		if(this.__renderTransform == null) this.__renderTransform = new openfl_geom_Matrix();
		if(!overrided && this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			this.__worldTransform.a = local.a * parentTransform.a + local.b * parentTransform.c;
			this.__worldTransform.b = local.a * parentTransform.b + local.b * parentTransform.d;
			this.__worldTransform.c = local.c * parentTransform.a + local.d * parentTransform.c;
			this.__worldTransform.d = local.c * parentTransform.b + local.d * parentTransform.d;
			this.__worldTransform.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
			this.__worldTransform.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
			parentTransform = this.parent.__renderTransform;
			this.__renderTransform.a = local.a * parentTransform.a + local.b * parentTransform.c;
			this.__renderTransform.b = local.a * parentTransform.b + local.b * parentTransform.d;
			this.__renderTransform.c = local.c * parentTransform.a + local.d * parentTransform.c;
			this.__renderTransform.d = local.c * parentTransform.b + local.d * parentTransform.d;
			this.__renderTransform.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
			this.__renderTransform.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
		} else {
			this.__worldTransform.copyFrom(local);
			this.__renderTransform.copyFrom(local);
		}
		if(this.__scrollRect != null) this.__renderTransform.__translateTransformed(-this.__scrollRect.x,-this.__scrollRect.y);
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value > 1.0) value = 1.0;
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__alpha = value;
	}
	,get_blendMode: function() {
		return this.__blendMode;
	}
	,set_cacheAsBitmap: function(value) {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl_display_DisplayObject.__worldRenderDirty++;
		}
		return this.__cacheAsBitmap = value;
	}
	,get_filters: function() {
		if(this.__filters == null) return []; else return this.__filters.slice();
	}
	,set_filters: function(value) {
		if(value != null && value.length > 0) this.__filters = value; else this.__filters = null;
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl_display_DisplayObject.__worldRenderDirty++;
		}
		return value;
	}
	,get_height: function() {
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,this.__transform);
		return bounds.height;
	}
	,set_height: function(value) {
		var bounds = new openfl_geom_Rectangle();
		var matrix = openfl_geom_Matrix.__temp;
		matrix.identity();
		this.__getBounds(bounds,matrix);
		if(value != bounds.height) this.set_scaleY(value / bounds.height); else this.set_scaleY(1);
		return value;
	}
	,get_loaderInfo: function() {
		if(this.stage != null) return openfl_Lib.current.__loaderInfo;
		return null;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) {
			this.__mask.__isMask = false;
			this.__mask.__setTransformDirty();
			this.__mask.__setRenderDirty();
		}
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		var mouseX;
		if(this.stage != null) mouseX = this.stage.__mouseX; else mouseX = openfl_Lib.current.stage.__mouseX;
		var mouseY;
		if(this.stage != null) mouseY = this.stage.__mouseY; else mouseY = openfl_Lib.current.stage.__mouseY;
		return this.__getRenderTransform().__transformInverseX(mouseX,mouseY);
	}
	,get_mouseY: function() {
		var mouseX;
		if(this.stage != null) mouseX = this.stage.__mouseX; else mouseX = openfl_Lib.current.stage.__mouseX;
		var mouseY;
		if(this.stage != null) mouseY = this.stage.__mouseY; else mouseY = openfl_Lib.current.stage.__mouseY;
		return this.__getRenderTransform().__transformInverseY(mouseX,mouseY);
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			this.__rotation = value;
			var radians = this.__rotation * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
			var __scaleX = Math.abs(this.get_scaleX());
			var __scaleY = Math.abs(this.get_scaleY());
			this.__transform.a = this.__rotationCosine * __scaleX;
			this.__transform.b = this.__rotationSine * __scaleX;
			this.__transform.c = -this.__rotationSine * __scaleY;
			this.__transform.d = this.__rotationCosine * __scaleY;
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
		}
		return value;
	}
	,get_scaleX: function() {
		if(this.__transform.b == 0) return this.__transform.a; else if(this.__transform.b > 0) return Math.sqrt(this.__transform.a * this.__transform.a + this.__transform.b * this.__transform.b); else return -Math.sqrt(this.__transform.a * this.__transform.a + this.__transform.b * this.__transform.b);
	}
	,set_scaleX: function(value) {
		if(this.__transform.b == 0) {
			if(value != this.__transform.a) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl_display_DisplayObject.__worldTransformDirty++;
				}
			}
			this.__transform.a = value;
		} else {
			var a = this.__rotationCosine * value;
			var b = this.__rotationSine * value;
			if(this.__transform.a != a || this.__transform.b != b) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl_display_DisplayObject.__worldTransformDirty++;
				}
			}
			this.__transform.a = a;
			this.__transform.b = b;
		}
		return value;
	}
	,get_scaleY: function() {
		if(this.__transform.c == 0) return this.__transform.d; else if(this.__transform.c > 0) return Math.sqrt(this.__transform.c * this.__transform.c + this.__transform.d * this.__transform.d); else return -Math.sqrt(this.__transform.c * this.__transform.c + this.__transform.d * this.__transform.d);
	}
	,set_scaleY: function(value) {
		if(this.__transform.c == 0) {
			if(value != this.__transform.d) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl_display_DisplayObject.__worldTransformDirty++;
				}
			}
			this.__transform.d = value;
		} else {
			var c = -this.__rotationSine * value;
			var d = this.__rotationCosine * value;
			if(this.__transform.d != d || this.__transform.c != c) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl_display_DisplayObject.__worldTransformDirty++;
				}
			}
			this.__transform.c = c;
			this.__transform.d = d;
		}
		return value;
	}
	,set_scrollRect: function(value) {
		if(value != this.__scrollRect) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__objectTransform == null) this.__objectTransform = new openfl_geom_Transform(this);
		return this.__objectTransform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,this.__transform);
		return bounds.width;
	}
	,set_width: function(value) {
		var bounds = new openfl_geom_Rectangle();
		var matrix = openfl_geom_Matrix.__temp;
		matrix.identity();
		this.__getBounds(bounds,matrix);
		if(value != bounds.width) this.set_scaleX(value / bounds.width); else this.set_scaleX(1);
		return value;
	}
	,get_x: function() {
		return this.__transform.tx;
	}
	,set_x: function(value) {
		if(value != this.__transform.tx) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__transform.tx = value;
	}
	,get_y: function() {
		return this.__transform.ty;
	}
	,set_y: function(value) {
		if(value != this.__transform.ty) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__transform.ty = value;
	}
	,__class__: openfl_display_DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",get_transform:"get_transform",set_scrollRect:"set_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",get_loaderInfo:"get_loaderInfo",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_cacheAsBitmap:"set_cacheAsBitmap",get_blendMode:"get_blendMode",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
var openfl_display_InteractiveObject = function() {
	openfl_display_DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.__tabEnabled = false;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl_display_InteractiveObject;
openfl_display_InteractiveObject.__name__ = ["openfl","display","InteractiveObject"];
openfl_display_InteractiveObject.__super__ = openfl_display_DisplayObject;
openfl_display_InteractiveObject.prototype = $extend(openfl_display_DisplayObject.prototype,{
	doubleClickEnabled: null
	,focusRect: null
	,mouseEnabled: null
	,needsSoftKeyboard: null
	,tabIndex: null
	,__tabEnabled: null
	,__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
			if(this.parent != null) this.parent.__getInteractive(stack);
		}
		return true;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		return openfl_display_DisplayObject.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject);
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled;
	}
	,set_tabEnabled: function(value) {
		return this.__tabEnabled = value;
	}
	,__class__: openfl_display_InteractiveObject
	,__properties__: $extend(openfl_display_DisplayObject.prototype.__properties__,{set_tabEnabled:"set_tabEnabled",get_tabEnabled:"get_tabEnabled"})
});
var openfl_display_DisplayObjectContainer = function() {
	openfl_display_InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = [];
	this.__removedChildren = openfl__$Vector_Vector_$Impl_$.toObjectVector(null);
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl_display_DisplayObjectContainer;
openfl_display_DisplayObjectContainer.__name__ = ["openfl","display","DisplayObjectContainer"];
openfl_display_DisplayObjectContainer.__super__ = openfl_display_InteractiveObject;
openfl_display_DisplayObjectContainer.prototype = $extend(openfl_display_InteractiveObject.prototype,{
	mouseChildren: null
	,__removedChildren: null
	,addChild: function(child) {
		return this.addChildAt(child,this.get_numChildren());
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw new js__$Boot_HaxeError("Invalid index position " + index);
		if(child.parent == this) {
			if(this.__children[index] != child) {
				HxOverrides.remove(this.__children,child);
				this.__children.splice(index,0,child);
			}
		} else {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.splice(index,0,child);
			child.parent = this;
			var addedToStage = this.stage != null && child.stage == null;
			if(addedToStage) this.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
			var event = new openfl_events_Event("added",true);
			event.target = child;
			child.__dispatchEvent(event);
			if(addedToStage) child.__dispatchChildren(new openfl_events_Event("addedToStage",false,false));
		}
		return child;
	}
	,contains: function(child) {
		while(child != this && child != null) child = child.parent;
		return child == this;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) return child;
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl_display_DisplayObject.__worldRenderDirty++;
			}
			child.__dispatchEvent(new openfl_events_Event("removed",true));
			if(this.stage != null) {
				if(child.stage != null && this.stage.get_focus() == child) this.stage.set_focus(null);
				child.__dispatchChildren(new openfl_events_Event("removedFromStage",false,false));
				child.__setStageReference(null);
			}
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,swapChildrenAt: function(index1,index2) {
		var swap = this.__children[index1];
		this.__children[index1] = this.__children[index2];
		this.__children[index2] = swap;
		swap = null;
	}
	,__dispatchChildren: function(event) {
		var success = this.__dispatchEvent(event);
		if(success && this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				event.target = child;
				if(!child.__dispatchChildren(event)) return false;
			}
		}
		return success;
	}
	,__enterFrame: function(deltaTime) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__enterFrame(deltaTime);
		}
	}
	,__getBounds: function(rect,matrix) {
		openfl_display_InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		if(this.__children.length == 0) return;
		if(matrix != null) {
			this.__updateTransforms(matrix);
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_scaleX() == 0 || child.get_scaleY() == 0) continue;
			child.__getBounds(rect,child.__worldTransform);
		}
		if(matrix != null) {
			this.__updateTransforms();
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		if(this.__scrollRect != null) {
			var point = openfl_geom_Point.__temp;
			point.setTo(x,y);
			this.__getRenderTransform().__transformInversePoint(point);
			if(!this.__scrollRect.containsPoint(point)) return false;
		}
		var i = this.__children.length;
		if(interactiveOnly) {
			if(stack == null || !this.mouseChildren) {
				while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,true,this.__children[i])) {
					if(stack != null) stack.push(hitObject);
					return true;
				}
			} else if(stack != null) {
				var length = stack.length;
				var interactive = false;
				var hitTest = false;
				while(--i >= 0) {
					interactive = this.__children[i].__getInteractive(null);
					if(interactive || this.mouseEnabled && !hitTest) {
						if(this.__children[i].__hitTest(x,y,shapeFlag,stack,true,this.__children[i])) {
							hitTest = true;
							if(interactive) break;
						}
					}
				}
				if(hitTest) {
					stack.splice(length,0,hitObject);
					return true;
				}
			}
		} else while(--i >= 0) this.__children[i].__hitTest(x,y,shapeFlag,stack,false,this.__children[i]);
		return false;
	}
	,__hitTestMask: function(x,y) {
		var i = this.__children.length;
		while(--i >= 0) if(this.__children[i].__hitTestMask(x,y)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl_display_InteractiveObject.prototype.__renderCairo.call(this,renderSession);
		renderSession.maskManager.pushObject(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairo(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.get_length()) {
			var orphan = _g11.get(_g2);
			++_g2;
			if(orphan.stage == null) orphan.__cleanup();
		}
		this.__removedChildren.set_length(0);
		renderSession.maskManager.popObject(this);
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl__$internal_renderer_cairo_CairoGraphics.renderMask(this.__graphics,renderSession);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairoMask(renderSession);
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl_display_InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
		renderSession.maskManager.pushObject(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.get_length()) {
			var orphan = _g11.get(_g2);
			++_g2;
			if(orphan.stage == null) orphan.__cleanup();
		}
		this.__removedChildren.set_length(0);
		renderSession.maskManager.popObject(this);
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl__$internal_renderer_canvas_CanvasGraphics.renderMask(this.__graphics,renderSession);
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,this.__transform);
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__renderDOM: function(renderSession) {
		openfl_display_InteractiveObject.prototype.__renderDOM.call(this,renderSession);
		renderSession.maskManager.pushObject(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.get_length()) {
			var orphan = _g11.get(_g2);
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		this.__removedChildren.set_length(0);
		renderSession.maskManager.popObject(this);
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl_display_InteractiveObject.prototype.__renderGL.call(this,renderSession);
		renderSession.maskManager.pushObject(this);
		renderSession.filterManager.pushObject(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.get_length()) {
			var orphan = _g11.get(_g2);
			++_g2;
			if(orphan.stage == null) orphan.__cleanup();
		}
		this.__removedChildren.set_length(0);
		renderSession.filterManager.popObject(this);
		renderSession.maskManager.popObject(this);
	}
	,__setStageReference: function(stage) {
		openfl_display_InteractiveObject.prototype.__setStageReference.call(this,stage);
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		openfl_display_InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren,maskGraphics);
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true,maskGraphics);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl_display_InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: openfl_display_DisplayObjectContainer
	,__properties__: $extend(openfl_display_InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
var openfl_display_Sprite = function() {
	openfl_display_DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
};
$hxClasses["openfl.display.Sprite"] = openfl_display_Sprite;
openfl_display_Sprite.__name__ = ["openfl","display","Sprite"];
openfl_display_Sprite.__super__ = openfl_display_DisplayObjectContainer;
openfl_display_Sprite.prototype = $extend(openfl_display_DisplayObjectContainer.prototype,{
	buttonMode: null
	,dropTarget: null
	,hitArea: null
	,useHandCursor: null
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.stage != null) this.stage.__startDrag(this,lockCenter,bounds);
	}
	,stopDrag: function() {
		if(this.stage != null) this.stage.__stopDrag(this);
	}
	,__getCursor: function() {
		if(this.buttonMode && this.useHandCursor) return lime_ui_MouseCursor.POINTER; else return null;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.hitArea != null) {
			if(!this.hitArea.mouseEnabled) {
				this.hitArea.mouseEnabled = true;
				var hitTest = this.hitArea.__hitTest(x,y,shapeFlag,null,true,hitObject);
				this.hitArea.mouseEnabled = false;
				if(hitTest) stack[stack.length] = hitObject;
				return hitTest;
			}
		} else {
			if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
			if(this.__scrollRect != null) {
				var point = openfl_geom_Point.__temp;
				point.setTo(x,y);
				this.__getRenderTransform().__transformInversePoint(point);
				if(!this.__scrollRect.containsPoint(point)) return false;
			}
			if(openfl_display_DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject)) return interactiveOnly; else if((!interactiveOnly || this.mouseEnabled) && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
				if(stack != null) stack.push(hitObject);
				return true;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(openfl_display_DisplayObjectContainer.prototype.__hitTestMask.call(this,x,y)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) return true;
		return false;
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl_display_Graphics(this);
		return this.__graphics;
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled || this.buttonMode;
	}
	,__class__: openfl_display_Sprite
	,__properties__: $extend(openfl_display_DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var ModestMapsSample = function() {
	openfl_display_Sprite.call(this);
	this.stage.scaleMode = 2;
	this.stage.align = 6;
	this.createChildren();
	this.placeMarkers();
	this.stage.addEventListener("resize",$bind(this,this.onResize));
	this.onResize();
};
$hxClasses["ModestMapsSample"] = ModestMapsSample;
ModestMapsSample.__name__ = ["ModestMapsSample"];
ModestMapsSample.__super__ = openfl_display_Sprite;
ModestMapsSample.prototype = $extend(openfl_display_Sprite.prototype,{
	map: null
	,tooltip: null
	,status: null
	,mapButtons: null
	,createChildren: function() {
		this.map = new com_modestmaps_TweenMap(this.stage.stageWidth - 40,this.stage.stageHeight - 40,true,new com_modestmaps_mapproviders_CartoDBProvider(com_modestmaps_mapproviders_CARTODB_$MAPTYPE.POSITRON,false),[new com_modestmaps_core_MapExtent(37.829853,37.700121,-122.212601,-122.514725)]);
		this.map.addEventListener("doubleClick",($_=this.map,$bind($_,$_.onDoubleClick)));
		this.map.addEventListener("mouseWheel",($_=this.map,$bind($_,$_.onMouseWheel)));
		this.map.set_x(this.map.set_y(20));
		this.map.addEventListener("zoomedBy",$bind(this,this.onZoomed));
		this.map.addEventListener("stopZooming",$bind(this,this.onStopZoom));
		this.map.addEventListener("panned",$bind(this,this.onPanned));
		this.map.addEventListener("stopPanning",$bind(this,this.onStopPan));
		this.map.addEventListener("resized",$bind(this,this.onResized));
		this.map.addEventListener("markerClick",$bind(this,this.onMarkerClick));
		this.map.addEventListener("markerRollOver",$bind(this,this.onMarkerRollOver));
		this.map.addEventListener("markerRollOut",$bind(this,this.onMarkerRollOut));
		this.map.addChild(new com_modestmaps_extras_MapControls(this.map));
		this.map.addChild(new com_modestmaps_extras_ZoomSlider(this.map));
		this.map.addChild(new com_modestmaps_extras_ZoomBox(this.map));
		this.map.addChild(new com_modestmaps_extras_NavigatorWindow(this.map));
		this.tooltip = new Tooltip();
		this.status = new openfl_text_TextField();
		this.status.set_defaultTextFormat(new openfl_text_TextFormat("Verdana",10,4210752));
		this.status.set_selectable(false);
		this.status.set_text("Welcome to Modest Maps...");
		this.status.set_width(600);
		this.status.set_height(20);
		this.mapButtons = new openfl_display_Sprite();
		this.mapButtons.addChild(new MapProviderButton("Carto Positron",this.map.getMapProvider(),true));
		this.mapButtons.addChild(new MapProviderButton("Carto Positron SSL",new com_modestmaps_mapproviders_CartoDBProvider(com_modestmaps_mapproviders_CARTODB_$MAPTYPE.POSITRON,true)));
		this.mapButtons.addChild(new MapProviderButton("Open Street Map",new com_modestmaps_mapproviders_OpenStreetMapProvider()));
		var _g1 = 0;
		var _g = this.mapButtons.get_numChildren();
		while(_g1 < _g) {
			var n = _g1++;
			var button;
			button = js_Boot.__cast(this.mapButtons.getChildAt(n) , openfl_display_Sprite);
			button.set_y(n * 22);
			button.set_x(this.mapButtons.get_width() - button.get_width());
		}
		this.mapButtons.addEventListener("click",$bind(this,this.onProviderButtonClick));
		this.addChild(this.map);
		this.addChild(this.status);
		this.addChild(this.tooltip);
		this.addChild(this.mapButtons);
	}
	,placeMarkers: function() {
		var markerpoints = [{ title : "Rochdale", loc : "37.865571, -122.259679"},{ title : "Parker Ave.", loc : "37.780492, -122.453731"},{ title : "Pepper Dr.", loc : "37.623443, -122.426577"},{ title : "3rd St.", loc : "37.779297, -122.392877"},{ title : "Divisadero St.", loc : "37.771919, -122.437413"},{ title : "Market St.", loc : "37.812734, -122.280064"},{ title : "17th St. is a long street with a short name, but we want to test the tooltip with a long title.", loc : "37.804274, -122.262940"}];
		var o;
		var _g = 0;
		while(_g < markerpoints.length) {
			var o1 = markerpoints[_g];
			++_g;
			var marker = new SampleMarker();
			marker.set_title(o1.title);
			var loc = com_modestmaps_geo_Location.fromString(o1.loc);
			this.map.putMarker(loc,marker);
		}
	}
	,onResize: function(event) {
		var w = this.stage.stageWidth - 40;
		var h = this.stage.stageHeight - 40;
		this.map.set_x(this.map.set_y(20));
		this.map.setSize(w,h);
		this.mapButtons.set_x(this.map.get_x() + w - this.mapButtons.get_width() - 10);
		this.mapButtons.set_y(this.map.get_y() + 10);
		this.status.set_width(w);
		this.status.set_x(this.map.get_x() + 2);
		this.status.set_y(this.map.get_y() + h);
	}
	,onProviderButtonClick: function(event) {
		var button;
		button = js_Boot.__cast(event.target , MapProviderButton);
		this.map.setMapProvider(button.mapProvider);
		button.set_selected(true);
		var _g1 = 0;
		var _g = this.mapButtons.get_numChildren() - 1;
		while(_g1 < _g) {
			var i = _g1++;
			var other;
			other = js_Boot.__cast(this.mapButtons.getChildAt(i) , MapProviderButton);
			if(other != button) other.set_selected(false);
		}
	}
	,onMarkerClick: function(event) {
		var marker;
		marker = js_Boot.__cast(event.get_marker() , SampleMarker);
		this.status.set_text("Marker Clicked:  " + marker.get_title() + " " + Std.string(event.get_location()));
	}
	,onMarkerRollOver: function(event) {
		var marker;
		marker = js_Boot.__cast(event.get_marker() , SampleMarker);
		var pt = this.map.locationPoint(event.get_location(),this);
		this.tooltip.set_x(pt.x);
		this.tooltip.set_y(pt.y);
		this.tooltip.set_label(marker.get_title());
		this.tooltip.set_visible(true);
	}
	,onMarkerRollOut: function(event) {
		this.tooltip.set_visible(false);
	}
	,onPanned: function(event) {
		this.status.set_text("Panned by " + event.panDelta.toString() + ", top left: " + this.map.getExtent().get_northWest().toString() + ", bottom right: " + this.map.getExtent().get_southEast().toString());
	}
	,onStopPan: function(event) {
		this.status.set_text("Stopped panning, top left: " + this.map.getExtent().get_northWest().toString() + ", center: " + Std.string(this.map.getCenterZoom()[0].toString()) + ", bottom right: " + this.map.getExtent().get_southEast().toString() + ", zoom: " + Std.string(this.map.getCenterZoom()[1]));
	}
	,onZoomed: function(event) {
		this.status.set_text("Zoomed by " + event.zoomDelta + ", top left: " + this.map.getExtent().get_northWest().toString() + ", bottom right: " + this.map.getExtent().get_southEast().toString());
	}
	,onStopZoom: function(event) {
		this.status.set_text("Stopped zooming, top left: " + this.map.getExtent().get_northWest().toString() + ", center: " + Std.string(this.map.getCenterZoom()[0].toString()) + ", bottom right: " + this.map.getExtent().get_southEast().toString() + ", zoom: " + Std.string(this.map.getCenterZoom()[1]));
	}
	,onResized: function(event) {
		this.status.set_text("Resized to: " + event.newSize.x + " x " + event.newSize.y);
	}
	,__class__: ModestMapsSample
});
var DocumentClass = function() {
	openfl_Lib.current.addChild(this);
	ModestMapsSample.call(this);
	this.dispatchEvent(new openfl_events_Event("addedToStage",false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = ModestMapsSample;
DocumentClass.prototype = $extend(ModestMapsSample.prototype,{
	__class__: DocumentClass
});
var lime_utils_AssetLibrary = function() {
	this.types = new haxe_ds_StringMap();
	this.sizes = new haxe_ds_StringMap();
	this.preload = new haxe_ds_StringMap();
	this.paths = new haxe_ds_StringMap();
	this.classTypes = new haxe_ds_StringMap();
	this.cachedText = new haxe_ds_StringMap();
	this.cachedImages = new haxe_ds_StringMap();
	this.cachedFonts = new haxe_ds_StringMap();
	this.cachedBytes = new haxe_ds_StringMap();
	this.cachedAudioBuffers = new haxe_ds_StringMap();
	this.onChange = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
};
$hxClasses["lime.utils.AssetLibrary"] = lime_utils_AssetLibrary;
lime_utils_AssetLibrary.__name__ = ["lime","utils","AssetLibrary"];
lime_utils_AssetLibrary.fromManifest = function(manifest) {
	var library = null;
	if(manifest.libraryType == null) library = new lime_utils_AssetLibrary(); else library = Type.createInstance(Type.resolveClass(manifest.libraryType),manifest.libraryArgs);
	library.__fromManifest(manifest);
	return library;
};
lime_utils_AssetLibrary.prototype = {
	onChange: null
	,assetsLoaded: null
	,assetsTotal: null
	,bytesLoaded: null
	,bytesLoadedCache: null
	,bytesTotal: null
	,cachedAudioBuffers: null
	,cachedBytes: null
	,cachedFonts: null
	,cachedImages: null
	,cachedText: null
	,classTypes: null
	,paths: null
	,preload: null
	,promise: null
	,sizes: null
	,types: null
	,pathGroups: null
	,exists: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js_Boot.__cast(type , String); else requestedType = null;
		var assetType = this.types.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) return true;
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") return true;
		}
		return false;
	}
	,getAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.getBytes(id);
		case "FONT":
			return this.getFont(id);
		case "IMAGE":
			return this.getImage(id);
		case "MUSIC":case "SOUND":
			return this.getAudioBuffer(id);
		case "TEXT":
			return this.getText(id);
		case "TEMPLATE":
			throw new js__$Boot_HaxeError("Not sure how to get template: " + id);
			break;
		default:
			throw new js__$Boot_HaxeError("Unknown asset type: " + type);
		}
	}
	,getAudioBuffer: function(id) {
		if(this.cachedAudioBuffers.exists(id)) return this.cachedAudioBuffers.get(id); else if(this.classTypes.exists(id)) return lime_media_AudioBuffer.fromBytes(js_Boot.__cast(Type.createInstance(this.classTypes.get(id),[]) , haxe_io_Bytes)); else return lime_media_AudioBuffer.fromFile(this.paths.get(id));
	}
	,getBytes: function(id) {
		if(this.cachedBytes.exists(id)) return this.cachedBytes.get(id); else if(this.classTypes.exists(id)) return js_Boot.__cast(Type.createInstance(this.classTypes.get(id),[]) , haxe_io_Bytes); else return lime_utils__$Bytes_Bytes_$Impl_$.fromFile(this.paths.get(id));
	}
	,getFont: function(id) {
		if(this.cachedFonts.exists(id)) return this.cachedFonts.get(id); else if(this.classTypes.exists(id)) return js_Boot.__cast(Type.createInstance(this.classTypes.get(id),[]) , lime_text_Font); else return lime_text_Font.fromFile(this.paths.get(id));
	}
	,getImage: function(id) {
		if(this.cachedImages.exists(id)) return this.cachedImages.get(id); else if(this.classTypes.exists(id)) return js_Boot.__cast(Type.createInstance(this.classTypes.get(id),[]) , lime_graphics_Image); else return lime_graphics_Image.fromFile(this.paths.get(id));
	}
	,getText: function(id) {
		if(this.cachedText.exists(id)) return this.cachedText.get(id); else {
			var bytes = this.getBytes(id);
			if(bytes == null) return null; else return bytes.getString(0,bytes.length);
		}
	}
	,isLocal: function(id,type) {
		if(this.classTypes.exists(id)) return true;
		var requestedType;
		if(type != null) requestedType = js_Boot.__cast(type , String); else requestedType = null;
		switch(requestedType) {
		case "IMAGE":
			return this.cachedImages.exists(id);
		case "MUSIC":case "SOUND":
			return this.cachedAudioBuffers.exists(id);
		default:
			return this.cachedBytes.exists(id) || this.cachedText.exists(id);
		}
	}
	,load: function() {
		if(this.promise == null) {
			this.promise = new lime_app_Promise();
			this.bytesLoadedCache = new haxe_ds_StringMap();
			this.assetsLoaded = 0;
			this.assetsTotal = 1;
			var $it0 = this.preload.keys();
			while( $it0.hasNext() ) {
				var id = $it0.next();
				var _g = this.types.get(id);
				if(_g != null) switch(_g) {
				case "BINARY":
					this.assetsTotal++;
					var future = this.loadBytes(id);
					future.onProgress((function(f,id1) {
						return function(a1,a2) {
							f(id1,a1,a2);
						};
					})($bind(this,this.load_onProgress),id));
					future.onError((function(f1,id2) {
						return function(a11) {
							f1(id2,a11);
						};
					})($bind(this,this.load_onError),id));
					future.onComplete((function(f2,id3) {
						return function(a12) {
							f2(id3,a12);
						};
					})($bind(this,this.loadBytes_onComplete),id));
					break;
				case "FONT":
					this.assetsTotal++;
					var future1 = this.loadFont(id);
					future1.onProgress((function(f3,id4) {
						return function(a13,a21) {
							f3(id4,a13,a21);
						};
					})($bind(this,this.load_onProgress),id));
					future1.onError((function(f4,id5) {
						return function(a14) {
							f4(id5,a14);
						};
					})($bind(this,this.load_onError),id));
					future1.onComplete((function(f5,id6) {
						return function(a15) {
							f5(id6,a15);
						};
					})($bind(this,this.loadFont_onComplete),id));
					break;
				case "IMAGE":
					this.assetsTotal++;
					var future2 = this.loadImage(id);
					future2.onProgress((function(f6,id7) {
						return function(a16,a22) {
							f6(id7,a16,a22);
						};
					})($bind(this,this.load_onProgress),id));
					future2.onError((function(f7,id8) {
						return function(a17) {
							f7(id8,a17);
						};
					})($bind(this,this.load_onError),id));
					future2.onComplete((function(f8,id9) {
						return function(a18) {
							f8(id9,a18);
						};
					})($bind(this,this.loadImage_onComplete),id));
					break;
				case "MUSIC":case "SOUND":
					this.assetsTotal++;
					var future3 = this.loadAudioBuffer(id);
					future3.onProgress((function(f9,id10) {
						return function(a19,a23) {
							f9(id10,a19,a23);
						};
					})($bind(this,this.load_onProgress),id));
					future3.onError((function(f10,id11) {
						return function(a110) {
							f10(id11,a110);
						};
					})($bind(this,this.load_onError),id));
					future3.onComplete((function(f11,id12) {
						return function(a111) {
							f11(id12,a111);
						};
					})($bind(this,this.loadAudioBuffer_onComplete),id));
					break;
				case "TEXT":
					this.assetsTotal++;
					var future4 = this.loadText(id);
					future4.onProgress((function(f12,id13) {
						return function(a112,a24) {
							f12(id13,a112,a24);
						};
					})($bind(this,this.load_onProgress),id));
					future4.onError((function(f13,id14) {
						return function(a113) {
							f13(id14,a113);
						};
					})($bind(this,this.load_onError),id));
					future4.onComplete((function(f14,id15) {
						return function(a114) {
							f14(id15,a114);
						};
					})($bind(this,this.loadText_onComplete),id));
					break;
				default:
				} else {
				}
			}
			this.__assetLoaded(null);
		}
		return this.promise.future;
	}
	,loadAudioBuffer: function(id) {
		if(this.cachedAudioBuffers.exists(id)) return lime_app_Future.withValue(this.cachedAudioBuffers.get(id)); else if(this.classTypes.exists(id)) return lime_app_Future.withValue(Type.createInstance(this.classTypes.get(id),[])); else {
			if(this.pathGroups.exists(id)) return lime_media_AudioBuffer.loadFromFiles(this.pathGroups.get(id));
			return lime_media_AudioBuffer.loadFromFile(this.paths.get(id));
		}
	}
	,loadBytes: function(id) {
		if(this.cachedBytes.exists(id)) return lime_app_Future.withValue(this.cachedBytes.get(id)); else if(this.classTypes.exists(id)) return lime_app_Future.withValue(Type.createInstance(this.classTypes.get(id),[])); else return lime_utils__$Bytes_Bytes_$Impl_$.loadFromFile(this.paths.get(id));
	}
	,loadFont: function(id) {
		if(this.cachedFonts.exists(id)) return lime_app_Future.withValue(this.cachedFonts.get(id)); else if(this.classTypes.exists(id)) {
			var font = Type.createInstance(this.classTypes.get(id),[]);
			return lime_text_Font.loadFromName(font.name);
		} else return lime_text_Font.loadFromName(this.paths.get(id));
	}
	,loadImage: function(id) {
		if(this.cachedImages.exists(id)) return lime_app_Future.withValue(this.cachedImages.get(id)); else if(this.classTypes.exists(id)) return lime_app_Future.withValue(Type.createInstance(this.classTypes.get(id),[])); else return lime_graphics_Image.loadFromFile(this.paths.get(id));
	}
	,loadText: function(id) {
		if(this.cachedText.exists(id)) return lime_app_Future.withValue(this.cachedText.get(id)); else return this.loadBytes(id).then(function(bytes) {
			return new lime_app_Future(function() {
				if(bytes == null) return null; else return bytes.getString(0,bytes.length);
			},true);
		});
	}
	,unload: function() {
	}
	,__assetLoaded: function(id) {
		this.assetsLoaded++;
		if(id != null) {
			var size = this.sizes.get(id);
			if(!this.bytesLoadedCache.exists(id)) this.bytesLoaded += size; else {
				var cache = this.bytesLoadedCache.get(id);
				if(cache < size) this.bytesLoaded += size - cache;
			}
			this.bytesLoadedCache.set(id,size);
		}
		if(this.assetsLoaded < this.assetsTotal) this.promise.progress(this.bytesLoaded,this.bytesTotal); else {
			this.promise.progress(this.bytesTotal,this.bytesTotal);
			this.promise.complete(this);
		}
	}
	,__fromManifest: function(manifest) {
		var hasSize = manifest.version >= 2;
		var size;
		this.bytesTotal = 0;
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			if(hasSize) size = asset.size; else size = 100;
			var key = asset.id;
			var value = asset.path;
			this.paths.set(key,value);
			var key1 = asset.id;
			this.sizes.set(key1,size);
			var key2 = asset.id;
			var value1 = asset.type;
			this.types.set(key2,value1);
			if((function($this) {
				var $r;
				var key3 = asset.id;
				$r = $this.preload.exists(key3);
				return $r;
			}(this))) this.bytesTotal += size;
		}
		if(this.pathGroups == null) this.pathGroups = new haxe_ds_StringMap();
		var sounds = new haxe_ds_StringMap();
		var preloadGroups = new haxe_ds_StringMap();
		var type;
		var path;
		var soundName;
		var $it0 = this.types.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			type = this.types.get(id);
			if(type == "MUSIC" || type == "SOUND") {
				path = this.paths.get(id);
				soundName = haxe_io_Path.withoutExtension(path);
				if(!(__map_reserved[soundName] != null?sounds.existsReserved(soundName):sounds.h.hasOwnProperty(soundName))) {
					var value2 = [];
					if(__map_reserved[soundName] != null) sounds.setReserved(soundName,value2); else sounds.h[soundName] = value2;
				}
				(__map_reserved[soundName] != null?sounds.getReserved(soundName):sounds.h[soundName]).push(path);
				var value3;
				value3 = __map_reserved[soundName] != null?sounds.getReserved(soundName):sounds.h[soundName];
				this.pathGroups.set(id,value3);
				if(this.preload.exists(id)) {
					if(__map_reserved[soundName] != null?preloadGroups.existsReserved(soundName):preloadGroups.h.hasOwnProperty(soundName)) this.preload.remove(id); else if(__map_reserved[soundName] != null) preloadGroups.setReserved(soundName,true); else preloadGroups.h[soundName] = true;
				}
			}
		}
	}
	,loadAudioBuffer_onComplete: function(id,audioBuffer) {
		this.cachedAudioBuffers.set(id,audioBuffer);
		this.__assetLoaded(id);
	}
	,loadBytes_onComplete: function(id,bytes) {
		this.cachedBytes.set(id,bytes);
		this.__assetLoaded(id);
	}
	,loadFont_onComplete: function(id,font) {
		this.cachedFonts.set(id,font);
		this.__assetLoaded(id);
	}
	,loadImage_onComplete: function(id,image) {
		this.cachedImages.set(id,image);
		this.__assetLoaded(id);
	}
	,loadText_onComplete: function(id,text) {
		this.cachedText.set(id,text);
		this.__assetLoaded(id);
	}
	,load_onError: function(id,message) {
		this.promise.error("Error loading asset \"" + id + "\"");
	}
	,load_onProgress: function(id,bytesLoaded,bytesTotal) {
		if(bytesLoaded > 0) {
			var size = this.sizes.get(id);
			var percent;
			if(bytesTotal > 0) {
				percent = bytesLoaded / bytesTotal;
				if(percent > 1) percent = 1;
				bytesLoaded = Math.floor(percent * size);
			} else if(bytesLoaded > size) bytesLoaded = size;
			if(this.bytesLoadedCache.exists(id)) {
				var cache = this.bytesLoadedCache.get(id);
				if(bytesLoaded != cache) bytesLoaded += bytesLoaded - cache;
				this.bytesLoadedCache.set(id,bytesLoaded);
				this.promise.progress(this.bytesLoaded,this.bytesTotal);
			} else {
				this.bytesLoadedCache.set(id,bytesLoaded);
				this.bytesLoaded += bytesLoaded;
			}
		}
	}
	,__class__: lime_utils_AssetLibrary
};
var DefaultAssetLibrary = function() {
	lime_utils_AssetLibrary.call(this);
	if(ApplicationMain.config != null && Object.prototype.hasOwnProperty.call(ApplicationMain.config,"assetsPrefix")) this.rootPath = Reflect.field(ApplicationMain.config,"assetsPrefix");
	if(this.rootPath == null) this.rootPath = "";
	var useManifest = true;
	var id;
	if(useManifest) this.loadManifest();
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = lime_utils_AssetLibrary;
DefaultAssetLibrary.prototype = $extend(lime_utils_AssetLibrary.prototype,{
	lastModified: null
	,rootPath: null
	,timer: null
	,loadManifest: function() {
		var bytes = haxe_Resource.getBytes("__ASSET_MANIFEST__");
		var manifest;
		if(bytes != null) this.__fromManifest(lime_utils_AssetManifest.fromBytes(bytes)); else {
			var manifest1 = lime_utils_AssetManifest.fromFile(this.rootPath + "manifest");
			if(manifest1 != null) this.__fromManifest(manifest1); else lime_utils_Log.warn("Could not load asset manifest (bytes was null)",{ fileName : "DefaultAssetLibrary.hx", lineNumber : 125, className : "DefaultAssetLibrary", methodName : "loadManifest"});
		}
	}
	,__fromManifest: function(manifest) {
		lime_utils_AssetLibrary.prototype.__fromManifest.call(this,manifest);
		if(this.rootPath != "") {
			var _g = 0;
			var _g1 = manifest.assets;
			while(_g < _g1.length) {
				var asset = _g1[_g];
				++_g;
				var key = asset.id;
				this.paths.set(key,this.rootPath + Std.string(asset.path));
			}
		}
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,matchedPos: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
$hxClasses["_List.ListIterator"] = _$List_ListIterator;
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	head: null
	,val: null
	,hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
var MapProviderButton = function(label_text,map_provider,selected) {
	if(selected == null) selected = false;
	this._selected = false;
	this.selectedFormat = new openfl_text_TextFormat("Verdana",10,0,true);
	this.normalFormat = new openfl_text_TextFormat("Verdana",10,0,false);
	this.outTransform = new openfl_geom_ColorTransform(1,.9,.6);
	this.overTransform = new openfl_geom_ColorTransform(1,1,1);
	openfl_display_Sprite.call(this);
	this.useHandCursor = true;
	this.mouseChildren = false;
	this.buttonMode = true;
	this.addEventListener("mouseOver",$bind(this,this.onMouseOver));
	this.addEventListener("mouseOut",$bind(this,this.onMouseOut));
	this.mapProvider = map_provider;
	this.set_filters([new openfl_filters_DropShadowFilter(1,45,0,1,3,3,.7,2)]);
	this.get_transform().set_colorTransform(this.outTransform);
	this.label = new openfl_text_TextField();
	this.label.set_selectable(false);
	this.label.set_defaultTextFormat(this.normalFormat);
	this.label.set_text(label_text);
	this.label.set_width(this.label.get_textWidth() + 8);
	this.label.set_height(18);
	this.label.set_x(this.label.set_y(1));
	this.addChild(this.label);
	this.set_selected(selected);
	this.get_graphics().clear();
	this.get_graphics().beginFill(14540253);
	this.get_graphics().drawRoundRect(0,0,this.label.get_width() + 2,18,9,9);
	this.get_graphics().beginFill(16777215);
	this.get_graphics().drawRoundRect(0,0,this.label.get_width(),16,9,9);
	this.get_graphics().beginFill(12303291);
	this.get_graphics().drawRoundRect(2,2,this.label.get_width(),16,9,9);
	this.get_graphics().beginFill(14540253);
	this.get_graphics().drawRoundRect(1,1,this.label.get_width(),16,9,9);
};
$hxClasses["MapProviderButton"] = MapProviderButton;
MapProviderButton.__name__ = ["MapProviderButton"];
MapProviderButton.__super__ = openfl_display_Sprite;
MapProviderButton.prototype = $extend(openfl_display_Sprite.prototype,{
	label: null
	,mapProvider: null
	,overTransform: null
	,outTransform: null
	,normalFormat: null
	,selectedFormat: null
	,_selected: null
	,onMouseOver: function(event) {
		this.get_transform().set_colorTransform(this.overTransform);
	}
	,onMouseOut: function(event) {
		this.get_transform().set_colorTransform(this.outTransform);
	}
	,set_selected: function(s) {
		this._selected = s;
		this.label.setTextFormat(s?this.selectedFormat:this.normalFormat);
		return s;
	}
	,__class__: MapProviderButton
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_selected:"set_selected"})
});
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var SampleMarker = function() {
	openfl_display_Sprite.call(this);
	this.buttonMode = true;
	this.mouseChildren = false;
	this.set_tabEnabled(false);
	this.mouseEnabled = true;
	this.get_graphics().beginFill(16711680,0);
	this.get_graphics().drawCircle(0,0,11);
	this.get_graphics().endFill();
	this.get_graphics().beginFill(16711680);
	this.get_graphics().drawCircle(0,0,10);
	this.get_graphics().endFill();
	this.addEventListener("mouseOver",$bind(this,this.mouseOver));
};
$hxClasses["SampleMarker"] = SampleMarker;
SampleMarker.__name__ = ["SampleMarker"];
SampleMarker.__super__ = openfl_display_Sprite;
SampleMarker.prototype = $extend(openfl_display_Sprite.prototype,{
	_title: null
	,get_title: function() {
		return this._title;
	}
	,set_title: function(s) {
		this._title = s;
		return s;
	}
	,mouseOver: function(e) {
		this.parent.swapChildrenAt(this.parent.getChildIndex(this),this.parent.get_numChildren() - 1);
	}
	,__class__: SampleMarker
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_title:"set_title",get_title:"get_title"})
});
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js_Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Tooltip = function() {
	openfl_display_Sprite.call(this);
	this.background = new openfl_display_Shape();
	this.background.get_graphics().beginFill(16777215);
	this.background.get_graphics().drawRect(0,0,100,20);
	this.background.get_graphics().endFill();
	this.addChild(this.background);
	this.label_txt = new openfl_text_TextField();
	this.label_txt.set_selectable(false);
	this.label_txt.set_defaultTextFormat(new openfl_text_TextFormat("Verdana",10,0));
	this.addChild(this.label_txt);
	this.set_visible(false);
	this.mouseEnabled = false;
};
$hxClasses["Tooltip"] = Tooltip;
Tooltip.__name__ = ["Tooltip"];
Tooltip.__super__ = openfl_display_Sprite;
Tooltip.prototype = $extend(openfl_display_Sprite.prototype,{
	background: null
	,label_txt: null
	,set_label: function(s) {
		this.label_txt.set_autoSize(1);
		this.label_txt.set_width(200);
		this.label_txt.set_multiline(this.label_txt.set_wordWrap(true));
		this.label_txt.set_text(s);
		this.background.set_width(Math.max(100,this.label_txt.get_textWidth() + 10));
		this.background.set_height(this.label_txt.get_textHeight() + 18);
		this.background.set_y(Math.round(-this.background.get_height() - 16));
		this.background.set_x(1);
		this.label_txt.set_y(this.background.get_y() + 2);
		this.get_graphics().clear();
		this.get_graphics().lineStyle(0,0);
		this.get_graphics().beginFill(16777215);
		this.get_graphics().moveTo(0,0);
		this.get_graphics().lineTo(this.background.get_x() - 1,this.background.get_y() + this.background.get_height() + 1);
		this.get_graphics().lineTo(this.background.get_x() - 1,this.background.get_y() - 1);
		this.get_graphics().lineTo(this.background.get_x() + this.background.get_width() + 1,this.background.get_y() - 1);
		this.get_graphics().lineTo(this.background.get_x() + this.background.get_width() + 1,this.background.get_y() + this.background.get_height() + 1);
		this.get_graphics().lineTo(this.background.get_x() + 10,this.background.get_y() + this.background.get_height() + 1);
		this.get_graphics().lineTo(0,0);
		return s;
	}
	,__class__: Tooltip
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_label:"set_label"})
});
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var com_modestmaps_Map = function(width,height,draggable,mapProvider,rest) {
	if(draggable == null) draggable = true;
	if(height == null) height = 240;
	if(width == null) width = 320;
	this.panFraction = 0.333333333;
	this.__draggable = true;
	openfl_display_Sprite.call(this);
	if(mapProvider == null) mapProvider = new com_modestmaps_mapproviders_OpenStreetMapProvider();
	this.__draggable = draggable;
	this.mapProvider = mapProvider;
	this.grid = new com_modestmaps_core_TileGrid(width,height,draggable,mapProvider);
	this.grid.addEventListener("change",$bind(this,this.onExtentChanged));
	this.addChild(this.grid);
	this.setSize(width,height);
	this.markerClip = new com_modestmaps_overlays_MarkerClip(this);
	this.addChild(this.markerClip);
	if(rest != null && rest.length > 0 && ((rest[0] instanceof Array) && rest[0].__enum__ == null)) rest = rest[0];
	if(rest != null && rest.length > 0 && js_Boot.__instanceof(rest[0],com_modestmaps_core_MapExtent)) this.setExtent(js_Boot.__cast(rest[0] , com_modestmaps_core_MapExtent)); else if(rest != null && rest.length > 1 && js_Boot.__instanceof(rest[0],com_modestmaps_geo_Location) && typeof(rest[1]) == "number") this.setCenterZoom(js_Boot.__cast(rest[0] , com_modestmaps_geo_Location),js_Boot.__cast(rest[1] , Float)); else {
		var extent = new com_modestmaps_core_MapExtent(85,-85,180,-180);
		var l1 = mapProvider.coordinateLocation(mapProvider.outerLimits()[0]);
		var l2 = mapProvider.coordinateLocation(mapProvider.outerLimits()[1]);
		if(!isNaN(l1.lat) && (function($this) {
			var $r;
			var f = Math.abs(l1.lat);
			$r = isFinite(f);
			return $r;
		}(this))) extent.north = l1.lat;
		if(!isNaN(l2.lat) && (function($this) {
			var $r;
			var f1 = Math.abs(l2.lat);
			$r = isFinite(f1);
			return $r;
		}(this))) extent.south = l2.lat;
		if(!isNaN(l1.lon) && (function($this) {
			var $r;
			var f2 = Math.abs(l1.lon);
			$r = isFinite(f2);
			return $r;
		}(this))) extent.west = l1.lon;
		if(!isNaN(l2.lon) && (function($this) {
			var $r;
			var f3 = Math.abs(l2.lon);
			$r = isFinite(f3);
			return $r;
		}(this))) extent.east = l2.lon;
		this.setExtent(extent);
	}
};
$hxClasses["com.modestmaps.Map"] = com_modestmaps_Map;
com_modestmaps_Map.__name__ = ["com","modestmaps","Map"];
com_modestmaps_Map.__super__ = openfl_display_Sprite;
com_modestmaps_Map.prototype = $extend(openfl_display_Sprite.prototype,{
	mapWidth: null
	,mapHeight: null
	,__draggable: null
	,grid: null
	,markerClip: null
	,mapProvider: null
	,panFraction: null
	,setExtent: function(extent) {
		this.onExtentChanging();
		this.grid.resetTiles(this.locationsCoordinate([extent.get_northWest(),extent.get_southEast()]));
		this.onExtentChanged();
	}
	,setCenterZoom: function(location,zoom) {
		if(zoom == this.grid.get_zoomLevel()) this.setCenter(location); else {
			this.onExtentChanging();
			zoom = Math.min(Math.max(zoom,this.grid.get_minZoom()),this.grid.get_maxZoom());
			this.grid.resetTiles(this.mapProvider.locationCoordinate(location).zoomTo(zoom));
			this.onExtentChanged();
		}
	}
	,locationsCoordinate: function(locations,fitWidth,fitHeight) {
		if(fitHeight == null) fitHeight = 0;
		if(fitWidth == null) fitWidth = 0;
		if(fitWidth == 0) fitWidth = this.mapWidth;
		if(fitHeight == 0) fitHeight = this.mapHeight;
		var TL = this.mapProvider.locationCoordinate(locations[0].normalize());
		var BR = TL.copy();
		var _g1 = 1;
		var _g = locations.length;
		while(_g1 < _g) {
			var i = _g1++;
			var coordinate = this.mapProvider.locationCoordinate(locations[i].normalize());
			TL.row = Math.min(TL.row,coordinate.row);
			TL.column = Math.min(TL.column,coordinate.column);
			TL.zoom = Math.min(TL.zoom,coordinate.zoom);
			BR.row = Math.max(BR.row,coordinate.row);
			BR.column = Math.max(BR.column,coordinate.column);
			BR.zoom = Math.max(BR.zoom,coordinate.zoom);
		}
		var hFactor = (BR.column - TL.column) / (fitWidth / this.mapProvider.get_tileWidth());
		var hZoomDiff = Math.log(hFactor) / 0.6931471805599453;
		var hPossibleZoom = TL.zoom - Math.ceil(hZoomDiff);
		var vFactor = (BR.row - TL.row) / (fitHeight / this.mapProvider.get_tileHeight());
		var vZoomDiff = Math.log(vFactor) / 0.6931471805599453;
		var vPossibleZoom = TL.zoom - Math.ceil(vZoomDiff);
		var initZoom = Math.min(hPossibleZoom,vPossibleZoom);
		initZoom = Math.min(initZoom,this.mapProvider.outerLimits()[1].zoom);
		initZoom = Math.max(initZoom,this.mapProvider.outerLimits()[0].zoom);
		var centerRow = (TL.row + BR.row) / 2;
		var centerColumn = (TL.column + BR.column) / 2;
		var centerZoom = (TL.zoom + BR.zoom) / 2;
		var centerCoord = new com_modestmaps_core_Coordinate(centerRow,centerColumn,centerZoom).zoomTo(initZoom);
		return centerCoord;
	}
	,getExtent: function() {
		var extent = new com_modestmaps_core_MapExtent();
		if(this.mapProvider == null) throw new js__$Boot_HaxeError(new openfl_errors_Error("WHOAH, no mapProvider in getExtent!"));
		extent.set_northWest(this.mapProvider.coordinateLocation(this.grid.get_topLeftCoordinate()));
		extent.set_southEast(this.mapProvider.coordinateLocation(this.grid.get_bottomRightCoordinate()));
		return extent;
	}
	,getCenterZoom: function() {
		return [this.mapProvider.coordinateLocation(this.grid.get_centerCoordinate()),this.grid.get_zoomLevel()];
	}
	,getCenter: function() {
		return this.mapProvider.coordinateLocation(this.grid.get_centerCoordinate());
	}
	,getZoom: function() {
		return Math.floor(this.grid.get_zoomLevel());
	}
	,setSize: function(w,h) {
		if(w != this.mapWidth || h != this.mapHeight) {
			this.mapWidth = w;
			this.mapHeight = h;
			this.set_scrollRect(new openfl_geom_Rectangle(0,0,this.mapWidth,this.mapHeight));
			this.grid.resizeTo(new openfl_geom_Point(this.mapWidth,this.mapHeight));
			this.dispatchEvent(new com_modestmaps_events_MapEvent("resized",[this.get_size()]));
		}
	}
	,get_size: function() {
		return new openfl_geom_Point(this.mapWidth,this.mapHeight);
	}
	,getWidth: function() {
		return this.mapWidth;
	}
	,getHeight: function() {
		return this.mapHeight;
	}
	,getMapProvider: function() {
		return this.mapProvider;
	}
	,setMapProvider: function(newProvider) {
		var previousGeometry = null;
		if(this.mapProvider != null) previousGeometry = this.mapProvider.geometry();
		var extent = this.getExtent();
		this.mapProvider = newProvider;
		if(this.grid != null) this.grid.setMapProvider(this.mapProvider);
		if(this.mapProvider.geometry() != previousGeometry) this.setExtent(extent);
		this.dispatchEvent(new com_modestmaps_events_MapEvent("mapProviderChanged",[newProvider]));
	}
	,locationPoint: function(location,context) {
		var coord = this.mapProvider.locationCoordinate(location);
		return this.grid.coordinatePoint(coord,context);
	}
	,pointLocation: function(point,context) {
		var coord = this.grid.pointCoordinate(point,context);
		return this.mapProvider.coordinateLocation(coord);
	}
	,panUp: function(event) {
		this.panBy(0,this.mapHeight * this.panFraction);
	}
	,panDown: function(event) {
		this.panBy(0,-this.mapHeight * this.panFraction);
	}
	,panLeft: function(event) {
		this.panBy(this.mapWidth * this.panFraction,0);
	}
	,panRight: function(event) {
		this.panBy(-(this.mapWidth * this.panFraction),0);
	}
	,panBy: function(px,py) {
		if(!this.grid.panning && !this.grid.zooming) {
			this.grid.prepareForPanning();
			var _g = this.grid;
			_g.set_tx(_g.get_tx() + px);
			var _g1 = this.grid;
			_g1.set_ty(_g1.get_ty() + py);
			this.grid.donePanning();
		}
	}
	,zoomInAbout: function(targetPoint,duration) {
		if(duration == null) duration = -1;
		this.zoomByAbout(1,targetPoint,duration);
	}
	,zoomOutAbout: function(targetPoint,duration) {
		if(duration == null) duration = -1;
		this.zoomByAbout(-1,targetPoint,duration);
	}
	,zoomByAbout: function(zoomDelta,targetPoint,duration) {
		if(duration == null) duration = -1;
		if(targetPoint == null) targetPoint = new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2);
		if(this.grid.get_zoomLevel() + zoomDelta < this.grid.get_minZoom()) zoomDelta = this.grid.get_minZoom() - this.grid.get_zoomLevel(); else if(this.grid.get_zoomLevel() + zoomDelta > this.grid.get_maxZoom()) zoomDelta = this.grid.get_maxZoom() - this.grid.get_zoomLevel();
		var sc = Math.pow(2,zoomDelta);
		this.grid.prepareForZooming();
		this.grid.prepareForPanning();
		var m = this.grid.getMatrix();
		m.translate(-targetPoint.x,-targetPoint.y);
		m.scale(sc,sc);
		m.translate(targetPoint.x,targetPoint.y);
		this.grid.setMatrix(m);
		this.grid.doneZooming();
		this.grid.donePanning();
	}
	,panAndZoomIn: function(location,targetPoint) {
		this.panAndZoomBy(2,location,targetPoint);
	}
	,panAndZoomOut: function(location,targetPoint) {
		this.panAndZoomBy(0.5,location,targetPoint);
	}
	,panAndZoomBy: function(sc,location,targetPoint,duration) {
		if(duration == null) duration = -1;
		if(targetPoint == null) targetPoint = new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2);
		var p = this.locationPoint(location);
		this.grid.prepareForZooming();
		this.grid.prepareForPanning();
		var m = this.grid.getMatrix();
		m.translate(-p.x,-p.y);
		m.scale(sc,sc);
		m.translate(targetPoint.x,targetPoint.y);
		this.grid.setMatrix(m);
		this.grid.donePanning();
		this.grid.doneZooming();
	}
	,setCenter: function(location) {
		this.onExtentChanging();
		this.grid.resetTiles(this.mapProvider.locationCoordinate(location).zoomTo(this.grid.get_zoomLevel()));
		this.onExtentChanged();
	}
	,zoomIn: function(event) {
		this.zoomBy(1);
	}
	,zoomOut: function(event) {
		this.zoomBy(-1);
	}
	,zoomBy: function(dir) {
		if(!this.grid.panning) {
			var target;
			if(dir < 0) target = Math.floor(this.grid.get_zoomLevel() + dir); else target = Math.ceil(this.grid.get_zoomLevel() + dir);
			this.grid.set_zoomLevel(Std["int"](Math.min(Math.max(this.grid.get_minZoom(),target),this.grid.get_maxZoom())));
		}
	}
	,putMarker: function(location,marker) {
		this.markerClip.attachMarker(marker,location);
	}
	,onExtentChanged: function(event) {
		if(this.hasEventListener("extentChanged")) this.dispatchEvent(new com_modestmaps_events_MapEvent("extentChanged",[this.getExtent()]));
	}
	,onExtentChanging: function() {
		if(this.hasEventListener("beginExtentChange")) this.dispatchEvent(new com_modestmaps_events_MapEvent("beginExtentChange",[this.getExtent()]));
	}
	,onDoubleClick: function(event) {
		if(!this.__draggable) return;
		var p = this.grid.globalToLocal(new openfl_geom_Point(event.stageX,event.stageY));
		if(event.shiftKey) {
			if(this.grid.get_zoomLevel() > this.grid.get_minZoom()) this.zoomOutAbout(p); else this.panBy(this.mapWidth / 2 - p.x,this.mapHeight / 2 - p.y);
		} else if(event.ctrlKey) this.panAndZoomIn(this.pointLocation(p)); else if(this.grid.get_zoomLevel() < this.grid.get_maxZoom()) this.zoomInAbout(p); else this.panBy(this.mapWidth / 2 - p.x,this.mapHeight / 2 - p.y);
	}
	,__class__: com_modestmaps_Map
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{get_size:"get_size"})
});
var com_modestmaps_TweenMap = function(width,height,draggable,provider,rest) {
	if(draggable == null) draggable = true;
	if(height == null) height = 240;
	if(width == null) width = 320;
	this.enforceToRestore = false;
	this.enableOnCompleteMouseWheeling = false;
	this.mouseWheelingOut = false;
	this.mouseWheelingIn = false;
	this.panAndZoomDuration = 0.3;
	this.zoomDuration = 0.2;
	this.panDuration = 0.5;
	com_modestmaps_Map.call(this,width,height,draggable,provider,rest);
	this.grid.setTileClass(com_modestmaps_core_TweenTile);
};
$hxClasses["com.modestmaps.TweenMap"] = com_modestmaps_TweenMap;
com_modestmaps_TweenMap.__name__ = ["com","modestmaps","TweenMap"];
com_modestmaps_TweenMap.__super__ = com_modestmaps_Map;
com_modestmaps_TweenMap.prototype = $extend(com_modestmaps_Map.prototype,{
	panDuration: null
	,zoomDuration: null
	,panAndZoomDuration: null
	,mouseWheelingIn: null
	,mouseWheelingOut: null
	,enableOnCompleteMouseWheeling: null
	,panBy: function(px,py) {
		if(!this.grid.panning && !this.grid.zooming) {
			this.grid.prepareForPanning();
			motion_Actuate.tween(this.grid,this.panDuration,{ tx : this.grid.get_tx() + px, ty : this.grid.get_ty() + py}).ease(motion_easing_Quad.get_easeOut()).onComplete(($_=this.grid,$bind($_,$_.donePanning)));
		}
	}
	,enforceToRestore: null
	,tweenToMatrix: function(m,duration) {
		this.grid.prepareForZooming();
		this.grid.prepareForPanning();
		this.enforceToRestore = this.grid.enforceBoundsEnabled;
		this.grid.enforceBoundsEnabled = false;
		this.grid.enforceBoundsOnMatrix(m);
		motion_Actuate.tween(this.grid,duration,{ a : m.a, b : m.b, c : m.c, d : m.d, tx : m.tx, ty : m.ty}).ease(motion_easing_Linear.get_easeNone()).onComplete($bind(this,this.panAndZoomComplete));
	}
	,panAndZoomComplete: function() {
		this.grid.enforceBoundsEnabled = this.enforceToRestore;
		this.grid.donePanning();
		this.grid.doneZooming();
	}
	,panAndZoomBy: function(sc,location,targetPoint,duration) {
		if(duration == null) duration = -1;
		if(duration < 0) duration = this.panAndZoomDuration;
		if(targetPoint == null) targetPoint = new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2);
		var p = this.locationPoint(location);
		var constrainedDelta = Math.log(sc) / 0.6931471805599453;
		if(this.grid.get_zoomLevel() + constrainedDelta < this.grid.get_minZoom()) constrainedDelta = this.grid.get_minZoom() - this.grid.get_zoomLevel(); else if(this.grid.get_zoomLevel() + constrainedDelta > this.grid.get_maxZoom()) constrainedDelta = this.grid.get_maxZoom() - this.grid.get_zoomLevel();
		var preciseZoomDelta = constrainedDelta + (Math.round(this.grid.get_zoomLevel() + constrainedDelta) - (this.grid.get_zoomLevel() + constrainedDelta));
		sc = Math.pow(2,preciseZoomDelta);
		var m = this.grid.getMatrix();
		m.translate(-p.x,-p.y);
		m.scale(sc,sc);
		m.translate(targetPoint.x,targetPoint.y);
		this.tweenToMatrix(m,duration);
	}
	,zoomByAbout: function(zoomDelta,targetPoint,duration) {
		if(duration == null) duration = -1;
		if(duration < 0) duration = this.panAndZoomDuration;
		if(targetPoint == null) targetPoint = new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2);
		var constrainedDelta = zoomDelta;
		if(this.grid.get_zoomLevel() + constrainedDelta < this.grid.get_minZoom()) constrainedDelta = this.grid.get_minZoom() - this.grid.get_zoomLevel(); else if(this.grid.get_zoomLevel() + constrainedDelta > this.grid.get_maxZoom()) constrainedDelta = this.grid.get_maxZoom() - this.grid.get_zoomLevel();
		var preciseZoomDelta = constrainedDelta + (Math.round(this.grid.get_zoomLevel() + constrainedDelta) - (this.grid.get_zoomLevel() + constrainedDelta));
		var sc = Math.pow(2,preciseZoomDelta);
		var m = this.grid.getMatrix();
		m.translate(-targetPoint.x,-targetPoint.y);
		m.scale(sc,sc);
		m.translate(targetPoint.x,targetPoint.y);
		this.tweenToMatrix(m,duration);
	}
	,zoomBy: function(dir) {
		if(!this.grid.panning) {
			var target;
			if(dir < 0) target = Math.floor(this.grid.get_zoomLevel() + dir); else target = Math.ceil(this.grid.get_zoomLevel() + dir);
			target = Math.max(this.grid.get_minZoom(),Math.min(this.grid.get_maxZoom(),target));
			this.grid.prepareForZooming();
			motion_Actuate.tween(this.grid,this.zoomDuration,{ zoomLevel : target}).ease(motion_easing_Quad.get_easeOut()).onComplete(($_=this.grid,$bind($_,$_.doneZooming)));
		}
	}
	,onMouseWheel: function(event) {
		if(!this.__draggable || this.grid.panning) return;
		motion_Actuate.stop(this.grid,null,false,false);
		this.enableOnCompleteMouseWheeling = false;
		var sc = 0;
		var delta = event.delta;
		if(delta >= 100 || delta <= -100) delta = delta / 33 | 0;
		if(delta < 0) {
			if(this.grid.get_zoomLevel() > this.grid.get_minZoom()) {
				this.mouseWheelingOut = true;
				this.mouseWheelingIn = false;
				sc = Math.max(0.5,1.0 + delta / 20.0);
			}
		} else if(event.delta > 0) {
			if(this.grid.get_zoomLevel() < this.grid.get_maxZoom()) {
				this.mouseWheelingIn = true;
				this.mouseWheelingOut = false;
				sc = Math.min(2.0,1.0 + delta / 20.0);
			}
		}
		if(sc != 0) {
			var p = this.grid.globalToLocal(new openfl_geom_Point(event.stageX,event.stageY));
			var m = this.grid.getMatrix();
			m.translate(-p.x,-p.y);
			m.scale(sc,sc);
			m.translate(p.x,p.y);
			this.grid.setMatrix(m);
		}
		event.updateAfterEvent();
		this.enableOnCompleteMouseWheeling = true;
		motion_Actuate.timer(0.1).onComplete($bind(this,this.doneMouseWheeling));
	}
	,doneMouseWheeling: function() {
		if(this.enableOnCompleteMouseWheeling) {
			var p = this.grid.globalToLocal(new openfl_geom_Point(this.stage.get_mouseX(),this.stage.get_mouseY()));
			if(this.mouseWheelingIn) this.zoomByAbout(Math.ceil(this.grid.get_zoomLevel()) - this.grid.get_zoomLevel(),p,this.panAndZoomDuration); else if(this.mouseWheelingOut) this.zoomByAbout(Math.floor(this.grid.get_zoomLevel()) - this.grid.get_zoomLevel(),p,this.panAndZoomDuration); else this.zoomByAbout(Math.round(this.grid.get_zoomLevel()) - this.grid.get_zoomLevel(),p,this.panAndZoomDuration);
			this.mouseWheelingOut = false;
			this.mouseWheelingIn = false;
			this.enableOnCompleteMouseWheeling = false;
		}
	}
	,__class__: com_modestmaps_TweenMap
});
var com_modestmaps_core_Coordinate = function(row,column,zoom) {
	this.row = row;
	this.column = column;
	this.zoom = zoom;
};
$hxClasses["com.modestmaps.core.Coordinate"] = com_modestmaps_core_Coordinate;
com_modestmaps_core_Coordinate.__name__ = ["com","modestmaps","core","Coordinate"];
com_modestmaps_core_Coordinate.prototype = {
	row: null
	,column: null
	,zoom: null
	,copy: function() {
		return new com_modestmaps_core_Coordinate(this.row,this.column,this.zoom);
	}
	,zoomTo: function(destination) {
		return new com_modestmaps_core_Coordinate(this.row * Math.pow(2,destination - this.zoom),this.column * Math.pow(2,destination - this.zoom),destination);
	}
	,equalTo: function(coord) {
		return coord != null && coord.row == this.row && coord.column == this.column && coord.zoom == this.zoom;
	}
	,__class__: com_modestmaps_core_Coordinate
};
var com_modestmaps_core_MapExtent = function(n,s,e,w) {
	if(w == null) w = 0;
	if(e == null) e = 0;
	if(s == null) s = 0;
	if(n == null) n = 0;
	this.north = Math.max(n,s);
	this.south = Math.min(n,s);
	this.east = Math.max(e,w);
	this.west = Math.min(e,w);
};
$hxClasses["com.modestmaps.core.MapExtent"] = com_modestmaps_core_MapExtent;
com_modestmaps_core_MapExtent.__name__ = ["com","modestmaps","core","MapExtent"];
com_modestmaps_core_MapExtent.prototype = {
	north: null
	,south: null
	,east: null
	,west: null
	,get_northWest: function() {
		return new com_modestmaps_geo_Location(this.north,this.west);
	}
	,get_southEast: function() {
		return new com_modestmaps_geo_Location(this.south,this.east);
	}
	,set_northWest: function(nw) {
		this.north = nw.lat;
		this.west = nw.lon;
		return nw;
	}
	,set_southEast: function(se) {
		this.south = se.lat;
		this.east = se.lon;
		return se;
	}
	,__class__: com_modestmaps_core_MapExtent
	,__properties__: {set_southEast:"set_southEast",get_southEast:"get_southEast",set_northWest:"set_northWest",get_northWest:"get_northWest"}
};
var com_modestmaps_core_Tile = function() { };
$hxClasses["com.modestmaps.core.Tile"] = com_modestmaps_core_Tile;
com_modestmaps_core_Tile.__name__ = ["com","modestmaps","core","Tile"];
com_modestmaps_core_Tile.__super__ = openfl_display_Sprite;
com_modestmaps_core_Tile.prototype = $extend(openfl_display_Sprite.prototype,{
	zoom: null
	,row: null
	,column: null
	,init: function(column,row,zoom) {
		this.zoom = zoom;
		this.row = row;
		this.column = column;
		this.hide();
	}
	,destroy: function() {
		while(this.get_numChildren() > 0) {
			var child = this.removeChildAt(0);
			if(js_Boot.__instanceof(child,openfl_display_Loader)) (js_Boot.__cast(child , openfl_display_Loader)).unload();
		}
		this.get_graphics().clear();
	}
	,isShowing: function() {
		return this.get_alpha() == 1.0;
	}
	,showNow: function() {
		this.set_alpha(1.0);
	}
	,show: function() {
		this.set_alpha(1.0);
	}
	,hide: function() {
		this.set_alpha(0.0);
	}
	,paintError: function(w,h) {
		if(h == null) h = 256;
		if(w == null) w = 256;
		var size = 32;
		var padding = 4;
		var weight = 4;
		this.get_graphics().clear();
		this.get_graphics().beginFill(8421504);
		this.get_graphics().drawRect(0,0,w,h);
		this.get_graphics().moveTo(0,0);
		this.get_graphics().beginFill(4473924,1);
		this.get_graphics().lineTo(size,0);
		this.get_graphics().lineTo(size,size);
		this.get_graphics().lineTo(0,size);
		this.get_graphics().lineTo(0,0);
		this.get_graphics().endFill();
		this.get_graphics().moveTo(weight + padding,padding);
		this.get_graphics().beginFill(8947848,1);
		this.get_graphics().lineTo(padding,weight + padding);
		this.get_graphics().lineTo(size - weight - padding,size - padding);
		this.get_graphics().lineTo(size - padding,size - weight - padding);
		this.get_graphics().lineTo(weight + padding,padding);
		this.get_graphics().endFill();
		this.get_graphics().moveTo(size - weight - padding,padding);
		this.get_graphics().beginFill(8947848,1);
		this.get_graphics().lineTo(size - padding,weight + padding);
		this.get_graphics().lineTo(weight + padding,size - padding);
		this.get_graphics().lineTo(padding,size - weight - padding);
		this.get_graphics().lineTo(size - weight - padding,padding);
		this.get_graphics().endFill();
	}
	,__class__: com_modestmaps_core_Tile
});
var com_modestmaps_core_TileGrid = function(w,h,draggable,provider) {
	this.tempCoord = new com_modestmaps_core_Coordinate(0,0,0);
	this.matrixChanged = false;
	this.startZoom = -1;
	this.blankCount = 0;
	this.visibleTiles = [];
	this.recentlySeen = [];
	this.roundScalesEnabled = com_modestmaps_core_TileGrid.DEFAULT_ROUND_SCALES;
	this.enforceBoundsEnabled = com_modestmaps_core_TileGrid.DEFAULT_ENFORCE_BOUNDS;
	this.tileBuffer = 1;
	this.maxTilesToKeep = 256;
	this.maxParentLoad = 0;
	this.maxChildSearch = 1;
	this.maxParentSearch = 5;
	this.isRendering = false;
	openfl_display_Sprite.call(this);
	this.doubleClickEnabled = true;
	this.draggable = draggable;
	if(js_Boot.__instanceof(provider,com_modestmaps_core_painter_ITilePainterOverride)) this.tilePainter = (js_Boot.__cast(provider , com_modestmaps_core_painter_ITilePainterOverride)).getTilePainter(); else this.tilePainter = new com_modestmaps_core_painter_TilePainter(this,provider,this.maxParentLoad == 0?$bind(this,this.centerDistanceCompare):$bind(this,this.zoomThenCenterCompare));
	this.tilePainter.addEventListener("progress",$bind(this,this.onProgress),false,0,true);
	this.tilePainter.addEventListener("alLTilesLoaded",$bind(this,this.onAllTilesLoaded),false,0,true);
	this.tilePainter.addEventListener("beginTileLoading",$bind(this,this.onBeginTileLoading),false,0,true);
	this.limits = provider.outerLimits();
	this._tileWidth = provider.get_tileWidth();
	this._tileHeight = provider.get_tileHeight();
	this.calculateBounds();
	this.mapWidth = w;
	this.mapHeight = h;
	this.set_scrollRect(new openfl_geom_Rectangle(0,0,this.mapWidth,this.mapHeight));
	this.debugField = new com_modestmaps_core_DebugField();
	this.debugField.set_x(this.mapWidth - this.debugField.get_width() - 15);
	this.debugField.set_y(this.mapHeight - this.debugField.get_height() - 15);
	this.well = new openfl_display_Sprite();
	this.well.set_name("well");
	this.well.doubleClickEnabled = true;
	this.well.mouseEnabled = true;
	this.well.mouseChildren = false;
	this.addChild(this.well);
	this.worldMatrix = new openfl_geom_Matrix();
	this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
};
$hxClasses["com.modestmaps.core.TileGrid"] = com_modestmaps_core_TileGrid;
com_modestmaps_core_TileGrid.__name__ = ["com","modestmaps","core","TileGrid"];
com_modestmaps_core_TileGrid.zoomCompare = function(t1,t2) {
	if(t1.zoom == t2.zoom) return 0; else if(t1.zoom > t2.zoom) return -1; else return 1;
};
com_modestmaps_core_TileGrid.__super__ = openfl_display_Sprite;
com_modestmaps_core_TileGrid.prototype = $extend(openfl_display_Sprite.prototype,{
	isRendering: null
	,maxParentSearch: null
	,maxChildSearch: null
	,maxParentLoad: null
	,maxTilesToKeep: null
	,tileBuffer: null
	,enforceBoundsEnabled: null
	,roundScalesEnabled: null
	,_minZoom: null
	,_maxZoom: null
	,minTx: null
	,maxTx: null
	,minTy: null
	,maxTy: null
	,_tileWidth: null
	,_tileHeight: null
	,worldMatrix: null
	,_invertedMatrix: null
	,_topLeftCoordinate: null
	,_bottomRightCoordinate: null
	,_topRightCoordinate: null
	,_bottomLeftCoordinate: null
	,_centerCoordinate: null
	,well: null
	,tilePainter: null
	,limits: null
	,recentlySeen: null
	,visibleTiles: null
	,blankCount: null
	,debugField: null
	,_currentTileZoom: null
	,previousTileZoom: null
	,centerRow: null
	,centerColumn: null
	,startPan: null
	,panning: null
	,pmouse: null
	,startZoom: null
	,zooming: null
	,mapWidth: null
	,mapHeight: null
	,draggable: null
	,_dirty: null
	,matrixChanged: null
	,onAddedToStage: function(event) {
		if(this.draggable) this.addEventListener("mouseDown",$bind(this,this.mousePressed),true);
		this.addEventListener("render",$bind(this,this.onRender));
		this.addEventListener("enterFrame",$bind(this,this.onEnterFrame));
		this.addEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
		this.removeEventListener("addedToStage",$bind(this,this.onAddedToStage));
		this.set_dirty(true);
		this.onRender();
	}
	,onRemovedFromStage: function(event) {
		if(this.hasEventListener("mouseDown")) this.removeEventListener("mouseDown",$bind(this,this.mousePressed),true);
		this.removeEventListener("render",$bind(this,this.onRender));
		this.removeEventListener("enterFrame",$bind(this,this.onEnterFrame));
		this.removeEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
		this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
	}
	,setTileClass: function(tileClass) {
		this.clearEverything();
		this.tilePainter.setTileClass(tileClass);
	}
	,onEnterFrame: function(event) {
		if(this.debugField.parent != null) {
			this.debugField.update(this,this.blankCount,this.recentlySeen.length,this.tilePainter);
			this.debugField.set_x(this.mapWidth - this.debugField.get_width() - 15);
			this.debugField.set_y(this.mapHeight - this.debugField.get_height() - 15);
		}
	}
	,onRendered: function() {
		this.dispatchEvent(new com_modestmaps_events_MapEvent("rendered",null));
	}
	,onPanned: function() {
		var pt = this.coordinatePoint(this.startPan);
		this.dispatchEvent(new com_modestmaps_events_MapEvent("panned",[pt.subtract(new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2))]));
	}
	,onZoomed: function() {
		var zoomEvent = new com_modestmaps_events_MapEvent("zoomedBy",[this.get_zoomLevel() - this.startZoom]);
		zoomEvent.zoomLevel = this.get_zoomLevel();
		this.dispatchEvent(zoomEvent);
	}
	,onChanged: function() {
		this.dispatchEvent(new openfl_events_Event("change",false,false));
	}
	,onBeginTileLoading: function(event) {
		this.dispatchEvent(event);
	}
	,onProgress: function(event) {
		this.dispatchEvent(event);
	}
	,onAllTilesLoaded: function(event) {
		this.dispatchEvent(event);
		this.set_dirty(true);
	}
	,onRender: function(event) {
		if(!this.get_dirty() || this.stage == null || this.isRendering) {
			this.onRendered();
			return;
		}
		this.isRendering = true;
		var boundsEnforced = this.enforceBounds();
		if(this.zooming || this.panning) {
			if(this.panning) this.onPanned();
			if(this.zooming) this.onZoomed();
		} else if(boundsEnforced) this.onChanged(); else if(this.matrixChanged) {
			this.matrixChanged = false;
			this.onChanged();
		}
		var newZoom = Std["int"](Math.min(this.get_maxZoom(),Math.max(this.get_minZoom(),Math.round(this.get_zoomLevel()))));
		if(this.get_currentTileZoom() != newZoom) this.previousTileZoom = this.get_currentTileZoom();
		this._currentTileZoom = newZoom;
		var tlC = this.get_topLeftCoordinate().zoomTo(this.get_currentTileZoom());
		var brC = this.get_bottomRightCoordinate().zoomTo(this.get_currentTileZoom());
		var trC = this.get_topRightCoordinate().zoomTo(this.get_currentTileZoom());
		var blC = this.get_bottomLeftCoordinate().zoomTo(this.get_currentTileZoom());
		var minCol = Math.floor(Math.min(Math.min(tlC.column,brC.column),Math.min(trC.column,blC.column))) - this.tileBuffer;
		var maxCol = Math.floor(Math.max(Math.max(tlC.column,brC.column),Math.max(trC.column,blC.column))) + this.tileBuffer;
		var minRow = Math.floor(Math.min(Math.min(tlC.row,brC.row),Math.min(trC.row,blC.row))) - this.tileBuffer;
		var maxRow = Math.floor(Math.max(Math.max(tlC.row,brC.row),Math.max(trC.row,blC.row))) + this.tileBuffer;
		this.repopulateVisibleTiles(minCol,maxCol,minRow,maxRow);
		var _g = 0;
		var _g1 = this.visibleTiles;
		while(_g < _g1.length) {
			var visibleTile = _g1[_g];
			++_g;
			if(this.tilePainter.isPainted(visibleTile)) {
				var ri;
				var x = visibleTile.get_name();
				ri = HxOverrides.indexOf(this.recentlySeen,x,0);
				if(ri >= 0) this.recentlySeen.splice(ri,1);
				this.recentlySeen.push(visibleTile.get_name());
			}
		}
		var i = this.well.get_numChildren() - 1;
		while(i >= 0) {
			var wellTile;
			wellTile = js_Boot.__cast(this.well.getChildAt(i) , com_modestmaps_core_Tile);
			if(HxOverrides.indexOf(this.visibleTiles,wellTile,0) < 0) {
				this.well.removeChild(wellTile);
				wellTile.hide();
				this.tilePainter.cancelPainting(wellTile);
			}
			i--;
		}
		this.positionTiles(tlC.column,tlC.row);
		var maxRecentlySeen = Std["int"](Math.max(this.visibleTiles.length,this.maxTilesToKeep));
		if(this.recentlySeen.length > maxRecentlySeen) {
			this.recentlySeen = this.recentlySeen.slice(this.recentlySeen.length - maxRecentlySeen,this.recentlySeen.length);
			this.tilePainter.retainKeysInCache(this.recentlySeen);
		}
		var center = this.get_centerCoordinate().zoomTo(this.get_currentTileZoom());
		this.centerRow = center.row;
		this.centerColumn = center.column;
		this.onRendered();
		this.set_dirty(false);
		this.isRendering = false;
	}
	,repopulateVisibleTiles: function(minCol,maxCol,minRow,maxRow) {
		this.visibleTiles = [];
		this.blankCount = 0;
		var coord = new com_modestmaps_core_Coordinate(0,0,0);
		var searchedParentKeys = new haxe_ds_StringMap();
		var _g1 = minCol;
		var _g = maxCol + 1;
		while(_g1 < _g) {
			var col = _g1++;
			var _g3 = minRow;
			var _g2 = maxRow + 1;
			while(_g3 < _g2) {
				var row = _g3++;
				var key = this.tileKey(col,row,this.get_currentTileZoom());
				var tile;
				try {
					tile = js_Boot.__cast(this.well.getChildByName(key) , com_modestmaps_core_Tile);
				} catch( e ) {
					if (e instanceof js__$Boot_HaxeError) e = e.val;
					tile = null;
				}
				if(tile == null) {
					tile = this.tilePainter.getTileFromCache(key);
					if(tile == null) {
						coord.row = row;
						coord.column = col;
						coord.zoom = this.get_currentTileZoom();
						tile = this.tilePainter.createAndPopulateTile(coord,key);
					} else tile.show();
					this.well.addChild(tile);
				}
				this.visibleTiles.push(tile);
				var tileReady = tile.isShowing() && !this.tilePainter.isPainting(tile);
				if(!tileReady) {
					var foundParent = false;
					var foundChildren = 0;
					if(this.get_currentTileZoom() > this.previousTileZoom) {
						if(this.maxParentSearch > 0 && this.get_currentTileZoom() > this.get_minZoom()) {
							var firstParentKey = this.parentKey(col,row,this.get_currentTileZoom(),this.get_currentTileZoom() - 1);
							if(!(__map_reserved[firstParentKey] != null?searchedParentKeys.existsReserved(firstParentKey):searchedParentKeys.h.hasOwnProperty(firstParentKey))) {
								if(__map_reserved[firstParentKey] != null) searchedParentKeys.setReserved(firstParentKey,true); else searchedParentKeys.h[firstParentKey] = true;
								if(this.ensureVisible(firstParentKey) != null) foundParent = true;
								if(!foundParent && this.get_currentTileZoom() - 1 < this.maxParentLoad) {
									var firstParentCoord = this.parentCoord(col,row,this.get_currentTileZoom(),this.get_currentTileZoom() - 1);
									this.visibleTiles.push(this.requestLoad(firstParentCoord[0],firstParentCoord[1],this.get_currentTileZoom() - 1));
								}
							}
						}
					} else if(!foundParent && this.maxChildSearch > 0 && this.get_currentTileZoom() < this.get_maxZoom()) {
						var _g5 = this.get_currentTileZoom() + 1;
						var _g4 = Std["int"](Math.min(this.get_maxZoom(),this.get_currentTileZoom() + this.maxChildSearch));
						while(_g5 < _g4) {
							var czoom = _g5++;
							var ckeys = this.childKeys(col,row,this.get_currentTileZoom(),czoom);
							var _g6 = 0;
							while(_g6 < ckeys.length) {
								var ckey = ckeys[_g6];
								++_g6;
								if(this.ensureVisible(ckey) != null) foundChildren++;
							}
							if(foundChildren == ckeys.length) break;
						}
					}
					var stillNeedsAnImage = !foundParent && foundChildren < 4;
					if(stillNeedsAnImage && this.maxParentSearch > 1 && this.get_currentTileZoom() > this.get_minZoom()) {
						var startZoomSearch = this.get_currentTileZoom() - 1;
						if(this.get_currentTileZoom() > this.previousTileZoom) startZoomSearch -= 1;
						var endZoomSearch = Std["int"](Math.max(this.get_minZoom(),this.get_currentTileZoom() - this.maxParentSearch));
						var pzoom = startZoomSearch;
						while(pzoom >= endZoomSearch) {
							var pkey = this.parentKey(col,row,this.get_currentTileZoom(),pzoom);
							if(!(__map_reserved[pkey] != null?searchedParentKeys.existsReserved(pkey):searchedParentKeys.h.hasOwnProperty(pkey))) {
								if(__map_reserved[pkey] != null) searchedParentKeys.setReserved(pkey,true); else searchedParentKeys.h[pkey] = true;
								if(this.ensureVisible(pkey) != null) {
									stillNeedsAnImage = false;
									break;
								}
								if(this.get_currentTileZoom() - pzoom < this.maxParentLoad) {
									var pcoord = this.parentCoord(col,row,this.get_currentTileZoom(),pzoom);
									this.visibleTiles.push(this.requestLoad(pcoord[0],pcoord[1],pzoom));
								}
							} else break;
							pzoom--;
						}
					}
					if(stillNeedsAnImage) this.blankCount++;
				}
			}
		}
	}
	,tilePainted: function(tile) {
		if(this.get_currentTileZoom() - tile.zoom <= this.maxParentLoad) tile.show(); else tile.showNow();
	}
	,getVisibleTiles: function() {
		return this.visibleTiles;
	}
	,positionTiles: function(realMinCol,realMinRow) {
		this.visibleTiles.sort($bind(this,this.distanceFromCurrentZoomCompare));
		var scaleFactors;
		var length = this.get_maxZoom() + 1;
		var this1;
		this1 = new Array(length);
		scaleFactors = this1;
		var tileScales;
		var length1 = this.get_maxZoom() + 1;
		var this2;
		this2 = new Array(length1);
		tileScales = this2;
		var _g1 = 0;
		var _g = this.get_maxZoom() + 1;
		while(_g1 < _g) {
			var z = _g1++;
			var val = Math.pow(2.0,this.get_currentTileZoom() - z);
			scaleFactors[z] = val;
			if(this.roundScalesEnabled) {
				var val1 = Math.ceil(Math.pow(2,this.get_zoomLevel() - z) * this.get_tileWidth()) / this.get_tileWidth();
				tileScales[z] = val1;
			} else {
				var val2 = Math.pow(2,this.get_zoomLevel() - z);
				tileScales[z] = val2;
			}
		}
		var px = this.worldMatrix.deltaTransformPoint(new openfl_geom_Point(0,1));
		var tileAngleDegrees = 180 / Math.PI * Math.atan2(px.y,px.x) - 90;
		var _g2 = 0;
		var _g11 = this.visibleTiles;
		while(_g2 < _g11.length) {
			var tile = _g11[_g2];
			++_g2;
			this.well.setChildIndex(tile,this.well.get_numChildren() - 1);
			tile.set_scaleX(tile.set_scaleY(tileScales[tile.zoom]));
			var pt = this.coordinatePoint(new com_modestmaps_core_Coordinate(tile.row,tile.column,tile.zoom));
			tile.set_x(pt.x);
			tile.set_y(pt.y);
			tile.set_rotation(tileAngleDegrees);
		}
	}
	,zoomThenCenterCompare: function(t1,t2) {
		if(t1.zoom == t2.zoom) return this.centerDistanceCompare(t1,t2);
		if(t1.zoom < t2.zoom) return -1; else if(t1.zoom > t2.zoom) return 1; else return 0;
	}
	,centerDistanceCompare: function(t1,t2) {
		if(t1.zoom == t2.zoom && t1.zoom == this.get_currentTileZoom() && t2.zoom == this.get_currentTileZoom()) {
			var d1 = Std["int"](Math.pow(t1.row + 0.5 - this.centerRow,2) + Math.pow(t1.column + 0.5 - this.centerColumn,2));
			var d2 = Std["int"](Math.pow(t2.row + 0.5 - this.centerRow,2) + Math.pow(t2.column + 0.5 - this.centerColumn,2));
			if(d1 < d2) return -1; else if(d1 > d2) return 1; else return 0;
		}
		if(Math.abs(t1.zoom - this.get_currentTileZoom()) < Math.abs(t2.zoom - this.get_currentTileZoom())) return -1; else return 1;
	}
	,distanceFromCurrentZoomCompare: function(t1,t2) {
		var d1 = Std["int"](Math.abs(t1.zoom - this.get_currentTileZoom()));
		var d2 = Std["int"](Math.abs(t2.zoom - this.get_currentTileZoom()));
		if(d1 < d2) return 1; else if(d1 > d2) return -1; else return com_modestmaps_core_TileGrid.zoomCompare(t2,t1);
	}
	,ensureVisible: function(key) {
		var tile = this.tilePainter.getTileFromCache(key);
		if(tile != null) {
			if(!this.well.contains(tile)) {
				this.well.addChildAt(tile,0);
				this.tilePainted(tile);
			}
			if(HxOverrides.indexOf(this.visibleTiles,tile,0) < 0) this.visibleTiles.push(tile);
			return tile;
		}
		return null;
	}
	,tempCoord: null
	,requestLoad: function(col,row,zoom) {
		var key = this.tileKey(col,row,zoom);
		var tile;
		tile = js_Boot.__cast(this.well.getChildByName(key) , com_modestmaps_core_Tile);
		if(tile == null) {
			this.tempCoord.row = row;
			this.tempCoord.column = col;
			this.tempCoord.zoom = zoom;
			tile = this.tilePainter.createAndPopulateTile(this.tempCoord,key);
			this.well.addChild(tile);
		}
		return tile;
	}
	,tileKey: function(col,row,zoom) {
		return com_modestmaps_core_TileGrid.zoomLetter[zoom] + ":" + col + ":" + row;
	}
	,parentKey: function(col,row,zoom,parentZoom) {
		var scaleFactor = Math.pow(2.0,zoom - parentZoom);
		var pcol = Math.floor(col / scaleFactor);
		var prow = Math.floor(row / scaleFactor);
		return this.tileKey(pcol,prow,parentZoom);
	}
	,parentCoord: function(col,row,zoom,parentZoom) {
		var scaleFactor = Math.pow(2.0,zoom - parentZoom);
		var pcol = Math.floor(col / scaleFactor);
		var prow = Math.floor(row / scaleFactor);
		return [pcol,prow];
	}
	,childKeys: function(col,row,zoom,childZoom) {
		var scaleFactor = Math.pow(2,zoom - childZoom);
		var rowColSpan = Std["int"](Math.pow(2,childZoom - zoom));
		var keys = [];
		var _g1 = col / scaleFactor | 0;
		var _g = (col / scaleFactor | 0) + rowColSpan;
		while(_g1 < _g) {
			var ccol = _g1++;
			var _g3 = row / scaleFactor | 0;
			var _g2 = row / scaleFactor + rowColSpan | 0;
			while(_g3 < _g2) {
				var crow = _g3++;
				keys.push(this.tileKey(ccol,crow,childZoom));
			}
		}
		return keys;
	}
	,mousePressed: function(event) {
		this.prepareForPanning(true);
		this.pmouse = new openfl_geom_Point(event.stageX,event.stageY);
		this.stage.addEventListener("mouseMove",$bind(this,this.mouseDragged));
		this.stage.addEventListener("mouseUp",$bind(this,this.mouseReleased));
		this.stage.addEventListener("mouseLeave",$bind(this,this.mouseReleased));
	}
	,mouseReleased: function(event) {
		this.stage.removeEventListener("mouseMove",$bind(this,this.mouseDragged));
		this.stage.removeEventListener("mouseUp",$bind(this,this.mouseReleased));
		this.stage.removeEventListener("mouseLeave",$bind(this,this.mouseReleased));
		this.donePanning();
		this.set_dirty(true);
		if(js_Boot.__instanceof(event,openfl_events_MouseEvent)) (js_Boot.__cast(event , openfl_events_MouseEvent)).updateAfterEvent(); else if(event.type == "mouseLeave") this.onRender();
	}
	,mouseDragged: function(event) {
		var mousePoint = new openfl_geom_Point(event.stageX,event.stageY);
		var _g = this;
		_g.set_tx(_g.get_tx() + (mousePoint.x - this.pmouse.x));
		var _g1 = this;
		_g1.set_ty(_g1.get_ty() + (mousePoint.y - this.pmouse.y));
		this.pmouse = mousePoint;
		this.set_dirty(true);
		event.updateAfterEvent();
	}
	,get_invertedMatrix: function() {
		if(this._invertedMatrix == null) {
			this._invertedMatrix = this.worldMatrix.clone();
			this._invertedMatrix.invert();
			this._invertedMatrix.scale(this.get_scale() / this.get_tileWidth(),this.get_scale() / this.get_tileHeight());
		}
		return this._invertedMatrix;
	}
	,get_minZoom: function() {
		return this._minZoom;
	}
	,get_maxZoom: function() {
		return this._maxZoom;
	}
	,get_tileWidth: function() {
		return this._tileWidth;
	}
	,get_tileHeight: function() {
		return this._tileHeight;
	}
	,get_currentTileZoom: function() {
		return this._currentTileZoom;
	}
	,get_topLeftCoordinate: function() {
		if(this._topLeftCoordinate == null) {
			var tl = this.get_invertedMatrix().transformPoint(new openfl_geom_Point());
			this._topLeftCoordinate = new com_modestmaps_core_Coordinate(tl.y,tl.x,this.get_zoomLevel());
		}
		return this._topLeftCoordinate;
	}
	,get_bottomRightCoordinate: function() {
		if(this._bottomRightCoordinate == null) {
			var br = this.get_invertedMatrix().transformPoint(new openfl_geom_Point(this.mapWidth,this.mapHeight));
			this._bottomRightCoordinate = new com_modestmaps_core_Coordinate(br.y,br.x,this.get_zoomLevel());
		}
		return this._bottomRightCoordinate;
	}
	,get_topRightCoordinate: function() {
		if(this._topRightCoordinate == null) {
			var tr = this.get_invertedMatrix().transformPoint(new openfl_geom_Point(this.mapWidth,0));
			this._topRightCoordinate = new com_modestmaps_core_Coordinate(tr.y,tr.x,this.get_zoomLevel());
		}
		return this._topRightCoordinate;
	}
	,get_bottomLeftCoordinate: function() {
		if(this._bottomLeftCoordinate == null) {
			var bl = this.get_invertedMatrix().transformPoint(new openfl_geom_Point(0,this.mapHeight));
			this._bottomLeftCoordinate = new com_modestmaps_core_Coordinate(bl.y,bl.x,this.get_zoomLevel());
		}
		return this._bottomLeftCoordinate;
	}
	,get_centerCoordinate: function() {
		if(this._centerCoordinate == null) {
			var c = this.get_invertedMatrix().transformPoint(new openfl_geom_Point(this.mapWidth / 2,this.mapHeight / 2));
			this._centerCoordinate = new com_modestmaps_core_Coordinate(c.y,c.x,this.get_zoomLevel());
		}
		return this._centerCoordinate;
	}
	,coordinatePoint: function(coord,context) {
		var zoomFactor = Math.pow(2,this.get_zoomLevel() - coord.zoom) * this.get_tileWidth() / this.get_scale();
		var zoomedColumn = coord.column * zoomFactor;
		var zoomedRow = coord.row * zoomFactor;
		var screenPoint = this.worldMatrix.transformPoint(new openfl_geom_Point(zoomedColumn,zoomedRow));
		if(context != null && context != this) {
			screenPoint = this.parent.localToGlobal(screenPoint);
			screenPoint = context.globalToLocal(screenPoint);
		}
		return screenPoint;
	}
	,pointCoordinate: function(point,context) {
		if(context != null && context != this) {
			point = context.localToGlobal(point);
			point = this.globalToLocal(point);
		}
		var p = this.get_invertedMatrix().transformPoint(point);
		return new com_modestmaps_core_Coordinate(p.y,p.x,this.get_zoomLevel());
	}
	,prepareForPanning: function(dragging) {
		if(dragging == null) dragging = false;
		if(this.panning) this.donePanning();
		if(!dragging && this.draggable) {
			if(this.hasEventListener("mouseDown")) this.removeEventListener("mouseDown",$bind(this,this.mousePressed),true);
		}
		this.startPan = this.get_centerCoordinate().copy();
		this.panning = true;
		this.onStartPanning();
	}
	,onStartPanning: function() {
		this.dispatchEvent(new com_modestmaps_events_MapEvent("startPanning",null));
	}
	,donePanning: function() {
		if(this.draggable) {
			if(!this.hasEventListener("mouseDown")) this.addEventListener("mouseDown",$bind(this,this.mousePressed),true);
		}
		this.startPan = null;
		this.panning = false;
		this.onStopPanning();
	}
	,onStopPanning: function() {
		this.dispatchEvent(new com_modestmaps_events_MapEvent("stopPanning",null));
	}
	,prepareForZooming: function() {
		if(this.startZoom >= 0) this.doneZooming();
		this.startZoom = this.get_zoomLevel();
		this.zooming = true;
		this.onStartZooming();
	}
	,onStartZooming: function() {
		this.dispatchEvent(new com_modestmaps_events_MapEvent("startZooming",[this.startZoom]));
	}
	,doneZooming: function() {
		this.onStopZooming();
		this.startZoom = -1;
		this.zooming = false;
	}
	,onStopZooming: function() {
		var event = new com_modestmaps_events_MapEvent("stopZooming",[this.get_zoomLevel()]);
		event.zoomDelta = this.get_zoomLevel() - this.startZoom;
		this.dispatchEvent(event);
	}
	,resetTiles: function(coord) {
		var sc = Math.pow(2,coord.zoom);
		this.worldMatrix.identity();
		this.worldMatrix.scale(sc,sc);
		this.worldMatrix.translate(this.mapWidth / 2,this.mapHeight / 2);
		this.worldMatrix.translate(-this.get_tileWidth() * coord.column,-this.get_tileHeight() * coord.row);
		this.set_dirty(true);
	}
	,get_zoomLevel: function() {
		return Math.log(this.get_scale()) / 0.6931471805599453;
	}
	,set_zoomLevel: function(n) {
		if(this.get_zoomLevel() != n) this.set_scale(Math.pow(2,n));
		return n;
	}
	,get_scale: function() {
		return Math.sqrt(this.worldMatrix.a * this.worldMatrix.a + this.worldMatrix.b * this.worldMatrix.b);
	}
	,set_scale: function(n) {
		if(this.get_scale() != n) {
			var needsStop = false;
			if(!this.zooming) {
				this.prepareForZooming();
				needsStop = true;
			}
			var sc = n / this.get_scale();
			this.worldMatrix.translate(-this.mapWidth / 2,-this.mapHeight / 2);
			this.worldMatrix.scale(sc,sc);
			this.worldMatrix.translate(this.mapWidth / 2,this.mapHeight / 2);
			this.set_dirty(true);
			if(needsStop) this.doneZooming();
		}
		return n;
	}
	,resizeTo: function(p) {
		if(this.mapWidth != p.x || this.mapHeight != p.y) {
			var dx = p.x - this.mapWidth;
			var dy = p.y - this.mapHeight;
			var _g = this;
			_g.set_tx(_g.get_tx() + dx / 2);
			var _g1 = this;
			_g1.set_ty(_g1.get_ty() + dy / 2);
			this.mapWidth = p.x;
			this.mapHeight = p.y;
			this.set_scrollRect(new openfl_geom_Rectangle(0,0,this.mapWidth,this.mapHeight));
			this.debugField.set_x(this.mapWidth - this.debugField.get_width() - 15);
			this.debugField.set_y(this.mapHeight - this.debugField.get_height() - 15);
			this.set_dirty(true);
			this.onRender();
		}
		this.well.get_graphics().clear();
		this.well.get_graphics().beginFill(0,0);
		this.well.get_graphics().drawRect(0,0,this.mapWidth,this.mapHeight);
		this.well.get_graphics().endFill();
	}
	,setMapProvider: function(provider) {
		if(js_Boot.__instanceof(provider,com_modestmaps_core_painter_ITilePainterOverride)) this.tilePainter = (js_Boot.__cast(provider , com_modestmaps_core_painter_ITilePainterOverride)).getTilePainter(); else this.tilePainter = new com_modestmaps_core_painter_TilePainter(this,provider,this.maxParentLoad == 0?$bind(this,this.centerDistanceCompare):$bind(this,this.zoomThenCenterCompare));
		this.tilePainter.addEventListener("progress",$bind(this,this.onProgress),false,0,true);
		this.tilePainter.addEventListener("alLTilesLoaded",$bind(this,this.onAllTilesLoaded),false,0,true);
		this.tilePainter.addEventListener("beginTileLoading",$bind(this,this.onBeginTileLoading),false,0,true);
		this.limits = provider.outerLimits();
		this._tileWidth = provider.get_tileWidth();
		this._tileHeight = provider.get_tileHeight();
		this.calculateBounds();
		this.clearEverything();
	}
	,clearEverything: function(event) {
		while(this.well.get_numChildren() > 0) this.well.removeChildAt(0);
		this.tilePainter.reset();
		this.recentlySeen = [];
		this.set_dirty(true);
	}
	,calculateBounds: function() {
		var tl = this.limits[0];
		var br = this.limits[1];
		this._maxZoom = Std["int"](Math.max(tl.zoom,br.zoom));
		this._minZoom = Std["int"](Math.min(tl.zoom,br.zoom));
		tl = tl.zoomTo(0);
		br = br.zoomTo(0);
		this.minTx = tl.column * this.get_tileWidth();
		this.maxTx = br.column * this.get_tileWidth();
		this.minTy = tl.row * this.get_tileHeight();
		this.maxTy = br.row * this.get_tileHeight();
	}
	,enforceBoundsOnMatrix: function(matrix) {
		var touched = false;
		var matrixScale = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
		var matrixZoomLevel = Math.log(matrixScale) / 0.6931471805599453;
		if(matrixZoomLevel < this.get_minZoom() || matrixZoomLevel > this.get_maxZoom()) {
			var oldScale = matrixScale;
			matrixZoomLevel = Math.max(this.get_minZoom(),Math.min(matrixZoomLevel,this.get_maxZoom()));
			matrixScale = Math.pow(2,matrixZoomLevel);
			var scaleFactor = matrixScale / oldScale;
			matrix.scale(scaleFactor,scaleFactor);
			touched = true;
		}
		var inverse = matrix.clone();
		inverse.invert();
		inverse.scale(matrixScale / this.get_tileWidth(),matrixScale / this.get_tileHeight());
		var topLeftPoint = inverse.transformPoint(new openfl_geom_Point());
		var topLeft = new com_modestmaps_core_Coordinate(topLeftPoint.y,topLeftPoint.x,matrixZoomLevel).zoomTo(0);
		var bottomRightPoint = inverse.transformPoint(new openfl_geom_Point(this.mapWidth,this.mapHeight));
		var bottomRight = new com_modestmaps_core_Coordinate(bottomRightPoint.y,bottomRightPoint.x,matrixZoomLevel).zoomTo(0);
		var leftX = topLeft.column * this.get_tileWidth();
		var rightX = bottomRight.column * this.get_tileWidth();
		if(rightX - leftX > this.maxTx - this.minTx) {
			matrix.tx = (this.mapWidth - (this.minTx + this.maxTx) * matrixScale) / 2;
			touched = true;
		} else if(leftX < this.minTx) {
			matrix.tx += (leftX - this.minTx) * matrixScale;
			touched = true;
		} else if(rightX > this.maxTx) {
			matrix.tx += (rightX - this.maxTx) * matrixScale;
			touched = true;
		}
		var upY = topLeft.row * this.get_tileHeight();
		var downY = bottomRight.row * this.get_tileHeight();
		if(downY - upY > this.maxTy - this.minTy) {
			matrix.ty = (this.mapHeight - (this.minTy + this.maxTy) * matrixScale) / 2;
			touched = true;
		} else if(upY < this.minTy) {
			matrix.ty += (upY - this.minTy) * matrixScale;
			touched = true;
		} else if(downY > this.maxTy) {
			matrix.ty += (downY - this.maxTy) * matrixScale;
			touched = true;
		}
		return touched;
	}
	,enforceBounds: function() {
		if(!this.enforceBoundsEnabled) return false;
		var touched = this.enforceBoundsOnMatrix(this.worldMatrix);
		if(touched) {
			this._invertedMatrix = null;
			this._topLeftCoordinate = null;
			this._bottomRightCoordinate = null;
			this._topRightCoordinate = null;
			this._bottomLeftCoordinate = null;
			this._centerCoordinate = null;
		}
		return touched;
	}
	,set_dirty: function(d) {
		this._dirty = d;
		if(d) {
			if(this.stage != null) this.stage.invalidate();
			this._invertedMatrix = null;
			this._topLeftCoordinate = null;
			this._bottomRightCoordinate = null;
			this._topRightCoordinate = null;
			this._bottomLeftCoordinate = null;
			this._centerCoordinate = null;
		}
		return d;
	}
	,get_dirty: function() {
		return this._dirty;
	}
	,getMatrix: function() {
		return this.worldMatrix.clone();
	}
	,setMatrix: function(m) {
		this.worldMatrix = m;
		this.matrixChanged = true;
		this.set_dirty(true);
	}
	,get_tx: function() {
		return this.worldMatrix.tx;
	}
	,get_ty: function() {
		return this.worldMatrix.ty;
	}
	,set_tx: function(n) {
		this.worldMatrix.tx = n;
		this.set_dirty(true);
		return n;
	}
	,set_ty: function(n) {
		this.worldMatrix.ty = n;
		this.set_dirty(true);
		return n;
	}
	,__class__: com_modestmaps_core_TileGrid
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_ty:"set_ty",get_ty:"get_ty",set_tx:"set_tx",get_tx:"get_tx",set_dirty:"set_dirty",get_dirty:"get_dirty",set_scale:"set_scale",get_scale:"get_scale",set_zoomLevel:"set_zoomLevel",get_zoomLevel:"get_zoomLevel",get_centerCoordinate:"get_centerCoordinate",get_bottomLeftCoordinate:"get_bottomLeftCoordinate",get_topRightCoordinate:"get_topRightCoordinate",get_bottomRightCoordinate:"get_bottomRightCoordinate",get_topLeftCoordinate:"get_topLeftCoordinate",get_currentTileZoom:"get_currentTileZoom",get_tileHeight:"get_tileHeight",get_tileWidth:"get_tileWidth",get_maxZoom:"get_maxZoom",get_minZoom:"get_minZoom",get_invertedMatrix:"get_invertedMatrix"})
});
var openfl_text_TextField = function() {
	openfl_display_InteractiveObject.call(this);
	this.__caretIndex = -1;
	this.__displayAsPassword = false;
	this.__graphics = new openfl_display_Graphics(this);
	this.__textEngine = new openfl__$internal_text_TextEngine(this);
	this.__layoutDirty = true;
	this.__offsetX = 0;
	this.__offsetY = 0;
	this.__tabEnabled = true;
	this.__mouseWheelEnabled = true;
	this.__text = "";
	if(openfl_text_TextField.__defaultTextFormat == null) {
		openfl_text_TextField.__defaultTextFormat = new openfl_text_TextFormat("Times New Roman",12,0,false,false,false,"","",3,0,0,0,0);
		openfl_text_TextField.__defaultTextFormat.blockIndent = 0;
		openfl_text_TextField.__defaultTextFormat.bullet = false;
		openfl_text_TextField.__defaultTextFormat.letterSpacing = 0;
		openfl_text_TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = openfl_text_TextField.__defaultTextFormat.clone();
	var x = new openfl__$internal_text_TextFormatRange(this.__textFormat,0,0);
	this.__textEngine.textFormatRanges.push(x);
	this.addEventListener("mouseDown",$bind(this,this.this_onMouseDown));
};
$hxClasses["openfl.text.TextField"] = openfl_text_TextField;
openfl_text_TextField.__name__ = ["openfl","text","TextField"];
openfl_text_TextField.__super__ = openfl_display_InteractiveObject;
openfl_text_TextField.prototype = $extend(openfl_display_InteractiveObject.prototype,{
	__caretIndex: null
	,__cursorTimer: null
	,__dirty: null
	,__displayAsPassword: null
	,__inputEnabled: null
	,__isHTML: null
	,__layoutDirty: null
	,__mouseWheelEnabled: null
	,__offsetX: null
	,__offsetY: null
	,__selectionIndex: null
	,__showCursor: null
	,__symbol: null
	,__text: null
	,__textEngine: null
	,__textFormat: null
	,__div: null
	,getCharBoundaries: function(charIndex) {
		if(charIndex < 0 || charIndex > this.__text.length - 1) return null;
		this.__updateLayout();
		var _g = 0;
		var _g1 = this.__textEngine.layoutGroups;
		while(_g < _g1.get_length()) {
			var group = _g1.get(_g);
			++_g;
			if(charIndex >= group.startIndex && charIndex <= group.endIndex) {
				var x = group.offsetX;
				var _g3 = 0;
				var _g2 = charIndex - group.startIndex;
				while(_g3 < _g2) {
					var i = _g3++;
					x += group.advances[i];
				}
				return new openfl_geom_Rectangle(x,group.offsetY,group.advances[charIndex - group.startIndex],group.ascent + group.descent);
			}
		}
		return null;
	}
	,replaceSelectedText: function(value) {
		if(value == "" && this.__selectionIndex == this.__caretIndex) return;
		var startIndex;
		if(this.__caretIndex < this.__selectionIndex) startIndex = this.__caretIndex; else startIndex = this.__selectionIndex;
		var endIndex;
		if(this.__caretIndex > this.__selectionIndex) endIndex = this.__caretIndex; else endIndex = this.__selectionIndex;
		this.replaceText(startIndex,endIndex,value);
		var i = startIndex + value.length;
		this.setSelection(i,i);
	}
	,replaceText: function(beginIndex,endIndex,newText) {
		if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__text.length || newText == null) return;
		this.__updateText(this.__text.substring(0,beginIndex) + newText + this.__text.substring(endIndex));
		var offset = newText.length - (endIndex - beginIndex);
		var i = 0;
		var range;
		while(i < this.__textEngine.textFormatRanges.get_length()) {
			range = this.__textEngine.textFormatRanges.get(i);
			if(range.start <= beginIndex && range.end >= endIndex) {
				range.end += offset;
				i++;
			} else if(range.start >= beginIndex && range.end <= endIndex) {
				if(i > 0) this.__textEngine.textFormatRanges.splice(i,1); else {
					range.start = 0;
					range.end = 0;
				}
				offset -= range.end - range.start;
			} else if(range.start > beginIndex && range.start <= endIndex) {
				range.start += offset;
				i++;
			} else i++;
		}
		this.__dirty = true;
		this.__layoutDirty = true;
	}
	,setSelection: function(beginIndex,endIndex) {
		this.__selectionIndex = beginIndex;
		this.__caretIndex = endIndex;
	}
	,setTextFormat: function(format,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		var max = this.get_text().length;
		var range;
		if(beginIndex < 0) {
			beginIndex = 0;
			endIndex = max;
		} else if(endIndex < 0) endIndex = beginIndex + 1;
		if(endIndex > max) endIndex = max;
		if(endIndex <= beginIndex) return;
		if(beginIndex == 0 && endIndex == max) {
			if(format.font != null) this.__textFormat.font = format.font;
			if(format.size != null) this.__textFormat.size = format.size;
			if(format.color != null) this.__textFormat.color = format.color;
			if(format.bold != null) this.__textFormat.bold = format.bold;
			if(format.italic != null) this.__textFormat.italic = format.italic;
			if(format.underline != null) this.__textFormat.underline = format.underline;
			if(format.url != null) this.__textFormat.url = format.url;
			if(format.target != null) this.__textFormat.target = format.target;
			if(format.align != null) this.__textFormat.align = format.align;
			if(format.leftMargin != null) this.__textFormat.leftMargin = format.leftMargin;
			if(format.rightMargin != null) this.__textFormat.rightMargin = format.rightMargin;
			if(format.indent != null) this.__textFormat.indent = format.indent;
			if(format.leading != null) this.__textFormat.leading = format.leading;
			if(format.blockIndent != null) this.__textFormat.blockIndent = format.blockIndent;
			if(format.bullet != null) this.__textFormat.bullet = format.bullet;
			if(format.kerning != null) this.__textFormat.kerning = format.kerning;
			if(format.letterSpacing != null) this.__textFormat.letterSpacing = format.letterSpacing;
			if(format.tabStops != null) this.__textFormat.tabStops = format.tabStops;
			if(this.__textEngine.textFormatRanges.get_length() > 1) {
				var len = this.__textEngine.textFormatRanges.get_length() - 1;
				this.__textEngine.textFormatRanges.splice(1,len);
				range = this.__textEngine.textFormatRanges.get(0);
				range.format = this.__textFormat;
				range.start = 0;
				range.end = max;
			}
		} else {
			var index = this.__textEngine.textFormatRanges.get_length();
			var searchIndex;
			while(index > 0) {
				index--;
				range = this.__textEngine.textFormatRanges.get(index);
				if(range.start == beginIndex && range.end == endIndex) {
					range.format = format.clone();
					return;
				}
				if(range.start > beginIndex && range.end < endIndex) {
					searchIndex = this.__textEngine.textFormatRanges.indexOf(range,0);
					if(searchIndex > -1) this.__textEngine.textFormatRanges.splice(searchIndex,1);
				}
			}
			var prevRange = null;
			var nextRange = null;
			var _g1 = 0;
			var _g = this.__textEngine.textFormatRanges.get_length();
			while(_g1 < _g) {
				var i = _g1++;
				range = this.__textEngine.textFormatRanges.get(i);
				if(beginIndex > 0) {
					if(prevRange == null && range.end >= beginIndex) prevRange = range;
				}
				if(endIndex < max) {
					if(range.start <= endIndex) nextRange = range;
				}
			}
			if(nextRange == prevRange) {
				nextRange = new openfl__$internal_text_TextFormatRange(nextRange.format.clone(),nextRange.start,nextRange.end);
				this.__textEngine.textFormatRanges.push(nextRange);
			}
			if(prevRange != null) {
				prevRange.end = beginIndex - 1;
				if(prevRange.end <= prevRange.start) {
					searchIndex = this.__textEngine.textFormatRanges.indexOf(prevRange,0);
					if(searchIndex > -1) this.__textEngine.textFormatRanges.splice(searchIndex,1);
					prevRange = null;
				}
			}
			if(nextRange != null) {
				nextRange.start = endIndex + 1;
				if(nextRange.start >= nextRange.end) {
					searchIndex = this.__textEngine.textFormatRanges.indexOf(nextRange,0);
					if(searchIndex > -1) this.__textEngine.textFormatRanges.splice(searchIndex,1);
					nextRange = null;
				}
			}
			var x = new openfl__$internal_text_TextFormatRange(format.clone(),beginIndex,endIndex);
			this.__textEngine.textFormatRanges.push(x);
			this.__textEngine.textFormatRanges.sort(function(a,b) {
				if(a.start < b.start || a.end < b.end) return -1; else if(a.start > b.start || a.end > b.end) return 1;
				return 0;
			});
		}
		this.__dirty = true;
		this.__layoutDirty = true;
	}
	,__updateTransforms: function(overrideTransform) {
		openfl_display_InteractiveObject.prototype.__updateTransforms.call(this,overrideTransform);
		this.__renderTransform.__translateTransformed(this.__offsetX,this.__offsetY);
	}
	,__fromSymbol: function(swf,symbol) {
		this.__symbol = symbol;
		this.set_width(symbol.width);
		this.set_height(symbol.height);
		this.__offsetX = symbol.x;
		this.__offsetY = symbol.y;
		this.set_multiline(symbol.multiline);
		this.set_wordWrap(symbol.wordWrap);
		this.set_displayAsPassword(symbol.password);
		if(symbol.border) {
			this.set_border(true);
			this.set_background(true);
		}
		this.set_selectable(symbol.selectable);
		if(symbol.input) this.set_type(1);
		var format = new openfl_text_TextFormat();
		if(symbol.color != null) format.color = symbol.color & 16777215;
		format.size = Math.round(symbol.fontHeight / 20);
		var font = swf.symbols.h[symbol.fontID];
		if(font != null) {
		}
		format.font = symbol.fontName;
		var found = false;
		var _g = format.font;
		if(_g == null) found = true; else switch(_g) {
		case "_sans":case "_serif":case "_typewriter":case "":
			found = true;
			break;
		default:
			var _g1 = 0;
			var _g2 = openfl_text_Font.enumerateFonts();
			while(_g1 < _g2.length) {
				var font1 = _g2[_g1];
				++_g1;
				if(font1.name == format.font) {
					found = true;
					break;
				}
			}
		}
		if(found) this.set_embedFonts(true); else lime_utils_Log.warn("Could not find required font \"" + format.font + "\", it has not been embedded",{ fileName : "TextField.hx", lineNumber : 834, className : "openfl.text.TextField", methodName : "__fromSymbol"});
		if(symbol.align != null) {
			if(symbol.align == "center") format.align = 0; else if(symbol.align == "right") format.align = 4; else if(symbol.align == "justify") format.align = 2;
			format.leftMargin = symbol.leftMargin / 20 | 0;
			format.rightMargin = symbol.rightMargin / 20 | 0;
			format.indent = symbol.indent / 20 | 0;
			format.leading = symbol.leading / 20 | 0;
			if(this.get_embedFonts()) format.leading += 4;
		}
		this.set_defaultTextFormat(format);
		if(symbol.text != null) {
			if(symbol.html) this.set_htmlText(symbol.text); else this.set_text(symbol.text);
		}
	}
	,__getAttributeMatch: function(regex) {
		if(regex.matched(2) != null) return regex.matched(2); else return regex.matched(3);
	}
	,__getBounds: function(rect,matrix) {
		this.__updateLayout();
		var bounds = openfl_geom_Rectangle.__temp;
		bounds.copyFrom(this.__textEngine.bounds);
		bounds.x += this.__offsetX;
		bounds.y += this.__offsetY;
		bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getCursor: function() {
		if(this.__textEngine.selectable) return lime_ui_MouseCursor.TEXT; else return null;
	}
	,__getPosition: function(x,y) {
		this.__updateLayout();
		x += this.get_scrollH();
		var _g1 = 0;
		var _g = this.get_scrollV() - 1;
		while(_g1 < _g) {
			var i = _g1++;
			y += this.__textEngine.lineHeights.get(i);
		}
		if(y > this.__textEngine.textHeight) y = this.__textEngine.textHeight;
		var firstGroup = true;
		var group;
		var nextGroup;
		var _g11 = 0;
		var _g2 = this.__textEngine.layoutGroups.get_length();
		while(_g11 < _g2) {
			var i1 = _g11++;
			group = this.__textEngine.layoutGroups.get(i1);
			if(i1 < this.__textEngine.layoutGroups.get_length() - 1) nextGroup = this.__textEngine.layoutGroups.get(i1 + 1); else nextGroup = null;
			if(firstGroup) {
				if(y < group.offsetY) y = group.offsetY;
				if(x < group.offsetX) x = group.offsetX;
				firstGroup = false;
			}
			if(y >= group.offsetY && y <= group.offsetY + group.height || nextGroup == null) {
				if(x >= group.offsetX && x <= group.offsetX + group.width || (nextGroup == null || nextGroup.lineIndex != group.lineIndex)) {
					var advance = 0.0;
					var _g3 = 0;
					var _g21 = group.advances.length;
					while(_g3 < _g21) {
						var i2 = _g3++;
						advance += group.advances[i2];
						if(x <= group.offsetX + advance) {
							if(x <= group.offsetX + (advance - group.advances[i2]) + group.advances[i2] / 2) return group.startIndex + i2; else if(group.startIndex + i2 < group.endIndex) return group.startIndex + i2 + 1; else return group.endIndex;
						}
					}
					return group.endIndex;
				}
			}
		}
		return this.__text.length;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getRenderTransform();
		this.__updateLayout();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) {
			if(stack != null) stack.push(hitObject);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		this.__getRenderTransform();
		this.__updateLayout();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl__$internal_renderer_cairo_CairoTextField.render(this,renderSession,this.__worldTransform);
		openfl_display_InteractiveObject.prototype.__renderCairo.call(this,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		openfl__$internal_renderer_canvas_CanvasTextField.render(this,renderSession,this.__worldTransform);
		if(this.__textEngine.antiAliasType == 0 && this.__textEngine.gridFitType == 1) {
			var smoothingEnabled = renderSession.context.imageSmoothingEnabled;
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = false;
				renderSession.context.msImageSmoothingEnabled = false;
				renderSession.context.imageSmoothingEnabled = false;
			}
			openfl_display_InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = true;
				renderSession.context.msImageSmoothingEnabled = true;
				renderSession.context.imageSmoothingEnabled = true;
			}
		} else openfl_display_InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		openfl__$internal_renderer_dom_DOMTextField.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		openfl__$internal_renderer_canvas_CanvasTextField.render(this,renderSession,this.__worldTransform);
		openfl_display_InteractiveObject.prototype.__renderGL.call(this,renderSession);
	}
	,__startCursorTimer: function() {
		this.__cursorTimer = haxe_Timer.delay($bind(this,this.__startCursorTimer),600);
		this.__showCursor = !this.__showCursor;
		this.__dirty = true;
	}
	,__startTextInput: function() {
		if(this.__caretIndex < 0) {
			this.__caretIndex = this.__text.length;
			this.__selectionIndex = this.__caretIndex;
		}
		if(this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(true);
			if(!this.__inputEnabled) {
				this.stage.window.backend.setEnableTextEvents(true);
				if(!this.stage.window.onTextInput.has($bind(this,this.window_onTextInput))) {
					this.stage.window.onTextInput.add($bind(this,this.window_onTextInput));
					this.stage.window.onKeyDown.add($bind(this,this.window_onKeyDown));
				}
				this.__inputEnabled = true;
				this.__startCursorTimer();
			}
		}
	}
	,__stopCursorTimer: function() {
		if(this.__cursorTimer != null) {
			this.__cursorTimer.stop();
			this.__cursorTimer = null;
		}
		if(this.__showCursor) {
			this.__showCursor = false;
			this.__dirty = true;
		}
	}
	,__stopTextInput: function() {
		if(this.__inputEnabled && this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(false);
			this.stage.window.onTextInput.remove($bind(this,this.window_onTextInput));
			this.stage.window.onKeyDown.remove($bind(this,this.window_onKeyDown));
			this.__inputEnabled = false;
			this.__stopCursorTimer();
		}
	}
	,__updateLayout: function() {
		if(this.__layoutDirty) {
			var cacheWidth = this.__textEngine.width;
			var cacheHeight = this.__textEngine.height;
			this.__textEngine.update();
			if(this.__textEngine.autoSize != 2) {
				if(this.__textEngine.width != cacheWidth) {
					var _g = this.__textEngine.autoSize;
					switch(_g) {
					case 3:
						var _g1 = this;
						_g1.set_x(_g1.get_x() + (cacheWidth - this.__textEngine.width));
						break;
					case 0:
						var _g11 = this;
						_g11.set_x(_g11.get_x() + (cacheWidth - this.__textEngine.width) / 2);
						break;
					default:
					}
				}
				this.__textEngine.getBounds();
			}
			this.__layoutDirty = false;
		}
	}
	,__updateText: function(value) {
		this.__text = value;
		if(this.__text.length < this.__caretIndex) this.__selectionIndex = this.__caretIndex = this.__text.length;
		if(!this.__displayAsPassword) this.__textEngine.text = this.__text; else {
			var length = this.get_text().length;
			var mask = "";
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				mask += "*";
			}
			this.__textEngine.text = mask;
		}
	}
	,set_autoSize: function(value) {
		if(value != this.__textEngine.autoSize) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.autoSize = value;
	}
	,set_background: function(value) {
		if(value != this.__textEngine.background) this.__dirty = true;
		return this.__textEngine.background = value;
	}
	,set_backgroundColor: function(value) {
		if(value != this.__textEngine.backgroundColor) this.__dirty = true;
		return this.__textEngine.backgroundColor = value;
	}
	,set_border: function(value) {
		if(value != this.__textEngine.border) this.__dirty = true;
		return this.__textEngine.border = value;
	}
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		this.__layoutDirty = true;
		this.__dirty = true;
		return value;
	}
	,set_displayAsPassword: function(value) {
		if(value != this.__displayAsPassword) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__displayAsPassword = value;
			this.__updateText(this.__text);
		}
		return value;
	}
	,get_embedFonts: function() {
		return this.__textEngine.embedFonts;
	}
	,set_embedFonts: function(value) {
		return this.__textEngine.embedFonts = value;
	}
	,get_height: function() {
		this.__updateLayout();
		return this.__textEngine.height * Math.abs(this.get_scaleY());
	}
	,set_height: function(value) {
		if(value != this.__textEngine.height) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__textEngine.height = value;
		}
		return this.__textEngine.height * Math.abs(this.get_scaleY());
	}
	,get_htmlText: function() {
		return this.__text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.__isHTML = true;
		if(this.__div == null) {
			value = openfl_text_TextField.__regexBreakTag.replace(value,"\n");
			value = openfl_text_TextField.__regexEntities[0].replace(value,"\"");
			value = openfl_text_TextField.__regexEntities[1].replace(value,"'");
			value = openfl_text_TextField.__regexEntities[2].replace(value,"&");
			var segments = value.split("<");
			if(segments.length == 1) {
				value = openfl_text_TextField.__regexHTMLTag.replace(value,"");
				if(this.__textEngine.textFormatRanges.get_length() > 1) {
					var len = this.__textEngine.textFormatRanges.get_length() - 1;
					this.__textEngine.textFormatRanges.splice(1,len);
				}
				value = openfl_text_TextField.__regexEntities[3].replace(value,"<");
				value = openfl_text_TextField.__regexEntities[4].replace(value,">");
				var range = this.__textEngine.textFormatRanges.get(0);
				range.format = this.__textFormat;
				range.start = 0;
				range.end = value.length;
				this.__updateText(value);
				return value;
			} else {
				var len1 = this.__textEngine.textFormatRanges.get_length();
				this.__textEngine.textFormatRanges.splice(0,len1);
				value = "";
				var segment;
				var _g1 = 0;
				var _g = segments.length;
				while(_g1 < _g) {
					var i = _g1++;
					segment = segments[i];
					segment = openfl_text_TextField.__regexEntities[3].replace(segment,"<");
					segment = openfl_text_TextField.__regexEntities[4].replace(segment,">");
					segments[i] = segment;
				}
				var formatStack = [this.__textFormat.clone()];
				var sub;
				var noLineBreak = false;
				var _g2 = 0;
				while(_g2 < segments.length) {
					var segment1 = segments[_g2];
					++_g2;
					if(segment1 == "") continue;
					var isClosingTag = HxOverrides.substr(segment1,0,1) == "/";
					var tagEndIndex = segment1.indexOf(">");
					var start = tagEndIndex + 1;
					var spaceIndex = segment1.indexOf(" ");
					var tagName = segment1.substring(isClosingTag?1:0,spaceIndex > -1 && spaceIndex < tagEndIndex?spaceIndex:tagEndIndex);
					var format;
					if(isClosingTag) {
						formatStack.pop();
						format = formatStack[formatStack.length - 1].clone();
						if(tagName.toLowerCase() == "p" && this.__textEngine.textFormatRanges.get_length() > 0) {
							value += "\n";
							noLineBreak = true;
						}
						if(start < segment1.length) {
							sub = HxOverrides.substr(segment1,start,null);
							var x = new openfl__$internal_text_TextFormatRange(format,value.length,value.length + sub.length);
							this.__textEngine.textFormatRanges.push(x);
							value += sub;
							noLineBreak = false;
						}
					} else {
						format = formatStack[formatStack.length - 1].clone();
						if(tagEndIndex > -1) {
							var _g11 = tagName.toLowerCase();
							switch(_g11) {
							case "p":
								if(this.__textEngine.textFormatRanges.get_length() > 0 && !noLineBreak) value += "\n";
								if(openfl_text_TextField.__regexAlign.match(segment1)) format.align = openfl_text__$TextFormatAlign_TextFormatAlign_$Impl_$.fromString(this.__getAttributeMatch(openfl_text_TextField.__regexAlign).toLowerCase());
								break;
							case "font":
								if(openfl_text_TextField.__regexFace.match(segment1)) format.font = this.__getAttributeMatch(openfl_text_TextField.__regexFace);
								if(openfl_text_TextField.__regexColor.match(segment1)) format.color = Std.parseInt("0x" + this.__getAttributeMatch(openfl_text_TextField.__regexColor));
								if(openfl_text_TextField.__regexSize.match(segment1)) {
									var sizeAttr = this.__getAttributeMatch(openfl_text_TextField.__regexSize);
									var firstChar = HxOverrides.cca(sizeAttr,0);
									if(firstChar == 43 || firstChar == 45) {
										var parentFormat;
										if(formatStack.length >= 2) parentFormat = formatStack[formatStack.length - 2]; else parentFormat = this.__textFormat;
										format.size = parentFormat.size + Std.parseInt(sizeAttr);
									} else format.size = Std.parseInt(sizeAttr);
								}
								break;
							case "b":
								format.bold = true;
								break;
							case "u":
								format.underline = true;
								break;
							case "i":case "em":
								format.italic = true;
								break;
							case "textformat":
								if(openfl_text_TextField.__regexBlockIndent.match(segment1)) format.blockIndent = Std.parseInt(this.__getAttributeMatch(openfl_text_TextField.__regexBlockIndent));
								if(openfl_text_TextField.__regexIndent.match(segment1)) format.indent = Std.parseInt(this.__getAttributeMatch(openfl_text_TextField.__regexIndent));
								if(openfl_text_TextField.__regexLeading.match(segment1)) format.leading = Std.parseInt(this.__getAttributeMatch(openfl_text_TextField.__regexLeading));
								if(openfl_text_TextField.__regexLeftMargin.match(segment1)) format.leftMargin = Std.parseInt(this.__getAttributeMatch(openfl_text_TextField.__regexLeftMargin));
								if(openfl_text_TextField.__regexRightMargin.match(segment1)) format.rightMargin = Std.parseInt(this.__getAttributeMatch(openfl_text_TextField.__regexRightMargin));
								if(openfl_text_TextField.__regexTabStops.match(segment1)) {
									var values = this.__getAttributeMatch(openfl_text_TextField.__regexTabStops).split(" ");
									var tabStops = [];
									var _g21 = 0;
									while(_g21 < values.length) {
										var stop = values[_g21];
										++_g21;
										tabStops.push(Std.parseInt(stop));
									}
									format.tabStops = tabStops;
								}
								break;
							}
							formatStack.push(format);
							if(start < segment1.length) {
								sub = segment1.substring(start);
								var x1 = new openfl__$internal_text_TextFormatRange(format,value.length,value.length + sub.length);
								this.__textEngine.textFormatRanges.push(x1);
								value += sub;
								noLineBreak = false;
							}
						} else {
							var x2 = new openfl__$internal_text_TextFormatRange(format,value.length,value.length + segment1.length);
							this.__textEngine.textFormatRanges.push(x2);
							value += segment1;
							noLineBreak = false;
						}
					}
				}
				if(this.__textEngine.textFormatRanges.get_length() == 0) {
					var x3 = new openfl__$internal_text_TextFormatRange(formatStack[0],0,0);
					this.__textEngine.textFormatRanges.push(x3);
				}
			}
		}
		this.__updateText(value);
		return value;
	}
	,set_multiline: function(value) {
		if(value != this.__textEngine.multiline) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.multiline = value;
	}
	,get_scrollH: function() {
		return this.__textEngine.scrollH;
	}
	,get_scrollV: function() {
		return this.__textEngine.scrollV;
	}
	,get_selectable: function() {
		return this.__textEngine.selectable;
	}
	,set_selectable: function(value) {
		if(value != this.__textEngine.selectable && this.get_type() == 1) {
			if(this.stage != null && this.stage.get_focus() == this) this.__startTextInput(); else if(!value) this.__stopTextInput();
		}
		return this.__textEngine.selectable = value;
	}
	,get_text: function() {
		return this.__text;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		} else return value;
		if(this.__textEngine.textFormatRanges.get_length() > 1) {
			var len = this.__textEngine.textFormatRanges.get_length() - 1;
			this.__textEngine.textFormatRanges.splice(1,len);
		}
		var range = this.__textEngine.textFormatRanges.get(0);
		range.format = this.__textFormat;
		range.start = 0;
		range.end = value.length;
		this.__isHTML = false;
		this.__updateText(value);
		return value;
	}
	,get_textWidth: function() {
		this.__updateLayout();
		return this.__textEngine.textWidth;
	}
	,get_textHeight: function() {
		this.__updateLayout();
		return this.__textEngine.textHeight;
	}
	,get_type: function() {
		return this.__textEngine.type;
	}
	,set_type: function(value) {
		if(value != this.__textEngine.type) {
			if(value == 1) {
				this.addEventListener("focusIn",$bind(this,this.this_onFocusIn));
				this.addEventListener("focusOut",$bind(this,this.this_onFocusOut));
				this.addEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
				this.this_onFocusIn(null);
			} else {
				this.removeEventListener("focusIn",$bind(this,this.this_onFocusIn));
				this.removeEventListener("focusOut",$bind(this,this.this_onFocusOut));
				this.removeEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
				this.__stopTextInput();
			}
			this.__dirty = true;
		}
		return this.__textEngine.type = value;
	}
	,get_width: function() {
		this.__updateLayout();
		return this.__textEngine.width * Math.abs(this.get_scaleX());
	}
	,set_width: function(value) {
		if(value != this.__textEngine.width) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl_display_DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__textEngine.width = value;
		}
		return this.__textEngine.width * Math.abs(this.get_scaleX());
	}
	,set_wordWrap: function(value) {
		if(value != this.__textEngine.wordWrap) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.wordWrap = value;
	}
	,stage_onMouseMove: function(event) {
		if(this.stage == null) return;
		if(this.__textEngine.selectable && this.__selectionIndex >= 0) {
			this.__updateLayout();
			var position = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			if(position != this.__caretIndex) {
				this.__caretIndex = position;
				this.__dirty = true;
			}
		}
	}
	,stage_onMouseUp: function(event) {
		if(this.stage == null) return;
		this.stage.removeEventListener("mouseMove",$bind(this,this.stage_onMouseMove));
		this.stage.removeEventListener("mouseUp",$bind(this,this.stage_onMouseUp));
		if(this.stage.get_focus() == this) {
			this.__getWorldTransform();
			this.__updateLayout();
			var px = this.__worldTransform.__transformInverseX(this.get_x(),this.get_y());
			var py = this.__worldTransform.__transformInverseY(this.get_x(),this.get_y());
			var upPos = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			var leftPos;
			var rightPos;
			leftPos = Std["int"](Math.min(this.__selectionIndex,upPos));
			rightPos = Std["int"](Math.max(this.__selectionIndex,upPos));
			this.__selectionIndex = leftPos;
			this.__caretIndex = rightPos;
			if(this.__inputEnabled) {
				this.this_onFocusIn(null);
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
		}
	}
	,this_onAddedToStage: function(event) {
		this.this_onFocusIn(null);
	}
	,this_onFocusIn: function(event) {
		if(this.get_selectable() && this.get_type() == 1 && this.stage != null && this.stage.get_focus() == this) this.__startTextInput();
	}
	,this_onFocusOut: function(event) {
		this.__stopTextInput();
	}
	,this_onMouseDown: function(event) {
		if(!this.get_selectable()) return;
		this.__updateLayout();
		this.__caretIndex = this.__getPosition(this.get_mouseX(),this.get_mouseY());
		this.__selectionIndex = this.__caretIndex;
		this.__dirty = true;
		this.stage.addEventListener("mouseMove",$bind(this,this.stage_onMouseMove));
		this.stage.addEventListener("mouseUp",$bind(this,this.stage_onMouseUp));
	}
	,window_onKeyDown: function(key,modifier) {
		switch(key) {
		case 13:case 1073741912:
			if(this.__textEngine.multiline) {
				this.replaceSelectedText("\n");
				this.dispatchEvent(new openfl_events_Event("change",true));
			}
			break;
		case 8:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex > 0) this.__selectionIndex = this.__caretIndex - 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl_events_Event("change",true));
			}
			break;
		case 127:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex < this.__text.length) this.__selectionIndex = this.__caretIndex + 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl_events_Event("change",true));
			}
			break;
		case 1073741904:
			if(lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey(modifier)) {
				if(this.__caretIndex > 0) this.__caretIndex--;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex > 0) this.__caretIndex--;
				} else this.__caretIndex = Std["int"](Math.min(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 1073741903:
			if(lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey(modifier)) {
				if(this.__caretIndex < this.__text.length) this.__caretIndex++;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex < this.__text.length) this.__caretIndex++;
				} else this.__caretIndex = Std["int"](Math.max(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 99:
			if(lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier) || lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier)) lime_system_Clipboard.set_text(this.__text.substring(this.__caretIndex,this.__selectionIndex));
			break;
		case 120:
			if(lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier) || lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier)) {
				lime_system_Clipboard.set_text(this.__text.substring(this.__caretIndex,this.__selectionIndex));
				if(this.__caretIndex != this.__selectionIndex) {
					this.replaceSelectedText("");
					this.dispatchEvent(new openfl_events_Event("change",true));
				}
			}
			break;
		case 97:
			if(lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier) || lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier)) {
				this.__caretIndex = this.__text.length;
				this.__selectionIndex = 0;
			}
			break;
		default:
		}
	}
	,window_onTextInput: function(value) {
		this.replaceSelectedText(value);
		this.dispatchEvent(new openfl_events_Event("change",true));
	}
	,__class__: openfl_text_TextField
	,__properties__: $extend(openfl_display_InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",set_type:"set_type",get_type:"get_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_text:"set_text",get_text:"get_text",set_selectable:"set_selectable",get_selectable:"get_selectable",get_scrollV:"get_scrollV",get_scrollH:"get_scrollH",set_multiline:"set_multiline",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_embedFonts:"set_embedFonts",get_embedFonts:"get_embedFonts",set_displayAsPassword:"set_displayAsPassword",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
var com_modestmaps_core_DebugField = function() {
	this.fps = 30;
	openfl_text_TextField.call(this);
	this.set_defaultTextFormat(new openfl_text_TextFormat(null,12,0,false));
	this.set_backgroundColor(16777215);
	this.set_background(true);
	this.set_text("messages");
	this.set_name("debugField");
	this.mouseEnabled = false;
	this.set_selectable(false);
	this.set_multiline(true);
	this.set_wordWrap(false);
	this.lastFrameTime = Math.round(new Date().getTime() / 1000 * 1000);
};
$hxClasses["com.modestmaps.core.DebugField"] = com_modestmaps_core_DebugField;
com_modestmaps_core_DebugField.__name__ = ["com","modestmaps","core","DebugField"];
com_modestmaps_core_DebugField.__super__ = openfl_text_TextField;
com_modestmaps_core_DebugField.prototype = $extend(openfl_text_TextField.prototype,{
	lastFrameTime: null
	,fps: null
	,update: function(grid,blankCount,recentCount,tilePainter) {
		var frameDuration = Math.round(new Date().getTime() / 1000 * 1000) - this.lastFrameTime;
		this.lastFrameTime = Math.round(new Date().getTime() / 1000 * 1000);
		this.fps = 0.9 * this.fps + 0.1 * (1000.0 / frameDuration);
		var well;
		well = js_Boot.__cast(grid.getChildByName("well") , openfl_display_Sprite);
		var tileChildren = 0;
		var _g1 = 0;
		var _g = well.get_numChildren();
		while(_g1 < _g) {
			var i = _g1++;
			tileChildren += (js_Boot.__cast(well.getChildAt(i) , com_modestmaps_core_Tile)).get_numChildren();
		}
		this.set_text("tx: " + grid.get_tx() + "\nty: " + grid.get_ty() + "\nsc: " + grid.get_scale() + "\nfps: " + this.fps + "\ncurrent child count: " + well.get_numChildren() + "\ncurrent child of tile count: " + tileChildren + "\nvisible tile count: " + grid.getVisibleTiles().length + "\nblank count: " + blankCount + "\nrecently used tiles: " + recentCount + "\ntiles created: " + com_modestmaps_core_Tile.count + "\nqueue length: " + tilePainter.getQueueCount() + "\nrequests: " + tilePainter.getRequestCount() + "\nfinished (cached) tiles: " + tilePainter.getCacheSize() + "\ncachedLoaders: " + tilePainter.getLoaderCacheCount() + "\nmemory: " + openfl_system_System.get_totalMemory() / 1048576 + "MB");
		this.set_width(this.get_textWidth() + 8);
		this.set_height(this.get_textHeight() + 4);
	}
	,__class__: com_modestmaps_core_DebugField
});
var com_modestmaps_core_TweenTile = function() { };
$hxClasses["com.modestmaps.core.TweenTile"] = com_modestmaps_core_TweenTile;
com_modestmaps_core_TweenTile.__name__ = ["com","modestmaps","core","TweenTile"];
com_modestmaps_core_TweenTile.__super__ = com_modestmaps_core_Tile;
com_modestmaps_core_TweenTile.prototype = $extend(com_modestmaps_core_Tile.prototype,{
	hide: function() {
		this.set_alpha(0);
	}
	,show: function() {
		if(this.get_alpha() < 1) motion_Actuate.tween(this,0.25,{ alpha : 1});
	}
	,showNow: function() {
		motion_Actuate.stop(this,null,true);
		this.set_alpha(1);
	}
	,destroy: function() {
		motion_Actuate.stop(this,null,false,false);
		com_modestmaps_core_Tile.prototype.destroy.call(this);
	}
	,__class__: com_modestmaps_core_TweenTile
});
var com_modestmaps_core_painter_ITilePainter = function() { };
$hxClasses["com.modestmaps.core.painter.ITilePainter"] = com_modestmaps_core_painter_ITilePainter;
com_modestmaps_core_painter_ITilePainter.__name__ = ["com","modestmaps","core","painter","ITilePainter"];
com_modestmaps_core_painter_ITilePainter.__interfaces__ = [openfl_events_IEventDispatcher];
com_modestmaps_core_painter_ITilePainter.prototype = {
	setTileClass: null
	,getTileFromCache: null
	,retainKeysInCache: null
	,createAndPopulateTile: null
	,isPainted: null
	,cancelPainting: null
	,isPainting: null
	,reset: null
	,getLoaderCacheCount: null
	,getQueueCount: null
	,getRequestCount: null
	,getCacheSize: null
	,__class__: com_modestmaps_core_painter_ITilePainter
};
var com_modestmaps_core_painter_ITilePainterOverride = function() { };
$hxClasses["com.modestmaps.core.painter.ITilePainterOverride"] = com_modestmaps_core_painter_ITilePainterOverride;
com_modestmaps_core_painter_ITilePainterOverride.__name__ = ["com","modestmaps","core","painter","ITilePainterOverride"];
com_modestmaps_core_painter_ITilePainterOverride.prototype = {
	getTilePainter: null
	,__class__: com_modestmaps_core_painter_ITilePainterOverride
};
var com_modestmaps_core_painter_TileCache = function(tilePool) {
	this.tilePool = tilePool;
	this.alreadySeen = new haxe_ds_StringMap();
};
$hxClasses["com.modestmaps.core.painter.TileCache"] = com_modestmaps_core_painter_TileCache;
com_modestmaps_core_painter_TileCache.__name__ = ["com","modestmaps","core","painter","TileCache"];
com_modestmaps_core_painter_TileCache.prototype = {
	alreadySeen: null
	,tilePool: null
	,get_size: function() {
		var alreadySeenCount = 0;
		var $it0 = this.alreadySeen.iterator();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			alreadySeenCount++;
		}
		return alreadySeenCount;
	}
	,putTile: function(tile) {
		this.alreadySeen.set(tile.get_name(),tile);
	}
	,getTile: function(key) {
		return this.alreadySeen.get(key);
	}
	,containsKey: function(key) {
		return this.alreadySeen.exists(key);
	}
	,retainKeys: function(keys) {
		var $it0 = this.alreadySeen.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			if(HxOverrides.indexOf(keys,key,0) < 0) {
				this.tilePool.returnTile(this.alreadySeen.get(key));
				this.alreadySeen.remove(key);
			}
		}
	}
	,clear: function() {
		var $it0 = this.alreadySeen.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this.tilePool.returnTile(this.alreadySeen.get(key));
			this.alreadySeen.set(key,null);
			this.alreadySeen.remove(key);
		}
		this.alreadySeen = new haxe_ds_StringMap();
	}
	,__class__: com_modestmaps_core_painter_TileCache
	,__properties__: {get_size:"get_size"}
};
var com_modestmaps_core_painter_TilePainter = function(tileGrid,provider,queueFunction) {
	this.previousOpenRequests = 0;
	this.openRequests = [];
	this.loaderTiles = new haxe_ds_ObjectMap();
	this.layersNeeded = new haxe_ds_StringMap();
	openfl_events_EventDispatcher.call(this,null);
	this.tileGrid = tileGrid;
	this.provider = provider;
	this.queueFunction = queueFunction;
	this.tileQueue = new com_modestmaps_core_painter_TileQueue();
	this.tilePool = new com_modestmaps_core_painter_TilePool(com_modestmaps_core_Tile);
	this.tileCache = new com_modestmaps_core_painter_TileCache(this.tilePool);
	this.queueTimer = new openfl_utils_Timer(200);
	this.queueTimer.addEventListener("timer",$bind(this,this.processQueue));
	this.queueTimer.start();
};
$hxClasses["com.modestmaps.core.painter.TilePainter"] = com_modestmaps_core_painter_TilePainter;
com_modestmaps_core_painter_TilePainter.__name__ = ["com","modestmaps","core","painter","TilePainter"];
com_modestmaps_core_painter_TilePainter.__interfaces__ = [com_modestmaps_core_painter_ITilePainter];
com_modestmaps_core_painter_TilePainter.__super__ = openfl_events_EventDispatcher;
com_modestmaps_core_painter_TilePainter.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	provider: null
	,tileGrid: null
	,tileQueue: null
	,tileCache: null
	,tilePool: null
	,queueFunction: null
	,queueTimer: null
	,layersNeeded: null
	,loaderTiles: null
	,openRequests: null
	,previousOpenRequests: null
	,setTileClass: function(tileClass) {
		this.tilePool.setTileClass(tileClass);
	}
	,getTileFromCache: function(key) {
		return this.tileCache.getTile(key);
	}
	,retainKeysInCache: function(recentlySeen) {
		this.tileCache.retainKeys(recentlySeen);
	}
	,createAndPopulateTile: function(coord,key) {
		var tile = this.tilePool.getTile(coord.column | 0,coord.row | 0,coord.zoom | 0);
		tile.set_name(key);
		var urls = this.provider.getTileUrls(coord);
		if(urls != null && urls.length > 0) {
			this.layersNeeded.set(tile.get_name(),urls);
			this.tileQueue.push(tile);
		} else tile.show();
		return tile;
	}
	,isPainted: function(tile) {
		return this.layersNeeded.get(tile.get_name()) == null;
	}
	,cancelPainting: function(tile) {
		if(this.tileQueue.contains(tile)) this.tileQueue.remove(tile);
		var i = this.openRequests.length - 1;
		while(i >= 0) {
			var loader = this.openRequests[i];
			if(loader.get_name() == tile.get_name()) {
				this.loaderTiles.set(loader,null);
				this.loaderTiles.remove(loader);
			}
			i--;
		}
		if(!this.tileCache.containsKey(tile.get_name())) this.tilePool.returnTile(tile);
		this.layersNeeded.remove(tile.get_name());
	}
	,isPainting: function(tile) {
		return this.layersNeeded.get(tile.get_name()) == null;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.openRequests;
		while(_g < _g1.length) {
			var loader = _g1[_g];
			++_g;
			var tile = this.loaderTiles.h[loader.__id__];
			this.loaderTiles.set(loader,null);
			this.loaderTiles.remove(loader);
			if(!this.tileCache.containsKey(tile.get_name())) this.tilePool.returnTile(tile);
			try {
				loader.contentLoaderInfo.removeEventListener("complete",$bind(this,this.onLoadEnd));
				loader.contentLoaderInfo.removeEventListener("ioError",$bind(this,this.onLoadError));
				loader.close();
			} catch( error ) {
				if (error instanceof js__$Boot_HaxeError) error = error.val;
				if( js_Boot.__instanceof(error,openfl_errors_Error) ) {
				} else throw(error);
			}
		}
		this.openRequests = [];
		var $it0 = this.layersNeeded.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this.layersNeeded.set(key,null);
			this.layersNeeded.remove(key);
		}
		this.layersNeeded = new haxe_ds_StringMap();
		this.tileQueue.clear();
		this.tileCache.clear();
	}
	,loadNextURLForTile: function(tile) {
		var urls = this.layersNeeded.get(tile.get_name());
		if(urls != null && urls.length > 0) {
			var url = urls.shift();
			if(com_modestmaps_core_painter_TilePainter.cacheLoaders && url != null && com_modestmaps_core_painter_TilePainter.loaderCache.get(url) != null) {
				var original = com_modestmaps_core_painter_TilePainter.loaderCache.get(url);
				var bitmap = new openfl_display_Bitmap(original.bitmapData);
				tile.addChild(bitmap);
				this.loadNextURLForTile(tile);
			} else {
				var tileLoader = new openfl_display_Loader();
				this.loaderTiles.set(tileLoader,tile);
				tileLoader.set_name(tile.get_name());
				try {
					if(com_modestmaps_core_painter_TilePainter.cacheLoaders || com_modestmaps_core_painter_TilePainter.smoothContent) tileLoader.load(new openfl_net_URLRequest(url),new openfl_system_LoaderContext(true)); else tileLoader.load(new openfl_net_URLRequest(url));
					tileLoader.contentLoaderInfo.addEventListener("complete",$bind(this,this.onLoadEnd),false,0,true);
					tileLoader.contentLoaderInfo.addEventListener("ioError",$bind(this,this.onLoadError),false,0,true);
					this.openRequests.push(tileLoader);
				} catch( error ) {
					if (error instanceof js__$Boot_HaxeError) error = error.val;
					if( js_Boot.__instanceof(error,openfl_errors_Error) ) {
						tile.paintError();
					} else throw(error);
				}
			}
		} else if(urls != null && urls.length == 0) {
			this.tileGrid.tilePainted(tile);
			this.tileCache.putTile(tile);
			this.layersNeeded.set(tile.get_name(),null);
			this.layersNeeded.remove(tile.get_name());
		}
	}
	,processQueue: function(event) {
		if(this.openRequests.length < com_modestmaps_core_painter_TilePainter.maxOpenRequests && this.tileQueue.get_length() > 0) {
			var removedTiles = this.tileQueue.retainAll(this.tileGrid.getVisibleTiles());
			var _g = 0;
			while(_g < removedTiles.length) {
				var removedTile = removedTiles[_g];
				++_g;
				this.cancelPainting(removedTile);
			}
			this.tileQueue.sortTiles(this.queueFunction);
			while(this.openRequests.length < com_modestmaps_core_painter_TilePainter.maxOpenRequests && this.tileQueue.get_length() > 0) {
				var tile = this.tileQueue.shift();
				if(tile.parent != null) this.loadNextURLForTile(tile);
			}
		}
		if(this.previousOpenRequests == 0 && this.openRequests.length > 0) this.dispatchEvent(new com_modestmaps_events_MapEvent("beginTileLoading",null)); else if(this.previousOpenRequests > 0) {
			this.dispatchEvent(new openfl_events_ProgressEvent("progress",false,false,this.previousOpenRequests - this.openRequests.length,this.previousOpenRequests));
			if(this.openRequests.length == 0) this.dispatchEvent(new com_modestmaps_events_MapEvent("alLTilesLoaded",null));
		}
		this.previousOpenRequests = this.openRequests.length;
	}
	,onLoadEnd: function(event) {
		var loader;
		loader = (js_Boot.__cast(event.target , openfl_display_LoaderInfo)).loader;
		if(com_modestmaps_core_painter_TilePainter.cacheLoaders && com_modestmaps_core_painter_TilePainter.loaderCache.get(loader.contentLoaderInfo.url) == null) {
			haxe_Log.trace("caching content for",{ fileName : "TilePainter.hx", lineNumber : 308, className : "com.modestmaps.core.painter.TilePainter", methodName : "onLoadEnd", customParams : [loader.contentLoaderInfo.url]});
			try {
				var content;
				content = js_Boot.__cast(loader.content , openfl_display_Bitmap);
				com_modestmaps_core_painter_TilePainter.loaderCache.set(loader.contentLoaderInfo.url,content);
				com_modestmaps_core_painter_TilePainter.cachedUrls.push(loader.contentLoaderInfo.url);
				if(com_modestmaps_core_painter_TilePainter.cachedUrls.length > com_modestmaps_core_painter_TilePainter.maxLoaderCacheSize) com_modestmaps_core_painter_TilePainter.loaderCache.remove(com_modestmaps_core_painter_TilePainter.cachedUrls.shift());
			} catch( error ) {
				if (error instanceof js__$Boot_HaxeError) error = error.val;
				if( js_Boot.__instanceof(error,openfl_errors_Error) ) {
					haxe_Log.trace("onloadend error catched",{ fileName : "TilePainter.hx", lineNumber : 319, className : "com.modestmaps.core.painter.TilePainter", methodName : "onLoadEnd"});
				} else throw(error);
			}
		}
		if(com_modestmaps_core_painter_TilePainter.smoothContent) try {
			var smoothContent;
			smoothContent = js_Boot.__cast(loader.content , openfl_display_Bitmap);
			smoothContent.smoothing = true;
		} catch( error1 ) {
			if (error1 instanceof js__$Boot_HaxeError) error1 = error1.val;
			if( js_Boot.__instanceof(error1,openfl_errors_Error) ) {
			} else throw(error1);
		}
		var index = HxOverrides.indexOf(this.openRequests,loader,0);
		if(index >= 0) this.openRequests.splice(index,1);
		var tile = this.loaderTiles.h[loader.__id__];
		if(tile != null) {
			tile.addChild(loader);
			this.loadNextURLForTile(tile);
		} else {
		}
		this.loaderTiles.set(loader,null);
		this.loaderTiles.remove(loader);
	}
	,onLoadError: function(event) {
		var loaderInfo;
		loaderInfo = js_Boot.__cast(event.target , openfl_display_LoaderInfo);
		var i = this.openRequests.length - 1;
		while(i >= 0) {
			var loader = this.openRequests[i];
			if(loader.contentLoaderInfo == loaderInfo) {
				this.openRequests.splice(i,1);
				this.layersNeeded.set(loader.get_name(),null);
				this.layersNeeded.remove(loader.get_name());
				var tile = this.loaderTiles.h[loader.__id__];
				if(tile != null) {
					tile.paintError(this.provider.get_tileWidth(),this.provider.get_tileHeight());
					this.tileGrid.tilePainted(tile);
					this.loaderTiles.set(loader,null);
					this.loaderTiles.remove(loader);
				}
			}
			i--;
		}
	}
	,getLoaderCacheCount: function() {
		return com_modestmaps_core_painter_TilePainter.cachedUrls.length;
	}
	,getQueueCount: function() {
		return this.tileQueue.get_length();
	}
	,getRequestCount: function() {
		return this.openRequests.length;
	}
	,getCacheSize: function() {
		return this.tileCache.get_size();
	}
	,__class__: com_modestmaps_core_painter_TilePainter
});
var com_modestmaps_core_painter_TilePool = function(tileClass) {
	this.pool = [];
	this.tileClass = tileClass;
};
$hxClasses["com.modestmaps.core.painter.TilePool"] = com_modestmaps_core_painter_TilePool;
com_modestmaps_core_painter_TilePool.__name__ = ["com","modestmaps","core","painter","TilePool"];
com_modestmaps_core_painter_TilePool.prototype = {
	pool: null
	,tileClass: null
	,setTileClass: function(tileClass) {
		this.tileClass = tileClass;
		this.pool = [];
	}
	,getTile: function(column,row,zoom) {
		if(this.pool.length < 256) while(this.pool.length < 256) this.pool.push(Type.createInstance(this.tileClass,[0,0,0]));
		var tile = this.pool.pop();
		tile.init(column,row,zoom);
		return tile;
	}
	,returnTile: function(tile) {
		tile.destroy();
		this.pool.push(tile);
	}
	,__class__: com_modestmaps_core_painter_TilePool
};
var com_modestmaps_core_painter_TileQueue = function() {
	this.queue = [];
};
$hxClasses["com.modestmaps.core.painter.TileQueue"] = com_modestmaps_core_painter_TileQueue;
com_modestmaps_core_painter_TileQueue.__name__ = ["com","modestmaps","core","painter","TileQueue"];
com_modestmaps_core_painter_TileQueue.prototype = {
	queue: null
	,get_length: function() {
		return this.queue.length;
	}
	,contains: function(tile) {
		return HxOverrides.indexOf(this.queue,tile,0) >= 0;
	}
	,remove: function(tile) {
		var index = HxOverrides.indexOf(this.queue,tile,0);
		if(index >= 0) this.queue.splice(index,1);
	}
	,push: function(tile) {
		this.queue.push(tile);
	}
	,shift: function() {
		return this.queue.shift();
	}
	,sortTiles: function(callback) {
		this.queue.sort(callback);
	}
	,retainAll: function(tiles) {
		var removed = [];
		var i = this.queue.length - 1;
		while(i >= 0) {
			var tile = this.queue[i];
			if(HxOverrides.indexOf(tiles,tile,0) < 0) {
				removed.push(tile);
				this.queue.splice(i,1);
			}
			i--;
		}
		return removed;
	}
	,clear: function() {
		this.queue = [];
	}
	,__class__: com_modestmaps_core_painter_TileQueue
	,__properties__: {get_length:"get_length"}
};
var openfl_events_Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 2;
};
$hxClasses["openfl.events.Event"] = openfl_events_Event;
openfl_events_Event.__name__ = ["openfl","events","Event"];
openfl_events_Event.prototype = {
	bubbles: null
	,cancelable: null
	,currentTarget: null
	,eventPhase: null
	,target: null
	,type: null
	,__isCanceled: null
	,__isCanceledNow: null
	,__preventDefault: null
	,isDefaultPrevented: function() {
		return this.__preventDefault;
	}
	,preventDefault: function() {
		if(this.cancelable) this.__preventDefault = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCanceled = true;
		this.__isCanceledNow = true;
	}
	,__class__: openfl_events_Event
};
var com_modestmaps_events_MapEvent = function(type,rest) {
	openfl_events_Event.call(this,type,true,true);
	switch(type) {
	case "panned":
		if(rest.length > 0 && js_Boot.__instanceof(rest[0],openfl_geom_Point)) this.panDelta = rest[0];
		break;
	case "zoomedBy":
		if(rest.length > 0 && typeof(rest[0]) == "number") this.zoomDelta = rest[0];
		break;
	case "extentChanged":
		if(rest.length > 0 && js_Boot.__instanceof(rest[0],com_modestmaps_core_MapExtent)) this.newExtent = rest[0];
		break;
	case "startZooming":case "stopZooming":
		if(rest.length > 0 && typeof(rest[0]) == "number") this.zoomLevel = rest[0];
		break;
	case "resized":
		if(rest.length > 0 && js_Boot.__instanceof(rest[0],openfl_geom_Point)) this.newSize = rest[0];
		break;
	case "copyrightChanged":
		if(rest.length > 0 && typeof(rest[0]) == "string") this.newCopyright = rest[0];
		break;
	case "beginExtentChange":
		if(rest.length > 0 && js_Boot.__instanceof(rest[0],com_modestmaps_core_MapExtent)) this.oldExtent = rest[0];
		break;
	case "mapProviderChanged":
		if(rest.length > 0 && js_Boot.__instanceof(rest[0],com_modestmaps_mapproviders_IMapProvider)) this.newMapProvider = rest[0];
		break;
	}
};
$hxClasses["com.modestmaps.events.MapEvent"] = com_modestmaps_events_MapEvent;
com_modestmaps_events_MapEvent.__name__ = ["com","modestmaps","events","MapEvent"];
com_modestmaps_events_MapEvent.__super__ = openfl_events_Event;
com_modestmaps_events_MapEvent.prototype = $extend(openfl_events_Event.prototype,{
	zoomLevel: null
	,zoomDelta: null
	,panDelta: null
	,newSize: null
	,newCopyright: null
	,oldExtent: null
	,newExtent: null
	,newMapProvider: null
	,__class__: com_modestmaps_events_MapEvent
});
var com_modestmaps_events_MarkerEvent = function(type,marker,location,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this._marker = marker;
	this._location = location;
};
$hxClasses["com.modestmaps.events.MarkerEvent"] = com_modestmaps_events_MarkerEvent;
com_modestmaps_events_MarkerEvent.__name__ = ["com","modestmaps","events","MarkerEvent"];
com_modestmaps_events_MarkerEvent.__super__ = openfl_events_Event;
com_modestmaps_events_MarkerEvent.prototype = $extend(openfl_events_Event.prototype,{
	_marker: null
	,_location: null
	,get_marker: function() {
		return this._marker;
	}
	,get_location: function() {
		return this._location;
	}
	,__class__: com_modestmaps_events_MarkerEvent
	,__properties__: {get_location:"get_location",get_marker:"get_marker"}
});
var com_modestmaps_extras_MapControls = function(map,keyboard,fullScreen,buttonPositions,buttonClass) {
	if(fullScreen == null) fullScreen = false;
	if(keyboard == null) keyboard = true;
	this.positionFunctions = { left : function(child,s,a,map,horizontalAlignFunction) {
		if(s.lastIndexOf("%") >= 0) child.set_x(map.getWidth() * Std.parseFloat(s.substring(-1)) / 100.0); else child.set_x(Std.parseFloat(s.substring(-2)));
		var _g = child;
		_g.set_x(_g.get_x() - (a != null?js_Boot.__cast(Reflect.field(horizontalAlignFunction,a.split("-")[1]) , Float):0));
	}, right : function(child1,s1,a1,map1,horizontalAlignFunction1) {
		if(s1.lastIndexOf("%") >= 0) child1.set_x(map1.getWidth() - map1.getWidth() * Std.parseFloat(s1.substring(-1)) / 100.0 - child1.get_width()); else child1.set_x(map1.getWidth() - Std.parseFloat(s1.substring(-2)) - child1.get_width());
		var _g1 = child1;
		_g1.set_x(_g1.get_x() + (a1 != null?js_Boot.__cast(Reflect.field(horizontalAlignFunction1,a1.split("-")[1]) , Float):0));
	}, top : function(child2,s2,a2,map2,horizontalAlignFunction2) {
		if(s2.lastIndexOf("%") >= 0) child2.set_y(map2.getHeight() * Std.parseFloat(s2.substring(-1)) / 100.0); else child2.set_y(Std.parseFloat(s2.substring(-2)));
		var _g2 = child2;
		_g2.set_y(_g2.get_y() - (a2 != null?js_Boot.__cast(Reflect.field(horizontalAlignFunction2,a2.split("-")[0]) , Float):0));
	}, bottom : function(child3,s3,a3,map3,horizontalAlignFunction3) {
		if(s3.lastIndexOf("%") >= 0) child3.set_y(map3.getHeight() - map3.getHeight() * Std.parseFloat(s3.substring(-1)) / 100.0 - child3.get_height()); else child3.set_y(map3.getHeight() - Std.parseFloat(s3.substring(-2)) - child3.get_height());
		var _g3 = child3;
		_g3.set_y(_g3.get_y() + (a3 != null?js_Boot.__cast(Reflect.field(horizontalAlignFunction3,a3.split("-")[0]) , Float):0));
	}};
	this.hAlignFunctions = { center : function(child) {
		return child.get_width() / 2;
	}, left : function(child1) {
		return 0;
	}, right : function(child2) {
		return child2.get_width();
	}};
	this.positions = com_modestmaps_extras_MapControls.GROUPED;
	openfl_display_Sprite.call(this);
	if(buttonClass != null) buttonClass = com_modestmaps_extras_ui_Button;
	this.leftButton = new com_modestmaps_extras_ui_Button("left");
	this.rightButton = new com_modestmaps_extras_ui_Button("right");
	this.upButton = new com_modestmaps_extras_ui_Button("up");
	this.downButton = new com_modestmaps_extras_ui_Button("down");
	this.inButton = new com_modestmaps_extras_ui_Button("in");
	this.outButton = new com_modestmaps_extras_ui_Button("out");
	this.map = map;
	this.keyboard = keyboard;
	this.fullScreen = fullScreen;
	if(buttonPositions != null) this.positions = buttonPositions;
	this.set_filters([new openfl_filters_DropShadowFilter(1,45,0,1,3,3,.7,2)]);
	var buttonSprite = new openfl_display_Sprite();
	this.addChild(buttonSprite);
	this.actions = [$bind(map,map.panLeft),$bind(map,map.panRight),$bind(map,map.panUp),$bind(map,map.panDown),$bind(map,map.zoomIn),$bind(map,map.zoomOut)];
	this.buttons = [this.leftButton,this.rightButton,this.upButton,this.downButton,this.inButton,this.outButton];
	if(fullScreen) {
	}
	var _g1 = 0;
	var _g = this.buttons.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.buttons[i].addEventListener("click",this.actions[i]);
		buttonSprite.addChild(this.buttons[i]);
	}
	this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
};
$hxClasses["com.modestmaps.extras.MapControls"] = com_modestmaps_extras_MapControls;
com_modestmaps_extras_MapControls.__name__ = ["com","modestmaps","extras","MapControls"];
com_modestmaps_extras_MapControls.__super__ = openfl_display_Sprite;
com_modestmaps_extras_MapControls.prototype = $extend(openfl_display_Sprite.prototype,{
	leftButton: null
	,rightButton: null
	,upButton: null
	,downButton: null
	,inButton: null
	,outButton: null
	,map: null
	,keyboard: null
	,fullScreen: null
	,buttons: null
	,actions: null
	,positions: null
	,hAlignFunctions: null
	,positionFunctions: null
	,onAddedToStage: function(event) {
		if(this.keyboard) {
			this.map.addEventListener("keyUp",$bind(this,this.onKeyboardEvent));
			this.map.addEventListener("keyDown",$bind(this,this.onKeyboardEvent));
		}
		if(this.fullScreen) {
		}
		this.map.addEventListener("resized",$bind(this,this.onMapResize));
		this.map.addEventListener("mouseDown",$bind(this,this.onMouseDownClick));
		this.onMapResize(null);
	}
	,onMouseDownClick: function(event) {
		this.map.focusRect = false;
		this.stage.set_focus(this.map);
	}
	,onKeyboardEvent: function(event) {
		if(this.stage != null || Std["is"](this.stage.get_focus(),openfl_text_TextField)) return;
		var buttonKeys_h = { };
		buttonKeys_h[37] = this.leftButton;
		buttonKeys_h[39] = this.rightButton;
		buttonKeys_h[40] = this.downButton;
		buttonKeys_h[38] = this.upButton;
		if(buttonKeys_h[event.keyCode] != null) {
			if(event.type == "keyDown") buttonKeys_h[event.keyCode].onMouseOver(); else {
				buttonKeys_h[event.keyCode].onMouseOut();
				this.actions[HxOverrides.indexOf(this.buttons,buttonKeys_h[event.keyCode],0)].call();
			}
		}
	}
	,onMapResize: function(event) {
		var _g = 0;
		var _g1 = Reflect.fields(this.positions);
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			var position = Reflect.field(this.positions,child);
			var _g2 = 0;
			var _g3 = Reflect.fields(position);
			while(_g2 < _g3.length) {
				var reference = _g3[_g2];
				++_g2;
				if(reference == "align") continue;
				(Reflect.field(this.positionFunctions,reference))(Reflect.field(this,child),Reflect.field(position,reference),Reflect.field(position,"align"),this.map,this.hAlignFunctions);
			}
		}
	}
	,__class__: com_modestmaps_extras_MapControls
});
var com_modestmaps_extras_NavigatorWindow = function(map,navWidth,navHeight,navBorder,navBorderColor,boxLineThickness,boxLineColor,boxFillColor,boxFillAlpha) {
	if(boxFillAlpha == null) boxFillAlpha = 0.2;
	if(boxFillColor == null) boxFillColor = 0;
	if(boxLineColor == null) boxLineColor = 16711680;
	if(boxLineThickness == null) boxLineThickness = 0;
	if(navBorderColor == null) navBorderColor = 16777215;
	if(navBorder == null) navBorder = 5;
	if(navHeight == null) navHeight = 128;
	if(navWidth == null) navWidth = 128;
	this.ignoreNav = false;
	this.ignoreMap = false;
	this.zoomOffset = 4;
	openfl_display_Sprite.call(this);
	this.map = map;
	this.navWidth = navWidth;
	this.navHeight = navHeight;
	this.navBorder = navBorder;
	this.navBorderColor = navBorderColor;
	this.boxLineThickness = boxLineThickness;
	this.boxLineColor = boxLineColor;
	this.boxFillColor = boxFillColor;
	this.boxFillAlpha = boxFillAlpha;
	this.navMap = new com_modestmaps_Map(navWidth,navHeight,true,map.getMapProvider());
	this.navMap.set_name("navMap");
	this.navMap.grid.enforceBoundsEnabled = false;
	this.navMap.setCenterZoom(map.getCenter(),map.getZoom() - this.zoomOffset);
	this.addChild(this.navMap);
	this.navMap.get_graphics().clear();
	this.navMap.get_graphics().beginFill(15658734);
	this.navMap.get_graphics().drawRect(0,0,navWidth,navHeight);
	this.navMap.set_filters([new openfl_filters_DropShadowFilter(2,45,0,0.5,4,4,1,1,true)]);
	this.box = new openfl_display_Shape();
	this.navMap.addChild(this.box);
	this.setPosition(null);
	this.navMap.addEventListener("doubleClick",$bind(this,this.onNavDoubleClick),true);
	this.navMap.addEventListener("mouseWheel",$bind(this,this.onNavMouseWheel),true);
	this.navMap.addEventListener("alLTilesLoaded",$bind(this,this.stopEvent));
	this.navMap.addEventListener("beginExtentChange",$bind(this,this.stopEvent));
	this.navMap.addEventListener("beginTileLoading",$bind(this,this.stopEvent));
	this.navMap.addEventListener("copyrightChanged",$bind(this,this.stopEvent));
	this.navMap.addEventListener("mapProviderChanged",$bind(this,this.stopEvent));
	this.navMap.addEventListener("rendered",$bind(this,this.stopEvent));
	this.navMap.addEventListener("resized",$bind(this,this.stopEvent));
	this.navMap.addEventListener("startZooming",$bind(this,this.stopEvent));
	this.navMap.addEventListener("stopZooming",$bind(this,this.stopEvent));
	this.navMap.addEventListener("zoomedBy",$bind(this,this.stopEvent));
	this.navMap.addEventListener("extentChanged",$bind(this,this.syncMap));
	this.navMap.addEventListener("startPanning",$bind(this,this.onStartPanning));
	this.navMap.addEventListener("panned",$bind(this,this.syncMap));
	this.navMap.addEventListener("stopPanning",$bind(this,this.onStopPanning));
	map.addEventListener("mapProviderChanged",$bind(this,this.onProviderChanged));
	map.addEventListener("extentChanged",$bind(this,this.syncNavMap));
	map.addEventListener("panned",$bind(this,this.syncNavMap));
	map.addEventListener("resized",$bind(this,this.setPosition));
	map.addEventListener("startPanning",$bind(this,this.syncNavMap));
	map.addEventListener("startZooming",$bind(this,this.syncNavMap));
	map.addEventListener("stopPanning",$bind(this,this.syncNavMap));
	map.addEventListener("stopZooming",$bind(this,this.syncNavMap));
	map.addEventListener("zoomedBy",$bind(this,this.syncNavMap));
};
$hxClasses["com.modestmaps.extras.NavigatorWindow"] = com_modestmaps_extras_NavigatorWindow;
com_modestmaps_extras_NavigatorWindow.__name__ = ["com","modestmaps","extras","NavigatorWindow"];
com_modestmaps_extras_NavigatorWindow.__super__ = openfl_display_Sprite;
com_modestmaps_extras_NavigatorWindow.prototype = $extend(openfl_display_Sprite.prototype,{
	map: null
	,navMap: null
	,box: null
	,zoomOffset: null
	,ignoreMap: null
	,ignoreNav: null
	,navWidth: null
	,navHeight: null
	,navBorder: null
	,navBorderColor: null
	,boxLineThickness: null
	,boxLineColor: null
	,boxFillColor: null
	,boxFillAlpha: null
	,onNavDoubleClick: function(event) {
		var l = this.navMap.pointLocation(new openfl_geom_Point(event.localX,event.localY));
		if(event.shiftKey) this.map.panAndZoomOut(l); else this.map.panAndZoomIn(l);
		event.stopImmediatePropagation();
	}
	,onNavMouseWheel: function(event) {
		event.stopImmediatePropagation();
	}
	,setPosition: function(event) {
		this.navMap.set_x(this.map.getWidth() - this.navWidth);
		this.navMap.set_y(this.map.getHeight() - this.navHeight);
		this.syncNavMap(event);
		this.get_graphics().clear();
		this.get_graphics().beginFill(this.navBorderColor);
		this.get_graphics().drawRect(this.navMap.get_x() - this.navBorder,this.navMap.get_y() - this.navBorder,this.navWidth + this.navBorder,this.navHeight + this.navBorder);
	}
	,onProviderChanged: function(event) {
		this.navMap.setMapProvider(event.newMapProvider);
	}
	,syncNavMap: function(event) {
		if(!this.ignoreMap) {
			if(event != null && event.currentTarget != this.map) return;
			this.ignoreNav = true;
			this.navMap.setCenter(this.map.getCenter());
			this.navMap.grid.set_zoomLevel(this.map.grid.get_zoomLevel() - this.zoomOffset);
			this.ignoreNav = false;
			var extent = this.map.getExtent();
			var nw = this.navMap.locationPoint(extent.get_northWest());
			var se = this.navMap.locationPoint(extent.get_southEast());
			this.box.get_graphics().clear();
			this.box.get_graphics().lineStyle();
			this.box.get_graphics().beginFill(this.boxFillColor,this.boxFillAlpha);
			this.box.get_graphics().drawRect(0,0,this.navWidth,this.navHeight);
			this.box.get_graphics().lineStyle(this.boxLineThickness,this.boxLineColor,1,false,1);
			this.box.get_graphics().drawRect(nw.x,nw.y,se.x - nw.x,se.y - nw.y);
			this.box.get_graphics().endFill();
		}
	}
	,onStartPanning: function(event) {
		this.ignoreMap = true;
		this.stopEvent(event);
	}
	,onStopPanning: function(event) {
		this.ignoreMap = false;
		this.stopEvent(event);
	}
	,syncMap: function(event) {
		if(!this.ignoreNav) {
			this.map.setCenter(this.navMap.getCenter());
			this.map.grid.set_zoomLevel(this.navMap.grid.get_zoomLevel() + this.zoomOffset);
		}
		this.stopEvent(event);
	}
	,stopEvent: function(event) {
		event.stopImmediatePropagation();
	}
	,__class__: com_modestmaps_extras_NavigatorWindow
});
var com_modestmaps_extras_ZoomBox = function(map,boxLineThickness,boxLineColor,boxFillColor,boxFillAlpha) {
	if(boxFillAlpha == null) boxFillAlpha = 0.2;
	if(boxFillColor == null) boxFillColor = 16777215;
	if(boxLineColor == null) boxLineColor = 16711680;
	if(boxLineThickness == null) boxLineThickness = 0;
	openfl_display_Sprite.call(this);
	this.map = map;
	this.box = new openfl_display_Shape();
	this.box.get_graphics().lineStyle(boxLineThickness,boxLineColor,1,false,1);
	this.box.get_graphics().beginFill(boxFillColor,boxFillAlpha);
	this.box.get_graphics().drawRect(0,0,100,100);
	this.box.get_graphics().endFill();
	this.box.set_visible(false);
	this.addChild(this.box);
	this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
};
$hxClasses["com.modestmaps.extras.ZoomBox"] = com_modestmaps_extras_ZoomBox;
com_modestmaps_extras_ZoomBox.__name__ = ["com","modestmaps","extras","ZoomBox"];
com_modestmaps_extras_ZoomBox.__super__ = openfl_display_Sprite;
com_modestmaps_extras_ZoomBox.prototype = $extend(openfl_display_Sprite.prototype,{
	map: null
	,box: null
	,p: null
	,onAddedToStage: function(event) {
		this.removeEventListener("addedToStage",$bind(this,this.onAddedToStage));
		this.stage.addEventListener("mouseDown",$bind(this,this.onMouseDown),true,-100);
		this.addEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
	}
	,onRemovedFromStage: function(event) {
		this.removeEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
		this.stage.removeEventListener("mouseDown",$bind(this,this.onMouseDown),true);
		this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
	}
	,onMouseDown: function(event) {
		if(event.shiftKey) {
			this.map.grid.mouseEnabled = false;
			this.p = new openfl_geom_Point(this.stage.get_mouseX(),this.stage.get_mouseY());
			this.p = this.map.globalToLocal(this.p);
			this.box.set_x(this.p.x);
			this.box.set_y(this.p.y);
			this.box.set_scaleX(this.box.set_scaleY(0));
			this.stage.addEventListener("mouseUp",$bind(this,this.onMouseUp));
			this.stage.addEventListener("mouseLeave",$bind(this,this.onMouseUp));
			this.stage.addEventListener("mouseMove",$bind(this,this.onMouseMove));
			event.stopImmediatePropagation();
		}
	}
	,onMouseUp: function(event) {
		this.box.set_visible(false);
		if(Math.abs(this.box.get_scaleX()) > 0 && Math.abs(this.box.get_scaleY()) > 0) {
			var rect = this.box.getBounds(this.map);
			var nw = this.map.pointLocation(rect.get_topLeft());
			var se = this.map.pointLocation(rect.get_bottomRight());
			var extent = new com_modestmaps_core_MapExtent(nw.lat,se.lat,se.lon,nw.lon);
			this.map.setExtent(extent);
		}
		this.stage.removeEventListener("mouseUp",$bind(this,this.onMouseUp));
		this.stage.removeEventListener("mouseLeave",$bind(this,this.onMouseUp));
		this.stage.removeEventListener("mouseMove",$bind(this,this.onMouseMove));
		event.stopImmediatePropagation();
		this.map.grid.mouseEnabled = true;
	}
	,onMouseMove: function(event) {
		var mouseP = this.map.globalToLocal(new openfl_geom_Point(this.stage.get_mouseX(),this.stage.get_mouseY()));
		var movement = this.p.subtract(mouseP);
		this.box.set_visible(true);
		this.box.set_scaleX(-movement.x / 100);
		this.box.set_scaleY(-movement.y / 100);
	}
	,__class__: com_modestmaps_extras_ZoomBox
});
var com_modestmaps_extras_ZoomSlider = function(map,trackHeight) {
	if(trackHeight == null) trackHeight = 100;
	this.dragging = false;
	openfl_display_Sprite.call(this);
	this.map = map;
	this.trackHeight = trackHeight;
	map.addEventListener("extentChanged",$bind(this,this.update));
	map.addEventListener("zoomedBy",$bind(this,this.update));
	map.addEventListener("stopZooming",$bind(this,this.update));
	map.addEventListener("startZooming",$bind(this,this.update));
	this.set_x(15);
	this.set_y(15);
	this.track = new openfl_display_Sprite();
	this.track.addEventListener("click",$bind(this,this.onTrackClick));
	this.track.buttonMode = this.track.useHandCursor = true;
	this.track.get_graphics().lineStyle(5,14271880);
	this.track.get_graphics().moveTo(0,0);
	this.track.get_graphics().lineTo(0,trackHeight);
	this.track.get_graphics().lineStyle(0,0,0.2);
	this.track.set_x(5);
	this.addChild(this.track);
	this.thumb = new openfl_display_Sprite();
	this.thumb.addEventListener("mouseDown",$bind(this,this.onThumbMouse));
	this.thumb.buttonMode = this.thumb.useHandCursor = true;
	this.thumb.get_graphics().beginFill(16744576);
	this.thumb.get_graphics().drawCircle(0,0,5);
	this.thumb.set_x(5);
	this.addChild(this.thumb);
	this.set_filters([new openfl_filters_DropShadowFilter(1,45,0,1,3,3,.7,2)]);
	this.update();
};
$hxClasses["com.modestmaps.extras.ZoomSlider"] = com_modestmaps_extras_ZoomSlider;
com_modestmaps_extras_ZoomSlider.__name__ = ["com","modestmaps","extras","ZoomSlider"];
com_modestmaps_extras_ZoomSlider.__super__ = openfl_display_Sprite;
com_modestmaps_extras_ZoomSlider.prototype = $extend(openfl_display_Sprite.prototype,{
	map: null
	,track: null
	,thumb: null
	,dragging: null
	,trackHeight: null
	,onTrackClick: function(event) {
		var p = this.globalToLocal(new openfl_geom_Point(event.stageX,event.stageY));
		this.thumb.set_y(p.y);
		motion_Actuate.tween(this.map.grid,0.25,{ zoomLevel : Math.round(this.map.grid.get_minZoom() + (this.map.grid.get_maxZoom() - this.map.grid.get_minZoom()) * (1 - this.get_proportion()))});
	}
	,onThumbMouse: function(event) {
		if(event.type == "mouseMove") this.set_proportion(this.thumb.get_y() / this.trackHeight); else if(event.type == "mouseDown") {
			this.thumb.startDrag(false,new openfl_geom_Rectangle(this.thumb.get_x(),0,0,this.trackHeight));
			this.dragging = true;
			this.stage.addEventListener("mouseUp",$bind(this,this.onThumbMouse));
			this.stage.addEventListener("mouseMove",$bind(this,this.onThumbMouse));
			this.stage.addEventListener("mouseLeave",$bind(this,this.onThumbMouse));
		} else if(event.type == "mouseUp" || event.type == "mouseLeave") {
			this.thumb.stopDrag();
			this.dragging = false;
			motion_Actuate.tween(this.map.grid,0.1,{ zoomLevel : Math.round(this.map.grid.get_zoomLevel())});
			this.stage.removeEventListener("mouseUp",$bind(this,this.onThumbMouse));
			this.stage.removeEventListener("mouseMove",$bind(this,this.onThumbMouse));
			this.stage.removeEventListener("mouseLeave",$bind(this,this.onThumbMouse));
		}
		if(js_Boot.__instanceof(event,openfl_events_MouseEvent)) (js_Boot.__cast(event , openfl_events_MouseEvent)).updateAfterEvent();
	}
	,update: function(event) {
		if(!this.dragging) this.set_proportion(1.0 - (this.map.grid.get_zoomLevel() - this.map.grid.get_minZoom()) / (this.map.grid.get_maxZoom() - this.map.grid.get_minZoom()));
	}
	,get_proportion: function() {
		return this.thumb.get_y() / this.trackHeight;
	}
	,set_proportion: function(prop) {
		if(!this.dragging) this.thumb.set_y(prop * this.trackHeight); else this.map.grid.set_zoomLevel(Std["int"](this.map.grid.get_minZoom() + (this.map.grid.get_maxZoom() - this.map.grid.get_minZoom()) * (1.0 - prop)));
		return prop;
	}
	,__class__: com_modestmaps_extras_ZoomSlider
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_proportion:"set_proportion",get_proportion:"get_proportion"})
});
var com_modestmaps_extras_ui_Button = function(type,radius,bgColor,fgColor,beveled) {
	if(beveled == null) beveled = true;
	if(fgColor == null) fgColor = 0;
	if(bgColor == null) bgColor = 16777215;
	if(radius == null) radius = 9;
	openfl_display_Sprite.call(this);
	if(this.overTransform == null) this.overTransform = new openfl_geom_ColorTransform(1,1,1);
	if(this.outTransform == null) this.outTransform = new openfl_geom_ColorTransform(1,.9,.6);
	this.useHandCursor = true;
	this.buttonMode = true;
	this.set_cacheAsBitmap(true);
	this.addEventListener("mouseOver",$bind(this,this.onMouseOver));
	this.addEventListener("mouseOut",$bind(this,this.onMouseOut));
	this.get_graphics().clear();
	if(beveled) {
		this.get_graphics().beginFill(14540253);
		this.get_graphics().drawRoundRect(0,0,20,20,radius,radius);
		this.get_graphics().beginFill(bgColor);
		this.get_graphics().drawRoundRect(0,0,18,18,radius,radius);
		this.get_graphics().beginFill(12303291);
		this.get_graphics().drawRoundRect(2,2,18,18,radius,radius);
		this.get_graphics().beginFill(14540253);
		this.get_graphics().drawRoundRect(1,1,18,18,radius,radius);
	} else {
		this.get_graphics().beginFill(bgColor);
		this.get_graphics().drawRoundRect(0,0,20,20,radius,radius);
	}
	if(type != null) switch(type) {
	case "left":
		this.get_graphics().beginFill(fgColor);
		this.get_graphics().moveTo(14,6);
		this.get_graphics().lineTo(6,10);
		this.get_graphics().lineTo(14,14);
		this.get_graphics().lineTo(14,6);
		break;
	case "right":
		this.get_graphics().beginFill(fgColor);
		this.get_graphics().moveTo(6,6);
		this.get_graphics().lineTo(14,10);
		this.get_graphics().lineTo(6,14);
		this.get_graphics().lineTo(6,6);
		break;
	case "up":
		this.get_graphics().beginFill(fgColor);
		this.get_graphics().moveTo(6,14);
		this.get_graphics().lineTo(10,6);
		this.get_graphics().lineTo(14,14);
		this.get_graphics().lineTo(6,14);
		break;
	case "down":
		this.get_graphics().beginFill(fgColor);
		this.get_graphics().moveTo(6,6);
		this.get_graphics().lineTo(10,14);
		this.get_graphics().lineTo(14,6);
		this.get_graphics().lineTo(6,6);
		break;
	case "in":
		this.get_graphics().lineStyle(2,fgColor,1.0,true);
		this.get_graphics().moveTo(7,10);
		this.get_graphics().lineTo(13,10);
		this.get_graphics().lineTo(7,10);
		this.get_graphics().moveTo(10,7);
		this.get_graphics().lineTo(10,13);
		this.get_graphics().lineTo(10,7);
		break;
	case "out":
		this.get_graphics().lineStyle(2,fgColor,1.0,true);
		this.get_graphics().moveTo(7,10);
		this.get_graphics().lineTo(13,10);
		this.get_graphics().lineTo(7,10);
		break;
	}
	this.get_transform().set_colorTransform(this.outTransform);
};
$hxClasses["com.modestmaps.extras.ui.Button"] = com_modestmaps_extras_ui_Button;
com_modestmaps_extras_ui_Button.__name__ = ["com","modestmaps","extras","ui","Button"];
com_modestmaps_extras_ui_Button.__super__ = openfl_display_Sprite;
com_modestmaps_extras_ui_Button.prototype = $extend(openfl_display_Sprite.prototype,{
	overTransform: null
	,outTransform: null
	,onMouseOver: function(event) {
		this.get_transform().set_colorTransform(this.overTransform);
	}
	,onMouseOut: function(event) {
		this.get_transform().set_colorTransform(this.outTransform);
	}
	,__class__: com_modestmaps_extras_ui_Button
});
var com_modestmaps_geo_IProjection = function() { };
$hxClasses["com.modestmaps.geo.IProjection"] = com_modestmaps_geo_IProjection;
com_modestmaps_geo_IProjection.__name__ = ["com","modestmaps","geo","IProjection"];
com_modestmaps_geo_IProjection.prototype = {
	locationCoordinate: null
	,coordinateLocation: null
	,toString: null
	,__class__: com_modestmaps_geo_IProjection
};
var com_modestmaps_geo_AbstractProjection = function(zoom,T) {
	if(T != null) this.T = T;
	this.zoom = zoom;
};
$hxClasses["com.modestmaps.geo.AbstractProjection"] = com_modestmaps_geo_AbstractProjection;
com_modestmaps_geo_AbstractProjection.__name__ = ["com","modestmaps","geo","AbstractProjection"];
com_modestmaps_geo_AbstractProjection.__interfaces__ = [com_modestmaps_geo_IProjection];
com_modestmaps_geo_AbstractProjection.prototype = {
	T: null
	,zoom: null
	,toString: function() {
		throw new js__$Boot_HaxeError(new openfl_errors_Error("Abstract method not implemented by subclass."));
		return null;
	}
	,rawProject: function(point) {
		throw new js__$Boot_HaxeError(new openfl_errors_Error("Abstract method not implemented by subclass."));
		return null;
	}
	,rawUnproject: function(point) {
		throw new js__$Boot_HaxeError(new openfl_errors_Error("Abstract method not implemented by subclass."));
		return null;
	}
	,project: function(point) {
		point = this.rawProject(point);
		if(this.T != null) point = this.T.transform(point);
		return point;
	}
	,unproject: function(point) {
		if(this.T != null) point = this.T.untransform(point);
		point = this.rawUnproject(point);
		return point;
	}
	,locationCoordinate: function(location) {
		var point = new openfl_geom_Point(Math.PI * location.lon / 180,Math.PI * location.lat / 180);
		point = this.project(point);
		return new com_modestmaps_core_Coordinate(point.y,point.x,this.zoom);
	}
	,coordinateLocation: function(coordinate) {
		coordinate = coordinate.zoomTo(this.zoom);
		var point = new openfl_geom_Point(coordinate.column,coordinate.row);
		point = this.unproject(point);
		return new com_modestmaps_geo_Location(180 * point.y / Math.PI,180 * point.x / Math.PI);
	}
	,__class__: com_modestmaps_geo_AbstractProjection
};
var com_modestmaps_geo_Location = function(lat,lon) {
	this.lat = lat;
	this.lon = lon;
};
$hxClasses["com.modestmaps.geo.Location"] = com_modestmaps_geo_Location;
com_modestmaps_geo_Location.__name__ = ["com","modestmaps","geo","Location"];
com_modestmaps_geo_Location.fromString = function(str,lonlat) {
	if(lonlat == null) lonlat = false;
	var parts = str.split(",");
	if(lonlat) parts.reverse();
	return new com_modestmaps_geo_Location(parseFloat(parts[0]),parseFloat(parts[1]));
};
com_modestmaps_geo_Location.prototype = {
	lat: null
	,lon: null
	,clone: function() {
		return new com_modestmaps_geo_Location(this.lat,this.lon);
	}
	,normalize: function() {
		var loc = this.clone();
		loc.lat = Math.max(com_modestmaps_geo_Location.MIN_LAT,Math.min(84,loc.lat));
		while(loc.lon > 180) loc.lon -= 360;
		while(loc.lon < -180) loc.lon += 360;
		return loc;
	}
	,toString: function(precision) {
		if(precision == null) precision = 5;
		return [this.lat,this.lon].join(",");
	}
	,__class__: com_modestmaps_geo_Location
};
var com_modestmaps_geo_MercatorProjection = function(zoom,T) {
	com_modestmaps_geo_AbstractProjection.call(this,zoom,T);
};
$hxClasses["com.modestmaps.geo.MercatorProjection"] = com_modestmaps_geo_MercatorProjection;
com_modestmaps_geo_MercatorProjection.__name__ = ["com","modestmaps","geo","MercatorProjection"];
com_modestmaps_geo_MercatorProjection.__super__ = com_modestmaps_geo_AbstractProjection;
com_modestmaps_geo_MercatorProjection.prototype = $extend(com_modestmaps_geo_AbstractProjection.prototype,{
	toString: function() {
		return "Mercator(" + this.zoom + ", " + Std.string(this.T) + ")";
	}
	,rawProject: function(point) {
		return new openfl_geom_Point(point.x,Math.log(Math.tan(0.25 * Math.PI + 0.5 * point.y)));
	}
	,rawUnproject: function(point) {
		return new openfl_geom_Point(point.x,2 * Math.atan(Math.pow(Math.exp(1.0),point.y)) - 0.5 * Math.PI);
	}
	,__class__: com_modestmaps_geo_MercatorProjection
});
var com_modestmaps_geo_Transformation = function(ax,bx,cx,ay,by,cy) {
	this.ax = ax;
	this.bx = bx;
	this.cx = cx;
	this.ay = ay;
	this.by = by;
	this.cy = cy;
};
$hxClasses["com.modestmaps.geo.Transformation"] = com_modestmaps_geo_Transformation;
com_modestmaps_geo_Transformation.__name__ = ["com","modestmaps","geo","Transformation"];
com_modestmaps_geo_Transformation.prototype = {
	ax: null
	,bx: null
	,cx: null
	,ay: null
	,by: null
	,cy: null
	,toString: function() {
		return "T([" + this.ax + "," + this.bx + "," + this.cx + "][" + this.ay + "," + this.by + "," + this.cy + "])";
	}
	,transform: function(point) {
		return new openfl_geom_Point(this.ax * point.x + this.bx * point.y + this.cx,this.ay * point.x + this.by * point.y + this.cy);
	}
	,untransform: function(point) {
		return new openfl_geom_Point((point.x * this.by - point.y * this.bx - this.cx * this.by + this.cy * this.bx) / (this.ax * this.by - this.ay * this.bx),(point.x * this.ay - point.y * this.ax - this.cx * this.ay + this.cy * this.ax) / (this.bx * this.ay - this.by * this.ax));
	}
	,__class__: com_modestmaps_geo_Transformation
};
var com_modestmaps_mapproviders_AbstractMapProvider = function(minZoom,maxZoom) {
	if(maxZoom == null) maxZoom = 20;
	if(minZoom == null) minZoom = 1;
	var t = new com_modestmaps_geo_Transformation(1.068070779e7,0,3.355443185e7,0,-1.068070890e7,3.355443057e7);
	this.__projection = new com_modestmaps_geo_MercatorProjection(26,t);
	this.__topLeftOutLimit = new com_modestmaps_core_Coordinate(0,-Infinity,minZoom);
	this.__bottomRightInLimit = new com_modestmaps_core_Coordinate(1,Infinity,0).zoomTo(maxZoom);
};
$hxClasses["com.modestmaps.mapproviders.AbstractMapProvider"] = com_modestmaps_mapproviders_AbstractMapProvider;
com_modestmaps_mapproviders_AbstractMapProvider.__name__ = ["com","modestmaps","mapproviders","AbstractMapProvider"];
com_modestmaps_mapproviders_AbstractMapProvider.prototype = {
	__projection: null
	,__topLeftOutLimit: null
	,__bottomRightInLimit: null
	,geometry: function() {
		return Std.string(this.__projection);
	}
	,sourceCoordinate: function(coord) {
		var wrappedColumn = coord.column % Math.pow(2,coord.zoom);
		while(wrappedColumn < 0) wrappedColumn += Math.pow(2,coord.zoom);
		return new com_modestmaps_core_Coordinate(coord.row,wrappedColumn,coord.zoom);
	}
	,outerLimits: function() {
		return [this.__topLeftOutLimit.copy(),this.__bottomRightInLimit.copy()];
	}
	,locationCoordinate: function(location) {
		return this.__projection.locationCoordinate(location);
	}
	,coordinateLocation: function(coordinate) {
		return this.__projection.coordinateLocation(coordinate);
	}
	,get_tileWidth: function() {
		return 256;
	}
	,get_tileHeight: function() {
		return 256;
	}
	,__class__: com_modestmaps_mapproviders_AbstractMapProvider
	,__properties__: {get_tileHeight:"get_tileHeight",get_tileWidth:"get_tileWidth"}
};
var com_modestmaps_mapproviders_CARTODB_$MAPTYPE = $hxClasses["com.modestmaps.mapproviders.CARTODB_MAPTYPE"] = { __ename__ : ["com","modestmaps","mapproviders","CARTODB_MAPTYPE"], __constructs__ : ["POSITRON","DARK_MATTER"] };
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.POSITRON = ["POSITRON",0];
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.POSITRON.toString = $estr;
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.POSITRON.__enum__ = com_modestmaps_mapproviders_CARTODB_$MAPTYPE;
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.DARK_MATTER = ["DARK_MATTER",1];
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.DARK_MATTER.toString = $estr;
com_modestmaps_mapproviders_CARTODB_$MAPTYPE.DARK_MATTER.__enum__ = com_modestmaps_mapproviders_CARTODB_$MAPTYPE;
var com_modestmaps_mapproviders_IMapProvider = function() { };
$hxClasses["com.modestmaps.mapproviders.IMapProvider"] = com_modestmaps_mapproviders_IMapProvider;
com_modestmaps_mapproviders_IMapProvider.__name__ = ["com","modestmaps","mapproviders","IMapProvider"];
com_modestmaps_mapproviders_IMapProvider.prototype = {
	get_tileWidth: null
	,get_tileHeight: null
	,getTileUrls: null
	,locationCoordinate: null
	,coordinateLocation: null
	,outerLimits: null
	,geometry: null
	,__class__: com_modestmaps_mapproviders_IMapProvider
	,__properties__: {get_tileHeight:"get_tileHeight",get_tileWidth:"get_tileWidth"}
};
var com_modestmaps_mapproviders_CartoDBProvider = function(MapType,useSSL,retinaDisplay,minZoom,maxZoom) {
	if(maxZoom == null) maxZoom = 20;
	if(minZoom == null) minZoom = 1;
	if(retinaDisplay == null) retinaDisplay = false;
	if(useSSL == null) useSSL = false;
	com_modestmaps_mapproviders_AbstractMapProvider.call(this,minZoom,maxZoom);
	if(useSSL) this.baseURL = "https://cartodb-basemaps-@S.global.ssl.fastly.net/"; else this.baseURL = "http://@S.basemaps.cartocdn.com/";
	switch(MapType[1]) {
	case 0:
		this.baseURL += "light_all" + "/";
		break;
	case 1:
		this.baseURL += "dark_all" + "/";
		break;
	}
	this.retinaDisplay = retinaDisplay;
};
$hxClasses["com.modestmaps.mapproviders.CartoDBProvider"] = com_modestmaps_mapproviders_CartoDBProvider;
com_modestmaps_mapproviders_CartoDBProvider.__name__ = ["com","modestmaps","mapproviders","CartoDBProvider"];
com_modestmaps_mapproviders_CartoDBProvider.__interfaces__ = [com_modestmaps_mapproviders_IMapProvider];
com_modestmaps_mapproviders_CartoDBProvider.__super__ = com_modestmaps_mapproviders_AbstractMapProvider;
com_modestmaps_mapproviders_CartoDBProvider.prototype = $extend(com_modestmaps_mapproviders_AbstractMapProvider.prototype,{
	baseURL: null
	,retinaDisplay: null
	,getTileUrls: function(coord) {
		var sourceCoord = this.sourceCoordinate(coord);
		if(sourceCoord.row < 0 || sourceCoord.row >= Math.pow(2,coord.zoom)) return [];
		var server = ["a","b","c","d"][Math.floor(sourceCoord.row + sourceCoord.column + sourceCoord.zoom) % 4];
		var finalurl;
		if(this.retinaDisplay) finalurl = StringTools.replace(this.baseURL,"@S",server) + [sourceCoord.zoom,sourceCoord.column,sourceCoord.row].join("/") + "@2x.png"; else finalurl = StringTools.replace(this.baseURL,"@S",server) + [sourceCoord.zoom,sourceCoord.column,sourceCoord.row].join("/") + ".png";
		return [finalurl];
	}
	,__class__: com_modestmaps_mapproviders_CartoDBProvider
});
var com_modestmaps_mapproviders_OpenStreetMapProvider = function(minZoom,maxZoom) {
	if(maxZoom == null) maxZoom = 20;
	if(minZoom == null) minZoom = 1;
	com_modestmaps_mapproviders_AbstractMapProvider.call(this,minZoom,maxZoom);
};
$hxClasses["com.modestmaps.mapproviders.OpenStreetMapProvider"] = com_modestmaps_mapproviders_OpenStreetMapProvider;
com_modestmaps_mapproviders_OpenStreetMapProvider.__name__ = ["com","modestmaps","mapproviders","OpenStreetMapProvider"];
com_modestmaps_mapproviders_OpenStreetMapProvider.__interfaces__ = [com_modestmaps_mapproviders_IMapProvider];
com_modestmaps_mapproviders_OpenStreetMapProvider.__super__ = com_modestmaps_mapproviders_AbstractMapProvider;
com_modestmaps_mapproviders_OpenStreetMapProvider.prototype = $extend(com_modestmaps_mapproviders_AbstractMapProvider.prototype,{
	getTileUrls: function(coord) {
		var sourceCoord = this.sourceCoordinate(coord);
		if(sourceCoord.row < 0 || sourceCoord.row >= Math.pow(2,coord.zoom)) return [];
		return ["http://tile.openstreetmap.org/" + sourceCoord.zoom + "/" + sourceCoord.column + "/" + sourceCoord.row + ".png"];
	}
	,__class__: com_modestmaps_mapproviders_OpenStreetMapProvider
});
var com_modestmaps_overlays_MarkerClip = function(map) {
	this.markerSortFunction = com_modestmaps_overlays_MarkerClip.sortMarkersByYPosition;
	this.snapToPixels = false;
	this.zoomTolerance = 4;
	this.autoCache = true;
	this.scaleZoom = false;
	this.markersByName = new haxe_ds_StringMap();
	this.markers = [];
	this.coordinates = new haxe_ds_ObjectMap();
	this.locations = new haxe_ds_ObjectMap();
	openfl_display_Sprite.call(this);
	this.buttonMode = false;
	this.mouseEnabled = false;
	this.mouseChildren = true;
	this.map = map;
	this.set_x(map.getWidth() / 2);
	this.set_y(map.getHeight() / 2);
	this.previousGeometry = map.getMapProvider().geometry();
	map.addEventListener("startZooming",$bind(this,this.onMapStartZooming));
	map.addEventListener("stopZooming",$bind(this,this.onMapStopZooming));
	map.addEventListener("zoomedBy",$bind(this,this.onMapZoomedBy));
	map.addEventListener("startPanning",$bind(this,this.onMapStartPanning));
	map.addEventListener("stopPanning",$bind(this,this.onMapStopPanning));
	map.addEventListener("panned",$bind(this,this.onMapPanned));
	map.addEventListener("resized",$bind(this,this.onMapResized));
	map.addEventListener("extentChanged",$bind(this,this.onMapExtentChanged));
	map.addEventListener("rendered",$bind(this,this.updateClips));
	map.addEventListener("mapProviderChanged",$bind(this,this.onMapProviderChanged));
	this.addEventListener("click",$bind(this,this.onMarkerClick));
	this.addEventListener("rollOver",$bind(this,this.onMarkerRollOver),true);
	this.addEventListener("rollOut",$bind(this,this.onMarkerRollOut),true);
	this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
};
$hxClasses["com.modestmaps.overlays.MarkerClip"] = com_modestmaps_overlays_MarkerClip;
com_modestmaps_overlays_MarkerClip.__name__ = ["com","modestmaps","overlays","MarkerClip"];
com_modestmaps_overlays_MarkerClip.sortMarkersByYPosition = function(a,b) {
	var diffY = a.get_y() - b.get_y();
	if(diffY > 0) return 1; else if(diffY < 0) return -1; else return 0;
};
com_modestmaps_overlays_MarkerClip.__super__ = openfl_display_Sprite;
com_modestmaps_overlays_MarkerClip.prototype = $extend(openfl_display_Sprite.prototype,{
	map: null
	,drawCoord: null
	,locations: null
	,coordinates: null
	,markers: null
	,markersByName: null
	,scaleZoom: null
	,autoCache: null
	,zoomTolerance: null
	,snapToPixels: null
	,markerSortFunction: null
	,previousGeometry: null
	,_dirty: null
	,onAddedToStage: function(event) {
		this.set_dirty(true);
		this.updateClips();
		this.removeEventListener("addedToStage",$bind(this,this.onAddedToStage));
		this.addEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
	}
	,onRemovedFromStage: function(event) {
		this.removeEventListener("removedFromStage",$bind(this,this.onRemovedFromStage));
		this.addEventListener("addedToStage",$bind(this,this.onAddedToStage));
	}
	,attachMarker: function(marker,location) {
		if(HxOverrides.indexOf(this.markers,marker,0) == -1) {
			this.locations.set(marker,location.clone());
			this.coordinates.set(marker,this.map.getMapProvider().locationCoordinate(location));
			this.markersByName.set(marker.get_name(),marker);
			this.markers.push(marker);
			var added = this.updateClip(marker);
			if(added) {
				haxe_Log.trace("attachMarker - markers.length : " + this.markers.length,{ fileName : "MarkerClip.hx", lineNumber : 166, className : "com.modestmaps.overlays.MarkerClip", methodName : "attachMarker"});
				this.requestSort(true);
			}
		}
	}
	,markerInBounds: function(marker,w,h) {
		return marker.get_x() > -w / 2 && marker.get_x() < w / 2 && marker.get_y() > -h / 2 && marker.get_y() < h / 2;
	}
	,getMarkerLocation: function(marker) {
		return this.locations.h[marker.__id__];
	}
	,updateClips: function(event) {
		if(!this.get_dirty()) return;
		var center = this.map.grid.get_centerCoordinate();
		if(center.equalTo(this.drawCoord)) {
			this.set_dirty(false);
			return;
		}
		this.drawCoord = center.copy();
		this.set_x(this.map.getWidth() / 2);
		this.set_y(this.map.getHeight() / 2);
		if(this.scaleZoom) this.set_scaleX(this.set_scaleY(1.0));
		var doSort = false;
		var _g = 0;
		var _g1 = this.markers;
		while(_g < _g1.length) {
			var marker = _g1[_g];
			++_g;
			doSort = this.updateClip(marker) || doSort;
		}
		if(doSort) this.requestSort(true);
		this.set_dirty(false);
	}
	,resetCoordinates: function() {
		var provider = this.map.getMapProvider();
		var _g = 0;
		var _g1 = this.markers;
		while(_g < _g1.length) {
			var marker = _g1[_g];
			++_g;
			this.coordinates.set(marker,provider.locationCoordinate(this.locations.h[marker.__id__]));
		}
		this.set_dirty(true);
	}
	,sortTimer: null
	,requestSort: function(updateOrder) {
		if(updateOrder == null) updateOrder = false;
		var _g = this;
		if(this.sortTimer != null) {
			($_=this.sortTimer,$bind($_,$_.stop));
			this.sortTimer = null;
		}
		this.sortTimer = haxe_Timer.delay(function() {
			_g.sortMarkers(updateOrder);
		},50);
	}
	,sortMarkers: function(updateOrder) {
		if(updateOrder == null) updateOrder = false;
		if(updateOrder && this.markerSortFunction != null) this.markers.sort(this.markerSortFunction);
		var index = 0;
		var _g = 0;
		var _g1 = this.markers;
		while(_g < _g1.length) {
			var marker = _g1[_g];
			++_g;
			if(this.contains(marker)) {
				this.setChildIndex(marker,Std["int"](Math.min(index,this.get_numChildren() - 1)));
				index++;
			}
		}
	}
	,updateClip: function(marker) {
		if(marker.get_visible()) {
			var point = this.map.grid.coordinatePoint(this.coordinates.h[marker.__id__],this);
			marker.set_x(this.snapToPixels?Math.round(point.x):point.x);
			marker.set_y(this.snapToPixels?Math.round(point.y):point.y);
			var w = this.map.getWidth() * 2;
			var h = this.map.getHeight() * 2;
			if(this.markerInBounds(marker,w,h)) {
				if(!this.contains(marker)) {
					this.addChild(marker);
					return true;
				}
			} else if(this.contains(marker)) {
				this.removeChild(marker);
				return false;
			}
		}
		return false;
	}
	,onMapExtentChanged: function(event) {
		this.set_dirty(true);
	}
	,onMapPanned: function(event) {
		if(this.drawCoord != null) {
			var p = this.map.grid.coordinatePoint(this.drawCoord);
			this.set_x(p.x);
			this.set_y(p.y);
		} else this.set_dirty(true);
	}
	,onMapZoomedBy: function(event) {
		if(this.autoCache) this.set_cacheAsBitmap(false);
		if(this.scaleZoom && this.drawCoord != null) {
			if(Math.abs(this.map.grid.get_zoomLevel() - this.drawCoord.zoom) < this.zoomTolerance) this.set_scaleX(this.set_scaleY(Math.pow(2,this.map.grid.get_zoomLevel() - this.drawCoord.zoom))); else this.set_dirty(true);
		} else this.set_dirty(true);
	}
	,onMapStartPanning: function(event) {
		if(this.autoCache) this.set_cacheAsBitmap(true);
	}
	,onMapStartZooming: function(event) {
		if(this.autoCache) this.set_cacheAsBitmap(false);
	}
	,onMapStopPanning: function(event) {
		if(this.autoCache) this.set_cacheAsBitmap(false);
		this.set_dirty(true);
	}
	,onMapStopZooming: function(event) {
		this.set_dirty(true);
	}
	,onMapResized: function(event) {
		this.set_x(this.map.getWidth() / 2);
		this.set_y(this.map.getHeight() / 2);
		this.set_dirty(true);
		this.updateClips();
	}
	,onMapProviderChanged: function(event) {
		var mapProvider = this.map.getMapProvider();
		if(mapProvider.geometry() != this.previousGeometry) {
			this.resetCoordinates();
			this.previousGeometry = mapProvider.geometry();
		}
	}
	,set_dirty: function(d) {
		this._dirty = d;
		if(d) {
			if(this.stage != null) this.stage.invalidate();
		}
		return d;
	}
	,get_dirty: function() {
		return this._dirty;
	}
	,onMarkerClick: function(event) {
		var marker;
		marker = js_Boot.__cast(event.target , openfl_display_DisplayObject);
		var location = this.getMarkerLocation(marker);
		this.dispatchEvent(new com_modestmaps_events_MarkerEvent("markerClick",marker,location,true));
	}
	,onMarkerRollOver: function(event) {
		var marker;
		marker = js_Boot.__cast(event.target , openfl_display_DisplayObject);
		var location = this.getMarkerLocation(marker);
		this.dispatchEvent(new com_modestmaps_events_MarkerEvent("markerRollOver",marker,location,true));
	}
	,onMarkerRollOut: function(event) {
		var marker;
		marker = js_Boot.__cast(event.target , openfl_display_DisplayObject);
		var location = this.getMarkerLocation(marker);
		this.dispatchEvent(new com_modestmaps_events_MarkerEvent("markerRollOut",marker,location,true));
	}
	,__class__: com_modestmaps_overlays_MarkerClip
	,__properties__: $extend(openfl_display_Sprite.prototype.__properties__,{set_dirty:"set_dirty",get_dirty:"get_dirty"})
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	high: null
	,low: null
	,__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Resource = function() { };
$hxClasses["haxe.Resource"] = haxe_Resource;
haxe_Resource.__name__ = ["haxe","Resource"];
haxe_Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe_io_Bytes.ofString(x.str);
			return haxe_crypto_Base64.decode(x.data);
		}
	}
	return null;
};
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.prototype = {
	buf: null
	,cache: null
	,shash: null
	,scount: null
	,useCache: null
	,useEnumIndex: null
	,toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(isNaN(v2)) this.buf.b += "k"; else if(!isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var _g1_head = v3.h;
					var _g1_val = null;
					while(_g1_head != null) {
						var i1;
						_g1_val = _g1_head[0];
						_g1_head = _g1_head[1];
						i1 = _g1_val;
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(d.getTime());
					break;
				case haxe_ds_StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it0 = v4.keys();
					while( $it0.hasNext() ) {
						var k = $it0.next();
						this.serializeString(k);
						this.serialize(__map_reserved[k] != null?v4.getReserved(k):v4.h[k]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it1 = v5.keys();
					while( $it1.hasNext() ) {
						var k1 = $it1.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.h[k1]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it2 = v6.keys();
					while( $it2.hasNext() ) {
						var k2 = $it2.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe_io_Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe_Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(js_Boot.__instanceof(v,Class)) {
					var className = Type.getClassName(v);
					this.buf.b += "A";
					this.serializeString(className);
				} else if(js_Boot.__instanceof(v,Enum)) {
					this.buf.b += "B";
					this.serializeString(Type.getEnumName(v));
				} else {
					if(this.useCache && this.serializeRef(v)) return;
					this.buf.b += "o";
					this.serializeFields(v);
				}
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw new js__$Boot_HaxeError("Cannot serialize function");
				break;
			default:
				throw new js__$Boot_HaxeError("Cannot serialize " + Std.string(v));
			}
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	id: null
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	buf: null
	,pos: null
	,length: null
	,cache: null
	,scache: null
	,resolver: null
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw new js__$Boot_HaxeError("Invalid object");
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw new js__$Boot_HaxeError("Invalid object key");
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw new js__$Boot_HaxeError("Invalid enum format");
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			return this.readFloat();
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw new js__$Boot_HaxeError("Invalid string length");
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return NaN;
		case 109:
			return -Infinity;
		case 112:
			return Infinity;
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw new js__$Boot_HaxeError("Invalid reference");
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw new js__$Boot_HaxeError("Invalid string reference");
			return this.scache[n2];
		case 120:
			throw new js__$Boot_HaxeError(this.unserialize());
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw new js__$Boot_HaxeError("Class not found " + name);
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw new js__$Boot_HaxeError("Enum not found " + name1);
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw new js__$Boot_HaxeError("Enum not found " + name2);
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw new js__$Boot_HaxeError("Unknown enum index " + name2 + "@" + index);
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe_ds_IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c1 = this.get(this.pos++);
			while(c1 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c1 = this.get(this.pos++);
			}
			if(c1 != 104) throw new js__$Boot_HaxeError("Invalid IntMap format");
			return h1;
		case 77:
			var h2 = new haxe_ds_ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				var s3 = HxOverrides.substr(this.buf,this.pos,19);
				d = HxOverrides.strDate(s3);
				this.pos += 19;
			} else {
				var t = this.readFloat();
				var d1 = new Date();
				d1.setTime(t);
				d = d1;
			}
			this.cache.push(d);
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw new js__$Boot_HaxeError("Invalid bytes length");
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = new haxe_io_Bytes(new ArrayBuffer(size));
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c2 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c2 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c2 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c21 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c21 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw new js__$Boot_HaxeError("Class not found " + name3);
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw new js__$Boot_HaxeError("Invalid custom data");
			return o2;
		case 65:
			var name4 = this.unserialize();
			var cl2 = this.resolver.resolveClass(name4);
			if(cl2 == null) throw new js__$Boot_HaxeError("Class not found " + name4);
			return cl2;
		case 66:
			var name5 = this.unserialize();
			var e2 = this.resolver.resolveEnum(name5);
			if(e2 == null) throw new js__$Boot_HaxeError("Enum not found " + name5);
			return e2;
		default:
		}
		this.pos--;
		throw new js__$Boot_HaxeError("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) return hb;
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,data: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,__class__: haxe_io_Bytes
};
var haxe_crypto_Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe_crypto_Base64;
haxe_crypto_Base64.__name__ = ["haxe","crypto","Base64"];
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw new js__$Boot_HaxeError("BaseCode : base length must be a power of two.");
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe_crypto_BaseCode;
haxe_crypto_BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe_crypto_BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw new js__$Boot_HaxeError("BaseCode : invalid encoded char");
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	map: null
	,keys: null
	,index: null
	,count: null
	,hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,rh: null
	,set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608);
	if(sig == 8388608 && exp < 128) {
		sig = 0;
		exp++;
	}
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else if(!isFinite(v)) {
		if(v > 0) {
			i64.low = 0;
			i64.high = 2146435072;
		} else {
			i64.low = 0;
			i64.high = -1048576;
		}
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = ["haxe","io","Path"];
haxe_io_Path.withoutExtension = function(path) {
	var s = new haxe_io_Path(path);
	s.ext = null;
	return s.toString();
};
haxe_io_Path.prototype = {
	dir: null
	,file: null
	,ext: null
	,backslash: null
	,toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe_io_Path
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	val: null
	,__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html__$CanvasElement_CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js_html__$CanvasElement_CanvasUtil;
js_html__$CanvasElement_CanvasUtil.__name__ = ["js","html","_CanvasElement","CanvasUtil"];
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) return ctx;
	}
	return null;
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	byteLength: null
	,a: null
	,slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	buf: null
	,offset: null
	,length: null
	,getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var lime__$backend_html5_HTML5Application = function(parent) {
	this.gameDeviceCache = new haxe_ds_IntMap();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime_media_AudioManager.init();
};
$hxClasses["lime._backend.html5.HTML5Application"] = lime__$backend_html5_HTML5Application;
lime__$backend_html5_HTML5Application.__name__ = ["lime","_backend","html5","HTML5Application"];
lime__$backend_html5_HTML5Application.prototype = {
	gameDeviceCache: null
	,currentUpdate: null
	,deltaTime: null
	,framePeriod: null
	,lastUpdate: null
	,nextUpdate: null
	,parent: null
	,convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) return keyCode + 32;
		switch(keyCode) {
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 20:
			return 1073741881;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 35:
			return 1073741901;
		case 36:
			return 1073741898;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 96:
			return 1073741922;
		case 97:
			return 1073741913;
		case 98:
			return 1073741914;
		case 99:
			return 1073741915;
		case 100:
			return 1073741916;
		case 101:
			return 1073741917;
		case 102:
			return 1073741918;
		case 103:
			return 1073741919;
		case 104:
			return 1073741920;
		case 105:
			return 1073741921;
		case 106:
			return 1073741909;
		case 107:
			return 1073741911;
		case 109:
			return 1073741910;
		case 110:
			return 1073741923;
		case 111:
			return 1073741908;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 144:
			return 1073741907;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		return keyCode;
	}
	,create: function(config) {
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		
			if (!CanvasRenderingContext2D.prototype.isPointInStroke) {
				CanvasRenderingContext2D.prototype.isPointInStroke = function (path, x, y) {
					return false;
				};
			}
			
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			this.parent.onUpdate.dispatch(this.deltaTime | 0);
			if(this.parent.__renderers[0] != null) {
				this.parent.__renderers[0].onRender.dispatch();
				this.parent.__renderers[0].flip();
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
				this.nextUpdate = this.currentUpdate;
			} else this.nextUpdate = this.currentUpdate + this.framePeriod;
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.__windows[0] != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null?event.keyCode:event.which);
			var modifier;
			modifier = (event.shiftKey?3:0) | (event.ctrlKey?192:0) | (event.altKey?768:0) | (event.metaKey?3072:0);
			if(event.type == "keydown") {
				this.parent.__windows[0].onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.__windows[0].onKeyDown.canceled) event.preventDefault();
			} else {
				this.parent.__windows[0].onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.__windows[0].onKeyUp.canceled) event.preventDefault();
			}
		}
	}
	,handleWindowEvent: function(event) {
		if(this.parent.__windows[0] != null) {
			var _g = event.type;
			switch(_g) {
			case "focus":
				this.parent.__windows[0].onFocusIn.dispatch();
				this.parent.__windows[0].onActivate.dispatch();
				break;
			case "blur":
				this.parent.__windows[0].onFocusOut.dispatch();
				this.parent.__windows[0].onDeactivate.dispatch();
				break;
			case "resize":
				var cacheWidth = this.parent.__windows[0].__width;
				var cacheHeight = this.parent.__windows[0].__height;
				this.parent.__windows[0].backend.handleResize();
				if(this.parent.__windows[0].__width != cacheWidth || this.parent.__windows[0].__height != cacheHeight) this.parent.__windows[0].onResize.dispatch(this.parent.__windows[0].__width,this.parent.__windows[0].__height);
				break;
			case "beforeunload":
				this.parent.__windows[0].onClose.dispatch();
				break;
			}
		}
	}
	,setFrameRate: function(value) {
		if(value >= 60) this.framePeriod = -1; else if(value > 0) this.framePeriod = 1000 / value; else this.framePeriod = 1000;
		return value;
	}
	,updateGameDevices: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		if(devices == null) return;
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g1 = 0;
		var _g = devices.length;
		while(_g1 < _g) {
			var i = _g1++;
			id = i;
			data = devices[id];
			if(data == null) continue;
			if(!this.gameDeviceCache.h.hasOwnProperty(id)) {
				cache = new lime__$backend_html5_GameDeviceData();
				cache.id = id;
				cache.connected = data.connected;
				var _g3 = 0;
				var _g2 = data.buttons.length;
				while(_g3 < _g2) {
					var i1 = _g3++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g31 = 0;
				var _g21 = data.axes.length;
				while(_g31 < _g21) {
					var i2 = _g31++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") cache.isGamepad = true;
				this.gameDeviceCache.h[id] = cache;
				if(data.connected) {
					lime_ui_Joystick.__connect(id);
					if(cache.isGamepad) lime_ui_Gamepad.__connect(id);
				}
			}
			cache = this.gameDeviceCache.h[id];
			joystick = lime_ui_Joystick.devices.h[id];
			gamepad = lime_ui_Gamepad.devices.h[id];
			if(data.connected) {
				var button;
				var value;
				var _g32 = 0;
				var _g22 = data.buttons.length;
				while(_g32 < _g22) {
					var i3 = _g32++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) gamepad.onAxisMove.dispatch(4,value);
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) gamepad.onAxisMove.dispatch(5,value);
						} else {
							if(value > 0) joystick.onButtonDown.dispatch(i3); else joystick.onButtonUp.dispatch(i3);
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) gamepad.onButtonDown.dispatch(button); else gamepad.onButtonUp.dispatch(button);
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g33 = 0;
				var _g23 = data.axes.length;
				while(_g33 < _g23) {
					var i4 = _g33++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				lime_ui_Joystick.__disconnect(id);
				lime_ui_Gamepad.__disconnect(id);
			}
		}
	}
	,__class__: lime__$backend_html5_HTML5Application
};
var lime__$backend_html5_GameDeviceData = function() {
	this.connected = true;
	this.buttons = [];
	this.axes = [];
};
$hxClasses["lime._backend.html5.GameDeviceData"] = lime__$backend_html5_GameDeviceData;
lime__$backend_html5_GameDeviceData.__name__ = ["lime","_backend","html5","GameDeviceData"];
lime__$backend_html5_GameDeviceData.prototype = {
	connected: null
	,id: null
	,isGamepad: null
	,buttons: null
	,axes: null
	,__class__: lime__$backend_html5_GameDeviceData
};
var lime__$backend_html5_HTML5AudioSource = function() { };
$hxClasses["lime._backend.html5.HTML5AudioSource"] = lime__$backend_html5_HTML5AudioSource;
lime__$backend_html5_HTML5AudioSource.__name__ = ["lime","_backend","html5","HTML5AudioSource"];
lime__$backend_html5_HTML5AudioSource.prototype = {
	completed: null
	,gain: null
	,id: null
	,length: null
	,loops: null
	,parent: null
	,playing: null
	,position: null
	,dispose: function() {
	}
	,play: function() {
		if(this.playing || this.parent.buffer == null) return;
		this.playing = true;
		var time = this.getCurrentTime();
		this.completed = false;
		var cacheVolume = this.parent.buffer.__srcHowl._volume;
		this.parent.buffer.__srcHowl._volume = this.parent.get_gain();
		this.id = this.parent.buffer.__srcHowl.play();
		this.parent.buffer.__srcHowl._volume = cacheVolume;
		this.setPosition(this.parent.get_position());
		this.parent.buffer.__srcHowl.on("end",$bind(this,this.howl_onEnd),this.id);
		this.setCurrentTime(time);
	}
	,stop: function() {
		this.playing = false;
		this.parent.buffer.__srcHowl.stop(this.id);
	}
	,howl_onEnd: function() {
		this.playing = false;
		if(this.loops > 0) {
			this.loops--;
			this.stop();
			this.play();
			return;
		} else this.parent.buffer.__srcHowl.stop(this.id);
		this.completed = true;
		this.parent.onComplete.dispatch();
	}
	,getCurrentTime: function() {
		if(this.id == -1) return 0;
		if(this.completed) return this.getLength(); else {
			var time = Std["int"](this.parent.buffer.__srcHowl.seek(this.id) * 1000) - this.parent.offset;
			if(time < 0) return 0;
			return time;
		}
	}
	,setCurrentTime: function(value) {
		if(this.parent.buffer != null) {
			var pos = (value + this.parent.offset) / 1000;
			if(pos < 0) pos = 0;
			this.parent.buffer.__srcHowl.seek(pos,this.id);
		}
		return value;
	}
	,getGain: function() {
		return this.gain;
	}
	,setGain: function(value) {
		if(this.parent.buffer != null) this.parent.buffer.__srcHowl.volume(value,this.id);
		return this.gain = value;
	}
	,getLength: function() {
		if(this.length != 0) return this.length;
		return Std["int"](this.parent.buffer.__srcHowl.duration() * 1000);
	}
	,getPosition: function() {
		return this.position;
	}
	,setPosition: function(value) {
		this.position.x = value.x;
		this.position.y = value.y;
		this.position.z = value.z;
		this.position.w = value.w;
		return this.position;
	}
	,__class__: lime__$backend_html5_HTML5AudioSource
};
var lime__$backend_html5_HTML5HTTPRequest = function() {
};
$hxClasses["lime._backend.html5.HTML5HTTPRequest"] = lime__$backend_html5_HTML5HTTPRequest;
lime__$backend_html5_HTML5HTTPRequest.__name__ = ["lime","_backend","html5","HTML5HTTPRequest"];
lime__$backend_html5_HTML5HTTPRequest.prototype = {
	binary: null
	,parent: null
	,request: null
	,init: function(parent) {
		this.parent = parent;
	}
	,load: function(uri,progress,readyStateChange) {
		this.request = new XMLHttpRequest();
		this.request.addEventListener("progress",progress,false);
		this.request.onreadystatechange = readyStateChange;
		var query = "";
		if(this.parent.data == null) {
			var $it0 = this.parent.formData.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				if(query.length > 0) query += "&";
				query += encodeURIComponent(key) + "=" + StringTools.urlEncode(Std.string(this.parent.formData.get(key)));
			}
			if(this.parent.method == "GET" && query != "") {
				if(uri.indexOf("?") > -1) uri += "&" + query; else uri += "?" + query;
				query = "";
			}
		}
		this.request.open(Std.string(this.parent.method),uri,true);
		if(this.parent.timeout > 0) this.request.timeout = this.parent.timeout;
		if(this.binary) this.request.responseType = "arraybuffer";
		var hasContentType = false;
		var _g = 0;
		var _g1 = this.parent.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			if(header.name == "Content-Type") hasContentType = true;
			this.request.setRequestHeader(header.name,header.value);
		}
		if(!hasContentType) this.request.setRequestHeader("Content-Type",this.parent.contentType);
		if(this.parent.data != null) this.request.send(this.parent.data.b.bufferValue); else this.request.send(query);
	}
	,loadData: function(uri) {
		var _g = this;
		var promise = new lime_app_Promise();
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event1) {
			if(_g.request.readyState != 4) return;
			if(_g.request.status != null && _g.request.status >= 200 && _g.request.status <= 400) {
				var bytes;
				if(_g.request.responseType == "") bytes = haxe_io_Bytes.ofString(_g.request.responseText); else bytes = haxe_io_Bytes.ofData(_g.request.response);
				_g.processResponse();
				promise.complete(bytes);
			} else {
				_g.processResponse();
				promise.error(_g.request.status);
			}
			_g.request = null;
		};
		this.binary = true;
		this.load(uri,progress,readyStateChange);
		return promise.future;
	}
	,loadText: function(uri) {
		var _g = this;
		var promise = new lime_app_Promise();
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event1) {
			if(_g.request.readyState != 4) return;
			if(_g.request.status != null && _g.request.status >= 200 && _g.request.status <= 400) {
				_g.processResponse();
				promise.complete(_g.request.responseText);
			} else {
				_g.processResponse();
				promise.error(_g.request.status);
			}
			_g.request = null;
		};
		this.binary = false;
		this.load(uri,progress,readyStateChange);
		return promise.future;
	}
	,processResponse: function() {
		if(this.parent.enableResponseHeaders) {
			this.parent.responseHeaders = [];
			var name;
			var value;
			var _g = 0;
			var _g1 = this.request.getAllResponseHeaders().split("\n");
			while(_g < _g1.length) {
				var line = _g1[_g];
				++_g;
				name = StringTools.trim((function($this) {
					var $r;
					var len = line.indexOf(":");
					$r = HxOverrides.substr(line,0,len);
					return $r;
				}(this)));
				value = StringTools.trim((function($this) {
					var $r;
					var pos = line.indexOf(":") + 1;
					$r = HxOverrides.substr(line,pos,null);
					return $r;
				}(this)));
				if(name != "") this.parent.responseHeaders.push(new lime_net_HTTPRequestHeader(name,value));
			}
		}
		this.parent.responseStatus = this.request.status;
	}
	,__class__: lime__$backend_html5_HTML5HTTPRequest
};
var lime__$backend_html5_HTML5Mouse = function() { };
$hxClasses["lime._backend.html5.HTML5Mouse"] = lime__$backend_html5_HTML5Mouse;
lime__$backend_html5_HTML5Mouse.__name__ = ["lime","_backend","html5","HTML5Mouse"];
lime__$backend_html5_HTML5Mouse.set_cursor = function(value) {
	if(lime__$backend_html5_HTML5Mouse.__cursor != value) {
		if(!lime__$backend_html5_HTML5Mouse.__hidden) {
			var _g = 0;
			var _g1 = lime_app_Application.current.__windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				switch(value[1]) {
				case 0:
					$window.backend.element.style.cursor = "default";
					break;
				case 1:
					$window.backend.element.style.cursor = "crosshair";
					break;
				case 3:
					$window.backend.element.style.cursor = "move";
					break;
				case 4:
					$window.backend.element.style.cursor = "pointer";
					break;
				case 5:
					$window.backend.element.style.cursor = "nesw-resize";
					break;
				case 6:
					$window.backend.element.style.cursor = "ns-resize";
					break;
				case 7:
					$window.backend.element.style.cursor = "nwse-resize";
					break;
				case 8:
					$window.backend.element.style.cursor = "ew-resize";
					break;
				case 9:
					$window.backend.element.style.cursor = "text";
					break;
				case 10:
					$window.backend.element.style.cursor = "wait";
					break;
				case 11:
					$window.backend.element.style.cursor = "wait";
					break;
				default:
					$window.backend.element.style.cursor = "auto";
				}
			}
		}
		lime__$backend_html5_HTML5Mouse.__cursor = value;
	}
	return lime__$backend_html5_HTML5Mouse.__cursor;
};
var lime__$backend_html5_HTML5Renderer = function(parent) {
	this.parent = parent;
};
$hxClasses["lime._backend.html5.HTML5Renderer"] = lime__$backend_html5_HTML5Renderer;
lime__$backend_html5_HTML5Renderer.__name__ = ["lime","_backend","html5","HTML5Renderer"];
lime__$backend_html5_HTML5Renderer.prototype = {
	parent: null
	,create: function() {
		this.createContext();
		{
			var _g = this.parent.context;
			switch(_g[1]) {
			case 0:
				this.parent.window.backend.canvas.addEventListener("webglcontextlost",$bind(this,this.handleEvent),false);
				this.parent.window.backend.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleEvent),false);
				break;
			default:
			}
		}
	}
	,createContext: function() {
		if(this.parent.window.backend.div != null) {
			this.parent.context = lime_graphics_RenderContext.DOM(this.parent.window.backend.div);
			this.parent.type = lime_graphics_RendererType.DOM;
		} else if(this.parent.window.backend.canvas != null) {
			var webgl = null;
			if(webgl == null) {
				this.parent.context = lime_graphics_RenderContext.CANVAS(this.parent.window.backend.canvas.getContext("2d"));
				this.parent.type = lime_graphics_RendererType.CANVAS;
			} else {
				lime_graphics_opengl_GL.context = webgl;
				this.parent.context = lime_graphics_RenderContext.OPENGL(lime_graphics_opengl_GL.context);
				this.parent.type = lime_graphics_RendererType.OPENGL;
			}
		}
	}
	,flip: function() {
	}
	,handleEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "webglcontextlost":
			event.preventDefault();
			this.parent.context = null;
			this.parent.onContextLost.dispatch();
			break;
		case "webglcontextrestored":
			this.createContext();
			this.parent.onContextRestored.dispatch(this.parent.context);
			break;
		default:
		}
	}
	,__class__: lime__$backend_html5_HTML5Renderer
};
var lime__$backend_html5_HTML5Window = function(parent) {
	this.unusedTouchesPool = new List();
	this.scale = 1.0;
	this.currentTouches = new haxe_ds_IntMap();
	this.parent = parent;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"element")) this.element = parent.config.element;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"allowHighDPI") && parent.config.allowHighDPI) this.scale = window.devicePixelRatio;
	parent.__scale = this.scale;
	this.cacheMouseX = 0;
	this.cacheMouseY = 0;
};
$hxClasses["lime._backend.html5.HTML5Window"] = lime__$backend_html5_HTML5Window;
lime__$backend_html5_HTML5Window.__name__ = ["lime","_backend","html5","HTML5Window"];
lime__$backend_html5_HTML5Window.prototype = {
	canvas: null
	,div: null
	,element: null
	,cacheMouseX: null
	,cacheMouseY: null
	,currentTouches: null
	,enableTextEvents: null
	,parent: null
	,primaryTouch: null
	,scale: null
	,setHeight: null
	,setWidth: null
	,unusedTouchesPool: null
	,close: function() {
		this.parent.application.removeWindow(this.parent);
	}
	,create: function(application) {
		this.setWidth = this.parent.__width;
		this.setHeight = this.parent.__height;
		this.parent.id = lime__$backend_html5_HTML5Window.windowID++;
		if(js_Boot.__instanceof(this.element,HTMLCanvasElement)) this.canvas = this.element; else this.canvas = window.document.createElement("canvas");
		if(this.canvas != null) {
			var style = this.canvas.style;
			style.setProperty("-webkit-transform","translateZ(0)",null);
			style.setProperty("transform","translateZ(0)",null);
		} else if(this.div != null) {
			var style1 = this.div.style;
			style1.setProperty("-webkit-transform","translate3D(0,0,0)",null);
			style1.setProperty("transform","translate3D(0,0,0)",null);
			style1.position = "relative";
			style1.overflow = "hidden";
			style1.setProperty("-webkit-user-select","none",null);
			style1.setProperty("-moz-user-select","none",null);
			style1.setProperty("-ms-user-select","none",null);
			style1.setProperty("-o-user-select","none",null);
		}
		if(this.parent.__width == 0 && this.parent.__height == 0) {
			if(this.element != null) {
				this.parent.set_width(this.element.clientWidth);
				this.parent.set_height(this.element.clientHeight);
			} else {
				this.parent.set_width(window.innerWidth);
				this.parent.set_height(window.innerHeight);
			}
			this.parent.set_fullscreen(true);
		}
		if(this.canvas != null) {
			this.canvas.width = Math.round(this.parent.__width * this.scale);
			this.canvas.height = Math.round(this.parent.__height * this.scale);
			this.canvas.style.width = this.parent.__width + "px";
			this.canvas.style.height = this.parent.__height + "px";
		} else {
			this.div.style.width = this.parent.__width + "px";
			this.div.style.height = this.parent.__height + "px";
		}
		this.handleResize();
		if(this.element != null) {
			if(this.canvas != null) {
				if(this.element != this.canvas) this.element.appendChild(this.canvas);
			} else this.element.appendChild(this.div);
			var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				this.element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
			}
			window.document.addEventListener("dragstart",function(e) {
				if(e.target.nodeName.toLowerCase() == "img") {
					e.preventDefault();
					return false;
				}
				return true;
			},false);
			this.element.addEventListener("contextmenu",$bind(this,this.handleContextMenuEvent),true);
			this.element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("gamepadconnected",$bind(this,this.handleGamepadEvent),true);
			this.element.addEventListener("gamepaddisconnected",$bind(this,this.handleGamepadEvent),true);
		}
	}
	,handleContextMenuEvent: function(event) {
		if(this.parent.onMouseUp.canceled) event.preventDefault();
	}
	,handleFocusEvent: function(event) {
		if(this.enableTextEvents) haxe_Timer.delay(function() {
			lime__$backend_html5_HTML5Window.textInput.focus();
		},20);
	}
	,handleGamepadEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "gamepadconnected":
			lime_ui_Joystick.__connect(event.gamepad.index);
			if(event.gamepad.mapping == "standard") lime_ui_Gamepad.__connect(event.gamepad.index);
			break;
		case "gamepaddisconnected":
			lime_ui_Joystick.__disconnect(event.gamepad.index);
			lime_ui_Gamepad.__disconnect(event.gamepad.index);
			break;
		default:
		}
	}
	,handleCutOrCopyEvent: function(event) {
		event.clipboardData.setData("text/plain",lime_system_Clipboard.get_text());
		event.preventDefault();
	}
	,handlePasteEvent: function(event) {
		if(event.clipboardData.types.indexOf("text/plain") > -1) {
			var text = lime_system_Clipboard.set_text(event.clipboardData.getData("text/plain"));
			this.parent.onTextInput.dispatch(text);
			event.preventDefault();
		}
	}
	,handleInputEvent: function(event) {
		if(lime__$backend_html5_HTML5Window.textInput.value != lime__$backend_html5_HTML5Window.dummyCharacter) {
			if(lime__$backend_html5_HTML5Window.textInput.value.charAt(0) == lime__$backend_html5_HTML5Window.dummyCharacter) this.parent.onTextInput.dispatch(HxOverrides.substr(lime__$backend_html5_HTML5Window.textInput.value,1,null)); else this.parent.onTextInput.dispatch(lime__$backend_html5_HTML5Window.textInput.value);
			lime__$backend_html5_HTML5Window.textInput.value = lime__$backend_html5_HTML5Window.dummyCharacter;
		}
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect1 = this.div.getBoundingClientRect();
					x = event.clientX - rect1.left;
					y = event.clientY - rect1.top;
				} else {
					var rect2 = this.element.getBoundingClientRect();
					x = (event.clientX - rect2.left) * (this.parent.__width / rect2.width);
					y = (event.clientY - rect2.top) * (this.parent.__height / rect2.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			var _g = event.type;
			switch(_g) {
			case "mousedown":
				this.parent.onMouseDown.dispatch(x,y,event.button);
				if(this.parent.onMouseDown.canceled) event.preventDefault();
				break;
			case "mouseenter":
				if(event.target == this.element) {
					this.parent.onEnter.dispatch();
					if(this.parent.onEnter.canceled) event.preventDefault();
				}
				break;
			case "mouseleave":
				if(event.target == this.element) {
					this.parent.onLeave.dispatch();
					if(this.parent.onLeave.canceled) event.preventDefault();
				}
				break;
			case "mouseup":
				this.parent.onMouseUp.dispatch(x,y,event.button);
				if(this.parent.onMouseUp.canceled) event.preventDefault();
				break;
			case "mousemove":
				if(x != this.cacheMouseX || y != this.cacheMouseY) {
					this.parent.onMouseMove.dispatch(x,y);
					this.parent.onMouseMoveRelative.dispatch(x - this.cacheMouseX,y - this.cacheMouseY);
					if(this.parent.onMouseMove.canceled || this.parent.onMouseMoveRelative.canceled) event.preventDefault();
				}
				break;
			default:
			}
			this.cacheMouseX = x;
			this.cacheMouseY = y;
		} else {
			this.parent.onMouseWheel.dispatch(event.deltaX,-event.deltaY);
			if(this.parent.onMouseWheel.canceled) event.preventDefault();
		}
	}
	,handleResize: function() {
		this.primaryTouch = null;
		var stretch = this.parent.__fullscreen || this.setWidth == 0 && this.setHeight == 0;
		if(this.element != null && (this.div == null || this.div != null && stretch)) {
			if(stretch) {
				if(this.parent.__width != this.element.clientWidth || this.parent.__height != this.element.clientHeight) {
					this.parent.set_width(this.element.clientWidth);
					this.parent.set_height(this.element.clientHeight);
					if(this.canvas != null) {
						if(this.element != this.canvas) {
							this.canvas.width = Math.round(this.element.clientWidth * this.scale);
							this.canvas.height = Math.round(this.element.clientHeight * this.scale);
							this.canvas.style.width = this.element.clientWidth + "px";
							this.canvas.style.height = this.element.clientHeight + "px";
						}
					} else {
						this.div.style.width = this.element.clientWidth + "px";
						this.div.style.height = this.element.clientHeight + "px";
					}
				}
			} else {
				var scaleX;
				if(this.setWidth != 0) scaleX = this.element.clientWidth / this.setWidth; else scaleX = 1;
				var scaleY;
				if(this.setHeight != 0) scaleY = this.element.clientHeight / this.setHeight; else scaleY = 1;
				var targetWidth = this.element.clientWidth;
				var targetHeight = this.element.clientHeight;
				var marginLeft = 0;
				var marginTop = 0;
				if(scaleX < scaleY) {
					targetHeight = Math.floor(this.setHeight * scaleX);
					marginTop = Math.floor((this.element.clientHeight - targetHeight) / 2);
				} else {
					targetWidth = Math.floor(this.setWidth * scaleY);
					marginLeft = Math.floor((this.element.clientWidth - targetWidth) / 2);
				}
				if(this.canvas != null) {
					if(this.element != this.canvas) {
						this.canvas.style.width = targetWidth + "px";
						this.canvas.style.height = targetHeight + "px";
						this.canvas.style.marginLeft = marginLeft + "px";
						this.canvas.style.marginTop = marginTop + "px";
					}
				} else {
					this.div.style.width = targetWidth + "px";
					this.div.style.height = targetHeight + "px";
					this.div.style.marginLeft = marginLeft + "px";
					this.div.style.marginTop = marginTop + "px";
				}
			}
		}
	}
	,handleTouchEvent: function(event) {
		event.preventDefault();
		var rect = null;
		if(this.element != null) {
			if(this.canvas != null) rect = this.canvas.getBoundingClientRect(); else if(this.div != null) rect = this.div.getBoundingClientRect(); else rect = this.element.getBoundingClientRect();
		}
		var windowWidth = this.setWidth;
		var windowHeight = this.setHeight;
		if(windowWidth == 0 || windowHeight == 0) {
			if(rect != null) {
				windowWidth = rect.width;
				windowHeight = rect.height;
			} else {
				windowWidth = 1;
				windowHeight = 1;
			}
		}
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			var x = 0.0;
			var y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (windowWidth / rect.width);
				y = (data.clientY - rect.top) * (windowHeight / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			var _g2 = event.type;
			switch(_g2) {
			case "touchstart":
				var touch = this.unusedTouchesPool.pop();
				if(touch == null) touch = new lime_ui_Touch(x / windowWidth,y / windowHeight,data.identifier,0,0,data.force,this.parent.id); else {
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.h[data.identifier] = touch;
				lime_ui_Touch.onStart.dispatch(touch);
				if(this.primaryTouch == null) this.primaryTouch = touch;
				if(touch == this.primaryTouch) this.parent.onMouseDown.dispatch(x,y,0);
				break;
			case "touchend":
				var touch1 = this.currentTouches.h[data.identifier];
				if(touch1 != null) {
					var cacheX = touch1.x;
					var cacheY = touch1.y;
					touch1.x = x / windowWidth;
					touch1.y = y / windowHeight;
					touch1.dx = touch1.x - cacheX;
					touch1.dy = touch1.y - cacheY;
					touch1.pressure = data.force;
					lime_ui_Touch.onEnd.dispatch(touch1);
					this.currentTouches.remove(data.identifier);
					this.unusedTouchesPool.add(touch1);
					if(touch1 == this.primaryTouch) {
						this.parent.onMouseUp.dispatch(x,y,0);
						this.primaryTouch = null;
					}
				}
				break;
			case "touchmove":
				var touch2 = this.currentTouches.h[data.identifier];
				if(touch2 != null) {
					var cacheX1 = touch2.x;
					var cacheY1 = touch2.y;
					touch2.x = x / windowWidth;
					touch2.y = y / windowHeight;
					touch2.dx = touch2.x - cacheX1;
					touch2.dy = touch2.y - cacheY1;
					touch2.pressure = data.force;
					lime_ui_Touch.onMove.dispatch(touch2);
					if(touch2 == this.primaryTouch) this.parent.onMouseMove.dispatch(x,y);
				}
				break;
			default:
			}
		}
	}
	,resize: function(width,height) {
	}
	,setEnableTextEvents: function(value) {
		if(value) {
			if(lime__$backend_html5_HTML5Window.textInput == null) {
				lime__$backend_html5_HTML5Window.textInput = window.document.createElement("input");
				lime__$backend_html5_HTML5Window.textInput.type = "text";
				lime__$backend_html5_HTML5Window.textInput.style.position = "absolute";
				lime__$backend_html5_HTML5Window.textInput.style.opacity = "0";
				lime__$backend_html5_HTML5Window.textInput.style.color = "transparent";
				lime__$backend_html5_HTML5Window.textInput.value = lime__$backend_html5_HTML5Window.dummyCharacter;
				lime__$backend_html5_HTML5Window.textInput.autocapitalize = "off";
				lime__$backend_html5_HTML5Window.textInput.autocorrect = "off";
				lime__$backend_html5_HTML5Window.textInput.autocomplete = "off";
				lime__$backend_html5_HTML5Window.textInput.style.left = "0px";
				lime__$backend_html5_HTML5Window.textInput.style.top = "50%";
				if(new EReg("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					lime__$backend_html5_HTML5Window.textInput.style.fontSize = "0px";
					lime__$backend_html5_HTML5Window.textInput.style.width = "0px";
					lime__$backend_html5_HTML5Window.textInput.style.height = "0px";
				} else {
					lime__$backend_html5_HTML5Window.textInput.style.width = "1px";
					lime__$backend_html5_HTML5Window.textInput.style.height = "1px";
				}
				lime__$backend_html5_HTML5Window.textInput.style.pointerEvents = "none";
				lime__$backend_html5_HTML5Window.textInput.style.zIndex = "-10000000";
				window.document.body.appendChild(lime__$backend_html5_HTML5Window.textInput);
			}
			if(!this.enableTextEvents) {
				lime__$backend_html5_HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				lime__$backend_html5_HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
				lime__$backend_html5_HTML5Window.textInput.addEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
				lime__$backend_html5_HTML5Window.textInput.addEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
				lime__$backend_html5_HTML5Window.textInput.addEventListener("paste",$bind(this,this.handlePasteEvent),true);
			}
			lime__$backend_html5_HTML5Window.textInput.focus();
			lime__$backend_html5_HTML5Window.textInput.select();
		} else if(lime__$backend_html5_HTML5Window.textInput != null) {
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("paste",$bind(this,this.handlePasteEvent),true);
			lime__$backend_html5_HTML5Window.textInput.blur();
		}
		return this.enableTextEvents = value;
	}
	,setFullscreen: function(value) {
		return false;
	}
	,__class__: lime__$backend_html5_HTML5Window
};
var lime_app_IModule = function() { };
$hxClasses["lime.app.IModule"] = lime_app_IModule;
lime_app_IModule.__name__ = ["lime","app","IModule"];
lime_app_IModule.prototype = {
	addRenderer: null
	,addWindow: null
	,registerModule: null
	,setPreloader: null
	,__class__: lime_app_IModule
};
var lime_app_Module = function() {
	this.onExit = new lime_app__$Event_$Int_$Void();
	this.__renderers = [];
	this.__windows = [];
};
$hxClasses["lime.app.Module"] = lime_app_Module;
lime_app_Module.__name__ = ["lime","app","Module"];
lime_app_Module.__interfaces__ = [lime_app_IModule];
lime_app_Module.prototype = {
	onExit: null
	,__application: null
	,__preloader: null
	,__renderers: null
	,__windows: null
	,addRenderer: function(renderer) {
		renderer.onRender.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.render),renderer));
		renderer.onContextLost.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.onRenderContextLost),renderer));
		renderer.onContextRestored.add((function(f2,a12) {
			return function(a2) {
				f2(a12,a2);
			};
		})($bind(this,this.onRenderContextRestored),renderer));
		this.__renderers.push(renderer);
	}
	,addWindow: function(window) {
		window.onActivate.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.onWindowActivate),window));
		window.onClose.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.__onWindowClose),window),false,-10000);
		window.onCreate.add((function(f2,a12) {
			return function() {
				f2(a12);
			};
		})($bind(this,this.onWindowCreate),window));
		window.onDeactivate.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onWindowDeactivate),window));
		window.onDropFile.add((function(f4,a14) {
			return function(a2) {
				f4(a14,a2);
			};
		})($bind(this,this.onWindowDropFile),window));
		window.onEnter.add((function(f5,a15) {
			return function() {
				f5(a15);
			};
		})($bind(this,this.onWindowEnter),window));
		window.onFocusIn.add((function(f6,a16) {
			return function() {
				f6(a16);
			};
		})($bind(this,this.onWindowFocusIn),window));
		window.onFocusOut.add((function(f7,a17) {
			return function() {
				f7(a17);
			};
		})($bind(this,this.onWindowFocusOut),window));
		window.onFullscreen.add((function(f8,a18) {
			return function() {
				f8(a18);
			};
		})($bind(this,this.onWindowFullscreen),window));
		window.onKeyDown.add((function(f9,a19) {
			return function(a21,a3) {
				f9(a19,a21,a3);
			};
		})($bind(this,this.onKeyDown),window));
		window.onKeyUp.add((function(f10,a110) {
			return function(a22,a31) {
				f10(a110,a22,a31);
			};
		})($bind(this,this.onKeyUp),window));
		window.onLeave.add((function(f11,a111) {
			return function() {
				f11(a111);
			};
		})($bind(this,this.onWindowLeave),window));
		window.onMinimize.add((function(f12,a112) {
			return function() {
				f12(a112);
			};
		})($bind(this,this.onWindowMinimize),window));
		window.onMouseDown.add((function(f13,a113) {
			return function(x,y,a23) {
				f13(a113,x,y,a23);
			};
		})($bind(this,this.onMouseDown),window));
		window.onMouseMove.add((function(f14,a114) {
			return function(x1,y1) {
				f14(a114,x1,y1);
			};
		})($bind(this,this.onMouseMove),window));
		window.onMouseMoveRelative.add((function(f15,a115) {
			return function(x2,y2) {
				f15(a115,x2,y2);
			};
		})($bind(this,this.onMouseMoveRelative),window));
		window.onMouseUp.add((function(f16,a116) {
			return function(x3,y3,a24) {
				f16(a116,x3,y3,a24);
			};
		})($bind(this,this.onMouseUp),window));
		window.onMouseWheel.add((function(f17,a117) {
			return function(a25,a32) {
				f17(a117,a25,a32);
			};
		})($bind(this,this.onMouseWheel),window));
		window.onMove.add((function(f18,a118) {
			return function(x4,y4) {
				f18(a118,x4,y4);
			};
		})($bind(this,this.onWindowMove),window));
		window.onResize.add((function(f19,a119) {
			return function(a26,a33) {
				f19(a119,a26,a33);
			};
		})($bind(this,this.onWindowResize),window));
		window.onRestore.add((function(f20,a120) {
			return function() {
				f20(a120);
			};
		})($bind(this,this.onWindowRestore),window));
		window.onTextEdit.add((function(f21,a121) {
			return function(a27,a34,a4) {
				f21(a121,a27,a34,a4);
			};
		})($bind(this,this.onTextEdit),window));
		window.onTextInput.add((function(f22,a122) {
			return function(a28) {
				f22(a122,a28);
			};
		})($bind(this,this.onTextInput),window));
		if(window.id > -1) this.onWindowCreate(window);
		this.__windows.push(window);
	}
	,registerModule: function(application) {
		this.__application = application;
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onUpdate.add($bind(this,this.update));
		var $it0 = lime_ui_Gamepad.devices.iterator();
		while( $it0.hasNext() ) {
			var gamepad = $it0.next();
			this.__onGamepadConnect(gamepad);
		}
		lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
		var $it1 = lime_ui_Joystick.devices.iterator();
		while( $it1.hasNext() ) {
			var joystick = $it1.next();
			this.__onJoystickConnect(joystick);
		}
		lime_ui_Joystick.onConnect.add($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
	}
	,removeRenderer: function(renderer) {
		if(renderer != null && HxOverrides.indexOf(this.__renderers,renderer,0) > -1) HxOverrides.remove(this.__renderers,renderer);
	}
	,setPreloader: function(preloader) {
		if(this.__preloader != null) {
			this.__preloader.onProgress.remove($bind(this,this.onPreloadProgress));
			this.__preloader.onComplete.remove($bind(this,this.onPreloadComplete));
		}
		this.__preloader = preloader;
		if(preloader == null || preloader.complete) this.onPreloadComplete(); else {
			preloader.onProgress.add($bind(this,this.onPreloadProgress));
			preloader.onComplete.add($bind(this,this.onPreloadComplete));
		}
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onJoystickAxisMove: function(joystick,axis,value) {
	}
	,onJoystickButtonDown: function(joystick,button) {
	}
	,onJoystickButtonUp: function(joystick,button) {
	}
	,onJoystickConnect: function(joystick) {
	}
	,onJoystickDisconnect: function(joystick) {
	}
	,onJoystickHatMove: function(joystick,hat,position) {
	}
	,onJoystickTrackballMove: function(joystick,trackball,value) {
	}
	,onKeyDown: function(window,keyCode,modifier) {
	}
	,onKeyUp: function(window,keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(window,x,y,button) {
	}
	,onMouseMove: function(window,x,y) {
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function(window) {
	}
	,onWindowClose: function(window) {
	}
	,onWindowCreate: function(window) {
	}
	,onWindowDeactivate: function(window) {
	}
	,onWindowDropFile: function(window,file) {
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
	}
	,onWindowFocusOut: function(window) {
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowResize: function(window,width,height) {
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
	}
	,update: function(deltaTime) {
	}
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		gamepad.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				f(a1,a2,a3);
			};
		})($bind(this,this.onGamepadAxisMove),gamepad));
		gamepad.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				f1(a11,a21);
			};
		})($bind(this,this.onGamepadButtonDown),gamepad));
		gamepad.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				f2(a12,a22);
			};
		})($bind(this,this.onGamepadButtonUp),gamepad));
		gamepad.onDisconnect.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onGamepadDisconnect),gamepad));
	}
	,__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		joystick.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				f(a1,a2,a3);
			};
		})($bind(this,this.onJoystickAxisMove),joystick));
		joystick.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				f1(a11,a21);
			};
		})($bind(this,this.onJoystickButtonDown),joystick));
		joystick.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				f2(a12,a22);
			};
		})($bind(this,this.onJoystickButtonUp),joystick));
		joystick.onDisconnect.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onJoystickDisconnect),joystick));
		joystick.onHatMove.add((function(f4,a14) {
			return function(a23,a31) {
				f4(a14,a23,a31);
			};
		})($bind(this,this.onJoystickHatMove),joystick));
		joystick.onTrackballMove.add((function(f5,a15) {
			return function(a24,a32) {
				f5(a15,a24,a32);
			};
		})($bind(this,this.onJoystickTrackballMove),joystick));
	}
	,__onWindowClose: function(window) {
		this.onWindowClose(window);
		HxOverrides.remove(this.__windows,window);
	}
	,__class__: lime_app_Module
};
var lime_app_Application = function() {
	this.onUpdate = new lime_app__$Event_$Int_$Void();
	lime_app_Module.call(this);
	if(lime_app_Application.current == null) lime_app_Application.current = this;
	this.modules = [];
	this.windowByID = new haxe_ds_IntMap();
	this.backend = new lime__$backend_html5_HTML5Application(this);
	this.registerModule(this);
};
$hxClasses["lime.app.Application"] = lime_app_Application;
lime_app_Application.__name__ = ["lime","app","Application"];
lime_app_Application.__super__ = lime_app_Module;
lime_app_Application.prototype = $extend(lime_app_Module.prototype,{
	config: null
	,modules: null
	,onUpdate: null
	,window: null
	,backend: null
	,windowByID: null
	,addModule: function(module) {
		module.registerModule(this);
		this.modules.push(module);
		if(this.__renderers.length > 0) {
			var _g = 0;
			var _g1 = this.__renderers;
			while(_g < _g1.length) {
				var renderer = _g1[_g];
				++_g;
				module.addRenderer(renderer);
			}
		}
		if(this.__windows.length > 0) {
			var _g2 = 0;
			var _g11 = this.__windows;
			while(_g2 < _g11.length) {
				var $window = _g11[_g2];
				++_g2;
				module.addWindow($window);
			}
		}
		module.setPreloader(this.__preloader);
	}
	,addRenderer: function(renderer) {
		lime_app_Module.prototype.addRenderer.call(this,renderer);
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.addRenderer(renderer);
		}
	}
	,createWindow: function(window) {
		lime_app_Module.prototype.addWindow.call(this,window);
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.addWindow(window);
		}
		if(window.renderer == null) {
			var renderer = new lime_graphics_Renderer(window);
			this.addRenderer(renderer);
		}
		window.create(this);
		this.windowByID.h[window.id] = window;
		window.onCreate.dispatch();
	}
	,exec: function() {
		lime_app_Application.current = this;
		return this.backend.exec();
	}
	,onModuleExit: function(code) {
		this.backend.exit();
	}
	,onWindowClose: function(window) {
		this.removeWindow(window);
	}
	,removeWindow: function(window) {
		if(window != null && this.windowByID.h.hasOwnProperty(window.id)) {
			HxOverrides.remove(this.__windows,window);
			this.windowByID.remove(window.id);
			window.close();
			if(window.renderer != null) this.removeRenderer(window.renderer);
			if(this.__windows[0] == window) this.window = null;
			if(this.__windows.length == 0) lime_system_System.exit(0);
		}
	}
	,setPreloader: function(preloader) {
		lime_app_Module.prototype.setPreloader.call(this,preloader);
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.setPreloader(preloader);
		}
	}
	,__class__: lime_app_Application
});
var lime_app_Future = function(work,async) {
	if(async == null) async = false;
	if(work != null) {
		if(async) {
			var promise = new lime_app_Promise();
			promise.future = this;
			lime_app__$Future_FutureWork.queue({ promise : promise, work : work});
		} else try {
			this.value = work();
			this.isComplete = true;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.error = e;
			this.isError = true;
		}
	}
};
$hxClasses["lime.app.Future"] = lime_app_Future;
lime_app_Future.__name__ = ["lime","app","Future"];
lime_app_Future.withValue = function(value) {
	var future = new lime_app_Future();
	future.isComplete = true;
	future.value = value;
	return future;
};
lime_app_Future.prototype = {
	error: null
	,isComplete: null
	,isError: null
	,value: null
	,__completeListeners: null
	,__errorListeners: null
	,__progressListeners: null
	,onComplete: function(listener) {
		if(listener != null) {
			if(this.isComplete) listener(this.value); else if(!this.isError) {
				if(this.__completeListeners == null) this.__completeListeners = [];
				this.__completeListeners.push(listener);
			}
		}
		return this;
	}
	,onError: function(listener) {
		if(listener != null) {
			if(this.isError) listener(this.error); else if(!this.isComplete) {
				if(this.__errorListeners == null) this.__errorListeners = [];
				this.__errorListeners.push(listener);
			}
		}
		return this;
	}
	,onProgress: function(listener) {
		if(listener != null) {
			if(this.__progressListeners == null) this.__progressListeners = [];
			this.__progressListeners.push(listener);
		}
		return this;
	}
	,then: function(next) {
		if(this.isComplete) return next(this.value); else if(this.isError) {
			var future = new lime_app_Future();
			future.onError(this.error);
			return future;
		} else {
			var promise = new lime_app_Promise();
			this.onError($bind(promise,promise.error));
			this.onProgress($bind(promise,promise.progress));
			this.onComplete(function(val) {
				var future1 = next(val);
				future1.onError($bind(promise,promise.error));
				future1.onComplete($bind(promise,promise.complete));
			});
			return promise.future;
		}
	}
	,__class__: lime_app_Future
};
var lime_app__$Future_FutureWork = function() { };
$hxClasses["lime.app._Future.FutureWork"] = lime_app__$Future_FutureWork;
lime_app__$Future_FutureWork.__name__ = ["lime","app","_Future","FutureWork"];
lime_app__$Future_FutureWork.queue = function(state) {
	if(lime_app__$Future_FutureWork.threadPool == null) {
		lime_app__$Future_FutureWork.threadPool = new lime_system_ThreadPool();
		lime_app__$Future_FutureWork.threadPool.doWork.add(lime_app__$Future_FutureWork.threadPool_doWork);
		lime_app__$Future_FutureWork.threadPool.onComplete.add(lime_app__$Future_FutureWork.threadPool_onComplete);
		lime_app__$Future_FutureWork.threadPool.onError.add(lime_app__$Future_FutureWork.threadPool_onError);
	}
	lime_app__$Future_FutureWork.threadPool.queue(state);
};
lime_app__$Future_FutureWork.threadPool_doWork = function(state) {
	try {
		var result = state.work();
		lime_app__$Future_FutureWork.threadPool.sendComplete({ promise : state.promise, result : result});
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		lime_app__$Future_FutureWork.threadPool.sendError({ promise : state.promise, error : e});
	}
};
lime_app__$Future_FutureWork.threadPool_onComplete = function(state) {
	state.promise.complete(state.result);
};
lime_app__$Future_FutureWork.threadPool_onError = function(state) {
	state.promise.error(state.error);
};
var lime_app_Preloader = function() {
	this.bytesTotalCache = new haxe_ds_StringMap();
	this.onProgress = new lime_app__$Event_$Int_$Int_$Void();
	this.onComplete = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.libraries = [];
	this.libraryNames = [];
	this.onProgress.add($bind(this,this.update));
};
$hxClasses["lime.app.Preloader"] = lime_app_Preloader;
lime_app_Preloader.__name__ = ["lime","app","Preloader"];
lime_app_Preloader.prototype = {
	complete: null
	,onComplete: null
	,onProgress: null
	,bytesLoaded: null
	,bytesTotal: null
	,bytesTotalCache: null
	,initLibraryNames: null
	,libraries: null
	,libraryNames: null
	,loadedLibraries: null
	,addLibrary: function(library) {
		this.libraries.push(library);
	}
	,create: function(config) {
	}
	,load: function() {
		var _g2 = this;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = _g1[_g];
			++_g;
			this.bytesTotal += library.bytesTotal;
		}
		this.loadedLibraries = -1;
		var _g3 = 0;
		var _g11 = this.libraries;
		while(_g3 < _g11.length) {
			var library1 = _g11[_g3];
			++_g3;
			library1.load().onProgress(function(loaded,total) {
				_g2.bytesLoaded += loaded;
				_g2.onProgress.dispatch(_g2.bytesLoaded,_g2.bytesTotal);
			}).onComplete(function(_) {
				_g2.loadedLibraries++;
				_g2.updateProgress();
			}).onError(function(e) {
				haxe_Log.trace(e,{ fileName : "Preloader.hx", lineNumber : 121, className : "lime.app.Preloader", methodName : "load"});
			});
		}
		var _g4 = 0;
		var _g12 = this.libraryNames;
		while(_g4 < _g12.length) {
			var name = _g12[_g4];
			++_g4;
			this.bytesTotal += 200;
		}
		this.loadedLibraries++;
		this.updateProgress();
	}
	,start: function() {
		this.complete = true;
		this.onComplete.dispatch();
	}
	,update: function(loaded,total) {
	}
	,updateProgress: function() {
		var _g2 = this;
		this.onProgress.dispatch(this.bytesLoaded,this.bytesTotal);
		if(this.loadedLibraries == this.libraries.length && !this.initLibraryNames) {
			this.initLibraryNames = true;
			var _g = 0;
			var _g1 = this.libraryNames;
			while(_g < _g1.length) {
				var name = [_g1[_g]];
				++_g;
				lime_utils_Assets.loadLibrary(name[0]).onProgress((function(name) {
					return function(loaded,total) {
						if(total > 0) {
							if(!_g2.bytesTotalCache.exists(name[0])) {
								_g2.bytesTotalCache.set(name[0],total);
								_g2.bytesTotal += total - 200;
							}
							if(loaded > total) loaded = total;
							_g2.bytesLoaded += loaded;
							_g2.onProgress.dispatch(_g2.bytesLoaded,_g2.bytesTotal);
						}
					};
				})(name)).onComplete((function() {
					return function(_) {
						_g2.loadedLibraries++;
						_g2.updateProgress();
					};
				})()).onError((function() {
					return function(e) {
						haxe_Log.trace(e,{ fileName : "Preloader.hx", lineNumber : 200, className : "lime.app.Preloader", methodName : "updateProgress"});
					};
				})());
			}
		}
		if(this.loadedLibraries == this.libraries.length + this.libraryNames.length) this.start();
	}
	,__class__: lime_app_Preloader
};
var lime_app_Promise = function() {
	this.future = new lime_app_Future();
};
$hxClasses["lime.app.Promise"] = lime_app_Promise;
lime_app_Promise.__name__ = ["lime","app","Promise"];
lime_app_Promise.prototype = {
	future: null
	,complete: function(data) {
		if(!this.future.isError) {
			this.future.isComplete = true;
			this.future.value = data;
			if(this.future.__completeListeners != null) {
				var _g = 0;
				var _g1 = this.future.__completeListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(data);
				}
				this.future.__completeListeners = null;
			}
		}
		return this;
	}
	,completeWith: function(future) {
		future.onComplete($bind(this,this.complete));
		future.onError($bind(this,this.error));
		future.onProgress($bind(this,this.progress));
		return this;
	}
	,error: function(msg) {
		if(!this.future.isComplete) {
			this.future.isError = true;
			this.future.error = msg;
			if(this.future.__errorListeners != null) {
				var _g = 0;
				var _g1 = this.future.__errorListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(msg);
				}
				this.future.__errorListeners = null;
			}
		}
		return this;
	}
	,progress: function(progress,total) {
		if(!this.future.isError && !this.future.isComplete) {
			if(this.future.__progressListeners != null) {
				var _g = 0;
				var _g1 = this.future.__progressListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(progress,total);
				}
			}
		}
		return this;
	}
	,__class__: lime_app_Promise
};
var lime_app__$Event_$Dynamic_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Dynamic_Void"] = lime_app__$Event_$Dynamic_$Void;
lime_app__$Event_$Dynamic_$Void.__name__ = ["lime","app","_Event_Dynamic_Void"];
lime_app__$Event_$Dynamic_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Dynamic_$Void
};
var lime_app__$Event_$Float_$Float_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Int_Void"] = lime_app__$Event_$Float_$Float_$Int_$Void;
lime_app__$Event_$Float_$Float_$Int_$Void.__name__ = ["lime","app","_Event_Float_Float_Int_Void"];
lime_app__$Event_$Float_$Float_$Int_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Int_$Void
};
var lime_app__$Event_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Void"] = lime_app__$Event_$Float_$Float_$Void;
lime_app__$Event_$Float_$Float_$Void.__name__ = ["lime","app","_Event_Float_Float_Void"];
lime_app__$Event_$Float_$Float_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Void
};
var lime_app__$Event_$Int_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Float_Void"] = lime_app__$Event_$Int_$Float_$Void;
lime_app__$Event_$Int_$Float_$Void.__name__ = ["lime","app","_Event_Int_Float_Void"];
lime_app__$Event_$Int_$Float_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Int_$Float_$Void
};
var lime_app__$Event_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Int_Void"] = lime_app__$Event_$Int_$Int_$Void;
lime_app__$Event_$Int_$Int_$Void.__name__ = ["lime","app","_Event_Int_Int_Void"];
lime_app__$Event_$Int_$Int_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Int_$Int_$Void
};
var lime_app__$Event_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Void"] = lime_app__$Event_$Int_$Void;
lime_app__$Event_$Int_$Void.__name__ = ["lime","app","_Event_Int_Void"];
lime_app__$Event_$Int_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Int_$Void
};
var lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_lime_ui_JoystickHatPosition_Void"] = lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void;
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.__name__ = ["lime","app","_Event_Int_lime_ui_JoystickHatPosition_Void"];
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__listeners: null
	,__class__: lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void
};
var lime_app__$Event_$String_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Int_Int_Void"] = lime_app__$Event_$String_$Int_$Int_$Void;
lime_app__$Event_$String_$Int_$Int_$Void.__name__ = ["lime","app","_Event_String_Int_Int_Void"];
lime_app__$Event_$String_$Int_$Int_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__listeners: null
	,__class__: lime_app__$Event_$String_$Int_$Int_$Void
};
var lime_app__$Event_$String_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Void"] = lime_app__$Event_$String_$Void;
lime_app__$Event_$String_$Void.__name__ = ["lime","app","_Event_String_Void"];
lime_app__$Event_$String_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) return true;
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$String_$Void
};
var lime_app__$Event_$Void_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Void_Void"] = lime_app__$Event_$Void_$Void;
lime_app__$Event_$Void_$Void.__name__ = ["lime","app","_Event_Void_Void"];
lime_app__$Event_$Void_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function() {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$Void_$Void
};
var lime_app__$Event_$lime_$graphics_$RenderContext_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_graphics_RenderContext_Void"] = lime_app__$Event_$lime_$graphics_$RenderContext_$Void;
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.__name__ = ["lime","app","_Event_lime_graphics_RenderContext_Void"];
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$graphics_$RenderContext_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadAxis_Float_Void"] = lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void;
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.__name__ = ["lime","app","_Event_lime_ui_GamepadAxis_Float_Void"];
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadButton_Void"] = lime_app__$Event_$lime_$ui_$GamepadButton_$Void;
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.__name__ = ["lime","app","_Event_lime_ui_GamepadButton_Void"];
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadButton_$Void
};
var lime_app__$Event_$lime_$ui_$Gamepad_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Gamepad_Void"] = lime_app__$Event_$lime_$ui_$Gamepad_$Void;
lime_app__$Event_$lime_$ui_$Gamepad_$Void.__name__ = ["lime","app","_Event_lime_ui_Gamepad_Void"];
lime_app__$Event_$lime_$ui_$Gamepad_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Gamepad_$Void
};
var lime_app__$Event_$lime_$ui_$Joystick_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Joystick_Void"] = lime_app__$Event_$lime_$ui_$Joystick_$Void;
lime_app__$Event_$lime_$ui_$Joystick_$Void.__name__ = ["lime","app","_Event_lime_ui_Joystick_Void"];
lime_app__$Event_$lime_$ui_$Joystick_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Joystick_$Void
};
var lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void"] = lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void;
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.__name__ = ["lime","app","_Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void"];
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,cancel: function() {
		this.canceled = true;
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void
};
var lime_app__$Event_$lime_$ui_$Touch_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Touch_Void"] = lime_app__$Event_$lime_$ui_$Touch_$Void;
lime_app__$Event_$lime_$ui_$Touch_$Void.__name__ = ["lime","app","_Event_lime_ui_Touch_Void"];
lime_app__$Event_$lime_$ui_$Touch_$Void.prototype = {
	canceled: null
	,__repeat: null
	,__priorities: null
	,add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,__listeners: null
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Touch_$Void
};
var lime_graphics_ConsoleRenderContext = function() { };
$hxClasses["lime.graphics.ConsoleRenderContext"] = lime_graphics_ConsoleRenderContext;
lime_graphics_ConsoleRenderContext.__name__ = ["lime","graphics","ConsoleRenderContext"];
lime_graphics_ConsoleRenderContext.prototype = {
	__class__: lime_graphics_ConsoleRenderContext
};
var lime_graphics_FlashRenderContext = function() { };
$hxClasses["lime.graphics.FlashRenderContext"] = lime_graphics_FlashRenderContext;
lime_graphics_FlashRenderContext.__name__ = ["lime","graphics","FlashRenderContext"];
var lime_graphics_Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) height = -1;
	if(width == null) width = -1;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	this.version = 0;
	if(type == null) {
		if(lime_app_Application.current != null && lime_app_Application.current.__renderers[0] != null) {
			var _g = lime_app_Application.current.__renderers[0].context;
			switch(_g[1]) {
			case 2:case 1:
				this.type = lime_graphics_ImageType.CANVAS;
				break;
			case 3:
				this.type = lime_graphics_ImageType.FLASH;
				break;
			default:
				this.type = lime_graphics_ImageType.DATA;
			}
		} else this.type = lime_graphics_ImageType.DATA;
	} else this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 0:
				this.buffer = new lime_graphics_ImageBuffer(null,width,height);
				lime_graphics_utils_ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null) this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				break;
			case 1:
				this.buffer = new lime_graphics_ImageBuffer((function($this) {
					var $r;
					var elements = width * height * 4;
					var this1;
					if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
					$r = this1;
					return $r;
				}(this)),width,height);
				if(color != null) this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				break;
			case 2:
				break;
			default:
			}
		}
	} else this.__fromImageBuffer(buffer);
};
$hxClasses["lime.graphics.Image"] = lime_graphics_Image;
lime_graphics_Image.__name__ = ["lime","graphics","Image"];
lime_graphics_Image.fromCanvas = function(canvas) {
	if(canvas == null) return null;
	var buffer = new lime_graphics_ImageBuffer(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	var image = new lime_graphics_Image(buffer);
	image.type = lime_graphics_ImageType.CANVAS;
	return image;
};
lime_graphics_Image.fromFile = function(path,onload,onerror) {
	if(path == null) return null;
	var image = new lime_graphics_Image();
	image.__fromFile(path,onload,onerror);
	return image;
};
lime_graphics_Image.loadFromFile = function(path) {
	var promise = new lime_app_Promise();
	lime_graphics_Image.fromFile(path,function(image) {
		promise.complete(image);
	},function() {
		promise.error("");
	});
	return promise.future;
};
lime_graphics_Image.prototype = {
	buffer: null
	,dirty: null
	,height: null
	,offsetX: null
	,offsetY: null
	,type: null
	,version: null
	,width: null
	,clone: function() {
		if(this.buffer != null) {
			if(this.type == lime_graphics_ImageType.CANVAS) lime_graphics_utils_ImageCanvasUtil.convertToCanvas(this); else lime_graphics_utils_ImageCanvasUtil.convertToData(this);
			var image = new lime_graphics_Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
			image.version = this.version;
			return image;
		} else return new lime_graphics_Image(null,this.offsetX,this.offsetY,this.width,this.height,null,this.type);
	}
	,copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) return;
		if(destChannel == lime_graphics_ImageChannel.ALPHA && !this.get_transparent()) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime_graphics_utils_ImageCanvasUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			lime_graphics_utils_ImageCanvasUtil.convertToData(this);
			lime_graphics_utils_ImageCanvasUtil.convertToData(sourceImage);
			lime_graphics_utils_ImageDataUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel[1]) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel[1]) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	}
	,fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime_graphics_utils_ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime_graphics_utils_ImageCanvasUtil.convertToData(this);
			if(this.buffer.data.length == 0) return;
			lime_graphics_utils_ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			if(format != null) switch(format) {
			case 1:
				argb = color;
				break;
			case 2:
				{
					var bgra = color;
					var argb1 = 0;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >> 8 & 255 & 255) << 16 | (bgra >> 16 & 255 & 255) << 8 | bgra >> 24 & 255 & 255;
					argb = argb1;
				}
				break;
			default:
				{
					var rgba = color;
					var argb2 = 0;
					argb2 = (rgba & 255 & 255) << 24 | (rgba >> 24 & 255 & 255) << 16 | (rgba >> 16 & 255 & 255) << 8 | rgba >> 8 & 255 & 255;
					argb = argb2;
				}
			} else {
				var rgba1 = color;
				var argb3 = 0;
				argb3 = (rgba1 & 255 & 255) << 24 | (rgba1 >> 24 & 255 & 255) << 16 | (rgba1 >> 16 & 255 & 255) << 8 | rgba1 >> 8 & 255 & 255;
				argb = argb3;
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__fromFile: function(path,onload,onerror) {
		var _g = this;
		var image = new Image();
		image.crossOrigin = "Anonymous";
		image.onload = function(_) {
			_g.buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			_g.buffer.__srcImage = image;
			_g.width = image.width;
			_g.height = image.height;
			if(onload != null) onload(_g);
		};
		image.onerror = function(_1) {
			if(onerror != null) onerror();
		};
		image.src = path;
		if(image.complete) {
		}
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) this.width = buffer.width;
			if(this.height == -1) this.height = buffer.height;
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) lime_graphics_utils_ImageCanvasUtil.convertToData(this);
		return this.buffer.data;
	}
	,get_format: function() {
		return this.buffer.format;
	}
	,set_format: function(value) {
		if(this.buffer.format != value) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime_graphics_utils_ImageDataUtil.setFormat(this,value);
				break;
			default:
			}
		}
		return this.buffer.format = value;
	}
	,get_premultiplied: function() {
		return this.buffer.premultiplied;
	}
	,set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			var _g = this.type;
			switch(_g[1]) {
			case 0:case 1:
				lime_graphics_utils_ImageCanvasUtil.convertToData(this);
				lime_graphics_utils_ImageDataUtil.multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 1:
				lime_graphics_utils_ImageCanvasUtil.convertToData(this);
				lime_graphics_utils_ImageDataUtil.unmultiplyAlpha(this);
				break;
			default:
			}
		}
		return value;
	}
	,get_rect: function() {
		return new lime_math_Rectangle(0,0,this.width,this.height);
	}
	,get_src: function() {
		if(this.buffer.__srcCanvas == null) lime_graphics_utils_ImageCanvasUtil.convertToCanvas(this);
		return this.buffer.get_src();
	}
	,get_transparent: function() {
		if(this.buffer == null) return false;
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) return false;
		return this.buffer.transparent = value;
	}
	,__class__: lime_graphics_Image
	,__properties__: {get_rect:"get_rect",set_transparent:"set_transparent",get_transparent:"get_transparent",get_src:"get_src",set_premultiplied:"set_premultiplied",get_premultiplied:"get_premultiplied",set_format:"set_format",get_format:"get_format",get_data:"get_data"}
};
var lime_graphics_ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) bitsPerPixel = 32;
	if(height == null) height = 0;
	if(width == null) width = 0;
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	if(format == null) this.format = 0; else this.format = format;
	this.premultiplied = false;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime_graphics_ImageBuffer;
lime_graphics_ImageBuffer.__name__ = ["lime","graphics","ImageBuffer"];
lime_graphics_ImageBuffer.prototype = {
	bitsPerPixel: null
	,data: null
	,format: null
	,height: null
	,premultiplied: null
	,transparent: null
	,width: null
	,__srcBitmapData: null
	,__srcCanvas: null
	,__srcContext: null
	,__srcImage: null
	,__srcImageData: null
	,clone: function() {
		var buffer = new lime_graphics_ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			var elements = this.data.byteLength;
			var this1;
			if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
			buffer.data = this1;
			var copy;
			var view = this.data;
			var this2;
			if(view != null) this2 = new Uint8Array(view); else this2 = null;
			copy = this2;
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy1 = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy1);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else buffer.__srcImage = this.__srcImage;
		buffer.bitsPerPixel = this.bitsPerPixel;
		buffer.format = this.format;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	}
	,get_src: function() {
		if(this.__srcImage != null) return this.__srcImage;
		return this.__srcCanvas;
	}
	,set_src: function(value) {
		if(js_Boot.__instanceof(value,Image)) this.__srcImage = value; else if(js_Boot.__instanceof(value,HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	}
	,get_stride: function() {
		return this.width * 4;
	}
	,__class__: lime_graphics_ImageBuffer
	,__properties__: {get_stride:"get_stride",set_src:"set_src",get_src:"get_src"}
};
var lime_graphics_ImageChannel = $hxClasses["lime.graphics.ImageChannel"] = { __ename__ : ["lime","graphics","ImageChannel"], __constructs__ : ["RED","GREEN","BLUE","ALPHA"] };
lime_graphics_ImageChannel.RED = ["RED",0];
lime_graphics_ImageChannel.RED.toString = $estr;
lime_graphics_ImageChannel.RED.__enum__ = lime_graphics_ImageChannel;
lime_graphics_ImageChannel.GREEN = ["GREEN",1];
lime_graphics_ImageChannel.GREEN.toString = $estr;
lime_graphics_ImageChannel.GREEN.__enum__ = lime_graphics_ImageChannel;
lime_graphics_ImageChannel.BLUE = ["BLUE",2];
lime_graphics_ImageChannel.BLUE.toString = $estr;
lime_graphics_ImageChannel.BLUE.__enum__ = lime_graphics_ImageChannel;
lime_graphics_ImageChannel.ALPHA = ["ALPHA",3];
lime_graphics_ImageChannel.ALPHA.toString = $estr;
lime_graphics_ImageChannel.ALPHA.__enum__ = lime_graphics_ImageChannel;
var lime_graphics_ImageType = $hxClasses["lime.graphics.ImageType"] = { __ename__ : ["lime","graphics","ImageType"], __constructs__ : ["CANVAS","DATA","FLASH","CUSTOM"] };
lime_graphics_ImageType.CANVAS = ["CANVAS",0];
lime_graphics_ImageType.CANVAS.toString = $estr;
lime_graphics_ImageType.CANVAS.__enum__ = lime_graphics_ImageType;
lime_graphics_ImageType.DATA = ["DATA",1];
lime_graphics_ImageType.DATA.toString = $estr;
lime_graphics_ImageType.DATA.__enum__ = lime_graphics_ImageType;
lime_graphics_ImageType.FLASH = ["FLASH",2];
lime_graphics_ImageType.FLASH.toString = $estr;
lime_graphics_ImageType.FLASH.__enum__ = lime_graphics_ImageType;
lime_graphics_ImageType.CUSTOM = ["CUSTOM",3];
lime_graphics_ImageType.CUSTOM.toString = $estr;
lime_graphics_ImageType.CUSTOM.__enum__ = lime_graphics_ImageType;
var lime_graphics_RenderContext = $hxClasses["lime.graphics.RenderContext"] = { __ename__ : ["lime","graphics","RenderContext"], __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM","NONE"] };
lime_graphics_RenderContext.OPENGL = function(gl) { var $x = ["OPENGL",0,gl]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CANVAS = function(context) { var $x = ["CANVAS",1,context]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.DOM = function(element) { var $x = ["DOM",2,element]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.FLASH = function(stage) { var $x = ["FLASH",3,stage]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CAIRO = function(cairo) { var $x = ["CAIRO",4,cairo]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CONSOLE = function(context) { var $x = ["CONSOLE",5,context]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CUSTOM = function(data) { var $x = ["CUSTOM",6,data]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.NONE = ["NONE",7];
lime_graphics_RenderContext.NONE.toString = $estr;
lime_graphics_RenderContext.NONE.__enum__ = lime_graphics_RenderContext;
var lime_graphics_Renderer = function(window) {
	this.onRender = new lime_app__$Event_$Void_$Void();
	this.onContextRestored = new lime_app__$Event_$lime_$graphics_$RenderContext_$Void();
	this.onContextLost = new lime_app__$Event_$Void_$Void();
	this.window = window;
	this.backend = new lime__$backend_html5_HTML5Renderer(this);
	this.window.renderer = this;
};
$hxClasses["lime.graphics.Renderer"] = lime_graphics_Renderer;
lime_graphics_Renderer.__name__ = ["lime","graphics","Renderer"];
lime_graphics_Renderer.prototype = {
	context: null
	,onContextLost: null
	,onContextRestored: null
	,onRender: null
	,type: null
	,window: null
	,backend: null
	,create: function() {
		this.backend.create();
	}
	,flip: function() {
		this.backend.flip();
	}
	,__class__: lime_graphics_Renderer
};
var lime_graphics_RendererType = $hxClasses["lime.graphics.RendererType"] = { __ename__ : ["lime","graphics","RendererType"], __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM"] };
lime_graphics_RendererType.OPENGL = ["OPENGL",0];
lime_graphics_RendererType.OPENGL.toString = $estr;
lime_graphics_RendererType.OPENGL.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CANVAS = ["CANVAS",1];
lime_graphics_RendererType.CANVAS.toString = $estr;
lime_graphics_RendererType.CANVAS.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.DOM = ["DOM",2];
lime_graphics_RendererType.DOM.toString = $estr;
lime_graphics_RendererType.DOM.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.FLASH = ["FLASH",3];
lime_graphics_RendererType.FLASH.toString = $estr;
lime_graphics_RendererType.FLASH.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CAIRO = ["CAIRO",4];
lime_graphics_RendererType.CAIRO.toString = $estr;
lime_graphics_RendererType.CAIRO.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CONSOLE = ["CONSOLE",5];
lime_graphics_RendererType.CONSOLE.toString = $estr;
lime_graphics_RendererType.CONSOLE.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CUSTOM = ["CUSTOM",6];
lime_graphics_RendererType.CUSTOM.toString = $estr;
lime_graphics_RendererType.CUSTOM.__enum__ = lime_graphics_RendererType;
var lime_graphics_cairo_Cairo = function() { };
$hxClasses["lime.graphics.cairo.Cairo"] = lime_graphics_cairo_Cairo;
lime_graphics_cairo_Cairo.__name__ = ["lime","graphics","cairo","Cairo"];
lime_graphics_cairo_Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	}
	,clip: function() {
	}
	,curveTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,identityMatrix: function() {
	}
	,lineTo: function(x,y) {
	}
	,moveTo: function(x,y) {
	}
	,newPath: function() {
	}
	,paint: function() {
	}
	,paintWithAlpha: function(alpha) {
	}
	,rectangle: function(x,y,width,height) {
	}
	,restore: function() {
	}
	,save: function() {
	}
	,setSourceRGB: function(r,g,b) {
	}
	,get_currentPoint: function() {
		return null;
	}
	,get_hasCurrentPoint: function() {
		return false;
	}
	,set_matrix: function(value) {
		return value;
	}
	,set_source: function(value) {
		return value;
	}
	,__class__: lime_graphics_cairo_Cairo
	,__properties__: {set_source:"set_source",set_matrix:"set_matrix",get_hasCurrentPoint:"get_hasCurrentPoint",get_currentPoint:"get_currentPoint"}
};
var lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_"] = lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$;
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.__name__ = ["lime","graphics","cairo","_CairoImageSurface","CairoImageSurface_Impl_"];
lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.fromImage = function(image) {
	return null;
};
var lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoPattern.CairoPattern_Impl_"] = lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$;
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.__name__ = ["lime","graphics","cairo","_CairoPattern","CairoPattern_Impl_"];
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.__properties__ = {set_filter:"set_filter"}
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createForSurface = function(surface) {
	return 0;
};
lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.set_filter = function(this1,value) {
	return value;
};
var lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$ = {};
$hxClasses["lime.graphics.cairo._CairoSurface.CairoSurface_Impl_"] = lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$;
lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.__name__ = ["lime","graphics","cairo","_CairoSurface","CairoSurface_Impl_"];
lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.flush = function(this1) {
};
var lime_graphics_opengl_GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime_graphics_opengl_GL;
lime_graphics_opengl_GL.__name__ = ["lime","graphics","opengl","GL"];
lime_graphics_opengl_GL.useProgram = function(program) {
	lime_graphics_opengl_GL.__currentProgram = program;
	lime_graphics_opengl_GL.context.useProgram(program);
};
var lime_graphics_utils_ImageCanvasUtil = function() { };
$hxClasses["lime.graphics.utils.ImageCanvasUtil"] = lime_graphics_utils_ImageCanvasUtil;
lime_graphics_utils_ImageCanvasUtil.__name__ = ["lime","graphics","utils","ImageCanvasUtil"];
lime_graphics_utils_ImageCanvasUtil.convertToCanvas = function(image,clear) {
	if(clear == null) clear = false;
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime_graphics_utils_ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.__srcCanvas == null && buffer.data != null) {
		image.set_transparent(true);
		lime_graphics_utils_ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		lime_graphics_utils_ImageCanvasUtil.createImageData(image);
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
	} else if(image.type == lime_graphics_ImageType.DATA && buffer.__srcImageData != null && image.dirty) {
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
		image.dirty = false;
	}
	if(clear) {
		buffer.data = null;
		buffer.__srcImageData = null;
	} else if(buffer.data == null && buffer.__srcImageData != null) buffer.data = buffer.__srcImageData.data;
	image.type = lime_graphics_ImageType.CANVAS;
};
lime_graphics_utils_ImageCanvasUtil.convertToData = function(image,clear) {
	if(clear == null) clear = false;
	var buffer = image.buffer;
	if(buffer.__srcImage != null) lime_graphics_utils_ImageCanvasUtil.convertToCanvas(image);
	if(buffer.__srcCanvas != null && buffer.data == null) {
		lime_graphics_utils_ImageCanvasUtil.createImageData(image);
		if(image.type == lime_graphics_ImageType.CANVAS) image.dirty = false;
	} else if(image.type == lime_graphics_ImageType.CANVAS && buffer.__srcCanvas != null && image.dirty) {
		if(buffer.__srcImageData == null) lime_graphics_utils_ImageCanvasUtil.createImageData(image); else {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
			var elements = buffer.__srcImageData.data.buffer;
			var this1;
			if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
			buffer.data = this1;
		}
		image.dirty = false;
	}
	if(clear) {
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
	image.type = lime_graphics_ImageType.DATA;
};
lime_graphics_utils_ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	lime_graphics_utils_ImageCanvasUtil.convertToData(sourceImage);
	lime_graphics_utils_ImageCanvasUtil.convertToData(image);
	lime_graphics_utils_ImageDataUtil.copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
};
lime_graphics_utils_ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) buffer.__srcCanvas.setAttribute("moz-opaque","true");
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		buffer.__srcContext.mozImageSmoothingEnabled = false;
		buffer.__srcContext.msImageSmoothingEnabled = false;
		buffer.__srcContext.imageSmoothingEnabled = false;
	}
};
lime_graphics_utils_ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height); else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
		var this1;
		if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
		buffer.data = this1;
	}
};
lime_graphics_utils_ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime_graphics_utils_ImageCanvasUtil.convertToCanvas(image);
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && a == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
	image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	image.dirty = true;
	image.version++;
};
lime_graphics_utils_ImageCanvasUtil.sync = function(image,clear) {
	if(image == null) return;
	if(image.type == lime_graphics_ImageType.CANVAS) lime_graphics_utils_ImageCanvasUtil.convertToCanvas(image,clear); else lime_graphics_utils_ImageCanvasUtil.convertToData(image,clear);
};
var lime_graphics_utils_ImageDataUtil = function() { };
$hxClasses["lime.graphics.utils.ImageDataUtil"] = lime_graphics_utils_ImageDataUtil;
lime_graphics_utils_ImageDataUtil.__name__ = ["lime","graphics","utils","ImageDataUtil"];
lime_graphics_utils_ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel[1]) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel[1]) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) return;
	var srcView = new lime_graphics_utils__$ImageDataUtil_ImageDataView(sourceImage,sourceRect);
	var destView = new lime_graphics_utils__$ImageDataUtil_ImageDataView(image,new lime_math_Rectangle(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel;
	var destPixel;
	var value = 0;
	var _g1 = 0;
	var _g = destView.height;
	while(_g1 < _g) {
		var y = _g1++;
		srcPosition = srcView.offset + srcView.stride * y;
		destPosition = destView.offset + destView.stride * y;
		var _g3 = 0;
		var _g2 = destView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			switch(srcFormat) {
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			}
			if(srcPremultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					lime_math_color__$RGBA_RGBA_$Impl_$.unmult = 255.0 / (srcPixel & 255);
					var r;
					var idx = Math.round((srcPixel >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					r = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx];
					var g;
					var idx1 = Math.round((srcPixel >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					g = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx1];
					var b;
					var idx2 = Math.round((srcPixel >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					b = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx2];
					srcPixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					lime_math_color__$RGBA_RGBA_$Impl_$.unmult = 255.0 / (destPixel & 255);
					var r1;
					var idx3 = Math.round((destPixel >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					r1 = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx3];
					var g1;
					var idx4 = Math.round((destPixel >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					g1 = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx4];
					var b1;
					var idx5 = Math.round((destPixel >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
					b1 = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx5];
					destPixel = (r1 & 255) << 24 | (g1 & 255) << 16 | (b1 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(srcIdx) {
			case 0:
				value = srcPixel >> 24 & 255;
				break;
			case 1:
				value = srcPixel >> 16 & 255;
				break;
			case 2:
				value = srcPixel >> 8 & 255;
				break;
			case 3:
				value = srcPixel & 255;
				break;
			}
			switch(destIdx) {
			case 0:
				destPixel = (value & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 1:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 2:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 3:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value & 255;
				value;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) destPixel = 0;
				} else if((destPixel & 255) != 255) {
					lime_math_color__$RGBA_RGBA_$Impl_$.a16 = lime_math_color__$RGBA_RGBA_$Impl_$.__alpha16[destPixel & 255];
					destPixel = ((destPixel >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destData[destPosition] = destPixel >> 8 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 0:
				destData[destPosition] = destPixel >> 24 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >> 24 & 255;
				destData[destPosition + 2] = destPixel >> 16 & 255;
				destData[destPosition + 3] = destPixel >> 8 & 255;
				break;
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
	image.version++;
};
lime_graphics_utils_ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		{
			var argb = color;
			var rgba = 0;
			rgba = (argb >> 16 & 255 & 255) << 24 | (argb >> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >> 24 & 255 & 255;
			fillColor = rgba;
		}
		break;
	case 2:
		{
			var bgra = color;
			var rgba1 = 0;
			rgba1 = (bgra >> 8 & 255 & 255) << 24 | (bgra >> 16 & 255 & 255) << 16 | (bgra >> 24 & 255 & 255) << 8 | bgra & 255 & 255;
			fillColor = rgba1;
		}
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >> 24 & 255 & 255) << 24 | (fillColor >> 16 & 255 & 255) << 16 | (fillColor >> 8 & 255 & 255) << 8 | 255;
		255;
	}
	var data = image.buffer.data;
	if(data == null) return;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) fillColor = 0;
		} else if((fillColor & 255) != 255) {
			lime_math_color__$RGBA_RGBA_$Impl_$.a16 = lime_math_color__$RGBA_RGBA_$Impl_$.__alpha16[fillColor & 255];
			fillColor = ((fillColor >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 24 | ((fillColor >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 16 | ((fillColor >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dataView = new lime_graphics_utils__$ImageDataUtil_ImageDataView(image,rect);
	var row;
	var _g1 = 0;
	var _g = dataView.height;
	while(_g1 < _g) {
		var y = _g1++;
		row = dataView.offset + dataView.stride * y;
		var _g3 = 0;
		var _g2 = dataView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			var offset = row + x * 4;
			switch(format1) {
			case 2:
				data[offset] = fillColor >> 8 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 0:
				data[offset] = fillColor >> 24 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >> 24 & 255;
				data[offset + 2] = fillColor >> 16 & 255;
				data[offset + 3] = fillColor >> 8 & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
};
lime_graphics_utils_ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null || !image.buffer.transparent) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		var offset1 = i * 4;
		if((pixel & 255) == 0) {
			if(pixel != 0) pixel = 0;
		} else if((pixel & 255) != 255) {
			lime_math_color__$RGBA_RGBA_$Impl_$.a16 = lime_math_color__$RGBA_RGBA_$Impl_$.__alpha16[pixel & 255];
			pixel = ((pixel >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 24 | ((pixel >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 16 | ((pixel >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
	image.version++;
};
lime_graphics_utils_ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	var _g = image.get_format();
	switch(_g) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g1 = 0;
	while(_g1 < length) {
		var i = _g1++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
	image.version++;
};
lime_graphics_utils_ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime_math_color__$RGBA_RGBA_$Impl_$.unmult = 255.0 / (pixel & 255);
			var r;
			var idx = Math.round((pixel >> 24 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
			r = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx];
			var g;
			var idx1 = Math.round((pixel >> 16 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
			g = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx1];
			var b;
			var idx2 = Math.round((pixel >> 8 & 255) * lime_math_color__$RGBA_RGBA_$Impl_$.unmult);
			b = lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[idx2];
			pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
		}
		var offset1 = i * 4;
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
	image.version++;
};
var lime_graphics_utils__$ImageDataUtil_ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) this.rect = image.get_rect(); else {
		if(rect.x < 0) rect.x = 0;
		if(rect.y < 0) rect.y = 0;
		if(rect.x + rect.width > image.width) rect.width = image.width - rect.x;
		if(rect.y + rect.height > image.height) rect.height = image.height - rect.y;
		if(rect.width < 0) rect.width = 0;
		if(rect.height < 0) rect.height = 0;
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.x = Math.ceil(this.rect.x);
	this.y = Math.ceil(this.rect.y);
	this.width = Math.floor(this.rect.width);
	this.height = Math.floor(this.rect.height);
	this.offset = this.stride * (this.y + image.offsetY) + (this.x + image.offsetX) * 4;
};
$hxClasses["lime.graphics.utils._ImageDataUtil.ImageDataView"] = lime_graphics_utils__$ImageDataUtil_ImageDataView;
lime_graphics_utils__$ImageDataUtil_ImageDataView.__name__ = ["lime","graphics","utils","_ImageDataUtil","ImageDataView"];
lime_graphics_utils__$ImageDataUtil_ImageDataView.prototype = {
	x: null
	,y: null
	,height: null
	,width: null
	,image: null
	,offset: null
	,rect: null
	,stride: null
	,__class__: lime_graphics_utils__$ImageDataUtil_ImageDataView
};
var lime_math_Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["lime.math.Matrix3"] = lime_math_Matrix3;
lime_math_Matrix3.__name__ = ["lime","math","Matrix3"];
lime_math_Matrix3.prototype = {
	a: null
	,b: null
	,c: null
	,d: null
	,tx: null
	,ty: null
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,__class__: lime_math_Matrix3
};
var lime_math__$Matrix4_Matrix4_$Impl_$ = {};
$hxClasses["lime.math._Matrix4.Matrix4_Impl_"] = lime_math__$Matrix4_Matrix4_$Impl_$;
lime_math__$Matrix4_Matrix4_$Impl_$.__name__ = ["lime","math","_Matrix4","Matrix4_Impl_"];
lime_math__$Matrix4_Matrix4_$Impl_$._new = function(data) {
	var this1;
	if(data != null && data.length == 16) this1 = data; else {
		var array = lime_math__$Matrix4_Matrix4_$Impl_$.__identity;
		var this2;
		if(array != null) this2 = new Float32Array(array); else this2 = null;
		this1 = this2;
	}
	return this1;
};
lime_math__$Matrix4_Matrix4_$Impl_$.append = function(this1,lhs) {
	var m111 = this1[0];
	var m121 = this1[4];
	var m131 = this1[8];
	var m141 = this1[12];
	var m112 = this1[1];
	var m122 = this1[5];
	var m132 = this1[9];
	var m142 = this1[13];
	var m113 = this1[2];
	var m123 = this1[6];
	var m133 = this1[10];
	var m143 = this1[14];
	var m114 = this1[3];
	var m124 = this1[7];
	var m134 = this1[11];
	var m144 = this1[15];
	var m211 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,0);
	var m221 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,4);
	var m231 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,8);
	var m241 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,12);
	var m212 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,1);
	var m222 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,5);
	var m232 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,9);
	var m242 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,13);
	var m213 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,2);
	var m223 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,6);
	var m233 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,10);
	var m243 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,14);
	var m214 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,3);
	var m224 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,7);
	var m234 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,11);
	var m244 = lime_math__$Matrix4_Matrix4_$Impl_$.get(lhs,15);
	this1[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
	this1[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
	this1[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
	this1[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
	this1[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
	this1[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
	this1[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
	this1[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
	this1[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
	this1[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
	this1[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
	this1[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
	this1[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
	this1[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
	this1[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
	this1[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
};
lime_math__$Matrix4_Matrix4_$Impl_$.createOrtho = function(x0,x1,y0,y1,zNear,zFar) {
	var sx = 1.0 / (x1 - x0);
	var sy = 1.0 / (y1 - y0);
	var sz = 1.0 / (zFar - zNear);
	return lime_math__$Matrix4_Matrix4_$Impl_$._new((function($this) {
		var $r;
		var array = [2.0 * sx,0,0,0,0,2.0 * sy,0,0,0,0,-2. * sz,0,-(x0 + x1) * sx,-(y0 + y1) * sy,-(zNear + zFar) * sz,1];
		var this1;
		if(array != null) this1 = new Float32Array(array); else this1 = null;
		$r = this1;
		return $r;
	}(this)));
};
lime_math__$Matrix4_Matrix4_$Impl_$.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 1;
	this1[6] = 0;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 1;
	this1[11] = 0;
	this1[12] = 0;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 1;
};
lime_math__$Matrix4_Matrix4_$Impl_$.get = function(this1,index) {
	return this1[index];
};
lime_math__$Matrix4_Matrix4_$Impl_$.set = function(this1,index,value) {
	this1[index] = value;
	return value;
};
var lime_math_Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime_math_Rectangle;
lime_math_Rectangle.__name__ = ["lime","math","Rectangle"];
lime_math_Rectangle.prototype = {
	height: null
	,width: null
	,x: null
	,y: null
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,__class__: lime_math_Rectangle
};
var lime_math_Vector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["lime.math.Vector2"] = lime_math_Vector2;
lime_math_Vector2.__name__ = ["lime","math","Vector2"];
lime_math_Vector2.prototype = {
	x: null
	,y: null
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashPoint: function() {
		return null;
	}
	,__class__: lime_math_Vector2
};
var lime_math_Vector4 = function() { };
$hxClasses["lime.math.Vector4"] = lime_math_Vector4;
lime_math_Vector4.__name__ = ["lime","math","Vector4"];
lime_math_Vector4.prototype = {
	w: null
	,x: null
	,y: null
	,z: null
	,__class__: lime_math_Vector4
};
var lime_math_color__$RGBA_RGBA_$Impl_$ = {};
$hxClasses["lime.math.color._RGBA.RGBA_Impl_"] = lime_math_color__$RGBA_RGBA_$Impl_$;
lime_math_color__$RGBA_RGBA_$Impl_$.__name__ = ["lime","math","color","_RGBA","RGBA_Impl_"];
var lime_media_ALAudioContext = function() { };
$hxClasses["lime.media.ALAudioContext"] = lime_media_ALAudioContext;
lime_media_ALAudioContext.__name__ = ["lime","media","ALAudioContext"];
var lime_media_ALCAudioContext = function() { };
$hxClasses["lime.media.ALCAudioContext"] = lime_media_ALCAudioContext;
lime_media_ALCAudioContext.__name__ = ["lime","media","ALCAudioContext"];
var lime_media_AudioBuffer = function() {
};
$hxClasses["lime.media.AudioBuffer"] = lime_media_AudioBuffer;
lime_media_AudioBuffer.__name__ = ["lime","media","AudioBuffer"];
lime_media_AudioBuffer.fromBytes = function(bytes) {
	if(bytes == null) return null;
	return null;
};
lime_media_AudioBuffer.fromFile = function(path) {
	if(path == null) return null;
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : [path]});
	return audioBuffer;
};
lime_media_AudioBuffer.fromFiles = function(paths) {
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : paths});
	return audioBuffer;
};
lime_media_AudioBuffer.loadFromFile = function(path) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFile(path);
	if(audioBuffer != null) {
		if(audioBuffer != null) {
			audioBuffer.__srcHowl.on("load",function() {
				promise.complete(audioBuffer);
			});
			audioBuffer.__srcHowl.on("loaderror",function() {
				promise.error(null);
			});
			audioBuffer.__srcHowl.load();
		}
	} else promise.error(null);
	return promise.future;
};
lime_media_AudioBuffer.loadFromFiles = function(paths) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFiles(paths);
	if(audioBuffer != null) {
		audioBuffer.__srcHowl.on("load",function() {
			promise.complete(audioBuffer);
		});
		audioBuffer.__srcHowl.on("loaderror",function() {
			promise.error(null);
		});
		audioBuffer.__srcHowl.load();
	} else promise.error(null);
	return promise.future;
};
lime_media_AudioBuffer.prototype = {
	__srcHowl: null
	,__class__: lime_media_AudioBuffer
};
var lime_media_AudioContext = $hxClasses["lime.media.AudioContext"] = { __ename__ : ["lime","media","AudioContext"], __constructs__ : ["OPENAL","HTML5","WEB","FLASH","CUSTOM"] };
lime_media_AudioContext.OPENAL = function(alc,al) { var $x = ["OPENAL",0,alc,al]; $x.__enum__ = lime_media_AudioContext; $x.toString = $estr; return $x; };
lime_media_AudioContext.HTML5 = function(context) { var $x = ["HTML5",1,context]; $x.__enum__ = lime_media_AudioContext; $x.toString = $estr; return $x; };
lime_media_AudioContext.WEB = function(context) { var $x = ["WEB",2,context]; $x.__enum__ = lime_media_AudioContext; $x.toString = $estr; return $x; };
lime_media_AudioContext.FLASH = function(context) { var $x = ["FLASH",3,context]; $x.__enum__ = lime_media_AudioContext; $x.toString = $estr; return $x; };
lime_media_AudioContext.CUSTOM = function(data) { var $x = ["CUSTOM",4,data]; $x.__enum__ = lime_media_AudioContext; $x.toString = $estr; return $x; };
var lime_media_AudioManager = function() { };
$hxClasses["lime.media.AudioManager"] = lime_media_AudioManager;
lime_media_AudioManager.__name__ = ["lime","media","AudioManager"];
lime_media_AudioManager.init = function(context) {
	if(lime_media_AudioManager.context == null) {
		if(context == null) try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;;
			lime_media_AudioManager.context = lime_media_AudioContext.WEB(new AudioContext ());
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			lime_media_AudioManager.context = lime_media_AudioContext.HTML5(new lime_media_HTML5AudioContext());
		} else lime_media_AudioManager.context = context;
	}
};
var lime_media_AudioSource = function() {
	this.onComplete = new lime_app__$Event_$Void_$Void();
};
$hxClasses["lime.media.AudioSource"] = lime_media_AudioSource;
lime_media_AudioSource.__name__ = ["lime","media","AudioSource"];
lime_media_AudioSource.prototype = {
	onComplete: null
	,buffer: null
	,offset: null
	,backend: null
	,dispose: function() {
		this.backend.dispose();
	}
	,play: function() {
		this.backend.play();
	}
	,stop: function() {
		this.backend.stop();
	}
	,get_currentTime: function() {
		return this.backend.getCurrentTime();
	}
	,set_currentTime: function(value) {
		return this.backend.setCurrentTime(value);
	}
	,get_gain: function() {
		return this.backend.getGain();
	}
	,set_gain: function(value) {
		return this.backend.setGain(value);
	}
	,get_position: function() {
		return this.backend.getPosition();
	}
	,set_position: function(value) {
		return this.backend.setPosition(value);
	}
	,__class__: lime_media_AudioSource
	,__properties__: {set_position:"set_position",get_position:"get_position",set_gain:"set_gain",get_gain:"get_gain",set_currentTime:"set_currentTime",get_currentTime:"get_currentTime"}
};
var lime_media_FlashAudioContext = function() { };
$hxClasses["lime.media.FlashAudioContext"] = lime_media_FlashAudioContext;
lime_media_FlashAudioContext.__name__ = ["lime","media","FlashAudioContext"];
var lime_media_HTML5AudioContext = function() {
};
$hxClasses["lime.media.HTML5AudioContext"] = lime_media_HTML5AudioContext;
lime_media_HTML5AudioContext.__name__ = ["lime","media","HTML5AudioContext"];
lime_media_HTML5AudioContext.prototype = {
	__class__: lime_media_HTML5AudioContext
};
var lime_net__$IHTTPRequest = function() { };
$hxClasses["lime.net._IHTTPRequest"] = lime_net__$IHTTPRequest;
lime_net__$IHTTPRequest.__name__ = ["lime","net","_IHTTPRequest"];
lime_net__$IHTTPRequest.prototype = {
	contentType: null
	,data: null
	,enableResponseHeaders: null
	,formData: null
	,headers: null
	,method: null
	,responseHeaders: null
	,responseStatus: null
	,timeout: null
	,uri: null
	,userAgent: null
	,__class__: lime_net__$IHTTPRequest
};
var lime_net__$HTTPRequest_AbstractHTTPRequest = function(uri) {
	this.uri = uri;
	this.contentType = "application/x-www-form-urlencoded";
	this.followRedirects = true;
	this.formData = new haxe_ds_StringMap();
	this.headers = [];
	this.method = "GET";
	this.timeout = 30000;
	this.backend = new lime__$backend_html5_HTML5HTTPRequest();
	this.backend.init(this);
};
$hxClasses["lime.net._HTTPRequest.AbstractHTTPRequest"] = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_AbstractHTTPRequest.__name__ = ["lime","net","_HTTPRequest","AbstractHTTPRequest"];
lime_net__$HTTPRequest_AbstractHTTPRequest.__interfaces__ = [lime_net__$IHTTPRequest];
lime_net__$HTTPRequest_AbstractHTTPRequest.prototype = {
	contentType: null
	,data: null
	,enableResponseHeaders: null
	,followRedirects: null
	,formData: null
	,headers: null
	,method: null
	,responseData: null
	,responseHeaders: null
	,responseStatus: null
	,timeout: null
	,uri: null
	,userAgent: null
	,backend: null
	,__class__: lime_net__$HTTPRequest_AbstractHTTPRequest
};
var lime_net__$HTTPRequest_$Bytes = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_Bytes"] = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$Bytes.__name__ = ["lime","net","_HTTPRequest_Bytes"];
lime_net__$HTTPRequest_$Bytes.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$Bytes.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	fromBytes: function(bytes) {
		return bytes;
	}
	,load: function(uri) {
		var _g = this;
		if(uri != null) this.uri = uri;
		var promise = new lime_app_Promise();
		var future = this.backend.loadData(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(bytes) {
			_g.responseData = _g.fromBytes(bytes);
			promise.complete(_g.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$Bytes
});
var lime_net__$HTTPRequest_$String = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_String"] = lime_net__$HTTPRequest_$String;
lime_net__$HTTPRequest_$String.__name__ = ["lime","net","_HTTPRequest_String"];
lime_net__$HTTPRequest_$String.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$String.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	load: function(uri) {
		var _g = this;
		if(uri != null) this.uri = uri;
		var promise = new lime_app_Promise();
		var future = this.backend.loadText(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(text) {
			_g.responseData = text;
			promise.complete(_g.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$String
});
var lime_net_HTTPRequestHeader = function(name,value) {
	if(value == null) value = "";
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.HTTPRequestHeader"] = lime_net_HTTPRequestHeader;
lime_net_HTTPRequestHeader.__name__ = ["lime","net","HTTPRequestHeader"];
lime_net_HTTPRequestHeader.prototype = {
	name: null
	,value: null
	,__class__: lime_net_HTTPRequestHeader
};
var lime_net__$HTTPRequest_$lime_$utils_$Bytes = function(uri) {
	lime_net__$HTTPRequest_$Bytes.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_lime_utils_Bytes"] = lime_net__$HTTPRequest_$lime_$utils_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__name__ = ["lime","net","_HTTPRequest_lime_utils_Bytes"];
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__super__ = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.prototype = $extend(lime_net__$HTTPRequest_$Bytes.prototype,{
	fromBytes: function(bytes) {
		return lime_utils__$Bytes_Bytes_$Impl_$.fromBytes(bytes);
	}
	,__class__: lime_net__$HTTPRequest_$lime_$utils_$Bytes
});
var lime_net__$HTTPRequest_$openfl_$utils_$ByteArray = function(uri) {
	lime_net__$HTTPRequest_$Bytes.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_openfl_utils_ByteArray"] = lime_net__$HTTPRequest_$openfl_$utils_$ByteArray;
lime_net__$HTTPRequest_$openfl_$utils_$ByteArray.__name__ = ["lime","net","_HTTPRequest_openfl_utils_ByteArray"];
lime_net__$HTTPRequest_$openfl_$utils_$ByteArray.__super__ = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$openfl_$utils_$ByteArray.prototype = $extend(lime_net__$HTTPRequest_$Bytes.prototype,{
	fromBytes: function(bytes) {
		return openfl_utils__$ByteArray_ByteArray_$Impl_$.fromBytes(bytes);
	}
	,__class__: lime_net__$HTTPRequest_$openfl_$utils_$ByteArray
});
var lime_system_BackgroundWorker = function() {
	this.onError = new lime_app__$Event_$Dynamic_$Void();
	this.onComplete = new lime_app__$Event_$Dynamic_$Void();
	this.doWork = new lime_app__$Event_$Dynamic_$Void();
};
$hxClasses["lime.system.BackgroundWorker"] = lime_system_BackgroundWorker;
lime_system_BackgroundWorker.__name__ = ["lime","system","BackgroundWorker"];
lime_system_BackgroundWorker.prototype = {
	canceled: null
	,completed: null
	,doWork: null
	,onComplete: null
	,onError: null
	,__runMessage: null
	,run: function(message) {
		this.canceled = false;
		this.completed = false;
		this.__runMessage = message;
		this.__doWork();
	}
	,sendComplete: function(message) {
		this.completed = true;
		if(!this.canceled) {
			this.canceled = true;
			this.onComplete.dispatch(message);
		}
	}
	,sendError: function(message) {
		if(!this.canceled) {
			this.canceled = true;
			this.onError.dispatch(message);
		}
	}
	,__doWork: function() {
		this.doWork.dispatch(this.__runMessage);
	}
	,__class__: lime_system_BackgroundWorker
};
var lime_system_Clipboard = function() { };
$hxClasses["lime.system.Clipboard"] = lime_system_Clipboard;
lime_system_Clipboard.__name__ = ["lime","system","Clipboard"];
lime_system_Clipboard.__properties__ = {set_text:"set_text",get_text:"get_text"}
lime_system_Clipboard.get_text = function() {
	return lime_system_Clipboard._text;
	return null;
};
lime_system_Clipboard.set_text = function(value) {
	lime_system_Clipboard._text = value;
	if(window.document.queryCommandEnabled("copy")) window.document.execCommand("copy");
	return value;
	return null;
};
var lime_system_System = function() { };
$hxClasses["lime.system.System"] = lime_system_System;
lime_system_System.__name__ = ["lime","system","System"];
lime_system_System.exit = function(code) {
};
lime_system_System.getTimer = function() {
	return new Date().getTime();
};
var lime_system_ThreadPool = function(minThreads,maxThreads) {
	if(maxThreads == null) maxThreads = 1;
	if(minThreads == null) minThreads = 0;
	this.onError = new lime_app__$Event_$Dynamic_$Void();
	this.onComplete = new lime_app__$Event_$Dynamic_$Void();
	this.doWork = new lime_app__$Event_$Dynamic_$Void();
	this.minThreads = minThreads;
	this.maxThreads = maxThreads;
	this.currentThreads = 0;
};
$hxClasses["lime.system.ThreadPool"] = lime_system_ThreadPool;
lime_system_ThreadPool.__name__ = ["lime","system","ThreadPool"];
lime_system_ThreadPool.prototype = {
	currentThreads: null
	,doWork: null
	,maxThreads: null
	,minThreads: null
	,onComplete: null
	,onError: null
	,queue: function(state) {
		this.doWork.dispatch(state);
	}
	,sendComplete: function(state) {
		this.onComplete.dispatch(state);
	}
	,sendError: function(state) {
		this.onError.dispatch(state);
	}
	,__class__: lime_system_ThreadPool
};
var lime_text_Font = function(name) {
	if(name != null) this.name = name;
	if(this.__fontPath != null) this.__fromFile(this.__fontPath);
};
$hxClasses["lime.text.Font"] = lime_text_Font;
lime_text_Font.__name__ = ["lime","text","Font"];
lime_text_Font.fromFile = function(path) {
	if(path == null) return null;
	var font = new lime_text_Font();
	font.__fromFile(path);
	return font;
};
lime_text_Font.loadFromName = function(path) {
	var font = new lime_text_Font();
	return font.__loadFromName(path);
};
lime_text_Font.prototype = {
	name: null
	,__fontPath: null
	,__fromFile: function(path) {
		this.__fontPath = path;
	}
	,__loadFromName: function(name) {
		var _g = this;
		var promise = new lime_app_Promise();
		this.name = name;
		var font = name;
		var ua = window.navigator.userAgent.toLowerCase();
		if(!(ua.indexOf(" safari/") >= 0 && ua.indexOf(" chrome/") < 0) && (window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load)))) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			promise.complete(_g);
		}); else {
			var node = window.document.createElement("span");
			node.innerHTML = "giItT1WQy@!-/#";
			var style = node.style;
			style.position = "absolute";
			style.left = "-10000px";
			style.top = "-10000px";
			style.fontSize = "300px";
			style.fontFamily = "sans-serif";
			style.fontVariant = "normal";
			style.fontStyle = "normal";
			style.fontWeight = "normal";
			style.letterSpacing = "0";
			window.document.body.appendChild(node);
			var width = node.offsetWidth;
			style.fontFamily = "'" + font + "', sans-serif";
			var interval = null;
			var found = false;
			var checkFont = function() {
				if(node.offsetWidth != width) {
					if(!found) {
						found = true;
						return false;
					}
					if(interval != null) window.clearInterval(interval);
					node.parentNode.removeChild(node);
					node = null;
					promise.complete(_g);
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
		return promise.future;
	}
	,__class__: lime_text_Font
};
var lime_ui_Gamepad = function(id) {
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onButtonDown = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onAxisMove = new lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Gamepad"] = lime_ui_Gamepad;
lime_ui_Gamepad.__name__ = ["lime","ui","Gamepad"];
lime_ui_Gamepad.__connect = function(id) {
	if(!lime_ui_Gamepad.devices.h.hasOwnProperty(id)) {
		var gamepad = new lime_ui_Gamepad(id);
		lime_ui_Gamepad.devices.h[id] = gamepad;
		lime_ui_Gamepad.onConnect.dispatch(gamepad);
	}
};
lime_ui_Gamepad.__disconnect = function(id) {
	var gamepad = lime_ui_Gamepad.devices.h[id];
	if(gamepad != null) gamepad.connected = false;
	lime_ui_Gamepad.devices.remove(id);
	if(gamepad != null) gamepad.onDisconnect.dispatch();
};
lime_ui_Gamepad.prototype = {
	connected: null
	,id: null
	,onAxisMove: null
	,onButtonDown: null
	,onButtonUp: null
	,onDisconnect: null
	,get_guid: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,get_name: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		return devices[this.id].id;
	}
	,__class__: lime_ui_Gamepad
	,__properties__: {get_name:"get_name",get_guid:"get_guid"}
};
var lime_ui_Joystick = function(id) {
	this.onTrackballMove = new lime_app__$Event_$Int_$Float_$Void();
	this.onHatMove = new lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void();
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$Int_$Void();
	this.onButtonDown = new lime_app__$Event_$Int_$Void();
	this.onAxisMove = new lime_app__$Event_$Int_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Joystick"] = lime_ui_Joystick;
lime_ui_Joystick.__name__ = ["lime","ui","Joystick"];
lime_ui_Joystick.__connect = function(id) {
	if(!lime_ui_Joystick.devices.h.hasOwnProperty(id)) {
		var joystick = new lime_ui_Joystick(id);
		lime_ui_Joystick.devices.h[id] = joystick;
		lime_ui_Joystick.onConnect.dispatch(joystick);
	}
};
lime_ui_Joystick.__disconnect = function(id) {
	var joystick = lime_ui_Joystick.devices.h[id];
	if(joystick != null) joystick.connected = false;
	lime_ui_Joystick.devices.remove(id);
	if(joystick != null) joystick.onDisconnect.dispatch();
};
lime_ui_Joystick.__getDeviceData = function() {
	if(navigator.getGamepads) return navigator.getGamepads(); else if(navigator.webkitGetGamepads) return navigator.webkitGetGamepads(); else return null;
};
lime_ui_Joystick.prototype = {
	connected: null
	,id: null
	,onAxisMove: null
	,onButtonDown: null
	,onButtonUp: null
	,onDisconnect: null
	,onHatMove: null
	,onTrackballMove: null
	,__class__: lime_ui_Joystick
};
var lime_ui__$KeyModifier_KeyModifier_$Impl_$ = {};
$hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = lime_ui__$KeyModifier_KeyModifier_$Impl_$;
lime_ui__$KeyModifier_KeyModifier_$Impl_$.__name__ = ["lime","ui","_KeyModifier","KeyModifier_Impl_"];
lime_ui__$KeyModifier_KeyModifier_$Impl_$.__properties__ = {get_shiftKey:"get_shiftKey",get_metaKey:"get_metaKey",get_ctrlKey:"get_ctrlKey",get_altKey:"get_altKey"}
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_altKey = function(this1) {
	return (this1 & 256) > 0 || (this1 & 512) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey = function(this1) {
	return (this1 & 64) > 0 || (this1 & 128) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey = function(this1) {
	return (this1 & 1024) > 0 || (this1 & 2048) > 0;
};
lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey = function(this1) {
	return (this1 & 1) > 0 || (this1 & 2) > 0;
};
var lime_ui_Mouse = function() { };
$hxClasses["lime.ui.Mouse"] = lime_ui_Mouse;
lime_ui_Mouse.__name__ = ["lime","ui","Mouse"];
lime_ui_Mouse.__properties__ = {set_cursor:"set_cursor"}
lime_ui_Mouse.set_cursor = function(value) {
	return lime__$backend_html5_HTML5Mouse.set_cursor(value);
};
var lime_ui_MouseCursor = $hxClasses["lime.ui.MouseCursor"] = { __ename__ : ["lime","ui","MouseCursor"], __constructs__ : ["ARROW","CROSSHAIR","DEFAULT","MOVE","POINTER","RESIZE_NESW","RESIZE_NS","RESIZE_NWSE","RESIZE_WE","TEXT","WAIT","WAIT_ARROW","CUSTOM"] };
lime_ui_MouseCursor.ARROW = ["ARROW",0];
lime_ui_MouseCursor.ARROW.toString = $estr;
lime_ui_MouseCursor.ARROW.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.CROSSHAIR = ["CROSSHAIR",1];
lime_ui_MouseCursor.CROSSHAIR.toString = $estr;
lime_ui_MouseCursor.CROSSHAIR.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.DEFAULT = ["DEFAULT",2];
lime_ui_MouseCursor.DEFAULT.toString = $estr;
lime_ui_MouseCursor.DEFAULT.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.MOVE = ["MOVE",3];
lime_ui_MouseCursor.MOVE.toString = $estr;
lime_ui_MouseCursor.MOVE.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.POINTER = ["POINTER",4];
lime_ui_MouseCursor.POINTER.toString = $estr;
lime_ui_MouseCursor.POINTER.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.RESIZE_NESW = ["RESIZE_NESW",5];
lime_ui_MouseCursor.RESIZE_NESW.toString = $estr;
lime_ui_MouseCursor.RESIZE_NESW.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.RESIZE_NS = ["RESIZE_NS",6];
lime_ui_MouseCursor.RESIZE_NS.toString = $estr;
lime_ui_MouseCursor.RESIZE_NS.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.RESIZE_NWSE = ["RESIZE_NWSE",7];
lime_ui_MouseCursor.RESIZE_NWSE.toString = $estr;
lime_ui_MouseCursor.RESIZE_NWSE.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.RESIZE_WE = ["RESIZE_WE",8];
lime_ui_MouseCursor.RESIZE_WE.toString = $estr;
lime_ui_MouseCursor.RESIZE_WE.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.TEXT = ["TEXT",9];
lime_ui_MouseCursor.TEXT.toString = $estr;
lime_ui_MouseCursor.TEXT.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.WAIT = ["WAIT",10];
lime_ui_MouseCursor.WAIT.toString = $estr;
lime_ui_MouseCursor.WAIT.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.WAIT_ARROW = ["WAIT_ARROW",11];
lime_ui_MouseCursor.WAIT_ARROW.toString = $estr;
lime_ui_MouseCursor.WAIT_ARROW.__enum__ = lime_ui_MouseCursor;
lime_ui_MouseCursor.CUSTOM = ["CUSTOM",12];
lime_ui_MouseCursor.CUSTOM.toString = $estr;
lime_ui_MouseCursor.CUSTOM.__enum__ = lime_ui_MouseCursor;
var lime_ui_Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
$hxClasses["lime.ui.Touch"] = lime_ui_Touch;
lime_ui_Touch.__name__ = ["lime","ui","Touch"];
lime_ui_Touch.prototype = {
	device: null
	,dx: null
	,dy: null
	,id: null
	,pressure: null
	,x: null
	,y: null
	,__class__: lime_ui_Touch
};
var lime_ui_Window = function(config) {
	this.onTextInput = new lime_app__$Event_$String_$Void();
	this.onTextEdit = new lime_app__$Event_$String_$Int_$Int_$Void();
	this.onRestore = new lime_app__$Event_$Void_$Void();
	this.onResize = new lime_app__$Event_$Int_$Int_$Void();
	this.onMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseWheel = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseUp = new lime_app__$Event_$Float_$Float_$Int_$Void();
	this.onMouseMoveRelative = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseDown = new lime_app__$Event_$Float_$Float_$Int_$Void();
	this.onMinimize = new lime_app__$Event_$Void_$Void();
	this.onLeave = new lime_app__$Event_$Void_$Void();
	this.onKeyUp = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onKeyDown = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onFullscreen = new lime_app__$Event_$Void_$Void();
	this.onFocusOut = new lime_app__$Event_$Void_$Void();
	this.onFocusIn = new lime_app__$Event_$Void_$Void();
	this.onEnter = new lime_app__$Event_$Void_$Void();
	this.onDropFile = new lime_app__$Event_$String_$Void();
	this.onDeactivate = new lime_app__$Event_$Void_$Void();
	this.onCreate = new lime_app__$Event_$Void_$Void();
	this.onClose = new lime_app__$Event_$Void_$Void();
	this.onActivate = new lime_app__$Event_$Void_$Void();
	this.config = config;
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__scale = 1;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	if(config != null) {
		if(Object.prototype.hasOwnProperty.call(config,"width")) this.__width = config.width;
		if(Object.prototype.hasOwnProperty.call(config,"height")) this.__height = config.height;
		if(Object.prototype.hasOwnProperty.call(config,"x")) this.__x = config.x;
		if(Object.prototype.hasOwnProperty.call(config,"y")) this.__y = config.y;
		if(Object.prototype.hasOwnProperty.call(config,"fullscreen")) this.__fullscreen = config.fullscreen;
		if(Object.prototype.hasOwnProperty.call(config,"borderless")) this.__borderless = config.borderless;
		if(Object.prototype.hasOwnProperty.call(config,"resizable")) this.__resizable = config.resizable;
		if(Object.prototype.hasOwnProperty.call(config,"title")) this.__title = config.title;
	}
	this.backend = new lime__$backend_html5_HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime_ui_Window;
lime_ui_Window.__name__ = ["lime","ui","Window"];
lime_ui_Window.prototype = {
	application: null
	,config: null
	,id: null
	,onActivate: null
	,onClose: null
	,onCreate: null
	,onDeactivate: null
	,onDropFile: null
	,onEnter: null
	,onFocusIn: null
	,onFocusOut: null
	,onFullscreen: null
	,onKeyDown: null
	,onKeyUp: null
	,onLeave: null
	,onMinimize: null
	,onMouseDown: null
	,onMouseMove: null
	,onMouseMoveRelative: null
	,onMouseUp: null
	,onMouseWheel: null
	,onMove: null
	,onResize: null
	,onRestore: null
	,onTextEdit: null
	,onTextInput: null
	,renderer: null
	,stage: null
	,backend: null
	,__borderless: null
	,__fullscreen: null
	,__height: null
	,__resizable: null
	,__scale: null
	,__title: null
	,__width: null
	,__x: null
	,__y: null
	,close: function() {
		this.backend.close();
	}
	,create: function(application) {
		this.application = application;
		this.backend.create(application);
		if(this.renderer != null) this.renderer.create();
	}
	,resize: function(width,height) {
		this.backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.backend.setFullscreen(value);
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,__class__: lime_ui_Window
	,__properties__: {set_width:"set_width",set_height:"set_height",set_fullscreen:"set_fullscreen"}
};
var lime_utils_AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.image = new haxe_ds_StringMap();
	this.version = 747071;
};
$hxClasses["lime.utils.AssetCache"] = lime_utils_AssetCache;
lime_utils_AssetCache.__name__ = ["lime","utils","AssetCache"];
lime_utils_AssetCache.prototype = {
	audio: null
	,enabled: null
	,image: null
	,font: null
	,version: null
	,set: function(id,type,asset) {
		switch(type) {
		case "FONT":
			var value = asset;
			this.font.set(id,value);
			break;
		case "IMAGE":
			if(!js_Boot.__instanceof(asset,lime_graphics_Image)) throw new js__$Boot_HaxeError("Cannot cache non-Image asset: " + Std.string(asset) + " as Image");
			var value1 = asset;
			this.image.set(id,value1);
			break;
		case "SOUND":case "MUSIC":
			if(!js_Boot.__instanceof(asset,lime_media_AudioBuffer)) throw new js__$Boot_HaxeError("Cannot cache non-AudioBuffer asset: " + Std.string(asset) + " as AudioBuffer");
			var value2 = asset;
			this.audio.set(id,value2);
			break;
		default:
			throw new js__$Boot_HaxeError(type + " assets are not cachable");
		}
	}
	,clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.image = new haxe_ds_StringMap();
		} else {
			var keys = this.audio.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.audio.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.image.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.image.remove(key2);
			}
		}
	}
	,__class__: lime_utils_AssetCache
};
var lime_utils_AssetManifest = function() {
	this.assets = [];
	this.libraryArgs = [];
	this.version = 2;
};
$hxClasses["lime.utils.AssetManifest"] = lime_utils_AssetManifest;
lime_utils_AssetManifest.__name__ = ["lime","utils","AssetManifest"];
lime_utils_AssetManifest.fromBytes = function(bytes) {
	if(bytes != null) return lime_utils_AssetManifest.parse(bytes.getString(0,bytes.length)); else return null;
};
lime_utils_AssetManifest.fromFile = function(path) {
	return lime_utils_AssetManifest.fromBytes(lime_utils__$Bytes_Bytes_$Impl_$.fromFile(path));
};
lime_utils_AssetManifest.parse = function(data) {
	var manifestData = JSON.parse(data);
	var manifest = new lime_utils_AssetManifest();
	manifest.name = manifestData.name;
	manifest.libraryType = manifestData.libraryType;
	manifest.libraryArgs = manifestData.libraryArgs;
	manifest.assets = haxe_Unserializer.run(manifestData.assets);
	return manifest;
};
lime_utils_AssetManifest.prototype = {
	assets: null
	,libraryArgs: null
	,libraryType: null
	,name: null
	,version: null
	,__class__: lime_utils_AssetManifest
};
var lime_utils_Assets = function() { };
$hxClasses["lime.utils.Assets"] = lime_utils_Assets;
lime_utils_Assets.__name__ = ["lime","utils","Assets"];
lime_utils_Assets.exists = function(id,type) {
	if(type == null) type = "BINARY";
	var symbol = new lime_utils__$Assets_LibrarySymbol(id);
	if(symbol.library != null) return symbol.library.exists(symbol.symbolName,type);
	return false;
};
lime_utils_Assets.getAsset = function(id,type,useCache) {
	if(useCache && lime_utils_Assets.cache.enabled) switch(type) {
	case "BINARY":case "TEXT":
		useCache = false;
		break;
	case "FONT":
		var font = lime_utils_Assets.cache.font.get(id);
		if(font != null) return font;
		break;
	case "IMAGE":
		var image = lime_utils_Assets.cache.image.get(id);
		if(lime_utils_Assets.isValidImage(image)) return image;
		break;
	case "MUSIC":case "SOUND":
		var audio = lime_utils_Assets.cache.audio.get(id);
		if(lime_utils_Assets.isValidAudio(audio)) return audio;
		break;
	case "TEMPLATE":
		throw new js__$Boot_HaxeError("Not sure how to get template: " + id);
		break;
	}
	var symbol = new lime_utils__$Assets_LibrarySymbol(id);
	if(symbol.library != null) {
		if(symbol.library.exists(symbol.symbolName,type)) {
			if(symbol.library.isLocal(symbol.symbolName,type)) {
				var asset = symbol.library.getAsset(symbol.symbolName,type);
				if(useCache && lime_utils_Assets.cache.enabled) lime_utils_Assets.cache.set(id,type,asset);
				return asset;
			} else lime_utils_Log.info(type + " asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 145, className : "lime.utils.Assets", methodName : "getAsset"});
		} else lime_utils_Log.info("There is no " + type + " asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 151, className : "lime.utils.Assets", methodName : "getAsset"});
	} else lime_utils_Log.info("There is no asset library named \"" + symbol.libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 157, className : "lime.utils.Assets", methodName : "getAsset"});
	return null;
};
lime_utils_Assets.getImage = function(id,useCache) {
	if(useCache == null) useCache = true;
	return lime_utils_Assets.getAsset(id,"IMAGE",useCache);
};
lime_utils_Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime_utils_Assets.libraries.get(name);
};
lime_utils_Assets.getText = function(id) {
	return lime_utils_Assets.getAsset(id,"TEXT",false);
};
lime_utils_Assets.isValidAudio = function(buffer) {
	return buffer != null;
};
lime_utils_Assets.isValidImage = function(buffer) {
	return buffer != null;
};
lime_utils_Assets.loadLibrary = function(name) {
	var promise = new lime_app_Promise();
	var data = lime_utils_Assets.getText("libraries/" + name + ".json");
	if(data != null && data != "") {
		var library = lime_utils_AssetLibrary.fromManifest(lime_utils_AssetManifest.parse(data));
		if(library == null) promise.error("[Assets] Cannot open library \"" + name + "\""); else {
			lime_utils_Assets.libraries.set(name,library);
			library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
			promise.completeWith(library.load());
		}
	} else promise.error("[Assets] There is no asset library named \"" + name + "\"");
	return promise.future;
};
lime_utils_Assets.registerLibrary = function(name,library) {
	if(lime_utils_Assets.libraries.exists(name)) {
		if(lime_utils_Assets.libraries.get(name) == library) return; else lime_utils_Assets.unloadLibrary(name);
	}
	if(library != null) library.onChange.add(lime_utils_Assets.library_onChange);
	lime_utils_Assets.libraries.set(name,library);
};
lime_utils_Assets.unloadLibrary = function(name) {
	var library = lime_utils_Assets.libraries.get(name);
	if(library != null) {
		lime_utils_Assets.cache.clear(name + ":");
		library.onChange.remove(lime_utils_Assets.library_onChange);
		library.unload();
	}
	lime_utils_Assets.libraries.remove(name);
};
lime_utils_Assets.library_onChange = function() {
	lime_utils_Assets.cache.clear();
	lime_utils_Assets.onChange.dispatch();
};
var lime_utils__$Assets_LibrarySymbol = function(id) {
	var colonIndex = id.indexOf(":");
	this.libraryName = id.substring(0,colonIndex);
	this.symbolName = id.substring(colonIndex + 1);
	this.library = lime_utils_Assets.getLibrary(this.libraryName);
};
$hxClasses["lime.utils._Assets.LibrarySymbol"] = lime_utils__$Assets_LibrarySymbol;
lime_utils__$Assets_LibrarySymbol.__name__ = ["lime","utils","_Assets","LibrarySymbol"];
lime_utils__$Assets_LibrarySymbol.prototype = {
	libraryName: null
	,symbolName: null
	,library: null
	,__class__: lime_utils__$Assets_LibrarySymbol
};
var lime_utils__$Bytes_Bytes_$Impl_$ = {};
$hxClasses["lime.utils._Bytes.Bytes_Impl_"] = lime_utils__$Bytes_Bytes_$Impl_$;
lime_utils__$Bytes_Bytes_$Impl_$.__name__ = ["lime","utils","_Bytes","Bytes_Impl_"];
lime_utils__$Bytes_Bytes_$Impl_$._new = function(length,bytesData) {
	return new haxe_io_Bytes(bytesData);
};
lime_utils__$Bytes_Bytes_$Impl_$.fromBytes = function(bytes) {
	return lime_utils__$Bytes_Bytes_$Impl_$._new(bytes.length,bytes.b.bufferValue);
};
lime_utils__$Bytes_Bytes_$Impl_$.fromFile = function(path) {
	return null;
};
lime_utils__$Bytes_Bytes_$Impl_$.loadFromFile = function(path) {
	var request = new lime_net__$HTTPRequest_$lime_$utils_$Bytes();
	return request.load(path);
};
var lime_utils_GLUtils = function() { };
$hxClasses["lime.utils.GLUtils"] = lime_utils_GLUtils;
lime_utils_GLUtils.__name__ = ["lime","utils","GLUtils"];
lime_utils_GLUtils.compileShader = function(source,type) {
	var shader = lime_graphics_opengl_GL.context.createShader(type);
	lime_graphics_opengl_GL.context.shaderSource(shader,source);
	lime_graphics_opengl_GL.context.compileShader(shader);
	if(lime_graphics_opengl_GL.context.getShaderParameter(shader,35713) == 0) {
		var message;
		switch(type) {
		case 35633:
			message = "Error compiling vertex shader";
			break;
		case 35632:
			message = "Error compiling fragment shader";
			break;
		default:
			message = "Error compiling unknown shader type";
		}
		message += "\n" + lime_graphics_opengl_GL.context.getShaderInfoLog(shader);
		lime_utils_Log.error(message,{ fileName : "GLUtils.hx", lineNumber : 35, className : "lime.utils.GLUtils", methodName : "compileShader"});
	}
	return shader;
};
lime_utils_GLUtils.createProgram = function(vertexSource,fragmentSource) {
	var vertexShader = lime_utils_GLUtils.compileShader(vertexSource,35633);
	var fragmentShader = lime_utils_GLUtils.compileShader(fragmentSource,35632);
	var program = lime_graphics_opengl_GL.context.createProgram();
	lime_graphics_opengl_GL.context.attachShader(program,vertexShader);
	lime_graphics_opengl_GL.context.attachShader(program,fragmentShader);
	lime_graphics_opengl_GL.context.linkProgram(program);
	if(lime_graphics_opengl_GL.context.getProgramParameter(program,35714) == 0) lime_utils_Log.error("Unable to initialize the shader program",{ fileName : "GLUtils.hx", lineNumber : 56, className : "lime.utils.GLUtils", methodName : "createProgram"});
	return program;
};
var lime_utils_Log = function() { };
$hxClasses["lime.utils.Log"] = lime_utils_Log;
lime_utils_Log.__name__ = ["lime","utils","Log"];
lime_utils_Log.error = function(message,info) {
	if(lime_utils_Log.level >= 1) console.log("[" + info.className + "] ERROR: " + message);
};
lime_utils_Log.info = function(message,info) {
	if(lime_utils_Log.level >= 3) console.log("[" + info.className + "] " + message);
};
lime_utils_Log.warn = function(message,info) {
	if(lime_utils_Log.level >= 2) console.log("[" + info.className + "] WARNING: " + message);
};
var motion_actuators_IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion_actuators_IGenericActuator;
motion_actuators_IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion_actuators_IGenericActuator.prototype = {
	stop: null
	,__class__: motion_actuators_IGenericActuator
};
var motion_actuators_GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion_Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion_actuators_GenericActuator;
motion_actuators_GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion_actuators_GenericActuator.__interfaces__ = [motion_actuators_IGenericActuator];
motion_actuators_GenericActuator.prototype = {
	duration: null
	,id: null
	,properties: null
	,target: null
	,_autoVisible: null
	,_delay: null
	,_ease: null
	,_onComplete: null
	,_onCompleteParams: null
	,_onRepeat: null
	,_onRepeatParams: null
	,_onUpdate: null
	,_onUpdateParams: null
	,_onResume: null
	,_onResumeParams: null
	,_onPause: null
	,_onPauseParams: null
	,_reflect: null
	,_repeat: null
	,_reverse: null
	,_smartRotation: null
	,_snapping: null
	,special: null
	,apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return Reflect.callMethod(method,method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion_Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,onPause: function(handler,parameters) {
		this._onPause = handler;
		if(parameters == null) this._onPauseParams = []; else this._onPauseParams = parameters;
		return this;
	}
	,onResume: function(handler,parameters) {
		this._onResume = handler;
		if(parameters == null) this._onResumeParams = []; else this._onResumeParams = parameters;
		return this;
	}
	,pause: function() {
		if(this._onPause != null) this.callMethod(this._onPause,this._onPauseParams);
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
		if(this._onResume != null) this.callMethod(this._onResume,this._onResumeParams);
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion_actuators_GenericActuator
};
var motion_actuators_SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = [];
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = openfl_Lib.getTimer() / 1000;
	motion_actuators_GenericActuator.call(this,target,duration,properties);
	if(!motion_actuators_SimpleActuator.addedEvent) {
		motion_actuators_SimpleActuator.addedEvent = true;
		openfl_Lib.current.stage.addEventListener("enterFrame",motion_actuators_SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion_actuators_SimpleActuator;
motion_actuators_SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion_actuators_SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = openfl_Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion_actuators_SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion_actuators_SimpleActuator.actuators[j];
		if(actuator != null && actuator.active) {
			if(currentTime >= actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion_actuators_SimpleActuator.actuators.splice(j,1);
			--motion_actuators_SimpleActuator.actuatorsLength;
		}
	}
};
motion_actuators_SimpleActuator.__super__ = motion_actuators_GenericActuator;
motion_actuators_SimpleActuator.prototype = $extend(motion_actuators_GenericActuator.prototype,{
	setField_openfl_geom_Transform: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setField_motion_actuators_TransformActuator_T: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setField_motion_actuators_MotionPathActuator_T: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setField_openfl_display_DisplayObject: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setField_motion_actuators_SimpleActuator_T: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,timeOffset: null
	,active: null
	,cacheVisible: null
	,detailsLength: null
	,initialized: null
	,paused: null
	,pauseTime: null
	,propertyDetails: null
	,sendChange: null
	,setVisible: null
	,startTime: null
	,toggleVisible: null
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField_motion_actuators_SimpleActuator_T(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i) && !(this.target.__properties__ && this.target.__properties__["set_" + i])) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				var value = this.getField(this.properties,i);
				if(start == null) start = 0;
				if(value == null) value = 0;
				details = new motion_actuators_PropertyDetails(this.target,i,start,value - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && js_Boot.__instanceof(this.target,openfl_display_DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField_motion_actuators_SimpleActuator_T(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion_actuators_SimpleActuator.actuators.push(this);
		++motion_actuators_SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		if(!this.paused) {
			this.paused = true;
			motion_actuators_GenericActuator.prototype.pause.call(this);
			this.pauseTime = openfl_Lib.getTimer();
		}
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (openfl_Lib.getTimer() - this.pauseTime) / 1000;
			motion_actuators_GenericActuator.prototype.resume.call(this);
		}
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField_motion_actuators_SimpleActuator_T(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion_actuators_SimpleActuator
});
var motion_easing_Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion_easing_Expo;
motion_easing_Expo.__name__ = ["motion","easing","Expo"];
motion_easing_Expo.__properties__ = {get_easeOut:"get_easeOut"}
motion_easing_Expo.get_easeOut = function() {
	return new motion_easing_ExpoEaseOut();
};
var motion_easing_IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion_easing_IEasing;
motion_easing_IEasing.__name__ = ["motion","easing","IEasing"];
motion_easing_IEasing.prototype = {
	calculate: null
	,__class__: motion_easing_IEasing
};
var motion_easing_ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion_easing_ExpoEaseOut;
motion_easing_ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion_easing_ExpoEaseOut.__interfaces__ = [motion_easing_IEasing];
motion_easing_ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,__class__: motion_easing_ExpoEaseOut
};
var motion_Actuate = function() { };
$hxClasses["motion.Actuate"] = motion_Actuate;
motion_Actuate.__name__ = ["motion","Actuate"];
motion_Actuate.apply = function(target,properties,customActuator) {
	motion_Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion_Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion_Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!(motion_Actuate.targetLibraries.h.__keys__[target.__id__] != null) && allowCreation) motion_Actuate.targetLibraries.set(target,[]);
	return motion_Actuate.targetLibraries.h[target.__id__];
};
motion_Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js_Boot.__instanceof(target,motion_actuators_IGenericActuator)) {
			var actuator = target;
			actuator.stop(null,complete,sendEvent);
		} else {
			var library = motion_Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js_Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion_Actuate.timer = function(duration,customActuator) {
	return motion_Actuate.tween(new motion__$Actuate_TweenTimer(0),duration,new motion__$Actuate_TweenTimer(1),false,customActuator);
};
motion_Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion_Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion_Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
				library = motion_Actuate.getLibrary(actuator.target);
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion_Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion_Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion_Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion_Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion_Actuate.targetLibraries.h[target.__id__].length == 0) motion_Actuate.targetLibraries.remove(target);
	}
};
var motion__$Actuate_TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion__$Actuate_TweenTimer;
motion__$Actuate_TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion__$Actuate_TweenTimer.prototype = {
	progress: null
	,__class__: motion__$Actuate_TweenTimer
};
var motion_IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion_IComponentPath;
motion_IComponentPath.__name__ = ["motion","IComponentPath"];
motion_IComponentPath.prototype = {
	get_end: null
	,start: null
	,calculate: null
	,__class__: motion_IComponentPath
	,__properties__: {get_end:"get_end"}
};
var motion_actuators_FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
	if(js_Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		if(target.get_filters().length == 0) target.set_filters([Type.createInstance(this.filterClass,[])]);
		var _g = 0;
		var _g1 = target.get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js_Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = target.get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion_actuators_FilterActuator;
motion_actuators_FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion_actuators_FilterActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_FilterActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	filter: null
	,filterClass: null
	,filterIndex: null
	,apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") Reflect.setField(this.filter,propertyName,Reflect.field(this.properties,propertyName));
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField_openfl_display_DisplayObject(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion_actuators_PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion_actuators_SimpleActuator.prototype.update.call(this,currentTime);
		var filters = this.target.get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js_Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField_openfl_display_DisplayObject(this.target,"filters",filters);
	}
	,__class__: motion_actuators_FilterActuator
});
var motion_actuators_MethodActuator = function(target,duration,properties) {
	this.currentParameters = [];
	this.tweenProperties = { };
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = [];
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(this.properties.start[i]);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion_actuators_MethodActuator;
motion_actuators_MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion_actuators_MethodActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_MethodActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	currentParameters: null
	,tweenProperties: null
	,apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion_actuators_SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion_actuators_PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion_actuators_SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active && !this.paused) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion_actuators_MethodActuator
});
var motion_actuators_MotionPathActuator = function(target,duration,properties) {
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion_actuators_MotionPathActuator;
motion_actuators_MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion_actuators_MotionPathActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_MotionPathActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js_Boot.__cast(Reflect.field(this.properties,propertyName) , motion_IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion_actuators_PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js_Boot.__cast(details1 , motion_actuators_PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js_Boot.__cast(details1 , motion_actuators_PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js_Boot.__cast(details2 , motion_actuators_PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField_motion_actuators_MotionPathActuator_T(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion_actuators_MotionPathActuator
});
var motion_actuators_PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion_actuators_PropertyDetails;
motion_actuators_PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion_actuators_PropertyDetails.prototype = {
	change: null
	,isField: null
	,propertyName: null
	,start: null
	,target: null
	,__class__: motion_actuators_PropertyDetails
};
var motion_actuators_PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion_actuators_PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion_actuators_PropertyPathDetails;
motion_actuators_PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion_actuators_PropertyPathDetails.__super__ = motion_actuators_PropertyDetails;
motion_actuators_PropertyPathDetails.prototype = $extend(motion_actuators_PropertyDetails.prototype,{
	path: null
	,__class__: motion_actuators_PropertyPathDetails
});
var motion_actuators_TransformActuator = function(target,duration,properties) {
	motion_actuators_SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion_actuators_TransformActuator;
motion_actuators_TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion_actuators_TransformActuator.__super__ = motion_actuators_SimpleActuator;
motion_actuators_TransformActuator.prototype = $extend(motion_actuators_SimpleActuator.prototype,{
	endColorTransform: null
	,endSoundTransform: null
	,tweenColorTransform: null
	,tweenSoundTransform: null
	,apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField_openfl_geom_Transform(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField_motion_actuators_TransformActuator_T(this.target,"soundTransform",this.endSoundTransform);
	}
	,initialize: function() {
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorValue") && js_Boot.__instanceof(this.target,openfl_display_DisplayObject)) this.initializeColor();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume") || Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,initializeColor: function() {
		this.endColorTransform = new openfl_geom_ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new openfl_geom_ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion_actuators_PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField_motion_actuators_TransformActuator_T(this.target,"soundTransform",new openfl_media_SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new openfl_media_SoundTransform();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion_actuators_PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion_actuators_PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,update: function(currentTime) {
		motion_actuators_SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField_openfl_geom_Transform(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField_motion_actuators_TransformActuator_T(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,__class__: motion_actuators_TransformActuator
});
var motion_easing_Linear = function() { };
$hxClasses["motion.easing.Linear"] = motion_easing_Linear;
motion_easing_Linear.__name__ = ["motion","easing","Linear"];
motion_easing_Linear.__properties__ = {get_easeNone:"get_easeNone"}
motion_easing_Linear.get_easeNone = function() {
	return new motion_easing_LinearEaseNone();
};
var motion_easing_LinearEaseNone = function() {
};
$hxClasses["motion.easing.LinearEaseNone"] = motion_easing_LinearEaseNone;
motion_easing_LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
motion_easing_LinearEaseNone.__interfaces__ = [motion_easing_IEasing];
motion_easing_LinearEaseNone.prototype = {
	calculate: function(k) {
		return k;
	}
	,__class__: motion_easing_LinearEaseNone
};
var motion_easing_Quad = function() { };
$hxClasses["motion.easing.Quad"] = motion_easing_Quad;
motion_easing_Quad.__name__ = ["motion","easing","Quad"];
motion_easing_Quad.__properties__ = {get_easeOut:"get_easeOut"}
motion_easing_Quad.get_easeOut = function() {
	return new motion_easing_QuadEaseOut();
};
var motion_easing_QuadEaseOut = function() {
};
$hxClasses["motion.easing.QuadEaseOut"] = motion_easing_QuadEaseOut;
motion_easing_QuadEaseOut.__name__ = ["motion","easing","QuadEaseOut"];
motion_easing_QuadEaseOut.__interfaces__ = [motion_easing_IEasing];
motion_easing_QuadEaseOut.prototype = {
	calculate: function(k) {
		return -k * (k - 2);
	}
	,__class__: motion_easing_QuadEaseOut
};
var openfl_IAssetCache = function() { };
$hxClasses["openfl.IAssetCache"] = openfl_IAssetCache;
openfl_IAssetCache.__name__ = ["openfl","IAssetCache"];
openfl_IAssetCache.prototype = {
	get_enabled: null
	,getBitmapData: null
	,hasBitmapData: null
	,removeBitmapData: null
	,setBitmapData: null
	,__class__: openfl_IAssetCache
	,__properties__: {get_enabled:"get_enabled"}
};
var openfl_AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.sound = new haxe_ds_StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl_AssetCache;
openfl_AssetCache.__name__ = ["openfl","AssetCache"];
openfl_AssetCache.__interfaces__ = [openfl_IAssetCache];
openfl_AssetCache.prototype = {
	bitmapData: null
	,font: null
	,sound: null
	,__enabled: null
	,getBitmapData: function(id) {
		return this.bitmapData.get(id);
	}
	,hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	}
	,removeBitmapData: function(id) {
		lime_utils_Assets.cache.image.remove(id);
		return this.bitmapData.remove(id);
	}
	,setBitmapData: function(id,bitmapData) {
		this.bitmapData.set(id,bitmapData);
	}
	,get_enabled: function() {
		return this.__enabled;
	}
	,__class__: openfl_AssetCache
	,__properties__: {get_enabled:"get_enabled"}
};
var openfl_Assets = function() { };
$hxClasses["openfl.Assets"] = openfl_Assets;
openfl_Assets.__name__ = ["openfl","Assets"];
openfl_Assets.exists = function(id,type) {
	return lime_utils_Assets.exists(id,type);
};
openfl_Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl_Assets.cache.get_enabled() && openfl_Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl_Assets.cache.getBitmapData(id);
		if(openfl_Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var image = lime_utils_Assets.getImage(id,false);
	if(image != null) {
		var bitmapData1 = openfl_display_BitmapData.fromImage(image);
		if(useCache && openfl_Assets.cache.get_enabled()) openfl_Assets.cache.setBitmapData(id,bitmapData1);
		return bitmapData1;
	}
	return null;
};
openfl_Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData != null && bitmapData.image != null;
};
openfl_Assets.registerLibrary = function(name,library) {
	lime_utils_Assets.registerLibrary(name,library);
};
var openfl_AssetLibrary = function() {
	lime_utils_AssetLibrary.call(this);
};
$hxClasses["openfl.AssetLibrary"] = openfl_AssetLibrary;
openfl_AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl_AssetLibrary.__super__ = lime_utils_AssetLibrary;
openfl_AssetLibrary.prototype = $extend(lime_utils_AssetLibrary.prototype,{
	__class__: openfl_AssetLibrary
});
var openfl_display_MovieClip = function() {
	openfl_display_Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
	if(openfl_display_MovieClip.__initSymbol != null) {
		this.__swf = openfl_display_MovieClip.__initSWF;
		this.__symbol = openfl_display_MovieClip.__initSymbol;
		openfl_display_MovieClip.__initSWF = null;
		openfl_display_MovieClip.__initSymbol = null;
		this.__fromSymbol(this.__swf,this.__symbol);
	}
};
$hxClasses["openfl.display.MovieClip"] = openfl_display_MovieClip;
openfl_display_MovieClip.__name__ = ["openfl","display","MovieClip"];
openfl_display_MovieClip.__super__ = openfl_display_Sprite;
openfl_display_MovieClip.prototype = $extend(openfl_display_Sprite.prototype,{
	enabled: null
	,__currentFrame: null
	,__currentFrameLabel: null
	,__currentLabel: null
	,__currentLabels: null
	,__frameScripts: null
	,__frameTime: null
	,__lastUpdate: null
	,__objectDepths: null
	,__objects: null
	,__playing: null
	,__swf: null
	,__symbol: null
	,__timeElapsed: null
	,__totalFrames: null
	,__zeroSymbol: null
	,play: function() {
		if(this.__symbol != null) {
			if(!this.__playing && this.__totalFrames > 1) {
				this.__playing = true;
				this.__frameTime = 1000 / this.__swf.frameRate | 0;
				this.__timeElapsed = 0;
			}
		}
	}
	,__enterFrame: function(deltaTime) {
		if(this.__symbol != null) {
			if(this.__playing) {
				this.__timeElapsed += deltaTime;
				var advanceFrames = Math.floor(this.__timeElapsed / this.__frameTime);
				this.__timeElapsed = this.__timeElapsed % this.__frameTime;
				if(this.__frameScripts != null) {
					var _g = 0;
					while(_g < advanceFrames) {
						var i = _g++;
						this.__currentFrame++;
						if(this.__currentFrame > this.__totalFrames) this.__currentFrame = 1;
						if(this.__frameScripts.h.hasOwnProperty(this.__currentFrame - 1)) {
							this.__frameScripts.h[this.__currentFrame - 1]();
							if(!this.__playing) break;
						}
					}
				} else {
					this.__currentFrame += advanceFrames;
					while(this.__currentFrame > this.__totalFrames) this.__currentFrame -= this.__totalFrames;
				}
				this.__updateFrame();
			}
		}
		openfl_display_Sprite.prototype.__enterFrame.call(this,deltaTime);
	}
	,__fromSymbol: function(swf,symbol) {
		if(this.__objects != null) return;
		this.__swf = swf;
		this.__symbol = symbol;
		this.__lastUpdate = -1;
		this.__objectDepths = [];
		this.__objects = new haxe_ds_IntMap();
		this.__zeroSymbol = -1;
		this.__currentFrame = 1;
		this.__totalFrames = this.__symbol.frames.length;
		var _g1 = 0;
		var _g = this.__symbol.frames.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__symbol.frames[i].label != null) this.__currentLabels.push(new openfl_display_FrameLabel(this.__symbol.frames[i].label,i + 1));
		}
		this.__updateFrame();
		var _g2 = 0;
		var _g11 = Type.getInstanceFields(js_Boot.getClass(this));
		while(_g2 < _g11.length) {
			var field = _g11[_g2];
			++_g2;
			var _g21 = 0;
			var _g3 = this.__children;
			while(_g21 < _g3.length) {
				var child = _g3[_g21];
				++_g21;
				if(child.get_name() == field) this[field] = child;
			}
		}
		if(this.__totalFrames > 1) this.play();
	}
	,__placeObject: function(displayObject,frameObject) {
		if(frameObject.name != null) displayObject.set_name(frameObject.name);
		if(frameObject.matrix != null) displayObject.get_transform().set_matrix(frameObject.matrix);
		if(frameObject.colorTransform != null) displayObject.get_transform().set_colorTransform(frameObject.colorTransform);
		if(frameObject.filters != null) {
			var filters = [];
			var _g = 0;
			var _g1 = frameObject.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				switch(filter[1]) {
				case 0:
					var quality = filter[4];
					var blurY = filter[3];
					var blurX = filter[2];
					filters.push(new openfl_filters_BlurFilter(blurX,blurY,quality));
					break;
				case 1:
					var matrix = filter[2];
					filters.push(new openfl_filters_ColorMatrixFilter(matrix));
					break;
				case 2:
					var hideObject = filter[12];
					var knockout = filter[11];
					var inner = filter[10];
					var quality1 = filter[9];
					var strength = filter[8];
					var blurY1 = filter[7];
					var blurX1 = filter[6];
					var alpha = filter[5];
					var color = filter[4];
					var angle = filter[3];
					var distance = filter[2];
					filters.push(new openfl_filters_DropShadowFilter(distance,angle,color,alpha,blurX1,blurY1,strength,quality1,inner,knockout,hideObject));
					break;
				case 3:
					var knockout1 = filter[9];
					var inner1 = filter[8];
					var quality2 = filter[7];
					var strength1 = filter[6];
					var blurY2 = filter[5];
					var blurX2 = filter[4];
					var alpha1 = filter[3];
					var color1 = filter[2];
					filters.push(new openfl_filters_GlowFilter(color1,alpha1,blurX2,blurY2,strength1,quality2,inner1,knockout1));
					break;
				}
			}
			displayObject.set_filters(filters);
		}
		displayObject.set_visible(frameObject.visible);
	}
	,__renderFrame: function(index) {
		var previousIndex = this.__lastUpdate - 1;
		if(previousIndex > index) {
			var timelineObject1;
			var exists;
			var i = 0;
			while(i < this.__objectDepths.length) {
				timelineObject1 = this.__objectDepths[i];
				exists = false;
				var _g = 0;
				var _g1 = this.__symbol.frames[0].objects;
				while(_g < _g1.length) {
					var frameObject = _g1[_g];
					++_g;
					if(frameObject.id == timelineObject1.id) {
						exists = true;
						break;
					}
				}
				if(!exists) {
					if(timelineObject1.displayObject.parent == this) this.removeChild(timelineObject1.displayObject);
					this.__objectDepths.splice(i,1);
				} else i++;
			}
			previousIndex = 0;
		}
		var frame;
		var timelineObject;
		var displayObject;
		var depth;
		var symbol;
		var mask = null;
		var maskObject = null;
		var depthChange = false;
		var _g11 = previousIndex;
		var _g2 = index + 1;
		while(_g11 < _g2) {
			var i1 = _g11++;
			if(i1 < 0) continue;
			frame = this.__symbol.frames[i1];
			var _g21 = 0;
			var _g3 = frame.objects;
			while(_g21 < _g3.length) {
				var frameObject1 = _g3[_g21];
				++_g21;
				if(frameObject1.type != openfl__$internal_timeline_FrameObjectType.DESTROY) {
					if(frameObject1.id == 0 && frameObject1.symbol != this.__zeroSymbol) {
						timelineObject = this.__objects.h[0];
						if(timelineObject != null && timelineObject.displayObject.parent == this) this.removeChild(timelineObject.displayObject);
						var x = this.__objects.h[0];
						HxOverrides.remove(this.__objectDepths,x);
						timelineObject = null;
						this.__zeroSymbol = frameObject1.symbol;
					}
					displayObject = null;
					if(!this.__objects.h.hasOwnProperty(frameObject1.id)) {
						if(this.__swf.symbols.h.hasOwnProperty(frameObject1.symbol)) {
							symbol = this.__swf.symbols.h[frameObject1.symbol];
							displayObject = symbol.__createObject(this.__swf);
						}
						if(displayObject != null) {
							timelineObject = new openfl_display__$MovieClip_TimelineObject(frameObject1.id,frameObject1.depth,displayObject);
							this.__objectDepths.push(timelineObject);
							depthChange = true;
							this.__objects.h[frameObject1.id] = timelineObject;
						}
					} else {
						timelineObject = this.__objects.h[frameObject1.id];
						displayObject = timelineObject.displayObject;
						if(timelineObject.displayObject.parent == null) {
							this.__objectDepths.push(timelineObject);
							depthChange = true;
						}
					}
					if(displayObject != null) {
						this.__placeObject(displayObject,frameObject1);
						if(mask != null) {
							if(mask.clipDepth < frameObject1.depth) mask = null; else displayObject.set_mask(maskObject);
						} else displayObject.set_mask(null);
						if(frameObject1.clipDepth != 0) {
							mask = frameObject1;
							displayObject.set_visible(false);
							maskObject = displayObject;
						}
					}
				} else if(this.__objects.h.hasOwnProperty(frameObject1.id)) {
					timelineObject = this.__objects.h[frameObject1.id];
					if(timelineObject != null && timelineObject.displayObject.parent == this) this.removeChild(timelineObject.displayObject);
					HxOverrides.remove(this.__objectDepths,timelineObject);
					depthChange = true;
				}
			}
		}
		if(depthChange) {
			this.__objectDepths.sort($bind(this,this.__sortTimelineDepth));
			var i2 = this.__objectDepths.length - 1;
			while(i2 >= 0) {
				timelineObject = this.__objectDepths[i2];
				this.addChildAt(timelineObject.displayObject,0);
				i2--;
			}
		}
	}
	,__sortTimelineDepth: function(a,b) {
		return a.depth - b.depth;
	}
	,__updateFrame: function() {
		if(this.__currentFrame != this.__lastUpdate) {
			var frameIndex = this.__currentFrame - 1;
			if(frameIndex > -1) {
				if(this.__symbol.frames.length > frameIndex && this.__symbol.frames[frameIndex] != null) this.__currentFrameLabel = this.__symbol.frames[frameIndex].label; else this.__currentFrameLabel = null;
				if(this.__currentFrameLabel != null) this.__currentLabel = this.__currentFrameLabel; else if(this.__currentFrame != this.__lastUpdate + 1) {
					this.__currentLabel = null;
					var _g = 0;
					var _g1 = this.__currentLabels;
					while(_g < _g1.length) {
						var label = _g1[_g];
						++_g;
						if(label.get_frame() <= this.__currentFrame) this.__currentLabel = label.get_name(); else break;
					}
				}
				this.__renderFrame(frameIndex);
			}
			this.__renderDirty = true;
			openfl_display_DisplayObject.__worldRenderDirty++;
		}
		this.__lastUpdate = this.__currentFrame;
	}
	,__class__: openfl_display_MovieClip
});
var openfl__$Vector_Vector_$Impl_$ = {};
$hxClasses["openfl._Vector.Vector_Impl_"] = openfl__$Vector_Vector_$Impl_$;
openfl__$Vector_Vector_$Impl_$.__name__ = ["openfl","_Vector","Vector_Impl_"];
openfl__$Vector_Vector_$Impl_$.toIntVector = function(t,length,fixed) {
	return new openfl__$Vector_IntVector(length,fixed);
};
openfl__$Vector_Vector_$Impl_$.toFloatVector = function(t,length,fixed) {
	return new openfl__$Vector_FloatVector(length,fixed);
};
openfl__$Vector_Vector_$Impl_$.toObjectVector = function(t,length,fixed) {
	return new openfl__$Vector_ObjectVector(length,fixed);
};
var openfl_geom_Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl_geom_Matrix;
openfl_geom_Matrix.__name__ = ["openfl","geom","Matrix"];
openfl_geom_Matrix.prototype = {
	a: null
	,b: null
	,c: null
	,d: null
	,tx: null
	,ty: null
	,clone: function() {
		return new openfl_geom_Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,deltaTransformPoint: function(point) {
		return new openfl_geom_Point(point.x * this.a + point.y * this.c,point.x * this.b + point.y * this.d);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,transformPoint: function(pos) {
		return new openfl_geom_Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
	,__toMatrix3: function() {
		openfl_geom_Matrix.__matrix3.setTo(this.a,this.b,this.c,this.d,this.tx,this.ty);
		return openfl_geom_Matrix.__matrix3;
	}
	,__transformInversePoint: function(point) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			point.x = -this.tx;
			point.y = -this.ty;
		} else {
			var px = 1.0 / norm * (this.c * (this.ty - point.y) + this.d * (point.x - this.tx));
			point.y = 1.0 / norm * (this.a * (point.y - this.ty) + this.b * (this.tx - point.x));
			point.x = px;
		}
	}
	,__transformInverseX: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.tx; else return 1.0 / norm * (this.c * (this.ty - py) + this.d * (px - this.tx));
	}
	,__transformInverseY: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.ty; else return 1.0 / norm * (this.a * (py - this.ty) + this.b * (this.tx - px));
	}
	,__transformX: function(px,py) {
		return px * this.a + py * this.c + this.tx;
	}
	,__transformY: function(px,py) {
		return px * this.b + py * this.d + this.ty;
	}
	,__translateTransformed: function(px,py) {
		this.tx = px * this.a + py * this.c + this.tx;
		this.ty = px * this.b + py * this.d + this.ty;
	}
	,__class__: openfl_geom_Matrix
};
var openfl_geom_ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl_geom_ColorTransform;
openfl_geom_ColorTransform.__name__ = ["openfl","geom","ColorTransform"];
openfl_geom_ColorTransform.prototype = {
	alphaMultiplier: null
	,alphaOffset: null
	,blueMultiplier: null
	,blueOffset: null
	,greenMultiplier: null
	,greenOffset: null
	,redMultiplier: null
	,redOffset: null
	,__clone: function() {
		return new openfl_geom_ColorTransform(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset);
	}
	,__combine: function(ct) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;
		this.redOffset += ct.redOffset;
		this.greenOffset += ct.greenOffset;
		this.blueOffset += ct.blueOffset;
		this.alphaOffset += ct.alphaOffset;
	}
	,__equals: function(ct,skipAlphaMultiplier) {
		if(skipAlphaMultiplier == null) skipAlphaMultiplier = false;
		return ct != null && this.redMultiplier == ct.redMultiplier && this.greenMultiplier == ct.greenMultiplier && this.blueMultiplier == ct.blueMultiplier && (skipAlphaMultiplier || this.alphaMultiplier == ct.alphaMultiplier) && this.redOffset == ct.redOffset && this.greenOffset == ct.greenOffset && this.blueOffset == ct.blueOffset && this.alphaOffset == ct.alphaOffset;
	}
	,__class__: openfl_geom_ColorTransform
};
var openfl_Lib = function() { };
$hxClasses["openfl.Lib"] = openfl_Lib;
openfl_Lib.__name__ = ["openfl","Lib"];
openfl_Lib.getTimer = function() {
	return lime_system_System.getTimer();
};
openfl_Lib.notImplemented = function(posInfo) {
	var api = posInfo.className + "." + posInfo.methodName;
	if(!openfl_Lib.__sentWarnings.exists(api)) {
		openfl_Lib.__sentWarnings.set(api,true);
		lime_utils_Log.warn(posInfo.methodName + " is not implemented",posInfo);
	}
};
var openfl__$Vector_IVector = function() { };
$hxClasses["openfl._Vector.IVector"] = openfl__$Vector_IVector;
openfl__$Vector_IVector.__name__ = ["openfl","_Vector","IVector"];
openfl__$Vector_IVector.prototype = {
	__class__: openfl__$Vector_IVector
};
var openfl__$Vector_FloatVector = function(length,fixed,array) {
	if(array == null) array = [];
	this.__array = array;
	if(length != null) this.set_length(length);
	this.fixed = fixed == true;
};
$hxClasses["openfl._Vector.FloatVector"] = openfl__$Vector_FloatVector;
openfl__$Vector_FloatVector.__name__ = ["openfl","_Vector","FloatVector"];
openfl__$Vector_FloatVector.__interfaces__ = [openfl__$Vector_IVector];
openfl__$Vector_FloatVector.prototype = {
	fixed: null
	,__array: null
	,get: function(index) {
		return this.__array[index];
	}
	,push: function(x) {
		if(!this.fixed) return this.__array.push(x); else return this.__array.length;
	}
	,set: function(index,value) {
		if(!this.fixed || index < this.__array.length) return this.__array[index] = value; else return value;
	}
	,get_length: function() {
		return this.__array.length;
	}
	,set_length: function(value) {
		if(!this.fixed) {
			var currentLength = this.__array.length;
			if(value < 0) value = 0;
			if(value > currentLength) {
				var _g = currentLength;
				while(_g < value) {
					var i = _g++;
					this.__array[i] = 0;
				}
			} else while(this.__array.length > value) this.__array.pop();
		}
		return this.__array.length;
	}
	,__class__: openfl__$Vector_FloatVector
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var openfl__$Vector_IntVector = function(length,fixed,array) {
	if(array == null) array = [];
	this.__array = array;
	if(length != null) this.set_length(length);
	this.fixed = fixed == true;
};
$hxClasses["openfl._Vector.IntVector"] = openfl__$Vector_IntVector;
openfl__$Vector_IntVector.__name__ = ["openfl","_Vector","IntVector"];
openfl__$Vector_IntVector.__interfaces__ = [openfl__$Vector_IVector];
openfl__$Vector_IntVector.prototype = {
	fixed: null
	,__array: null
	,get: function(index) {
		return this.__array[index];
	}
	,set: function(index,value) {
		if(!this.fixed || index < this.__array.length) return this.__array[index] = value; else return value;
	}
	,get_length: function() {
		return this.__array.length;
	}
	,set_length: function(value) {
		if(!this.fixed) {
			var currentLength = this.__array.length;
			if(value < 0) value = 0;
			if(value > currentLength) {
				var _g = currentLength;
				while(_g < value) {
					var i = _g++;
					this.__array[i] = 0;
				}
			} else while(this.__array.length > value) this.__array.pop();
		}
		return this.__array.length;
	}
	,__class__: openfl__$Vector_IntVector
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var openfl__$Vector_ObjectVector = function(length,fixed,array) {
	if(array == null) array = [];
	this.__array = array;
	if(length != null) this.set_length(length);
	this.fixed = fixed == true;
};
$hxClasses["openfl._Vector.ObjectVector"] = openfl__$Vector_ObjectVector;
openfl__$Vector_ObjectVector.__name__ = ["openfl","_Vector","ObjectVector"];
openfl__$Vector_ObjectVector.__interfaces__ = [openfl__$Vector_IVector];
openfl__$Vector_ObjectVector.prototype = {
	fixed: null
	,__array: null
	,get: function(index) {
		return this.__array[index];
	}
	,indexOf: function(x,from) {
		if(from == null) from = 0;
		var _g1 = from;
		var _g = this.__array.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__array[i] == x) return i;
		}
		return -1;
	}
	,push: function(x) {
		if(!this.fixed) return this.__array.push(x); else return this.__array.length;
	}
	,sort: function(f) {
		this.__array.sort(f);
	}
	,splice: function(pos,len) {
		return new openfl__$Vector_ObjectVector(null,null,this.__array.splice(pos,len));
	}
	,get_length: function() {
		return this.__array.length;
	}
	,set_length: function(value) {
		if(!this.fixed) {
			var currentLength = this.__array.length;
			if(value < 0) value = 0;
			if(value > currentLength) {
				var _g = currentLength;
				while(_g < value) {
					var i = _g++;
					this.__array.push(null);
				}
			} else while(this.__array.length > value) this.__array.pop();
		}
		return this.__array.length;
	}
	,__class__: openfl__$Vector_ObjectVector
	,__properties__: {set_length:"set_length",get_length:"get_length"}
};
var openfl__$internal_renderer_AbstractBlendModeManager = function() { };
$hxClasses["openfl._internal.renderer.AbstractBlendModeManager"] = openfl__$internal_renderer_AbstractBlendModeManager;
openfl__$internal_renderer_AbstractBlendModeManager.__name__ = ["openfl","_internal","renderer","AbstractBlendModeManager"];
openfl__$internal_renderer_AbstractBlendModeManager.prototype = {
	setBlendMode: function(blendMode) {
	}
	,__class__: openfl__$internal_renderer_AbstractBlendModeManager
};
var openfl__$internal_renderer_AbstractFilterManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl._internal.renderer.AbstractFilterManager"] = openfl__$internal_renderer_AbstractFilterManager;
openfl__$internal_renderer_AbstractFilterManager.__name__ = ["openfl","_internal","renderer","AbstractFilterManager"];
openfl__$internal_renderer_AbstractFilterManager.prototype = {
	renderSession: null
	,pushObject: function(object) {
		return null;
	}
	,popObject: function(object) {
	}
	,__class__: openfl__$internal_renderer_AbstractFilterManager
};
var openfl__$internal_renderer_AbstractMaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl._internal.renderer.AbstractMaskManager"] = openfl__$internal_renderer_AbstractMaskManager;
openfl__$internal_renderer_AbstractMaskManager.__name__ = ["openfl","_internal","renderer","AbstractMaskManager"];
openfl__$internal_renderer_AbstractMaskManager.prototype = {
	renderSession: null
	,pushMask: function(mask) {
	}
	,pushObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
	}
	,pushRect: function(rect,transform) {
	}
	,popMask: function() {
	}
	,popObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
	}
	,popRect: function() {
	}
	,saveState: function() {
	}
	,restoreState: function() {
	}
	,__class__: openfl__$internal_renderer_AbstractMaskManager
};
var openfl__$internal_renderer_AbstractRenderer = function(stage) {
	this.stage = stage;
	this.width = stage.stageWidth;
	this.height = stage.stageHeight;
};
$hxClasses["openfl._internal.renderer.AbstractRenderer"] = openfl__$internal_renderer_AbstractRenderer;
openfl__$internal_renderer_AbstractRenderer.__name__ = ["openfl","_internal","renderer","AbstractRenderer"];
openfl__$internal_renderer_AbstractRenderer.prototype = {
	height: null
	,width: null
	,renderSession: null
	,stage: null
	,clear: function() {
	}
	,render: function() {
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
	}
	,__class__: openfl__$internal_renderer_AbstractRenderer
};
var openfl__$internal_renderer_AbstractShaderManager = function() { };
$hxClasses["openfl._internal.renderer.AbstractShaderManager"] = openfl__$internal_renderer_AbstractShaderManager;
openfl__$internal_renderer_AbstractShaderManager.__name__ = ["openfl","_internal","renderer","AbstractShaderManager"];
openfl__$internal_renderer_AbstractShaderManager.prototype = {
	currentShader: null
	,defaultShader: null
	,setShader: function(shader) {
	}
	,__class__: openfl__$internal_renderer_AbstractShaderManager
};
var openfl__$internal_renderer_DrawCommandBuffer = function() {
	if(openfl__$internal_renderer_DrawCommandBuffer.empty == null) {
		this.types = [];
		this.b = [];
		this.i = [];
		this.f = [];
		this.o = [];
		this.ff = [];
		this.ii = [];
		this.copyOnWrite = true;
	} else this.clear();
};
$hxClasses["openfl._internal.renderer.DrawCommandBuffer"] = openfl__$internal_renderer_DrawCommandBuffer;
openfl__$internal_renderer_DrawCommandBuffer.__name__ = ["openfl","_internal","renderer","DrawCommandBuffer"];
openfl__$internal_renderer_DrawCommandBuffer.prototype = {
	types: null
	,b: null
	,copyOnWrite: null
	,f: null
	,ff: null
	,i: null
	,ii: null
	,o: null
	,append: function(other) {
		if(this.get_length() == 0) {
			this.types = other.types;
			this.b = other.b;
			this.i = other.i;
			this.f = other.f;
			this.o = other.o;
			this.ff = other.ff;
			this.ii = other.ii;
			this.copyOnWrite = other.copyOnWrite = true;
			return other;
		}
		var data = new openfl__$internal_renderer_DrawCommandReader(other);
		var _g = 0;
		var _g1 = other.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type[1]) {
			case 0:
				var c = data.readBeginBitmapFill();
				this.beginBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat(c),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c));
				break;
			case 1:
				var c1 = data.readBeginFill();
				this.beginFill(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c1),openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c1));
				break;
			case 2:
				var c2 = data.readBeginGradientFill();
				this.beginGradientFill(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c2),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c2));
				break;
			case 3:
				var c3 = data.readCubicCurveTo();
				this.cubicCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c3),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c3),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c3),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c3),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c3),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c3));
				break;
			case 4:
				var c4 = data.readCurveTo();
				this.curveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c4),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c4),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c4),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c4));
				break;
			case 5:
				var c5 = data.readDrawCircle();
				this.drawCircle(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c5),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c5),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c5));
				break;
			case 6:
				var c6 = data.readDrawEllipse();
				this.drawEllipse(openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c6),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c6),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c6),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c6));
				break;
			case 7:
				var c7 = data.readDrawRect();
				this.drawRect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c7),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c7),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c7),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c7));
				break;
			case 8:
				var c8 = data.readDrawRoundRect();
				this.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c8),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c8),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c8),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c8),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c8),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c8));
				break;
			case 10:
				var c9 = data.readDrawTriangles();
				this.drawTriangles(openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_vertices(c9),openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_indices(c9),openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_uvtData(c9),openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_culling(c9));
				break;
			case 11:
				var c10 = data.readEndFill();
				this.endFill();
				break;
			case 12:
				var c11 = data.readLineBitmapStyle();
				this.lineBitmapStyle(openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_bitmap(c11),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_matrix(c11),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_repeat(c11),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_smooth(c11));
				break;
			case 13:
				var c12 = data.readLineGradientStyle();
				this.lineGradientStyle(openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_type(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_colors(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_alphas(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_ratios(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_matrix(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_spreadMethod(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_interpolationMethod(c12),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_focalPointRatio(c12));
				break;
			case 14:
				var c13 = data.readLineStyle();
				this.lineStyle(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_alpha(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_pixelHinting(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_scaleMode(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints(c13),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_miterLimit(c13));
				break;
			case 15:
				var c14 = data.readLineTo();
				this.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c14),openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c14));
				break;
			case 16:
				var c15 = data.readMoveTo();
				this.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c15),openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c15));
				break;
			case 17:
				var c16 = data.readOverrideMatrix();
				this.overrideMatrix(openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$.get_matrix(c16));
				break;
			default:
			}
		}
		data.destroy();
		return other;
	}
	,beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL);
		this.o.push(bitmap);
		this.o.push(matrix);
		this.b.push(repeat);
		this.b.push(smooth);
	}
	,beginFill: function(color,alpha) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.BEGIN_FILL);
		this.i.push(color);
		this.f.push(alpha);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL);
		this.o.push(type);
		this.ii.push(colors);
		this.ff.push(alphas);
		this.ii.push(ratios);
		this.o.push(matrix);
		this.o.push(spreadMethod);
		this.o.push(interpolationMethod);
		this.f.push(focalPointRatio);
	}
	,clear: function() {
		this.types = openfl__$internal_renderer_DrawCommandBuffer.empty.types;
		this.b = openfl__$internal_renderer_DrawCommandBuffer.empty.b;
		this.i = openfl__$internal_renderer_DrawCommandBuffer.empty.i;
		this.f = openfl__$internal_renderer_DrawCommandBuffer.empty.f;
		this.o = openfl__$internal_renderer_DrawCommandBuffer.empty.o;
		this.ff = openfl__$internal_renderer_DrawCommandBuffer.empty.ff;
		this.ii = openfl__$internal_renderer_DrawCommandBuffer.empty.ii;
		this.copyOnWrite = true;
	}
	,copy: function() {
		var copy = new openfl__$internal_renderer_DrawCommandBuffer();
		copy.append(this);
		return copy;
	}
	,cubicCurveTo: function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.CUBIC_CURVE_TO);
		this.f.push(controlX1);
		this.f.push(controlY1);
		this.f.push(controlX2);
		this.f.push(controlY2);
		this.f.push(anchorX);
		this.f.push(anchorY);
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.CURVE_TO);
		this.f.push(controlX);
		this.f.push(controlY);
		this.f.push(anchorX);
		this.f.push(anchorY);
	}
	,drawCircle: function(x,y,radius) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.DRAW_CIRCLE);
		this.f.push(x);
		this.f.push(y);
		this.f.push(radius);
	}
	,drawEllipse: function(x,y,width,height) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.DRAW_ELLIPSE);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
	}
	,drawRect: function(x,y,width,height) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.DRAW_RECT);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
	}
	,drawRoundRect: function(x,y,width,height,ellipseWidth,ellipseHeight) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.DRAW_ROUND_RECT);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
		this.f.push(ellipseWidth);
		this.o.push(ellipseHeight);
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.DRAW_TRIANGLES);
		this.o.push(vertices);
		this.o.push(indices);
		this.o.push(uvtData);
		this.o.push(culling);
	}
	,endFill: function() {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.END_FILL);
	}
	,lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.LINE_BITMAP_STYLE);
		this.o.push(bitmap);
		this.o.push(matrix);
		this.b.push(repeat);
		this.b.push(smooth);
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.LINE_GRADIENT_STYLE);
		this.o.push(type);
		this.ii.push(colors);
		this.ff.push(alphas);
		this.ii.push(ratios);
		this.o.push(matrix);
		this.o.push(spreadMethod);
		this.o.push(interpolationMethod);
		this.f.push(focalPointRatio);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.LINE_STYLE);
		this.o.push(thickness);
		this.i.push(color);
		this.f.push(alpha);
		this.b.push(pixelHinting);
		this.o.push(scaleMode);
		this.o.push(caps);
		this.o.push(joints);
		this.f.push(miterLimit);
	}
	,lineTo: function(x,y) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.LINE_TO);
		this.f.push(x);
		this.f.push(y);
	}
	,moveTo: function(x,y) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.MOVE_TO);
		this.f.push(x);
		this.f.push(y);
	}
	,prepareWrite: function() {
		if(this.copyOnWrite) {
			this.types = this.types.slice();
			this.b = this.b.slice();
			this.i = this.i.slice();
			this.f = this.f.slice();
			this.o = this.o.slice();
			this.ff = this.ff.slice();
			this.ii = this.ii.slice();
			this.copyOnWrite = false;
		}
	}
	,overrideMatrix: function(matrix) {
		this.prepareWrite();
		this.types.push(openfl__$internal_renderer_DrawCommandType.OVERRIDE_MATRIX);
		this.o.push(matrix);
	}
	,get_length: function() {
		return this.types.length;
	}
	,__class__: openfl__$internal_renderer_DrawCommandBuffer
	,__properties__: {get_length:"get_length"}
};
var openfl__$internal_renderer_DrawCommandReader = function(buffer) {
	this.buffer = buffer;
	this.bPos = this.iPos = this.fPos = this.oPos = this.ffPos = this.iiPos = this.tsPos = 0;
	this.prev = openfl__$internal_renderer_DrawCommandType.UNKNOWN;
};
$hxClasses["openfl._internal.renderer.DrawCommandReader"] = openfl__$internal_renderer_DrawCommandReader;
openfl__$internal_renderer_DrawCommandReader.__name__ = ["openfl","_internal","renderer","DrawCommandReader"];
openfl__$internal_renderer_DrawCommandReader.prototype = {
	buffer: null
	,bPos: null
	,iiPos: null
	,iPos: null
	,ffPos: null
	,fPos: null
	,oPos: null
	,prev: null
	,tsPos: null
	,advance: function() {
		var _g = this.prev;
		switch(_g[1]) {
		case 0:
			this.oPos += 2;
			this.bPos += 2;
			break;
		case 1:
			this.iPos += 1;
			this.fPos += 1;
			break;
		case 2:
			this.oPos += 4;
			this.iiPos += 2;
			this.ffPos += 1;
			this.fPos += 1;
			break;
		case 3:
			this.fPos += 6;
			break;
		case 4:
			this.fPos += 4;
			break;
		case 5:
			this.fPos += 3;
			break;
		case 6:
			this.fPos += 4;
			break;
		case 7:
			this.fPos += 4;
			break;
		case 8:
			this.fPos += 5;
			this.oPos += 1;
			break;
		case 10:
			this.oPos += 4;
			break;
		case 11:
			break;
		case 12:
			this.oPos += 2;
			this.bPos += 2;
			break;
		case 13:
			this.oPos += 4;
			this.iiPos += 2;
			this.ffPos += 1;
			this.fPos += 1;
			break;
		case 14:
			this.oPos += 4;
			this.iPos += 1;
			this.fPos += 2;
			this.bPos += 1;
			break;
		case 15:
			this.fPos += 2;
			break;
		case 16:
			this.fPos += 2;
			break;
		case 17:
			this.oPos += 1;
			break;
		default:
		}
	}
	,bool: function(index) {
		return this.buffer.b[this.bPos + index];
	}
	,destroy: function() {
		this.buffer = null;
		this.reset();
	}
	,fArr: function(index) {
		return this.buffer.ff[this.ffPos + index];
	}
	,'float': function(index) {
		return this.buffer.f[this.fPos + index];
	}
	,iArr: function(index) {
		return this.buffer.ii[this.iiPos + index];
	}
	,'int': function(index) {
		return this.buffer.i[this.iPos + index];
	}
	,obj: function(index) {
		return this.buffer.o[this.oPos + index];
	}
	,readBeginBitmapFill: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL;
		return openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$._new(this);
	}
	,readBeginFill: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.BEGIN_FILL;
		return openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$._new(this);
	}
	,readBeginGradientFill: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL;
		return openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$._new(this);
	}
	,readCubicCurveTo: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.CUBIC_CURVE_TO;
		return openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$._new(this);
	}
	,readCurveTo: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.CURVE_TO;
		return openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$._new(this);
	}
	,readDrawCircle: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.DRAW_CIRCLE;
		return openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$._new(this);
	}
	,readDrawEllipse: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.DRAW_ELLIPSE;
		return openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$._new(this);
	}
	,readDrawRect: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.DRAW_RECT;
		return openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$._new(this);
	}
	,readDrawRoundRect: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.DRAW_ROUND_RECT;
		return openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$._new(this);
	}
	,readDrawTriangles: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.DRAW_TRIANGLES;
		return openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$._new(this);
	}
	,readEndFill: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.END_FILL;
		return openfl__$internal_renderer__$DrawCommandReader_EndFillView_$Impl_$._new(this);
	}
	,readLineBitmapStyle: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.LINE_BITMAP_STYLE;
		return openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$._new(this);
	}
	,readLineGradientStyle: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.LINE_GRADIENT_STYLE;
		return openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$._new(this);
	}
	,readLineStyle: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.LINE_STYLE;
		return openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$._new(this);
	}
	,readLineTo: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.LINE_TO;
		return openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$._new(this);
	}
	,readMoveTo: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.MOVE_TO;
		return openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$._new(this);
	}
	,readOverrideMatrix: function() {
		this.advance();
		this.prev = openfl__$internal_renderer_DrawCommandType.OVERRIDE_MATRIX;
		return openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$._new(this);
	}
	,reset: function() {
		this.bPos = this.iPos = this.fPos = this.oPos = this.ffPos = this.iiPos = this.tsPos = 0;
	}
	,skip: function(type) {
		this.advance();
		this.prev = type;
	}
	,__class__: openfl__$internal_renderer_DrawCommandReader
};
var openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.BeginBitmapFillView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","BeginBitmapFillView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.__properties__ = {get_smooth:"get_smooth",get_repeat:"get_repeat",get_matrix:"get_matrix",get_bitmap:"get_bitmap"}
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat = function(this1) {
	return this1.bool(0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth = function(this1) {
	return this1.bool(1);
};
var openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.BeginFillView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","BeginFillView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.__properties__ = {get_alpha:"get_alpha",get_color:"get_color"}
openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color = function(this1) {
	return this1["int"](0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha = function(this1) {
	return this1["float"](0);
};
var openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.BeginGradientFillView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","BeginGradientFillView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.__properties__ = {get_focalPointRatio:"get_focalPointRatio",get_interpolationMethod:"get_interpolationMethod",get_spreadMethod:"get_spreadMethod",get_matrix:"get_matrix",get_ratios:"get_ratios",get_alphas:"get_alphas",get_colors:"get_colors",get_type:"get_type"}
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors = function(this1) {
	return this1.iArr(0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas = function(this1) {
	return this1.fArr(0);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios = function(this1) {
	return this1.iArr(1);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod = function(this1) {
	return this1.obj(2);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod = function(this1) {
	return this1.obj(3);
};
openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio = function(this1) {
	return this1["float"](0);
};
var openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.CubicCurveToView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","CubicCurveToView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.__properties__ = {get_anchorY:"get_anchorY",get_anchorX:"get_anchorX",get_controlY2:"get_controlY2",get_controlX2:"get_controlX2",get_controlY1:"get_controlY1",get_controlX1:"get_controlX1"}
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1 = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1 = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2 = function(this1) {
	return this1["float"](2);
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2 = function(this1) {
	return this1["float"](3);
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX = function(this1) {
	return this1["float"](4);
};
openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY = function(this1) {
	return this1["float"](5);
};
var openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.CurveToView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","CurveToView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.__properties__ = {get_anchorY:"get_anchorY",get_anchorX:"get_anchorX",get_controlY:"get_controlY",get_controlX:"get_controlX"}
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX = function(this1) {
	return this1["float"](2);
};
openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY = function(this1) {
	return this1["float"](3);
};
var openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.DrawCircleView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","DrawCircleView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.__properties__ = {get_radius:"get_radius",get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius = function(this1) {
	return this1["float"](2);
};
var openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.DrawEllipseView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","DrawEllipseView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.__properties__ = {get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width = function(this1) {
	return this1["float"](2);
};
openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height = function(this1) {
	return this1["float"](3);
};
var openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.DrawRectView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","DrawRectView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.__properties__ = {get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width = function(this1) {
	return this1["float"](2);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height = function(this1) {
	return this1["float"](3);
};
var openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.DrawRoundRectView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","DrawRoundRectView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.__properties__ = {get_ellipseHeight:"get_ellipseHeight",get_ellipseWidth:"get_ellipseWidth",get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width = function(this1) {
	return this1["float"](2);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height = function(this1) {
	return this1["float"](3);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth = function(this1) {
	return this1["float"](4);
};
openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight = function(this1) {
	return this1.obj(0);
};
var openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.DrawTrianglesView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","DrawTrianglesView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.__properties__ = {get_culling:"get_culling",get_uvtData:"get_uvtData",get_indices:"get_indices",get_vertices:"get_vertices"}
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_vertices = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_indices = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_uvtData = function(this1) {
	return this1.obj(2);
};
openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_culling = function(this1) {
	return this1.obj(3);
};
var openfl__$internal_renderer__$DrawCommandReader_EndFillView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.EndFillView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_EndFillView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_EndFillView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","EndFillView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_EndFillView_$Impl_$._new = function(d) {
	return d;
};
var openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.LineBitmapStyleView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","LineBitmapStyleView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.__properties__ = {get_smooth:"get_smooth",get_repeat:"get_repeat",get_matrix:"get_matrix",get_bitmap:"get_bitmap"}
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_bitmap = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_matrix = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_repeat = function(this1) {
	return this1.bool(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_smooth = function(this1) {
	return this1.bool(1);
};
var openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.LineGradientStyleView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","LineGradientStyleView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.__properties__ = {get_focalPointRatio:"get_focalPointRatio",get_interpolationMethod:"get_interpolationMethod",get_spreadMethod:"get_spreadMethod",get_matrix:"get_matrix",get_ratios:"get_ratios",get_alphas:"get_alphas",get_colors:"get_colors",get_type:"get_type"}
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_type = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_colors = function(this1) {
	return this1.iArr(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_alphas = function(this1) {
	return this1.fArr(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_ratios = function(this1) {
	return this1.iArr(1);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_matrix = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_spreadMethod = function(this1) {
	return this1.obj(2);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_interpolationMethod = function(this1) {
	return this1.obj(3);
};
openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_focalPointRatio = function(this1) {
	return this1["float"](0);
};
var openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.LineStyleView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","LineStyleView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.__properties__ = {get_miterLimit:"get_miterLimit",get_joints:"get_joints",get_caps:"get_caps",get_scaleMode:"get_scaleMode",get_pixelHinting:"get_pixelHinting",get_alpha:"get_alpha",get_color:"get_color",get_thickness:"get_thickness"}
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness = function(this1) {
	return this1.obj(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color = function(this1) {
	return this1["int"](0);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_alpha = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_pixelHinting = function(this1) {
	return this1.bool(0);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_scaleMode = function(this1) {
	return this1.obj(1);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps = function(this1) {
	return this1.obj(2);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints = function(this1) {
	return this1.obj(3);
};
openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_miterLimit = function(this1) {
	return this1["float"](1);
};
var openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.LineToView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","LineToView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.__properties__ = {get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
var openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.MoveToView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","MoveToView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.__properties__ = {get_y:"get_y",get_x:"get_x"}
openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x = function(this1) {
	return this1["float"](0);
};
openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y = function(this1) {
	return this1["float"](1);
};
var openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$ = {};
$hxClasses["openfl._internal.renderer._DrawCommandReader.OverrideMatrixView_Impl_"] = openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$;
openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$.__name__ = ["openfl","_internal","renderer","_DrawCommandReader","OverrideMatrixView_Impl_"];
openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$.__properties__ = {get_matrix:"get_matrix"}
openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$._new = function(d) {
	return d;
};
openfl__$internal_renderer__$DrawCommandReader_OverrideMatrixView_$Impl_$.get_matrix = function(this1) {
	return this1.obj(0);
};
var openfl__$internal_renderer_DrawCommandType = $hxClasses["openfl._internal.renderer.DrawCommandType"] = { __ename__ : ["openfl","_internal","renderer","DrawCommandType"], __constructs__ : ["BEGIN_BITMAP_FILL","BEGIN_FILL","BEGIN_GRADIENT_FILL","CUBIC_CURVE_TO","CURVE_TO","DRAW_CIRCLE","DRAW_ELLIPSE","DRAW_RECT","DRAW_ROUND_RECT","DRAW_TILES","DRAW_TRIANGLES","END_FILL","LINE_BITMAP_STYLE","LINE_GRADIENT_STYLE","LINE_STYLE","LINE_TO","MOVE_TO","OVERRIDE_MATRIX","UNKNOWN"] };
openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL = ["BEGIN_BITMAP_FILL",0];
openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL.toString = $estr;
openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.BEGIN_FILL = ["BEGIN_FILL",1];
openfl__$internal_renderer_DrawCommandType.BEGIN_FILL.toString = $estr;
openfl__$internal_renderer_DrawCommandType.BEGIN_FILL.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL = ["BEGIN_GRADIENT_FILL",2];
openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL.toString = $estr;
openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.CUBIC_CURVE_TO = ["CUBIC_CURVE_TO",3];
openfl__$internal_renderer_DrawCommandType.CUBIC_CURVE_TO.toString = $estr;
openfl__$internal_renderer_DrawCommandType.CUBIC_CURVE_TO.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.CURVE_TO = ["CURVE_TO",4];
openfl__$internal_renderer_DrawCommandType.CURVE_TO.toString = $estr;
openfl__$internal_renderer_DrawCommandType.CURVE_TO.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_CIRCLE = ["DRAW_CIRCLE",5];
openfl__$internal_renderer_DrawCommandType.DRAW_CIRCLE.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_CIRCLE.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_ELLIPSE = ["DRAW_ELLIPSE",6];
openfl__$internal_renderer_DrawCommandType.DRAW_ELLIPSE.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_ELLIPSE.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_RECT = ["DRAW_RECT",7];
openfl__$internal_renderer_DrawCommandType.DRAW_RECT.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_RECT.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_ROUND_RECT = ["DRAW_ROUND_RECT",8];
openfl__$internal_renderer_DrawCommandType.DRAW_ROUND_RECT.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_ROUND_RECT.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_TILES = ["DRAW_TILES",9];
openfl__$internal_renderer_DrawCommandType.DRAW_TILES.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_TILES.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.DRAW_TRIANGLES = ["DRAW_TRIANGLES",10];
openfl__$internal_renderer_DrawCommandType.DRAW_TRIANGLES.toString = $estr;
openfl__$internal_renderer_DrawCommandType.DRAW_TRIANGLES.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.END_FILL = ["END_FILL",11];
openfl__$internal_renderer_DrawCommandType.END_FILL.toString = $estr;
openfl__$internal_renderer_DrawCommandType.END_FILL.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.LINE_BITMAP_STYLE = ["LINE_BITMAP_STYLE",12];
openfl__$internal_renderer_DrawCommandType.LINE_BITMAP_STYLE.toString = $estr;
openfl__$internal_renderer_DrawCommandType.LINE_BITMAP_STYLE.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.LINE_GRADIENT_STYLE = ["LINE_GRADIENT_STYLE",13];
openfl__$internal_renderer_DrawCommandType.LINE_GRADIENT_STYLE.toString = $estr;
openfl__$internal_renderer_DrawCommandType.LINE_GRADIENT_STYLE.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.LINE_STYLE = ["LINE_STYLE",14];
openfl__$internal_renderer_DrawCommandType.LINE_STYLE.toString = $estr;
openfl__$internal_renderer_DrawCommandType.LINE_STYLE.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.LINE_TO = ["LINE_TO",15];
openfl__$internal_renderer_DrawCommandType.LINE_TO.toString = $estr;
openfl__$internal_renderer_DrawCommandType.LINE_TO.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.MOVE_TO = ["MOVE_TO",16];
openfl__$internal_renderer_DrawCommandType.MOVE_TO.toString = $estr;
openfl__$internal_renderer_DrawCommandType.MOVE_TO.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.OVERRIDE_MATRIX = ["OVERRIDE_MATRIX",17];
openfl__$internal_renderer_DrawCommandType.OVERRIDE_MATRIX.toString = $estr;
openfl__$internal_renderer_DrawCommandType.OVERRIDE_MATRIX.__enum__ = openfl__$internal_renderer_DrawCommandType;
openfl__$internal_renderer_DrawCommandType.UNKNOWN = ["UNKNOWN",18];
openfl__$internal_renderer_DrawCommandType.UNKNOWN.toString = $estr;
openfl__$internal_renderer_DrawCommandType.UNKNOWN.__enum__ = openfl__$internal_renderer_DrawCommandType;
var openfl__$internal_renderer_RenderSession = function() {
	this.allowSmoothing = true;
};
$hxClasses["openfl._internal.renderer.RenderSession"] = openfl__$internal_renderer_RenderSession;
openfl__$internal_renderer_RenderSession.__name__ = ["openfl","_internal","renderer","RenderSession"];
openfl__$internal_renderer_RenderSession.prototype = {
	allowSmoothing: null
	,cairo: null
	,context: null
	,element: null
	,gl: null
	,renderer: null
	,roundPixels: null
	,transformProperty: null
	,transformOriginProperty: null
	,upscaled: null
	,vendorPrefix: null
	,z: null
	,blendModeManager: null
	,filterManager: null
	,maskManager: null
	,shaderManager: null
	,__class__: openfl__$internal_renderer_RenderSession
};
var openfl__$internal_renderer_cairo_CairoBitmap = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoBitmap"] = openfl__$internal_renderer_cairo_CairoBitmap;
openfl__$internal_renderer_cairo_CairoBitmap.__name__ = ["openfl","_internal","renderer","cairo","CairoBitmap"];
openfl__$internal_renderer_cairo_CairoBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var cairo = renderSession.cairo;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		renderSession.maskManager.pushObject(bitmap);
		var transform = bitmap.__renderTransform;
		if(renderSession.roundPixels) {
			var matrix = transform.__toMatrix3();
			matrix.tx = Math.round(matrix.tx);
			matrix.ty = Math.round(matrix.ty);
			cairo.set_matrix(matrix);
		} else cairo.set_matrix(transform.__toMatrix3());
		var surface = bitmap.bitmapData.getSurface();
		if(surface != null) {
			var pattern = lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.createForSurface(surface);
			lime_graphics_cairo__$CairoPattern_CairoPattern_$Impl_$.set_filter(pattern,renderSession.allowSmoothing && bitmap.smoothing?1:3);
			cairo.set_source(pattern);
			if(bitmap.__worldAlpha == 1) cairo.paint(); else cairo.paintWithAlpha(bitmap.__worldAlpha);
		}
		renderSession.maskManager.popObject(bitmap);
	}
};
var openfl__$internal_renderer_cairo_CairoDisplayObject = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoDisplayObject"] = openfl__$internal_renderer_cairo_CairoDisplayObject;
openfl__$internal_renderer_cairo_CairoDisplayObject.__name__ = ["openfl","_internal","renderer","cairo","CairoDisplayObject"];
openfl__$internal_renderer_cairo_CairoDisplayObject.render = function(displayObject,renderSession) {
};
var openfl__$internal_renderer_cairo_CairoGraphics = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoGraphics"] = openfl__$internal_renderer_cairo_CairoGraphics;
openfl__$internal_renderer_cairo_CairoGraphics.__name__ = ["openfl","_internal","renderer","cairo","CairoGraphics"];
openfl__$internal_renderer_cairo_CairoGraphics.drawRoundRect = function(x,y,width,height,ellipseWidth,ellipseHeight) {
	if(ellipseHeight == null) ellipseHeight = ellipseWidth;
	ellipseWidth *= 0.5;
	ellipseHeight *= 0.5;
	if(ellipseWidth > width / 2) ellipseWidth = width / 2;
	if(ellipseHeight > height / 2) ellipseHeight = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -ellipseWidth + ellipseWidth * openfl__$internal_renderer_cairo_CairoGraphics.SIN45;
	var cx2 = -ellipseWidth + ellipseWidth * openfl__$internal_renderer_cairo_CairoGraphics.TAN22;
	var cy1 = -ellipseHeight + ellipseHeight * openfl__$internal_renderer_cairo_CairoGraphics.SIN45;
	var cy2 = -ellipseHeight + ellipseHeight * openfl__$internal_renderer_cairo_CairoGraphics.TAN22;
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.moveTo(xe,ye - ellipseHeight);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(xe + cx2,ye,xe - ellipseWidth,ye);
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.lineTo(x + ellipseWidth,ye);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(x,ye + cy2,x,ye - ellipseHeight);
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.lineTo(x,y + ellipseHeight);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(x - cx2,y,x + ellipseWidth,y);
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.lineTo(xe - ellipseWidth,y);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(xe,y - cy2,xe,y + ellipseHeight);
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.lineTo(xe,ye - ellipseHeight);
};
openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo = function(cx,cy,x,y) {
	var current = null;
	if(!openfl__$internal_renderer_cairo_CairoGraphics.cairo.get_hasCurrentPoint()) {
		openfl__$internal_renderer_cairo_CairoGraphics.cairo.moveTo(cx,cy);
		current = new lime_math_Vector2(cx,cy);
	} else current = openfl__$internal_renderer_cairo_CairoGraphics.cairo.get_currentPoint();
	var cx1 = current.x + 0.66666666666666663 * (cx - current.x);
	var cy1 = current.y + 0.66666666666666663 * (cy - current.y);
	var cx2 = x + 0.66666666666666663 * (cx - x);
	var cy2 = y + 0.66666666666666663 * (cy - y);
	openfl__$internal_renderer_cairo_CairoGraphics.cairo.curveTo(cx1,cy1,cx2,cy2,x,y);
};
openfl__$internal_renderer_cairo_CairoGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.get_length() != 0) {
		var cairo = renderSession.cairo;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var data = new openfl__$internal_renderer_DrawCommandReader(graphics.__commands);
		var _g = 0;
		var _g1 = graphics.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type[1]) {
			case 3:
				var c = data.readCubicCurveTo();
				cairo.curveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c);
				positionY = openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c);
				break;
			case 4:
				var c1 = data.readCurveTo();
				openfl__$internal_renderer_cairo_CairoGraphics.quadraticCurveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1);
				positionY = openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1);
				break;
			case 5:
				var c2 = data.readDrawCircle();
				cairo.arc(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c2) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c2) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c2),0,Math.PI * 2);
				break;
			case 6:
				var c3 = data.readDrawEllipse();
				var x = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c3);
				var y = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c3);
				var width = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c3);
				var height = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c3);
				x -= offsetX;
				y -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x + width;
				var ye = y + height;
				var xm = x + width / 2;
				var ym = y + height / 2;
				cairo.moveTo(x,ym);
				cairo.curveTo(x,ym - oy,xm - ox,y,xm,y);
				cairo.curveTo(xm + ox,y,xe,ym - oy,xe,ym);
				cairo.curveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				cairo.curveTo(xm - ox,ye,x,ym + oy,x,ym);
				break;
			case 7:
				var c4 = data.readDrawRect();
				cairo.rectangle(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c4) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c4) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c4),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c4));
				break;
			case 8:
				var c5 = data.readDrawRoundRect();
				openfl__$internal_renderer_cairo_CairoGraphics.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c5) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c5) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c5));
				break;
			case 15:
				var c6 = data.readLineTo();
				cairo.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c6) - offsetX,openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c6) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c6);
				positionY = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c6);
				break;
			case 16:
				var c7 = data.readMoveTo();
				cairo.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c7) - offsetX,openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c7) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c7);
				positionY = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c7);
				break;
			default:
				data.skip(type);
			}
		}
		data.destroy();
	}
};
var openfl__$internal_renderer_cairo_CairoMaskManager = function(renderSession) {
	openfl__$internal_renderer_AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.cairo.CairoMaskManager"] = openfl__$internal_renderer_cairo_CairoMaskManager;
openfl__$internal_renderer_cairo_CairoMaskManager.__name__ = ["openfl","_internal","renderer","cairo","CairoMaskManager"];
openfl__$internal_renderer_cairo_CairoMaskManager.__super__ = openfl__$internal_renderer_AbstractMaskManager;
openfl__$internal_renderer_cairo_CairoMaskManager.prototype = $extend(openfl__$internal_renderer_AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		var transform = mask.__getRenderTransform();
		cairo.set_matrix(transform.__toMatrix3());
		cairo.newPath();
		mask.__renderCairoMask(this.renderSession);
		cairo.clip();
	}
	,pushObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(handleScrollRect && object.__scrollRect != null) this.pushRect(object.__scrollRect,object.__renderTransform);
		if(object.__mask != null) this.pushMask(object.__mask);
	}
	,pushRect: function(rect,transform) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		cairo.set_matrix(new lime_math_Matrix3(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty));
		cairo.newPath();
		cairo.rectangle(rect.x,rect.y,rect.width,rect.height);
		cairo.clip();
	}
	,popMask: function() {
		this.renderSession.cairo.restore();
	}
	,popObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(object.__mask != null) this.popMask();
		if(handleScrollRect && object.__scrollRect != null) this.popRect();
	}
	,popRect: function() {
		this.renderSession.cairo.restore();
	}
	,__class__: openfl__$internal_renderer_cairo_CairoMaskManager
});
var openfl__$internal_renderer_cairo_CairoRenderer = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoRenderer"] = openfl__$internal_renderer_cairo_CairoRenderer;
openfl__$internal_renderer_cairo_CairoRenderer.__name__ = ["openfl","_internal","renderer","cairo","CairoRenderer"];
openfl__$internal_renderer_cairo_CairoRenderer.__super__ = openfl__$internal_renderer_AbstractRenderer;
openfl__$internal_renderer_cairo_CairoRenderer.prototype = $extend(openfl__$internal_renderer_AbstractRenderer.prototype,{
	cairo: null
	,clear: function() {
		var _g = 0;
		var _g1 = this.stage.stage3Ds;
		while(_g < _g1.get_length()) {
			var stage3D = _g1.get(_g);
			++_g;
			stage3D.__renderCairo(this.stage,this.renderSession);
		}
	}
	,render: function() {
		this.renderSession.allowSmoothing = this.stage.quality != 2;
		this.cairo.identityMatrix();
		if(this.stage.__clearBeforeRender) {
			this.cairo.setSourceRGB(this.stage.__colorSplit[0],this.stage.__colorSplit[1],this.stage.__colorSplit[2]);
			this.cairo.paint();
		}
		this.stage.__renderCairo(this.renderSession);
	}
	,__class__: openfl__$internal_renderer_cairo_CairoRenderer
});
var openfl__$internal_renderer_cairo_CairoTextField = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoTextField"] = openfl__$internal_renderer_cairo_CairoTextField;
openfl__$internal_renderer_cairo_CairoTextField.__name__ = ["openfl","_internal","renderer","cairo","CairoTextField"];
openfl__$internal_renderer_cairo_CairoTextField.render = function(textField,renderSession,transform) {
};
var openfl__$internal_renderer_canvas_CanvasBitmap = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasBitmap"] = openfl__$internal_renderer_canvas_CanvasBitmap;
openfl__$internal_renderer_canvas_CanvasBitmap.__name__ = ["openfl","_internal","renderer","canvas","CanvasBitmap"];
openfl__$internal_renderer_canvas_CanvasBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var context = renderSession.context;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		renderSession.maskManager.pushObject(bitmap,false);
		lime_graphics_utils_ImageCanvasUtil.convertToCanvas(bitmap.bitmapData.image);
		context.globalAlpha = bitmap.__worldAlpha;
		var transform = bitmap.__renderTransform;
		var scrollRect = bitmap.__scrollRect;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(!renderSession.allowSmoothing || !bitmap.smoothing) {
			context.mozImageSmoothingEnabled = false;
			context.msImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
		}
		if(scrollRect == null) context.drawImage(bitmap.bitmapData.image.get_src(),0,0); else context.drawImage(bitmap.bitmapData.image.get_src(),scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height,scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
		if(!renderSession.allowSmoothing || !bitmap.smoothing) {
			context.mozImageSmoothingEnabled = true;
			context.msImageSmoothingEnabled = true;
			context.imageSmoothingEnabled = true;
		}
		renderSession.maskManager.popObject(bitmap,false);
	}
};
var openfl__$internal_renderer_canvas_CanvasDisplayObject = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasDisplayObject"] = openfl__$internal_renderer_canvas_CanvasDisplayObject;
openfl__$internal_renderer_canvas_CanvasDisplayObject.__name__ = ["openfl","_internal","renderer","canvas","CanvasDisplayObject"];
openfl__$internal_renderer_canvas_CanvasDisplayObject.render = function(displayObject,renderSession) {
	if(displayObject.opaqueBackground == null && displayObject.__graphics == null) return;
	if(!displayObject.__renderable || displayObject.__worldAlpha <= 0) return;
	if(displayObject.opaqueBackground != null && displayObject.get_width() > 0 && displayObject.get_height() > 0) {
		renderSession.maskManager.pushObject(displayObject);
		var context = renderSession.context;
		var transform = displayObject.__renderTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		var color = displayObject.opaqueBackground;
		context.fillStyle = "rgb(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + ")";
		context.fillRect(0,0,displayObject.get_width(),displayObject.get_height());
		renderSession.maskManager.popObject(displayObject);
	}
	if(displayObject.__graphics != null) openfl__$internal_renderer_canvas_CanvasShape.render(displayObject,renderSession);
};
var openfl__$internal_renderer_canvas_CanvasGraphics = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasGraphics"] = openfl__$internal_renderer_canvas_CanvasGraphics;
openfl__$internal_renderer_canvas_CanvasGraphics.__name__ = ["openfl","_internal","renderer","canvas","CanvasGraphics"];
openfl__$internal_renderer_canvas_CanvasGraphics.closePath = function(strokeBefore) {
	if(strokeBefore == null) strokeBefore = false;
	if(openfl__$internal_renderer_canvas_CanvasGraphics.context.strokeStyle == null) return;
	if(!strokeBefore) openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
	openfl__$internal_renderer_canvas_CanvasGraphics.context.stroke();
	if(strokeBefore) openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
	openfl__$internal_renderer_canvas_CanvasGraphics.context.beginPath();
};
openfl__$internal_renderer_canvas_CanvasGraphics.createBitmapFill = function(bitmap,bitmapRepeat,smooth) {
	lime_graphics_utils_ImageCanvasUtil.convertToCanvas(bitmap.image);
	openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(smooth);
	return openfl__$internal_renderer_canvas_CanvasGraphics.context.createPattern(bitmap.image.get_src(),bitmapRepeat?"repeat":"no-repeat");
};
openfl__$internal_renderer_canvas_CanvasGraphics.createGradientPattern = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var gradientFill = null;
	switch(type) {
	case 1:
		if(matrix == null) matrix = new openfl_geom_Matrix();
		var point = matrix.transformPoint(new openfl_geom_Point(1638.4,0));
		gradientFill = openfl__$internal_renderer_canvas_CanvasGraphics.context.createRadialGradient(matrix.tx,matrix.ty,0,matrix.tx,matrix.ty,Math.abs((point.x - matrix.tx) / 2));
		break;
	case 0:
		var matrix1;
		if(matrix != null) matrix1 = matrix; else matrix1 = new openfl_geom_Matrix();
		var point1 = matrix1.transformPoint(new openfl_geom_Point(-819.2,0));
		var point2 = matrix1.transformPoint(new openfl_geom_Point(819.2,0));
		gradientFill = openfl__$internal_renderer_canvas_CanvasGraphics.context.createLinearGradient(point1.x,point1.y,point2.x,point2.y);
		break;
	}
	var _g1 = 0;
	var _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		var rgb = colors[i];
		var alpha = alphas[i];
		var r = (rgb & 16711680) >>> 16;
		var g = (rgb & 65280) >>> 8;
		var b = rgb & 255;
		var ratio = ratios[i] / 255;
		if(ratio < 0) ratio = 0;
		if(ratio > 1) ratio = 1;
		gradientFill.addColorStop(ratio,"rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")");
	}
	return gradientFill;
};
openfl__$internal_renderer_canvas_CanvasGraphics.createTempPatternCanvas = function(bitmap,repeat,width,height) {
	var canvas = window.document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	context.fillStyle = context.createPattern(bitmap.image.get_src(),repeat?"repeat":"no-repeat");
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,height);
	context.lineTo(width,height);
	context.lineTo(width,0);
	context.lineTo(0,0);
	context.closePath();
	if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) context.fill();
	return canvas;
};
openfl__$internal_renderer_canvas_CanvasGraphics.drawRoundRect = function(x,y,width,height,ellipseWidth,ellipseHeight) {
	if(ellipseHeight == null) ellipseHeight = ellipseWidth;
	ellipseWidth *= 0.5;
	ellipseHeight *= 0.5;
	if(ellipseWidth > width / 2) ellipseWidth = width / 2;
	if(ellipseHeight > height / 2) ellipseHeight = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -ellipseWidth + ellipseWidth * openfl__$internal_renderer_canvas_CanvasGraphics.SIN45;
	var cx2 = -ellipseWidth + ellipseWidth * openfl__$internal_renderer_canvas_CanvasGraphics.TAN22;
	var cy1 = -ellipseHeight + ellipseHeight * openfl__$internal_renderer_canvas_CanvasGraphics.SIN45;
	var cy2 = -ellipseHeight + ellipseHeight * openfl__$internal_renderer_canvas_CanvasGraphics.TAN22;
	openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(xe,ye - ellipseHeight);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(xe + cx2,ye,xe - ellipseWidth,ye);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x + ellipseWidth,ye);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(x,ye + cy2,x,ye - ellipseHeight);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x,y + ellipseHeight);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(x - cx2,y,x + ellipseWidth,y);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(xe - ellipseWidth,y);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(xe,y - cy2,xe,y + ellipseHeight);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(xe,ye - ellipseHeight);
};
openfl__$internal_renderer_canvas_CanvasGraphics.endFill = function() {
	openfl__$internal_renderer_canvas_CanvasGraphics.context.beginPath();
	openfl__$internal_renderer_canvas_CanvasGraphics.playCommands(openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands,false);
	openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.clear();
};
openfl__$internal_renderer_canvas_CanvasGraphics.endStroke = function() {
	openfl__$internal_renderer_canvas_CanvasGraphics.context.beginPath();
	openfl__$internal_renderer_canvas_CanvasGraphics.playCommands(openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands,true);
	openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
	openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.clear();
};
openfl__$internal_renderer_canvas_CanvasGraphics.hitTest = function(graphics,x,y) {
	openfl__$internal_renderer_canvas_CanvasGraphics.bounds = graphics.__bounds;
	openfl__$internal_renderer_canvas_CanvasGraphics.graphics = graphics;
	if(graphics.__commands.get_length() == 0 || openfl__$internal_renderer_canvas_CanvasGraphics.bounds == null || openfl__$internal_renderer_canvas_CanvasGraphics.bounds.width <= 0 || openfl__$internal_renderer_canvas_CanvasGraphics.bounds.height <= 0) return false; else {
		openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting = true;
		var transform = graphics.__renderTransform;
		var px = x * transform.a + y * transform.c + transform.tx;
		var py = x * transform.b + y * transform.d + transform.ty;
		x = px;
		y = py;
		x -= openfl__$internal_renderer_canvas_CanvasGraphics.bounds.x * transform.a + openfl__$internal_renderer_canvas_CanvasGraphics.bounds.y * transform.c + transform.tx;
		y -= openfl__$internal_renderer_canvas_CanvasGraphics.bounds.x * transform.b + openfl__$internal_renderer_canvas_CanvasGraphics.bounds.y * transform.d + transform.ty;
		if(graphics.__canvas == null) {
			graphics.__canvas = window.document.createElement("canvas");
			graphics.__context = graphics.__canvas.getContext("2d");
		}
		openfl__$internal_renderer_canvas_CanvasGraphics.context = graphics.__context;
		openfl__$internal_renderer_canvas_CanvasGraphics.context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.clear();
		openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.clear();
		openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = false;
		openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = false;
		openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
		openfl__$internal_renderer_canvas_CanvasGraphics.bitmapRepeat = false;
		var data = new openfl__$internal_renderer_DrawCommandReader(graphics.__commands);
		var _g = 0;
		var _g1 = graphics.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type[1]) {
			case 3:
				var c = data.readCubicCurveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.cubicCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.cubicCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c));
				break;
			case 4:
				var c1 = data.readCurveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.curveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.curveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1));
				break;
			case 15:
				var c2 = data.readLineTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c2),openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c2));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c2),openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c2));
				break;
			case 16:
				var c3 = data.readMoveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c3),openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c3));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c3),openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c3));
				break;
			case 13:
				var c4 = data.readLineGradientStyle();
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineGradientStyle(openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_type(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_colors(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_alphas(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_ratios(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_matrix(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_spreadMethod(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_interpolationMethod(c4),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_focalPointRatio(c4));
				break;
			case 12:
				var c5 = data.readLineBitmapStyle();
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineBitmapStyle(openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_bitmap(c5),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_matrix(c5),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_repeat(c5),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_smooth(c5));
				break;
			case 14:
				var c6 = data.readLineStyle();
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineStyle(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c6),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c6),1,openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_pixelHinting(c6),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_scaleMode(c6),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c6),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints(c6),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_miterLimit(c6));
				break;
			case 11:
				data.readEndFill();
				openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
				openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
				if(openfl__$internal_renderer_canvas_CanvasGraphics.hasFill && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInPath(x,y)) {
					data.destroy();
					return true;
				}
				if(openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInStroke(x,y)) {
					data.destroy();
					return true;
				}
				openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = false;
				openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
				break;
			case 0:case 1:case 2:
				openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
				openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
				if(openfl__$internal_renderer_canvas_CanvasGraphics.hasFill && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInPath(x,y)) {
					data.destroy();
					return true;
				}
				if(openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInStroke(x,y)) {
					data.destroy();
					return true;
				}
				if(type == openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL) {
					var c7 = data.readBeginBitmapFill();
					openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c7));
					openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c7));
				} else if(type == openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL) {
					var c8 = data.readBeginGradientFill();
					openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginGradientFill(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c8));
					openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginGradientFill(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c8));
				} else {
					var c9 = data.readBeginFill();
					openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginFill(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c9),1);
					openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginFill(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c9),1);
				}
				break;
			case 5:
				var c10 = data.readDrawCircle();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawCircle(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c10));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawCircle(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c10));
				break;
			case 6:
				var c11 = data.readDrawEllipse();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawEllipse(openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c11));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawEllipse(openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c11));
				break;
			case 7:
				var c12 = data.readDrawRect();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawRect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c12));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawRect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c12));
				break;
			case 8:
				var c13 = data.readDrawRoundRect();
				openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c13));
				openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c13));
				break;
			default:
				data.skip(type);
			}
		}
		if(openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.get_length() > 0) openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
		if(openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.get_length() > 0) openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
		data.destroy();
		if(openfl__$internal_renderer_canvas_CanvasGraphics.hasFill && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInPath(x,y)) return true;
		if(openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke && openfl__$internal_renderer_canvas_CanvasGraphics.context.isPointInStroke(x,y)) return true;
	}
	return false;
};
openfl__$internal_renderer_canvas_CanvasGraphics.normalizeUVT = function(uvt,skipT) {
	if(skipT == null) skipT = false;
	var max = -Infinity;
	var tmp = -Infinity;
	var len = uvt.get_length();
	var _g1 = 1;
	var _g = len + 1;
	while(_g1 < _g) {
		var t = _g1++;
		if(skipT && t % 3 == 0) continue;
		tmp = uvt.get(t - 1);
		if(max < tmp) max = tmp;
	}
	if(!skipT) return { max : max, uvt : uvt};
	var result = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	var _g11 = 1;
	var _g2 = len + 1;
	while(_g11 < _g2) {
		var t1 = _g11++;
		if(skipT && t1 % 3 == 0) continue;
		var x = uvt.get(t1 - 1);
		result.push(x);
	}
	return { max : max, uvt : result};
};
openfl__$internal_renderer_canvas_CanvasGraphics.playCommands = function(commands,stroke) {
	if(stroke == null) stroke = false;
	openfl__$internal_renderer_canvas_CanvasGraphics.bounds = openfl__$internal_renderer_canvas_CanvasGraphics.graphics.__bounds;
	var offsetX = openfl__$internal_renderer_canvas_CanvasGraphics.bounds.x;
	var offsetY = openfl__$internal_renderer_canvas_CanvasGraphics.bounds.y;
	var positionX = 0.0;
	var positionY = 0.0;
	var closeGap = false;
	var startX = 0.0;
	var startY = 0.0;
	openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(true);
	var data = new openfl__$internal_renderer_DrawCommandReader(commands);
	var _g = 0;
	var _g1 = commands.types;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		switch(type[1]) {
		case 3:
			var c = data.readCubicCurveTo();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c) - offsetY);
			break;
		case 4:
			var c1 = data.readCurveTo();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1) - offsetY);
			break;
		case 5:
			var c2 = data.readDrawCircle();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c2) - offsetX + openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c2),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c2) - offsetY);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.arc(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c2) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c2) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c2),0,Math.PI * 2,true);
			break;
		case 6:
			var c3 = data.readDrawEllipse();
			var x = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c3);
			var y = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c3);
			var width = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c3);
			var height = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c3);
			x -= offsetX;
			y -= offsetY;
			var kappa = .5522848;
			var ox = width / 2 * kappa;
			var oy = height / 2 * kappa;
			var xe = x + width;
			var ye = y + height;
			var xm = x + width / 2;
			var ym = y + height / 2;
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(x,ym);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(x,ym - oy,xm - ox,y,xm,y);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xm + ox,y,xe,ym - oy,xe,ym);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x,ym + oy,x,ym);
			break;
		case 8:
			var c4 = data.readDrawRoundRect();
			openfl__$internal_renderer_canvas_CanvasGraphics.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c4) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c4) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c4),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c4),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c4),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c4));
			break;
		case 15:
			var c5 = data.readLineTo();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c5) - offsetX,openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c5) - offsetY);
			positionX = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c5);
			positionY = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c5);
			break;
		case 16:
			var c6 = data.readMoveTo();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c6) - offsetX,openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c6) - offsetY);
			positionX = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c6);
			positionY = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c6);
			closeGap = true;
			startX = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c6);
			startY = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c6);
			break;
		case 14:
			var c7 = data.readLineStyle();
			if(stroke && openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke) openfl__$internal_renderer_canvas_CanvasGraphics.closePath(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c7) == null);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			if(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c7) == null) openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = false; else {
				if(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c7) > 0) openfl__$internal_renderer_canvas_CanvasGraphics.context.lineWidth = openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c7); else openfl__$internal_renderer_canvas_CanvasGraphics.context.lineWidth = 1;
				if(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints(c7) == null) openfl__$internal_renderer_canvas_CanvasGraphics.context.lineJoin = "round"; else openfl__$internal_renderer_canvas_CanvasGraphics.context.lineJoin = openfl_display__$JointStyle_JointStyle_$Impl_$.toString(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints(c7)).toLowerCase();
				if(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c7) == null) openfl__$internal_renderer_canvas_CanvasGraphics.context.lineCap = "round"; else {
					var _g2 = openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c7);
					switch(_g2) {
					case 0:
						openfl__$internal_renderer_canvas_CanvasGraphics.context.lineCap = "butt";
						break;
					default:
						openfl__$internal_renderer_canvas_CanvasGraphics.context.lineCap = openfl_display__$CapsStyle_CapsStyle_$Impl_$.toString(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c7)).toLowerCase();
					}
				}
				openfl__$internal_renderer_canvas_CanvasGraphics.context.miterLimit = openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_miterLimit(c7);
				if(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_alpha(c7) == 1) openfl__$internal_renderer_canvas_CanvasGraphics.context.strokeStyle = "#" + StringTools.hex(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c7) & 16777215,6); else {
					var r = (openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c7) & 16711680) >>> 16;
					var g = (openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c7) & 65280) >>> 8;
					var b = openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c7) & 255;
					openfl__$internal_renderer_canvas_CanvasGraphics.context.strokeStyle = "rgba(" + r + ", " + g + ", " + b + ", " + openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_alpha(c7) + ")";
				}
				openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(true);
				openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = true;
			}
			break;
		case 13:
			var c8 = data.readLineGradientStyle();
			if(stroke && openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke) openfl__$internal_renderer_canvas_CanvasGraphics.closePath();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.strokeStyle = openfl__$internal_renderer_canvas_CanvasGraphics.createGradientPattern(openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_type(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_colors(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_alphas(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_ratios(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_matrix(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_spreadMethod(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_interpolationMethod(c8),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_focalPointRatio(c8));
			openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(true);
			openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = true;
			break;
		case 12:
			var c9 = data.readLineBitmapStyle();
			if(stroke && openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke) openfl__$internal_renderer_canvas_CanvasGraphics.closePath();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.strokeStyle = openfl__$internal_renderer_canvas_CanvasGraphics.createBitmapFill(openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_bitmap(c9),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_repeat(c9),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_smooth(c9));
			openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = true;
			break;
		case 0:
			var c10 = data.readBeginBitmapFill();
			openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c10);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.fillStyle = openfl__$internal_renderer_canvas_CanvasGraphics.createBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c10),true,openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c10));
			openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = true;
			if(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c10) != null) {
				openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix = openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c10);
				openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix = openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c10).clone();
				openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.invert();
			} else {
				openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix = null;
				openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix = null;
			}
			break;
		case 1:
			var c11 = data.readBeginFill();
			if(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c11) < 0.005) openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = false; else {
				if(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c11) == 1) openfl__$internal_renderer_canvas_CanvasGraphics.context.fillStyle = "#" + StringTools.hex(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c11) & 16777215,6); else {
					var r1 = (openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c11) & 16711680) >>> 16;
					var g1 = (openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c11) & 65280) >>> 8;
					var b1 = openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c11) & 255;
					openfl__$internal_renderer_canvas_CanvasGraphics.context.fillStyle = "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c11) + ")";
				}
				openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
				openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(true);
				openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = true;
			}
			break;
		case 2:
			var c12 = data.readBeginGradientFill();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.fillStyle = openfl__$internal_renderer_canvas_CanvasGraphics.createGradientPattern(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c12),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c12));
			openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
			openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing(true);
			openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = true;
			break;
		case 7:
			var c13 = data.readDrawRect();
			var optimizationUsed = false;
			if(openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill != null && !openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) {
				var st = 0;
				var sr = 0;
				var sb = 0;
				var sl = 0;
				var canOptimizeMatrix = true;
				if(openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix != null) {
					if(openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.b != 0 || openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.c != 0) canOptimizeMatrix = false; else {
						var stl = openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.transformPoint(new openfl_geom_Point(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13)));
						var sbr = openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.transformPoint(new openfl_geom_Point(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13) + openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13) + openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c13)));
						st = stl.y;
						sl = stl.x;
						sb = sbr.y;
						sr = sbr.x;
					}
				} else {
					st = openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13);
					sl = openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13);
					sb = openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13) + openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c13);
					sr = openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13) + openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c13);
				}
				if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.width && sb <= openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.height) {
					optimizationUsed = true;
					if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) openfl__$internal_renderer_canvas_CanvasGraphics.context.drawImage(openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.image.get_src(),sl,st,sr - sl,sb - st,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c13));
				}
			}
			if(!optimizationUsed) openfl__$internal_renderer_canvas_CanvasGraphics.context.rect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c13) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c13) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c13));
			break;
		default:
			data.skip(type);
		}
	}
	data.destroy();
	if(stroke && openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke) {
		if(openfl__$internal_renderer_canvas_CanvasGraphics.hasFill && closeGap) openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(startX - offsetX,startY - offsetY); else if(closeGap && positionX == startX && positionY == startY) openfl__$internal_renderer_canvas_CanvasGraphics.closePath(true);
		if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) openfl__$internal_renderer_canvas_CanvasGraphics.context.stroke();
	}
	if(!stroke) {
		if(openfl__$internal_renderer_canvas_CanvasGraphics.hasFill || openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill != null) {
			openfl__$internal_renderer_canvas_CanvasGraphics.context.translate(-openfl__$internal_renderer_canvas_CanvasGraphics.bounds.x,-openfl__$internal_renderer_canvas_CanvasGraphics.bounds.y);
			if(openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix != null) {
				openfl__$internal_renderer_canvas_CanvasGraphics.context.transform(openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.a,openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.b,openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.c,openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.d,openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.tx,openfl__$internal_renderer_canvas_CanvasGraphics.pendingMatrix.ty);
				if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) openfl__$internal_renderer_canvas_CanvasGraphics.context.fill();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.transform(openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.a,openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.b,openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.c,openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.d,openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.tx,openfl__$internal_renderer_canvas_CanvasGraphics.inversePendingMatrix.ty);
			} else if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) openfl__$internal_renderer_canvas_CanvasGraphics.context.fill();
			openfl__$internal_renderer_canvas_CanvasGraphics.context.translate(openfl__$internal_renderer_canvas_CanvasGraphics.bounds.x,openfl__$internal_renderer_canvas_CanvasGraphics.bounds.y);
			openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
		}
	}
};
openfl__$internal_renderer_canvas_CanvasGraphics.render = function(graphics,renderSession,parentTransform) {
	graphics.__update();
	if(graphics.__dirty) {
		openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting = false;
		openfl__$internal_renderer_canvas_CanvasGraphics.graphics = graphics;
		openfl__$internal_renderer_canvas_CanvasGraphics.allowSmoothing = renderSession.allowSmoothing;
		openfl__$internal_renderer_canvas_CanvasGraphics.bounds = graphics.__bounds;
		var width = graphics.__width;
		var height = graphics.__height;
		if(!graphics.__visible || graphics.__commands.get_length() == 0 || openfl__$internal_renderer_canvas_CanvasGraphics.bounds == null || width < 1 || height < 1) {
			graphics.__canvas = null;
			graphics.__context = null;
			graphics.__bitmap = null;
		} else {
			if(graphics.__canvas == null) {
				graphics.__canvas = window.document.createElement("canvas");
				graphics.__context = graphics.__canvas.getContext("2d");
			}
			openfl__$internal_renderer_canvas_CanvasGraphics.context = graphics.__context;
			graphics.__canvas.width = width;
			graphics.__canvas.height = height;
			var transform = graphics.__renderTransform;
			openfl__$internal_renderer_canvas_CanvasGraphics.context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.clear();
			openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.clear();
			openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = false;
			openfl__$internal_renderer_canvas_CanvasGraphics.hasStroke = false;
			openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
			openfl__$internal_renderer_canvas_CanvasGraphics.bitmapRepeat = false;
			var data = new openfl__$internal_renderer_DrawCommandReader(graphics.__commands);
			var _g = 0;
			var _g1 = graphics.__commands.types;
			try {
				while(_g < _g1.length) {
					var type = _g1[_g];
					++_g;
					switch(type[1]) {
					case 3:
						var c = data.readCubicCurveTo();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.cubicCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.cubicCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c),openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c));
						break;
					case 4:
						var c1 = data.readCurveTo();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.curveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.curveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1),openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1));
						break;
					case 15:
						var c2 = data.readLineTo();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c2),openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c2));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c2),openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c2));
						break;
					case 16:
						var c3 = data.readMoveTo();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c3),openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c3));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c3),openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c3));
						break;
					case 11:
						data.readEndFill();
						openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
						openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
						openfl__$internal_renderer_canvas_CanvasGraphics.hasFill = false;
						openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill = null;
						break;
					case 14:
						var c4 = data.readLineStyle();
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineStyle(openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_thickness(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_color(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_alpha(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_pixelHinting(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_scaleMode(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_caps(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_joints(c4),openfl__$internal_renderer__$DrawCommandReader_LineStyleView_$Impl_$.get_miterLimit(c4));
						break;
					case 13:
						var c5 = data.readLineGradientStyle();
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineGradientStyle(openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_type(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_colors(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_alphas(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_ratios(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_matrix(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_spreadMethod(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_interpolationMethod(c5),openfl__$internal_renderer__$DrawCommandReader_LineGradientStyleView_$Impl_$.get_focalPointRatio(c5));
						break;
					case 12:
						var c6 = data.readLineBitmapStyle();
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.lineBitmapStyle(openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_bitmap(c6),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_matrix(c6),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_repeat(c6),openfl__$internal_renderer__$DrawCommandReader_LineBitmapStyleView_$Impl_$.get_smooth(c6));
						break;
					case 0:case 1:case 2:
						openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
						openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
						if(type == openfl__$internal_renderer_DrawCommandType.BEGIN_BITMAP_FILL) {
							var c7 = data.readBeginBitmapFill();
							openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c7));
							openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginBitmapFill(openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_bitmap(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_matrix(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_repeat(c7),openfl__$internal_renderer__$DrawCommandReader_BeginBitmapFillView_$Impl_$.get_smooth(c7));
						} else if(type == openfl__$internal_renderer_DrawCommandType.BEGIN_GRADIENT_FILL) {
							var c8 = data.readBeginGradientFill();
							openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginGradientFill(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c8));
							openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginGradientFill(openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_type(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_colors(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_alphas(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_ratios(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_matrix(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_spreadMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_interpolationMethod(c8),openfl__$internal_renderer__$DrawCommandReader_BeginGradientFillView_$Impl_$.get_focalPointRatio(c8));
						} else {
							var c9 = data.readBeginFill();
							openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.beginFill(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c9),openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c9));
							openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.beginFill(openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_color(c9),openfl__$internal_renderer__$DrawCommandReader_BeginFillView_$Impl_$.get_alpha(c9));
						}
						break;
					case 5:
						var c10 = data.readDrawCircle();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawCircle(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c10));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawCircle(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c10),openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c10));
						break;
					case 6:
						var c11 = data.readDrawEllipse();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawEllipse(openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c11));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawEllipse(openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c11),openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c11));
						break;
					case 7:
						var c12 = data.readDrawRect();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawRect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c12));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawRect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c12),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c12));
						break;
					case 8:
						var c13 = data.readDrawRoundRect();
						openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c13));
						openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c13),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c13));
						break;
					case 10:
						openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
						openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
						var c14 = data.readDrawTriangles();
						var v = openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_vertices(c14);
						var ind = openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_indices(c14);
						var uvt = openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_uvtData(c14);
						var pattern = null;
						var colorFill = openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill == null;
						if(colorFill && uvt != null) throw "__break__";
						if(!colorFill) {
							if(uvt == null) {
								uvt = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
								var _g3 = 0;
								var _g2 = Std["int"](v.get_length() / 2);
								while(_g3 < _g2) {
									var i1 = _g3++;
									var x = v.get(i1 * 2) / openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.width;
									uvt.push(x);
									var x4 = v.get(i1 * 2 + 1) / openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.height;
									uvt.push(x4);
								}
							}
							var skipT = uvt.get_length() != v.get_length();
							var normalizedUVT = openfl__$internal_renderer_canvas_CanvasGraphics.normalizeUVT(uvt,skipT);
							var maxUVT = normalizedUVT.max;
							uvt = normalizedUVT.uvt;
							if(maxUVT > 1) pattern = openfl__$internal_renderer_canvas_CanvasGraphics.createTempPatternCanvas(openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill,openfl__$internal_renderer_canvas_CanvasGraphics.bitmapRepeat,openfl__$internal_renderer_canvas_CanvasGraphics.bounds.width | 0,openfl__$internal_renderer_canvas_CanvasGraphics.bounds.height | 0); else pattern = openfl__$internal_renderer_canvas_CanvasGraphics.createTempPatternCanvas(openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill,openfl__$internal_renderer_canvas_CanvasGraphics.bitmapRepeat,openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.width,openfl__$internal_renderer_canvas_CanvasGraphics.bitmapFill.height);
						}
						var i = 0;
						var l = ind.get_length();
						var a_;
						var b_;
						var c_;
						var iax;
						var iay;
						var ibx;
						var iby;
						var icx;
						var icy;
						var x1;
						var y1;
						var x2;
						var y2;
						var x3;
						var y3;
						var uvx1;
						var uvy1;
						var uvx2;
						var uvy2;
						var uvx3;
						var uvy3;
						var denom;
						var t1;
						var t2;
						var t3;
						var t4;
						var dx;
						var dy;
						while(i < l) {
							a_ = i;
							b_ = i + 1;
							c_ = i + 2;
							iax = ind.get(a_) * 2;
							iay = ind.get(a_) * 2 + 1;
							ibx = ind.get(b_) * 2;
							iby = ind.get(b_) * 2 + 1;
							icx = ind.get(c_) * 2;
							icy = ind.get(c_) * 2 + 1;
							x1 = v.get(iax);
							y1 = v.get(iay);
							x2 = v.get(ibx);
							y2 = v.get(iby);
							x3 = v.get(icx);
							y3 = v.get(icy);
							var _g21 = openfl__$internal_renderer__$DrawCommandReader_DrawTrianglesView_$Impl_$.get_culling(c14);
							switch(_g21) {
							case 2:
								if(!((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0)) {
									i += 3;
									continue;
								}
								break;
							case 0:
								if((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0) {
									i += 3;
									continue;
								}
								break;
							default:
							}
							if(colorFill) {
								openfl__$internal_renderer_canvas_CanvasGraphics.context.beginPath();
								openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(x1,y1);
								openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x2,y2);
								openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x3,y3);
								openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
								if(!openfl__$internal_renderer_canvas_CanvasGraphics.hitTesting) openfl__$internal_renderer_canvas_CanvasGraphics.context.fill();
								i += 3;
								continue;
							}
							openfl__$internal_renderer_canvas_CanvasGraphics.context.save();
							openfl__$internal_renderer_canvas_CanvasGraphics.context.beginPath();
							openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(x1,y1);
							openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x2,y2);
							openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(x3,y3);
							openfl__$internal_renderer_canvas_CanvasGraphics.context.closePath();
							openfl__$internal_renderer_canvas_CanvasGraphics.context.clip();
							uvx1 = uvt.get(iax) * pattern.width;
							uvx2 = uvt.get(ibx) * pattern.width;
							uvx3 = uvt.get(icx) * pattern.width;
							uvy1 = uvt.get(iay) * pattern.height;
							uvy2 = uvt.get(iby) * pattern.height;
							uvy3 = uvt.get(icy) * pattern.height;
							denom = uvx1 * (uvy3 - uvy2) - uvx2 * uvy3 + uvx3 * uvy2 + (uvx2 - uvx3) * uvy1;
							if(denom == 0) {
								i += 3;
								continue;
							}
							t1 = -(uvy1 * (x3 - x2) - uvy2 * x3 + uvy3 * x2 + (uvy2 - uvy3) * x1) / denom;
							t2 = (uvy2 * y3 + uvy1 * (y2 - y3) - uvy3 * y2 + (uvy3 - uvy2) * y1) / denom;
							t3 = (uvx1 * (x3 - x2) - uvx2 * x3 + uvx3 * x2 + (uvx2 - uvx3) * x1) / denom;
							t4 = -(uvx2 * y3 + uvx1 * (y2 - y3) - uvx3 * y2 + (uvx3 - uvx2) * y1) / denom;
							dx = (uvx1 * (uvy3 * x2 - uvy2 * x3) + uvy1 * (uvx2 * x3 - uvx3 * x2) + (uvx3 * uvy2 - uvx2 * uvy3) * x1) / denom;
							dy = (uvx1 * (uvy3 * y2 - uvy2 * y3) + uvy1 * (uvx2 * y3 - uvx3 * y2) + (uvx3 * uvy2 - uvx2 * uvy3) * y1) / denom;
							openfl__$internal_renderer_canvas_CanvasGraphics.context.transform(t1,t2,t3,t4,dx,dy);
							openfl__$internal_renderer_canvas_CanvasGraphics.context.drawImage(pattern,0,0);
							openfl__$internal_renderer_canvas_CanvasGraphics.context.restore();
							i += 3;
						}
						break;
					default:
						data.skip(type);
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			if(openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands.get_length() > 0) openfl__$internal_renderer_canvas_CanvasGraphics.endFill();
			if(openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands.get_length() > 0) openfl__$internal_renderer_canvas_CanvasGraphics.endStroke();
			data.destroy();
			graphics.__bitmap = openfl_display_BitmapData.fromCanvas(graphics.__canvas);
		}
		graphics.set___dirty(false);
	}
};
openfl__$internal_renderer_canvas_CanvasGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.get_length() != 0) {
		openfl__$internal_renderer_canvas_CanvasGraphics.context = renderSession.context;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var data = new openfl__$internal_renderer_DrawCommandReader(graphics.__commands);
		var _g = 0;
		var _g1 = graphics.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type[1]) {
			case 3:
				var c = data.readCubicCurveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX1(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY1(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlX2(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_controlY2(c) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorX(c);
				positionY = openfl__$internal_renderer__$DrawCommandReader_CubicCurveToView_$Impl_$.get_anchorY(c);
				break;
			case 4:
				var c1 = data.readCurveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.quadraticCurveTo(openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_controlY(c1) - offsetY,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1) - offsetX,openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorX(c1);
				positionY = openfl__$internal_renderer__$DrawCommandReader_CurveToView_$Impl_$.get_anchorY(c1);
				break;
			case 5:
				var c2 = data.readDrawCircle();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.arc(openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_x(c2) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_y(c2) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawCircleView_$Impl_$.get_radius(c2),0,Math.PI * 2,true);
				break;
			case 6:
				var c3 = data.readDrawEllipse();
				var x = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_x(c3);
				var y = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_y(c3);
				var width = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_width(c3);
				var height = openfl__$internal_renderer__$DrawCommandReader_DrawEllipseView_$Impl_$.get_height(c3);
				x -= offsetX;
				y -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x + width;
				var ye = y + height;
				var xm = x + width / 2;
				var ym = y + height / 2;
				openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(x,ym);
				openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(x,ym - oy,xm - ox,y,xm,y);
				openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xm + ox,y,xe,ym - oy,xe,ym);
				openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				openfl__$internal_renderer_canvas_CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x,ym + oy,x,ym);
				break;
			case 7:
				var c4 = data.readDrawRect();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.rect(openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_x(c4) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_y(c4) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_width(c4),openfl__$internal_renderer__$DrawCommandReader_DrawRectView_$Impl_$.get_height(c4));
				break;
			case 8:
				var c5 = data.readDrawRoundRect();
				openfl__$internal_renderer_canvas_CanvasGraphics.drawRoundRect(openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_x(c5) - offsetX,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_y(c5) - offsetY,openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_width(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_height(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseWidth(c5),openfl__$internal_renderer__$DrawCommandReader_DrawRoundRectView_$Impl_$.get_ellipseHeight(c5));
				break;
			case 15:
				var c6 = data.readLineTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.lineTo(openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c6) - offsetX,openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c6) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_x(c6);
				positionY = openfl__$internal_renderer__$DrawCommandReader_LineToView_$Impl_$.get_y(c6);
				break;
			case 16:
				var c7 = data.readMoveTo();
				openfl__$internal_renderer_canvas_CanvasGraphics.context.moveTo(openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c7) - offsetX,openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c7) - offsetY);
				positionX = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_x(c7);
				positionY = openfl__$internal_renderer__$DrawCommandReader_MoveToView_$Impl_$.get_y(c7);
				break;
			default:
				data.skip(type);
			}
		}
		data.destroy();
	}
};
openfl__$internal_renderer_canvas_CanvasGraphics.setSmoothing = function(smooth) {
	if(!openfl__$internal_renderer_canvas_CanvasGraphics.allowSmoothing) smooth = false;
	if(openfl__$internal_renderer_canvas_CanvasGraphics.context.imageSmoothingEnabled != smooth) {
		openfl__$internal_renderer_canvas_CanvasGraphics.context.mozImageSmoothingEnabled = smooth;
		openfl__$internal_renderer_canvas_CanvasGraphics.context.msImageSmoothingEnabled = smooth;
		openfl__$internal_renderer_canvas_CanvasGraphics.context.imageSmoothingEnabled = smooth;
	}
};
var openfl__$internal_renderer_canvas_CanvasMaskManager = function(renderSession) {
	openfl__$internal_renderer_AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasMaskManager"] = openfl__$internal_renderer_canvas_CanvasMaskManager;
openfl__$internal_renderer_canvas_CanvasMaskManager.__name__ = ["openfl","_internal","renderer","canvas","CanvasMaskManager"];
openfl__$internal_renderer_canvas_CanvasMaskManager.__super__ = openfl__$internal_renderer_AbstractMaskManager;
openfl__$internal_renderer_canvas_CanvasMaskManager.prototype = $extend(openfl__$internal_renderer_AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__getRenderTransform();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderCanvasMask(this.renderSession);
		context.clip();
	}
	,pushObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(handleScrollRect && object.__scrollRect != null) this.pushRect(object.__scrollRect,object.__renderTransform);
		if(object.__mask != null) this.pushMask(object.__mask);
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,popObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(object.__mask != null) this.popMask();
		if(handleScrollRect && object.__scrollRect != null) this.popRect();
	}
	,popRect: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl__$internal_renderer_canvas_CanvasMaskManager
});
var openfl__$internal_renderer_canvas_CanvasRenderer = function(stage,context) {
	openfl__$internal_renderer_AbstractRenderer.call(this,stage);
	this.context = context;
	this.renderSession = new openfl__$internal_renderer_RenderSession();
	this.renderSession.context = context;
	this.renderSession.roundPixels = true;
	this.renderSession.renderer = this;
	this.renderSession.maskManager = new openfl__$internal_renderer_canvas_CanvasMaskManager(this.renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasRenderer"] = openfl__$internal_renderer_canvas_CanvasRenderer;
openfl__$internal_renderer_canvas_CanvasRenderer.__name__ = ["openfl","_internal","renderer","canvas","CanvasRenderer"];
openfl__$internal_renderer_canvas_CanvasRenderer.__super__ = openfl__$internal_renderer_AbstractRenderer;
openfl__$internal_renderer_canvas_CanvasRenderer.prototype = $extend(openfl__$internal_renderer_AbstractRenderer.prototype,{
	context: null
	,clear: function() {
		var _g = 0;
		var _g1 = this.stage.stage3Ds;
		while(_g < _g1.get_length()) {
			var stage3D = _g1.get(_g);
			++_g;
			stage3D.__renderCanvas(this.stage,this.renderSession);
		}
	}
	,render: function() {
		this.renderSession.allowSmoothing = this.stage.quality != 2;
		this.context.setTransform(1,0,0,1,0,0);
		this.context.globalAlpha = 1;
		if(!this.stage.__transparent && this.stage.__clearBeforeRender) {
			this.context.fillStyle = this.stage.__colorString;
			this.context.fillRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
		} else if(this.stage.__transparent && this.stage.__clearBeforeRender) this.context.clearRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
		this.stage.__renderCanvas(this.renderSession);
	}
	,__class__: openfl__$internal_renderer_canvas_CanvasRenderer
});
var openfl__$internal_renderer_canvas_CanvasShape = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasShape"] = openfl__$internal_renderer_canvas_CanvasShape;
openfl__$internal_renderer_canvas_CanvasShape.__name__ = ["openfl","_internal","renderer","canvas","CanvasShape"];
openfl__$internal_renderer_canvas_CanvasShape.render = function(shape,renderSession) {
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	var graphics = shape.__graphics;
	if(graphics != null) {
		openfl__$internal_renderer_canvas_CanvasGraphics.render(graphics,renderSession,shape.__renderTransform);
		var bounds = graphics.__bounds;
		var width = graphics.__width;
		var height = graphics.__height;
		if(graphics.__canvas != null) {
			var context = renderSession.context;
			var scrollRect = shape.__scrollRect;
			if(width > 0 && height > 0 && (scrollRect == null || scrollRect.width > 0 && scrollRect.height > 0)) {
				renderSession.maskManager.pushObject(shape);
				context.globalAlpha = shape.__worldAlpha;
				var transform = graphics.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				context.drawImage(graphics.__canvas,0,0);
				renderSession.maskManager.popObject(shape);
			}
		}
	}
};
var openfl__$internal_renderer_canvas_CanvasTextField = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasTextField"] = openfl__$internal_renderer_canvas_CanvasTextField;
openfl__$internal_renderer_canvas_CanvasTextField.__name__ = ["openfl","_internal","renderer","canvas","CanvasTextField"];
openfl__$internal_renderer_canvas_CanvasTextField.render = function(textField,renderSession,transform) {
	var textEngine = textField.__textEngine;
	var bounds = textEngine.bounds;
	var graphics = textField.__graphics;
	if(textField.__dirty) {
		textField.__updateLayout();
		if(graphics.__bounds == null) graphics.__bounds = new openfl_geom_Rectangle();
		graphics.__bounds.copyFrom(bounds);
	}
	graphics.__update();
	if(textField.__dirty || graphics.__dirty) {
		var width = graphics.__width;
		var height = graphics.__height;
		if((textEngine.text == null || textEngine.text == "") && !textEngine.background && !textEngine.border && !textEngine.__hasFocus && (textEngine.type != 1 || !textEngine.selectable) || (textEngine.width <= 0 || textEngine.height <= 0) && textEngine.autoSize != 2) {
			textField.__graphics.__canvas = null;
			textField.__graphics.__context = null;
			textField.__graphics.__bitmap = null;
			textField.__graphics.set___dirty(false);
			textField.__dirty = false;
		} else {
			if(textField.__graphics.__canvas == null) {
				textField.__graphics.__canvas = window.document.createElement("canvas");
				textField.__graphics.__context = textField.__graphics.__canvas.getContext("2d");
			}
			openfl__$internal_renderer_canvas_CanvasTextField.context = graphics.__context;
			graphics.__canvas.width = width;
			graphics.__canvas.height = height;
			if(openfl__$internal_renderer_canvas_CanvasTextField.clearRect == null) openfl__$internal_renderer_canvas_CanvasTextField.clearRect = (typeof navigator !== 'undefined' && typeof navigator['isCocoonJS'] !== 'undefined');
			if(openfl__$internal_renderer_canvas_CanvasTextField.clearRect) openfl__$internal_renderer_canvas_CanvasTextField.context.clearRect(0,0,graphics.__canvas.width,graphics.__canvas.height);
			var transform1 = graphics.__renderTransform;
			if(renderSession.roundPixels) openfl__$internal_renderer_canvas_CanvasTextField.context.setTransform(transform1.a,transform1.b,transform1.c,transform1.d,transform1.tx | 0,transform1.ty | 0); else openfl__$internal_renderer_canvas_CanvasTextField.context.setTransform(transform1.a,transform1.b,transform1.c,transform1.d,transform1.tx,transform1.ty);
			if(textEngine.text != null && textEngine.text != "" || textEngine.__hasFocus) {
				var text = textEngine.text;
				if(!renderSession.allowSmoothing || textEngine.antiAliasType == 0 && textEngine.sharpness == 400) {
					graphics.__context.mozImageSmoothingEnabled = false;
					graphics.__context.msImageSmoothingEnabled = false;
					graphics.__context.imageSmoothingEnabled = false;
				} else {
					graphics.__context.mozImageSmoothingEnabled = true;
					graphics.__context.msImageSmoothingEnabled = true;
					graphics.__context.imageSmoothingEnabled = true;
				}
				if(textEngine.border || textEngine.background) {
					openfl__$internal_renderer_canvas_CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1);
					if(textEngine.background) {
						openfl__$internal_renderer_canvas_CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor & 16777215,6);
						openfl__$internal_renderer_canvas_CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl__$internal_renderer_canvas_CanvasTextField.context.lineWidth = 1;
						openfl__$internal_renderer_canvas_CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor & 16777215,6);
						openfl__$internal_renderer_canvas_CanvasTextField.context.stroke();
					}
				}
				openfl__$internal_renderer_canvas_CanvasTextField.context.textBaseline = "top";
				openfl__$internal_renderer_canvas_CanvasTextField.context.textAlign = "start";
				var scrollX = -textField.get_scrollH();
				var scrollY = 0.0;
				var _g1 = 0;
				var _g = textField.get_scrollV() - 1;
				while(_g1 < _g) {
					var i = _g1++;
					scrollY -= textEngine.lineHeights.get(i);
				}
				var advance;
				var offsetY = 0.0;
				var applyHack = new EReg("(iPad|iPhone|iPod|Firefox)","g").match(window.navigator.userAgent);
				var _g2 = 0;
				var _g11 = textEngine.layoutGroups;
				while(_g2 < _g11.get_length()) {
					var group = _g11.get(_g2);
					++_g2;
					if(group.lineIndex < textField.get_scrollV() - 1) continue;
					if(group.lineIndex > textField.get_scrollV() + textEngine.bottomScrollV - 2) break;
					openfl__$internal_renderer_canvas_CanvasTextField.context.font = openfl__$internal_text_TextEngine.getFont(group.format);
					openfl__$internal_renderer_canvas_CanvasTextField.context.fillStyle = "#" + StringTools.hex(group.format.color & 16777215,6);
					if(applyHack) offsetY = group.format.size * 0.185;
					openfl__$internal_renderer_canvas_CanvasTextField.context.fillText(text.substring(group.startIndex,group.endIndex),group.offsetX + scrollX,group.offsetY + offsetY + scrollY);
					if(textField.__caretIndex > -1 && textEngine.selectable) {
						if(textField.__selectionIndex == textField.__caretIndex) {
							if(textField.__showCursor && group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex) {
								advance = 0.0;
								var _g3 = 0;
								var _g21 = textField.__caretIndex - group.startIndex;
								while(_g3 < _g21) {
									var i1 = _g3++;
									if(group.advances.length <= i1) break;
									advance += group.advances[i1];
								}
								openfl__$internal_renderer_canvas_CanvasTextField.context.fillRect(group.offsetX + advance,group.offsetY,1,group.height);
							}
						} else if(group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex || group.startIndex <= textField.__selectionIndex && group.endIndex >= textField.__selectionIndex) {
							var selectionStart = Std["int"](Math.min(textField.__selectionIndex,textField.__caretIndex));
							var selectionEnd = Std["int"](Math.max(textField.__selectionIndex,textField.__caretIndex));
							if(group.startIndex > selectionStart) selectionStart = group.startIndex;
							if(group.endIndex < selectionEnd) selectionEnd = group.endIndex;
							var start;
							var end;
							start = textField.getCharBoundaries(selectionStart);
							if(selectionEnd >= textEngine.text.length) {
								end = textField.getCharBoundaries(textEngine.text.length - 1);
								end.x += end.width + 2;
							} else end = textField.getCharBoundaries(selectionEnd);
							if(start != null && end != null) {
								openfl__$internal_renderer_canvas_CanvasTextField.context.fillStyle = "#000000";
								openfl__$internal_renderer_canvas_CanvasTextField.context.fillRect(start.x,start.y,end.x - start.x,group.height);
								openfl__$internal_renderer_canvas_CanvasTextField.context.fillStyle = "#FFFFFF";
								openfl__$internal_renderer_canvas_CanvasTextField.context.fillText(text.substring(selectionStart,selectionEnd),scrollX + start.x,group.offsetY + offsetY + scrollY);
							}
						}
					}
				}
			} else {
				if(textEngine.border || textEngine.background) {
					if(textEngine.border) openfl__$internal_renderer_canvas_CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1); else openfl__$internal_renderer_canvas_CanvasTextField.context.rect(0,0,bounds.width,bounds.height);
					if(textEngine.background) {
						openfl__$internal_renderer_canvas_CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor & 16777215,6);
						openfl__$internal_renderer_canvas_CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl__$internal_renderer_canvas_CanvasTextField.context.lineWidth = 1;
						openfl__$internal_renderer_canvas_CanvasTextField.context.lineCap = "square";
						openfl__$internal_renderer_canvas_CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor & 16777215,6);
						openfl__$internal_renderer_canvas_CanvasTextField.context.stroke();
					}
				}
				if(textField.__caretIndex > -1 && textEngine.selectable && textField.__showCursor) {
					var scrollX1 = -textField.get_scrollH();
					var scrollY1 = 0.0;
					var _g12 = 0;
					var _g4 = textField.get_scrollV() - 1;
					while(_g12 < _g4) {
						var i2 = _g12++;
						scrollY1 -= textEngine.lineHeights.get(i2);
					}
					openfl__$internal_renderer_canvas_CanvasTextField.context.beginPath();
					openfl__$internal_renderer_canvas_CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textField.get_defaultTextFormat().color & 16777215,6);
					openfl__$internal_renderer_canvas_CanvasTextField.context.moveTo(scrollX1 + 2.5,scrollY1 + 2.5);
					openfl__$internal_renderer_canvas_CanvasTextField.context.lineWidth = 1;
					openfl__$internal_renderer_canvas_CanvasTextField.context.lineTo(scrollX1 + 2.5,scrollY1 + openfl__$internal_text_TextEngine.getFormatHeight(textField.get_defaultTextFormat()) - 1);
					openfl__$internal_renderer_canvas_CanvasTextField.context.stroke();
					openfl__$internal_renderer_canvas_CanvasTextField.context.closePath();
				}
			}
			graphics.__bitmap = openfl_display_BitmapData.fromCanvas(textField.__graphics.__canvas);
			graphics.__visible = true;
			textField.__dirty = false;
			graphics.set___dirty(false);
		}
	}
};
var openfl__$internal_renderer_dom_DOMBitmap = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMBitmap"] = openfl__$internal_renderer_dom_DOMBitmap;
openfl__$internal_renderer_dom_DOMBitmap.__name__ = ["openfl","_internal","renderer","dom","DOMBitmap"];
openfl__$internal_renderer_dom_DOMBitmap.renderCanvas = function(bitmap,renderSession) {
	if(bitmap.__image != null) {
		renderSession.element.removeChild(bitmap.__image);
		bitmap.__image = null;
	}
	if(bitmap.__canvas == null) {
		bitmap.__canvas = window.document.createElement("canvas");
		bitmap.__context = bitmap.__canvas.getContext("2d");
		bitmap.__imageVersion = -1;
		if(!renderSession.allowSmoothing || !bitmap.smoothing) {
			bitmap.__context.mozImageSmoothingEnabled = false;
			bitmap.__context.msImageSmoothingEnabled = false;
			bitmap.__context.imageSmoothingEnabled = false;
		}
		openfl__$internal_renderer_dom_DOMRenderer.initializeElement(bitmap,bitmap.__canvas,renderSession);
	}
	if(bitmap.__imageVersion != bitmap.bitmapData.image.version) {
		lime_graphics_utils_ImageCanvasUtil.convertToCanvas(bitmap.bitmapData.image);
		bitmap.__canvas.width = bitmap.bitmapData.width;
		bitmap.__canvas.height = bitmap.bitmapData.height;
		bitmap.__context.drawImage(bitmap.bitmapData.image.buffer.__srcCanvas,0,0);
		bitmap.__imageVersion = bitmap.bitmapData.image.version;
	}
	openfl__$internal_renderer_dom_DOMRenderer.updateClip(bitmap,renderSession);
	openfl__$internal_renderer_dom_DOMRenderer.applyStyle(bitmap,renderSession,true,true,true);
};
openfl__$internal_renderer_dom_DOMBitmap.renderImage = function(bitmap,renderSession) {
	if(bitmap.__canvas != null) {
		renderSession.element.removeChild(bitmap.__canvas);
		bitmap.__canvas = null;
	}
	if(bitmap.__image == null) {
		bitmap.__image = window.document.createElement("img");
		bitmap.__image.src = bitmap.bitmapData.image.buffer.__srcImage.src;
		openfl__$internal_renderer_dom_DOMRenderer.initializeElement(bitmap,bitmap.__image,renderSession);
	}
	openfl__$internal_renderer_dom_DOMRenderer.updateClip(bitmap,renderSession);
	openfl__$internal_renderer_dom_DOMRenderer.applyStyle(bitmap,renderSession,true,true,true);
};
var openfl__$internal_renderer_dom_DOMMaskManager = function(renderSession) {
	openfl__$internal_renderer_AbstractMaskManager.call(this,renderSession);
	this.clipRects = [];
	this.numClipRects = 0;
};
$hxClasses["openfl._internal.renderer.dom.DOMMaskManager"] = openfl__$internal_renderer_dom_DOMMaskManager;
openfl__$internal_renderer_dom_DOMMaskManager.__name__ = ["openfl","_internal","renderer","dom","DOMMaskManager"];
openfl__$internal_renderer_dom_DOMMaskManager.__super__ = openfl__$internal_renderer_AbstractMaskManager;
openfl__$internal_renderer_dom_DOMMaskManager.prototype = $extend(openfl__$internal_renderer_AbstractMaskManager.prototype,{
	currentClipRect: null
	,clipRects: null
	,numClipRects: null
	,pushMask: function(mask) {
		this.pushRect(mask.getBounds(mask),mask.__getRenderTransform());
	}
	,pushObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(handleScrollRect && object.__scrollRect != null) this.pushRect(object.__scrollRect,object.__renderTransform);
		if(object.__mask != null) this.pushMask(object.__mask);
	}
	,pushRect: function(rect,transform) {
		if(this.numClipRects == this.clipRects.length) this.clipRects[this.numClipRects] = new openfl_geom_Rectangle();
		var clipRect = this.clipRects[this.numClipRects];
		rect.__transform(clipRect,transform);
		if(this.numClipRects > 0) {
			var parentClipRect = this.clipRects[this.numClipRects - 1];
			clipRect.__contract(parentClipRect.x,parentClipRect.y,parentClipRect.width,parentClipRect.height);
		}
		if(clipRect.height < 0) clipRect.height = 0;
		if(clipRect.width < 0) clipRect.width = 0;
		this.currentClipRect = clipRect;
		this.numClipRects++;
	}
	,popMask: function() {
		this.popRect();
	}
	,popObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(object.__mask != null) this.popMask();
		if(handleScrollRect && object.__scrollRect != null) this.popRect();
	}
	,popRect: function() {
		if(this.numClipRects > 0) {
			this.numClipRects--;
			if(this.numClipRects > 0) this.currentClipRect = this.clipRects[this.numClipRects - 1]; else this.currentClipRect = null;
		}
	}
	,updateClip: function(displayObject) {
		if(this.currentClipRect == null) {
			displayObject.__worldClipChanged = displayObject.__worldClip != null;
			displayObject.__worldClip = null;
		} else {
			if(displayObject.__worldClip == null) displayObject.__worldClip = new openfl_geom_Rectangle();
			var clip = openfl_geom_Rectangle.__temp;
			var matrix = openfl_geom_Matrix.__temp;
			matrix.copyFrom(displayObject.__renderTransform);
			matrix.invert();
			this.currentClipRect.__transform(clip,matrix);
			if(clip.equals(displayObject.__worldClip)) displayObject.__worldClipChanged = false; else {
				displayObject.__worldClip.copyFrom(clip);
				displayObject.__worldClipChanged = true;
			}
		}
	}
	,__class__: openfl__$internal_renderer_dom_DOMMaskManager
});
var openfl__$internal_renderer_dom_DOMRenderer = function(stage,element) {
	openfl__$internal_renderer_AbstractRenderer.call(this,stage);
	this.element = element;
	this.renderSession = new openfl__$internal_renderer_RenderSession();
	this.renderSession.element = element;
	this.renderSession.roundPixels = true;
	var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
	this.renderSession.vendorPrefix = prefix.lowercase;
	if(prefix.lowercase == "webkit") this.renderSession.transformProperty = "-webkit-transform"; else this.renderSession.transformProperty = "transform";
	if(prefix.lowercase == "webkit") this.renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.renderSession.transformOriginProperty = "transform-origin";
	this.renderSession.maskManager = new openfl__$internal_renderer_dom_DOMMaskManager(this.renderSession);
	this.renderSession.renderer = this;
};
$hxClasses["openfl._internal.renderer.dom.DOMRenderer"] = openfl__$internal_renderer_dom_DOMRenderer;
openfl__$internal_renderer_dom_DOMRenderer.__name__ = ["openfl","_internal","renderer","dom","DOMRenderer"];
openfl__$internal_renderer_dom_DOMRenderer.applyStyle = function(displayObject,renderSession,setTransform,setAlpha,setClip) {
	var style = displayObject.__style;
	if(setTransform && displayObject.__renderTransformChanged) style.setProperty(renderSession.transformProperty,displayObject.__renderTransform.to3DString(renderSession.roundPixels),null);
	if(displayObject.__worldZ != ++renderSession.z) {
		displayObject.__worldZ = renderSession.z;
		style.setProperty("z-index",displayObject.__worldZ == null?"null":"" + displayObject.__worldZ,null);
	}
	if(setAlpha && displayObject.__worldAlphaChanged) {
		if(displayObject.__worldAlpha < 1) style.setProperty("opacity",displayObject.__worldAlpha == null?"null":"" + displayObject.__worldAlpha,null); else style.removeProperty("opacity");
	}
	if(setClip && displayObject.__worldClipChanged) {
		if(displayObject.__worldClip == null) style.removeProperty("clip"); else {
			var clip = displayObject.__worldClip;
			style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
		}
	}
};
openfl__$internal_renderer_dom_DOMRenderer.initializeElement = function(displayObject,element,renderSession) {
	var style = displayObject.__style = element.style;
	style.setProperty("position","absolute",null);
	style.setProperty("top","0",null);
	style.setProperty("left","0",null);
	style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
	renderSession.element.appendChild(element);
	displayObject.__worldAlphaChanged = true;
	displayObject.__renderTransformChanged = true;
	displayObject.__worldVisibleChanged = true;
	displayObject.__worldClipChanged = true;
	displayObject.__worldClip = null;
	displayObject.__worldZ = -1;
};
openfl__$internal_renderer_dom_DOMRenderer.updateClip = function(displayObject,renderSession) {
	var maskManager = renderSession.maskManager;
	maskManager.updateClip(displayObject);
};
openfl__$internal_renderer_dom_DOMRenderer.__super__ = openfl__$internal_renderer_AbstractRenderer;
openfl__$internal_renderer_dom_DOMRenderer.prototype = $extend(openfl__$internal_renderer_AbstractRenderer.prototype,{
	element: null
	,clear: function() {
		var _g = 0;
		var _g1 = this.stage.stage3Ds;
		while(_g < _g1.get_length()) {
			var stage3D = _g1.get(_g);
			++_g;
			stage3D.__renderDOM(this.stage,this.renderSession);
		}
	}
	,render: function() {
		this.renderSession.allowSmoothing = this.stage.quality != 2;
		if(!this.stage.__transparent) this.element.style.background = this.stage.__colorString; else this.element.style.background = "none";
		this.renderSession.z = 1;
		this.stage.__renderDOM(this.renderSession);
	}
	,__class__: openfl__$internal_renderer_dom_DOMRenderer
});
var openfl__$internal_renderer_dom_DOMShape = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMShape"] = openfl__$internal_renderer_dom_DOMShape;
openfl__$internal_renderer_dom_DOMShape.__name__ = ["openfl","_internal","renderer","dom","DOMShape"];
openfl__$internal_renderer_dom_DOMShape.render = function(shape,renderSession) {
	var graphics = shape.__graphics;
	if(shape.stage != null && shape.__worldVisible && shape.__renderable && graphics != null) {
		openfl__$internal_renderer_canvas_CanvasGraphics.render(graphics,renderSession,shape.__renderTransform);
		if(graphics.__dirty || shape.__worldAlphaChanged || shape.__canvas == null && graphics.__canvas != null) {
			if(graphics.__canvas != null) {
				if(shape.__canvas != graphics.__canvas) {
					if(shape.__canvas != null) renderSession.element.removeChild(shape.__canvas);
					shape.__canvas = graphics.__canvas;
					shape.__context = graphics.__context;
					openfl__$internal_renderer_dom_DOMRenderer.initializeElement(shape,shape.__canvas,renderSession);
				}
			} else if(shape.__canvas != null) {
				renderSession.element.removeChild(shape.__canvas);
				shape.__canvas = null;
				shape.__style = null;
			}
		}
		if(shape.__canvas != null) {
			renderSession.maskManager.pushObject(shape);
			var cacheTransform = shape.__renderTransform;
			shape.__renderTransform = graphics.__worldTransform;
			if(graphics.__transformDirty) {
				graphics.__transformDirty = false;
				shape.__renderTransformChanged = true;
			}
			openfl__$internal_renderer_dom_DOMRenderer.updateClip(shape,renderSession);
			openfl__$internal_renderer_dom_DOMRenderer.applyStyle(shape,renderSession,true,true,true);
			shape.__renderTransform = cacheTransform;
			renderSession.maskManager.popObject(shape);
		}
	} else if(shape.__canvas != null) {
		renderSession.element.removeChild(shape.__canvas);
		shape.__canvas = null;
		shape.__style = null;
	}
};
var openfl__$internal_renderer_dom_DOMTextField = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMTextField"] = openfl__$internal_renderer_dom_DOMTextField;
openfl__$internal_renderer_dom_DOMTextField.__name__ = ["openfl","_internal","renderer","dom","DOMTextField"];
openfl__$internal_renderer_dom_DOMTextField.render = function(textField,renderSession) {
	var textEngine = textField.__textEngine;
	if(textField.stage != null && textField.__worldVisible && textField.__renderable) {
		if(textField.__dirty || textField.__div == null) {
			if(textEngine.text != "" || textEngine.background || textEngine.border || textEngine.type == 1) {
				if(textField.__div == null) {
					textField.__div = window.document.createElement("div");
					openfl__$internal_renderer_dom_DOMRenderer.initializeElement(textField,textField.__div,renderSession);
					textField.__style.setProperty("outline","none",null);
					textField.__div.addEventListener("input",function(event) {
						event.preventDefault();
						if(textField.get_htmlText() != textField.__div.innerHTML) {
							textField.set_htmlText(textField.__div.innerHTML);
							if(textField.__displayAsPassword) {
							}
							textField.__dirty = false;
						}
					},true);
				}
				if(!textEngine.multiline) textField.__style.setProperty("white-space","nowrap",null); else textField.__style.setProperty("word-wrap","break-word",null);
				textField.__style.setProperty("overflow","hidden",null);
				if(textEngine.selectable) textField.__style.setProperty("cursor","text",null); else textField.__style.setProperty("cursor","inherit",null);
				textField.__div.contentEditable = textEngine.type == 1;
				var style = textField.__style;
				textField.__div.innerHTML = new EReg("\n","g").replace(textEngine.text,"<br>");
				if(textEngine.background) style.setProperty("background-color","#" + StringTools.hex(textEngine.backgroundColor & 16777215,6),null); else style.removeProperty("background-color");
				if(textEngine.border) style.setProperty("border","solid 1px #" + StringTools.hex(textEngine.borderColor & 16777215,6),null); else style.removeProperty("border");
				style.setProperty("font",openfl__$internal_text_TextEngine.getFont(textField.__textFormat),null);
				style.setProperty("color","#" + StringTools.hex(textField.__textFormat.color & 16777215,6),null);
				if(textEngine.autoSize != 2) style.setProperty("width","auto",null); else style.setProperty("width",textEngine.width + "px",null);
				style.setProperty("height",textEngine.height + "px",null);
				var _g = textField.__textFormat.align;
				switch(_g) {
				case 0:
					style.setProperty("text-align","center",null);
					break;
				case 4:
					style.setProperty("text-align","right",null);
					break;
				default:
					style.setProperty("text-align","left",null);
				}
				textField.__dirty = false;
			} else if(textField.__div != null) {
				renderSession.element.removeChild(textField.__div);
				textField.__div = null;
			}
		}
		if(textField.__div != null) {
			openfl__$internal_renderer_dom_DOMRenderer.updateClip(textField,renderSession);
			openfl__$internal_renderer_dom_DOMRenderer.applyStyle(textField,renderSession,true,true,true);
		}
	} else if(textField.__div != null) {
		renderSession.element.removeChild(textField.__div);
		textField.__div = null;
		textField.__style = null;
	}
};
var openfl__$internal_renderer_opengl_GLBitmap = function() { };
$hxClasses["openfl._internal.renderer.opengl.GLBitmap"] = openfl__$internal_renderer_opengl_GLBitmap;
openfl__$internal_renderer_opengl_GLBitmap.__name__ = ["openfl","_internal","renderer","opengl","GLBitmap"];
openfl__$internal_renderer_opengl_GLBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		var renderer = renderSession.renderer;
		var gl = renderSession.gl;
		renderSession.blendModeManager.setBlendMode(bitmap.get_blendMode());
		renderSession.maskManager.pushObject(bitmap);
		var shader = renderSession.filterManager.pushObject(bitmap);
		shader.get_data().uImage0.input = bitmap.bitmapData;
		shader.get_data().uImage0.smoothing = renderSession.allowSmoothing && (bitmap.smoothing || renderSession.upscaled);
		shader.get_data().uMatrix.value = renderer.getMatrix(bitmap.__renderTransform);
		renderSession.shaderManager.setShader(shader);
		gl.bindBuffer(gl.ARRAY_BUFFER,bitmap.bitmapData.getBuffer(gl,bitmap.__worldAlpha));
		gl.vertexAttribPointer(shader.get_data().aPosition.index,3,gl.FLOAT,false,24,0);
		gl.vertexAttribPointer(shader.get_data().aTexCoord.index,2,gl.FLOAT,false,24,12);
		gl.vertexAttribPointer(shader.get_data().aAlpha.index,1,gl.FLOAT,false,24,20);
		gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
		renderSession.filterManager.popObject(bitmap);
		renderSession.maskManager.popObject(bitmap);
	}
};
var openfl__$internal_renderer_opengl_GLDisplayObject = function() { };
$hxClasses["openfl._internal.renderer.opengl.GLDisplayObject"] = openfl__$internal_renderer_opengl_GLDisplayObject;
openfl__$internal_renderer_opengl_GLDisplayObject.__name__ = ["openfl","_internal","renderer","opengl","GLDisplayObject"];
openfl__$internal_renderer_opengl_GLDisplayObject.render = function(displayObject,renderSession) {
	if(displayObject.opaqueBackground == null && displayObject.__graphics == null) return;
	if(!displayObject.__renderable || displayObject.__worldAlpha <= 0) return;
	if(displayObject.opaqueBackground != null && displayObject.get_width() > 0 && displayObject.get_height() > 0) {
		renderSession.maskManager.pushObject(displayObject);
		var gl = renderSession.gl;
		var rect = openfl_geom_Rectangle.__temp;
		rect.setTo(0,0,displayObject.get_width(),displayObject.get_height());
		renderSession.maskManager.pushRect(rect,displayObject.__renderTransform);
		var color = displayObject.opaqueBackground;
		gl.clearColor((color >> 16 & 255) / 255,(color >> 8 & 255) / 255,(color & 255) / 255,1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		renderSession.maskManager.popRect();
		renderSession.maskManager.popObject(displayObject);
	}
	if(displayObject.__graphics != null) openfl__$internal_renderer_opengl_GLShape.render(displayObject,renderSession);
};
var openfl__$internal_renderer_opengl_GLFilterManager = function(renderer,renderSession) {
	openfl__$internal_renderer_AbstractFilterManager.call(this,renderSession);
	this.renderer = renderer;
	this.gl = renderSession.gl;
	this.filterDepth = 0;
	this.matrix = new openfl_geom_Matrix();
};
$hxClasses["openfl._internal.renderer.opengl.GLFilterManager"] = openfl__$internal_renderer_opengl_GLFilterManager;
openfl__$internal_renderer_opengl_GLFilterManager.__name__ = ["openfl","_internal","renderer","opengl","GLFilterManager"];
openfl__$internal_renderer_opengl_GLFilterManager.__super__ = openfl__$internal_renderer_AbstractFilterManager;
openfl__$internal_renderer_opengl_GLFilterManager.prototype = $extend(openfl__$internal_renderer_AbstractFilterManager.prototype,{
	filterDepth: null
	,gl: null
	,matrix: null
	,renderer: null
	,pushObject: function(object) {
		if(object.__filters != null && object.__filters.length > 0) {
			if(object.__filters.length == 1 && object.__filters[0].__numPasses == 0) return object.__filters[0].__initShader(this.renderSession,0); else this.renderer.getRenderTarget(true);
			this.filterDepth++;
		}
		return this.renderSession.shaderManager.defaultShader;
	}
	,popObject: function(object) {
		if(object.__filters != null && object.__filters.length > 0) {
			var filter = object.__filters[0];
			var currentTarget;
			var shader;
			if(object.__filters.length > 1 || filter.__numPasses > 0) {
				var _g1 = 0;
				var _g = filter.__numPasses;
				while(_g1 < _g) {
					var i = _g1++;
					currentTarget = this.renderer.currentRenderTarget;
					this.renderer.getRenderTarget(true);
					shader = filter.__initShader(this.renderSession,i);
					this.renderPass(currentTarget,shader);
				}
				this.filterDepth--;
				this.renderer.getRenderTarget(this.filterDepth > 0);
				this.renderPass(this.renderer.currentRenderTarget,this.renderSession.shaderManager.defaultShader);
			} else this.filterDepth--;
		}
	}
	,renderPass: function(target,shader) {
		shader.get_data().uImage0.input = target;
		shader.get_data().uImage0.smoothing = this.renderSession.allowSmoothing && this.renderSession.upscaled;
		shader.get_data().uMatrix.value = this.renderer.getMatrix(this.matrix);
		this.renderSession.shaderManager.setShader(shader);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,target.getBuffer(this.gl,1));
		this.gl.vertexAttribPointer(shader.get_data().aPosition.index,3,this.gl.FLOAT,false,24,0);
		this.gl.vertexAttribPointer(shader.get_data().aTexCoord.index,2,this.gl.FLOAT,false,24,12);
		this.gl.vertexAttribPointer(shader.get_data().aAlpha.index,1,this.gl.FLOAT,false,24,20);
		this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);
	}
	,__class__: openfl__$internal_renderer_opengl_GLFilterManager
});
var openfl__$internal_renderer_opengl_GLMaskManager = function(renderSession) {
	openfl__$internal_renderer_AbstractMaskManager.call(this,renderSession);
	this.gl = renderSession.gl;
	this.clipRects = [];
	this.numClipRects = 0;
	this.tempRect = new openfl_geom_Rectangle();
};
$hxClasses["openfl._internal.renderer.opengl.GLMaskManager"] = openfl__$internal_renderer_opengl_GLMaskManager;
openfl__$internal_renderer_opengl_GLMaskManager.__name__ = ["openfl","_internal","renderer","opengl","GLMaskManager"];
openfl__$internal_renderer_opengl_GLMaskManager.__super__ = openfl__$internal_renderer_AbstractMaskManager;
openfl__$internal_renderer_opengl_GLMaskManager.prototype = $extend(openfl__$internal_renderer_AbstractMaskManager.prototype,{
	clipRects: null
	,gl: null
	,numClipRects: null
	,tempRect: null
	,pushMask: function(mask) {
		this.pushRect(mask.getBounds(mask),mask.__getRenderTransform());
	}
	,pushObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(handleScrollRect && object.__scrollRect != null) this.pushRect(object.__scrollRect,object.__renderTransform);
		if(object.__mask != null) this.pushMask(object.__mask);
	}
	,pushRect: function(rect,transform) {
		var stage = openfl_Lib.current.stage;
		if(this.numClipRects == this.clipRects.length) this.clipRects[this.numClipRects] = new openfl_geom_Rectangle();
		var clipRect = this.clipRects[this.numClipRects];
		rect.__transform(clipRect,transform);
		if(this.numClipRects > 0) {
			var parentClipRect = this.clipRects[this.numClipRects - 1];
			clipRect.__contract(parentClipRect.x,parentClipRect.y,parentClipRect.width,parentClipRect.height);
		}
		if(clipRect.height < 0) clipRect.height = 0;
		if(clipRect.width < 0) clipRect.width = 0;
		this.scissorRect(clipRect);
		this.numClipRects++;
	}
	,popMask: function() {
		this.popRect();
	}
	,popObject: function(object,handleScrollRect) {
		if(handleScrollRect == null) handleScrollRect = true;
		if(object.__mask != null) this.popMask();
		if(handleScrollRect && object.__scrollRect != null) this.popRect();
	}
	,popRect: function() {
		if(this.numClipRects > 0) {
			this.numClipRects--;
			if(this.numClipRects > 0) this.scissorRect(this.clipRects[this.numClipRects - 1]); else this.scissorRect();
		}
	}
	,scissorRect: function(rect) {
		if(rect != null) {
			var renderer = this.renderSession.renderer;
			this.gl.enable(this.gl.SCISSOR_TEST);
			var clipRect = this.tempRect;
			rect.__transform(clipRect,renderer.displayMatrix);
			var x = Math.floor(clipRect.x);
			var y = Math.floor(renderer.height - clipRect.y - clipRect.height);
			var width = Math.ceil(clipRect.width);
			var height = Math.ceil(clipRect.height);
			if(width < 0) width = 0;
			if(height < 0) height = 0;
			this.gl.scissor(x,y,width,height);
		} else this.gl.disable(this.gl.SCISSOR_TEST);
	}
	,__class__: openfl__$internal_renderer_opengl_GLMaskManager
});
var openfl__$internal_renderer_opengl_GLRenderer = function() { };
$hxClasses["openfl._internal.renderer.opengl.GLRenderer"] = openfl__$internal_renderer_opengl_GLRenderer;
openfl__$internal_renderer_opengl_GLRenderer.__name__ = ["openfl","_internal","renderer","opengl","GLRenderer"];
openfl__$internal_renderer_opengl_GLRenderer.__super__ = openfl__$internal_renderer_AbstractRenderer;
openfl__$internal_renderer_opengl_GLRenderer.prototype = $extend(openfl__$internal_renderer_AbstractRenderer.prototype,{
	projection: null
	,projectionFlipped: null
	,currentRenderTarget: null
	,displayHeight: null
	,displayMatrix: null
	,displayWidth: null
	,flipped: null
	,gl: null
	,matrix: null
	,renderTargetA: null
	,renderTargetB: null
	,offsetX: null
	,offsetY: null
	,values: null
	,clear: function() {
		if(this.stage.__transparent) this.gl.clearColor(0,0,0,0); else this.gl.clearColor(this.stage.__colorSplit[0],this.stage.__colorSplit[1],this.stage.__colorSplit[2],1);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		var _g = 0;
		var _g1 = this.stage.stage3Ds;
		while(_g < _g1.get_length()) {
			var stage3D = _g1.get(_g);
			++_g;
			stage3D.__renderGL(this.stage,this.renderSession);
		}
	}
	,getMatrix: function(transform) {
		var _matrix = openfl_geom_Matrix.__temp;
		_matrix.copyFrom(transform);
		_matrix.concat(this.displayMatrix);
		if(this.renderSession.roundPixels) {
			_matrix.tx = Math.round(_matrix.tx);
			_matrix.ty = Math.round(_matrix.ty);
		}
		lime_math__$Matrix4_Matrix4_$Impl_$.identity(this.matrix);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,0,_matrix.a);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,1,_matrix.b);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,4,_matrix.c);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,5,_matrix.d);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,12,_matrix.tx);
		lime_math__$Matrix4_Matrix4_$Impl_$.set(this.matrix,13,_matrix.ty);
		lime_math__$Matrix4_Matrix4_$Impl_$.append(this.matrix,this.flipped?this.projectionFlipped:this.projection);
		var _g = 0;
		while(_g < 16) {
			var i = _g++;
			this.values[i] = lime_math__$Matrix4_Matrix4_$Impl_$.get(this.matrix,i);
		}
		return this.values;
	}
	,getRenderTarget: function(framebuffer) {
		if(framebuffer) {
			if(this.renderTargetA == null) {
				this.renderTargetA = openfl_display_BitmapData.fromTexture(this.stage.stage3Ds.get(0).context3D.createRectangleTexture(this.width,this.height,1,true));
				this.gl.bindTexture(this.gl.TEXTURE_2D,this.renderTargetA.getTexture(this.gl));
				this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE);
				this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);
			}
			if(this.renderTargetB == null) {
				this.renderTargetB = openfl_display_BitmapData.fromTexture(this.stage.stage3Ds.get(0).context3D.createRectangleTexture(this.width,this.height,1,true));
				this.gl.bindTexture(this.gl.TEXTURE_2D,this.renderTargetB.getTexture(this.gl));
				this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE);
				this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);
			}
			if(this.currentRenderTarget == this.renderTargetA) this.currentRenderTarget = this.renderTargetB; else this.currentRenderTarget = this.renderTargetA;
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.currentRenderTarget.__getFramebuffer(this.gl));
			this.gl.viewport(0,0,this.width,this.height);
			this.gl.clearColor(0,0,0,0);
			this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			this.flipped = false;
		} else {
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
			this.flipped = true;
		}
	}
	,render: function() {
		this.gl.viewport(this.offsetX,this.offsetY,this.displayWidth,this.displayHeight);
		this.renderSession.allowSmoothing = this.stage.quality != 2;
		this.renderSession.upscaled = this.displayMatrix.a != 1 || this.displayMatrix.d != 1;
		this.stage.__renderGL(this.renderSession);
		if(this.offsetX > 0 || this.offsetY > 0) {
			this.gl.clearColor(0,0,0,1);
			this.gl.enable(this.gl.SCISSOR_TEST);
			if(this.offsetX > 0) {
				this.gl.scissor(0,0,this.offsetX,this.height);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT);
				this.gl.scissor(this.offsetX + this.displayWidth,0,this.width,this.height);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			}
			if(this.offsetY > 0) {
				this.gl.scissor(0,0,this.width,this.offsetY);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT);
				this.gl.scissor(0,this.offsetY + this.displayHeight,this.width,this.height);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			}
			this.gl.disable(this.gl.SCISSOR_TEST);
		}
	}
	,resize: function(width,height) {
		openfl__$internal_renderer_AbstractRenderer.prototype.resize.call(this,width,height);
		if(this.renderTargetA != null && (this.renderTargetA.width != width || this.renderTargetA.height != height)) {
			this.renderTargetA = openfl_display_BitmapData.fromTexture(this.stage.stage3Ds.get(0).context3D.createRectangleTexture(width,height,1,true));
			this.gl.bindTexture(this.gl.TEXTURE_2D,this.renderTargetA.getTexture(this.gl));
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);
		}
		if(this.renderTargetB != null && (this.renderTargetB.width != width || this.renderTargetB.height != height)) {
			this.renderTargetB = openfl_display_BitmapData.fromTexture(this.stage.stage3Ds.get(0).context3D.createRectangleTexture(width,height,1,true));
			this.gl.bindTexture(this.gl.TEXTURE_2D,this.renderTargetB.getTexture(this.gl));
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);
		}
		this.displayMatrix = this.stage.__displayMatrix;
		this.offsetX = Math.round(this.displayMatrix.__transformX(0,0));
		this.offsetY = Math.round(this.displayMatrix.__transformY(0,0));
		this.displayWidth = Math.round(this.displayMatrix.__transformX(width,0) - this.offsetX);
		this.displayHeight = Math.round(this.displayMatrix.__transformY(0,height) - this.offsetY);
		this.projection = lime_math__$Matrix4_Matrix4_$Impl_$.createOrtho(this.offsetX,this.displayWidth + this.offsetX,this.offsetY,this.displayHeight + this.offsetY,-1000,1000);
		this.projectionFlipped = lime_math__$Matrix4_Matrix4_$Impl_$.createOrtho(this.offsetX,this.displayWidth + this.offsetX,this.displayHeight + this.offsetY,this.offsetY,-1000,1000);
	}
	,__class__: openfl__$internal_renderer_opengl_GLRenderer
});
var openfl__$internal_renderer_opengl_GLShape = function() { };
$hxClasses["openfl._internal.renderer.opengl.GLShape"] = openfl__$internal_renderer_opengl_GLShape;
openfl__$internal_renderer_opengl_GLShape.__name__ = ["openfl","_internal","renderer","opengl","GLShape"];
openfl__$internal_renderer_opengl_GLShape.render = function(shape,renderSession) {
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	var graphics = shape.__graphics;
	if(graphics != null) {
		openfl__$internal_renderer_canvas_CanvasGraphics.render(graphics,renderSession,shape.__renderTransform);
		var bounds = graphics.__bounds;
		if(graphics.__bitmap != null && graphics.__visible) {
			var renderer = renderSession.renderer;
			var gl = renderSession.gl;
			renderSession.blendModeManager.setBlendMode(shape.get_blendMode());
			renderSession.maskManager.pushObject(shape);
			var shader = renderSession.filterManager.pushObject(shape);
			shader.get_data().uImage0.input = graphics.__bitmap;
			shader.get_data().uImage0.smoothing = renderSession.allowSmoothing;
			shader.get_data().uMatrix.value = renderer.getMatrix(graphics.__worldTransform);
			renderSession.shaderManager.setShader(shader);
			gl.bindBuffer(gl.ARRAY_BUFFER,graphics.__bitmap.getBuffer(gl,shape.__worldAlpha));
			gl.vertexAttribPointer(shader.get_data().aPosition.index,3,gl.FLOAT,false,24,0);
			gl.vertexAttribPointer(shader.get_data().aTexCoord.index,2,gl.FLOAT,false,24,12);
			gl.vertexAttribPointer(shader.get_data().aAlpha.index,1,gl.FLOAT,false,24,20);
			gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
			renderSession.filterManager.popObject(shape);
			renderSession.maskManager.popObject(shape);
		}
	}
};
var openfl__$internal_stage3D_Context3DStateCache = function() {
	this._registers = openfl__$Vector_Vector_$Impl_$.toFloatVector(null,4096);
	this.clearSettings();
};
$hxClasses["openfl._internal.stage3D.Context3DStateCache"] = openfl__$internal_stage3D_Context3DStateCache;
openfl__$internal_stage3D_Context3DStateCache.__name__ = ["openfl","_internal","stage3D","Context3DStateCache"];
openfl__$internal_stage3D_Context3DStateCache.prototype = {
	_activeTexture: null
	,_activeVertexArray: null
	,_cullingMode: null
	,_depthTestCompareMode: null
	,_depthTestEnabled: null
	,_depthTestMask: null
	,_destBlendFactor: null
	,_program: null
	,_registers: null
	,_srcBlendFactor: null
	,_viewportHeight: null
	,_viewportOriginX: null
	,_viewportOriginY: null
	,_viewportWidth: null
	,clearRegisters: function() {
		var numFloats = 4096;
		var _g = 0;
		while(_g < numFloats) {
			var c = _g++;
			this._registers.set(c,-999999999.0);
		}
	}
	,clearSettings: function() {
		this._srcBlendFactor = null;
		this._destBlendFactor = null;
		this._depthTestEnabled = false;
		this._depthTestMask = false;
		this._depthTestCompareMode = null;
		this._program = null;
		this._cullingMode = null;
		this._activeTexture = -1;
		this._activeVertexArray = -1;
		this._viewportOriginX = -1;
		this._viewportOriginY = -1;
		this._viewportWidth = -1;
		this._viewportHeight = -1;
		this.clearRegisters();
	}
	,updateViewport: function(originX,originY,width,height) {
		this._viewportOriginX = originX;
		this._viewportOriginY = originY;
		this._viewportWidth = width;
		this._viewportHeight = height;
		return true;
	}
	,__class__: openfl__$internal_stage3D_Context3DStateCache
};
var openfl__$internal_stage3D_GLUtils = function() { };
$hxClasses["openfl._internal.stage3D.GLUtils"] = openfl__$internal_stage3D_GLUtils;
openfl__$internal_stage3D_GLUtils.__name__ = ["openfl","_internal","stage3D","GLUtils"];
openfl__$internal_stage3D_GLUtils.CheckGLError = function() {
	if(!openfl__$internal_stage3D_GLUtils.debug) return;
	var error = lime_graphics_opengl_GL.context.getError();
	if(error != 0) throw new js__$Boot_HaxeError(new openfl_errors_IllegalOperationError("Error calling openGL api. Error: " + error + "\n"));
};
var openfl__$internal_stage3D_SamplerState = function(minFilter,magFilter,wrapModeS,wrapModeT,lodBias,maxAniso,ignoreSampler,centroid) {
	if(centroid == null) centroid = false;
	if(ignoreSampler == null) ignoreSampler = false;
	if(maxAniso == null) maxAniso = 0.0;
	if(lodBias == null) lodBias = 0.0;
	this.minFilter = minFilter;
	this.magFilter = magFilter;
	this.wrapModeS = wrapModeS;
	this.wrapModeT = wrapModeT;
	this.lodBias = lodBias;
	this.maxAniso = maxAniso;
	this.ignoreSampler = ignoreSampler;
	this.centroid = centroid;
};
$hxClasses["openfl._internal.stage3D.SamplerState"] = openfl__$internal_stage3D_SamplerState;
openfl__$internal_stage3D_SamplerState.__name__ = ["openfl","_internal","stage3D","SamplerState"];
openfl__$internal_stage3D_SamplerState.prototype = {
	centroid: null
	,ignoreSampler: null
	,lodBias: null
	,magFilter: null
	,maxAniso: null
	,minFilter: null
	,wrapModeS: null
	,wrapModeT: null
	,__class__: openfl__$internal_stage3D_SamplerState
};
var openfl__$internal_swf_FilterType = $hxClasses["openfl._internal.swf.FilterType"] = { __ename__ : ["openfl","_internal","swf","FilterType"], __constructs__ : ["BlurFilter","ColorMatrixFilter","DropShadowFilter","GlowFilter"] };
openfl__$internal_swf_FilterType.BlurFilter = function(blurX,blurY,quality) { var $x = ["BlurFilter",0,blurX,blurY,quality]; $x.__enum__ = openfl__$internal_swf_FilterType; $x.toString = $estr; return $x; };
openfl__$internal_swf_FilterType.ColorMatrixFilter = function(matrix) { var $x = ["ColorMatrixFilter",1,matrix]; $x.__enum__ = openfl__$internal_swf_FilterType; $x.toString = $estr; return $x; };
openfl__$internal_swf_FilterType.DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) { var $x = ["DropShadowFilter",2,distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject]; $x.__enum__ = openfl__$internal_swf_FilterType; $x.toString = $estr; return $x; };
openfl__$internal_swf_FilterType.GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) { var $x = ["GlowFilter",3,color,alpha,blurX,blurY,strength,quality,inner,knockout]; $x.__enum__ = openfl__$internal_swf_FilterType; $x.toString = $estr; return $x; };
var openfl__$internal_swf_SWFLite = function() {
	this.symbols = new haxe_ds_IntMap();
};
$hxClasses["openfl._internal.swf.SWFLite"] = openfl__$internal_swf_SWFLite;
openfl__$internal_swf_SWFLite.__name__ = ["openfl","_internal","swf","SWFLite"];
openfl__$internal_swf_SWFLite.resolveClass = function(name) {
	var value = Type.resolveClass(name);
	if(value == null) value = Type.resolveClass(StringTools.replace(name,"openfl._legacy","openfl"));
	if(value == null) value = Type.resolveClass(StringTools.replace(name,"openfl._v2","openfl"));
	return value;
};
openfl__$internal_swf_SWFLite.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	if(value == null) value = Type.resolveEnum(StringTools.replace(name,"openfl._legacy","openfl"));
	if(value == null) value = Type.resolveEnum(StringTools.replace(name,"openfl._v2","openfl"));
	return value;
};
openfl__$internal_swf_SWFLite.unserialize = function(data) {
	if(data == null) return null;
	var unserializer = new haxe_Unserializer(data);
	unserializer.setResolver({ resolveClass : openfl__$internal_swf_SWFLite.resolveClass, resolveEnum : openfl__$internal_swf_SWFLite.resolveEnum});
	return unserializer.unserialize();
};
openfl__$internal_swf_SWFLite.prototype = {
	frameRate: null
	,library: null
	,root: null
	,symbols: null
	,createButton: function(className) {
		return null;
	}
	,createMovieClip: function(className) {
		if(className == null) className = "";
		if(className == "") return this.root.__createObject(this); else {
			var $it0 = this.symbols.iterator();
			while( $it0.hasNext() ) {
				var symbol = $it0.next();
				if(symbol.className == className) {
					if(js_Boot.__instanceof(symbol,openfl__$internal_symbols_SpriteSymbol)) return (js_Boot.__cast(symbol , openfl__$internal_symbols_SpriteSymbol)).__createObject(this);
				}
			}
		}
		return null;
	}
	,getBitmapData: function(className) {
		var $it0 = this.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(symbol.className == className) {
				if(js_Boot.__instanceof(symbol,openfl__$internal_symbols_BitmapSymbol)) {
					var bitmap = symbol;
					return openfl_Assets.getBitmapData(bitmap.path);
				}
			}
		}
		return null;
	}
	,hasSymbol: function(className) {
		var $it0 = this.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(symbol.className == className) return true;
		}
		return false;
	}
	,serialize: function() {
		var serializer = new haxe_Serializer();
		serializer.serialize(this);
		return serializer.toString();
	}
	,__class__: openfl__$internal_swf_SWFLite
};
var openfl__$internal_swf_SWFLiteLibrary = function(id) {
	openfl_AssetLibrary.call(this);
	this.id = id;
	this.alphaCheck = new haxe_ds_StringMap();
};
$hxClasses["openfl._internal.swf.SWFLiteLibrary"] = openfl__$internal_swf_SWFLiteLibrary;
openfl__$internal_swf_SWFLiteLibrary.__name__ = ["openfl","_internal","swf","SWFLiteLibrary"];
openfl__$internal_swf_SWFLiteLibrary.__super__ = openfl_AssetLibrary;
openfl__$internal_swf_SWFLiteLibrary.prototype = $extend(openfl_AssetLibrary.prototype,{
	alphaCheck: null
	,id: null
	,preloading: null
	,swf: null
	,exists: function(id,type) {
		if(this.swf == null) return false;
		if(id == "" && type == "MOVIE_CLIP") return true;
		if(type == "IMAGE" || type == "MOVIE_CLIP") return this.swf != null && this.swf.hasSymbol(id);
		return false;
	}
	,getImage: function(id) {
		if(!this.alphaCheck.exists(id)) {
			var $it0 = this.swf.symbols.iterator();
			while( $it0.hasNext() ) {
				var symbol = $it0.next();
				if(js_Boot.__instanceof(symbol,openfl__$internal_symbols_BitmapSymbol) && (js_Boot.__cast(symbol , openfl__$internal_symbols_BitmapSymbol)).path == id) {
					var bitmapSymbol = symbol;
					if(bitmapSymbol.alpha != null) {
						var image = openfl_AssetLibrary.prototype.getImage.call(this,id);
						var alpha = openfl_AssetLibrary.prototype.getImage.call(this,bitmapSymbol.alpha);
						this.__copyChannel(image,alpha);
						this.cachedImages.set(id,image);
						this.alphaCheck.set(id,true);
						return image;
					}
				}
			}
		}
		return openfl_AssetLibrary.prototype.getImage.call(this,id);
	}
	,getMovieClip: function(id) {
		if(this.swf != null) return this.swf.createMovieClip(id); else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,load: function() {
		var _g = this;
		if(this.id != null) this.preload.set(this.id,true);
		var $it0 = this.paths.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			this.preload.set(id,true);
		}
		var promise = new lime_app_Promise();
		this.preloading = true;
		this.loadText(this.id).onError($bind(promise,promise.error)).onComplete(function(data) {
			_g.swf = openfl__$internal_swf_SWFLite.unserialize(data);
			_g.swf.library = _g;
			openfl__$internal_swf_SWFLite.instances.set(_g.id,_g.swf);
			_g.__load().onProgress($bind(promise,promise.progress)).onError($bind(promise,promise.error)).onComplete(function(_) {
				_g.preloading = false;
				promise.complete(_g);
			});
		});
		return promise.future;
	}
	,loadImage: function(id) {
		var _g = this;
		if(!this.preloading && !this.alphaCheck.exists(id)) {
			var $it0 = this.swf.symbols.iterator();
			while( $it0.hasNext() ) {
				var symbol = $it0.next();
				if(js_Boot.__instanceof(symbol,openfl__$internal_symbols_BitmapSymbol) && (js_Boot.__cast(symbol , openfl__$internal_symbols_BitmapSymbol)).path == id) {
					var bitmapSymbol = [symbol];
					if(bitmapSymbol[0].alpha != null) {
						var promise = [new lime_app_Promise()];
						this.__loadImage(id).onError(($_=promise[0],$bind($_,$_.error))).onComplete((function(promise,bitmapSymbol) {
							return function(image) {
								_g.__loadImage(bitmapSymbol[0].alpha).onError(($_=promise[0],$bind($_,$_.error))).onComplete((function(promise) {
									return function(alpha) {
										_g.__copyChannel(image,alpha);
										_g.cachedImages.set(id,image);
										_g.alphaCheck.set(id,true);
										promise[0].complete(image);
									};
								})(promise));
							};
						})(promise,bitmapSymbol));
						return promise[0].future;
					}
				}
			}
		}
		return openfl_AssetLibrary.prototype.loadImage.call(this,id);
	}
	,unload: function() {
		var bitmap;
		var $it0 = this.swf.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(js_Boot.__instanceof(symbol,openfl__$internal_symbols_BitmapSymbol)) {
				bitmap = symbol;
				openfl_Assets.cache.removeBitmapData(bitmap.path);
			}
		}
	}
	,__copyChannel: function(image,alpha) {
		if(alpha != null) image.copyChannel(alpha,alpha.get_rect(),new lime_math_Vector2(),lime_graphics_ImageChannel.RED,lime_graphics_ImageChannel.ALPHA);
		image.buffer.premultiplied = true;
		image.set_premultiplied(false);
	}
	,__load: function() {
		return openfl_AssetLibrary.prototype.load.call(this);
	}
	,__loadImage: function(id) {
		return openfl_AssetLibrary.prototype.loadImage.call(this,id);
	}
	,__class__: openfl__$internal_swf_SWFLiteLibrary
});
var openfl__$internal_swf_ShapeCommand = $hxClasses["openfl._internal.swf.ShapeCommand"] = { __ename__ : ["openfl","_internal","swf","ShapeCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CurveTo","EndFill","LineStyle","LineTo","MoveTo"] };
openfl__$internal_swf_ShapeCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.BeginFill = function(color,alpha) { var $x = ["BeginFill",1,color,alpha]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.BeginGradientFill = function(fillType,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["BeginGradientFill",2,fillType,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.CurveTo = function(controlX,controlY,anchorX,anchorY) { var $x = ["CurveTo",3,controlX,controlY,anchorX,anchorY]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.EndFill = ["EndFill",4];
openfl__$internal_swf_ShapeCommand.EndFill.toString = $estr;
openfl__$internal_swf_ShapeCommand.EndFill.__enum__ = openfl__$internal_swf_ShapeCommand;
openfl__$internal_swf_ShapeCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",5,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.LineTo = function(x,y) { var $x = ["LineTo",6,x,y]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
openfl__$internal_swf_ShapeCommand.MoveTo = function(x,y) { var $x = ["MoveTo",7,x,y]; $x.__enum__ = openfl__$internal_swf_ShapeCommand; $x.toString = $estr; return $x; };
var openfl__$internal_symbols_SWFSymbol = function() {
};
$hxClasses["openfl._internal.symbols.SWFSymbol"] = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_SWFSymbol.__name__ = ["openfl","_internal","symbols","SWFSymbol"];
openfl__$internal_symbols_SWFSymbol.prototype = {
	className: null
	,id: null
	,__createObject: function(swf) {
		return null;
	}
	,__class__: openfl__$internal_symbols_SWFSymbol
};
var openfl__$internal_symbols_BitmapSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.BitmapSymbol"] = openfl__$internal_symbols_BitmapSymbol;
openfl__$internal_symbols_BitmapSymbol.__name__ = ["openfl","_internal","symbols","BitmapSymbol"];
openfl__$internal_symbols_BitmapSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_BitmapSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	alpha: null
	,path: null
	,__createObject: function(swf) {
		return new openfl_display_Bitmap(openfl_display_BitmapData.fromImage(swf.library.getImage(this.path)),1,true);
	}
	,__class__: openfl__$internal_symbols_BitmapSymbol
});
var openfl__$internal_symbols_ButtonSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.ButtonSymbol"] = openfl__$internal_symbols_ButtonSymbol;
openfl__$internal_symbols_ButtonSymbol.__name__ = ["openfl","_internal","symbols","ButtonSymbol"];
openfl__$internal_symbols_ButtonSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_ButtonSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	downState: null
	,hitState: null
	,overState: null
	,upState: null
	,__createObject: function(swf) {
		var simpleButton = null;
		openfl_display_SimpleButton.__initSWF = swf;
		openfl_display_SimpleButton.__initSymbol = this;
		if(this.className != null) {
			var symbolType = Type.resolveClass(this.className);
			if(symbolType != null) simpleButton = Type.createInstance(symbolType,[]); else {
			}
		}
		if(simpleButton == null) simpleButton = new openfl_display_SimpleButton();
		return simpleButton;
	}
	,__class__: openfl__$internal_symbols_ButtonSymbol
});
var openfl__$internal_symbols_DynamicTextSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.DynamicTextSymbol"] = openfl__$internal_symbols_DynamicTextSymbol;
openfl__$internal_symbols_DynamicTextSymbol.__name__ = ["openfl","_internal","symbols","DynamicTextSymbol"];
openfl__$internal_symbols_DynamicTextSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_DynamicTextSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	align: null
	,border: null
	,color: null
	,fontHeight: null
	,fontID: null
	,fontName: null
	,height: null
	,html: null
	,indent: null
	,input: null
	,leading: null
	,leftMargin: null
	,multiline: null
	,password: null
	,rightMargin: null
	,selectable: null
	,text: null
	,width: null
	,wordWrap: null
	,x: null
	,y: null
	,__createObject: function(swf) {
		var textField = new openfl_text_TextField();
		textField.__fromSymbol(swf,this);
		return textField;
	}
	,__class__: openfl__$internal_symbols_DynamicTextSymbol
});
var openfl__$internal_symbols_FontSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.FontSymbol"] = openfl__$internal_symbols_FontSymbol;
openfl__$internal_symbols_FontSymbol.__name__ = ["openfl","_internal","symbols","FontSymbol"];
openfl__$internal_symbols_FontSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_FontSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	advances: null
	,bold: null
	,codes: null
	,glyphs: null
	,italic: null
	,leading: null
	,name: null
	,__class__: openfl__$internal_symbols_FontSymbol
});
var openfl__$internal_symbols_ShapeSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.ShapeSymbol"] = openfl__$internal_symbols_ShapeSymbol;
openfl__$internal_symbols_ShapeSymbol.__name__ = ["openfl","_internal","symbols","ShapeSymbol"];
openfl__$internal_symbols_ShapeSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_ShapeSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	commands: null
	,rendered: null
	,__createObject: function(swf) {
		var shape = new openfl_display_Shape();
		var graphics = shape.get_graphics();
		if(this.rendered != null) {
			graphics.copyFrom(this.rendered.get_graphics());
			return shape;
		}
		var _g = 0;
		var _g1 = this.commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 1:
				var alpha = command[3];
				var color = command[2];
				graphics.beginFill(color,alpha);
				break;
			case 0:
				var smooth = command[5];
				var repeat = command[4];
				var matrix = command[3];
				var bitmapID = command[2];
				var bitmapSymbol = swf.symbols.h[bitmapID];
				var bitmap = swf.library.getImage(bitmapSymbol.path);
				if(bitmap != null) graphics.beginBitmapFill(openfl_display_BitmapData.fromImage(bitmap),matrix,repeat,smooth);
				break;
			case 2:
				var focalPointRatio = command[9];
				var interpolationMethod = command[8];
				var spreadMethod = command[7];
				var matrix1 = command[6];
				var ratios = command[5];
				var alphas = command[4];
				var colors = command[3];
				var fillType = command[2];
				graphics.beginGradientFill(fillType,colors,alphas,ratios,matrix1,spreadMethod,interpolationMethod,focalPointRatio);
				break;
			case 3:
				var anchorY = command[5];
				var anchorX = command[4];
				var controlY = command[3];
				var controlX = command[2];
				graphics.curveTo(controlX,controlY,anchorX,anchorY);
				break;
			case 4:
				graphics.endFill();
				break;
			case 5:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color1 = command[3];
				var thickness = command[2];
				if(thickness != null) graphics.lineStyle(thickness,color1,alpha1,pixelHinting,scaleMode,caps,joints,miterLimit); else graphics.lineStyle();
				break;
			case 6:
				var y = command[3];
				var x = command[2];
				graphics.lineTo(x,y);
				break;
			case 7:
				var y1 = command[3];
				var x1 = command[2];
				graphics.moveTo(x1,y1);
				break;
			}
		}
		this.commands = null;
		this.rendered = new openfl_display_Shape();
		this.rendered.get_graphics().copyFrom(shape.get_graphics());
		return shape;
	}
	,__class__: openfl__$internal_symbols_ShapeSymbol
});
var openfl__$internal_symbols_SpriteSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
	this.frames = [];
};
$hxClasses["openfl._internal.symbols.SpriteSymbol"] = openfl__$internal_symbols_SpriteSymbol;
openfl__$internal_symbols_SpriteSymbol.__name__ = ["openfl","_internal","symbols","SpriteSymbol"];
openfl__$internal_symbols_SpriteSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_SpriteSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	frames: null
	,__createObject: function(swf) {
		var movieClip = null;
		openfl_display_MovieClip.__initSWF = swf;
		openfl_display_MovieClip.__initSymbol = this;
		if(this.className != null) {
			var symbolType = Type.resolveClass(this.className);
			if(symbolType != null) movieClip = Type.createInstance(symbolType,[]); else {
			}
		}
		if(movieClip == null) movieClip = new openfl_display_MovieClip();
		return movieClip;
	}
	,__class__: openfl__$internal_symbols_SpriteSymbol
});
var openfl__$internal_symbols_StaticTextSymbol = function() {
	openfl__$internal_symbols_SWFSymbol.call(this);
};
$hxClasses["openfl._internal.symbols.StaticTextSymbol"] = openfl__$internal_symbols_StaticTextSymbol;
openfl__$internal_symbols_StaticTextSymbol.__name__ = ["openfl","_internal","symbols","StaticTextSymbol"];
openfl__$internal_symbols_StaticTextSymbol.__super__ = openfl__$internal_symbols_SWFSymbol;
openfl__$internal_symbols_StaticTextSymbol.prototype = $extend(openfl__$internal_symbols_SWFSymbol.prototype,{
	matrix: null
	,records: null
	,rendered: null
	,__createObject: function(swf) {
		var shape = new openfl_display_Shape();
		var graphics = shape.get_graphics();
		if(this.rendered != null) {
			graphics.copyFrom(this.rendered.get_graphics());
			return shape;
		}
		if(this.records != null) {
			var font = null;
			var color = 16777215;
			var offsetX = this.matrix.tx;
			var offsetY = this.matrix.ty;
			var _g = 0;
			var _g1 = this.records;
			while(_g < _g1.length) {
				var record = _g1[_g];
				++_g;
				if(record.fontID != null) font = swf.symbols.h[record.fontID];
				if(record.offsetX != null) offsetX = this.matrix.tx + record.offsetX * 0.05;
				if(record.offsetY != null) offsetY = this.matrix.ty + record.offsetY * 0.05;
				if(record.color != null) color = record.color;
				if(font != null) {
					var scale = record.fontHeight / 1024 * 0.05;
					var index;
					var code;
					var _g3 = 0;
					var _g2 = record.glyphs.length;
					while(_g3 < _g2) {
						var i = _g3++;
						index = record.glyphs[i];
						var _g4 = 0;
						var _g5 = font.glyphs[index];
						while(_g4 < _g5.length) {
							var command = _g5[_g4];
							++_g4;
							switch(command[1]) {
							case 1:
								var alpha = command[3];
								graphics.beginFill(color & 16777215,(color >> 24 & 255) / 255);
								break;
							case 3:
								var anchorY = command[5];
								var anchorX = command[4];
								var controlY = command[3];
								var controlX = command[2];
								graphics.curveTo(controlX * scale + offsetX,controlY * scale + offsetY,anchorX * scale + offsetX,anchorY * scale + offsetY);
								break;
							case 4:
								graphics.endFill();
								break;
							case 5:
								var miterLimit = command[9];
								var joints = command[8];
								var caps = command[7];
								var scaleMode = command[6];
								var pixelHinting = command[5];
								var alpha1 = command[4];
								var color1 = command[3];
								var thickness = command[2];
								if(thickness != null) graphics.lineStyle(thickness,color1,alpha1,pixelHinting,scaleMode,caps,joints,miterLimit); else graphics.lineStyle();
								break;
							case 6:
								var y = command[3];
								var x = command[2];
								graphics.lineTo(x * scale + offsetX,y * scale + offsetY);
								break;
							case 7:
								var y1 = command[3];
								var x1 = command[2];
								graphics.moveTo(x1 * scale + offsetX,y1 * scale + offsetY);
								break;
							default:
							}
						}
						offsetX += record.advances[i] * 0.05;
					}
				}
			}
		}
		this.records = null;
		this.rendered = new openfl_display_Shape();
		this.rendered.get_graphics().copyFrom(shape.get_graphics());
		return shape;
	}
	,__class__: openfl__$internal_symbols_StaticTextSymbol
});
var openfl__$internal_symbols_StaticTextRecord = function() {
};
$hxClasses["openfl._internal.symbols.StaticTextRecord"] = openfl__$internal_symbols_StaticTextRecord;
openfl__$internal_symbols_StaticTextRecord.__name__ = ["openfl","_internal","symbols","StaticTextRecord"];
openfl__$internal_symbols_StaticTextRecord.prototype = {
	advances: null
	,color: null
	,fontHeight: null
	,fontID: null
	,glyphs: null
	,offsetX: null
	,offsetY: null
	,__class__: openfl__$internal_symbols_StaticTextRecord
};
var openfl__$internal_text_TextEngine = function(textField) {
	this.textField = textField;
	this.width = 100;
	this.height = 100;
	this.text = "";
	this.bounds = new openfl_geom_Rectangle(0,0,0,0);
	this.type = 0;
	this.autoSize = 2;
	this.embedFonts = false;
	this.selectable = true;
	this.borderColor = 0;
	this.border = false;
	this.backgroundColor = 16777215;
	this.background = false;
	this.gridFitType = 1;
	this.maxChars = 0;
	this.multiline = false;
	this.sharpness = 0;
	this.scrollH = 0;
	this.scrollV = 1;
	this.wordWrap = false;
	this.lineAscents = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	this.lineBreaks = openfl__$Vector_Vector_$Impl_$.toIntVector(null);
	this.lineDescents = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	this.lineLeadings = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	this.lineHeights = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	this.lineWidths = openfl__$Vector_Vector_$Impl_$.toFloatVector(null);
	this.layoutGroups = openfl__$Vector_Vector_$Impl_$.toObjectVector(null);
	this.textFormatRanges = openfl__$Vector_Vector_$Impl_$.toObjectVector(null);
	openfl__$internal_text_TextEngine.__canvas = window.document.createElement("canvas");
	openfl__$internal_text_TextEngine.__context = openfl__$internal_text_TextEngine.__canvas.getContext("2d");
};
$hxClasses["openfl._internal.text.TextEngine"] = openfl__$internal_text_TextEngine;
openfl__$internal_text_TextEngine.__name__ = ["openfl","_internal","text","TextEngine"];
openfl__$internal_text_TextEngine.getFormatHeight = function(format) {
	var ascent;
	var descent;
	var leading;
	openfl__$internal_text_TextEngine.__context.font = openfl__$internal_text_TextEngine.getFont(format);
	ascent = format.size;
	descent = format.size * 0.185;
	leading = format.leading;
	return ascent + descent + leading;
};
openfl__$internal_text_TextEngine.getFont = function(format) {
	var font;
	if(format.italic) font = "italic "; else font = "normal ";
	font += "normal ";
	if(format.bold) font += "bold "; else font += "normal ";
	font += format.size + "px";
	font += "/" + (format.size + format.leading + 6) + "px ";
	font += "" + (function($this) {
		var $r;
		var _g = format.font;
		$r = (function($this) {
			var $r;
			switch(_g) {
			case "_sans":
				$r = "sans-serif";
				break;
			case "_serif":
				$r = "serif";
				break;
			case "_typewriter":
				$r = "monospace";
				break;
			default:
				$r = "'" + format.font + "'";
			}
			return $r;
		}($this));
		return $r;
	}(this));
	return font;
};
openfl__$internal_text_TextEngine.prototype = {
	antiAliasType: null
	,autoSize: null
	,background: null
	,backgroundColor: null
	,border: null
	,borderColor: null
	,bottomScrollV: null
	,bounds: null
	,embedFonts: null
	,gridFitType: null
	,height: null
	,layoutGroups: null
	,lineAscents: null
	,lineBreaks: null
	,lineDescents: null
	,lineLeadings: null
	,lineHeights: null
	,lineWidths: null
	,maxChars: null
	,maxScrollH: null
	,maxScrollV: null
	,multiline: null
	,numLines: null
	,scrollH: null
	,scrollV: null
	,selectable: null
	,sharpness: null
	,text: null
	,textHeight: null
	,textFormatRanges: null
	,textWidth: null
	,type: null
	,width: null
	,wordWrap: null
	,textField: null
	,__hasFocus: null
	,__useIntAdvances: null
	,getBounds: function() {
		var padding;
		if(this.border) padding = 1; else padding = 0;
		this.bounds.width = this.width + padding;
		this.bounds.height = this.height + padding;
	}
	,getLineBreakIndex: function(startIndex) {
		if(startIndex == null) startIndex = 0;
		var cr = this.text.indexOf("\n",startIndex);
		var lf = this.text.indexOf("\r",startIndex);
		if(cr == -1) return lf;
		if(lf == -1) return cr;
		if(cr < lf) return cr; else return lf;
	}
	,getLineMeasurements: function() {
		this.lineAscents.set_length(0);
		this.lineDescents.set_length(0);
		this.lineLeadings.set_length(0);
		this.lineHeights.set_length(0);
		this.lineWidths.set_length(0);
		var currentLineAscent = 0.0;
		var currentLineDescent = 0.0;
		var currentLineLeading = null;
		var currentLineHeight = 0.0;
		var currentLineWidth = 0.0;
		this.textWidth = 0;
		this.textHeight = 0;
		this.numLines = 1;
		this.bottomScrollV = 0;
		this.maxScrollH = 0;
		var _g = 0;
		var _g1 = this.layoutGroups;
		while(_g < _g1.get_length()) {
			var group = _g1.get(_g);
			++_g;
			while(group.lineIndex > this.numLines - 1) {
				this.lineAscents.push(currentLineAscent);
				this.lineDescents.push(currentLineDescent);
				this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
				this.lineHeights.push(currentLineHeight);
				this.lineWidths.push(currentLineWidth);
				currentLineAscent = 0;
				currentLineDescent = 0;
				currentLineLeading = null;
				currentLineHeight = 0;
				currentLineWidth = 0;
				this.numLines++;
				if(this.textHeight <= this.height - 2) this.bottomScrollV++;
			}
			currentLineAscent = Math.max(currentLineAscent,group.ascent);
			currentLineDescent = Math.max(currentLineDescent,group.descent);
			if(currentLineLeading == null) currentLineLeading = group.leading; else currentLineLeading = Std["int"](Math.max(currentLineLeading,group.leading));
			currentLineHeight = Math.max(currentLineHeight,group.height);
			currentLineWidth = group.offsetX - 2 + group.width;
			if(currentLineWidth > this.textWidth) this.textWidth = currentLineWidth;
			this.textHeight = group.offsetY - 2 + group.ascent + group.descent;
		}
		this.lineAscents.push(currentLineAscent);
		this.lineDescents.push(currentLineDescent);
		this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
		this.lineHeights.push(currentLineHeight);
		this.lineWidths.push(currentLineWidth);
		if(this.numLines == 1) {
			this.bottomScrollV = 1;
			if(currentLineLeading > 0) this.textHeight += currentLineLeading;
		} else if(this.textHeight <= this.height - 2) this.bottomScrollV++;
		if(this.autoSize != 2) {
			var _g2 = this.autoSize;
			switch(_g2) {
			case 1:case 3:case 0:
				if(!this.wordWrap) this.width = this.textWidth + 4;
				this.height = this.textHeight + 4;
				this.bottomScrollV = this.numLines;
				break;
			default:
			}
		}
		if(this.textWidth > this.width - 4) this.maxScrollH = this.textWidth - this.width + 4 | 0; else this.maxScrollH = 0;
		this.maxScrollV = this.numLines - this.bottomScrollV + 1;
	}
	,getLayoutGroups: function() {
		var _g = this;
		this.layoutGroups.set_length(0);
		var rangeIndex = -1;
		var formatRange = null;
		var font = null;
		var currentFormat = openfl_text_TextField.__defaultTextFormat.clone();
		var leading = 0;
		var ascent = 0.0;
		var descent = 0.0;
		var layoutGroup;
		var advances;
		var widthValue;
		var heightValue = 0.0;
		var spaceWidth = 0.0;
		var previousSpaceIndex = 0;
		var spaceIndex = this.text.indexOf(" ");
		var breakIndex = this.getLineBreakIndex();
		var marginRight = 0.0;
		var offsetX = 2.0;
		var offsetY = 2.0;
		var textIndex = 0;
		var lineIndex = 0;
		var lineFormat = null;
		if(rangeIndex < _g.textFormatRanges.get_length() - 1) {
			rangeIndex++;
			formatRange = _g.textFormatRanges.get(rangeIndex);
			currentFormat.__merge(formatRange.format);
			openfl__$internal_text_TextEngine.__context.font = openfl__$internal_text_TextEngine.getFont(currentFormat);
			ascent = currentFormat.size;
			descent = currentFormat.size * 0.185;
			leading = currentFormat.leading;
			heightValue = ascent + descent + leading;
			if(spaceIndex > -1) spaceWidth = openfl__$internal_text_TextEngine.__context.measureText(" ").width;
		}
		lineFormat = formatRange.format;
		var wrap;
		var maxLoops = this.text.length;
		if(this.multiline) maxLoops++;
		while(textIndex < maxLoops) if(breakIndex > -1 && (spaceIndex == -1 || breakIndex < spaceIndex) && formatRange.end >= breakIndex) {
			layoutGroup = new openfl__$internal_text_TextLayoutGroup(formatRange.format,textIndex,breakIndex);
			var text = this.text;
			var advances1 = [];
			if(_g.__useIntAdvances == null) _g.__useIntAdvances = new EReg("Trident/7.0","").match(window.navigator.userAgent);
			if(_g.__useIntAdvances) {
				var previousWidth = 0.0;
				var width;
				var _g1 = textIndex;
				while(_g1 < breakIndex) {
					var i = _g1++;
					width = openfl__$internal_text_TextEngine.__context.measureText(text.substring(textIndex,i + 1)).width;
					advances1.push(width - previousWidth);
					previousWidth = width;
				}
			} else {
				var _g11 = textIndex;
				while(_g11 < breakIndex) {
					var i1 = _g11++;
					advances1.push(openfl__$internal_text_TextEngine.__context.measureText(text.charAt(i1)).width);
				}
			}
			layoutGroup.advances = advances1;
			layoutGroup.offsetX = offsetX;
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetY = offsetY;
			var advances2 = layoutGroup.advances;
			var width1 = 0.0;
			var _g2 = 0;
			while(_g2 < advances2.length) {
				var advance = advances2[_g2];
				++_g2;
				width1 += advance;
			}
			layoutGroup.width = width1;
			layoutGroup.height = heightValue;
			this.layoutGroups.push(layoutGroup);
			offsetY += heightValue;
			offsetX = 2;
			if(this.wordWrap && layoutGroup.offsetX + layoutGroup.width > this.width - 2) {
				layoutGroup.offsetY = offsetY;
				layoutGroup.offsetX = offsetX;
				layoutGroup.lineIndex++;
				offsetY += heightValue;
				lineIndex++;
			}
			if(formatRange.end == breakIndex) {
				if(rangeIndex < _g.textFormatRanges.get_length() - 1) {
					rangeIndex++;
					formatRange = _g.textFormatRanges.get(rangeIndex);
					currentFormat.__merge(formatRange.format);
					openfl__$internal_text_TextEngine.__context.font = openfl__$internal_text_TextEngine.getFont(currentFormat);
					ascent = currentFormat.size;
					descent = currentFormat.size * 0.185;
					leading = currentFormat.leading;
					heightValue = ascent + descent + leading;
					if(spaceIndex > -1) spaceWidth = openfl__$internal_text_TextEngine.__context.measureText(" ").width;
				}
				lineFormat = formatRange.format;
			}
			textIndex = breakIndex + 1;
			breakIndex = this.getLineBreakIndex(textIndex);
			lineIndex++;
		} else if(formatRange.end >= spaceIndex && spaceIndex > -1 && textIndex < formatRange.end) {
			layoutGroup = null;
			wrap = false;
			while(true) {
				if(textIndex == formatRange.end) break;
				if(spaceIndex == -1) spaceIndex = formatRange.end;
				var text1 = this.text;
				var advances3 = [];
				if(_g.__useIntAdvances == null) _g.__useIntAdvances = new EReg("Trident/7.0","").match(window.navigator.userAgent);
				if(_g.__useIntAdvances) {
					var previousWidth1 = 0.0;
					var width2;
					var _g12 = textIndex;
					while(_g12 < spaceIndex) {
						var i2 = _g12++;
						width2 = openfl__$internal_text_TextEngine.__context.measureText(text1.substring(textIndex,i2 + 1)).width;
						advances3.push(width2 - previousWidth1);
						previousWidth1 = width2;
					}
				} else {
					var _g13 = textIndex;
					while(_g13 < spaceIndex) {
						var i3 = _g13++;
						advances3.push(openfl__$internal_text_TextEngine.__context.measureText(text1.charAt(i3)).width);
					}
				}
				advances = advances3;
				var width3 = 0.0;
				var _g3 = 0;
				while(_g3 < advances.length) {
					var advance1 = advances[_g3];
					++_g3;
					width3 += advance1;
				}
				widthValue = width3;
				if(this.wordWrap) {
					if(offsetX + widthValue > this.width - 2) wrap = true;
				}
				if(wrap) {
					offsetY += heightValue;
					var i4 = this.layoutGroups.get_length() - 1;
					var offsetCount = 0;
					while(true) {
						layoutGroup = this.layoutGroups.get(i4);
						if(i4 > 0 && layoutGroup.startIndex > previousSpaceIndex) offsetCount++; else break;
						i4--;
					}
					lineIndex++;
					offsetX = 2;
					if(offsetCount > 0) {
						var bumpX;
						bumpX = ((function($this) {
							var $r;
							var index = $this.layoutGroups.get_length() - offsetCount;
							$r = $this.layoutGroups.get(index);
							return $r;
						}(this))).offsetX;
						var _g14 = this.layoutGroups.get_length() - offsetCount;
						var _g4 = this.layoutGroups.get_length();
						while(_g14 < _g4) {
							var i5 = _g14++;
							layoutGroup = this.layoutGroups.get(i5);
							layoutGroup.offsetX -= bumpX;
							layoutGroup.offsetY = offsetY;
							layoutGroup.lineIndex = lineIndex;
							offsetX += layoutGroup.width;
						}
					}
					layoutGroup = new openfl__$internal_text_TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
					layoutGroup.advances = advances;
					layoutGroup.offsetX = offsetX;
					layoutGroup.ascent = ascent;
					layoutGroup.descent = descent;
					layoutGroup.leading = leading;
					layoutGroup.lineIndex = lineIndex;
					layoutGroup.offsetY = offsetY;
					layoutGroup.width = widthValue;
					layoutGroup.height = heightValue;
					this.layoutGroups.push(layoutGroup);
					offsetX = widthValue + spaceWidth;
					marginRight = spaceWidth;
					wrap = false;
				} else {
					if(layoutGroup != null && textIndex == spaceIndex) {
						if(formatRange.format.align != 2) layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances.push(spaceWidth);
						marginRight += spaceWidth;
					} else if(layoutGroup == null || lineFormat.align == 2) {
						layoutGroup = new openfl__$internal_text_TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
						layoutGroup.advances = advances;
						layoutGroup.offsetX = offsetX;
						layoutGroup.ascent = ascent;
						layoutGroup.descent = descent;
						layoutGroup.leading = leading;
						layoutGroup.lineIndex = lineIndex;
						layoutGroup.offsetY = offsetY;
						layoutGroup.width = widthValue;
						layoutGroup.height = heightValue;
						this.layoutGroups.push(layoutGroup);
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					} else {
						layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances = layoutGroup.advances.concat(advances);
						layoutGroup.width += marginRight + widthValue;
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					}
					offsetX += widthValue + spaceWidth;
				}
				textIndex = spaceIndex + 1;
				previousSpaceIndex = spaceIndex;
				spaceIndex = this.text.indexOf(" ",previousSpaceIndex + 1);
				if(formatRange.end <= previousSpaceIndex) {
					layoutGroup = null;
					if(rangeIndex < _g.textFormatRanges.get_length() - 1) {
						rangeIndex++;
						formatRange = _g.textFormatRanges.get(rangeIndex);
						currentFormat.__merge(formatRange.format);
						openfl__$internal_text_TextEngine.__context.font = openfl__$internal_text_TextEngine.getFont(currentFormat);
						ascent = currentFormat.size;
						descent = currentFormat.size * 0.185;
						leading = currentFormat.leading;
						heightValue = ascent + descent + leading;
						if(spaceIndex > -1) spaceWidth = openfl__$internal_text_TextEngine.__context.measureText(" ").width;
					}
				}
				if(spaceIndex > breakIndex && breakIndex > -1 || textIndex > this.text.length || spaceIndex > formatRange.end || spaceIndex == -1 && breakIndex > -1) {
					if(spaceIndex > formatRange.end) textIndex--;
					break;
				}
			}
		} else {
			if(textIndex > formatRange.end) break; else if(textIndex < formatRange.end || textIndex == this.text.length) {
				layoutGroup = new openfl__$internal_text_TextLayoutGroup(formatRange.format,textIndex,formatRange.end);
				var text2 = this.text;
				var endIndex = formatRange.end;
				var advances4 = [];
				if(_g.__useIntAdvances == null) _g.__useIntAdvances = new EReg("Trident/7.0","").match(window.navigator.userAgent);
				if(_g.__useIntAdvances) {
					var previousWidth2 = 0.0;
					var width4;
					var _g15 = textIndex;
					while(_g15 < endIndex) {
						var i6 = _g15++;
						width4 = openfl__$internal_text_TextEngine.__context.measureText(text2.substring(textIndex,i6 + 1)).width;
						advances4.push(width4 - previousWidth2);
						previousWidth2 = width4;
					}
				} else {
					var _g16 = textIndex;
					while(_g16 < endIndex) {
						var i7 = _g16++;
						advances4.push(openfl__$internal_text_TextEngine.__context.measureText(text2.charAt(i7)).width);
					}
				}
				layoutGroup.advances = advances4;
				layoutGroup.offsetX = offsetX;
				layoutGroup.ascent = ascent;
				layoutGroup.descent = descent;
				layoutGroup.leading = leading;
				layoutGroup.lineIndex = lineIndex;
				layoutGroup.offsetY = offsetY;
				var advances5 = layoutGroup.advances;
				var width5 = 0.0;
				var _g5 = 0;
				while(_g5 < advances5.length) {
					var advance2 = advances5[_g5];
					++_g5;
					width5 += advance2;
				}
				layoutGroup.width = width5;
				layoutGroup.height = heightValue;
				this.layoutGroups.push(layoutGroup);
				offsetX += layoutGroup.width;
				textIndex = formatRange.end;
			}
			if(rangeIndex < _g.textFormatRanges.get_length() - 1) {
				rangeIndex++;
				formatRange = _g.textFormatRanges.get(rangeIndex);
				currentFormat.__merge(formatRange.format);
				openfl__$internal_text_TextEngine.__context.font = openfl__$internal_text_TextEngine.getFont(currentFormat);
				ascent = currentFormat.size;
				descent = currentFormat.size * 0.185;
				leading = currentFormat.leading;
				heightValue = ascent + descent + leading;
				if(spaceIndex > -1) spaceWidth = openfl__$internal_text_TextEngine.__context.measureText(" ").width;
			}
			if(textIndex == formatRange.end) {
				textIndex++;
				break;
			}
		}
	}
	,setTextAlignment: function() {
		var lineIndex = -1;
		var offsetX = 0.0;
		var group;
		var lineLength;
		var _g1 = 0;
		var _g = this.layoutGroups.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			group = this.layoutGroups.get(i);
			if(group.lineIndex != lineIndex) {
				lineIndex = group.lineIndex;
				var _g2 = group.format.align;
				switch(_g2) {
				case 0:
					if(this.lineWidths.get(lineIndex) < this.width - 4) offsetX = Math.round((this.width - 4 - this.lineWidths.get(lineIndex)) / 2); else offsetX = 0;
					break;
				case 4:
					if(this.lineWidths.get(lineIndex) < this.width - 4) offsetX = Math.round(this.width - 4 - this.lineWidths.get(lineIndex)); else offsetX = 0;
					break;
				case 2:
					if(this.lineWidths.get(lineIndex) < this.width - 4) {
						lineLength = 1;
						var _g4 = i + 1;
						var _g3 = this.layoutGroups.get_length();
						while(_g4 < _g3) {
							var j = _g4++;
							if(this.layoutGroups.get(j).lineIndex == lineIndex) lineLength++; else break;
						}
						if(lineLength > 1) {
							group = this.layoutGroups.get(i + lineLength - 1);
							var endChar = this.text.charAt(group.endIndex);
							if(group.endIndex < this.text.length && endChar != "\n" && endChar != "\r") {
								offsetX = (this.width - 4 - this.lineWidths.get(lineIndex)) / (lineLength - 1);
								var _g31 = 1;
								while(_g31 < lineLength) {
									var j1 = _g31++;
									this.layoutGroups.get(i + j1).offsetX += offsetX * j1;
								}
							}
						}
					}
					offsetX = 0;
					break;
				default:
					offsetX = 0;
				}
			}
			if(offsetX > 0) group.offsetX += offsetX;
		}
	}
	,update: function() {
		if(this.text == null || !this.multiline && StringTools.trim(this.text) == "" || this.textFormatRanges.get_length() == 0) {
			this.lineAscents.set_length(0);
			this.lineBreaks.set_length(0);
			this.lineDescents.set_length(0);
			this.lineLeadings.set_length(0);
			this.lineHeights.set_length(0);
			this.lineWidths.set_length(0);
			this.layoutGroups.set_length(0);
			this.textWidth = 0;
			this.textHeight = 0;
			this.numLines = 1;
			this.maxScrollH = 0;
			this.maxScrollV = 1;
			this.bottomScrollV = 1;
		} else {
			this.getLayoutGroups();
			this.getLineMeasurements();
			this.setTextAlignment();
		}
		this.getBounds();
	}
	,__class__: openfl__$internal_text_TextEngine
};
var openfl__$internal_text_TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["openfl._internal.text.TextFormatRange"] = openfl__$internal_text_TextFormatRange;
openfl__$internal_text_TextFormatRange.__name__ = ["openfl","_internal","text","TextFormatRange"];
openfl__$internal_text_TextFormatRange.prototype = {
	end: null
	,format: null
	,start: null
	,__class__: openfl__$internal_text_TextFormatRange
};
var openfl__$internal_text_TextLayoutGroup = function(format,startIndex,endIndex) {
	this.format = format;
	this.startIndex = startIndex;
	this.endIndex = endIndex;
};
$hxClasses["openfl._internal.text.TextLayoutGroup"] = openfl__$internal_text_TextLayoutGroup;
openfl__$internal_text_TextLayoutGroup.__name__ = ["openfl","_internal","text","TextLayoutGroup"];
openfl__$internal_text_TextLayoutGroup.prototype = {
	advances: null
	,ascent: null
	,descent: null
	,endIndex: null
	,format: null
	,height: null
	,leading: null
	,lineIndex: null
	,offsetX: null
	,offsetY: null
	,startIndex: null
	,width: null
	,__class__: openfl__$internal_text_TextLayoutGroup
};
var openfl__$internal_timeline_Frame = function() {
	this.objects = [];
};
$hxClasses["openfl._internal.timeline.Frame"] = openfl__$internal_timeline_Frame;
openfl__$internal_timeline_Frame.__name__ = ["openfl","_internal","timeline","Frame"];
openfl__$internal_timeline_Frame.prototype = {
	label: null
	,objects: null
	,__class__: openfl__$internal_timeline_Frame
};
var openfl__$internal_timeline_FrameObject = function() { };
$hxClasses["openfl._internal.timeline.FrameObject"] = openfl__$internal_timeline_FrameObject;
openfl__$internal_timeline_FrameObject.__name__ = ["openfl","_internal","timeline","FrameObject"];
openfl__$internal_timeline_FrameObject.prototype = {
	clipDepth: null
	,colorTransform: null
	,depth: null
	,filters: null
	,id: null
	,matrix: null
	,name: null
	,symbol: null
	,type: null
	,visible: null
	,__class__: openfl__$internal_timeline_FrameObject
};
var openfl__$internal_timeline_FrameObjectType = $hxClasses["openfl._internal.timeline.FrameObjectType"] = { __ename__ : ["openfl","_internal","timeline","FrameObjectType"], __constructs__ : ["CREATE","UPDATE","DESTROY"] };
openfl__$internal_timeline_FrameObjectType.CREATE = ["CREATE",0];
openfl__$internal_timeline_FrameObjectType.CREATE.toString = $estr;
openfl__$internal_timeline_FrameObjectType.CREATE.__enum__ = openfl__$internal_timeline_FrameObjectType;
openfl__$internal_timeline_FrameObjectType.UPDATE = ["UPDATE",1];
openfl__$internal_timeline_FrameObjectType.UPDATE.toString = $estr;
openfl__$internal_timeline_FrameObjectType.UPDATE.__enum__ = openfl__$internal_timeline_FrameObjectType;
openfl__$internal_timeline_FrameObjectType.DESTROY = ["DESTROY",2];
openfl__$internal_timeline_FrameObjectType.DESTROY.toString = $estr;
openfl__$internal_timeline_FrameObjectType.DESTROY.__enum__ = openfl__$internal_timeline_FrameObjectType;
var openfl_display_Application = function() {
	lime_app_Application.call(this);
	if(openfl_Lib.application == null) openfl_Lib.application = this;
};
$hxClasses["openfl.display.Application"] = openfl_display_Application;
openfl_display_Application.__name__ = ["openfl","display","Application"];
openfl_display_Application.__super__ = lime_app_Application;
openfl_display_Application.prototype = $extend(lime_app_Application.prototype,{
	create: function(config) {
		this.config = config;
		this.backend.create(config);
		openfl_Lib.current.__loaderInfo = openfl_display_LoaderInfo.create(null);
		openfl_Lib.current.__loaderInfo.content = openfl_Lib.current;
		if(config != null) {
			if(Object.prototype.hasOwnProperty.call(config,"fps")) this.backend.setFrameRate(config.fps);
			if(Object.prototype.hasOwnProperty.call(config,"windows")) {
				var _g = 0;
				var _g1 = config.windows;
				while(_g < _g1.length) {
					var windowConfig = _g1[_g];
					++_g;
					var $window = new openfl_display_Window(windowConfig);
					this.createWindow($window);
					break;
				}
			}
			if(this.__preloader == null || this.__preloader.complete) this.onPreloadComplete();
		}
	}
	,__class__: openfl_display_Application
});
var openfl_display_Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl_display_DisplayObject.call(this);
	this.set_bitmapData(bitmapData);
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = 1;
};
$hxClasses["openfl.display.Bitmap"] = openfl_display_Bitmap;
openfl_display_Bitmap.__name__ = ["openfl","display","Bitmap"];
openfl_display_Bitmap.__super__ = openfl_display_DisplayObject;
openfl_display_Bitmap.prototype = $extend(openfl_display_DisplayObject.prototype,{
	bitmapData: null
	,pixelSnapping: null
	,smoothing: null
	,__image: null
	,__imageVersion: null
	,__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = openfl_geom_Rectangle.__temp;
			bounds.setTo(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds.__transform(bounds,matrix);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || this.bitmapData == null) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) {
			if(stack != null && !interactiveOnly) stack.push(hitObject);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.bitmapData == null) return false;
		this.__getRenderTransform();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl__$internal_renderer_cairo_CairoBitmap.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		renderSession.cairo.rectangle(0,0,this.get_width(),this.get_height());
	}
	,__renderCanvas: function(renderSession) {
		openfl__$internal_renderer_canvas_CanvasBitmap.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__isValid) {
			renderSession.maskManager.pushObject(this);
			if(this.bitmapData.image.buffer.__srcImage != null) openfl__$internal_renderer_dom_DOMBitmap.renderImage(this,renderSession); else openfl__$internal_renderer_dom_DOMBitmap.renderCanvas(this,renderSession);
			renderSession.maskManager.popObject(this);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderGL: function(renderSession) {
		openfl__$internal_renderer_opengl_GLBitmap.render(this,renderSession);
	}
	,__updateMask: function(maskGraphics) {
		if(this.bitmapData == null) return;
		maskGraphics.__commands.overrideMatrix(this.__worldTransform);
		maskGraphics.beginFill(0);
		maskGraphics.drawRect(0,0,this.bitmapData.width,this.bitmapData.height);
		if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl_geom_Rectangle();
		this.__getBounds(maskGraphics.__bounds,openfl_geom_Matrix.__identity);
		openfl_display_DisplayObject.prototype.__updateMask.call(this,maskGraphics);
	}
	,set_bitmapData: function(value) {
		this.bitmapData = value;
		this.smoothing = false;
		if(this.__filters != null && this.__filters.length > 0) {
		}
		return this.bitmapData;
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * Math.abs(this.get_scaleY());
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) this.set_scaleY(value / this.bitmapData.height);
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * Math.abs(this.get_scaleX());
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) this.set_scaleX(value / this.bitmapData.width);
			return value;
		}
		return 0;
	}
	,__class__: openfl_display_Bitmap
	,__properties__: $extend(openfl_display_DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
var openfl_display_BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width == null) width = 0; else width = width;
	if(height == null) height = 0; else height = height;
	if(width < 0) width = 0; else width = width;
	if(height < 0) height = 0; else height = height;
	this.width = width;
	this.height = height;
	this.rect = new openfl_geom_Rectangle(0,0,width,height);
	if(width > 0 && height > 0) {
		if(transparent) {
			if((fillColor & -16777216) == 0) fillColor = 0;
		} else fillColor = -16777216 | fillColor & 16777215;
		fillColor = fillColor << 8 | fillColor >> 24 & 255;
		this.image = new lime_graphics_Image(null,0,0,width,height,fillColor);
		this.image.set_transparent(transparent);
		this.__isValid = true;
		this.readable = true;
	}
	this.__worldTransform = new openfl_geom_Matrix();
	this.__worldColorTransform = new openfl_geom_ColorTransform();
};
$hxClasses["openfl.display.BitmapData"] = openfl_display_BitmapData;
openfl_display_BitmapData.__name__ = ["openfl","display","BitmapData"];
openfl_display_BitmapData.__interfaces__ = [openfl_display_IBitmapDrawable];
openfl_display_BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	if(canvas == null) return null;
	var bitmapData = new openfl_display_BitmapData(0,0,transparent,0);
	bitmapData.__fromImage(lime_graphics_Image.fromCanvas(canvas));
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl_display_BitmapData.fromFile = function(path,onload,onerror) {
	var bitmapData = new openfl_display_BitmapData(0,0,true,0);
	bitmapData.__fromFile(path,onload,onerror);
	return bitmapData;
};
openfl_display_BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	if(image == null || image.buffer == null) return null;
	var bitmapData = new openfl_display_BitmapData(0,0,transparent,0);
	bitmapData.__fromImage(image);
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl_display_BitmapData.fromTexture = function(texture) {
	if(texture == null) return null;
	var bitmapData = new openfl_display_BitmapData(texture.__width,texture.__height,true,0);
	bitmapData.readable = false;
	bitmapData.__texture = texture.__textureID;
	bitmapData.image = null;
	return bitmapData;
};
openfl_display_BitmapData.prototype = {
	height: null
	,image: null
	,readable: null
	,rect: null
	,transparent: null
	,width: null
	,__buffer: null
	,__bufferAlpha: null
	,__bufferData: null
	,__framebuffer: null
	,__isValid: null
	,__surface: null
	,__texture: null
	,__textureVersion: null
	,__worldColorTransform: null
	,__worldTransform: null
	,getBuffer: function(gl,alpha) {
		if(this.__buffer == null) {
			var uvWidth = 1;
			var uvHeight = 1;
			var array = [this.width,this.height,0,uvWidth,uvHeight,alpha,0,this.height,0,0,uvHeight,alpha,this.width,0,0,uvWidth,0,alpha,0,0,0,0,0,alpha];
			var this1;
			if(array != null) this1 = new Float32Array(array); else this1 = null;
			this.__bufferData = this1;
			this.__bufferAlpha = alpha;
			this.__buffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER,this.__buffer);
			gl.bufferData(gl.ARRAY_BUFFER,this.__bufferData,gl.STATIC_DRAW);
		} else if(this.__bufferAlpha != alpha) {
			this.__bufferData[5] = alpha;
			this.__bufferData[11] = alpha;
			this.__bufferData[17] = alpha;
			this.__bufferData[23] = alpha;
			this.__bufferAlpha = alpha;
			gl.bindBuffer(gl.ARRAY_BUFFER,this.__buffer);
			gl.bufferData(gl.ARRAY_BUFFER,this.__bufferData,gl.STATIC_DRAW);
		}
		return this.__buffer;
	}
	,getSurface: function() {
		if(!this.readable) return null;
		if(this.__surface == null) this.__surface = lime_graphics_cairo__$CairoImageSurface_CairoImageSurface_$Impl_$.fromImage(this.image);
		return this.__surface;
	}
	,getTexture: function(gl) {
		if(!this.__isValid) return null;
		if(this.__texture == null) {
			this.__texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
			this.__textureVersion = -1;
		}
		lime_graphics_utils_ImageCanvasUtil.sync(this.image,false);
		if(this.image != null && this.image.version != this.__textureVersion) {
			var internalFormat;
			var format;
			if(this.__surface != null) lime_graphics_cairo__$CairoSurface_CairoSurface_$Impl_$.flush(this.__surface);
			if(this.image.buffer.bitsPerPixel == 1) {
				internalFormat = gl.ALPHA;
				format = gl.ALPHA;
			} else {
				internalFormat = gl.RGBA;
				format = gl.RGBA;
			}
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			var textureImage = this.image;
			if(textureImage.type != lime_graphics_ImageType.DATA && !textureImage.get_premultiplied()) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1); else if(!textureImage.get_premultiplied() && textureImage.get_transparent()) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);
			if(textureImage.get_format() != 0) {
				textureImage = textureImage.clone();
				textureImage.set_format(0);
			}
			if(textureImage.type == lime_graphics_ImageType.DATA) gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,textureImage.buffer.width,textureImage.buffer.height,0,format,gl.UNSIGNED_BYTE,textureImage.get_data()); else gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,format,gl.UNSIGNED_BYTE,textureImage.get_src());
			gl.bindTexture(gl.TEXTURE_2D,null);
			this.__textureVersion = this.image.version;
		}
		if(!this.readable && this.image != null) {
			this.__surface = null;
			this.image = null;
		}
		return this.__texture;
	}
	,__fromFile: function(path,onload,onerror) {
		var _g = this;
		lime_graphics_Image.fromFile(path,function(image) {
			_g.__fromImage(image);
			if(onload != null) onload(_g);
		},onerror);
	}
	,__fromImage: function(image) {
		if(image != null && image.buffer != null) {
			this.image = image;
			this.width = image.width;
			this.height = image.height;
			this.rect = new openfl_geom_Rectangle(0,0,image.width,image.height);
			this.readable = true;
			this.__isValid = true;
		}
	}
	,__getFramebuffer: function(gl) {
		if(this.__framebuffer == null) {
			this.getTexture(gl);
			this.__framebuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER,this.__framebuffer);
			gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.__texture,0);
		}
		return this.__framebuffer;
	}
	,__class__: openfl_display_BitmapData
};
var openfl_display__$CapsStyle_CapsStyle_$Impl_$ = {};
$hxClasses["openfl.display._CapsStyle.CapsStyle_Impl_"] = openfl_display__$CapsStyle_CapsStyle_$Impl_$;
openfl_display__$CapsStyle_CapsStyle_$Impl_$.__name__ = ["openfl","display","_CapsStyle","CapsStyle_Impl_"];
openfl_display__$CapsStyle_CapsStyle_$Impl_$.toString = function(value) {
	switch(value) {
	case 0:
		return "none";
	case 1:
		return "round";
	case 2:
		return "square";
	default:
		return null;
	}
};
var openfl_display_FrameLabel = function(name,frame) {
	openfl_events_EventDispatcher.call(this);
	this.__name = name;
	this.__frame = frame;
};
$hxClasses["openfl.display.FrameLabel"] = openfl_display_FrameLabel;
openfl_display_FrameLabel.__name__ = ["openfl","display","FrameLabel"];
openfl_display_FrameLabel.__super__ = openfl_events_EventDispatcher;
openfl_display_FrameLabel.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	__frame: null
	,__name: null
	,get_frame: function() {
		return this.__frame;
	}
	,get_name: function() {
		return this.__name;
	}
	,__class__: openfl_display_FrameLabel
	,__properties__: {get_name:"get_name",get_frame:"get_frame"}
});
var openfl_display_Graphics = function(owner) {
	this.__dirty = true;
	this.__owner = owner;
	this.__commands = new openfl__$internal_renderer_DrawCommandBuffer();
	this.__strokePadding = 0;
	this.__positionX = 0;
	this.__positionY = 0;
	this.__renderTransform = new openfl_geom_Matrix();
	this.__worldTransform = new openfl_geom_Matrix();
	this.__width = 0;
	this.__height = 0;
	this.moveTo(0,0);
};
$hxClasses["openfl.display.Graphics"] = openfl_display_Graphics;
openfl_display_Graphics.__name__ = ["openfl","display","Graphics"];
openfl_display_Graphics.prototype = {
	__bounds: null
	,__commands: null
	,__dirty: null
	,__height: null
	,__positionX: null
	,__positionY: null
	,__renderTransform: null
	,__strokePadding: null
	,__transformDirty: null
	,__visible: null
	,__owner: null
	,__width: null
	,__worldTransform: null
	,__canvas: null
	,__context: null
	,__bitmap: null
	,beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.beginBitmapFill(bitmap,matrix != null?matrix.clone():null,repeat,smooth);
		this.__visible = true;
	}
	,beginFill: function(color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		this.__commands.beginFill(color & 16777215,alpha);
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		if(focalPointRatio == null) focalPointRatio = 0;
		if(interpolationMethod == null) interpolationMethod = 1;
		if(spreadMethod == null) spreadMethod = 0;
		this.__commands.beginGradientFill(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
		var _g = 0;
		while(_g < alphas.length) {
			var alpha = alphas[_g];
			++_g;
			if(alpha > 0) {
				this.__visible = true;
				break;
			}
		}
	}
	,clear: function() {
		this.__commands.clear();
		this.__strokePadding = 0;
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
		this.moveTo(0,0);
	}
	,copyFrom: function(sourceGraphics) {
		if(sourceGraphics.__bounds != null) this.__bounds = sourceGraphics.__bounds.clone(); else this.__bounds = null;
		this.__commands = sourceGraphics.__commands.copy();
		this.set___dirty(true);
		this.__strokePadding = sourceGraphics.__strokePadding;
		this.__positionX = sourceGraphics.__positionX;
		this.__positionY = sourceGraphics.__positionY;
		this.__transformDirty = true;
		this.__visible = sourceGraphics.__visible;
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		var ix;
		var iy;
		if(controlX < anchorX && controlX > this.__positionX || controlX > anchorX && controlX < this.__positionX) ix = anchorX; else {
			var tx = (this.__positionX - controlX) / (this.__positionX - 2 * controlX + anchorX);
			ix = this.__calculateBezierQuadPoint(tx,this.__positionX,controlX,anchorX);
		}
		if(controlY < anchorY && controlY > this.__positionY || controlY > anchorY && controlY < this.__positionY) iy = anchorY; else {
			var ty = (this.__positionY - controlY) / (this.__positionY - 2 * controlY + anchorY);
			iy = this.__calculateBezierQuadPoint(ty,this.__positionY,controlY,anchorY);
		}
		this.__inflateBounds(ix - this.__strokePadding,iy - this.__strokePadding);
		this.__inflateBounds(ix + this.__strokePadding,iy + this.__strokePadding);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__commands.curveTo(controlX,controlY,anchorX,anchorY);
		this.set___dirty(true);
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__strokePadding,y - radius - this.__strokePadding);
		this.__inflateBounds(x + radius + this.__strokePadding,y + radius + this.__strokePadding);
		this.__commands.drawCircle(x,y,radius);
		this.set___dirty(true);
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__strokePadding,y - this.__strokePadding);
		this.__inflateBounds(x + width + this.__strokePadding,y + height + this.__strokePadding);
		this.__commands.drawRect(x,y,width,height);
		this.set___dirty(true);
	}
	,drawRoundRect: function(x,y,width,height,ellipseWidth,ellipseHeight) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__strokePadding,y - this.__strokePadding);
		this.__inflateBounds(x + width + this.__strokePadding,y + height + this.__strokePadding);
		this.__commands.drawRoundRect(x,y,width,height,ellipseWidth,ellipseHeight);
		this.set___dirty(true);
	}
	,endFill: function() {
		this.__commands.endFill();
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(miterLimit == null) miterLimit = 3;
		if(scaleMode == null) scaleMode = 2;
		if(pixelHinting == null) pixelHinting = false;
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		if(thickness != null) {
			if(joints == 1) {
				if(thickness > this.__strokePadding) this.__strokePadding = thickness;
			} else if(thickness / 2 > this.__strokePadding) this.__strokePadding = thickness / 2;
		}
		this.__commands.lineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit);
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		if(!isFinite(x) || !isFinite(y)) return;
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding * 2,this.__positionY + this.__strokePadding);
		this.__commands.lineTo(x,y);
		this.set___dirty(true);
	}
	,moveTo: function(x,y) {
		this.__positionX = x;
		this.__positionY = y;
		this.__commands.moveTo(x,y);
	}
	,__calculateBezierQuadPoint: function(t,p1,p2,p3) {
		var iT = 1 - t;
		return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	}
	,__cleanup: function() {
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
		}
		this.__bitmap = null;
		this.__canvas = null;
		this.__context = null;
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = openfl_geom_Rectangle.__temp;
		this.__bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var px = matrix.__transformInverseX(x,y);
		var py = matrix.__transformInverseY(x,y);
		if(px > this.__bounds.x && py > this.__bounds.y && this.__bounds.contains(px,py)) {
			if(shapeFlag) return openfl__$internal_renderer_canvas_CanvasGraphics.hitTest(this,px,py);
			return true;
		}
		return false;
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl_geom_Rectangle(x,y,0,0);
			this.__transformDirty = true;
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
			this.__transformDirty = true;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
			this.__transformDirty = true;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__update: function() {
		if(this.__bounds == null || this.__bounds.width <= 0 || this.__bounds.height <= 0) return;
		var parentTransform = this.__owner.__renderTransform;
		var scaleX = 1.0;
		var scaleY = 1.0;
		if(parentTransform != null) {
			if(parentTransform.b == 0) scaleX = Math.abs(parentTransform.a); else scaleX = Math.sqrt(parentTransform.a * parentTransform.a + parentTransform.b * parentTransform.b);
			if(parentTransform.c == 0) scaleY = Math.abs(parentTransform.d); else scaleY = Math.sqrt(parentTransform.c * parentTransform.c + parentTransform.d * parentTransform.d);
		}
		var width = this.__bounds.width * scaleX;
		var height = this.__bounds.height * scaleY;
		if(Math.abs(width - this.__width) > 2 || Math.abs(height - this.__height) > 2) this.set___dirty(true);
		this.__width = Math.floor(width);
		this.__height = Math.floor(height);
		if(this.__width <= 0 || this.__height <= 0) return;
		this.__renderTransform.a = this.__width / this.__bounds.width;
		this.__renderTransform.d = this.__height / this.__bounds.height;
		this.__worldTransform.a = 1 / this.__renderTransform.a;
		this.__worldTransform.b = 0;
		this.__worldTransform.c = 0;
		this.__worldTransform.d = 1 / this.__renderTransform.d;
		this.__worldTransform.tx = this.__bounds.x;
		this.__worldTransform.ty = this.__bounds.y;
		this.__worldTransform.concat(this.__owner.__renderTransform);
	}
	,set___dirty: function(value) {
		if(value && this.__owner != null) this.__owner.__setRenderDirty();
		return this.__dirty = value;
	}
	,__class__: openfl_display_Graphics
	,__properties__: {set___dirty:"set___dirty"}
};
var openfl_display__$JointStyle_JointStyle_$Impl_$ = {};
$hxClasses["openfl.display._JointStyle.JointStyle_Impl_"] = openfl_display__$JointStyle_JointStyle_$Impl_$;
openfl_display__$JointStyle_JointStyle_$Impl_$.__name__ = ["openfl","display","_JointStyle","JointStyle_Impl_"];
openfl_display__$JointStyle_JointStyle_$Impl_$.toString = function(value) {
	switch(value) {
	case 0:
		return "bevel";
	case 1:
		return "miter";
	case 2:
		return "round";
	default:
		return null;
	}
};
var openfl_display_Loader = function() {
	openfl_display_DisplayObjectContainer.call(this);
	this.contentLoaderInfo = openfl_display_LoaderInfo.create(this);
};
$hxClasses["openfl.display.Loader"] = openfl_display_Loader;
openfl_display_Loader.__name__ = ["openfl","display","Loader"];
openfl_display_Loader.__super__ = openfl_display_DisplayObjectContainer;
openfl_display_Loader.prototype = $extend(openfl_display_DisplayObjectContainer.prototype,{
	content: null
	,contentLoaderInfo: null
	,close: function() {
		openfl_Lib.notImplemented({ fileName : "Loader.hx", lineNumber : 48, className : "openfl.display.Loader", methodName : "close"});
	}
	,load: function(request,context) {
		var _g = this;
		var extension = "";
		var path = request.url;
		var queryIndex = path.indexOf("?");
		if(queryIndex > -1) path = path.substring(0,queryIndex);
		var extIndex = path.lastIndexOf(".");
		if(extIndex > -1) extension = path.substring(extIndex + 1);
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null || request.contentType == "") switch(extension) {
		case "json":
			this.contentLoaderInfo.contentType = "application/json";
			break;
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		case "js":
			this.contentLoaderInfo.contentType = "application/javascript";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		if(this.contentLoaderInfo.contentType.indexOf("/javascript") > -1 || this.contentLoaderInfo.contentType.indexOf("/ecmascript") > -1) {
			var loader = new openfl_net_URLLoader();
			loader.addEventListener("complete",function(e) {
				_g.contentLoaderInfo.content = new openfl_display_Sprite();
				_g.addChild(_g.contentLoaderInfo.content);
				eval("(function () {" + Std.string(loader.data) + "})()");
				var event = new openfl_events_Event("complete");
				event.target = _g.contentLoaderInfo;
				event.currentTarget = _g.contentLoaderInfo;
				_g.contentLoaderInfo.dispatchEvent(event);
			});
			loader.addEventListener("ioError",function(e1) {
				_g.BitmapData_onError(e1);
			});
			loader.dataFormat = 1;
			loader.load(request);
			return;
		} else if(this.contentLoaderInfo.contentType.indexOf("/json") > -1) {
			var loader1 = new openfl_net_URLLoader();
			loader1.addEventListener("complete",function(e2) {
				var info = JSON.parse(loader1.data);
				var library = Type.createInstance(Type.resolveClass(info.type),[null]);
				openfl_Assets.registerLibrary(info.name,library);
				var manifest = haxe_Unserializer.run(info.manifest);
				var assetType;
				var basePath = request.url;
				basePath = StringTools.replace(basePath,"\\","/");
				var parts = basePath.split("/");
				parts.pop();
				parts.pop();
				basePath = parts.join("/");
				var libraryData = null;
				var loaded = -1;
				var total = 0;
				var checkLoaded = function() {
					if(loaded >= total) {
						library.swf = openfl__$internal_swf_SWFLite.unserialize(libraryData);
						_g.contentLoaderInfo.content = library.getMovieClip("");
						_g.addChild(_g.contentLoaderInfo.content);
						var event1 = new openfl_events_Event("complete");
						event1.target = _g.contentLoaderInfo;
						event1.currentTarget = _g.contentLoaderInfo;
						_g.contentLoaderInfo.dispatchEvent(event1);
					}
				};
				var _g1 = 0;
				while(_g1 < manifest.length) {
					var asset = [manifest[_g1]];
					++_g1;
					if(!openfl_Assets.exists(asset[0].id)) {
						assetType = asset[0].type;
						switch(assetType) {
						case "IMAGE":
							total++;
							openfl_display_BitmapData.fromFile(basePath + "/" + Std.string(asset[0].path),(function(asset) {
								return function(bitmapData) {
									loaded++;
									checkLoaded();
									openfl_Assets.cache.setBitmapData(asset[0].path,bitmapData);
								};
							})(asset),(function() {
								return function() {
									_g.BitmapData_onError(null);
								};
							})());
							break;
						case "TEXT":
							total++;
							var textLoader = [new openfl_net_URLLoader()];
							textLoader[0].addEventListener("complete",(function(textLoader) {
								return function(_) {
									libraryData = textLoader[0].data;
									loaded++;
									checkLoaded();
								};
							})(textLoader));
							textLoader[0].addEventListener("ioError",(function() {
								return function(e3) {
									_g.BitmapData_onError(e3);
								};
							})());
							textLoader[0].dataFormat = 1;
							textLoader[0].load(new openfl_net_URLRequest(basePath + "/" + Std.string(asset[0].path)));
							break;
						default:
						}
					}
				}
				loaded++;
				checkLoaded();
			});
			loader1.addEventListener("ioError",function(e4) {
				_g.BitmapData_onError(e4);
			});
			loader1.dataFormat = 1;
			loader1.load(request);
		}
		var worker = new lime_system_BackgroundWorker();
		worker.doWork.add(function(_1) {
			openfl_display_BitmapData.fromFile(path,function(bitmapData1) {
				worker.sendComplete(bitmapData1);
			},function() {
				worker.sendError("ioError");
			});
		});
		worker.onError.add($bind(this,this.BitmapData_onError));
		worker.onComplete.add($bind(this,this.BitmapData_onLoad));
		worker.run();
	}
	,unload: function() {
		if(this.get_numChildren() > 0) {
			while(this.get_numChildren() > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new openfl_events_Event("unload");
			event.currentTarget = this;
			this.__dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new openfl_display_Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.content);
		var event = new openfl_events_Event("complete");
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,BitmapData_onError: function(_) {
		var event = new openfl_events_IOErrorEvent("ioError");
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: openfl_display_Loader
});
var openfl_display_LoaderInfo = function() {
	openfl_events_EventDispatcher.call(this);
	this.applicationDomain = openfl_system_ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl_display_LoaderInfo;
openfl_display_LoaderInfo.__name__ = ["openfl","display","LoaderInfo"];
openfl_display_LoaderInfo.create = function(loader) {
	var loaderInfo = new openfl_display_LoaderInfo();
	loaderInfo.uncaughtErrorEvents = new openfl_events_UncaughtErrorEvents();
	if(loader != null) loaderInfo.loader = loader; else loaderInfo.url = openfl_display_LoaderInfo.__rootURL;
	return loaderInfo;
};
openfl_display_LoaderInfo.__super__ = openfl_events_EventDispatcher;
openfl_display_LoaderInfo.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	applicationDomain: null
	,bytesLoaded: null
	,bytesTotal: null
	,childAllowsParent: null
	,content: null
	,contentType: null
	,height: null
	,loader: null
	,parameters: null
	,uncaughtErrorEvents: null
	,url: null
	,width: null
	,__completed: null
	,__complete: function() {
		if(!this.__completed) {
			if(this.bytesLoaded < this.bytesTotal) this.bytesLoaded = this.bytesTotal;
			this.__update(this.bytesLoaded,this.bytesTotal);
			this.__completed = true;
			this.dispatchEvent(new openfl_events_Event("complete"));
		}
	}
	,__update: function(bytesLoaded,bytesTotal) {
		this.bytesLoaded = bytesLoaded;
		this.bytesTotal = bytesTotal;
		this.dispatchEvent(new openfl_events_ProgressEvent("progress",false,false,bytesLoaded,bytesTotal));
	}
	,__class__: openfl_display_LoaderInfo
});
var openfl_display__$MovieClip_TimelineObject = function(id,depth,displayObject) {
	this.id = id;
	this.depth = depth;
	this.displayObject = displayObject;
};
$hxClasses["openfl.display._MovieClip.TimelineObject"] = openfl_display__$MovieClip_TimelineObject;
openfl_display__$MovieClip_TimelineObject.__name__ = ["openfl","display","_MovieClip","TimelineObject"];
openfl_display__$MovieClip_TimelineObject.prototype = {
	depth: null
	,displayObject: null
	,id: null
	,__class__: openfl_display__$MovieClip_TimelineObject
};
var openfl_display_Preloader = function(display) {
	lime_app_Preloader.call(this);
	this.display = display;
	if(display != null) {
		display.addEventListener("unload",$bind(this,this.display_onUnload));
		openfl_Lib.current.addChild(display);
	}
};
$hxClasses["openfl.display.Preloader"] = openfl_display_Preloader;
openfl_display_Preloader.__name__ = ["openfl","display","Preloader"];
openfl_display_Preloader.__super__ = lime_app_Preloader;
openfl_display_Preloader.prototype = $extend(lime_app_Preloader.prototype,{
	display: null
	,ready: null
	,start: function() {
		this.ready = true;
		openfl_Lib.current.get_loaderInfo().__complete();
		if(this.display != null) {
			var complete = new openfl_events_Event("complete",true,true);
			this.display.dispatchEvent(complete);
			if(!complete.isDefaultPrevented()) this.display.dispatchEvent(new openfl_events_Event("unload"));
		} else lime_app_Preloader.prototype.start.call(this);
	}
	,update: function(loaded,total) {
		openfl_Lib.current.get_loaderInfo().__update(loaded,total);
		if(this.display != null) this.display.dispatchEvent(new openfl_events_ProgressEvent("progress",true,true,loaded,total));
	}
	,display_onUnload: function(event) {
		if(this.display != null) {
			this.display.removeEventListener("unload",$bind(this,this.display_onUnload));
			if(this.display.parent == openfl_Lib.current) openfl_Lib.current.removeChild(this.display);
			openfl_Lib.current.stage.set_focus(null);
			this.display = null;
		}
		if(this.ready) lime_app_Preloader.prototype.start.call(this);
	}
	,__class__: openfl_display_Preloader
});
var openfl_display_DefaultPreloader = function() {
	openfl_display_Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new openfl_display_Sprite();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.outline.set_alpha(0);
	this.addChild(this.outline);
	this.progress = new openfl_display_Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.progress.set_alpha(0);
	this.addChild(this.progress);
	this.startAnimation = openfl_Lib.getTimer() + 100;
	this.endAnimation = this.startAnimation + 1000;
	this.addEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
};
$hxClasses["openfl.display.DefaultPreloader"] = openfl_display_DefaultPreloader;
openfl_display_DefaultPreloader.__name__ = ["openfl","display","DefaultPreloader"];
openfl_display_DefaultPreloader.__super__ = openfl_display_Sprite;
openfl_display_DefaultPreloader.prototype = $extend(openfl_display_Sprite.prototype,{
	endAnimation: null
	,outline: null
	,progress: null
	,startAnimation: null
	,getBackgroundColor: function() {
		return openfl_Lib.current.stage.window.config.background;
	}
	,getHeight: function() {
		var height = openfl_Lib.current.stage.window.config.height;
		if(height > 0) return height; else return openfl_Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = openfl_Lib.current.stage.window.config.width;
		if(width > 0) return width; else return openfl_Lib.current.stage.stageWidth;
	}
	,onInit: function() {
		this.addEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
	}
	,onLoaded: function() {
		this.removeEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
		this.dispatchEvent(new openfl_events_Event("unload"));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = 0.0;
		if(bytesTotal > 0) {
			percentLoaded = bytesLoaded / bytesTotal;
			if(percentLoaded > 1) percentLoaded = 1;
		}
		this.progress.set_scaleX(percentLoaded);
	}
	,this_onAddedToStage: function(event) {
		this.removeEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
		this.onInit();
		this.onUpdate(this.get_loaderInfo().bytesLoaded,this.get_loaderInfo().bytesTotal);
		this.addEventListener("progress",$bind(this,this.this_onProgress));
		this.addEventListener("complete",$bind(this,this.this_onComplete));
	}
	,this_onComplete: function(event) {
		event.preventDefault();
		this.removeEventListener("progress",$bind(this,this.this_onProgress));
		this.removeEventListener("complete",$bind(this,this.this_onComplete));
		this.onLoaded();
	}
	,this_onEnterFrame: function(event) {
		var elapsed = openfl_Lib.getTimer() - this.startAnimation;
		var total = this.endAnimation - this.startAnimation;
		var percent = elapsed / total;
		if(percent < 0) percent = 0;
		if(percent > 1) percent = 1;
		this.outline.set_alpha(percent);
		this.progress.set_alpha(percent);
	}
	,this_onProgress: function(event) {
		this.onUpdate(event.bytesLoaded | 0,event.bytesTotal | 0);
	}
	,__class__: openfl_display_DefaultPreloader
});
var openfl_display_Shader = function(code) {
	this.__data = new openfl_display_ShaderData(null);
	if(this.__glFragmentSource == null) this.__glFragmentSource = "varying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform sampler2D uImage0;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvec4 color = texture2D (uImage0, vTexCoord);\n\t\t\t\n\t\t\tif (color.a == 0.0) {\n\t\t\t\t\n\t\t\t\tgl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n\t\t\t\t\n\t\t\t} else {\n\t\t\t\t\n\t\t\t\tgl_FragColor = color * vAlpha;\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t}";
	if(this.__glVertexSource == null) this.__glVertexSource = "attribute float aAlpha;\n\t\tattribute vec4 aPosition;\n\t\tattribute vec2 aTexCoord;\n\t\tvarying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\t\n\t\tuniform mat4 uMatrix;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvAlpha = aAlpha;\n\t\t\tvTexCoord = aTexCoord;\n\t\t\tgl_Position = uMatrix * aPosition;\n\t\t\t\n\t\t}";
	this.byteCode = code;
	this.precisionHint = 1;
	this.__glSourceDirty = true;
	this.__numPasses = 1;
};
$hxClasses["openfl.display.Shader"] = openfl_display_Shader;
openfl_display_Shader.__name__ = ["openfl","display","Shader"];
openfl_display_Shader.prototype = {
	byteCode: null
	,glProgram: null
	,precisionHint: null
	,gl: null
	,__data: null
	,__glFragmentSource: null
	,__glSourceDirty: null
	,__glVertexSource: null
	,__isUniform: null
	,__inputBitmapData: null
	,__numPasses: null
	,__paramBool: null
	,__paramFloat: null
	,__paramInt: null
	,__uniformMatrix2: null
	,__uniformMatrix3: null
	,__uniformMatrix4: null
	,__init: function() {
		if(this.__data == null) this.__data = new openfl_display_ShaderData(null);
		if(this.__glFragmentSource != null && this.__glVertexSource != null && (this.glProgram == null || this.__glSourceDirty)) this.__initGL();
	}
	,__initGL: function() {
		if(this.__glSourceDirty || this.__isUniform == null) {
			this.__glSourceDirty = false;
			this.glProgram = null;
			this.__isUniform = new haxe_ds_StringMap();
			this.__inputBitmapData = [];
			this.__paramBool = [];
			this.__paramFloat = [];
			this.__paramInt = [];
			var this1;
			this1 = new Float32Array(4);
			this.__uniformMatrix2 = this1;
			var this2;
			this2 = new Float32Array(9);
			this.__uniformMatrix3 = this2;
			var this3;
			this3 = new Float32Array(16);
			this.__uniformMatrix4 = this3;
			this.__processGLData(this.get_glVertexSource(),"attribute");
			this.__processGLData(this.get_glVertexSource(),"uniform");
			this.__processGLData(this.get_glFragmentSource(),"uniform");
		}
		if(this.gl != null && this.glProgram == null) {
			var fragment;
			fragment = "#ifdef GL_ES\n\t\t\t\tprecision " + (this.precisionHint == 1?"mediump":"lowp") + " float;\n\t\t\t\t#endif\n\t\t\t\t" + this.get_glFragmentSource();
			this.glProgram = lime_utils_GLUtils.createProgram(this.get_glVertexSource(),fragment);
			if(this.glProgram != null) {
				var _g = 0;
				var _g1 = this.__inputBitmapData;
				while(_g < _g1.length) {
					var input = _g1[_g];
					++_g;
					if(this.__isUniform.get(input.name)) input.index = this.gl.getUniformLocation(this.glProgram,input.name); else input.index = this.gl.getAttribLocation(this.glProgram,input.name);
				}
				var _g2 = 0;
				var _g11 = this.__paramBool;
				while(_g2 < _g11.length) {
					var parameter = _g11[_g2];
					++_g2;
					if(this.__isUniform.get(parameter.name)) parameter.index = this.gl.getUniformLocation(this.glProgram,parameter.name); else parameter.index = this.gl.getAttribLocation(this.glProgram,parameter.name);
				}
				var _g3 = 0;
				var _g12 = this.__paramFloat;
				while(_g3 < _g12.length) {
					var parameter1 = _g12[_g3];
					++_g3;
					if(this.__isUniform.get(parameter1.name)) parameter1.index = this.gl.getUniformLocation(this.glProgram,parameter1.name); else parameter1.index = this.gl.getAttribLocation(this.glProgram,parameter1.name);
				}
				var _g4 = 0;
				var _g13 = this.__paramInt;
				while(_g4 < _g13.length) {
					var parameter2 = _g13[_g4];
					++_g4;
					if(this.__isUniform.get(parameter2.name)) parameter2.index = this.gl.getUniformLocation(this.glProgram,parameter2.name); else parameter2.index = this.gl.getAttribLocation(this.glProgram,parameter2.name);
				}
			}
		}
	}
	,__processGLData: function(source,storageType) {
		var lastMatch = 0;
		var position;
		var regex;
		var name;
		var type;
		if(storageType == "uniform") regex = new EReg("uniform ([A-Za-z0-9]+) ([A-Za-z0-9]+)",""); else regex = new EReg("attribute ([A-Za-z0-9]+) ([A-Za-z0-9]+)","");
		while(regex.matchSub(source,lastMatch)) {
			type = regex.matched(1);
			name = regex.matched(2);
			if(StringTools.startsWith(type,"sampler")) {
				var input = new openfl_display_ShaderInput();
				input.name = name;
				this.__inputBitmapData.push(input);
				Reflect.setField(this.get_data(),name,input);
			} else {
				var parameterType;
				switch(type) {
				case "bool":
					parameterType = 0;
					break;
				case "double":case "float":
					parameterType = 4;
					break;
				case "int":case "uint":
					parameterType = 8;
					break;
				case "bvec2":
					parameterType = 1;
					break;
				case "bvec3":
					parameterType = 2;
					break;
				case "bvec4":
					parameterType = 3;
					break;
				case "ivec2":case "uvec2":
					parameterType = 9;
					break;
				case "ivec3":case "uvec3":
					parameterType = 10;
					break;
				case "ivec4":case "uvec4":
					parameterType = 11;
					break;
				case "vec2":case "dvec2":
					parameterType = 5;
					break;
				case "vec3":case "dvec3":
					parameterType = 6;
					break;
				case "vec4":case "dvec4":
					parameterType = 7;
					break;
				case "mat2":case "mat2x2":
					parameterType = 12;
					break;
				case "mat2x3":
					parameterType = 13;
					break;
				case "mat2x4":
					parameterType = 14;
					break;
				case "mat3x2":
					parameterType = 15;
					break;
				case "mat3":case "mat3x3":
					parameterType = 16;
					break;
				case "mat3x4":
					parameterType = 17;
					break;
				case "mat4x2":
					parameterType = 18;
					break;
				case "mat4x3":
					parameterType = 19;
					break;
				case "mat4":case "mat4x4":
					parameterType = 20;
					break;
				default:
					parameterType = null;
				}
				switch(parameterType) {
				case 0:case 1:case 2:case 3:
					var parameter = new openfl_display_ShaderParameter();
					parameter.name = name;
					parameter.type = parameterType;
					this.__paramBool.push(parameter);
					Reflect.setField(this.get_data(),name,parameter);
					break;
				case 8:case 9:case 10:case 11:
					var parameter1 = new openfl_display_ShaderParameter();
					parameter1.name = name;
					parameter1.type = parameterType;
					this.__paramInt.push(parameter1);
					Reflect.setField(this.get_data(),name,parameter1);
					break;
				default:
					var parameter2 = new openfl_display_ShaderParameter();
					parameter2.name = name;
					parameter2.type = parameterType;
					this.__paramFloat.push(parameter2);
					Reflect.setField(this.get_data(),name,parameter2);
				}
			}
			this.__isUniform.set(name,storageType == "uniform");
			position = regex.matchedPos();
			lastMatch = position.pos + position.len;
		}
	}
	,get_data: function() {
		if(this.__glSourceDirty || this.__data == null) this.__init();
		return this.__data;
	}
	,get_glFragmentSource: function() {
		return this.__glFragmentSource;
	}
	,get_glVertexSource: function() {
		return this.__glVertexSource;
	}
	,__class__: openfl_display_Shader
	,__properties__: {get_glVertexSource:"get_glVertexSource",get_glFragmentSource:"get_glFragmentSource",get_data:"get_data"}
};
var openfl_display_ShaderData = function(byteArray) {
};
$hxClasses["openfl.display.ShaderData"] = openfl_display_ShaderData;
openfl_display_ShaderData.__name__ = ["openfl","display","ShaderData"];
openfl_display_ShaderData.prototype = {
	aAlpha: null
	,aPosition: null
	,aTexCoord: null
	,uImage0: null
	,uMatrix: null
	,__class__: openfl_display_ShaderData
};
var openfl_display_ShaderInput = function() {
	this.channels = 0;
	this.height = 0;
	this.index = 0;
	this.width = 0;
};
$hxClasses["openfl.display.ShaderInput"] = openfl_display_ShaderInput;
openfl_display_ShaderInput.__name__ = ["openfl","display","ShaderInput"];
openfl_display_ShaderInput.prototype = {
	channels: null
	,height: null
	,index: null
	,input: null
	,name: null
	,smoothing: null
	,width: null
	,__class__: openfl_display_ShaderInput
};
var openfl_display_ShaderParameter = function() {
	this.index = 0;
};
$hxClasses["openfl.display.ShaderParameter"] = openfl_display_ShaderParameter;
openfl_display_ShaderParameter.__name__ = ["openfl","display","ShaderParameter"];
openfl_display_ShaderParameter.prototype = {
	index: null
	,name: null
	,type: null
	,value: null
	,__class__: openfl_display_ShaderParameter
};
var openfl_display_Shape = function() {
	openfl_display_DisplayObject.call(this);
};
$hxClasses["openfl.display.Shape"] = openfl_display_Shape;
openfl_display_Shape.__name__ = ["openfl","display","Shape"];
openfl_display_Shape.__super__ = openfl_display_DisplayObject;
openfl_display_Shape.prototype = $extend(openfl_display_DisplayObject.prototype,{
	get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl_display_Graphics(this);
		return this.__graphics;
	}
	,__class__: openfl_display_Shape
	,__properties__: $extend(openfl_display_DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
var openfl_display_SimpleButton = function(upState,overState,downState,hitTestState) {
	openfl_display_InteractiveObject.call(this);
	this.enabled = true;
	this.trackAsMenu = false;
	this.useHandCursor = true;
	this.set_upState(upState != null?upState:new openfl_display_DisplayObject());
	this.set_overState(overState);
	this.set_downState(downState);
	this.set_hitTestState(hitTestState != null?hitTestState:new openfl_display_DisplayObject());
	this.addEventListener("mouseDown",$bind(this,this.__this_onMouseDown));
	this.addEventListener("mouseOut",$bind(this,this.__this_onMouseOut));
	this.addEventListener("mouseOver",$bind(this,this.__this_onMouseOver));
	this.addEventListener("mouseUp",$bind(this,this.__this_onMouseUp));
	this.set___currentState(this.upState);
	if(openfl_display_SimpleButton.__initSymbol != null) {
		var swf = openfl_display_SimpleButton.__initSWF;
		this.__symbol = openfl_display_SimpleButton.__initSymbol;
		openfl_display_SimpleButton.__initSWF = null;
		openfl_display_SimpleButton.__initSymbol = null;
		this.__fromSymbol(swf,this.__symbol);
	}
};
$hxClasses["openfl.display.SimpleButton"] = openfl_display_SimpleButton;
openfl_display_SimpleButton.__name__ = ["openfl","display","SimpleButton"];
openfl_display_SimpleButton.__super__ = openfl_display_InteractiveObject;
openfl_display_SimpleButton.prototype = $extend(openfl_display_InteractiveObject.prototype,{
	downState: null
	,enabled: null
	,hitTestState: null
	,overState: null
	,trackAsMenu: null
	,upState: null
	,useHandCursor: null
	,__currentState: null
	,__ignoreEvent: null
	,__previousStates: null
	,__symbol: null
	,__fromSymbol: function(swf,symbol) {
		this.__symbol = symbol;
		if(symbol.downState != null) this.set_downState(symbol.downState.__createObject(swf));
		if(symbol.hitState != null) this.set_hitTestState(symbol.hitState.__createObject(swf));
		if(symbol.overState != null) this.set_overState(symbol.overState.__createObject(swf));
		if(symbol.upState != null) this.set_upState(symbol.upState.__createObject(swf));
	}
	,__getBounds: function(rect,matrix) {
		openfl_display_InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		if(matrix != null) {
			this.__updateTransforms(matrix);
			this.__updateChildren(true);
		}
		this.__currentState.__getBounds(rect,this.__currentState.__worldTransform);
		if(matrix != null) {
			this.__updateTransforms();
			this.__updateChildren(true);
		}
	}
	,__getCursor: function() {
		if(this.useHandCursor && !this.__ignoreEvent) return lime_ui_MouseCursor.POINTER; else return null;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		var hitTest = false;
		if(this.hitTestState != null) {
			var cacheTransform = this.__updateTransform(this.hitTestState);
			if(this.hitTestState.__hitTest(x,y,shapeFlag,stack,interactiveOnly,hitObject)) {
				if(stack != null) stack[stack.length - 1] = hitObject;
				hitTest = true;
			}
			this.__resetTransform(this.hitTestState,cacheTransform);
		} else if(this.__currentState != null) {
			if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
			var cacheTransform1 = this.__updateTransform(this.__currentState);
			if(this.__currentState.__hitTest(x,y,shapeFlag,stack,interactiveOnly,hitObject)) hitTest = interactiveOnly;
			this.__resetTransform(this.__currentState,cacheTransform1);
		}
		if(stack != null) while(stack.length > 1 && stack[stack.length - 1] == stack[stack.length - 2]) stack.pop();
		return hitTest;
	}
	,__hitTestMask: function(x,y) {
		var hitTest = false;
		var cacheTransform = this.__updateTransform(this.__currentState);
		if(this.__currentState.__hitTestMask(x,y)) hitTest = true;
		this.__resetTransform(this.__currentState,cacheTransform);
		return hitTest;
	}
	,__renderCairo: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		renderSession.maskManager.pushObject(this);
		this.__currentState.__renderCairo(renderSession);
		renderSession.maskManager.popObject(this);
	}
	,__renderCairoMask: function(renderSession) {
		this.__currentState.__renderCairoMask(renderSession);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		renderSession.maskManager.pushObject(this);
		this.__currentState.__renderCanvas(renderSession);
		renderSession.maskManager.popObject(this);
	}
	,__renderCanvasMask: function(renderSession) {
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,this.__transform);
		renderSession.context.rect(0,0,bounds.width,bounds.height);
		this.__currentState.__renderCanvasMask(renderSession);
	}
	,__renderDOM: function(renderSession) {
		renderSession.maskManager.pushObject(this);
		var _g = 0;
		var _g1 = this.__previousStates;
		while(_g < _g1.get_length()) {
			var previousState = _g1.get(_g);
			++_g;
			previousState.__renderDOM(renderSession);
		}
		this.__previousStates.set_length(0);
		this.__currentState.__renderDOM(renderSession);
		renderSession.maskManager.popObject(this);
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		renderSession.maskManager.pushObject(this);
		this.__currentState.__renderGL(renderSession);
		renderSession.maskManager.popObject(this);
	}
	,__resetTransform: function(state,cacheTransform) {
		state.__updateTransforms(cacheTransform);
		state.__updateChildren(false);
	}
	,__setStageReference: function(stage) {
		openfl_display_InteractiveObject.prototype.__setStageReference.call(this,stage);
		if(this.__currentState != null) this.__currentState.__setStageReference(stage);
	}
	,__updateTransform: function(state) {
		var cacheTransform = state.__worldTransform;
		var local = state.__transform;
		var parentTransform = this.__worldTransform;
		var overrideTransform = openfl_geom_Matrix.__temp;
		overrideTransform.a = local.a * parentTransform.a + local.b * parentTransform.c;
		overrideTransform.b = local.a * parentTransform.b + local.b * parentTransform.d;
		overrideTransform.c = local.c * parentTransform.a + local.d * parentTransform.c;
		overrideTransform.d = local.c * parentTransform.b + local.d * parentTransform.d;
		overrideTransform.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
		overrideTransform.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
		var cacheTransform1 = state.__transform;
		state.__transform = overrideTransform;
		state.__update(false,true);
		state.__transform = cacheTransform1;
		return cacheTransform1;
	}
	,__updateTransforms: function(overrideTransform) {
		openfl_display_InteractiveObject.prototype.__updateTransforms.call(this,overrideTransform);
		this.__updateTransform(this.__currentState);
	}
	,set_downState: function(downState) {
		if(this.downState != null && this.__currentState == this.downState) this.set___currentState(downState);
		return this.downState = downState;
	}
	,set_hitTestState: function(hitTestState) {
		return this.hitTestState = hitTestState;
	}
	,set_overState: function(overState) {
		if(this.overState != null && this.__currentState == this.overState) this.set___currentState(overState);
		return this.overState = overState;
	}
	,set_upState: function(upState) {
		if(this.upState != null && this.__currentState == this.upState) this.set___currentState(upState);
		return this.upState = upState;
	}
	,set___currentState: function(value) {
		if(this.__currentState != null) this.__currentState.__renderParent = null;
		if(value.parent != null) value.parent.removeChild(value);
		value.__renderParent = this;
		return this.__currentState = value;
	}
	,__this_onMouseDown: function(event) {
		if(this.downState != null) this.set___currentState(this.downState);
	}
	,__this_onMouseOut: function(event) {
		this.__ignoreEvent = false;
		if(this.upState != this.__currentState) this.set___currentState(this.upState);
	}
	,__this_onMouseOver: function(event) {
		if(event.buttonDown) this.__ignoreEvent = true;
		if(this.overState != this.__currentState && this.overState != null && !this.__ignoreEvent) this.set___currentState(this.overState);
	}
	,__this_onMouseUp: function(event) {
		this.__ignoreEvent = false;
		if(this.overState != null) this.set___currentState(this.overState); else this.set___currentState(this.upState);
	}
	,__class__: openfl_display_SimpleButton
	,__properties__: $extend(openfl_display_InteractiveObject.prototype.__properties__,{set___currentState:"set___currentState",set_upState:"set_upState",set_overState:"set_overState",set_hitTestState:"set_hitTestState",set_downState:"set_downState"})
});
var openfl_display_Stage = function(window,color) {
	openfl_display_DisplayObjectContainer.call(this);
	this.application = window.application;
	this.window = window;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__deltaTime = 0;
	this.__displayState = 2;
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__lastClickTime = 0;
	this.__logicalWidth = 0;
	this.__logicalHeight = 0;
	this.__displayMatrix = new openfl_geom_Matrix();
	this.stage3Ds = openfl__$Vector_Vector_$Impl_$.toObjectVector(null);
	var x = new openfl_display_Stage3D();
	this.stage3Ds.push(x);
	this.__resize();
	this.stage = this;
	this.align = 6;
	this.allowsFullScreen = false;
	this.allowsFullScreenInteractive = false;
	this.quality = 1;
	this.scaleMode = 2;
	this.showDefaultContextMenu = true;
	this.stageFocusRect = true;
	this.__macKeyboard = /AppleWebKit/.test (navigator.userAgent) && /Mobile\/\w+/.test (navigator.userAgent) || /Mac/.test (navigator.platform);
	this.__clearBeforeRender = true;
	this.__stack = [];
	this.__rollOutStack = [];
	if(openfl_Lib.current.stage == null) this.stage.addChild(openfl_Lib.current);
};
$hxClasses["openfl.display.Stage"] = openfl_display_Stage;
openfl_display_Stage.__name__ = ["openfl","display","Stage"];
openfl_display_Stage.__interfaces__ = [lime_app_IModule];
openfl_display_Stage.__super__ = openfl_display_DisplayObjectContainer;
openfl_display_Stage.prototype = $extend(openfl_display_DisplayObjectContainer.prototype,{
	align: null
	,allowsFullScreen: null
	,allowsFullScreenInteractive: null
	,application: null
	,quality: null
	,scaleMode: null
	,showDefaultContextMenu: null
	,stage3Ds: null
	,stageFocusRect: null
	,stageHeight: null
	,stageWidth: null
	,window: null
	,__cacheFocus: null
	,__clearBeforeRender: null
	,__color: null
	,__colorSplit: null
	,__colorString: null
	,__deltaTime: null
	,__dirty: null
	,__displayMatrix: null
	,__displayState: null
	,__dragBounds: null
	,__dragObject: null
	,__dragOffsetX: null
	,__dragOffsetY: null
	,__focus: null
	,__invalidated: null
	,__lastClickTime: null
	,__logicalWidth: null
	,__logicalHeight: null
	,__macKeyboard: null
	,__mouseDownLeft: null
	,__mouseDownMiddle: null
	,__mouseDownRight: null
	,__mouseOverTarget: null
	,__mouseX: null
	,__mouseY: null
	,__primaryTouch: null
	,__renderer: null
	,__rendering: null
	,__rollOutStack: null
	,__stack: null
	,__transparent: null
	,addRenderer: function(renderer) {
		renderer.onRender.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.render),renderer));
		renderer.onContextLost.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.onRenderContextLost),renderer));
		renderer.onContextRestored.add((function(f2,a12) {
			return function(a2) {
				f2(a12,a2);
			};
		})($bind(this,this.onRenderContextRestored),renderer));
	}
	,addWindow: function(window) {
		if(this.window != window) return;
		window.onActivate.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.onWindowActivate),window));
		window.onClose.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.onWindowClose),window),false,-9000);
		window.onCreate.add((function(f2,a12) {
			return function() {
				f2(a12);
			};
		})($bind(this,this.onWindowCreate),window));
		window.onDeactivate.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onWindowDeactivate),window));
		window.onDropFile.add((function(f4,a14) {
			return function(a2) {
				f4(a14,a2);
			};
		})($bind(this,this.onWindowDropFile),window));
		window.onEnter.add((function(f5,a15) {
			return function() {
				f5(a15);
			};
		})($bind(this,this.onWindowEnter),window));
		window.onFocusIn.add((function(f6,a16) {
			return function() {
				f6(a16);
			};
		})($bind(this,this.onWindowFocusIn),window));
		window.onFocusOut.add((function(f7,a17) {
			return function() {
				f7(a17);
			};
		})($bind(this,this.onWindowFocusOut),window));
		window.onFullscreen.add((function(f8,a18) {
			return function() {
				f8(a18);
			};
		})($bind(this,this.onWindowFullscreen),window));
		window.onKeyDown.add((function(f9,a19) {
			return function(a21,a3) {
				f9(a19,a21,a3);
			};
		})($bind(this,this.onKeyDown),window));
		window.onKeyUp.add((function(f10,a110) {
			return function(a22,a31) {
				f10(a110,a22,a31);
			};
		})($bind(this,this.onKeyUp),window));
		window.onLeave.add((function(f11,a111) {
			return function() {
				f11(a111);
			};
		})($bind(this,this.onWindowLeave),window));
		window.onMinimize.add((function(f12,a112) {
			return function() {
				f12(a112);
			};
		})($bind(this,this.onWindowMinimize),window));
		window.onMouseDown.add((function(f13,a113) {
			return function(x,y,a23) {
				f13(a113,x,y,a23);
			};
		})($bind(this,this.onMouseDown),window));
		window.onMouseMove.add((function(f14,a114) {
			return function(x1,y1) {
				f14(a114,x1,y1);
			};
		})($bind(this,this.onMouseMove),window));
		window.onMouseMoveRelative.add((function(f15,a115) {
			return function(x2,y2) {
				f15(a115,x2,y2);
			};
		})($bind(this,this.onMouseMoveRelative),window));
		window.onMouseUp.add((function(f16,a116) {
			return function(x3,y3,a24) {
				f16(a116,x3,y3,a24);
			};
		})($bind(this,this.onMouseUp),window));
		window.onMouseWheel.add((function(f17,a117) {
			return function(a25,a32) {
				f17(a117,a25,a32);
			};
		})($bind(this,this.onMouseWheel),window));
		window.onMove.add((function(f18,a118) {
			return function(x4,y4) {
				f18(a118,x4,y4);
			};
		})($bind(this,this.onWindowMove),window));
		window.onResize.add((function(f19,a119) {
			return function(a26,a33) {
				f19(a119,a26,a33);
			};
		})($bind(this,this.onWindowResize),window));
		window.onRestore.add((function(f20,a120) {
			return function() {
				f20(a120);
			};
		})($bind(this,this.onWindowRestore),window));
		window.onTextEdit.add((function(f21,a121) {
			return function(a27,a34,a4) {
				f21(a121,a27,a34,a4);
			};
		})($bind(this,this.onTextEdit),window));
		window.onTextInput.add((function(f22,a122) {
			return function(a28) {
				f22(a122,a28);
			};
		})($bind(this,this.onTextInput),window));
		if(window.id > -1) this.onWindowCreate(window);
	}
	,registerModule: function(application) {
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onUpdate.add($bind(this,this.update));
		var $it0 = lime_ui_Gamepad.devices.iterator();
		while( $it0.hasNext() ) {
			var gamepad = $it0.next();
			this.__onGamepadConnect(gamepad);
		}
		lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
		lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
	}
	,setPreloader: function(preloader) {
	}
	,globalToLocal: function(pos) {
		return pos.clone();
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos.clone();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		try {
			openfl_ui_GameInput.__onGamepadAxisMove(gamepad,axis,value);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onGamepadButtonDown: function(gamepad,button) {
		try {
			openfl_ui_GameInput.__onGamepadButtonDown(gamepad,button);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onGamepadButtonUp: function(gamepad,button) {
		try {
			openfl_ui_GameInput.__onGamepadButtonUp(gamepad,button);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onGamepadConnect: function(gamepad) {
		try {
			openfl_ui_GameInput.__onGamepadConnect(gamepad);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onGamepadDisconnect: function(gamepad) {
		try {
			openfl_ui_GameInput.__onGamepadDisconnect(gamepad);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onKeyDown: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		try {
			this.__onKey("keyDown",keyCode,modifier);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onKeyUp: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		try {
			this.__onKey("keyUp",keyCode,modifier);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onModuleExit: function(code) {
		if(this.window != null) try {
			this.__broadcastEvent(new openfl_events_Event("deactivate"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onMouseDown: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		try {
			var type;
			switch(button) {
			case 1:
				type = "middleMouseDown";
				break;
			case 2:
				type = "rightMouseDown";
				break;
			default:
				type = "mouseDown";
			}
			this.__onMouse(type,x * window.__scale | 0,y * window.__scale | 0,button);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onMouseMove: function(window,x,y) {
		if(this.window == null || this.window != window) return;
		try {
			this.__onMouse("mouseMove",x * window.__scale | 0,y * window.__scale | 0,0);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		try {
			var type;
			switch(button) {
			case 1:
				type = "middleMouseUp";
				break;
			case 2:
				type = "rightMouseUp";
				break;
			default:
				type = "mouseUp";
			}
			this.__onMouse(type,x * window.__scale | 0,y * window.__scale | 0,button);
			if(!this.showDefaultContextMenu && button == 2) window.onMouseUp.cancel();
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		if(this.window == null || this.window != window) return;
		try {
			this.__onMouseWheel(deltaX * window.__scale | 0,deltaY * window.__scale | 0);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
		if(this.window == null || this.window != window) return;
		try {
			var stack = [];
			if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
			var event = new openfl_events_TextEvent("textInput",true,false,text);
			if(stack.length > 0) {
				stack.reverse();
				this.__fireEvent(event,stack);
			} else this.__dispatchEvent(event);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onTouchMove: function(touch) {
		try {
			this.__onTouch("touchMove",touch);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onTouchEnd: function(touch) {
		try {
			if(this.__primaryTouch == touch) this.__primaryTouch = null;
			this.__onTouch("touchEnd",touch);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onTouchStart: function(touch) {
		try {
			if(this.__primaryTouch == null) this.__primaryTouch = touch;
			this.__onTouch("touchBegin",touch);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowActivate: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__broadcastEvent(new openfl_events_Event("activate"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowClose: function(window) {
		if(this.window == window) this.window = null;
	}
	,onWindowCreate: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			if(window.renderer != null) {
				var _g = window.renderer.context;
				switch(_g[1]) {
				case 0:
					var gl = _g[2];
					break;
				case 1:
					var context = _g[2];
					this.__renderer = new openfl__$internal_renderer_canvas_CanvasRenderer(this,context);
					break;
				case 2:
					var element = _g[2];
					this.__renderer = new openfl__$internal_renderer_dom_DOMRenderer(this,element);
					break;
				case 4:
					var cairo = _g[2];
					break;
				case 5:
					var ctx = _g[2];
					break;
				default:
				}
			}
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowDeactivate: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__primaryTouch = null;
			this.__broadcastEvent(new openfl_events_Event("deactivate"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowDropFile: function(window,file) {
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.set_focus(this.__cacheFocus);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowFocusOut: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			var currentFocus = this.get_focus();
			this.set_focus(null);
			this.__cacheFocus = currentFocus;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowFullscreen: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__resize();
			if(this.__displayState == 2) {
				this.__displayState = 1;
				this.__dispatchEvent(new openfl_events_FullScreenEvent("fullScreen",false,false,false,true));
			}
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowLeave: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__dispatchEvent(new openfl_events_Event("mouseLeave"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowMinimize: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__primaryTouch = null;
			this.__broadcastEvent(new openfl_events_Event("deactivate"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowResize: function(window,width,height) {
		if(this.window == null || this.window != window) return;
		try {
			this.__resize();
			if(this.__displayState != 2 && !window.__fullscreen) {
				this.__displayState = 2;
				this.__dispatchEvent(new openfl_events_FullScreenEvent("fullScreen",false,false,true,true));
			}
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,onWindowRestore: function(window) {
		if(this.window == null || this.window != window) return;
		try {
			this.__broadcastEvent(new openfl_events_Event("activate"));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,render: function(renderer) {
		if(renderer.window == null || renderer.window != this.window) return;
		try {
			if(this.application != null && this.application.__windows.length > 0) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl_display_DisplayObject.__worldTransformDirty++;
				}
				if(!this.__renderDirty) {
					this.__renderDirty = true;
					openfl_display_DisplayObject.__worldRenderDirty++;
				}
			}
			if(this.__rendering) return;
			this.__rendering = true;
			if(this.__renderer != null) this.__renderer.clear();
			this.__broadcastEvent(new openfl_events_Event("enterFrame"));
			this.__broadcastEvent(new openfl_events_Event("frameConstructed"));
			this.__broadcastEvent(new openfl_events_Event("exitFrame"));
			if(this.__invalidated) {
				this.__invalidated = false;
				this.__broadcastEvent(new openfl_events_Event("render"));
			}
			this.__renderable = true;
			this.__enterFrame(this.__deltaTime);
			this.__deltaTime = 0;
			this.__update(false,true);
			if(this.__renderer != null) {
				if(renderer.type == lime_graphics_RendererType.CAIRO) {
					var _g = renderer.context;
					switch(_g[1]) {
					case 4:
						var cairo = _g[2];
						(js_Boot.__cast(this.__renderer , openfl__$internal_renderer_cairo_CairoRenderer)).cairo = cairo;
						this.__renderer.renderSession.cairo = cairo;
						break;
					default:
					}
				}
				this.__renderer.render();
			}
			this.__rendering = false;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.__handleError(e);
		}
	}
	,update: function(deltaTime) {
		this.__deltaTime = deltaTime;
	}
	,__broadcastEvent: function(event) {
		if(openfl_display_DisplayObject.__broadcastEvents.exists(event.type)) {
			var dispatchers = openfl_display_DisplayObject.__broadcastEvents.get(event.type);
			var _g = 0;
			while(_g < dispatchers.length) {
				var dispatcher = dispatchers[_g];
				++_g;
				dispatcher.__dispatch(event);
			}
		}
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) parent.__getWorldTransform().__transformInversePoint(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var target;
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = 2;
			target = event.target;
			target.__dispatch(event);
		} else {
			event.eventPhase = 1;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__dispatch(event);
				if(event.__isCanceled) return;
			}
			event.eventPhase = 2;
			target = event.target;
			target.__dispatch(event);
			if(event.__isCanceled) return;
			if(event.bubbles) {
				event.eventPhase = 3;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__dispatch(event);
					if(event.__isCanceled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		if(stack != null) stack.push(this);
		return true;
	}
	,__handleError: function(e) {
		var event = new openfl_events_UncaughtErrorEvent("uncaughtError",true,true,e);
		openfl_Lib.current.__loaderInfo.uncaughtErrorEvents.dispatchEvent(event);
		if(!event.__preventDefault) {
			throw e;
		}
	}
	,__onKey: function(type,keyCode,modifier) {
		openfl_events_MouseEvent.__altKey = lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_altKey(modifier);
		openfl_events_MouseEvent.__commandKey = lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier);
		openfl_events_MouseEvent.__ctrlKey = lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier);
		openfl_events_MouseEvent.__shiftKey = lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey(modifier);
		var stack = [];
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			var keyLocation;
			switch(keyCode) {
			case 1073742048:case 1073742049:case 1073742050:case 1073742051:
				keyLocation = 1;
				break;
			case 1073742052:case 1073742053:case 1073742054:case 1073742055:
				keyLocation = 2;
				break;
			case 1073741908:case 1073741909:case 1073741910:case 1073741911:case 1073741912:case 1073741913:case 1073741914:case 1073741915:case 1073741916:case 1073741917:case 1073741918:case 1073741919:case 1073741920:case 1073741921:case 1073741922:case 1073741923:case 1073742044:
				keyLocation = 3;
				break;
			default:
				keyLocation = 0;
			}
			var keyCode1;
			switch(keyCode) {
			case 8:
				keyCode1 = 8;
				break;
			case 9:
				keyCode1 = 9;
				break;
			case 13:
				keyCode1 = 13;
				break;
			case 27:
				keyCode1 = 27;
				break;
			case 32:
				keyCode1 = 32;
				break;
			case 33:
				keyCode1 = 49;
				break;
			case 34:
				keyCode1 = 222;
				break;
			case 35:
				keyCode1 = 51;
				break;
			case 36:
				keyCode1 = 52;
				break;
			case 37:
				keyCode1 = 53;
				break;
			case 38:
				keyCode1 = 55;
				break;
			case 39:
				keyCode1 = 222;
				break;
			case 40:
				keyCode1 = 57;
				break;
			case 41:
				keyCode1 = 48;
				break;
			case 42:
				keyCode1 = 56;
				break;
			case 44:
				keyCode1 = 188;
				break;
			case 45:
				keyCode1 = 189;
				break;
			case 46:
				keyCode1 = 190;
				break;
			case 47:
				keyCode1 = 191;
				break;
			case 48:
				keyCode1 = 48;
				break;
			case 49:
				keyCode1 = 49;
				break;
			case 50:
				keyCode1 = 50;
				break;
			case 51:
				keyCode1 = 51;
				break;
			case 52:
				keyCode1 = 52;
				break;
			case 53:
				keyCode1 = 53;
				break;
			case 54:
				keyCode1 = 54;
				break;
			case 55:
				keyCode1 = 55;
				break;
			case 56:
				keyCode1 = 56;
				break;
			case 57:
				keyCode1 = 57;
				break;
			case 58:
				keyCode1 = 186;
				break;
			case 59:
				keyCode1 = 186;
				break;
			case 60:
				keyCode1 = 60;
				break;
			case 61:
				keyCode1 = 187;
				break;
			case 62:
				keyCode1 = 190;
				break;
			case 63:
				keyCode1 = 191;
				break;
			case 64:
				keyCode1 = 50;
				break;
			case 91:
				keyCode1 = 219;
				break;
			case 92:
				keyCode1 = 220;
				break;
			case 93:
				keyCode1 = 221;
				break;
			case 94:
				keyCode1 = 54;
				break;
			case 95:
				keyCode1 = 189;
				break;
			case 96:
				keyCode1 = 192;
				break;
			case 97:
				keyCode1 = 65;
				break;
			case 98:
				keyCode1 = 66;
				break;
			case 99:
				keyCode1 = 67;
				break;
			case 100:
				keyCode1 = 68;
				break;
			case 101:
				keyCode1 = 69;
				break;
			case 102:
				keyCode1 = 70;
				break;
			case 103:
				keyCode1 = 71;
				break;
			case 104:
				keyCode1 = 72;
				break;
			case 105:
				keyCode1 = 73;
				break;
			case 106:
				keyCode1 = 74;
				break;
			case 107:
				keyCode1 = 75;
				break;
			case 108:
				keyCode1 = 76;
				break;
			case 109:
				keyCode1 = 77;
				break;
			case 110:
				keyCode1 = 78;
				break;
			case 111:
				keyCode1 = 79;
				break;
			case 112:
				keyCode1 = 80;
				break;
			case 113:
				keyCode1 = 81;
				break;
			case 114:
				keyCode1 = 82;
				break;
			case 115:
				keyCode1 = 83;
				break;
			case 116:
				keyCode1 = 84;
				break;
			case 117:
				keyCode1 = 85;
				break;
			case 118:
				keyCode1 = 86;
				break;
			case 119:
				keyCode1 = 87;
				break;
			case 120:
				keyCode1 = 88;
				break;
			case 121:
				keyCode1 = 89;
				break;
			case 122:
				keyCode1 = 90;
				break;
			case 127:
				keyCode1 = 46;
				break;
			case 1073741881:
				keyCode1 = 20;
				break;
			case 1073741882:
				keyCode1 = 112;
				break;
			case 1073741883:
				keyCode1 = 113;
				break;
			case 1073741884:
				keyCode1 = 114;
				break;
			case 1073741885:
				keyCode1 = 115;
				break;
			case 1073741886:
				keyCode1 = 116;
				break;
			case 1073741887:
				keyCode1 = 117;
				break;
			case 1073741888:
				keyCode1 = 118;
				break;
			case 1073741889:
				keyCode1 = 119;
				break;
			case 1073741890:
				keyCode1 = 120;
				break;
			case 1073741891:
				keyCode1 = 121;
				break;
			case 1073741892:
				keyCode1 = 122;
				break;
			case 1073741893:
				keyCode1 = 123;
				break;
			case 1073741894:
				keyCode1 = 301;
				break;
			case 1073741895:
				keyCode1 = 145;
				break;
			case 1073741896:
				keyCode1 = 19;
				break;
			case 1073741897:
				keyCode1 = 45;
				break;
			case 1073741898:
				keyCode1 = 36;
				break;
			case 1073741899:
				keyCode1 = 33;
				break;
			case 1073741901:
				keyCode1 = 35;
				break;
			case 1073741902:
				keyCode1 = 34;
				break;
			case 1073741903:
				keyCode1 = 39;
				break;
			case 1073741904:
				keyCode1 = 37;
				break;
			case 1073741905:
				keyCode1 = 40;
				break;
			case 1073741906:
				keyCode1 = 38;
				break;
			case 1073741907:
				keyCode1 = 144;
				break;
			case 1073741908:
				keyCode1 = 111;
				break;
			case 1073741909:
				keyCode1 = 106;
				break;
			case 1073741910:
				keyCode1 = 109;
				break;
			case 1073741911:
				keyCode1 = 107;
				break;
			case 1073741912:
				keyCode1 = 108;
				break;
			case 1073741913:
				keyCode1 = 97;
				break;
			case 1073741914:
				keyCode1 = 98;
				break;
			case 1073741915:
				keyCode1 = 99;
				break;
			case 1073741916:
				keyCode1 = 100;
				break;
			case 1073741917:
				keyCode1 = 101;
				break;
			case 1073741918:
				keyCode1 = 102;
				break;
			case 1073741919:
				keyCode1 = 103;
				break;
			case 1073741920:
				keyCode1 = 104;
				break;
			case 1073741921:
				keyCode1 = 105;
				break;
			case 1073741922:
				keyCode1 = 96;
				break;
			case 1073741923:
				keyCode1 = 110;
				break;
			case 1073741925:
				keyCode1 = 302;
				break;
			case 1073741928:
				keyCode1 = 124;
				break;
			case 1073741929:
				keyCode1 = 125;
				break;
			case 1073741930:
				keyCode1 = 126;
				break;
			case 1073741982:
				keyCode1 = 13;
				break;
			case 1073742044:
				keyCode1 = 110;
				break;
			case 1073742048:
				keyCode1 = 17;
				break;
			case 1073742049:
				keyCode1 = 16;
				break;
			case 1073742050:
				keyCode1 = 18;
				break;
			case 1073742051:
				keyCode1 = 15;
				break;
			case 1073742052:
				keyCode1 = 17;
				break;
			case 1073742053:
				keyCode1 = 16;
				break;
			case 1073742054:
				keyCode1 = 18;
				break;
			case 1073742055:
				keyCode1 = 15;
				break;
			default:
				keyCode1 = keyCode;
			}
			var charCode = openfl_ui_Keyboard.__getCharCode(keyCode1,lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey(modifier));
			var event = new openfl_events_KeyboardEvent(type,true,true,charCode,keyCode1,keyLocation,this.__macKeyboard?lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier) || lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier):lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier),lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_altKey(modifier),lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_shiftKey(modifier),lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_ctrlKey(modifier),lime_ui__$KeyModifier_KeyModifier_$Impl_$.get_metaKey(modifier));
			stack.reverse();
			this.__fireEvent(event,stack);
			if(event.__preventDefault) {
				if(type == "keyDown") this.window.onKeyDown.cancel(); else this.window.onKeyUp.cancel();
			}
		}
	}
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		gamepad.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				f(a1,a2,a3);
			};
		})($bind(this,this.onGamepadAxisMove),gamepad));
		gamepad.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				f1(a11,a21);
			};
		})($bind(this,this.onGamepadButtonDown),gamepad));
		gamepad.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				f2(a12,a22);
			};
		})($bind(this,this.onGamepadButtonUp),gamepad));
		gamepad.onDisconnect.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onGamepadDisconnect),gamepad));
	}
	,__onMouse: function(type,x,y,button) {
		if(button > 2) return;
		var targetPoint = new openfl_geom_Point(x,y);
		this.__displayMatrix.__transformInversePoint(targetPoint);
		this.__mouseX = targetPoint.x;
		this.__mouseY = targetPoint.y;
		var stack = [];
		var target = null;
		if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack,true,this)) target = stack[stack.length - 1]; else {
			target = this;
			stack = [this];
		}
		if(target == null) target = this;
		var clickType = null;
		switch(type) {
		case "mouseDown":
			if(target.get_tabEnabled()) this.set_focus(target); else this.set_focus(null);
			this.__mouseDownLeft = target;
			break;
		case "middleMouseDown":
			this.__mouseDownMiddle = target;
			break;
		case "rightMouseDown":
			this.__mouseDownRight = target;
			break;
		case "mouseUp":
			if(this.__mouseDownLeft == target) clickType = "click";
			this.__mouseDownLeft = null;
			break;
		case "middleMouseUp":
			if(this.__mouseDownMiddle == target) clickType = "middleClick";
			this.__mouseDownMiddle = null;
			break;
		case "rightMouseUp":
			if(this.__mouseDownRight == target) clickType = "rightClick";
			this.__mouseDownRight = null;
			break;
		default:
		}
		this.__fireEvent(openfl_events_MouseEvent.__create(type,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
		if(clickType != null) {
			this.__fireEvent(openfl_events_MouseEvent.__create(clickType,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
			if(type == "mouseUp" && (js_Boot.__cast(target , openfl_display_InteractiveObject)).doubleClickEnabled) {
				var currentTime = openfl_Lib.getTimer();
				if(currentTime - this.__lastClickTime < 500) {
					this.__fireEvent(openfl_events_MouseEvent.__create("doubleClick",button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
					this.__lastClickTime = 0;
				} else this.__lastClickTime = currentTime;
			}
		}
		if(openfl_ui_Mouse.__cursor == "auto") {
			var cursor = null;
			if(this.__mouseDownLeft != null) cursor = this.__mouseDownLeft.__getCursor(); else {
				var _g = 0;
				while(_g < stack.length) {
					var target1 = stack[_g];
					++_g;
					cursor = target1.__getCursor();
					if(cursor != null) {
						lime_ui_Mouse.set_cursor(cursor);
						break;
					}
				}
			}
			if(cursor == null) lime_ui_Mouse.set_cursor(lime_ui_MouseCursor.ARROW);
		}
		var event;
		var localPoint;
		if(target != this.__mouseOverTarget) {
			if(this.__mouseOverTarget != null) {
				if(this.__mouseOverTarget == this) localPoint = targetPoint; else localPoint = this.__mouseOverTarget.globalToLocal(targetPoint);
				event = openfl_events_MouseEvent.__create("mouseOut",button,this.__mouseX,this.__mouseY,localPoint,this.__mouseOverTarget);
				this.__mouseOverTarget.__dispatchEvent(event);
			}
		}
		var _g1 = 0;
		var _g11 = this.__rollOutStack;
		while(_g1 < _g11.length) {
			var target2 = _g11[_g1];
			++_g1;
			if(HxOverrides.indexOf(stack,target2,0) == -1) {
				HxOverrides.remove(this.__rollOutStack,target2);
				localPoint = this.__mouseOverTarget.globalToLocal(targetPoint);
				event = openfl_events_MouseEvent.__create("rollOut",button,this.__mouseX,this.__mouseY,localPoint,this.__mouseOverTarget);
				event.bubbles = false;
				target2.__dispatchEvent(event);
			}
		}
		var _g2 = 0;
		while(_g2 < stack.length) {
			var target3 = stack[_g2];
			++_g2;
			if(HxOverrides.indexOf(this.__rollOutStack,target3,0) == -1) {
				if(target3.hasEventListener("rollOver")) {
					localPoint = target3.globalToLocal(targetPoint);
					event = openfl_events_MouseEvent.__create("rollOver",button,this.__mouseX,this.__mouseY,localPoint,target3);
					event.bubbles = false;
					target3.__dispatchEvent(event);
				}
				if(target3.hasEventListener("rollOut")) this.__rollOutStack.push(target3);
			}
		}
		if(target != this.__mouseOverTarget) {
			if(target != null) {
				if(target == this) localPoint = targetPoint; else localPoint = target.globalToLocal(targetPoint);
				event = openfl_events_MouseEvent.__create("mouseOver",button,this.__mouseX,this.__mouseY,localPoint,target);
				event.bubbles = true;
				target.__dispatchEvent(event);
			}
			this.__mouseOverTarget = target;
		}
		if(this.__dragObject != null) {
			this.__drag(targetPoint);
			var dropTarget = null;
			if(this.__mouseOverTarget == this.__dragObject) {
				var cacheMouseEnabled = this.__dragObject.mouseEnabled;
				var cacheMouseChildren = this.__dragObject.mouseChildren;
				this.__dragObject.mouseEnabled = false;
				this.__dragObject.mouseChildren = false;
				var stack1 = [];
				if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack1,true,this)) dropTarget = stack1[stack1.length - 1];
				this.__dragObject.mouseEnabled = cacheMouseEnabled;
				this.__dragObject.mouseChildren = cacheMouseChildren;
			} else if(this.__mouseOverTarget != this) dropTarget = this.__mouseOverTarget;
			this.__dragObject.dropTarget = dropTarget;
		}
	}
	,__onMouseWheel: function(deltaX,deltaY) {
		var x = this.__mouseX;
		var y = this.__mouseY;
		var stack = [];
		var target = null;
		if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack,true,this)) target = stack[stack.length - 1]; else {
			target = this;
			stack = [this];
		}
		if(target == null) target = this;
		var targetPoint = new openfl_geom_Point(x,y);
		this.__displayMatrix.__transformInversePoint(targetPoint);
		var delta = deltaY | 0;
		this.__fireEvent(openfl_events_MouseEvent.__create("mouseWheel",0,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target,delta),stack);
	}
	,__onTouch: function(type,touch) {
		var point = new openfl_geom_Point(Math.round(touch.x * this.window.__width * this.window.__scale),Math.round(touch.y * this.window.__height * this.window.__scale));
		this.__displayMatrix.__transformInversePoint(point);
		var touchX = point.x;
		var touchY = point.y;
		var __stack = [];
		if(this.__hitTest(touchX,touchY,false,__stack,true,this)) {
			var target = __stack[__stack.length - 1];
			if(target == null) target = this;
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl_events_TouchEvent.__create(type,null,touchX,touchY,localPoint,target);
			touchEvent.touchPointID = touch.id;
			touchEvent.isPrimaryTouchPoint = this.__primaryTouch == touch;
			this.__fireEvent(touchEvent,__stack);
		} else {
			var touchEvent1 = openfl_events_TouchEvent.__create(type,null,touchX,touchY,point,this);
			touchEvent1.touchPointID = touch.id;
			touchEvent1.isPrimaryTouchPoint = this.__primaryTouch == touch;
			this.__fireEvent(touchEvent1,[this.stage]);
		}
	}
	,__resize: function() {
		var cacheWidth = this.stageWidth;
		var cacheHeight = this.stageHeight;
		var windowWidth = this.window.__width * this.window.__scale | 0;
		var windowHeight = this.window.__height * this.window.__scale | 0;
		this.__logicalWidth = this.window.__width;
		this.__logicalHeight = this.window.__height;
		this.__displayMatrix.identity();
		if(this.__logicalWidth == 0 && this.__logicalHeight == 0) {
			this.stageWidth = windowWidth;
			this.stageHeight = windowHeight;
		} else {
			this.stageWidth = this.__logicalWidth;
			this.stageHeight = this.__logicalHeight;
			var scaleX = windowWidth / this.stageWidth;
			var scaleY = windowHeight / this.stageHeight;
			var targetScale = Math.min(scaleX,scaleY);
			var offsetX = Math.round((windowWidth - this.stageWidth * targetScale) / 2);
			var offsetY = Math.round((windowHeight - this.stageHeight * targetScale) / 2);
			this.__displayMatrix.scale(targetScale,targetScale);
			this.__displayMatrix.translate(offsetX,offsetY);
		}
		var _g = 0;
		var _g1 = this.stage3Ds;
		while(_g < _g1.get_length()) {
			var stage3D = _g1.get(_g);
			++_g;
			stage3D.__resize(this.stageWidth,this.stageHeight);
		}
		if(this.__renderer != null) this.__renderer.resize(windowWidth,windowHeight);
		if(this.stageWidth != cacheWidth || this.stageHeight != cacheHeight) this.__dispatchEvent(new openfl_events_Event("resize"));
	}
	,__setLogicalSize: function(width,height) {
		this.__logicalWidth = width;
		this.__logicalHeight = height;
		this.__resize();
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(bounds == null) this.__dragBounds = null; else this.__dragBounds = bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			if(lockCenter) {
				this.__dragOffsetX = 0;
				this.__dragOffsetY = 0;
			} else {
				var mouse = new openfl_geom_Point(this.get_mouseX(),this.get_mouseY());
				var parent = this.__dragObject.parent;
				if(parent != null) parent.__getWorldTransform().__transformInversePoint(mouse);
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__update: function(transformOnly,updateChildren,maskGrahpics) {
		if(transformOnly) {
			if(openfl_display_DisplayObject.__worldTransformDirty > 0) {
				openfl_display_DisplayObjectContainer.prototype.__update.call(this,true,updateChildren,maskGrahpics);
				if(updateChildren) {
					openfl_display_DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl_display_DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl_display_DisplayObject.__worldRenderDirty > 0) {
			openfl_display_DisplayObjectContainer.prototype.__update.call(this,false,updateChildren,maskGrahpics);
			if(updateChildren) {
				openfl_display_DisplayObject.__worldTransformDirty = 0;
				openfl_display_DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value & 16777215,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			var oldFocus = this.__focus;
			this.__focus = value;
			this.__cacheFocus = value;
			if(oldFocus != null) {
				var event = new openfl_events_FocusEvent("focusOut",true,false,this.__focus,false,0);
				var stack = [];
				oldFocus.__getInteractive(stack);
				stack.reverse();
				this.__fireEvent(event,stack);
			}
			if(this.__focus != null) {
				var event1 = new openfl_events_FocusEvent("focusIn",true,false,oldFocus,false,0);
				var stack1 = [];
				value.__getInteractive(stack1);
				stack1.reverse();
				this.__fireEvent(event1,stack1);
			}
		}
		return this.__focus;
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,__class__: openfl_display_Stage
	,__properties__: $extend(openfl_display_DisplayObjectContainer.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_color:"set_color"})
});
var openfl_display_Stage3D = function() {
	openfl_events_EventDispatcher.call(this);
	this.set_x(0);
	this.set_y(0);
	this.visible = true;
};
$hxClasses["openfl.display.Stage3D"] = openfl_display_Stage3D;
openfl_display_Stage3D.__name__ = ["openfl","display","Stage3D"];
openfl_display_Stage3D.__super__ = openfl_events_EventDispatcher;
openfl_display_Stage3D.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	context3D: null
	,visible: null
	,x: null
	,y: null
	,__contextRequested: null
	,__canvas: null
	,__style: null
	,__webgl: null
	,__createContext: function(stage,renderSession) {
		if(renderSession.gl != null) {
			this.context3D = new openfl_display3D_Context3D(this,renderSession);
			this.__dispatchCreate();
		} else {
			this.__canvas = window.document.createElement("canvas");
			this.__canvas.width = stage.stageWidth;
			this.__canvas.height = stage.stageHeight;
			var $window = stage.window;
			var options = { alpha : Object.prototype.hasOwnProperty.call($window.config,"background") && $window.config.background == null?true:false, antialias : Object.prototype.hasOwnProperty.call($window.config,"antialiasing")?$window.config.antialiasing > 0:false, depth : Object.prototype.hasOwnProperty.call($window.config,"depthBuffer")?$window.config.depthBuffer:true, premultipliedAlpha : true, stencil : Object.prototype.hasOwnProperty.call($window.config,"stencilBuffer")?$window.config.stencilBuffer:false, preserveDrawingBuffer : false};
			this.__webgl = js_html__$CanvasElement_CanvasUtil.getContextWebGL(this.__canvas,options);
			if(this.__webgl != null) {
				lime_graphics_opengl_GL.context = this.__webgl;
				this.context3D = new openfl_display3D_Context3D(this,renderSession);
				renderSession.element.appendChild(this.__canvas);
				this.__style = this.__canvas.style;
				this.__style.setProperty("position","absolute",null);
				this.__style.setProperty("top","0",null);
				this.__style.setProperty("left","0",null);
				this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
				this.__style.setProperty("z-index","-1",null);
				this.__dispatchCreate();
			} else this.__dispatchError();
		}
	}
	,__dispatchError: function() {
		this.__contextRequested = false;
		this.dispatchEvent(new openfl_events_ErrorEvent("error",false,false,"Context3D not available"));
	}
	,__dispatchCreate: function() {
		if(this.__contextRequested) {
			this.__contextRequested = false;
			this.dispatchEvent(new openfl_events_Event("context3DCreate"));
		}
	}
	,__renderCairo: function(stage,renderSession) {
		if(!this.visible) return;
		if(this.__contextRequested) {
			this.__dispatchError();
			this.__contextRequested = false;
		}
	}
	,__renderCanvas: function(stage,renderSession) {
		if(!this.visible) return;
		if(this.__contextRequested) {
			this.__dispatchError();
			this.__contextRequested = false;
		}
	}
	,__renderDOM: function(stage,renderSession) {
		if(!this.visible) return;
		if(this.__contextRequested && this.context3D == null) this.__createContext(stage,renderSession);
		if(this.context3D != null) {
			lime_graphics_opengl_GL.context = this.__webgl;
			this.__resetContext3DStates();
		}
	}
	,__renderGL: function(stage,renderSession) {
		if(!this.visible) return;
		if(this.__contextRequested && this.context3D == null) this.__createContext(stage,renderSession);
		if(this.context3D != null) {
			this.__resetContext3DStates();
			if(this.context3D != null) {
				renderSession.gl.depthMask(true);
				renderSession.blendModeManager.setBlendMode(null);
				if(renderSession.shaderManager.currentShader != null) {
					renderSession.shaderManager.setShader(null);
					if(this.context3D.__program != null) this.context3D.__program.__use();
				}
			}
		}
	}
	,__resize: function(width,height) {
		if(this.__canvas != null) {
			this.__canvas.width = width;
			this.__canvas.height = height;
		}
	}
	,__resetContext3DStates: function() {
		this.context3D.__updateBlendFactors();
		this.context3D.__updateBackbufferViewport();
	}
	,set_x: function(value) {
		this.x = value;
		if(this.context3D != null) this.context3D.__updateBackbufferViewport();
		return value;
	}
	,set_y: function(value) {
		this.y = value;
		if(this.context3D != null) this.context3D.__updateBackbufferViewport();
		return value;
	}
	,__class__: openfl_display_Stage3D
	,__properties__: {set_y:"set_y",set_x:"set_x"}
});
var openfl_display_Window = function(config) {
	lime_ui_Window.call(this,config);
};
$hxClasses["openfl.display.Window"] = openfl_display_Window;
openfl_display_Window.__name__ = ["openfl","display","Window"];
openfl_display_Window.__super__ = lime_ui_Window;
openfl_display_Window.prototype = $extend(lime_ui_Window.prototype,{
	create: function(application) {
		lime_ui_Window.prototype.create.call(this,application);
		this.stage = new openfl_display_Stage(this,Object.prototype.hasOwnProperty.call(this.config,"background")?this.config.background:16777215);
		if(Object.prototype.hasOwnProperty.call(this.config,"resizable") && !this.config.resizable) this.stage.__setLogicalSize(this.config.width,this.config.height);
		application.addModule(this.stage);
	}
	,__class__: openfl_display_Window
});
var openfl_display3D_Context3D = function(stage3D,renderSession) {
	this.driverInfo = "OpenGL (Direct blitting)";
	this.backBufferWidth = 0;
	this.backBufferHeight = 0;
	openfl_events_EventDispatcher.call(this);
	this.__stage3D = stage3D;
	this.__renderSession = renderSession;
	var this1;
	this1 = new Float32Array(512);
	this.__vertexConstants = this1;
	var this2;
	this2 = new Float32Array(512);
	this.__fragmentConstants = this2;
	var array = [1.0,1.0,1.0,1.0];
	var this3;
	if(array != null) this3 = new Float32Array(array); else this3 = null;
	this.__positionScale = this3;
	this.__samplerDirty = 0;
	this.__samplerTextures = openfl__$Vector_Vector_$Impl_$.toObjectVector(null,8);
	this.__samplerStates = [];
	var _g = 0;
	while(_g < 8) {
		var i = _g++;
		this.__samplerStates[i] = new openfl__$internal_stage3D_SamplerState(9729,9729,33071,33071);
	}
	this.maxBackBufferHeight = this.maxBackBufferWidth = lime_graphics_opengl_GL.context.getParameter(3386);
	this.__backBufferAntiAlias = 0;
	this.__backBufferEnableDepthAndStencil = true;
	this.__backBufferWantsBestResolution = false;
	this.__frameCount = 0;
	this.__rttDepthAndStencil = false;
	this.__samplerDirty = 0;
	this.__stencilCompareMode = 0;
	this.__stencilRef = 0;
	this.__stencilReadMask = 255;
	this.__supportsPackedDepthStencil = true;
	this.__stats = openfl__$Vector_Vector_$Impl_$.toIntVector(null,11);
	this.__statsCache = openfl__$Vector_Vector_$Impl_$.toIntVector(null,11);
	openfl__$internal_stage3D_GLUtils.CheckGLError();
	var vendor = lime_graphics_opengl_GL.context.getParameter(7936);
	openfl__$internal_stage3D_GLUtils.CheckGLError();
	var version = lime_graphics_opengl_GL.context.getParameter(7938);
	openfl__$internal_stage3D_GLUtils.CheckGLError();
	var renderer = lime_graphics_opengl_GL.context.getParameter(7937);
	openfl__$internal_stage3D_GLUtils.CheckGLError();
	var glslVersion = lime_graphics_opengl_GL.context.getParameter(35724);
	openfl__$internal_stage3D_GLUtils.CheckGLError();
	this.driverInfo = "OpenGL" + " Vendor=" + vendor + " Version=" + version + " Renderer=" + renderer + " GLSL=" + glslVersion;
	var _g1 = 0;
	var _g2 = this.__stats.get_length();
	while(_g1 < _g2) {
		var i1 = _g1++;
		this.__stats.set(i1,0);
	}
	openfl_display3D_Context3D.__stateCache.clearSettings();
};
$hxClasses["openfl.display3D.Context3D"] = openfl_display3D_Context3D;
openfl_display3D_Context3D.__name__ = ["openfl","display3D","Context3D"];
openfl_display3D_Context3D.__super__ = openfl_events_EventDispatcher;
openfl_display3D_Context3D.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	backBufferHeight: null
	,backBufferWidth: null
	,driverInfo: null
	,maxBackBufferHeight: null
	,maxBackBufferWidth: null
	,__backBufferAntiAlias: null
	,__backBufferEnableDepthAndStencil: null
	,__backBufferWantsBestResolution: null
	,__fragmentConstants: null
	,__frameCount: null
	,__positionScale: null
	,__program: null
	,__renderSession: null
	,__renderToTexture: null
	,__rttDepthAndStencil: null
	,__samplerDirty: null
	,__samplerTextures: null
	,__samplerStates: null
	,__stage3D: null
	,__stats: null
	,__statsCache: null
	,__stencilCompareMode: null
	,__stencilRef: null
	,__stencilReadMask: null
	,__supportsPackedDepthStencil: null
	,__vertexConstants: null
	,createRectangleTexture: function(width,height,format,optimizeForRenderToTexture) {
		return new openfl_display3D_textures_RectangleTexture(this,width,height,openfl_display3D__$Context3DTextureFormat_Context3DTextureFormat_$Impl_$.toString(format),optimizeForRenderToTexture);
	}
	,__setViewport: function(originX,originY,width,height) {
		if(openfl_display3D_Context3D.__stateCache.updateViewport(originX,originY,width,height)) {
			lime_graphics_opengl_GL.context.viewport(originX,originY,width,height);
			openfl__$internal_stage3D_GLUtils.CheckGLError();
		}
	}
	,__statsAdd: function(stat,value) {
		var _g = stat;
		var value1 = this.__stats.get(_g) + value;
		this.__stats.set(_g,value1);
		return this.__stats.get(stat);
	}
	,__statsIncrement: function(stat) {
		var _g = stat;
		var value = this.__stats.get(_g) + 1;
		this.__stats.set(_g,value);
	}
	,__updateBlendFactors: function() {
		if(openfl_display3D_Context3D.__stateCache._srcBlendFactor == null || openfl_display3D_Context3D.__stateCache._destBlendFactor == null) return;
		var src = 1;
		var dest = 0;
		var _g = openfl_display3D_Context3D.__stateCache._srcBlendFactor;
		switch(_g) {
		case 2:
			src = 1;
			break;
		case 9:
			src = 0;
			break;
		case 7:
			src = 770;
			break;
		case 0:
			src = 772;
			break;
		case 1:
			src = 774;
			break;
		case 5:
			src = 771;
			break;
		case 3:
			src = 773;
			break;
		case 4:
			src = 775;
			break;
		default:
			throw new js__$Boot_HaxeError(new openfl_errors_IllegalOperationError());
		}
		var _g1 = openfl_display3D_Context3D.__stateCache._destBlendFactor;
		switch(_g1) {
		case 2:
			dest = 1;
			break;
		case 9:
			dest = 0;
			break;
		case 7:
			dest = 770;
			break;
		case 8:
			dest = 768;
			break;
		case 0:
			dest = 772;
			break;
		case 5:
			dest = 771;
			break;
		case 6:
			dest = 769;
			break;
		case 3:
			dest = 773;
			break;
		default:
			throw new js__$Boot_HaxeError(new openfl_errors_IllegalOperationError());
		}
		lime_graphics_opengl_GL.context.enable(3042);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
		lime_graphics_opengl_GL.context.blendFunc(src,dest);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
	}
	,__updateBackbufferViewport: function() {
		if(this.__renderToTexture == null) this.__setViewport(this.__stage3D.x | 0,this.__stage3D.y | 0,this.backBufferWidth,this.backBufferHeight);
	}
	,__class__: openfl_display3D_Context3D
});
var openfl_display3D__$Context3DTextureFormat_Context3DTextureFormat_$Impl_$ = {};
$hxClasses["openfl.display3D._Context3DTextureFormat.Context3DTextureFormat_Impl_"] = openfl_display3D__$Context3DTextureFormat_Context3DTextureFormat_$Impl_$;
openfl_display3D__$Context3DTextureFormat_Context3DTextureFormat_$Impl_$.__name__ = ["openfl","display3D","_Context3DTextureFormat","Context3DTextureFormat_Impl_"];
openfl_display3D__$Context3DTextureFormat_Context3DTextureFormat_$Impl_$.toString = function(value) {
	switch(value) {
	case 0:
		return "bgrPacked565";
	case 1:
		return "bgra";
	case 2:
		return "bgraPacked4444";
	case 3:
		return "compressed";
	case 4:
		return "compressedAlpha";
	case 5:
		return "rgbaHalfFloat";
	default:
		return null;
	}
};
var openfl_display3D_Program3D = function() { };
$hxClasses["openfl.display3D.Program3D"] = openfl_display3D_Program3D;
openfl_display3D_Program3D.__name__ = ["openfl","display3D","Program3D"];
openfl_display3D_Program3D.prototype = {
	__alphaSamplerUniforms: null
	,__fragmentUniformMap: null
	,__programID: null
	,__samplerUniforms: null
	,__vertexUniformMap: null
	,__use: function() {
		lime_graphics_opengl_GL.useProgram(this.__programID);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
		this.__vertexUniformMap.markAllDirty();
		this.__fragmentUniformMap.markAllDirty();
		var _g_head = this.__samplerUniforms.h;
		var _g_val = null;
		while(_g_head != null) {
			var sampler;
			sampler = (function($this) {
				var $r;
				_g_val = _g_head[0];
				_g_head = _g_head[1];
				$r = _g_val;
				return $r;
			}(this));
			if(sampler.regCount == 1) {
				lime_graphics_opengl_GL.context.uniform1i(sampler.location,sampler.regIndex);
				openfl__$internal_stage3D_GLUtils.CheckGLError();
			} else throw new js__$Boot_HaxeError(new openfl_errors_IllegalOperationError("!!! TODO: uniform location on webgl"));
		}
		var _g_head1 = this.__alphaSamplerUniforms.h;
		var _g_val1 = null;
		while(_g_head1 != null) {
			var sampler1;
			sampler1 = (function($this) {
				var $r;
				_g_val1 = _g_head1[0];
				_g_head1 = _g_head1[1];
				$r = _g_val1;
				return $r;
			}(this));
			if(sampler1.regCount == 1) {
				lime_graphics_opengl_GL.context.uniform1i(sampler1.location,sampler1.regIndex);
				openfl__$internal_stage3D_GLUtils.CheckGLError();
			} else throw new js__$Boot_HaxeError(new openfl_errors_IllegalOperationError("!!! TODO: uniform location on webgl"));
		}
	}
	,__class__: openfl_display3D_Program3D
};
var openfl_display3D__$Program3D_Uniform = function() { };
$hxClasses["openfl.display3D._Program3D.Uniform"] = openfl_display3D__$Program3D_Uniform;
openfl_display3D__$Program3D_Uniform.__name__ = ["openfl","display3D","_Program3D","Uniform"];
openfl_display3D__$Program3D_Uniform.prototype = {
	location: null
	,regIndex: null
	,regCount: null
	,__class__: openfl_display3D__$Program3D_Uniform
};
var openfl_display3D__$Program3D_UniformMap = function() { };
$hxClasses["openfl.display3D._Program3D.UniformMap"] = openfl_display3D__$Program3D_UniformMap;
openfl_display3D__$Program3D_UniformMap.__name__ = ["openfl","display3D","_Program3D","UniformMap"];
openfl_display3D__$Program3D_UniformMap.prototype = {
	__allDirty: null
	,__anyDirty: null
	,markAllDirty: function() {
		this.__allDirty = true;
		this.__anyDirty = true;
	}
	,__class__: openfl_display3D__$Program3D_UniformMap
};
var openfl_display3D_textures_TextureBase = function(context,target) {
	this.__outputTextureMemoryUsage = false;
	openfl_events_EventDispatcher.call(this);
	this.__context = context;
	this.__textureTarget = target;
	this.__textureID = lime_graphics_opengl_GL.context.createTexture();
	this.__internalFormat = 6408;
	this.__format = 6408;
	this.__memoryUsage = 0;
	this.__compressedMemoryUsage = 0;
};
$hxClasses["openfl.display3D.textures.TextureBase"] = openfl_display3D_textures_TextureBase;
openfl_display3D_textures_TextureBase.__name__ = ["openfl","display3D","textures","TextureBase"];
openfl_display3D_textures_TextureBase.__super__ = openfl_events_EventDispatcher;
openfl_display3D_textures_TextureBase.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	__compressedMemoryUsage: null
	,__context: null
	,__format: null
	,__height: null
	,__internalFormat: null
	,__memoryUsage: null
	,__optimizeForRenderToTexture: null
	,__outputTextureMemoryUsage: null
	,__textureID: null
	,__textureTarget: null
	,__width: null
	,__trackMemoryUsage: function(memory) {
		if(this.__memoryUsage == 0) this.__context.__statsIncrement(3);
		this.__memoryUsage += memory;
		var currentMemory = this.__context.__statsAdd(8,memory);
		if(this.__outputTextureMemoryUsage) haxe_Log.trace(" + Texture GPU Memory (+" + memory + ") - Current Memory : " + currentMemory,{ fileName : "TextureBase.hx", lineNumber : 268, className : "openfl.display3D.textures.TextureBase", methodName : "__trackMemoryUsage"});
	}
	,__class__: openfl_display3D_textures_TextureBase
});
var openfl_display3D_textures_RectangleTexture = function(context,width,height,format,optimizeForRenderToTexture) {
	openfl_display3D_textures_TextureBase.call(this,context,3553);
	this.__width = width;
	this.__height = height;
	this.__optimizeForRenderToTexture = optimizeForRenderToTexture;
	this.uploadFromTypedArray(null);
};
$hxClasses["openfl.display3D.textures.RectangleTexture"] = openfl_display3D_textures_RectangleTexture;
openfl_display3D_textures_RectangleTexture.__name__ = ["openfl","display3D","textures","RectangleTexture"];
openfl_display3D_textures_RectangleTexture.__super__ = openfl_display3D_textures_TextureBase;
openfl_display3D_textures_RectangleTexture.prototype = $extend(openfl_display3D_textures_TextureBase.prototype,{
	uploadFromTypedArray: function(data) {
		lime_graphics_opengl_GL.context.bindTexture(this.__textureTarget,this.__textureID);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
		lime_graphics_opengl_GL.context.texImage2D(this.__textureTarget,0,this.__internalFormat,this.__width,this.__height,0,this.__format,5121,data);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
		lime_graphics_opengl_GL.context.bindTexture(this.__textureTarget,null);
		openfl__$internal_stage3D_GLUtils.CheckGLError();
		var memUsage = this.__width * this.__height * 4;
		this.__trackMemoryUsage(memUsage);
	}
	,__class__: openfl_display3D_textures_RectangleTexture
});
var openfl_errors_Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	this.name = "Error";
};
$hxClasses["openfl.errors.Error"] = openfl_errors_Error;
openfl_errors_Error.__name__ = ["openfl","errors","Error"];
openfl_errors_Error.prototype = {
	errorID: null
	,message: null
	,name: null
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: openfl_errors_Error
};
var openfl_errors_IllegalOperationError = function(message) {
	if(message == null) message = "";
	openfl_errors_Error.call(this,message,0);
	this.name = "IllegalOperationError";
};
$hxClasses["openfl.errors.IllegalOperationError"] = openfl_errors_IllegalOperationError;
openfl_errors_IllegalOperationError.__name__ = ["openfl","errors","IllegalOperationError"];
openfl_errors_IllegalOperationError.__super__ = openfl_errors_Error;
openfl_errors_IllegalOperationError.prototype = $extend(openfl_errors_Error.prototype,{
	__class__: openfl_errors_IllegalOperationError
});
var openfl_events_ActivityEvent = function(type,bubbles,cancelable,activating) {
	if(activating == null) activating = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.activating = activating;
};
$hxClasses["openfl.events.ActivityEvent"] = openfl_events_ActivityEvent;
openfl_events_ActivityEvent.__name__ = ["openfl","events","ActivityEvent"];
openfl_events_ActivityEvent.__super__ = openfl_events_Event;
openfl_events_ActivityEvent.prototype = $extend(openfl_events_Event.prototype,{
	activating: null
	,__class__: openfl_events_ActivityEvent
});
var openfl_events_TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl_events_TextEvent;
openfl_events_TextEvent.__name__ = ["openfl","events","TextEvent"];
openfl_events_TextEvent.__super__ = openfl_events_Event;
openfl_events_TextEvent.prototype = $extend(openfl_events_Event.prototype,{
	text: null
	,__class__: openfl_events_TextEvent
});
var openfl_events_ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_TextEvent.call(this,type,bubbles,cancelable,text);
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl_events_ErrorEvent;
openfl_events_ErrorEvent.__name__ = ["openfl","events","ErrorEvent"];
openfl_events_ErrorEvent.__super__ = openfl_events_TextEvent;
openfl_events_ErrorEvent.prototype = $extend(openfl_events_TextEvent.prototype,{
	errorID: null
	,__class__: openfl_events_ErrorEvent
});
var openfl_events__$EventDispatcher_DispatchIterator = function(list) {
	this.list = list;
	this.index = list.length;
};
$hxClasses["openfl.events._EventDispatcher.DispatchIterator"] = openfl_events__$EventDispatcher_DispatchIterator;
openfl_events__$EventDispatcher_DispatchIterator.__name__ = ["openfl","events","_EventDispatcher","DispatchIterator"];
openfl_events__$EventDispatcher_DispatchIterator.prototype = {
	active: null
	,index: null
	,isCopy: null
	,list: null
	,copy: function() {
		if(this.index < this.list.length && !this.isCopy) {
			this.list = this.list.slice();
			this.isCopy = true;
		}
	}
	,hasNext: function() {
		if(this.index < this.list.length) return true; else {
			this.active = false;
			return false;
		}
	}
	,next: function() {
		return this.list[this.index++];
	}
	,remove: function(listener,listIndex) {
		if(this.active) {
			if(!this.isCopy) {
				if(listIndex < this.index) this.index--;
			} else {
				var _g1 = this.index;
				var _g = this.list.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.list[i] == listener) {
						this.list.splice(i,1);
						break;
					}
				}
			}
		}
	}
	,reset: function(list) {
		this.list = list;
		this.active = true;
		this.index = 0;
	}
	,__class__: openfl_events__$EventDispatcher_DispatchIterator
};
var openfl_events__$EventDispatcher_Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl_events__$EventDispatcher_Listener;
openfl_events__$EventDispatcher_Listener.__name__ = ["openfl","events","_EventDispatcher","Listener"];
openfl_events__$EventDispatcher_Listener.prototype = {
	callback: null
	,priority: null
	,useCapture: null
	,match: function(callback,useCapture) {
		return Reflect.compareMethods(this.callback,callback) && this.useCapture == useCapture;
	}
	,__class__: openfl_events__$EventDispatcher_Listener
};
var openfl_events_FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl_events_FocusEvent;
openfl_events_FocusEvent.__name__ = ["openfl","events","FocusEvent"];
openfl_events_FocusEvent.__super__ = openfl_events_Event;
openfl_events_FocusEvent.prototype = $extend(openfl_events_Event.prototype,{
	keyCode: null
	,relatedObject: null
	,shiftKey: null
	,__class__: openfl_events_FocusEvent
});
var openfl_events_FullScreenEvent = function(type,bubbles,cancelable,fullScreen,interactive) {
	if(interactive == null) interactive = false;
	if(fullScreen == null) fullScreen = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_ActivityEvent.call(this,type,bubbles,cancelable);
	this.fullScreen = fullScreen;
	this.interactive = interactive;
};
$hxClasses["openfl.events.FullScreenEvent"] = openfl_events_FullScreenEvent;
openfl_events_FullScreenEvent.__name__ = ["openfl","events","FullScreenEvent"];
openfl_events_FullScreenEvent.__super__ = openfl_events_ActivityEvent;
openfl_events_FullScreenEvent.prototype = $extend(openfl_events_ActivityEvent.prototype,{
	fullScreen: null
	,interactive: null
	,__class__: openfl_events_FullScreenEvent
});
var openfl_events_GameInputEvent = function(type,bubbles,cancelable,device) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.device = device;
};
$hxClasses["openfl.events.GameInputEvent"] = openfl_events_GameInputEvent;
openfl_events_GameInputEvent.__name__ = ["openfl","events","GameInputEvent"];
openfl_events_GameInputEvent.__super__ = openfl_events_Event;
openfl_events_GameInputEvent.prototype = $extend(openfl_events_Event.prototype,{
	device: null
	,__class__: openfl_events_GameInputEvent
});
var openfl_events_IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl_events_ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl_events_IOErrorEvent;
openfl_events_IOErrorEvent.__name__ = ["openfl","events","IOErrorEvent"];
openfl_events_IOErrorEvent.__super__ = openfl_events_ErrorEvent;
openfl_events_IOErrorEvent.prototype = $extend(openfl_events_ErrorEvent.prototype,{
	__class__: openfl_events_IOErrorEvent
});
var openfl_events_KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl_events_KeyboardEvent;
openfl_events_KeyboardEvent.__name__ = ["openfl","events","KeyboardEvent"];
openfl_events_KeyboardEvent.__super__ = openfl_events_Event;
openfl_events_KeyboardEvent.prototype = $extend(openfl_events_Event.prototype,{
	altKey: null
	,charCode: null
	,ctrlKey: null
	,commandKey: null
	,controlKey: null
	,keyCode: null
	,keyLocation: null
	,shiftKey: null
	,__class__: openfl_events_KeyboardEvent
});
var openfl_events_MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
	this.stageX = NaN;
	this.stageY = NaN;
};
$hxClasses["openfl.events.MouseEvent"] = openfl_events_MouseEvent;
openfl_events_MouseEvent.__name__ = ["openfl","events","MouseEvent"];
openfl_events_MouseEvent.__create = function(type,button,stageX,stageY,local,target,delta) {
	if(delta == null) delta = 0;
	switch(type) {
	case "mouseDown":
		openfl_events_MouseEvent.__buttonDown = true;
		break;
	case "mouseUp":
		openfl_events_MouseEvent.__buttonDown = false;
		break;
	default:
	}
	var event = new openfl_events_MouseEvent(type,true,false,local.x,local.y,null,openfl_events_MouseEvent.__ctrlKey,openfl_events_MouseEvent.__altKey,openfl_events_MouseEvent.__shiftKey,openfl_events_MouseEvent.__buttonDown,delta,openfl_events_MouseEvent.__commandKey);
	event.stageX = stageX;
	event.stageY = stageY;
	event.target = target;
	return event;
};
openfl_events_MouseEvent.__super__ = openfl_events_Event;
openfl_events_MouseEvent.prototype = $extend(openfl_events_Event.prototype,{
	altKey: null
	,buttonDown: null
	,commandKey: null
	,clickCount: null
	,ctrlKey: null
	,delta: null
	,localX: null
	,localY: null
	,relatedObject: null
	,shiftKey: null
	,stageX: null
	,stageY: null
	,updateAfterEvent: function() {
	}
	,__class__: openfl_events_MouseEvent
});
var openfl_events_ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["openfl.events.ProgressEvent"] = openfl_events_ProgressEvent;
openfl_events_ProgressEvent.__name__ = ["openfl","events","ProgressEvent"];
openfl_events_ProgressEvent.__super__ = openfl_events_Event;
openfl_events_ProgressEvent.prototype = $extend(openfl_events_Event.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,__class__: openfl_events_ProgressEvent
});
var openfl_events_SecurityErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.SecurityErrorEvent"] = openfl_events_SecurityErrorEvent;
openfl_events_SecurityErrorEvent.__name__ = ["openfl","events","SecurityErrorEvent"];
openfl_events_SecurityErrorEvent.__super__ = openfl_events_ErrorEvent;
openfl_events_SecurityErrorEvent.prototype = $extend(openfl_events_ErrorEvent.prototype,{
	__class__: openfl_events_SecurityErrorEvent
});
var openfl_events_TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl_events_Event.call(this,type,bubbles,cancelable);
};
$hxClasses["openfl.events.TimerEvent"] = openfl_events_TimerEvent;
openfl_events_TimerEvent.__name__ = ["openfl","events","TimerEvent"];
openfl_events_TimerEvent.__super__ = openfl_events_Event;
openfl_events_TimerEvent.prototype = $extend(openfl_events_Event.prototype,{
	__class__: openfl_events_TimerEvent
});
var openfl_events_TouchEvent = function(type,bubbles,cancelable,touchPointID,isPrimaryTouchPoint,localX,localY,sizeX,sizeY,pressure,relatedObject,ctrlKey,altKey,shiftKey,commandKey,controlKey,timestamp,touchIntent,samples,isTouchPointCanceled) {
	if(isTouchPointCanceled == null) isTouchPointCanceled = false;
	if(timestamp == null) timestamp = 0;
	if(controlKey == null) controlKey = false;
	if(commandKey == null) commandKey = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(pressure == null) pressure = 0;
	if(sizeY == null) sizeY = 0;
	if(sizeX == null) sizeX = 0;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(isPrimaryTouchPoint == null) isPrimaryTouchPoint = false;
	if(touchPointID == null) touchPointID = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl_events_Event.call(this,type,bubbles,cancelable);
	this.touchPointID = touchPointID;
	this.isPrimaryTouchPoint = isPrimaryTouchPoint;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.pressure = pressure;
	this.relatedObject = relatedObject;
	this.ctrlKey = ctrlKey;
	this.altKey = altKey;
	this.shiftKey = shiftKey;
	this.commandKey = commandKey;
	this.controlKey = controlKey;
	this.stageX = NaN;
	this.stageY = NaN;
};
$hxClasses["openfl.events.TouchEvent"] = openfl_events_TouchEvent;
openfl_events_TouchEvent.__name__ = ["openfl","events","TouchEvent"];
openfl_events_TouchEvent.__create = function(type,touch,stageX,stageY,local,target) {
	var evt = new openfl_events_TouchEvent(type,true,false,0,true,local.x,local.y,1,1,1);
	evt.stageX = stageX;
	evt.stageY = stageY;
	evt.target = target;
	return evt;
};
openfl_events_TouchEvent.__super__ = openfl_events_Event;
openfl_events_TouchEvent.prototype = $extend(openfl_events_Event.prototype,{
	altKey: null
	,commandKey: null
	,controlKey: null
	,ctrlKey: null
	,isPrimaryTouchPoint: null
	,localX: null
	,localY: null
	,pressure: null
	,relatedObject: null
	,shiftKey: null
	,sizeX: null
	,sizeY: null
	,stageX: null
	,stageY: null
	,touchPointID: null
	,__class__: openfl_events_TouchEvent
});
var openfl_events_UncaughtErrorEvent = function(type,bubbles,cancelable,error) {
	if(cancelable == null) cancelable = true;
	if(bubbles == null) bubbles = true;
	openfl_events_ErrorEvent.call(this,type,bubbles,cancelable);
	this.error = error;
};
$hxClasses["openfl.events.UncaughtErrorEvent"] = openfl_events_UncaughtErrorEvent;
openfl_events_UncaughtErrorEvent.__name__ = ["openfl","events","UncaughtErrorEvent"];
openfl_events_UncaughtErrorEvent.__super__ = openfl_events_ErrorEvent;
openfl_events_UncaughtErrorEvent.prototype = $extend(openfl_events_ErrorEvent.prototype,{
	error: null
	,__class__: openfl_events_UncaughtErrorEvent
});
var openfl_events_UncaughtErrorEvents = function() {
	openfl_events_EventDispatcher.call(this);
};
$hxClasses["openfl.events.UncaughtErrorEvents"] = openfl_events_UncaughtErrorEvents;
openfl_events_UncaughtErrorEvents.__name__ = ["openfl","events","UncaughtErrorEvents"];
openfl_events_UncaughtErrorEvents.__super__ = openfl_events_EventDispatcher;
openfl_events_UncaughtErrorEvents.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	__class__: openfl_events_UncaughtErrorEvents
});
var openfl_filters_BitmapFilter = function() {
	this.__numPasses = 0;
};
$hxClasses["openfl.filters.BitmapFilter"] = openfl_filters_BitmapFilter;
openfl_filters_BitmapFilter.__name__ = ["openfl","filters","BitmapFilter"];
openfl_filters_BitmapFilter.prototype = {
	__cacheObject: null
	,__numPasses: null
	,__initShader: function(renderSession,pass) {
		return renderSession.shaderManager.defaultShader;
	}
	,__class__: openfl_filters_BitmapFilter
};
var openfl_filters__$BlurFilter_BlurShader = function() {
	if(this.__glFragmentSource == null) this.__glFragmentSource = "varying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform sampler2D uImage0;\n\t\t\n\t\tvarying vec2 vBlurCoords[7];\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvec4 sum = vec4(0.0);\n\t\t\tsum += texture2D(uImage0, vBlurCoords[0]) * 0.00443;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[1]) * 0.05399;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[2]) * 0.24197;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[3]) * 0.39894;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[4]) * 0.24197;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[5]) * 0.05399;\n\t\t\tsum += texture2D(uImage0, vBlurCoords[6]) * 0.00443;\n\t\t\t\n\t\t\tgl_FragColor = sum;\n\t\t\t\n\t\t}";
	if(this.__glVertexSource == null) this.__glVertexSource = "attribute float aAlpha;\n\t\tattribute vec4 aPosition;\n\t\tattribute vec2 aTexCoord;\n\t\tvarying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\t\n\t\tuniform mat4 uMatrix;\n\t\t\n\t\tuniform vec2 uRadius;\n\t\tvarying vec2 vBlurCoords[7];\n\t\tuniform vec2 uTextureSize;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvAlpha = aAlpha;\n\t\t\tvTexCoord = aTexCoord;\n\t\t\tgl_Position = uMatrix * aPosition;\n\t\t\t\n\t\t\tvec2 r = uRadius / uTextureSize;\n\t\t\tvBlurCoords[0] = aTexCoord - r * 1.0;\n\t\t\tvBlurCoords[1] = aTexCoord - r * 0.75;\n\t\t\tvBlurCoords[2] = aTexCoord - r * 0.5;\n\t\t\tvBlurCoords[3] = aTexCoord;\n\t\t\tvBlurCoords[4] = aTexCoord + r * 0.5;\n\t\t\tvBlurCoords[5] = aTexCoord + r * 0.75;\n\t\t\tvBlurCoords[6] = aTexCoord + r * 1.0;\n\t\t\t\n\t\t}";
	openfl_display_Shader.call(this);
	this.get_data().uRadius.value = [0,0];
};
$hxClasses["openfl.filters._BlurFilter.BlurShader"] = openfl_filters__$BlurFilter_BlurShader;
openfl_filters__$BlurFilter_BlurShader.__name__ = ["openfl","filters","_BlurFilter","BlurShader"];
openfl_filters__$BlurFilter_BlurShader.__super__ = openfl_display_Shader;
openfl_filters__$BlurFilter_BlurShader.prototype = $extend(openfl_display_Shader.prototype,{
	__class__: openfl_filters__$BlurFilter_BlurShader
});
var openfl_filters_BlurFilter = function(blurX,blurY,quality) {
	if(quality == null) quality = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	openfl_filters_BitmapFilter.call(this);
	this.blurX = blurX;
	this.blurY = blurY;
	this.set_quality(quality);
};
$hxClasses["openfl.filters.BlurFilter"] = openfl_filters_BlurFilter;
openfl_filters_BlurFilter.__name__ = ["openfl","filters","BlurFilter"];
openfl_filters_BlurFilter.__super__ = openfl_filters_BitmapFilter;
openfl_filters_BlurFilter.prototype = $extend(openfl_filters_BitmapFilter.prototype,{
	blurX: null
	,blurY: null
	,quality: null
	,horizontalPasses: null
	,verticalPasses: null
	,__initShader: function(renderSession,pass) {
		var data = openfl_filters_BlurFilter.__blurShader.get_data();
		if(pass <= this.horizontalPasses) {
			var scale = Math.pow(0.5,pass >> 1);
			data.uRadius.value[0] = this.blurX * scale;
			data.uRadius.value[1] = 0;
		} else {
			var scale1 = Math.pow(0.5,pass - this.horizontalPasses >> 1);
			data.uRadius.value[0] = 0;
			data.uRadius.value[1] = this.blurY * scale1;
		}
		return openfl_filters_BlurFilter.__blurShader;
	}
	,set_quality: function(value) {
		if(this.blurX <= 0) this.horizontalPasses = 0; else this.horizontalPasses = Math.round(this.blurX * (value / 4)) + 1;
		if(this.blurY <= 0) this.verticalPasses = 0; else this.verticalPasses = Math.round(this.blurY * (value / 4)) + 1;
		this.__numPasses = this.horizontalPasses + this.verticalPasses;
		return this.quality = value;
	}
	,__class__: openfl_filters_BlurFilter
	,__properties__: {set_quality:"set_quality"}
});
var openfl_filters__$ColorMatrixFilter_ColorMatrixShader = function() {
	if(this.__glFragmentSource == null) this.__glFragmentSource = "varying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform sampler2D uImage0;\n\t\t\n\t\tuniform mat4 uMultipliers;\n\t\tuniform vec4 uOffsets;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvec4 color = texture2D (uImage0, vTexCoord);\n\t\t\t\n\t\t\tif (color.a == 0.0) {\n\t\t\t\t\n\t\t\t\tgl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n\t\t\t\t\n\t\t\t} else {\n\t\t\t\t\n\t\t\t\tcolor = vec4 (color.rgb / color.a, color.a);\n\t\t\t\tcolor = uOffsets + color * uMultipliers;\n\t\t\t\t\n\t\t\t\tgl_FragColor = vec4 (color.rgb * color.a * vAlpha, color.a * vAlpha);\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t}";
	openfl_display_Shader.call(this);
	this.get_data().uMultipliers.value = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
	this.get_data().uOffsets.value = [0,0,0,0];
};
$hxClasses["openfl.filters._ColorMatrixFilter.ColorMatrixShader"] = openfl_filters__$ColorMatrixFilter_ColorMatrixShader;
openfl_filters__$ColorMatrixFilter_ColorMatrixShader.__name__ = ["openfl","filters","_ColorMatrixFilter","ColorMatrixShader"];
openfl_filters__$ColorMatrixFilter_ColorMatrixShader.__super__ = openfl_display_Shader;
openfl_filters__$ColorMatrixFilter_ColorMatrixShader.prototype = $extend(openfl_display_Shader.prototype,{
	init: function(matrix) {
		var multipliers = this.get_data().uMultipliers.value;
		var offsets = this.get_data().uOffsets.value;
		multipliers[0] = matrix[0];
		multipliers[1] = matrix[1];
		multipliers[2] = matrix[2];
		multipliers[3] = matrix[3];
		multipliers[4] = matrix[5];
		multipliers[5] = matrix[6];
		multipliers[6] = matrix[7];
		multipliers[7] = matrix[8];
		multipliers[8] = matrix[10];
		multipliers[9] = matrix[11];
		multipliers[10] = matrix[12];
		multipliers[11] = matrix[13];
		multipliers[12] = matrix[15];
		multipliers[13] = matrix[16];
		multipliers[14] = matrix[17];
		multipliers[15] = matrix[18];
		offsets[0] = matrix[4] / 255.0;
		offsets[1] = matrix[9] / 255.0;
		offsets[2] = matrix[14] / 255.0;
		offsets[3] = matrix[19] / 255.0;
	}
	,__class__: openfl_filters__$ColorMatrixFilter_ColorMatrixShader
});
var openfl_filters_ColorMatrixFilter = function(matrix) {
	openfl_filters_BitmapFilter.call(this);
	this.set_matrix(matrix);
	this.__numPasses = 0;
};
$hxClasses["openfl.filters.ColorMatrixFilter"] = openfl_filters_ColorMatrixFilter;
openfl_filters_ColorMatrixFilter.__name__ = ["openfl","filters","ColorMatrixFilter"];
openfl_filters_ColorMatrixFilter.__super__ = openfl_filters_BitmapFilter;
openfl_filters_ColorMatrixFilter.prototype = $extend(openfl_filters_BitmapFilter.prototype,{
	matrix: null
	,__initShader: function(renderSession,pass) {
		openfl_filters_ColorMatrixFilter.__colorMatrixShader.init(this.matrix);
		return openfl_filters_ColorMatrixFilter.__colorMatrixShader;
	}
	,set_matrix: function(value) {
		if(value == null) value = [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];
		return this.matrix = value;
	}
	,__class__: openfl_filters_ColorMatrixFilter
	,__properties__: {set_matrix:"set_matrix"}
});
var openfl_filters_DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) {
	if(hideObject == null) hideObject = false;
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	if(angle == null) angle = 45;
	if(distance == null) distance = 4;
	openfl_filters_BitmapFilter.call(this);
	this.distance = distance;
	this.angle = angle;
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.set_quality(quality);
	this.inner = inner;
	this.set_knockout(knockout);
	this.set_hideObject(hideObject);
};
$hxClasses["openfl.filters.DropShadowFilter"] = openfl_filters_DropShadowFilter;
openfl_filters_DropShadowFilter.__name__ = ["openfl","filters","DropShadowFilter"];
openfl_filters_DropShadowFilter.__super__ = openfl_filters_BitmapFilter;
openfl_filters_DropShadowFilter.prototype = $extend(openfl_filters_BitmapFilter.prototype,{
	alpha: null
	,angle: null
	,blurX: null
	,blurY: null
	,color: null
	,distance: null
	,hideObject: null
	,inner: null
	,knockout: null
	,quality: null
	,strength: null
	,set_knockout: function(value) {
		return this.knockout = value;
	}
	,set_hideObject: function(value) {
		return this.hideObject = value;
	}
	,set_quality: function(value) {
		return this.quality = value;
	}
	,__class__: openfl_filters_DropShadowFilter
	,__properties__: {set_quality:"set_quality",set_knockout:"set_knockout",set_hideObject:"set_hideObject"}
});
var openfl_filters__$GlowFilter_GlowShader = function() {
	if(this.__glFragmentSource == null) this.__glFragmentSource = "varying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\tuniform sampler2D uImage0;\n\t\t\n\t\tuniform vec4 uColor;\n\t\t\n\t\tvarying vec2 vBlurCoords[7];\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tfloat a = 0.0;\n\t\t\ta += texture2D(uImage0, vBlurCoords[0]).a * 0.00443;\n\t\t\ta += texture2D(uImage0, vBlurCoords[1]).a * 0.05399;\n\t\t\ta += texture2D(uImage0, vBlurCoords[2]).a * 0.24197;\n\t\t\ta += texture2D(uImage0, vBlurCoords[3]).a * 0.39894;\n\t\t\ta += texture2D(uImage0, vBlurCoords[4]).a * 0.24197;\n\t\t\ta += texture2D(uImage0, vBlurCoords[5]).a * 0.05399;\n\t\t\ta += texture2D(uImage0, vBlurCoords[6]).a * 0.00443;\n\t\t\ta *= uColor.a;\n\t\t\t\n\t\t\tgl_FragColor = vec4(uColor.rgb * a, a);\n\t\t\t\n\t\t}";
	if(this.__glVertexSource == null) this.__glVertexSource = "attribute float aAlpha;\n\t\tattribute vec4 aPosition;\n\t\tattribute vec2 aTexCoord;\n\t\tvarying float vAlpha;\n\t\tvarying vec2 vTexCoord;\n\t\t\n\t\tuniform mat4 uMatrix;\n\t\t\n\t\tuniform vec2 uRadius;\n\t\tvarying vec2 vBlurCoords[7];\n\t\tuniform vec2 uTextureSize;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvAlpha = aAlpha;\n\t\t\tvTexCoord = aTexCoord;\n\t\t\tgl_Position = uMatrix * aPosition;\n\t\t\t\n\t\t\tvec2 r = uRadius / uTextureSize;\n\t\t\tvBlurCoords[0] = aTexCoord - r * 1.0;\n\t\t\tvBlurCoords[1] = aTexCoord - r * 0.75;\n\t\t\tvBlurCoords[2] = aTexCoord - r * 0.5;\n\t\t\tvBlurCoords[3] = aTexCoord;\n\t\t\tvBlurCoords[4] = aTexCoord + r * 0.5;\n\t\t\tvBlurCoords[5] = aTexCoord + r * 0.75;\n\t\t\tvBlurCoords[6] = aTexCoord + r * 1.0;\n\t\t\t\n\t\t}";
	openfl_display_Shader.call(this);
	this.get_data().uRadius.value = [0,0];
	this.get_data().uColor.value = [0,0,0,0];
};
$hxClasses["openfl.filters._GlowFilter.GlowShader"] = openfl_filters__$GlowFilter_GlowShader;
openfl_filters__$GlowFilter_GlowShader.__name__ = ["openfl","filters","_GlowFilter","GlowShader"];
openfl_filters__$GlowFilter_GlowShader.__super__ = openfl_display_Shader;
openfl_filters__$GlowFilter_GlowShader.prototype = $extend(openfl_display_Shader.prototype,{
	__class__: openfl_filters__$GlowFilter_GlowShader
});
var openfl_filters_GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) {
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 2;
	if(blurY == null) blurY = 6;
	if(blurX == null) blurX = 6;
	if(alpha == null) alpha = 1;
	if(color == null) color = 16711680;
	openfl_filters_BitmapFilter.call(this);
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.set_quality(quality);
	this.inner = inner;
	this.set_knockout(knockout);
	this.__cacheObject = true;
};
$hxClasses["openfl.filters.GlowFilter"] = openfl_filters_GlowFilter;
openfl_filters_GlowFilter.__name__ = ["openfl","filters","GlowFilter"];
openfl_filters_GlowFilter.__super__ = openfl_filters_BitmapFilter;
openfl_filters_GlowFilter.prototype = $extend(openfl_filters_BitmapFilter.prototype,{
	alpha: null
	,blurX: null
	,blurY: null
	,color: null
	,inner: null
	,knockout: null
	,quality: null
	,strength: null
	,horizontalPasses: null
	,verticalPasses: null
	,__initShader: function(renderSession,pass) {
		var data = openfl_filters_GlowFilter.__glowShader.get_data();
		if(pass <= this.horizontalPasses) {
			var scale = Math.pow(0.5,pass >> 1);
			data.uRadius.value[0] = this.blurX * scale;
			data.uRadius.value[1] = 0;
		} else {
			var scale1 = Math.pow(0.5,pass - this.horizontalPasses >> 1);
			data.uRadius.value[0] = 0;
			data.uRadius.value[1] = this.blurY * scale1;
		}
		data.uColor.value[0] = (this.color >> 16 & 255) / 255;
		data.uColor.value[1] = (this.color >> 8 & 255) / 255;
		data.uColor.value[2] = (this.color & 255) / 255;
		data.uColor.value[3] = this.alpha;
		return openfl_filters_GlowFilter.__glowShader;
	}
	,set_knockout: function(value) {
		return this.knockout = value;
	}
	,set_quality: function(value) {
		if(this.blurX <= 0) this.horizontalPasses = 0; else this.horizontalPasses = Math.round(this.blurX * (value / 4)) + 1;
		if(this.blurY <= 0) this.verticalPasses = 0; else this.verticalPasses = Math.round(this.blurY * (value / 4)) + 1;
		this.__numPasses = this.horizontalPasses + this.verticalPasses;
		return this.quality = value;
	}
	,__class__: openfl_filters_GlowFilter
	,__properties__: {set_quality:"set_quality",set_knockout:"set_knockout"}
});
var openfl_geom_Matrix3D = function() { };
$hxClasses["openfl.geom.Matrix3D"] = openfl_geom_Matrix3D;
openfl_geom_Matrix3D.__name__ = ["openfl","geom","Matrix3D"];
openfl_geom_Matrix3D.prototype = {
	__class__: openfl_geom_Matrix3D
};
var openfl_geom_Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl_geom_Point;
openfl_geom_Point.__name__ = ["openfl","geom","Point"];
openfl_geom_Point.prototype = {
	x: null
	,y: null
	,clone: function() {
		return new openfl_geom_Point(this.x,this.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new openfl_geom_Point(this.x - v.x,this.y - v.y);
	}
	,toString: function() {
		return "(x=" + this.x + ", y=" + this.y + ")";
	}
	,__class__: openfl_geom_Point
};
var openfl_geom_Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl_geom_Rectangle;
openfl_geom_Rectangle.__name__ = ["openfl","geom","Rectangle"];
openfl_geom_Rectangle.prototype = {
	height: null
	,width: null
	,x: null
	,y: null
	,clone: function() {
		return new openfl_geom_Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var offsetX = 0.0;
		var offsetY = 0.0;
		var offsetRight = 0.0;
		var offsetBottom = 0.0;
		if(this.x < x) offsetX = x - this.x;
		if(this.y < y) offsetY = y - this.y;
		if(this.get_right() > x + width) offsetRight = x + width - this.get_right();
		if(this.get_bottom() > y + height) offsetBottom = y + height - this.get_bottom();
		this.x += offsetX;
		this.y += offsetY;
		this.width += offsetRight - offsetX;
		this.height += offsetBottom - offsetY;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) {
			this.x = x;
			this.width = cacheRight - x;
		}
		if(this.y > y) {
			this.y = y;
			this.height = cacheBottom - y;
		}
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,__transform: function(rect,m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = ty0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		rect.setTo(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_bottomRight: function() {
		return new openfl_geom_Point(this.x + this.width,this.y + this.height);
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,get_topLeft: function() {
		return new openfl_geom_Point(this.x,this.y);
	}
	,__class__: openfl_geom_Rectangle
	,__properties__: {get_topLeft:"get_topLeft",get_right:"get_right",get_bottomRight:"get_bottomRight",get_bottom:"get_bottom"}
};
var openfl_geom_Transform = function(displayObject) {
	this.__colorTransform = new openfl_geom_ColorTransform();
	this.concatenatedColorTransform = new openfl_geom_ColorTransform();
	this.pixelBounds = new openfl_geom_Rectangle();
	this.__displayObject = displayObject;
	this.__hasMatrix = true;
};
$hxClasses["openfl.geom.Transform"] = openfl_geom_Transform;
openfl_geom_Transform.__name__ = ["openfl","geom","Transform"];
openfl_geom_Transform.prototype = {
	concatenatedColorTransform: null
	,pixelBounds: null
	,__colorTransform: null
	,__displayObject: null
	,__hasMatrix: null
	,__hasMatrix3D: null
	,get_colorTransform: function() {
		return this.__colorTransform;
	}
	,set_colorTransform: function(value) {
		if(!this.__colorTransform.__equals(value)) {
			this.__colorTransform = value;
			if(value != null) this.__displayObject.set_alpha(value.alphaMultiplier);
			this.__displayObject.__setRenderDirty();
		}
		return this.__colorTransform;
	}
	,set_matrix: function(value) {
		if(value == null) {
			this.__hasMatrix = false;
			return null;
		}
		this.__hasMatrix = true;
		this.__hasMatrix3D = false;
		if(this.__displayObject != null) {
			var rotation = 180 / Math.PI * Math.atan2(value.d,value.c) - 90;
			if(rotation != this.__displayObject.__rotation) {
				this.__displayObject.__rotation = rotation;
				var radians = rotation * (Math.PI / 180);
				this.__displayObject.__rotationSine = Math.sin(radians);
				this.__displayObject.__rotationCosine = Math.cos(radians);
			}
			this.__displayObject.__transform.copyFrom(value);
			this.__displayObject.__setTransformDirty();
		}
		return value;
	}
	,__class__: openfl_geom_Transform
	,__properties__: {set_matrix:"set_matrix",set_colorTransform:"set_colorTransform",get_colorTransform:"get_colorTransform"}
};
var openfl_geom_Vector3D = function() { };
$hxClasses["openfl.geom.Vector3D"] = openfl_geom_Vector3D;
openfl_geom_Vector3D.__name__ = ["openfl","geom","Vector3D"];
openfl_geom_Vector3D.prototype = {
	__class__: openfl_geom_Vector3D
};
var openfl_media_ID3Info = function() { };
$hxClasses["openfl.media.ID3Info"] = openfl_media_ID3Info;
openfl_media_ID3Info.__name__ = ["openfl","media","ID3Info"];
var openfl_media_Sound = function() { };
$hxClasses["openfl.media.Sound"] = openfl_media_Sound;
openfl_media_Sound.__name__ = ["openfl","media","Sound"];
openfl_media_Sound.__super__ = openfl_events_EventDispatcher;
openfl_media_Sound.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	__class__: openfl_media_Sound
});
var openfl_media_SoundChannel = function(source,soundTransform) {
	openfl_events_EventDispatcher.call(this,this);
	this.leftPeak = 1;
	this.rightPeak = 1;
	if(soundTransform != null) this.__soundTransform = soundTransform; else this.__soundTransform = new openfl_media_SoundTransform();
	if(source != null) {
		this.__source = source;
		this.__source.onComplete.add($bind(this,this.source_onComplete));
		this.__isValid = true;
		this.__source.play();
	}
	openfl_media_SoundMixer.__registerSoundChannel(this);
};
$hxClasses["openfl.media.SoundChannel"] = openfl_media_SoundChannel;
openfl_media_SoundChannel.__name__ = ["openfl","media","SoundChannel"];
openfl_media_SoundChannel.__super__ = openfl_events_EventDispatcher;
openfl_media_SoundChannel.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	leftPeak: null
	,rightPeak: null
	,__isValid: null
	,__soundTransform: null
	,__source: null
	,stop: function() {
		openfl_media_SoundMixer.__unregisterSoundChannel(this);
		if(!this.__isValid) return;
		this.__source.stop();
		this.__dispose();
	}
	,__dispose: function() {
		if(!this.__isValid) return;
		this.__source.onComplete.remove($bind(this,this.source_onComplete));
		this.__source.dispose();
		this.__isValid = false;
	}
	,__updateTransform: function() {
		this.set_soundTransform(this.get_soundTransform());
	}
	,get_position: function() {
		if(!this.__isValid) return 0;
		return this.__source.get_currentTime() + this.__source.offset;
	}
	,set_position: function(value) {
		if(!this.__isValid) return 0;
		this.__source.set_currentTime((value | 0) - this.__source.offset);
		return value;
	}
	,get_soundTransform: function() {
		return this.__soundTransform.clone();
	}
	,set_soundTransform: function(value) {
		if(value != null) {
			this.__soundTransform.pan = value.pan;
			this.__soundTransform.volume = value.volume;
			var pan = openfl_media_SoundMixer.__soundTransform.pan + this.__soundTransform.pan;
			if(pan < -1) pan = -1;
			if(pan > 1) pan = 1;
			var volume = openfl_media_SoundMixer.__soundTransform.volume * this.__soundTransform.volume;
			if(this.__isValid) {
				this.__source.set_gain(volume);
				var position = this.__source.get_position();
				position.x = pan;
				position.z = -1 * Math.sqrt(1 - Math.pow(pan,2));
				this.__source.set_position(position);
				return value;
			}
		}
		return value;
	}
	,source_onComplete: function() {
		openfl_media_SoundMixer.__unregisterSoundChannel(this);
		this.__dispose();
		this.dispatchEvent(new openfl_events_Event("soundComplete"));
	}
	,__class__: openfl_media_SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",get_soundTransform:"get_soundTransform",set_position:"set_position",get_position:"get_position"}
});
var openfl_media_SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["openfl.media.SoundTransform"] = openfl_media_SoundTransform;
openfl_media_SoundTransform.__name__ = ["openfl","media","SoundTransform"];
openfl_media_SoundTransform.prototype = {
	leftToLeft: null
	,leftToRight: null
	,pan: null
	,rightToLeft: null
	,rightToRight: null
	,volume: null
	,clone: function() {
		return new openfl_media_SoundTransform(this.volume,this.pan);
	}
	,__class__: openfl_media_SoundTransform
};
var openfl_media_SoundMixer = function() { };
$hxClasses["openfl.media.SoundMixer"] = openfl_media_SoundMixer;
openfl_media_SoundMixer.__name__ = ["openfl","media","SoundMixer"];
openfl_media_SoundMixer.__registerSoundChannel = function(soundChannel) {
	openfl_media_SoundMixer.__soundChannels.push(soundChannel);
};
openfl_media_SoundMixer.__unregisterSoundChannel = function(soundChannel) {
	HxOverrides.remove(openfl_media_SoundMixer.__soundChannels,soundChannel);
};
var openfl_net_URLLoader = function(request) {
	openfl_events_EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = 1;
	if(request != null) this.load(request);
};
$hxClasses["openfl.net.URLLoader"] = openfl_net_URLLoader;
openfl_net_URLLoader.__name__ = ["openfl","net","URLLoader"];
openfl_net_URLLoader.__super__ = openfl_events_EventDispatcher;
openfl_net_URLLoader.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	bytesLoaded: null
	,bytesTotal: null
	,data: null
	,dataFormat: null
	,__httpRequest: null
	,load: function(request) {
		var _g = this;
		if(this.dataFormat == 0) {
			var httpRequest = new lime_net__$HTTPRequest_$openfl_$utils_$ByteArray();
			this.__prepareRequest(httpRequest,request);
			httpRequest.load().onProgress($bind(this,this.httpRequest_onProgress)).onError($bind(this,this.httpRequest_onError)).onComplete(function(data) {
				_g.data = data;
				var event = new openfl_events_Event("complete");
				_g.dispatchEvent(event);
			});
		} else {
			var httpRequest1 = new lime_net__$HTTPRequest_$String();
			this.__prepareRequest(httpRequest1,request);
			httpRequest1.load().onProgress($bind(this,this.httpRequest_onProgress)).onError($bind(this,this.httpRequest_onError)).onComplete(function(data1) {
				_g.data = data1;
				var event1 = new openfl_events_Event("complete");
				_g.dispatchEvent(event1);
			});
		}
	}
	,__prepareRequest: function(httpRequest,request) {
		this.__httpRequest = httpRequest;
		this.__httpRequest.uri = request.url;
		var _g = request.method;
		switch(_g) {
		case "DELETE":
			this.__httpRequest.method = "DELETE";
			break;
		case "HEAD":
			this.__httpRequest.method = "HEAD";
			break;
		case "OPTIONS":
			this.__httpRequest.method = "OPTIONS";
			break;
		case "POST":
			this.__httpRequest.method = "POST";
			break;
		case "PUT":
			this.__httpRequest.method = "PUT";
			break;
		default:
			this.__httpRequest.method = "GET";
		}
		if(request.data != null) {
			if(js_Boot.__instanceof(request.data,openfl_net_URLVariables)) {
				var fields = Reflect.fields(request.data);
				var _g1 = 0;
				while(_g1 < fields.length) {
					var field = fields[_g1];
					++_g1;
					var value = Reflect.field(request.data,field);
					this.__httpRequest.formData.set(field,value);
				}
			} else if(js_Boot.__instanceof(request.data,haxe_io_Bytes)) this.__httpRequest.data = request.data; else this.__httpRequest.data = haxe_io_Bytes.ofString(Std.string(request.data));
		}
		this.__httpRequest.contentType = request.contentType;
		if(request.requestHeaders != null) {
			var _g2 = 0;
			var _g11 = request.requestHeaders;
			while(_g2 < _g11.length) {
				var header = _g11[_g2];
				++_g2;
				this.__httpRequest.headers.push(new lime_net_HTTPRequestHeader(header.name,header.value));
			}
		}
		this.__httpRequest.userAgent = request.userAgent;
	}
	,httpRequest_onError: function(error) {
		if(error == 403) {
			var event = new openfl_events_SecurityErrorEvent("securityError");
			this.dispatchEvent(event);
		} else {
			var event1 = new openfl_events_IOErrorEvent("ioError");
			this.dispatchEvent(event1);
		}
	}
	,httpRequest_onProgress: function(bytesLoaded,bytesTotal) {
		var event = new openfl_events_ProgressEvent("progress");
		event.bytesLoaded = bytesLoaded;
		event.bytesTotal = bytesTotal;
		this.dispatchEvent(event);
	}
	,__class__: openfl_net_URLLoader
});
var openfl_net_URLRequest = function(url) {
	if(url != null) this.url = url;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl_net_URLRequest;
openfl_net_URLRequest.__name__ = ["openfl","net","URLRequest"];
openfl_net_URLRequest.prototype = {
	contentType: null
	,data: null
	,method: null
	,requestHeaders: null
	,url: null
	,userAgent: null
	,__class__: openfl_net_URLRequest
};
var openfl_net_URLRequestHeader = function() { };
$hxClasses["openfl.net.URLRequestHeader"] = openfl_net_URLRequestHeader;
openfl_net_URLRequestHeader.__name__ = ["openfl","net","URLRequestHeader"];
openfl_net_URLRequestHeader.prototype = {
	name: null
	,value: null
	,__class__: openfl_net_URLRequestHeader
};
var openfl_net_URLVariables = function() { };
$hxClasses["openfl.net.URLVariables"] = openfl_net_URLVariables;
openfl_net_URLVariables.__name__ = ["openfl","net","URLVariables"];
var openfl_system_ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl_system_ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl_system_ApplicationDomain;
openfl_system_ApplicationDomain.__name__ = ["openfl","system","ApplicationDomain"];
openfl_system_ApplicationDomain.prototype = {
	parentDomain: null
	,__class__: openfl_system_ApplicationDomain
};
var openfl_system_LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	this.applicationDomain = applicationDomain;
	this.allowCodeImport = true;
	this.allowLoadBytesCodeExecution = true;
};
$hxClasses["openfl.system.LoaderContext"] = openfl_system_LoaderContext;
openfl_system_LoaderContext.__name__ = ["openfl","system","LoaderContext"];
openfl_system_LoaderContext.prototype = {
	allowCodeImport: null
	,allowLoadBytesCodeExecution: null
	,applicationDomain: null
	,checkPolicyFile: null
	,securityDomain: null
	,__class__: openfl_system_LoaderContext
};
var openfl_system_SecurityDomain = function() { };
$hxClasses["openfl.system.SecurityDomain"] = openfl_system_SecurityDomain;
openfl_system_SecurityDomain.__name__ = ["openfl","system","SecurityDomain"];
var openfl_system_System = function() { };
$hxClasses["openfl.system.System"] = openfl_system_System;
openfl_system_System.__name__ = ["openfl","system","System"];
openfl_system_System.__properties__ = {get_totalMemory:"get_totalMemory"}
openfl_system_System.get_totalMemory = function() {
	return (window.performance && window.performance.memory) ? window.performance.memory.usedJSHeapSize : 0;
};
var openfl_text_Font = function(name) {
	lime_text_Font.call(this,name);
};
$hxClasses["openfl.text.Font"] = openfl_text_Font;
openfl_text_Font.__name__ = ["openfl","text","Font"];
openfl_text_Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return openfl_text_Font.__registeredFonts;
};
openfl_text_Font.fromFile = function(path) {
	var font = new openfl_text_Font();
	font.__fromFile(path);
	return font;
};
openfl_text_Font.__super__ = lime_text_Font;
openfl_text_Font.prototype = $extend(lime_text_Font.prototype,{
	__class__: openfl_text_Font
});
var openfl_text_TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextFormat"] = openfl_text_TextFormat;
openfl_text_TextFormat.__name__ = ["openfl","text","TextFormat"];
openfl_text_TextFormat.prototype = {
	align: null
	,blockIndent: null
	,bold: null
	,bullet: null
	,color: null
	,font: null
	,indent: null
	,italic: null
	,kerning: null
	,leading: null
	,leftMargin: null
	,letterSpacing: null
	,rightMargin: null
	,size: null
	,tabStops: null
	,target: null
	,underline: null
	,url: null
	,clone: function() {
		var newFormat = new openfl_text_TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: openfl_text_TextFormat
};
var openfl_text__$TextFormatAlign_TextFormatAlign_$Impl_$ = {};
$hxClasses["openfl.text._TextFormatAlign.TextFormatAlign_Impl_"] = openfl_text__$TextFormatAlign_TextFormatAlign_$Impl_$;
openfl_text__$TextFormatAlign_TextFormatAlign_$Impl_$.__name__ = ["openfl","text","_TextFormatAlign","TextFormatAlign_Impl_"];
openfl_text__$TextFormatAlign_TextFormatAlign_$Impl_$.fromString = function(value) {
	switch(value) {
	case "center":
		return 0;
	case "end":
		return 1;
	case "justify":
		return 2;
	case "left":
		return 3;
	case "right":
		return 4;
	case "start":
		return 5;
	default:
		return null;
	}
};
var openfl_ui_GameInput = function() { };
$hxClasses["openfl.ui.GameInput"] = openfl_ui_GameInput;
openfl_ui_GameInput.__name__ = ["openfl","ui","GameInput"];
openfl_ui_GameInput.__getDevice = function(gamepad) {
	if(gamepad == null) return null;
	if(!(openfl_ui_GameInput.__devices.h.__keys__[gamepad.__id__] != null)) {
		var device = new openfl_ui_GameInputDevice(gamepad.get_guid(),gamepad.get_name());
		openfl_ui_GameInput.__deviceList.push(device);
		openfl_ui_GameInput.__devices.set(gamepad,device);
		openfl_ui_GameInput.numDevices = openfl_ui_GameInput.__deviceList.length;
	}
	return openfl_ui_GameInput.__devices.h[gamepad.__id__];
};
openfl_ui_GameInput.__onGamepadAxisMove = function(gamepad,axis,value) {
	var device = openfl_ui_GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__axis.h.hasOwnProperty(axis)) {
			var control1 = new openfl_ui_GameInputControl(device,"AXIS_" + (function($this) {
				var $r;
				switch(axis) {
				case 0:
					$r = "LEFT_X";
					break;
				case 1:
					$r = "LEFT_Y";
					break;
				case 2:
					$r = "RIGHT_X";
					break;
				case 3:
					$r = "RIGHT_Y";
					break;
				case 4:
					$r = "TRIGGER_LEFT";
					break;
				case 5:
					$r = "TRIGGER_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + axis + ")";
				}
				return $r;
			}(this)),-1,1);
			device.__axis.h[axis] = control1;
			device.__controls.push(control1);
		}
		var control = device.__axis.h[axis];
		control.value = value;
		control.dispatchEvent(new openfl_events_Event("change"));
	}
};
openfl_ui_GameInput.__onGamepadButtonDown = function(gamepad,button) {
	var device = openfl_ui_GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.h.hasOwnProperty(button)) {
			var control1 = new openfl_ui_GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.h[button] = control1;
			device.__controls.push(control1);
		}
		var control = device.__button.h[button];
		control.value = 1;
		control.dispatchEvent(new openfl_events_Event("change"));
	}
};
openfl_ui_GameInput.__onGamepadButtonUp = function(gamepad,button) {
	var device = openfl_ui_GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.h.hasOwnProperty(button)) {
			var control1 = new openfl_ui_GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.h[button] = control1;
			device.__controls.push(control1);
		}
		var control = device.__button.h[button];
		control.value = 0;
		control.dispatchEvent(new openfl_events_Event("change"));
	}
};
openfl_ui_GameInput.__onGamepadConnect = function(gamepad) {
	var device = openfl_ui_GameInput.__getDevice(gamepad);
	if(device == null) return;
	var _g = 0;
	var _g1 = openfl_ui_GameInput.__instances;
	while(_g < _g1.length) {
		var instance = _g1[_g];
		++_g;
		instance.dispatchEvent(new openfl_events_GameInputEvent("deviceAdded",null,null,device));
	}
};
openfl_ui_GameInput.__onGamepadDisconnect = function(gamepad) {
	var device = openfl_ui_GameInput.__devices.h[gamepad.__id__];
	if(device != null) {
		if(openfl_ui_GameInput.__devices.h.__keys__[gamepad.__id__] != null) {
			var x = openfl_ui_GameInput.__devices.h[gamepad.__id__];
			HxOverrides.remove(openfl_ui_GameInput.__deviceList,x);
			openfl_ui_GameInput.__devices.remove(gamepad);
		}
		openfl_ui_GameInput.numDevices = openfl_ui_GameInput.__deviceList.length;
		var _g = 0;
		var _g1 = openfl_ui_GameInput.__instances;
		while(_g < _g1.length) {
			var instance = _g1[_g];
			++_g;
			instance.dispatchEvent(new openfl_events_GameInputEvent("deviceRemoved",null,null,device));
		}
	}
};
openfl_ui_GameInput.__super__ = openfl_events_EventDispatcher;
openfl_ui_GameInput.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	__class__: openfl_ui_GameInput
});
var openfl_ui_GameInputControl = function(device,id,minValue,maxValue,value) {
	if(value == null) value = 0;
	openfl_events_EventDispatcher.call(this);
	this.device = device;
	this.id = id;
	this.minValue = minValue;
	this.maxValue = maxValue;
	this.value = value;
};
$hxClasses["openfl.ui.GameInputControl"] = openfl_ui_GameInputControl;
openfl_ui_GameInputControl.__name__ = ["openfl","ui","GameInputControl"];
openfl_ui_GameInputControl.__super__ = openfl_events_EventDispatcher;
openfl_ui_GameInputControl.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	device: null
	,id: null
	,maxValue: null
	,minValue: null
	,value: null
	,__class__: openfl_ui_GameInputControl
});
var openfl_ui_GameInputDevice = function(id,name) {
	this.__controls = [];
	this.__button = new haxe_ds_IntMap();
	this.__axis = new haxe_ds_IntMap();
	this.id = id;
	this.name = name;
	var control;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		control = new openfl_ui_GameInputControl(this,"AXIS_" + i,-1,1);
		this.__axis.h[i] = control;
		this.__controls.push(control);
	}
	var _g1 = 0;
	while(_g1 < 15) {
		var i1 = _g1++;
		control = new openfl_ui_GameInputControl(this,"BUTTON_" + i1,0,1);
		this.__button.h[i1] = control;
		this.__controls.push(control);
	}
};
$hxClasses["openfl.ui.GameInputDevice"] = openfl_ui_GameInputDevice;
openfl_ui_GameInputDevice.__name__ = ["openfl","ui","GameInputDevice"];
openfl_ui_GameInputDevice.prototype = {
	enabled: null
	,id: null
	,name: null
	,__axis: null
	,__button: null
	,__controls: null
	,__class__: openfl_ui_GameInputDevice
};
var openfl_ui_Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl_ui_Keyboard;
openfl_ui_Keyboard.__name__ = ["openfl","ui","Keyboard"];
openfl_ui_Keyboard.__getCharCode = function(key,shift) {
	if(shift == null) shift = false;
	if(!shift) {
		switch(key) {
		case 8:
			return 8;
		case 9:
			return 9;
		case 13:
			return 13;
		case 27:
			return 27;
		case 32:
			return 32;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		if(key >= 48 && key <= 57) return key - 48 + 48;
		if(key >= 65 && key <= 90) return key - 65 + 97;
	} else {
		switch(key) {
		case 48:
			return 41;
		case 49:
			return 33;
		case 50:
			return 64;
		case 51:
			return 35;
		case 52:
			return 36;
		case 53:
			return 37;
		case 54:
			return 94;
		case 55:
			return 38;
		case 56:
			return 42;
		case 57:
			return 40;
		case 186:
			return 58;
		case 187:
			return 43;
		case 188:
			return 60;
		case 189:
			return 95;
		case 190:
			return 62;
		case 191:
			return 63;
		case 192:
			return 126;
		case 219:
			return 123;
		case 220:
			return 124;
		case 221:
			return 125;
		case 222:
			return 34;
		}
		if(key >= 65 && key <= 90) return key - 65 + 65;
	}
	if(key >= 96 && key <= 105) return key - 96 + 48;
	switch(key) {
	case 106:
		return 42;
	case 107:
		return 43;
	case 108:
		return 44;
	case 110:
		return 45;
	case 111:
		return 46;
	case 46:
		return 127;
	case 13:
		return 13;
	case 8:
		return 8;
	}
	return 0;
};
var openfl_ui_Mouse = function() { };
$hxClasses["openfl.ui.Mouse"] = openfl_ui_Mouse;
openfl_ui_Mouse.__name__ = ["openfl","ui","Mouse"];
var openfl_utils__$ByteArray_ByteArray_$Impl_$ = {};
$hxClasses["openfl.utils._ByteArray.ByteArray_Impl_"] = openfl_utils__$ByteArray_ByteArray_$Impl_$;
openfl_utils__$ByteArray_ByteArray_$Impl_$.__name__ = ["openfl","utils","_ByteArray","ByteArray_Impl_"];
openfl_utils__$ByteArray_ByteArray_$Impl_$.fromBytes = function(bytes) {
	if(bytes == null) return null;
	if(js_Boot.__instanceof(bytes,openfl_utils_ByteArrayData)) return bytes; else return openfl_utils_ByteArrayData.fromBytes(bytes);
};
var openfl_utils_IDataOutput = function() { };
$hxClasses["openfl.utils.IDataOutput"] = openfl_utils_IDataOutput;
openfl_utils_IDataOutput.__name__ = ["openfl","utils","IDataOutput"];
openfl_utils_IDataOutput.prototype = {
	__class__: openfl_utils_IDataOutput
};
var openfl_utils_IDataInput = function() { };
$hxClasses["openfl.utils.IDataInput"] = openfl_utils_IDataInput;
openfl_utils_IDataInput.__name__ = ["openfl","utils","IDataInput"];
openfl_utils_IDataInput.prototype = {
	__class__: openfl_utils_IDataInput
};
var openfl_utils_ByteArrayData = function(length) {
	if(length == null) length = 0;
	var bytes = new haxe_io_Bytes(new ArrayBuffer(length));
	haxe_io_Bytes.call(this,bytes.b.buffer);
	this.__length = length;
	this.__endian = 0;
	this.position = 0;
};
$hxClasses["openfl.utils.ByteArrayData"] = openfl_utils_ByteArrayData;
openfl_utils_ByteArrayData.__name__ = ["openfl","utils","ByteArrayData"];
openfl_utils_ByteArrayData.__interfaces__ = [openfl_utils_IDataOutput,openfl_utils_IDataInput];
openfl_utils_ByteArrayData.fromBytes = function(bytes) {
	var result = new openfl_utils_ByteArrayData();
	result.__fromBytes(bytes);
	return result;
};
openfl_utils_ByteArrayData.__super__ = haxe_io_Bytes;
openfl_utils_ByteArrayData.prototype = $extend(haxe_io_Bytes.prototype,{
	position: null
	,__endian: null
	,__length: null
	,__fromBytes: function(bytes) {
		this.b = bytes.b;
		this.__length = bytes.length;
		this.data = bytes.data;
		this.length = bytes.length;
	}
	,__class__: openfl_utils_ByteArrayData
});
var haxe_lang_Iterator = function() { };
$hxClasses["haxe.lang.Iterator"] = haxe_lang_Iterator;
haxe_lang_Iterator.__name__ = ["haxe","lang","Iterator"];
haxe_lang_Iterator.prototype = {
	hasNext: null
	,next: null
	,__class__: haxe_lang_Iterator
};
var haxe_lang_Iterable = function() { };
$hxClasses["haxe.lang.Iterable"] = haxe_lang_Iterable;
haxe_lang_Iterable.__name__ = ["haxe","lang","Iterable"];
haxe_lang_Iterable.prototype = {
	iterator: null
	,__class__: haxe_lang_Iterable
};
var openfl_utils_Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	if(isNaN(delay) || delay < 0) throw new js__$Boot_HaxeError(new openfl_errors_Error("The delay specified is negative or not a finite number"));
	openfl_events_EventDispatcher.call(this);
	this.__delay = delay;
	this.set_repeatCount(repeatCount);
	this.running = false;
	this.currentCount = 0;
};
$hxClasses["openfl.utils.Timer"] = openfl_utils_Timer;
openfl_utils_Timer.__name__ = ["openfl","utils","Timer"];
openfl_utils_Timer.__super__ = openfl_events_EventDispatcher;
openfl_utils_Timer.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	currentCount: null
	,repeatCount: null
	,running: null
	,__delay: null
	,__timerID: null
	,start: function() {
		if(!this.running) {
			this.running = true;
			this.__timerID = window.setInterval($bind(this,this.timer_onTimer),this.__delay | 0);
		}
	}
	,stop: function() {
		this.running = false;
		if(this.__timerID != null) {
			window.clearInterval(this.__timerID);
			this.__timerID = null;
		}
	}
	,set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,timer_onTimer: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new openfl_events_TimerEvent("timer"));
			this.dispatchEvent(new openfl_events_TimerEvent("timerComplete"));
		} else this.dispatchEvent(new openfl_events_TimerEvent("timer"));
	}
	,__class__: openfl_utils_Timer
	,__properties__: {set_repeatCount:"set_repeatCount"}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
haxe_Resource.content = [{ name : "__ASSET_MANIFEST__", data : "eyJuYW1lIjpudWxsLCJhc3NldHMiOiJhaCIsInZlcnNpb24iOjIsImxpYnJhcnlBcmdzIjpbXSwibGlicmFyeVR5cGUiOm51bGx9"}];
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
var this1;
this1 = new Uint32Array(256);
lime_math_color__$RGBA_RGBA_$Impl_$.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	var val = Math.ceil(i * 257.00392156862745);
	lime_math_color__$RGBA_RGBA_$Impl_$.__alpha16[i] = val;
}
var this2;
this2 = new Uint8Array(510);
lime_math_color__$RGBA_RGBA_$Impl_$.__clamp = this2;
var _g1 = 0;
while(_g1 < 255) {
	var i1 = _g1++;
	lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[i1] = i1;
}
var _g11 = 255;
var _g2 = 511;
while(_g11 < _g2) {
	var i2 = _g11++;
	lime_math_color__$RGBA_RGBA_$Impl_$.__clamp[i2] = 255;
}
lime_utils_Log.level = 4;
if(typeof console == "undefined") {
	console = {}
}
if(console.log == null) console.log = function() {
};
openfl_display_DisplayObject.__broadcastEvents = new haxe_ds_StringMap();
openfl_display_DisplayObject.__instanceCount = 0;
openfl_display_DisplayObject.__worldRenderDirty = 0;
openfl_display_DisplayObject.__worldTransformDirty = 0;
com_modestmaps_core_Tile.count = 0;
com_modestmaps_core_TileGrid.DEFAULT_ENFORCE_BOUNDS = true;
com_modestmaps_core_TileGrid.DEFAULT_ROUND_SCALES = true;
com_modestmaps_core_TileGrid.zoomLetter = "abcdefghijklmnopqrstuvwxyz".split("");
openfl_text_TextField.__regexAlign = new EReg("align=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexColor = new EReg("color=(\"#([^\"]+)\"|'#([^']+)')","i");
openfl_text_TextField.__regexBlockIndent = new EReg("blockindent=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexBreakTag = new EReg("<br\\s*/?>","gi");
openfl_text_TextField.__regexEntities = [new EReg("&quot;","g"),new EReg("&apos;","g"),new EReg("&amp;","g"),new EReg("&lt;","g"),new EReg("&gt;","g")];
openfl_text_TextField.__regexFace = new EReg("face=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexHTMLTag = new EReg("<.*?>","g");
openfl_text_TextField.__regexIndent = new EReg(" indent=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexLeading = new EReg("leading=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexLeftMargin = new EReg("leftmargin=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexRightMargin = new EReg("rightmargin=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexTabStops = new EReg("tabstops=(\"([^\"]+)\"|'([^']+)')","i");
openfl_text_TextField.__regexSize = new EReg("size=(\"([^\"]+)\"|'([^']+)')","i");
com_modestmaps_core_painter_TilePainter.DEFAULT_CACHE_LOADERS = false;
com_modestmaps_core_painter_TilePainter.DEFAULT_SMOOTH_CONTENT = false;
com_modestmaps_core_painter_TilePainter.smoothContent = com_modestmaps_core_painter_TilePainter.DEFAULT_SMOOTH_CONTENT;
com_modestmaps_core_painter_TilePainter.maxOpenRequests = 4;
com_modestmaps_core_painter_TilePainter.cacheLoaders = com_modestmaps_core_painter_TilePainter.DEFAULT_CACHE_LOADERS;
com_modestmaps_core_painter_TilePainter.maxLoaderCacheSize = 0;
com_modestmaps_core_painter_TilePainter.cachedUrls = [];
com_modestmaps_extras_MapControls.GROUPED = { leftButton : { left : "15px", bottom : "15px"}, rightButton : { left : "65px", bottom : "15px"}, upButton : { left : "40px", bottom : "40px"}, downButton : { left : "40px", bottom : "15px"}, inButton : { left : "95px", bottom : "40px"}, outButton : { left : "95px", bottom : "15px"}};
com_modestmaps_geo_Location.MIN_LAT = -84.;
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_ds_ObjectMap.count = 0;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
lime__$backend_html5_HTML5Window.dummyCharacter = "";
lime__$backend_html5_HTML5Window.windowID = 0;
lime_math__$Matrix4_Matrix4_$Impl_$.__identity = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0];
lime_ui_Gamepad.devices = new haxe_ds_IntMap();
lime_ui_Gamepad.onConnect = new lime_app__$Event_$lime_$ui_$Gamepad_$Void();
lime_ui_Joystick.devices = new haxe_ds_IntMap();
lime_ui_Joystick.onConnect = new lime_app__$Event_$lime_$ui_$Joystick_$Void();
lime_ui_Touch.onEnd = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onMove = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onStart = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_utils_Assets.cache = new lime_utils_AssetCache();
lime_utils_Assets.libraries = new haxe_ds_StringMap();
lime_utils_Assets.onChange = new lime_app__$Event_$Void_$Void();
motion_actuators_SimpleActuator.actuators = [];
motion_actuators_SimpleActuator.actuatorsLength = 0;
motion_actuators_SimpleActuator.addedEvent = false;
motion_Actuate.defaultActuator = motion_actuators_SimpleActuator;
motion_Actuate.defaultEase = motion_easing_Expo.get_easeOut();
motion_Actuate.targetLibraries = new haxe_ds_ObjectMap();
openfl_Assets.cache = new openfl_AssetCache();
openfl_geom_Matrix.__identity = new openfl_geom_Matrix();
openfl_geom_Matrix.__matrix3 = new lime_math_Matrix3();
openfl_geom_Matrix.__temp = new openfl_geom_Matrix();
openfl_Lib.current = new openfl_display_MovieClip();
openfl_Lib.__sentWarnings = new haxe_ds_StringMap();
openfl__$internal_renderer_DrawCommandBuffer.empty = new openfl__$internal_renderer_DrawCommandBuffer();
openfl__$internal_renderer_cairo_CairoGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl__$internal_renderer_cairo_CairoGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl__$internal_renderer_canvas_CanvasGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl__$internal_renderer_canvas_CanvasGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl__$internal_renderer_canvas_CanvasGraphics.fillCommands = new openfl__$internal_renderer_DrawCommandBuffer();
openfl__$internal_renderer_canvas_CanvasGraphics.strokeCommands = new openfl__$internal_renderer_DrawCommandBuffer();
openfl__$internal_stage3D_GLUtils.debug = false;
openfl__$internal_swf_SWFLite.instances = new haxe_ds_StringMap();
openfl_display_LoaderInfo.__rootURL = window.document.URL;
openfl_display3D_Context3D.__stateCache = new openfl__$internal_stage3D_Context3DStateCache();
openfl_filters_BlurFilter.__blurShader = new openfl_filters__$BlurFilter_BlurShader();
openfl_filters_ColorMatrixFilter.__colorMatrixShader = new openfl_filters__$ColorMatrixFilter_ColorMatrixShader();
openfl_filters_GlowFilter.__glowShader = new openfl_filters__$GlowFilter_GlowShader();
openfl_geom_Point.__temp = new openfl_geom_Point();
openfl_geom_Rectangle.__temp = new openfl_geom_Rectangle();
openfl_media_SoundMixer.__soundChannels = [];
openfl_media_SoundMixer.__soundTransform = new openfl_media_SoundTransform();
openfl_system_ApplicationDomain.currentDomain = new openfl_system_ApplicationDomain(null);
openfl_text_Font.__registeredFonts = [];
openfl_ui_GameInput.numDevices = 0;
openfl_ui_GameInput.__deviceList = [];
openfl_ui_GameInput.__devices = new haxe_ds_ObjectMap();
openfl_ui_GameInput.__instances = [];
openfl_ui_Mouse.__cursor = "auto";
ApplicationMain.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=ModestMapsSample.js.map