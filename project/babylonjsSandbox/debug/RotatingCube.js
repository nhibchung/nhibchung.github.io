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
