gdjs.Opening_32PageCode = {};
gdjs.Opening_32PageCode.localVariables = [];
gdjs.Opening_32PageCode.GDFemaleCharacter11Objects1= [];
gdjs.Opening_32PageCode.GDFemaleCharacter11Objects2= [];
gdjs.Opening_32PageCode.GDBoxObjects1= [];
gdjs.Opening_32PageCode.GDBoxObjects2= [];
gdjs.Opening_32PageCode.GDDoorObjects1= [];
gdjs.Opening_32PageCode.GDDoorObjects2= [];
gdjs.Opening_32PageCode.GDGoldKeyObjects1= [];
gdjs.Opening_32PageCode.GDGoldKeyObjects2= [];
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects1= [];
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects2= [];
gdjs.Opening_32PageCode.GDBackgroundObjects1= [];
gdjs.Opening_32PageCode.GDBackgroundObjects2= [];
gdjs.Opening_32PageCode.GDTitleObjects1= [];
gdjs.Opening_32PageCode.GDTitleObjects2= [];
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1= [];
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects2= [];
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1= [];
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects2= [];
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects1= [];
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects2= [];
gdjs.Opening_32PageCode.GDRed_9595flowerObjects1= [];
gdjs.Opening_32PageCode.GDRed_9595flowerObjects2= [];
gdjs.Opening_32PageCode.GDflowersObjects1= [];
gdjs.Opening_32PageCode.GDflowersObjects2= [];
gdjs.Opening_32PageCode.GDflowersLowObjects1= [];
gdjs.Opening_32PageCode.GDflowersLowObjects2= [];
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects1= [];
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects2= [];


gdjs.Opening_32PageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1[k] = gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level one", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("how_to_play"), gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1[k] = gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1[i];
        ++k;
    }
}
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How To Play", false);
}}

}


};

gdjs.Opening_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Opening_32PageCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Opening_32PageCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Opening_32PageCode.GDBoxObjects1.length = 0;
gdjs.Opening_32PageCode.GDBoxObjects2.length = 0;
gdjs.Opening_32PageCode.GDDoorObjects1.length = 0;
gdjs.Opening_32PageCode.GDDoorObjects2.length = 0;
gdjs.Opening_32PageCode.GDGoldKeyObjects1.length = 0;
gdjs.Opening_32PageCode.GDGoldKeyObjects2.length = 0;
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Opening_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Opening_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Opening_32PageCode.GDTitleObjects1.length = 0;
gdjs.Opening_32PageCode.GDTitleObjects2.length = 0;
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Opening_32PageCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Opening_32PageCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Opening_32PageCode.GDflowersObjects1.length = 0;
gdjs.Opening_32PageCode.GDflowersObjects2.length = 0;
gdjs.Opening_32PageCode.GDflowersLowObjects1.length = 0;
gdjs.Opening_32PageCode.GDflowersLowObjects2.length = 0;
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects2.length = 0;

gdjs.Opening_32PageCode.eventsList0(runtimeScene);
gdjs.Opening_32PageCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Opening_32PageCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Opening_32PageCode.GDBoxObjects1.length = 0;
gdjs.Opening_32PageCode.GDBoxObjects2.length = 0;
gdjs.Opening_32PageCode.GDDoorObjects1.length = 0;
gdjs.Opening_32PageCode.GDDoorObjects2.length = 0;
gdjs.Opening_32PageCode.GDGoldKeyObjects1.length = 0;
gdjs.Opening_32PageCode.GDGoldKeyObjects2.length = 0;
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Opening_32PageCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Opening_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Opening_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Opening_32PageCode.GDTitleObjects1.length = 0;
gdjs.Opening_32PageCode.GDTitleObjects2.length = 0;
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Opening_32PageCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Opening_32PageCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Opening_32PageCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Opening_32PageCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Opening_32PageCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Opening_32PageCode.GDflowersObjects1.length = 0;
gdjs.Opening_32PageCode.GDflowersObjects2.length = 0;
gdjs.Opening_32PageCode.GDflowersLowObjects1.length = 0;
gdjs.Opening_32PageCode.GDflowersLowObjects2.length = 0;
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Opening_32PageCode.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['Opening_32PageCode'] = gdjs.Opening_32PageCode;
