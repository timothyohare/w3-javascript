/*global console:false */
var drumsKit = [{
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

//console.log(drumsKit);



function findBy(collection, searchId, searchValue) {
  "use strict";
  // -- Step 1: Create a local variable initialized to an empty Array  
  var subset = [],
        i = 0,
        j = 0;

    
  // -- Step 2: Loop over the array passed as argument
  // Hint: Use one of the loop statements we studied within the course
  for (; i < collection.length; i++) {
      for (var key in collection[i]) { 
        if (collection[i].hasOwnProperty(key)) { 
          //console.log(key + ' -> ' + collection[i][key] + ', searchId: ' + searchId + ', searchValue: ' + searchValue); 
          //-- Step 3: For each object of the array evaluates the equality between
          //   its property and the value passed as arguments
          //Hint: Use brackets to get the value of an object property
          if (key === searchId && collection[i][key] == searchValue) {
            //console.log('Found key: ' + searchId + ', value: ' + collection[i][key] + ', j:' + j);
            //-- Step 5: If the object property equals to the value, add this object
            //   to the variable declared at first step.
            subset[j++] = collection[i];
          }
        }
      }
    }

  //-- Step 6: Return the local variable 
  //console.log('subset.length:'+subset.length);
  return subset;
}
 
/* 
-- Step 7: Call the findBy function with the required arguments:
    - the original array
    - the object property to evaluate
    - the value
*/

var rtn = findBy(drumsKit, 'id', 1);
//[Object]
console.log('findBy: id : 1\n', rtn, '\n' );


rtn = findBy(drumsKit, 'color', 'blue'); 
//[Object, Object] 
console.log('findBy: color : blue\n', rtn, '\n');


rtn = findBy(drumsKit, 'color', 'pink');
//[] 
console.log('findBy: color : pink\n', rtn, '\n');





/*
 -- Step 1: Add the required arguments to the compareById function declaration
*/
function compareById( left, right) {
  "use strict";

  // -- Step 2: Evaluate if the value of the property id of the object1 is greater than
  //   the value of the property id  of the object 2

  if (left.id > right.id) {
     return 1;
  } 

  // -- Step 3: Evaluate if the value of the property id of the object1 is lower than
  //   the value of the property id  of the object 2

  else if (left.id < right.id ) {
    return -1;
  } else {
    return 0;
  }
}
 
/*
 -- Step 4: Call the drumsKit array sort method with the compareById function as argument
*/
console.log('drumsKit sorted by Id\n', drumsKit.sort(compareById), '\n');



/*
 -- Step 1: Add the required parameter: the property name
*/
function getComparator( propName ){
  "use strict";
  // -- Step 2: Create a local variable named comparator
  var comparator; 
  // -- Step 3: The value of this variable is a comparator function which looks like
  //    the function of the previous exercise
  //    Hint: Modify the compareById function in order to evaluates the property 
  //    passed as argument
 
  comparator = function(left, right) {
    if (left[propName] > right[propName]) {
      return 1;
    }
    else if (left[propName] < right[propName]) {
      return -1;
    } else {
      return 0;
    }
  };
  //-- Step 4: Return the comparator variable
  return comparator;
}

(function () {
  "use strict";
  // -- Step 5: Create a "compareByName" variable and assign to it the result 
  //  of calling the getComparator function with 'name' as argument
  var compareByName = getComparator('name');
  
  // -- Step 6: Call the drumsKit array sort method with the compareByName function 
  //  as argument.
  var nameSorted = drumsKit.sort(compareByName);
  console.log('Sorted by name:\n', nameSorted, '\n');
  
  //  -- Step 7: Repeat the two previous steps in a single line in order to sort 
  //  the array by color.
  var colorSorted = drumsKit.sort(getComparator('color'));
  console.log('Sorted by color:\n', colorSorted, '\n');

})();

/** Part 2 */
/** Part 2A */
/*
 -- Step 1: Add the required parameters to Drum constructor 
    function declaration.
*/
function Drum( name, sources, color, key) {
  "use strict";
  //-- Step 2: Define the required properties of the new object with the values
  //  of the corresponding arguments.
  //  Hint: Use the this keyword.
  this.name = name;
  this.sources = sources;
  this.color = color;
  this.key = key;
}

var myDrum = new Drum('myDrum', ['/local/path/d1.ogg'], 'purple', 'l');
console.log( "\nPart 2A");
console.log("Drum constructor function\n", myDrum, "\n");


/** Part 2B */
/*
 -- Step 1: Add the required parameters to the addItem function declaration.
*/
/*
function addItem(drumsKit, drum) {

  // -- Step 2: Add the object argument to the array argument.
  //Hint: Use the array push method.

  drumsKit.push(drum);
}
*/ 

// -- Step 3: Create a new object Drum.
// Hint: Use the Drum constructor function.
// Hint: Set the properties of the object by passing values to the Drum
//    constructor function.
// -- Step 4: Call the addItem function with the drumsKit array and
//    the previous Drum object as arguments.

/*
addItem(drumsKit, myDrum);
console.log(drumsKit);
*/


function addItem(drumsKit, drum) {
  "use strict";
  // -- Step 1: Create a local variable named sortedArray.
  var sortedArray = [];
  // -- Step 2: Create a local variable named maxId.
  var maxId = 0;
 
  // -- Step 3: Sort the array passed as argument and assign it to the sortedArray
  //    variable.
  sortedArray = drumsKit.sort(getComparator('id'));   
 
  // -- Step 4: Get the id value of the last object in the sorted array 
  //    and assign it to the maxId variable.
  // Hint: Use the array bracket notation and the array length property
  maxId = sortedArray[sortedArray.length - 1].id;
  
  // -- Step 5: Add one to the maxId variable.
  ++maxId;
 
  // -- Step 6: Set the new value of the id property of the object to be added.
  // Hint: Use the object dot notation.
  drum.id = maxId;
  
  // -- Step 7: Add the object to array
  drumsKit.push(drum);

}
 
/*
 -- Step 8: Create a new object Drum.
 -- Step 9: Call the addItem function with the drumsKit array and
    the previous Drum object as arguments.
*/
addItem(drumsKit, myDrum);
console.log( "\nPart 2B");
console.log("Add obect to drumsKit via addItem\n", drumsKit, "\n");

/** Part 2C */



/*
 -- Step 1: Add the required parameters to the removeByObject 
    function declaration.
*/
function removeByObject( drumKits, drum) {
  "use strict";
  var i = 0, drumIdx = -1, removed = null;
  // -- Step 2: Loop over the array passed as argument.
  for (; i < drumKits.length; i++) {
    // -- Step 3: For each item, evaluates its equality with the object 
    //    passed as argument
    // Hint: Use "==" between objects directly.
    // Hint: Assign to a variable the current index of the array in the loop.
    if (drumKits[i] == drum) {
      drumIdx = i;
      break;
    }
  }
 
  // -- Step 4: If the compared objects are equal, remove the current item
  //    from the array.
  // Hint: You need to know the index in the array in order to remove the 
  //    object from the array.
  // Hint: Use the array splice method.
  if ( drumIdx != -1) {
    removed = drumKits.splice(drumIdx, 1);
  }
  return removed;
}

(function () {
  "use strict";
  /*
   -- Step 5: Call the removeByObject function with the drumsKit array and one 
      of the objects of the array as arguments.
      Hint: With "==" we compare the references of the objects. So objects compared 
      must be exactly the same (contrary to have the same property values). 
      For example if you want to be sure to have an existing object in the 
      array, retrieve it from the array (ex: var d = drumsKit[2]).
  */
  console.log( "\nPart 2C.1");
  // remove an object in the array
  var removed = removeByObject( drumsKit, myDrum );
  console.log ("removed:\n", removed, "\n", "drumsKit with myDrum removed:\n", drumsKit, "\n");

  // remove an object not in the array
  var drumNotInArray = new Drum('drumNotInArray', ['/local/path/d23.ogg'], 'magenta', 'p');
  var notRemoved = removeByObject( drumsKit, drumNotInArray );
  console.log ('nothing removed:');
  if (notRemoved) {
    console.log( notRemoved );
  }
  console.log ( drumsKit, "\n" );
}());

/** Part 2C.2 */


/*
 -- Step 1: Add the required parameters to the removeById 
    function declaration.
*/
function removeById( drumsKit, id) {
  "use strict";
  var i = 0, drumIdx = -1, removed = null;
  // -- Step 2: Loop over the array passed as argument.
  for (; i < drumsKit.length; i++) {

    // -- Step 3: For each item, evaluates the equality of the id property between
    //    both objects.
    // Hint: Use the object dot notation.
    // Hint: Assign to a variable the current index of the array in the loop.
    if ( drumsKit[i].id === id ) {
      drumIdx = i;  
      break;
    }
  }

  // -- Step 4: If the compared ids are equal, remove the current item
  //   from the array.
  // Hint: You need to know the index of the object in the array in order to remove 
  //   the object from the array.
  // Hint: Use the array splice method.
  if ( drumIdx != -1) {
    removed = drumsKit.splice(drumIdx, 1);
  }
  return removed;
}

(function testRemoveById() {
  "use strict";
  /*
    -- Step 5: Call the removeById function with the drumsKit array and an 
    existing id in the array as arguments.
    */
  // remove an object in the array
  var removed = removeById( drumsKit, 3 );
  console.log( "\nPart 2C.2");
  console.log( 'removeById:' );
  console.log( "drum removed", removed, "\n" );
  console.log( "drumsKit with drum removed\n", drumsKit, "\n" );
  // remove an object not in the array
  var notRemoved = removeById( drumsKit, 34 );
  console.log ('nothing removeById:');
  if (notRemoved) {
    console.log( notRemoved );
  }
  console.log ( drumsKit, "\n" );

}());

/** Part 2C.3 */


/*
Step 1: Add the required parameters to the remove function declaration.
*/
function remove( drumsKit, removeVal ) {
  "use strict";
  // -- Step 2: Evaluate the type of the second parameter.
  // Hint: Use the typeof operator.
  //console.log("typeof (removeVal): " + typeof(removeVal));
  if ( typeof (removeVal) === 'number' ) {
    // -- Step 3: If the type of the second parameter is number, call the 
    //   removeById function.
    removeById( drumsKit, removeVal );
  } 
  else {
    // -- Step 4: else, call the removeByObject function.
    removeByObject(drumsKit, removeVal);
  }
}

(function () {
  "use strict";

  // -- Step 5: Call the remove function with the drumsKit array and an object or
  //  an id as arguments/
  
  var newDrum = new Drum('newDrum', ['/local/path/d24.ogg'], 'lilac', 'w');

  console.log("\nPART 2C.3");
  addItem ( drumsKit, newDrum );
  console.log( 'After adding newDrum');
  console.log( drumsKit, "\n");
  remove ( drumsKit, newDrum);
  console.log( "After removing by object");
  console.log( drumsKit, "\n");
  addItem ( drumsKit, newDrum);
  console.log( 'After adding newDrum a second time');
  console.log( drumsKit, "\n");
  remove ( drumsKit, 7);
  console.log( 'After removing by id');
  console.log( drumsKit, "\n");
} ());



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
  console.log("\nPART 3.1");
  console.log("getDirectory: ", getDirectory('http://www.w3c.com/demo/sample.mp3'), "\n");
  console.log("getDirectory: ", getDirectory('/local/sounds/drum/d3.ogg'), "\n");
  
  try {
   console.log(getDirectory(1));
  } catch (e) {
    console.log( e.name + ": " + e.message + "\n");
  }
  
  try {
    console.log(getDirectory('filename.ogg'));
    } catch (e) {
    console.log( e.name + ": " + e.message + "\n");
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
  console.log("\nPART 3.2");
  console.log("getFilenmae: ", getFilename('http://www.w3c.com/demo/sample.mp3'));
  console.log("getFilenmae: ", getFilename('/local/sounds/drum/d3.ogg'));
  
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
console.log("\nPART 3.3");
console.log("formatObject:\n", drum2, "\n");

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
console.log("\nPART 3.4");
console.log(res);

