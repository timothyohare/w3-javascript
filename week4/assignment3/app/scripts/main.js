/* UTILITY */

// Small utility function, for printing an array 
function printArrayLabel(label, arrayObj) {
    console.log(label);
    printArray(arrayObj);
}
function printArray(arrayObj) {
    arrayObj.forEach(function(o) {
       console.log('\t' , o);
    });
}

//the findBy to get the obj from a property 
function findBy(list, property, value) {
    for(var i =0 ; i< list.length; i++) {
        var obj = list[i];
        if(obj[property] === value) {
            return obj;
        }
    }
}

/** PART I **/
//complete
function createBlock(obj) {
    "use strict";
    //1) create a div with the p inside. And within the p the obj.key.letter 
    //complete: 
    var block = $('<div><p>' + obj.key.letter + '</p></div>');
    //2) set the class to "block" for example, 
    //set id to the object name and set style attribute of the newly-created div element (block):
    //(HINT: use the folowing methods of jQuery
        //.addClass, .attr  and .css) 
    /*
    http://api.jquery.com/addClass/
    http://api.jquery.com/attr/
    http://api.jquery.com/css/
    */
    block.addClass('block').attr('id', obj.name).css('background-color', obj.color);
    //the audio part does not change 
    var audio = new Audio();
    if(audio.canPlayType('audio/mpeg')) {
        console.log('mpeg');
        audio.src =  obj.url.path + obj.url.filenames[0];
    }
    else {
        console.log('not mpeg');
        audio.src = obj.url.path + obj.url.filenames[1];
    }
    audio.controls = false;

    //7) append the audio to the block with the jquery method: append
    //http://api.jquery.com/append/
    block.append(audio);
    //8) returns the block
    return block;
}


//PART I ) Click event

//the callback for click event (nothing to complete here)
function clickBlock() {
    //Here some changes first we get the object
    var obj = findBy(soundsKit,'name',this.id);
    //then we call the function playSound with the object as parameter
    playSound(obj);
}

//complete
function playSound(obj) {
    //we get the HTML element
    var $el = obj.el;
    //now from this HTML element we need to get (.find) the audioElem
    //http://api.jquery.com/find/
    var audioElem = $el.find('audio')[0];
    audioElem.currentTime = 0;
    audioElem.play();

    //call addToHistory with obj as parameter
    addToHistory(obj);
    //PART II: call the makeAnim function with obj as parameter
    makeAnim(obj);
}

//the add history function 
function addToHistory(obj) {
    var letter = obj.key.letter;
    var historySize = $history.text().length;
    if(historySize >= 20) {
        var text = $history.text();
        $history.text(text.substr(1,20));
    }
    $history.append(letter);
}


/* OPTIONAL PART: KEYDOWN*/
function keyPressed(event) {
    "use strict";
    console.log(event.which || event.keyCode);
    //1)get the keyCode or the which 
    //2)loop over the soundsKit
        //3)check if the key pressed correspond to the keyCode of an object
        //4) if yes: get the corresponding object 
        //then call playSound
    var key = event.which || event.keyCode;
    /*var obj = findBy(soundsKit,'key.KeyCode', key);
    if (obj !== undefined) {
        playSound(obj);
    } 
    else {
        console.log('keyPressed: obj undefined');
    }*/
    
    var block = null;
    //2)loop over the soundsKit
    soundsKit.forEach(function(sound) {
        //3)check if the key pressed correspond to the keyCode of an object
        if (key === sound.key.keyCode) {
            //4) if yes: get the corresponding htmlAudioElement 
            //(by finding the corresponding id - or if you have add to each object the reference
            // to each Html elements ...  )
            //console.log(sound.block);
            //block = sound.block;
            //var audio = block.audio;
            //var audio = block.childNodes[1];
            //5) set the currentTime of the audioElement properties to 0  
            //5) then call the play method of the audioElement
            //audio.currentTime = 0;
            //audio.play();

            // this will continue to loop through all sounds
            // as 'break;' doesn't work in a forEach
            //console.log(sound);
            // split playing the sound in to a seperate function
            playSound(sound);
        }
    })
}


/* PART II - ANIMATION */

//complete
function makeAnim(obj) {
    "use strict";
    var $circle = $(obj.circle);
    $circle.css('background-color', obj.color);
    $circle.animate({
        //backgroundColor: $.Color({ saturation: 0 }),
        backgroundColor: $.Color(obj.color),
        width: "25px",
        height: "25px",
        margin: "47px"
      }, 100, function() {
        // Animation complete.
      }).animate({
        width: "100px",
        height: "100px",
        margin: "10px",
        backgroundColor: $.Color('gray')
      }, 100, function() {
        // Animation complete.
      });
}



var $container = $('#container');
var $history = $('#history');

$(document).ready(function() {
    "use strict";
    console.log('--- Assignment 3 --- ');
    //console.log('the soundsKit: ', soundsKit);
    var $anim = $('<div></div>');
    //PART I 
    //iterate over the soundsKit Array
    for(var i=0; i<soundsKit.length; i++) {
        var obj = soundsKit[i];
        
        // create a circle to animate and save a reference to it
        var $animCircle = $('<div></div>');
        $animCircle.addClass('circle2').attr('id', obj.name);
        obj.circle = $animCircle;

        //1) add a property el to the object and set it to the result of the createBlock function
        obj.el = createBlock(obj); 
        //2) append the obj.el to the $container (use append) 
        $container.append(obj.el);
        //3) bind the click event on the obj.el (and pass the clickBlock function)
        obj.el.click(clickBlock);
        //http://api.jquery.com/click/
        //end of the loop
         
        $anim.append($animCircle);
    }

    //PART II 2) bind the keydown on body with jQuery
    //http://api.jquery.com/keydown/
    //http://api.jquery.com/on/
    $('body').on('keydown', keyPressed);
    
    $anim.attr('id', 'anim');
    $('section').append($anim);
    
});