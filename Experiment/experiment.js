/* Global Variables */
/* Scene Dimensions  */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */


var seq;
var peq;
var Cell;
var res1;
var res2;
var res3;
var res4;
var eq1;
var eq2;
var wire1;
var wire2;
var wire3;
var arrow1;
var arrow1A;
var arrow2;
var arrow2A;
var arrow3;
var arrow3A;
var arrow4;
var arrow4A;
var switch1;
var switch2;
var r1=4.0;
var r2=15.0;
var r3=4.0;
var r4=15.0;
var rs=19;
var rp=3.16;
var volt=6;
var current=0.27;
var R1;
var R2;
var R3;
var R4;

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Combining large and small resistances experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a simple circuit consisting of a few cells, two resistances in parallel, two resistances in series, ammeter in series with the resistances/cell, voltmeter spanning the resistances and a switch.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>There are two setup stages - The initial state and the state obtained on replacement of the resistors by equivalent resistors. Click on the Replace button to enter the state containing equivalent resistors. In both the stages, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Voltage&nbsp;&nbsp;:&nbsp;Controls the total voltage supplied by the cells.</li>";
    helpContent = helpContent + "<li>Resistance 1&nbsp;:&nbsp;Controls the resistance of resistor R1.</li>";
    helpContent = helpContent + "<li>Resistance 2&nbsp;:&nbsp;Controls the resistance of resistor R2.</li>";
    helpContent = helpContent + "<li>Resistance 3&nbsp;:&nbsp;Controls the resistance of resistor R3.</li>";
    helpContent = helpContent + "<li>Resistance 4&nbsp;:&nbsp;Controls the resistance of resistor R4.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have additional texts that show the equivalent series resistance of R1 and R2, and equivalent parallel resistance of R3 and R4 </p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the switch is closed and the current flows through the circuit.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the meter readings when the switch is closed.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Voltage&nbsp;&nbsp;:&nbsp;Shows the reading of the voltmeter.</li>";
    helpContent = helpContent + "<li>Current&nbsp;&nbsp;:&nbsp;Shows the reading of the ammeter.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>It can easily be observed that the ammeter reading is same when the resistances in parallel and series are replaced with their equivalent resistances.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play button on the top line</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Combining large and small resistances experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a simple circuit consisting of a few cells, two resistances in parallel, two resistances in series, ammeter in series with the resistances/cell, voltmeter spanning the resistances and a switch.</p>";
    infoContent = infoContent + "<h3>Equivalent Resistance</h3>";
    infoContent = infoContent + "<p>When two or more resistances are connected in series, the equivalent resistance is larger than each individual resistance.</p>";
    infoContent = infoContent + "<p>When two or more resistances are connected in parallel, the equivalent resistance is smaller than each individual resistance.</p>";
    infoContent = infoContent + "<p>This can easily be seen in the control panel. For same value of resistances, the series equivalent resistance is greater than the parallel equivalent resistance. </p>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
}


var modal_content;
function modal(){
    var a;var b;a=" position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";
    ImodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";
    HmodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";
    PIEhelpModal1=document.createElement("div");PIEhelpModal1.style=a;PIEhelpModal1.onclick=function(){PIEhelpModal1.style.display="none"};
    PIEhelpContent1=document.createElement("div");PIEhelpContent1.style=HmodalContentStyle;
    
    modal_content="";
    modal_content=modal_content+" <h3>Water Analogy</h3> ";
    modal_content=modal_content+" <p>When describing current, and resistance, a common analogy is a water pipe. In this analogy, charge is represented by the water amount, and current is represented by the water flow. So for this analogy, remember: <ul><li>Water = Charge</li><li>Flow = Current</li></ul></p> ";
    modal_content=modal_content+" <p>Consider two pipes of x meter length with radius r1 and r2 respectively. <br>";
    modal_content=modal_content+" Let r2 > r1<br>Consider water flowing through both the pipes. ";    
    modal_content=modal_content+" If the rate of flow of water is x m/s, the volume of water flowing through both the pipes in 1 sec is given by:<br>  ";
    modal_content=modal_content+" Pipe 1: π*r1*r1*x<br> Pipe 2: π*r2*r2*x</p> ";
    modal_content=modal_content+"<img src=\"Pipe_1.jpg\"><img src=\"Pipe_2.jpg\">";
    modal_content=modal_content+" <p>Since r2>r1 more water flows through the pipe 2 than pipe 1.</p> ";
    modal_content=modal_content+" <p>Here the pipes are analogous to resistors. Pipe with larger radius or larger cross-section means a resistor with low resistance value whereas a pipe with smaller radius or smaller cross-section means a resistor with high resistance value.</p> ";
    modal_content=modal_content+"Just like more water flows throughs a wider canal, more current flows through a resistor with low resistance value, and just like less water flows throughs a thinner pipe/canal, less current flows through a resistor with high resistance value.</p>";    
    PIEhelpContent1.innerHTML=modal_content;
    PIEhelpSpan1=document.createElement("span");PIEhelpSpan1.className="close";PIEhelpSpan1.style="color: #000000; float: right;margin-top:-300px; font-size: 28px; font-weight: bold; ";PIEhelpSpan1.innerHTML="&times;";PIEhelpSpan1.onclick=function(){PIEhelpModal1.style.display="none"};PIEhelpSpan1.onmouseout=function(){PIEhelpSpan1.style="color: #000000; cursor: auto;"};    
    PIEhelpContent1.appendChild(PIEhelpSpan1);     
    PIEhelpModal1.appendChild(PIEhelpContent1);
    PIEscreenElem.appendChild(PIEhelpModal1);
}

function test(){

}
function test1(value){
    r1=value;
    rs=value+r2;
    var c = rs + "ohm";
    PIEchangeInputText("Series Eq (Rs): ", c, test);
    var new_current=volt/(rs+rp);
    new_current=Math.round(new_current*100)/100;
    PIEchangeDisplayText("Current : ", new_current + "A");
    current=new_current;
    
}
function test2(value){
    r2=value;
    rs=r1+value;
    var c = rs + "ohm";
    PIEchangeInputText("Series Eq (Rs): ", c, test);
    var new_current=volt/(rs+rp);
    new_current=Math.round(new_current*100)/100;
    PIEchangeDisplayText("Current : ", new_current + "A");
    current=new_current;
}
function test3(value){
    r3=value;
    rp=(r3*r4)/(r3+r4);
    rp=Math.round(rp*100)/100;
    var c = rp + "ohm";
    PIEchangeInputText("Parallel Eq (Rp): ", c, test);
    var new_current=volt/(rs+rp);
    new_current=Math.round(new_current*100)/100;
    PIEchangeDisplayText("Current : ", new_current + "A");
    current=new_current;
}
function test4(value){
    r4=value;
    rp=(r3*r4)/(r3+r4);
    rp=Math.round(rp*100)/100;
    var c = rp + "ohm";
    PIEchangeInputText("Parallel Eq (Rp): ", c, test);
    var new_current=volt/(rs+rp);
    new_current=Math.round(new_current*100)/100;
    PIEchangeDisplayText("Current : ", new_current + "A");    
    current=new_current;
}
function test5(value){
    PIEchangeDisplayText("Voltage : ", value + "V");
    volt=value;
    var new_current=volt/(rs+rp);
    new_current=Math.round(new_current*100)/100;
    PIEchangeDisplayText("Current : ", new_current + "A");    
    current=new_current;
}


function addcells(){
    var a=0.25;
    var b=0.3;
    for(i=0;i<3;i++){
        Cell = new THREE.Mesh(new THREE.BoxGeometry(.15,.25,.3), new THREE.MeshLambertMaterial({color:"orange"}));
        Cell.position.set(1+a*i, 0.75, 0);
        PIEaddElement(Cell);

        var terminal1 = new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,.02,32),new THREE.MeshBasicMaterial({color:"gray"}));
        terminal1.position.set(-0.025,0.135,0.1);
        Cell.add(terminal1);
        
        var terminal2 = new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,.02,32),new THREE.MeshBasicMaterial({color:"gray"}));
        terminal2.position.set(0.025,0.135,0.1);
        Cell.add(terminal2);

        var minus =  new THREE.Mesh( new THREE.CubeGeometry( 0.04, 0.01, 0.1/3, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
        minus.position.set(0.025,0.08,0.15);
        Cell.add(minus);
        var plus1 =  new THREE.Mesh( new THREE.CubeGeometry( 0.04, 0.01, 0.1/3, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
        plus1.position.set(-0.025,0.08,0.15);
        Cell.add(plus1);
        var plus2 =  new THREE.Mesh( new THREE.CubeGeometry( 0.04, 0.01, 0.1/3, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
        plus2.position.set(-0.025,0.08,0.15);
        Cell.add(plus2);
        plus2.rotation.z=Math.PI/2;
    }
}

function addElementsToScene(){
    addcells();
}

function showOriginals(){
    eq1.visible=false;
    eq2.visible=false;
    wire3.visible=false;
    switch2.visible=false;
    arrow1.visible=false;
    arrow1A.visible=false;
    arrow2.visible=false;
    arrow2A.visible=false;
    arrow3.visible=false;
    arrow3A.visible=false;
    arrow4.visible=false;
    arrow4A.visible=false;
    Rp.style.display="none";
    Rs.style.display="none";
    PIErender();
}

function showOriginal(){
    eq1.visible=false;
    eq2.visible=false;
    res1.visible=true;
    res2.visible=true;
    res3.visible=true;
    res4.visible=true;
    wire1.visible=true;
    wire2.visible=true;
    wire3.visible=false;
    Rp.style.display="none";
    Rs.style.display="none";
    PIErender();
}

function startAnimation(){
    switch1.visible=false;
    switch2.visible=true;
    arrow1.visible=true;
    arrow1A.visible=true;
    arrow2.visible=true;
    arrow2A.visible=true;
    arrow3.visible=true;
    arrow3A.visible=true;
    arrow4.visible=true;
    arrow4A.visible=true;
    var dis_current=current+" A";
    PIEupdateTableCell(0, 1, dis_current);    
    if(Rp.style.display=="inline"){PIEupdateTableCell(1, 1, dis_current);}   
    PIEstartAnimation();
    PIErender();
}

function stopAnimation(){
    switch1.visible=true;
    switch2.visible=false;
    arrow1.visible=false;
    arrow1A.visible=false;
    arrow2.visible=false;
    arrow2A.visible=false;
    arrow3.visible=false;
    arrow3A.visible=false;
    arrow4.visible=false;
    arrow4A.visible=false;
    PIEstopAnimation();
    PIErender();    
}

function showEquivalent(){
    res1.visible=false;
    res2.visible=false;
    res3.visible=false;
    res4.visible=false;
    wire1.visible=false;
    wire2.visible=false;
    eq1.visible=true;
    eq2.visible=true;
    PIErender();
    wire3.visible=true;
    R1.style.display="none";
    R2.style.display="none";
    R3.style.display="none";
    R4.style.display="none";
    Rp.style.display="inline";
    Rs.style.display="inline";
          
    stopAnimation();
    PIErender();
}

/* This function creates the scene of the experiment.*/
function loadExperimentElements()
{
var geometry;
var material;

    PIEsetExperimentTitle("Combining large and small resistances");
    PIEsetDeveloperName("Rounak Agarwal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    addElementsToScene();


    /*Resistance 1 */
    res1 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    res1.position.set(1.25, 2.05, 0.1);
    PIEaddElement(res1);
    res1.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    res1.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    res1.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    res1.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    res1.add(end2);

    /*Resistance 2 */
    res2 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    res2.position.set(1.25, 1.75, 0.1); 
    PIEaddElement(res2);
    res2.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    res2.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    res2.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    res2.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    res2.add(end2);

    /*Resistance 3 */
    res3 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    res3.position.set(1.7, 1.9, 0.1); 
    PIEaddElement(res3);
    res3.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    res3.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    res3.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    res3.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    res3.add(end2);

    /*Resistance 4 */
    res4 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    res4.position.set(1.95, 1.9, 0.1); 
    PIEaddElement(res4);
    res4.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    res4.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    res4.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    res4.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    res4.add(end2);

    /*Series Equivalent Resistance */
    eq1 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    eq1.position.set(1.25, 1.9, 0.1);
    PIEaddElement(eq1);
    eq1.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    eq1.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    eq1.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    eq1.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    eq1.add(end2);

    /*Parallel Equivalent Resistance */
    eq2 = new THREE.Mesh(new THREE.CylinderGeometry(.0275,.025,0.1,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    eq2.position.set(1.8, 1.9, 0.1); 
    PIEaddElement(eq2);
    eq2.rotation.z = Math.PI/2;

    var curve1 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve1.position.set(0,0.05,0);
    eq2.add(curve1);
    var curve2 = new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,0.02,32),new THREE.MeshLambertMaterial({color:0xffff80}));
    curve2.position.set(0,-0.05,0);
    eq2.add(curve2);

    var end1 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end1.position.set(0,0.06,0);
    eq2.add(end1);
    end2 = new THREE.Mesh(new THREE.SphereGeometry(.03, 32, 32), new THREE.MeshLambertMaterial({color:0xffff80}));
    end2.position.set(0,-0.06,0);
    eq2.add(end2);


    /*Wire 1 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.15, 2.05, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.35, 2.05, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.5, 1.9, 0.1) );
    wire1 = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(wire1);

    /*Wire 2 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.15, 1.75, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.35, 1.75, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.5, 1.9, 0.1) );
    wire2 = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(wire2);
    
    /*Switch 1 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 2.001, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2.15, 1.15, 0.1) );
    switch1 = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: "red" } ) );
    PIEaddElement(switch1);

    /*Wire 3 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.5, 1.9, 0.1) );
    wire3 = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(wire3);

    /*Switch 2 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 2.001, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2.151, 1, 0.1) );
    switch2 = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: "red" } ) );
    PIEaddElement(switch2);

    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 0.5, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 0.5, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1, 1.9, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1.5, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 3, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 3, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2.15, 1, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    /* Through Voltmeter */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 0.8, 1.9, 0.1) );
    geo.vertices.push(new THREE.Vector3( 0.8, 2.2, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2.15, 2.2, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2.15, 1.9, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);    

    /* To Cell1 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 0.5, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 0.975, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 0.975, 0.8, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    /* From Cell1 to Cell2 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1.025, 0.8, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.025, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.225, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.225, 0.8, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    /* From Cell2 to Cell3 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1.275, 0.8, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.275, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.475, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.475, 0.8, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    /* From Cell3 */
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3( 1.525, 0.8, 0.1) );
    geo.vertices.push(new THREE.Vector3( 1.525, 1, 0.1) );
    geo.vertices.push(new THREE.Vector3( 2, 1, 0.1) );
    var line = new THREE.Line( geo, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
    PIEaddElement(line);

    /*Creating arrows */
    arrow1 = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow1);
    arrow1.position.set(0.52, 1.6, 0.1);
    arrow1.rotation.z += Math.PI/4;

    arrow1A = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow1A);
    arrow1A.position.set(0.48, 1.6, 0.1);
    arrow1A.rotation.z -= Math.PI/4;

    arrow2 = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow2);
    arrow2.position.set(0.88, 1.92, 0.1);
    arrow2.rotation.z += Math.PI/4;

    arrow2A = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow2A);
    arrow2A.position.set(0.88, 1.88, 0.1);
    arrow2A.rotation.z -= Math.PI/4;

    arrow3 = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow3);
    arrow3.position.set(0.88, 2.22, 0.1);
    arrow3.rotation.z += Math.PI/4;

    arrow3A = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow3A);
    arrow3A.position.set(0.88, 2.18, 0.1);
    arrow3A.rotation.z -= Math.PI/4;

    arrow4 = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow4);
    arrow4.position.set(2.7, 1.92, 0.1);
    arrow4.rotation.z += Math.PI/4;

    arrow4A = new THREE.Mesh(new THREE.CylinderGeometry(0.008,0.008,0.06,32),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(arrow4A);
    arrow4A.position.set(2.7, 1.88, 0.1);
    arrow4A.rotation.z -= Math.PI/4;

    /*Texts */
    R1 = document.createElement('div');
    R1.style.position = 'absolute';
    R1.style.width = 100;
    R1.style.height = 150;
    R1.style.fontSize = '3vmin';
    R1.style.backgroundColor = "transparent";
    R1.innerHTML = "R1";
    R1.style.top = '32.5vh';
    R1.style.left = '37vw';
    document.body.appendChild(R1);

    R2 = document.createElement('div');
    R2.style.position = 'absolute';
    R2.style.width = 100;
    R2.style.height = 150;
    R2.style.fontSize = '3vmin';
    R2.style.backgroundColor = "transparent";
    R2.innerHTML = "R2";
    R2.style.top = '42.5vh';
    R2.style.left = '37vw';
    document.body.appendChild(R2);

    R3 = document.createElement('div');
    R3.style.position = 'absolute';
    R3.style.width = 100;
    R3.style.height = 150;
    R3.style.fontSize = '3vmin';
    R3.style.backgroundColor = "transparent";
    R3.innerHTML = "R3";
    R3.style.top = '37.5vh';
    R3.style.left = '44.25vw';
    document.body.appendChild(R3);

    R4 = document.createElement('div');
    R4.style.position = 'absolute';
    R4.style.width = 100;
    R4.style.height = 150;
    R4.style.fontSize = '3vmin';
    R4.style.backgroundColor = "transparent";
    R4.innerHTML = "R4";
    R4.style.top = '37.5vh';
    R4.style.left = '48.25vw';
    document.body.appendChild(R4);

    Rp = document.createElement('div');
    Rp.style.position = 'absolute';
    Rp.style.width = 100;
    Rp.style.height = 150;
    Rp.style.fontSize = '3vmin';
    Rp.style.backgroundColor = "transparent";
    Rp.innerHTML = "Rp";
    Rp.style.top = '37.5vh';
    Rp.style.left = '37vw';
    document.body.appendChild(Rp);

    Rs = document.createElement('div');
    Rs.style.position = 'absolute';
    Rs.style.width = 100;
    Rs.style.height = 150;
    Rs.style.fontSize = '3vmin';
    Rs.style.backgroundColor = "transparent";
    Rs.innerHTML = "Rs";
    Rs.style.top = '37.5vh';
    Rs.style.left = '46vw';
    document.body.appendChild(Rs);

    V = document.createElement('div');
    V.style.position = 'absolute';
    V.style.width = 100;
    V.style.height = 150;
    V.style.fontSize = '3vmin';
    V.style.backgroundColor = "transparent";
    V.innerHTML = "<b>V</b>";
    V.style.top = '24.5vh';
    V.style.left = '43vw';
    document.body.appendChild(V);

    A = document.createElement('div');
    A.style.position = 'absolute';
    A.style.width = 100;
    A.style.height = 150;
    A.style.fontSize = '3vmin';
    A.style.backgroundColor = "transparent";
    A.innerHTML = "<b>A</b>";
    A.style.top = '35vh';
    A.style.left = '56.2vw';
    document.body.appendChild(A);

    /*Ammeter */
    var Ammeter = new THREE.Mesh(new THREE.CircleGeometry(0.1, 32), new THREE.MeshBasicMaterial({color:0xededed}));
    Ammeter.position.set(2.4, 1.9, 0.1);
    PIEaddElement(Ammeter);

    /*Voltmeter */
    var Voltmeter = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshBasicMaterial({color:0xededed}));
    Voltmeter.position.set(1.6, 2.2, 0.1);
    PIEaddElement(Voltmeter);

    /*Background Colour */
    PIEscene.background = new THREE.Color( 0x438925 );

    showOriginals();

    /* Observation Table */
    PIEcreateTable("Ammeter reading", 2, 2, true);
    PIEupdateTableCell(0, 1, "0 A");
    PIEupdateTableCell(1, 1, "0 A" );
    PIEsetCellInput(0, 0, 10, "Original");
    PIEsetCellInput(1, 0, 16, "On replacement");

    /*Controls */
    PIEaddInputSlider("Voltage", 6.0, test5, 1.0, 15.0, 1.5);
    PIEaddInputSlider("Resistance 1 (R1)", 4.0, test1, 1, 10, 0.5);
    PIEaddInputSlider("Resistance 2 (R2)", 15.0, test2, 11, 20, 0.5);
    PIEaddInputSlider("Resistance 3 (R3)", 4.0, test3, 1, 10, 0.5);
    PIEaddInputSlider("Resistance 4 (R4)", 15.0, test4, 11, 20, 0.5);
    PIEinputGUI.width = 255;

    seq = rs + "ohm";
    PIEaddInputText("Series Eq (Rs): ",seq, test);
    peq = rp + "ohm";
    PIEaddInputText("Parallel Eq (Rp): ",peq, test);

    PIEaddDisplayCommand("Meter readings :", test);    
    var v = volt + "V";
    PIEaddDisplayText("Voltage : " , v);
    PIEaddDisplayText("Current : ", current + "A");
    PIEdisplayGUI.width = 255;

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation  );
    
    PIEaddButton("Replace");
    document.getElementById("Replace").addEventListener("click", showEquivalent);

    PIEaddButton("Water Analogy");
    document.getElementById("Water Analogy").addEventListener("click", modal);
}


/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/* This function resets the position of all experiment elements to their default values.*/
function resetExperiment()
{
    showOriginal();
    meter=10;
    R1.style.display="inline";
    R2.style.display="inline";
    R3.style.display="inline";
    R4.style.display="inline";
    PIEupdateTableCell(0, 1, "0 A"); 
    PIEupdateTableCell(1, 1, "0 A"); 
    stopAnimation();
}

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/

/**
 * This function updates the location of all experiment elements during each animation frame.
 * <p>
 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
 * @param  dt      The time in milliseconds elapsed since the last acll to this function
 */
function updateExperimentElements(t, dt)
{

}

/******************* Update (animation changes) code ***********************/
