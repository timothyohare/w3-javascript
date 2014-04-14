/*global console:false */
var drumsKit = [{
  id: 0,
  name:'drum1',
    url: {path: '/local/sounds/', filenames: ['a.wav','a.mp3']},
  color: '#1478AA',
  key: 'Q'
},{
  id: 1,
  name:'drum2',
    url: {path: 'http://www.w3c.com/demo/', filenames: ['sample.mp3']},
  color: 'blue',
  key: 'W'
},{
  id: 6,
  name:'drum7',
    url: { path: '/local/sounds/drum/', filenames: ['d3.ogg']},
  color: 'red',
  key: 'E'
},{
  id: 3,
  name:'drum4',
    url: { path: 'http://www.w3c.com/demo', filenames: ['d4.ogg', 'd4.mp3']},
  color: 'blue',
  key: 'R'
}];

// PART 3.1
// 1. Create a "getDirectory" function which extracts the path without the filename of a full path given as parameter.
/*
 -- Step 1: Add the required parameter to the getDirectory function declaration.
*/
function getDirectory( fullPath ) {
  "use strict";
  var lastSlashIdx = -1, directory = '';

  //  Hint: Use the string lastIndexOf method. You can also use a regular expression.
  //  Hint: Use the string substring method.

  if (typeof (fullPath) != 'string') {
    throw new Error ('Please pass in a path with a filename as a string');
  }
  
  lastSlashIdx = fullPath.lastIndexOf('/');
  if (lastSlashIdx === -1) {
    throw new Error('Could not find a slash');
  }
  
  directory = fullPath.substring(0, lastSlashIdx + 1);
  return directory;
}

// test getDirectory
(function () {
  "use strict";
  console.log(getDirectory('http://www.w3c.com/demo/sample.mp3'));
  console.log(getDirectory('/local/sounds/drum/d3.ogg'));
  
  try {
   console.log(getDirectory(1));
  } catch (e) {
    console.log( e.name + ": " + e.message );
  }
  
  try {
    console.log(getDirectory('filename.ogg'));
    } catch (e) {
    console.log( e.name + ": " + e.message );
  }
}());


// PART 3.2
// 2. Create a "getFilename" function which returns the filename of a full path given as parameter.

/*
 -- Step 1: Add the required parameter to the getFilename function declaration.
*/
function getFilename( fullPath ) {
 "use strict";
 var lastSlashIdx = -1, filename = '';
 //   Hint: Use the string lastIndexOf method. You can also use a regular expression.
 //   Hint: Use the string substring method.
 if (typeof (fullPath) != 'string') {
    throw new Error ('Please pass in a path with a filename as a string');
  }
  
  lastSlashIdx = fullPath.lastIndexOf('/');
  if (lastSlashIdx === -1) {
    throw new Error('Could not find a slash');
  }
  
  filename = fullPath.substring(lastSlashIdx + 1, fullPath.length);
  return filename;
}

// test getFilename
(function () {
  "use strict";
  console.log(getFilename('http://www.w3c.com/demo/sample.mp3'));
  console.log(getFilename('/local/sounds/drum/d3.ogg'));
  
  try {
   console.log(getFilename(1));
  } catch (e) {
    console.log( e.name + ": " + e.message );
  }
  
  try {
    console.log(getFilename('filename.ogg'));
    } catch (e) {
    console.log( e.name + ": " + e.message );
  }
})();

// PART 3.3
// 3. Create a "formatObject" function which modifies an object. The function takes one parameter: an object.

var drum1 = {
    id: 0,
    name:'drum1',
    sources: ['/local/sounds/a.wav','/local/sounds/a.mp3'],
    color: '#1478AA',
    key: 'Q'
};

/*
 -- Step 1: Add the required parameter to the formatObject function declaration.
*/
function formatObject( drum ) {
 "use strict";
 var directory = '', filename = '', i = 0, source = '';
 // -- Step 2: Add an url property to the object. Then assign an object to this 
 //   property. This object must contain two properties: filenames and
 //   path. They are respectively initialized with [] and ''.
 drum.url = { filenames : [], path : '' };
   
 // -- Step 3: Get the path without the filename of the first source. Then assign
 //   it to the path property of the url property of the object.
 try {
   directory = getDirectory(drum.sources[0]);
 } catch (e) {
   console.log("Could not retrieve a path: " + e.name + ": " + e.message);
 }
 drum.url.path = directory;
 
 // -- Step 4: Loop over the sources. For each source, add the filename (without
 //   the path) to the filenames array.
 for (; i < drum.sources.length; i++ ) {
    source = drum.sources[i];
    try {
      filename = getFilename(source);
    } catch (e) {
      console.log("Could not retrieve filename: " + e.name + ": " + e.message);
    }
    
    drum.url.filenames.push(filename);
 }
    
 // -- Step 5: Delete the sources property of the object
 delete drum.sources;
  
 return drum;
}

var drum2 = formatObject(drum1);
console.log(drum2);

// PART 3.4
// 4. Create a "formatArray" function which modifies each object in the array passed as argument. This function takes one argument: an array.

var drumsKit2 = [{
  id: 0,
  name:'drum1',
  sources: ['/local/sounds/a.wav','/local/sounds/a.mp3'],
  color: '#1478AA',
  key: 'Q'
},{
  id: 1,
  name:'drum2',
  sources: ['http://www.w3c.com/demo/sample.mp3'],
  color: 'blue',
  key: 'W'
},{
  id: 6,
  name:'drum7',
  sources: ['/local/sounds/drum/d3.ogg'],
  color: 'red',
  key: 'E'
},{
  id: 3,
  name:'drum4',
  sources: ['http://www.w3c.com/demo/d4.ogg','http://www.w3c.com/demo/d4.mp3'],
  color: 'blue',
  key: 'R'
}];

/*
 -- Step 1: Add the required parameter to the formatArray function declaration.
*/
function formatArray( drumsKit ) {
  "use strict";
  var i = 0;
  
  // -- Step 2: Loop over each object in the array. For each object, call the 
  //   previous formatObject function.
  for (; i < drumsKit.length; i++) {
    drumsKit[i] = formatObject(drumsKit[i]);
  }
  return drumsKit;
}

/*
 -- Step 3: Call the formatArray function with the drumsKit array as argument.
*/
var res = formatArray( drumsKit2 );
console.log(res);



