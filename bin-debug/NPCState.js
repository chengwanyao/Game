var TaskNoneState = (function () {
    function TaskNoneState(npc) {
        this.npc = npc;
    }
    var d = __define,c=TaskNoneState,p=c.prototype;
    p.onExit = function () {
        console.log("Exit Task None State");
    };
    p.onEnter = function () {
        console.log("Enter Task None State");
    };
    return TaskNoneState;
}());
egret.registerClass(TaskNoneState,'TaskNoneState');
var TaskAvilableState = (function () {
    function TaskAvilableState(npc) {
        this.taskSighX = 15;
        this.taskSighY = 20;
        this.taskSighWidth = 30;
        this.taskSighHeight = 30;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskAvilableState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture = RES.getRes(emojiimage.ACCEPTABLEimage);
    };
    return TaskAvilableState;
}());
egret.registerClass(TaskAvilableState,'TaskAvilableState');
var TaskDuringState = (function () {
    function TaskDuringState(npc) {
        this.taskSighX = 15;
        this.taskSighY = 20;
        this.taskSighWidth = 30;
        this.taskSighHeight = 30;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskDuringState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture = RES.getRes(emojiimage.DURINGimage);
    };
    return TaskDuringState;
}());
egret.registerClass(TaskDuringState,'TaskDuringState');
var TaskSubmitState = (function () {
    function TaskSubmitState(npc) {
        this.taskSighX = 15;
        this.taskSighY = 20;
        this.taskSighWidth = 30;
        this.taskSighHeight = 30;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskSubmitState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Submit State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Submit State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture = RES.getRes(emojiimage.CANSUBMITTEDimage);
    };
    return TaskSubmitState;
}());
egret.registerClass(TaskSubmitState,'TaskSubmitState');
//# sourceMappingURL=NPCState.js.map