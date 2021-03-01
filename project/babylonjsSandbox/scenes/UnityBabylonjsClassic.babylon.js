window.project = true;

// Project Shader Store


// Browser Window Services

//////////////////////////////////////////////
// Babylon Toolkit - Browser Window Services
//////////////////////////////////////////////

/** Firelight Audio Shims */
window.firelightAudio = 0;
window.firelightDebug = false;
if (window.firelightAudio === 1 || window.firelightAudio === 2) {
	var fmodjs = "scripts/fmodstudio.js";
	if (window.firelightDebug === true) {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudioL.js" : "fmodL.js");
	} else {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudio.js" : "fmod.js");
	}
	var script2 = document.createElement('script');
	script2.setAttribute("type","text/javascript");
	script2.setAttribute("src", fmodjs);
	if (document.head != null) {
		document.head.appendChild(script2);
	} else if (document.body != null) {
		document.body.appendChild(script2);
	}
}

/** Windows Launch Mode */
window.preferredLaunchMode = 0;
if (typeof Windows !== "undefined" && typeof Windows.UI !== "undefined" && typeof Windows.UI.ViewManagement !== "undefined" &&typeof Windows.UI.ViewManagement.ApplicationView !== "undefined") {
	Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = (window.preferredLaunchMode === 1) ? Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen : Windows.UI.ViewManagement.ApplicationViewWindowingMode.auto;
}

/** Xbox Full Screen Shims */
document.querySelector('style').textContent += "@media (max-height: 1080px) { @-ms-viewport { height: 1080px; } }";

/** Xbox Live Plugin Shims */
window.xboxLiveServices = false;
window.isXboxLivePluginEnabled = function() {
	var isXboxLive = (typeof Windows !== "undefined" && typeof Microsoft !== "undefined" && typeof Microsoft.Xbox !== "undefined" && typeof Microsoft.Xbox.Services !== "undefined");
	var hasToolkit = (typeof BabylonToolkit !== "undefined" && typeof BabylonToolkit.XboxLive !== "undefined" && typeof BabylonToolkit.XboxLive.Plugin !== "undefined");
	return (window.xboxLiveServices === true && isXboxLive === true && hasToolkit === true);
}

/** Generic Promise Shims */
window.createGenericPromise = function(resolveRejectHandler) {
	return new Promise(resolveRejectHandler);
}
window.resolveGenericPromise = function(resolveObject) {
    return Promise.resolve(resolveObject);
}


// UnityBabylonjsClassic.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var Rotate = /** @class */ (function (_super) {
        __extends(Rotate, _super);
        function Rotate(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        Rotate.prototype.ready = function () {
            // Scene execute when ready
        };
        Rotate.prototype.start = function () {
            /* Start render loop function */
            // Create the gizmo and attach to the box
            this.gizmo = new BABYLON.RotationGizmo();
            this.gizmo.attachedMesh = this.mesh;
            // Keep the gizmo fixed to world rotation
            this.gizmo.updateGizmoRotationToMatchAttachedMesh = false;
            this.gizmo.updateGizmoPositionToMatchAttachedMesh = true;
        };
        Rotate.prototype.update = function () {
            /* Update render loop function */
            var _this = this;
            // Toggle gizmo on keypress
            document.onkeydown = function () {
                _this.gizmo.attachedMesh = !_this.gizmo.attachedMesh ? _this.mesh : null;
            };
        };
        return Rotate;
    }(BABYLON.MeshComponent));
    PROJECT.Rotate = Rotate;
})(PROJECT || (PROJECT = {}));


