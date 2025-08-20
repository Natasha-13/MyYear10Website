gdjs.Level_32six_32_40Tilly_39s_32level_41Code = {};
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.localVariables = [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects2= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects1= [];
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects2= [];


gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1});
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1});
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDFemaleCharacter11Objects1Objects = Hashtable.newFrom({"FemaleCharacter11": gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1});
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects1});
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1.length;i<l;++i) {
    if ( gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1[i].getY() > 1000 ) {
        isConditionTrue_0 = true;
        gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1[k] = gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1[i];
        ++k;
    }
}
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level six (Tilly's level)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDGoldKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{for(var i = 0, len = gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1[i].hide();
}
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

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter11"), gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDFemaleCharacter11Objects1Objects, gdjs.Level_32six_32_40Tilly_39s_32level_41Code.mapOfGDgdjs_9546Level_959532six_959532_959540Tilly_959539s_959532level_959541Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Page", false);
}}

}


};

gdjs.Level_32six_32_40Tilly_39s_32level_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects2.length = 0;

gdjs.Level_32six_32_40Tilly_39s_32level_41Code.eventsList0(runtimeScene);
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDFemaleCharacter11Objects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBoxObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDDoorObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDGoldKeyObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDLadder_9595MediumObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBackgroundObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDTitleObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDPlay_9595buttonObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDRed_9595flowerObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDflowersLowObjects2.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects1.length = 0;
gdjs.Level_32six_32_40Tilly_39s_32level_41Code.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['Level_32six_32_40Tilly_39s_32level_41Code'] = gdjs.Level_32six_32_40Tilly_39s_32level_41Code;
