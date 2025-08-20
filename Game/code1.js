gdjs.How_32To_32PlayCode = {};
gdjs.How_32To_32PlayCode.localVariables = [];
gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects1= [];
gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects2= [];
gdjs.How_32To_32PlayCode.GDObjectiveObjects1= [];
gdjs.How_32To_32PlayCode.GDObjectiveObjects2= [];
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1= [];
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects2= [];
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects1= [];
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects2= [];
gdjs.How_32To_32PlayCode.GDBoxObjects1= [];
gdjs.How_32To_32PlayCode.GDBoxObjects2= [];
gdjs.How_32To_32PlayCode.GDDoorObjects1= [];
gdjs.How_32To_32PlayCode.GDDoorObjects2= [];
gdjs.How_32To_32PlayCode.GDGoldKeyObjects1= [];
gdjs.How_32To_32PlayCode.GDGoldKeyObjects2= [];
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects1= [];
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects2= [];
gdjs.How_32To_32PlayCode.GDBackgroundObjects1= [];
gdjs.How_32To_32PlayCode.GDBackgroundObjects2= [];
gdjs.How_32To_32PlayCode.GDTitleObjects1= [];
gdjs.How_32To_32PlayCode.GDTitleObjects2= [];
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects1= [];
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects2= [];
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects1= [];
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects2= [];
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects1= [];
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects2= [];
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects1= [];
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects2= [];
gdjs.How_32To_32PlayCode.GDflowersObjects1= [];
gdjs.How_32To_32PlayCode.GDflowersObjects2= [];
gdjs.How_32To_32PlayCode.GDflowersLowObjects1= [];
gdjs.How_32To_32PlayCode.GDflowersLowObjects2= [];
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects1= [];
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects2= [];


gdjs.How_32To_32PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_to_start"), gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1.length;i<l;++i) {
    if ( gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1[k] = gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1[i];
        ++k;
    }
}
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opening Page", false);
}}

}


};

gdjs.How_32To_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDObjectiveObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDObjectiveObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDBoxObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBoxObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDDoorObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDDoorObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGoldKeyObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGoldKeyObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDTitleObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDTitleObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDflowersObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDflowersObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDflowersLowObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDflowersLowObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects2.length = 0;

gdjs.How_32To_32PlayCode.eventsList0(runtimeScene);
gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDHow_9595to_9595playObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDObjectiveObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDObjectiveObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBack_9595to_9595startObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects1.length = 0;
gdjs.How_32To_32PlayCode.GDFemaleCharacter11Objects2.length = 0;
gdjs.How_32To_32PlayCode.GDBoxObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBoxObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDDoorObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDDoorObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDGoldKeyObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDGoldKeyObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDLadder_9595MediumObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBackgroundObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDTitleObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDTitleObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDhow_9595to_9595playObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDEnd_9595of_9595gameObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDRed_9595flowerObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDflowersObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDflowersObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDflowersLowObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDflowersLowObjects2.length = 0;
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects1.length = 0;
gdjs.How_32To_32PlayCode.GDBlue_9595flowerObjects2.length = 0;


return;

}

gdjs['How_32To_32PlayCode'] = gdjs.How_32To_32PlayCode;
