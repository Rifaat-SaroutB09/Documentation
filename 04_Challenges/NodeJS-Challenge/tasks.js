
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
  else if(text[0] === 'list'|| text[0]==='tasks'||text[0]==='task'){
    list();
  }

 else if(text[0] === 'add')
 {
    text.shift();
    add(text.join(" "));
 }

 else if (text[0] === 'remove') {
    remove(text);
 }
  else if (text[0] === "edit") {
    num = text.slice(1, 2);
    newtask = text.slice(2).join(" ");
    edit(num, newtask);
  }
    else if (text[0] === "check") {
    text.shift();
    check(text);
  }
  else if (text[0] === "uncheck") {
    text.shift();
    uncheck(text);
  }
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

let list1=["write a command", "wait for response","commit changes"];
var done = [false, true];

// function list(){

//   for(let i=0;i<list1.length;i++){
//     console.log("task:" + (i+1)+"-"+ " "+list1[i]+'\n');
//   }
// }

function list(){
  for(i = 0; i < list1.length; i++){
    if(done[i] === true){
      console.log(i + 1 + "- " + "[✓]" + list1[i]);
    } else {
      console.log(i + 1 + "- " + "[ ]" + list1[i]);
    }  
  }
}


function add(x){
  if(x === ""){
    console.log("error!");
  } else {
    list1.push(x)
    for(i = 0; i < list1.length; i++){
      console.log(i + 1 + "- " + list1[i]);
    }
  
  }
}

function remove(x) {
  if (x == 'remove' ) {
     let var0=list1.splice(-1,1);
      if (var0.length == 0){
      console.log(
        "no last task to remove!"
      )}else{
      console.log(var0);}
    }
  else if(x[1] === '1'){
    let var1=list1.splice(0,1);
      if (var1.length == 0){
      console.log(
        "no first task to remove!"
      )}else{
      console.log(var1);}
    }
  else if( x[1] === '2' ){
    let var2=list1.splice(1,1);
      if (var2.length == 0){
      console.log(
        "no 2nd task to remove!"
      )}else{
      console.log(var2);}
    }
    else if( x[1] === '3' ){
      let var3=list1.splice(2,1);
      if (var3.length == 0){
      console.log(
        "no third task to remove!"
      )}else{
      console.log(var3);}
    }


    else if( x[1] === '4' ){
      let var4=list1.splice(3,1);
      if (var4.length == 0){
        console.log(
        "no fourth task to remove!")}
        else{console.log(var4);
    }
  }
 
    else if( x[1] === '5' ){
    let var5=list1.splice(4,1);
     if (var5.length == 0){
        console.log(
        "no fifth task to remove!")}
        else{console.log(var5);
    }
  }
    else if( x[1] === '6' ){
    let var6=list1.splice(5,1);
     if (var6.length == 0){
        console.log(
        "no sixth task to remove!")}
        else{console.log(var6);
    }
  }
    else if( x[1] === '7' ){
      let var7=list1.splice(6,1);
      if (var7.length == 0){
        console.log(
        "no seventh task to remove!")}
        else{console.log(var7);
    }
  }
  
    else if( x[1] === '8' ){
    let var8=list1.splice(7,1);
     if (var8.length == 0){
        console.log(
        "no eighth task to remove!")}
        else{console.log(var8);
    }
  }
    else{
      console.log("You have entered a number greater than 8 and the task does not exist!");
    } 
  }


function edit(a, b) {
  if (a == "" && b == "") {
    console.log("error! what do you want to edit?");
  } else if (isNaN(a)) {
    list1[list1.length - 1] = a + " " + b;
  } else {
    list1[a - 1] = b;
  }
}

function check(x) {
  if (x == "") {
    console.log("error!!");
  } else {
    done[x - 1] = true;
  }
}
function uncheck(x) {
  if (x == "") {
    console.log("error!!");
  } else {
    done[x - 1] = false;
  }
}




/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!');
  process.exit();
}

/**
 * list the help options for the program
 *
 * 
 */
function help(){
  console.log('\n','hello: hello!','\n','hello name: hello name!','\n','exit or quit: exit the application.', '\n', "list : show the list of tasks to be done.", '\n', "add: add a new task to the list",'\n',"remove: remove a task from the list",'\n',"remove x: removes x task from the list", '\n', "edit x text: edit the text in the designated task in the list", '\n', "check x: checks x task in the list",'\n',"uncheck x: unchecks x task in the list");
}


// The following line starts the application
startApp("Rifaat Sarout");
