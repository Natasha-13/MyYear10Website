gdjs.Respawn_32PageCode = {};
gdjs.Respawn_32PageCode.localVariables = [];
gdjs.Respawn_32PageCode.GDRespawnObjects1= [];
gdjs.Respawn_32PageCode.GDRespawnObjects2= [];
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1= [];
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects2= [];
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects1= [];
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects2= [];
gdjs.Respawn_32PageCode.GDBoxObjects1= [];
gdjs.Respawn_32PageCode.GDBoxObjects2= [];
gdjs.Respawn_32PageCode.GDDoorObjects1= [];
gdjs.Respawn_32PageCode.GDDoorObjects2= [];
gdjs.Respawn_32PageCode.GDGoldKeyObjects1= [];
gdjs.Respawn_32PageCode.GDGoldKeyObjects2= [];
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects1= [];
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects2= [];
gdjs.Respawn_32PageCode.GDBackgroundObjects1= [];
gdjs.Respawn_32PageCode.GDBackgroundObjects2= [];
gdjs.Respawn_32PageCode.GDTitleObjects1= [];
gdjs.Respawn_32PageCode.GDTitleObjects2= [];
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects1= [];
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects2= [];
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects1= [];
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects2= [];
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects1= [];
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects2= [];
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects1= [];
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects2= [];
gdjs.Respawn_32PageCode.GDflowersObjects1= [];
gdjs.Respawn_32PageCode.GDflowersObjects2= [];
gdjs.Respawn_32PageCode.GDflowersLowObjects1= [];
gdjs.Respawn_32PageCode.GDflowersLowObjects2= [];
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects1= [];
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects2= [];


gdjs.Respawn_32PageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Click_to_respawn"), gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1.length;i<l;++i) {
    if ( gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1[k] = gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1[i];
        ++k;
    }
}
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level one", false);
}}

}


};

gdjs.Respawn_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Respawn_32PageCode.GDRespawnObjects1.length = 0;
gdjs.Respawn_32PageCode.GDRespawnObjects2.length = 0;
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1.length = 0;
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects2.length = 0;
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Respawn_32PageCode.GDBoxObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBoxObjects2.length = 0;
gdjs.Respawn_32PageCode.GDDoorObjects1.length = 0;
gdjs.Respawn_32PageCode.GDDoorObjects2.length = 0;
gdjs.Respawn_32PageCode.GDGoldKeyObjects1.length = 0;
gdjs.Respawn_32PageCode.GDGoldKeyObjects2.length = 0;
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Respawn_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Respawn_32PageCode.GDTitleObjects1.length = 0;
gdjs.Respawn_32PageCode.GDTitleObjects2.length = 0;
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Respawn_32PageCode.GDflowersObjects1.length = 0;
gdjs.Respawn_32PageCode.GDflowersObjects2.length = 0;
gdjs.Respawn_32PageCode.GDflowersLowObjects1.length = 0;
gdjs.Respawn_32PageCode.GDflowersLowObjects2.length = 0;
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects2.length = 0;

gdjs.Respawn_32PageCode.eventsList0(runtimeScene);
gdjs.Respawn_32PageCode.GDRespawnObjects1.length = 0;
gdjs.Respawn_32PageCode.GDRespawnObjects2.length = 0;
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects1.length = 0;
gdjs.Respawn_32PageCode.GDClick_9595to_9595respawnObjects2.length = 0;
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.Respawn_32PageCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.Respawn_32PageCode.GDBoxObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBoxObjects2.length = 0;
gdjs.Respawn_32PageCode.GDDoorObjects1.length = 0;
gdjs.Respawn_32PageCode.GDDoorObjects2.length = 0;
gdjs.Respawn_32PageCode.GDGoldKeyObjects1.length = 0;
gdjs.Respawn_32PageCode.GDGoldKeyObjects2.length = 0;
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.Respawn_32PageCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.Respawn_32PageCode.GDBackgroundObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBackgroundObjects2.length = 0;
gdjs.Respawn_32PageCode.GDTitleObjects1.length = 0;
gdjs.Respawn_32PageCode.GDTitleObjects2.length = 0;
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.Respawn_32PageCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.Respawn_32PageCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.Respawn_32PageCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects1.length = 0;
gdjs.Respawn_32PageCode.GDRed_9595flowerObjects2.length = 0;
gdjs.Respawn_32PageCode.GDflowersObjects1.length = 0;
gdjs.Respawn_32PageCode.GDflowersObjects2.length = 0;
gdjs.Respawn_32PageCode.GDflowersLowObjects1.length = 0;
gdjs.Respawn_32PageCode.GDflowersLowObjects2.length = 0;
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.Respawn_32PageCode.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['Respawn_32PageCode'] = gdjs.Respawn_32PageCode;
