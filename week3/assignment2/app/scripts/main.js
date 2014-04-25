
/** PART II **/
function createBlock(obj) {
    "use strict";
    //1) create a div with document.createElement
    var block = document.createElement('div');
    //2) set the class to "block" for example, 
    //set id to the object name and set style attribute of the newly-created div element (block):
    //(HINT: className, id and style.backgroundColor) 
    block.className = 'block';
    block.id = obj.name;
    block.style.backgroundColor = obj.color;

    //3) creates a new p element:
    var p = document.createElement('p');

    //// creates a new text-node with the value of the key.letter object property.
    var textNode = document.createElement('text-node');
    textNode.textContent = obj.key.letter;

    // appends the text-node to the newly-created p element:
    p.appendChild(textNode);

    // appends the p element to the block 
    //(HINT: appendChild)
    block.appendChild(p);

    //4) instantiate a new Audio object
    var audio = document.createElement('audio');

    //5) check if the browser can play mp3 file ('audio/mpeg') with the canPlayType function
    // From http://stackoverflow.com/questions/8469145/how-to-detect-html5-audio-mp3-support
    var canPlayMP3 = (typeof audio.canPlayType === "function" &&
                         audio.canPlayType("audio/mpeg") !== "");
    if (canPlayMP3) {
        //yes: sets the src attribute of the audio object: path + the first filenames (mp3)
        audio.src = obj.url.path + obj.url.filenames[0];
    } else {
        //no:  sets the src attribute of the audio object: path + the second filenames (ogg)
        audio.src = obj.url.path + obj.url.filenames[1];
    }

    //6)  sets the controls attribute of the audio object to false (we do not want to see the controls)
    audio.controls = false;

    //7) append the audio to the block
    block.appendChild(audio);

    //8) returns the block
    return block;
}

/** PART III **/

//1) Click event
//the listener for click events 
var clickBlock = function clickBlock() {
    "use strict";
    //1) get the audioElement with the keyword this and a querySelector 
    //
    //console.log(this); //may help

    var audio = this.querySelector('audio');
    //console.log(audio1);
    //2) set the currentTime of the audioElement properties to 0  
    //(by this way we can play the sound quickly several times in a row. )
    //audio.currentTime = 0;
    //3) then call the play method of the audioElement
    //audio.play();

    var key = this.querySelector('p').textContent;
    //console.log("id: " + key);
    playSound(audio, key);
}


//2) optional key event

function keyPressed(event) {
    //console.log(event.which || event.keyCode);
    //1)get the keyCode or the which 
    var key = event.which || event.keyCode;
    var block = null;
    //2)loop over the soundsKit
    soundsKit.forEach(function(sound) {
        //3)check if the key pressed correspond to the keyCode of an object
        if (key === sound.key.keyCode) {
            //4) if yes: get the corresponding htmlAudioElement 
            //(by finding the corresponding id - or if you have add to each object the reference
            // to each Html elements ...  )
            //console.log(sound.block);
            block = sound.block;
            //var audio = block.audio;
            var audio = block.childNodes[1];
            //5) set the currentTime of the audioElement properties to 0  
            //5) then call the play method of the audioElement
            //audio.currentTime = 0;
            //audio.play();

            // this will continue to loop through all sounds
            // as 'break;' doesn't work in a forEach

            // split playing the sound in to a seperate function
            playSound(audio, sound.key.letter);
        }
    })
          

}


// the history part (part III 3)  
//An idea is to factorize the code keyPressed and clickBlock (create a new function playSound) 
//or you can just create a new function appendToHistory and call it each time a sound is played
function playSound(audio, letter) {
    "use strict";
    audio.currentTime = 0;
    audio.play();
    // append the key played to history div
    history = document.querySelector('#history');

    var historyLength = history.textContent.length;
    
    // limit it to 20 characters
    if (historyLength < 20) {
        history.textContent += letter;
    } else {
        //var histStr = history.textContent;
        history.textContent = history.textContent.slice(1, historyLength) + letter;
    }

    
}


/** PART IV **/

function checkAudioSupport() {
    //create a new Audio object
    //then check if for example the function play exist
    //if it raise an error: catch it, display a message (in a alert window or in the warning div) and return false
    //else return true
    var test_audio = document.createElement("audio");
    var canPlayMP3 = (typeof test_audio.canPlayType === "function" &&
                         test_audio.canPlayType("audio/mpeg") !== "");
    var canPlayOgg = (typeof test_audio.canPlayType === "function" &&
                         test_audio.canPlayType("audio/ogg") !== "");
    return canPlayMP3 || canPlayOgg;
}



function init() {
    var container = document.getElementById('container');
    console.log('--- Assignment 2 --- ');
    console.log('the soundsKit: ', soundsKit);
    //PART IV checkaudioSupport
    //call checkaudioSupport if it returns false break else continue
    if (!checkAudioSupport()) {
        var warning = document.querySelector('#warning');
        warning.textContent = "Your browser doesn't support HTML5 Audio :("
        console.log("No audio support");
        return;
    }
    // PART II 
    // iterate over the soundsKit Array
    // for each object:
        // appends the result of the createBlock function to the container
    soundsKit.forEach(function(sound) {
        var block = createBlock(sound);
        //PART II 1) bind the click event on the result of the createBlock 
        block.addEventListener('click', clickBlock, true );   
        container.appendChild(block);
        sound.block = block;
    });

        
        //end of the loop 

    //PART III 2) bind the keydown on document
    document.addEventListener('keydown', keyPressed, true);
}

init();

