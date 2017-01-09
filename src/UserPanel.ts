class UserPanel extends egret.DisplayObjectContainer{
private background : egret.Bitmap;
private heroPicture : egret.Bitmap;
private weaponIconBitmap : egret.Bitmap;
private helmentIconBitmap : egret.Bitmap;
private DefenceIconBitmap : egret.Bitmap;
private ArmourIconBitmap : egret.Bitmap;
private heroInformationTextField : egret.TextField;
private heroInformationText : string;
private hero : Hero;
public equipmentInformationPanel : EquipmentInformationPanel;

constructor(){
        super();
        this.width = 480;
        this.height = 600;
        this.background = this.createBitmapByName("UserPanelBackGround_png");
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = 0;
        this.background.width = 480;
        this.background.height = 600;
        this.background.touchEnabled = true;
        this.background.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
             this.equipmentInformationPanel.alpha = 0;
        },this)
        this.weaponIconBitmap = new egret.Bitmap();
        this.weaponIconBitmap.width = 50;
        this.weaponIconBitmap.height = 50;
        this.addChild(this.weaponIconBitmap);
        this.weaponIconBitmap.x = this.width * 7 / 9;
        this.weaponIconBitmap.y = this.height / 8;
        this.weaponIconBitmap.touchEnabled = true;
        this.weaponIconBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
            this.hero.__weaponsOnEquip[0].getEquipmentInformations();
            this.equipmentInformationPanel.showEquipmentInformation(this.hero.__weaponsOnEquip[0]);
            this.equipmentInformationPanel.alpha = 1;
        },this)
        
        this.helmentIconBitmap = new egret.Bitmap();
        this.helmentIconBitmap.width = 50;
        this.helmentIconBitmap.height = 50;
        this.addChild(this.helmentIconBitmap);
        this.helmentIconBitmap.x = this.width * 7 / 9;
        this.helmentIconBitmap.y = this.weaponIconBitmap.y + this.height / 6;
        this.helmentIconBitmap.touchEnabled = true;
        this.helmentIconBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
            this.hero.__armorOnEquip[0].getDefence();
            this.hero.__armorOnEquip[0].getAglie();
            this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[0]);
            this.equipmentInformationPanel.alpha = 1;
        },this)

        this.DefenceIconBitmap = new egret.Bitmap();
        this.DefenceIconBitmap.width = 50;
        this.DefenceIconBitmap.height = 50;
        this.addChild(this.DefenceIconBitmap);
        this.DefenceIconBitmap.x = this.width * 7 / 9;
        this.DefenceIconBitmap.y = this.helmentIconBitmap.y + this.height / 7;
        this.DefenceIconBitmap.touchEnabled = true;
        this.DefenceIconBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
            this.hero.__armorOnEquip[1].getDefence();
            this.hero.__armorOnEquip[1].getAglie();
            this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[1]);
            this.equipmentInformationPanel.alpha = 1;
        },this)

        this.ArmourIconBitmap = new egret.Bitmap();
        this.ArmourIconBitmap.width = 50;
        this.ArmourIconBitmap.height = 50;
        this.addChild(this.ArmourIconBitmap);
        this.ArmourIconBitmap.x = this.width * 7 / 9;
        this.ArmourIconBitmap.y = this.DefenceIconBitmap.y + this.height / 6;
        this.ArmourIconBitmap.touchEnabled = true;
        this.ArmourIconBitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e : egret.TouchEvent)=>{
            this.hero.__armorOnEquip[2].getDefence();
            this.hero.__armorOnEquip[2].getAglie();
            this.equipmentInformationPanel.showEquipmentInformation(this.hero.__armorOnEquip[2]);
            this.equipmentInformationPanel.alpha = 1;
        },this)

        this.heroPicture = new egret.Bitmap();
        this.heroPicture.width = 323;
        this.heroPicture.height = 400;
        this.addChild(this.heroPicture);
        this.heroPicture.x = 0 ;
        this.heroPicture.y = 25;

        this.heroInformationText = "";
        this.heroInformationTextField = new egret.TextField();
        this.heroInformationTextField.width = 400;
        this.heroInformationTextField.height = 400;
        this.addChild(this.heroInformationTextField);
        this.heroInformationTextField.x = (this.width - this.heroInformationTextField.width) / 2;
        this.heroInformationTextField.y = 460;
        this.heroInformationTextField.size = 20;//zihao

        this.equipmentInformationPanel = new EquipmentInformationPanel();
        this.addChild(this.equipmentInformationPanel);
        this.equipmentInformationPanel.x = (this.width - this.equipmentInformationPanel.width) / 2; 
        this.equipmentInformationPanel.y = (this.height - this.equipmentInformationPanel.height) / 2;
        this.equipmentInformationPanel.alpha = 0;

    }

    public showHeroInformation(hero : Hero){
        this.hero = hero;
        this.getHeroInformations(hero);
        this.heroPicture.texture = RES.getRes(hero.heroBitemapID);
        this.weaponIconBitmap.texture = RES.getRes(hero.__weaponsOnEquip[0].equipmentBitmapID);
        this.helmentIconBitmap.texture = RES.getRes(hero.__armorOnEquip[0].equipmentBitmapID);
        this.DefenceIconBitmap.texture = RES.getRes(hero.__armorOnEquip[1].equipmentBitmapID);
        this.ArmourIconBitmap.texture = RES.getRes(hero.__armorOnEquip[2].equipmentBitmapID);
        this.heroInformationTextField.textColor = hero.color;
    }

    public getHeroInformations(hero : Hero){
        this.heroInformationText = "";
        this.heroInformationText = "Hero : " + hero.name + "\n";
        hero.getDefence();
        hero.getAttack();
        hero.getMaxHP();
        hero.getAglie();
        for(let i = 0; i < hero.properties.length; i++){
            this.heroInformationText = this.heroInformationText + hero.properties[i].name + " : " + hero.properties[i].value.toFixed(0) + "\n";
        }
        this.heroInformationText = this.heroInformationText + "FightPower : " + hero.getFightPower().toFixed(0);
        this.heroInformationTextField.text = this.heroInformationText;
    }

    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
}
class EquipmentInformationPanel extends egret.DisplayObjectContainer{
    public backGround : egret.Bitmap;
    private equipmentIconBitmap : egret.Bitmap;
    private nameField : egret.TextField;
    private propertiesField : egret.TextField;


    constructor(){
        super();
        this.width = 250;
        this.height = 400;
        this.backGround = new egret.Bitmap();
        this.backGround.texture = RES.getRes("BlackBackground_png");
        this.backGround.width = 250;
        this.backGround.height = 400;
        this.addChild(this.backGround);
        this.backGround.x = 0;
        this.backGround.y = 0;
        this.backGround.alpha = 0.8;
        this.equipmentIconBitmap = new egret.Bitmap();
        this.equipmentIconBitmap.width = 60;
        this.equipmentIconBitmap.height = 60;
        this.addChild(this.equipmentIconBitmap);
        this.equipmentIconBitmap.x = 30;
        this.equipmentIconBitmap.y = 30;

        this.nameField = new egret.TextField();
        this.nameField.width = 200;
        this.nameField.height = 50;
        this.addChild(this.nameField);
        this.nameField.size = 24;
        this.nameField.x = 30;
        this.nameField.y = this.equipmentIconBitmap.y + this.equipmentIconBitmap.height + 50;

        this.propertiesField = new egret.TextField();
        this.propertiesField.width = 200;
        this.propertiesField.height = 300;
        this.addChild(this.propertiesField);
        this.propertiesField.textColor = 0x400000;
        this.propertiesField.size = 20;
        this.propertiesField.x = 30;
        this.propertiesField.y = this.nameField.y + 55;
    }

    public showEquipmentInformation(equipment : Equipment){
        this.nameField.text = equipment.name;
        this.nameField.textColor = equipment.color;
        
        this.equipmentIconBitmap.texture = RES.getRes(equipment.equipmentBitmapID);
        var information : string = "";

        for(let i = 0; i < equipment.properties.length; i++){
            information = information + equipment.properties[i].name + " : " + equipment.properties[i].value.toFixed(0) + "\n" + "\n" + "\n";
        }
        this.propertiesField.text = information;
    }
}