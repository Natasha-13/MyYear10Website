gdjs.Level_32oneCode = {};
gdjs.Level_32oneCode.localVariables = [];
gdjs.Level_32oneCode.GDPersonObjects1= [];
gdjs.Level_32oneCode.GDPersonObjects2= [];
gdjs.Level_32oneCode.GDGreenGrass9patchObjects1= [];
gdjs.Level_32oneCode.GDGreenGrass9patchObjects2= [];
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects1= [];
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects2= [];
gdjs.Level_32oneCode.GDBedPinkObjects1= [];
gdjs.Level_32oneCode.GDBedPinkObjects2= [];
gdjs.Level_32oneCode.GDFemaleCharacter11Objects1= [];
gdjs.Level_32oneCode.GDFemaleCharacter11Objects2= [];
gdjs.Level_32oneCode.GDBoxObjects1= [];
gdjs.Level_32oneCode.GDBoxObjects2= [];
gdjs.Level_32oneCode.GDDoorObjects1= [];
gdjs.Level_32oneCode.GDDoorObjects2= [];
gdjs.Level_32oneCode.GDGoldKeyObjects1= [];
gdjs.Level_32oneCode.GDGoldKeyObjects2= [];
gdjs.Level_32oneCode.GDLadder_9595MediumObjects1= [];
gdjs.Level_32oneCode.GDLadder_9595MediumObjects2= [];
gdjs.Level_32oneCode.GDBackgroundObjects1= [];
gdjs.Level_32oneCode.GDBackgroundObjects2= [];
gdjs.Level_32oneCode.GDTitleObjects1= [];
gdjs.Level_32oneCode.GDTitleObjects2= [];
gdjs.Level_32oneCode.GDPlay_9595buttonObjects1= [];
gdjs.Level_32oneCode.GDPlay_9595buttonObjects2= [];
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects1= [];
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects2= [];
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects1= [];
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects2= [];
gdjs.Level_32oneCode.GDRed_9595flowerObjects1= [];
gdjs.Level_32oneCode.GDRed_9595flowerObjects2= [];
gdjs.Level_32oneCode.GDflowersObjects1= [];
gdjs.Level_32oneCode.GDflowersObjects2= [];
gdjs.Level_32oneCode.GDflowersLowObjects1= [];
gdjs.Level_32oneCode.GDflowersLowObjects2= [];
gdjs.Level_32oneCode.GDBlue_9595flowerObjects1= [];
gdjs.Level_32oneCode.GDBlue_9595flowerObjects2= [];


gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32oneCode.GDFemaleCharacter11Objects1});
gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.Level_32oneCode.GDGoldKeyObjects1});
gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32oneCode.GDFemaleCharacter11Objects1});
gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_32oneCode.GDDoorObjects1});
gdjs.Level_32oneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32oneCode.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32oneCode.GDFemaleCharacter11Objects1.length;i<l;++i) {
    if ( gdjs.Level_32oneCode.GDFemaleCharacter11Objects1[i].getY() > 900 ) {
        isConditionTrue_0 = true;
        gdjs.Level_32oneCode.GDFemaleCharacter11Objects1[k] = gdjs.Level_32oneCode.GDFemaleCharacter11Objects1[i];
        ++k;
    }
}
gdjs.Level_32oneCode.GDFemaleCharacter11Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level one", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32oneCode.GDFemaleCharacter11Objects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Level_32oneCode.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32oneCode.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.Level_32oneCode.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.Level_32oneCode.GDGoldKeyObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_32oneCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32oneCode.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32oneCode.mapOfGDgdjs_9546Level_959532oneCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level two", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_32oneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32oneCode.GDPersonObjects1.length = 0;
gdjs.Level_32oneCode.GDPersonObjects2.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patchObjects1.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patchObjects2.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects1.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects2.length = 0;
gdjs.Level_32oneCode.GDBedPinkObjects1.length = 0;
gdjs.Level_32oneCode.GDBedPinkObjects2.length = 0;
gdjs.Level_32oneCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32oneCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32oneCode.GDBoxObjects1.length = 0;
gdjs.Level_32oneCode.GDBoxObjects2.length = 0;
gdjs.Level_32oneCode.GDDoorObjects1.length = 0;
gdjs.Level_32oneCode.GDDoorObjects2.length = 0;
gdjs.Level_32oneCode.GDGoldKeyObjects1.length = 0;
gdjs.Level_32oneCode.GDGoldKeyObjects2.length = 0;
gdjs.Level_32oneCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32oneCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32oneCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32oneCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32oneCode.GDTitleObjects1.length = 0;
gdjs.Level_32oneCode.GDTitleObjects2.length = 0;
gdjs.Level_32oneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32oneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32oneCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32oneCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32oneCode.GDflowersObjects1.length = 0;
gdjs.Level_32oneCode.GDflowersObjects2.length = 0;
gdjs.Level_32oneCode.GDflowersLowObjects1.length = 0;
gdjs.Level_32oneCode.GDflowersLowObjects2.length = 0;
gdjs.Level_32oneCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32oneCode.GDBlue_9595flowerObjects2.length = 0;

gdjs.Level_32oneCode.eventsList0(runtimeScene);
gdjs.Level_32oneCode.GDPersonObjects1.length = 0;
gdjs.Level_32oneCode.GDPersonObjects2.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patchObjects1.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patchObjects2.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects1.length = 0;
gdjs.Level_32oneCode.GDGreenGrass9patch2Objects2.length = 0;
gdjs.Level_32oneCode.GDBedPinkObjects1.length = 0;
gdjs.Level_32oneCode.GDBedPinkObjects2.length = 0;
gdjs.Level_32oneCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32oneCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32oneCode.GDBoxObjects1.length = 0;
gdjs.Level_32oneCode.GDBoxObjects2.length = 0;
gdjs.Level_32oneCode.GDDoorObjects1.length = 0;
gdjs.Level_32oneCode.GDDoorObjects2.length = 0;
gdjs.Level_32oneCode.GDGoldKeyObjects1.length = 0;
gdjs.Level_32oneCode.GDGoldKeyObjects2.length = 0;
gdjs.Level_32oneCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32oneCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32oneCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32oneCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32oneCode.GDTitleObjects1.length = 0;
gdjs.Level_32oneCode.GDTitleObjects2.length = 0;
gdjs.Level_32oneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32oneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32oneCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32oneCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32oneCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32oneCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32oneCode.GDflowersObjects1.length = 0;
gdjs.Level_32oneCode.GDflowersObjects2.length = 0;
gdjs.Level_32oneCode.GDflowersLowObjects1.length = 0;
gdjs.Level_32oneCode.GDflowersLowObjects2.length = 0;
gdjs.Level_32oneCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32oneCode.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['Level_32oneCode'] = gdjs.Level_32oneCode;
