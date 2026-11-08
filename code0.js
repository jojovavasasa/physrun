gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];
gdjs.Untitled_32sceneCode.GDfloorObjects3= [];
gdjs.Untitled_32sceneCode.GDiriqObjects1= [];
gdjs.Untitled_32sceneCode.GDiriqObjects2= [];
gdjs.Untitled_32sceneCode.GDiriqObjects3= [];
gdjs.Untitled_32sceneCode.GDfinishObjects1= [];
gdjs.Untitled_32sceneCode.GDfinishObjects2= [];
gdjs.Untitled_32sceneCode.GDfinishObjects3= [];
gdjs.Untitled_32sceneCode.GDwinObjects1= [];
gdjs.Untitled_32sceneCode.GDwinObjects2= [];
gdjs.Untitled_32sceneCode.GDwinObjects3= [];
gdjs.Untitled_32sceneCode.GDimfallingObjects1= [];
gdjs.Untitled_32sceneCode.GDimfallingObjects2= [];
gdjs.Untitled_32sceneCode.GDimfallingObjects3= [];
gdjs.Untitled_32sceneCode.GDstartObjects1= [];
gdjs.Untitled_32sceneCode.GDstartObjects2= [];
gdjs.Untitled_32sceneCode.GDstartObjects3= [];
gdjs.Untitled_32sceneCode.GDpijlObjects1= [];
gdjs.Untitled_32sceneCode.GDpijlObjects2= [];
gdjs.Untitled_32sceneCode.GDpijlObjects3= [];
gdjs.Untitled_32sceneCode.GDtipObjects1= [];
gdjs.Untitled_32sceneCode.GDtipObjects2= [];
gdjs.Untitled_32sceneCode.GDtipObjects3= [];
gdjs.Untitled_32sceneCode.GDopnieuwObjects1= [];
gdjs.Untitled_32sceneCode.GDopnieuwObjects2= [];
gdjs.Untitled_32sceneCode.GDopnieuwObjects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDiriqObjects1Objects = Hashtable.newFrom({"iriq": gdjs.Untitled_32sceneCode.GDiriqObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Untitled_32sceneCode.GDfinishObjects1});
gdjs.Untitled_32sceneCode.asyncCallback13301188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("opnieuw"), gdjs.Untitled_32sceneCode.GDopnieuwObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDopnieuwObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDopnieuwObjects3[i].activateBehavior("Physics2", true);
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(13301188, gdjs.Untitled_32sceneCode.asyncCallback13301188);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback13301188(runtimeScene, asyncObjectsList)), 13301188, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback11040844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.Untitled_32sceneCode.GDwinObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwinObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwinObjects2[i].hide(false);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Zye - Dr. Zye OST 2- Flag of Power - 02 This is a Mission.mp3", 1, true, 100, 1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11040844, gdjs.Untitled_32sceneCode.asyncCallback11040844);
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11040844(runtimeScene, asyncObjectsList)), 11040844, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback11794820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11794820, gdjs.Untitled_32sceneCode.asyncCallback11794820);
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11794820(runtimeScene, asyncObjectsList)), 11794820, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("imfalling"), gdjs.Untitled_32sceneCode.GDimfallingObjects1);
gdjs.copyArray(runtimeScene.getObjects("opnieuw"), gdjs.Untitled_32sceneCode.GDopnieuwObjects1);
gdjs.copyArray(runtimeScene.getObjects("pijl"), gdjs.Untitled_32sceneCode.GDpijlObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Untitled_32sceneCode.GDstartObjects1);
gdjs.copyArray(runtimeScene.getObjects("tip"), gdjs.Untitled_32sceneCode.GDtipObjects1);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.Untitled_32sceneCode.GDwinObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwinObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstartObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimfallingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimfallingObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpijlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpijlObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtipObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtipObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDopnieuwObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDopnieuwObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwinObjects1[i].activateBehavior("Physics2", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Untitled_32sceneCode.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("iriq"), gdjs.Untitled_32sceneCode.GDiriqObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDiriqObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfinishObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDfinishObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDfinishObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDfinishObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDfinishObjects1[k] = gdjs.Untitled_32sceneCode.GDfinishObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDfinishObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDfinishObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfinishObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDfinishObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Untitled_32sceneCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDstartObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDstartObjects1[k] = gdjs.Untitled_32sceneCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("imfalling"), gdjs.Untitled_32sceneCode.GDimfallingObjects1);
gdjs.copyArray(runtimeScene.getObjects("pijl"), gdjs.Untitled_32sceneCode.GDpijlObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDstartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("tip"), gdjs.Untitled_32sceneCode.GDtipObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Zye - Dr. Zye OST 2- Flag of Power - 04 (Loop) My Head Spins.mp3", 1, true, 100, 1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstartObjects1[i].activateBehavior("Physics2", true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimfallingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimfallingObjects1[i].activateBehavior("Physics2", true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpijlObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpijlObjects1[i].activateBehavior("Physics2", true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtipObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtipObjects1[i].activateBehavior("Physics2", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("opnieuw"), gdjs.Untitled_32sceneCode.GDopnieuwObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDopnieuwObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDopnieuwObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDopnieuwObjects1[k] = gdjs.Untitled_32sceneCode.GDopnieuwObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDopnieuwObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.Untitled_32sceneCode.GDwinObjects1);
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfloorObjects1[i].activateBehavior("Platform", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfloorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfloorObjects1[i].activateBehavior("Physics2", false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDwinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDwinObjects1[i].activateBehavior("Physics2", true);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiriqObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfinishObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimfallingObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstartObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpijlObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtipObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDopnieuwObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
