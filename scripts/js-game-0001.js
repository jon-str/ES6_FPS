//"strict mode";

// let GameComponent = {};

// GameComponent.Initialize = function(iFpsLimit) {

//     this.moEntities = [];

//     this.miFpsLimit = iFpsLimit;

//     this.GetCanvas          = () => document.getElementById('canvas_1');
//     this.GetCanvasContext   = () => document.getElementById('canvas_1').getContext('2d');

//     this.moCanvas.width   = () => parseInt(this.moCanvas.getAttribute('data-canvas-width'));
//     this.moCanvas.height  = () => parseInt(this.moCanvas.getAttribute('data-canvas-height'));

//     this.moCanvas.style.width       = () =>  this.moCanvas.width + 'px';
//     this.moCanvas.style.height      = () =>  this.moCanvas.height + 'px';

//     //SCREEN CLEAR RECT
//     this.GetCanvas().GetClearScreenColor = () => '#ABCABC';
//     this.GetCanvas().GetClearScreenRect  = () => new eRect(0, 0, this.moCanvas.width, this.moCanvas.height, this.moCanvas.clearScreenColor);
//     this.AddEntity(this.moCanvas.clearScreenRect);

//     this.GetCanvas().GetPixelBuffer = () => new ePixelBuffer(this.moCanvas.width, this.moCanvas.height);
//     this.AddEntity(this.moCanvas.ePixelBuffer)

//     return this;
// };

let _instance = null;

class GameComponent {
    constructor() {
        if (!_instance) {
            _instance = this;
        }

        return _instance;
    }

    Initialize() {
        this.moEntities = [];

        this.miFpsLimit = iFpsLimit;

        this.GetCanvas = () => document.getElementById('canvas_1');
        this.GetCanvasContext = () => GetCanvas().getContext('2d');

        this.GetCanvas().width = () => parseInt(this.GetCanvas().getAttribute('data-canvas-width'));
        this.GetCanvas().height = () => parseInt(this.GetCanvas().getAttribute('data-canvas-height'));

        this.GetCanvas().style.width = () => this.GetCanvas().width + 'px';
        this.GetCanvas().style.height = () => this.GetCanvas().height + 'px';

        //SCREEN CLEAR RECT
        this.GetCanvas().GetClearScreenColor = () => '#ABCABC';
        this.GetCanvas().GetClearScreenRect = () => new eRect(0, 0, this.GetCanvas().width, this.GetCanvas().height, this.GetCanvas().GetClearScreenColor());
        this.AddEntity(this.GetCanvas().GetPixelBuffer());

        this.GetCanvas().GetPixelBuffer = () => new ePixelBuffer(this.GetCanvas().width, this.GetCanvas().height);
        this.AddEntity(this.GetCanvas().GetPixelBuffer());
    }

    AddEntity(oeEntity) {
        this.moEntities.push(oeEntity);
    }

    Update(delta) {
        // for (let i = 0; i < this.moEntities.length; i++) {
        //     this.moEntities[i].Update(delta);
        // }
        this.moEntities.forEach(delta => {
            this.Update(delta);
        });
    }

    Draw() {
        for (let i = 0; i < this.moEntities.length; i++) {
            this.moEntities[i].Draw(this.GetCanvasContext());
        }
    }
};

export default sng_GameComponent;

// GameComponent.AddEntity = function (oeEntity) {
//     this.moEntities.push(oeEntity);
// };

// GameComponent.Update = function (delta) {
//     for (let i = 0; i < this.moEntities.length; i++) {
//         this.moEntities[i].Update(delta);
//     }
// }

// GameComponent.Draw = function () {
//     for (let i = 0; i < this.moEntities.length; i++) {
//         this.moEntities[i].Draw(this.GetCanvasContext());
//     }
// };





