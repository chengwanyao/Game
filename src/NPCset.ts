var emojiimage = {
    npc_0: "person1_png",
    npc_1: "person2_png",
    ACCEPTABLEimage: "markyellow_png",
    DURINGimage: "questiongrey_png",
    CANSUBMITTEDimage: "questionyellow_png",
    UNACCEPTABLEimage: "markgrey_png"
};

class NPC implements Observer {

    public npcStage: egret.DisplayObjectContainer;

    taskService: TaskService;
    task: Task;
    npcId: string;
    npcName: string;
    npcStageShape: egret.Shape;
    npcStageX: number;
    npcStageY: number;
    npcStageWidth = 64;
    npcStageHeight = 128;
    emoji: egret.Bitmap;
    tileSize: number = 64;
    emojiX: number = 0;
    emojiY: number = 64;
    taskNoneState: State;
    taskAvilableState: State;
    taskSubmitState: State;
    taskDuringState: State;
    taskStateMachine: StateMachine;
    NPCtalkpanel:NPCTalkPanel;
    mockkillmosterbutton:KillMonsterPanel;

    public constructor(npcId: string, npcName: string, taskService,NPCtalkpanel:NPCTalkPanel,mockkillmonsterpanel:KillMonsterPanel) {
        this.npcStage = new egret.DisplayObjectContainer();
        this.npcStageShape = new egret.Shape();
        this.emoji = new egret.Bitmap();
        this.npcId = npcId;
        this.npcName = npcName;
        this.taskService = taskService;
        this.taskService.Attach(this, "NPC");

        this.taskNoneState = new TaskNoneState(this);
        this.taskAvilableState = new TaskAvilableState(this);
        this.taskDuringState = new TaskDuringState(this);
        this.taskSubmitState = new TaskSubmitState(this);

        this.taskStateMachine = new StateMachine(this.taskNoneState);
        this.NPCtalkpanel=NPCtalkpanel;
    }

    getTask() {
        this.task = this.taskService.getTaskByCustomRole(this.rule, this.npcId);
        console.log("This Task State: " + this.task.status);
        this.checkState();
    }

    setemoji() {
        if(this.npcId == "npc_0"){
            this.emoji.texture = RES.getRes(emojiimage.npc_0);
            this.emoji.x = this.emojiX;
            this.emoji.y = this.emojiY;
            this.emoji.width = this.tileSize;
            this.emoji.height = this.tileSize;
        }else if(this.npcId == "npc_1"){
            this.emoji.texture = RES.getRes(emojiimage.npc_1);
            this.emoji.x = this.emojiX;
            this.emoji.y = this.emojiY;
            this.emoji.width = this.tileSize;
            this.emoji.height = this.tileSize;
        }
    }

    setNpc(npcX: number, npcY: number, npcColor: number) {
        this.npcStageX = npcX;
        this.npcStageY = npcY;

        this.setemoji();
    }

    drawNpcShape() {
        this.npcStageShape.graphics.drawRect(0, 0, this.npcStageWidth, this.npcStageHeight);
        this.npcStageShape.graphics.endFill();

    }

    drawNpc() {
        this.drawNpcShape();

        this.npcStage.x = this.npcStageX;
        this.npcStage.y = this.npcStageY;
        this.npcStage.width = this.npcStageWidth;
        this.npcStage.height = this.npcStageHeight;

        this.npcStage.addChild(this.npcStageShape);
        this.npcStage.addChild(this.emoji);
        this.emoji.touchEnabled = true;
        //this.npcStage.touchEnabled = true;
        this.emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNpcClick, this);
    }

    checkState() {
        switch (this.task.status) {
            case TaskStatus.UNACCEPTABLE:
            case TaskStatus.SUBMITTED:
                this.taskStateMachine.changeState(this.taskNoneState);
                break;

            case TaskStatus.ACCEPTABLE:
                if (this.task.fromNpcId == this.npcId) {
                    this.taskStateMachine.changeState(this.taskAvilableState);
                } else {
                    this.taskStateMachine.changeState(this.taskNoneState);
                }
                break;
            case TaskStatus.DURING:
                if (this.task.toNpcId == this.npcId) {
                    this.taskStateMachine.changeState(this.taskDuringState);
                } else {
                    this.taskStateMachine.changeState(this.taskNoneState);
                }
                break;


            case TaskStatus.CAN_SUBMIT:
                if (this.task.toNpcId == this.npcId) {
                    this.taskStateMachine.changeState(this.taskSubmitState);
                } else {
                    this.taskStateMachine.changeState(this.taskNoneState);
                }
                break;



        }

    }


    onNpcClick(e: egret.TouchEvent, task: Task = this.task, npcid: string = this.npcId) {
        this.taskService.checkStatus(task, npcid,this.NPCtalkpanel);
    }

    onChange(task: Task) {
        this.task = task;
        this.checkState();
    }

    rule(taskList: Task[], npcId: string): Task {
        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].fromNpcId == npcId || taskList[i].toNpcId == npcId) {
                console.log("Find");
                return taskList[i];

            }
        }
    }

}

