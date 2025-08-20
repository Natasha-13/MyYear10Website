gdjs.Level_32fiveCode = {};
gdjs.Level_32fiveCode.localVariables = [];
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1= [];
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects2= [];
gdjs.Level_32fiveCode.GDBoxObjects1= [];
gdjs.Level_32fiveCode.GDBoxObjects2= [];
gdjs.Level_32fiveCode.GDDoorObjects1= [];
gdjs.Level_32fiveCode.GDDoorObjects2= [];
gdjs.Level_32fiveCode.GDGoldKeyObjects1= [];
gdjs.Level_32fiveCode.GDGoldKeyObjects2= [];
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects1= [];
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects2= [];
gdjs.Level_32fiveCode.GDBackgroundObjects1= [];
gdjs.Level_32fiveCode.GDBackgroundObjects2= [];
gdjs.Level_32fiveCode.GDTitleObjects1= [];
gdjs.Level_32fiveCode.GDTitleObjects2= [];
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects1= [];
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects2= [];
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects1= [];
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects2= [];
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects1= [];
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects2= [];
gdjs.Level_32fiveCode.GDRed_9595flowerObjects1= [];
gdjs.Level_32fiveCode.GDRed_9595flowerObjects2= [];
gdjs.Level_32fiveCode.GDflowersObjects1= [];
gdjs.Level_32fiveCode.GDflowersObjects2= [];
gdjs.Level_32fiveCode.GDflowersLowObjects1= [];
gdjs.Level_32fiveCode.GDflowersLowObjects2= [];
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects1= [];
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects2= [];


gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1});
gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.Level_32fiveCode.GDGoldKeyObjects1});
gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1});
gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_32fiveCode.GDDoorObjects1});
gdjs.Level_32fiveCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1.length;i<l;++i) {
    if ( gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1[i].getY() > 3500 ) {
        isConditionTrue_0 = true;
        gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1[k] = gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1[i];
        ++k;
    }
}
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level five", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Level_32fiveCode.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32fiveCode.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.Level_32fiveCode.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.Level_32fiveCode.GDGoldKeyObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_32fiveCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32fiveCode.mapOfGDgdjs_9546Level_959532fiveCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level six (Tilly's level)", false);
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

gdjs.Level_32fiveCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32fiveCode.GDBoxObjects1.length = 0;
gdjs.Level_32fiveCode.GDBoxObjects2.length = 0;
gdjs.Level_32fiveCode.GDDoorObjects1.length = 0;
gdjs.Level_32fiveCode.GDDoorObjects2.length = 0;
gdjs.Level_32fiveCode.GDGoldKeyObjects1.length = 0;
gdjs.Level_32fiveCode.GDGoldKeyObjects2.length = 0;
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32fiveCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32fiveCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32fiveCode.GDTitleObjects1.length = 0;
gdjs.Level_32fiveCode.GDTitleObjects2.length = 0;
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32fiveCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32fiveCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32fiveCode.GDflowersObjects1.length = 0;
gdjs.Level_32fiveCode.GDflowersObjects2.length = 0;
gdjs.Level_32fiveCode.GDflowersLowObjects1.length = 0;
gdjs.Level_32fiveCode.GDflowersLowObjects2.length = 0;
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects2.length = 0;

gdjs.Level_32fiveCode.eventsList0(runtimeScene);
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32fiveCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32fiveCode.GDBoxObjects1.length = 0;
gdjs.Level_32fiveCode.GDBoxObjects2.length = 0;
gdjs.Level_32fiveCode.GDDoorObjects1.length = 0;
gdjs.Level_32fiveCode.GDDoorObjects2.length = 0;
gdjs.Level_32fiveCode.GDGoldKeyObjects1.length = 0;
gdjs.Level_32fiveCode.GDGoldKeyObjects2.length = 0;
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32fiveCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32fiveCode.GDBackgroundObjects1.length = 0;
gdjs.Level_32fiveCode.GDBackgroundObjects2.length = 0;
gdjs.Level_32fiveCode.GDTitleObjects1.length = 0;
gdjs.Level_32fiveCode.GDTitleObjects2.length = 0;
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32fiveCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32fiveCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32fiveCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32fiveCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32fiveCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32fiveCode.GDflowersObjects1.length = 0;
gdjs.Level_32fiveCode.GDflowersObjects2.length = 0;
gdjs.Level_32fiveCode.GDflowersLowObjects1.length = 0;
gdjs.Level_32fiveCode.GDflowersLowObjects2.length = 0;
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32fiveCode.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['Level_32fiveCode'] = gdjs.Level_32fiveCode;
