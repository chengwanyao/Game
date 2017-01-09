class TaskNoneState implements State {

    private npc: NPC;
    constructor(npc: NPC) {
        this.npc = npc;

    }

    onExit() {
        console.log("Exit Task None State");
    }

    onEnter() {
        console.log("Enter Task None State");

    }

}

class TaskAvilableState implements State {

    private npc: NPC;

    taskSign: egret.Bitmap;
    taskSighX = 15;
    taskSighY = 20;
    taskSighWidth = 30;
    taskSighHeight = 30;

    constructor(npc: NPC) {
        this.npc = npc;
        this.taskSign = new egret.Bitmap();

    }

    onEnter() {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");

    }

    onExit() {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");

    }

    drawTaskSign() {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture=RES.getRes(emojiimage.ACCEPTABLEimage);

    }

}

class TaskDuringState implements State {

      private npc: NPC;

    taskSign: egret.Bitmap;
    taskSighX = 15;
    taskSighY = 20;
    taskSighWidth = 30;
    taskSighHeight = 30;

    constructor(npc: NPC) {
        this.npc = npc;
        this.taskSign = new egret.Bitmap();

    }

    onEnter() {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");

    }

    onExit() {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");

    }

    drawTaskSign() {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture=RES.getRes(emojiimage.DURINGimage);

    }
}

class TaskSubmitState implements State {

    private npc: NPC;

    taskSign: egret.Bitmap;
    taskSighX = 15;
    taskSighY = 20;
    taskSighWidth = 30;
    taskSighHeight = 30;

    constructor(npc: NPC) {
        this.npc = npc;
         this.taskSign = new egret.Bitmap();

    }


    onEnter() {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Submit State");

    }

    onExit() {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Submit State");

    }

    drawTaskSign() {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture=RES.getRes(emojiimage.CANSUBMITTEDimage);

    }

}