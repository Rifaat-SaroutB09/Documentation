
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  text = text.replace("\n", " ");
  text = text.trim();
  text = text.split(" ");
  if (text[0] === 'quit'|| text[0] === 'exit') {
    quit();
  }
  else if(text[0] === 'hello'){
    hello(text);
  }
  else if(text[0] === 'help'){
    help();
  }
  else if(text[0] === 'list'){
    list();}
  else{
    unknownCommand(text[0]);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+ c.trim() +'"')
}

function hello(x){
  if(x[1]===undefined){
   console.log("hello!");}
  else {
     console.log('hello ' + x[1] + '!')}
}

function list(){
  let list1=["write a command", "wait for response","commit changes"]
  for(let i=0;i<list1.length;i++){
    console.log("task:" + (i+1)+"-"+ " "+list1[i]+'\n');
  }
}

// I wanted to nest the function in the if clause or to have the hello function make the split and trim


// let var1 = text.replace('\n', " ");
// let var2 = var1.trim();
// let myArray = var2.split(" ");
// let word1 = myArray[1];
// console.log('hello' + " " + word1 + '!')




/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * list the help options for the program
 *
 * 
 */
function help(){
  console.log('hello: hello!');
  console.log('hello name: hello name!');
  console.log('exit or quit: exit the application');
  

}

// The following line starts the application
startApp("Rifaat Sarout")
