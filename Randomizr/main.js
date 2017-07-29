var sets = [[], [], []];
var nums = [];

function setUpNums(){
  var numsRandom = 3;

  // generate array based on random number length
  if(nums.length !== numsRandom){
    nums = [];
    for(i = 0; i < numsRandom; i++){
      nums.push(i);
    }
  }

  for(s = 0; s < sets.length; s++){
    if(sets[s].length === 4){
      nums.splice(s, 1);
    }
  }

  return nums;
}

function generateRandomNumber(){

  setUpNums();

  // generate random number and assign it to a set
  var randomNumber = nums[Math.floor(Math.random() * nums.length)];
  // var randomSet;
  var randomSet = sets[randomNumber];

  // if the random array is full, grab a new one
  // if(sets[randomNumber].length === 4){
  //   nums.slice(randomNumber, 1);
  //   randomNumber = nums[Math.floor(Math.random() * nums.length)];
  //   randomSet = sets[randomNumber];
  //   return randomSet;
  // } else {
  //   randomSet = sets[randomNumber];
  //   return randomSet;
  // }
  return randomSet;
}

function addName(){
  var theSet = generateRandomNumber();
  var name = document.getElementById('name').value;
  theSet.push(name);
  renderLists();
}

function renderLists(){
  for(i = 0; i < sets.length; i++){
    if(sets[i].length > 0){
      var listArray = sets[i];
      var listId = i + 1;
      var list = document.getElementById('set' + listId);
      list.innerHTML = "";
      for(j = 0; j < listArray.length; j++){
        var item = document.createElement('li');
        var text = document.createTextNode(listArray[j]);
        item.appendChild(text);
        list.appendChild(item);
      }
    }
  }
}

var add = document.getElementById('add');
add.onclick = addName;
