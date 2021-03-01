declare module PROJECT {
    class Rotate extends BABYLON.MeshComponent {
        constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        private gizmo;
        protected ready(): void;
        protected start(): void;
        protected update(): void;
    }
}
