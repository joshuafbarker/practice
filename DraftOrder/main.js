// make array of items
// make list to place a random array item
// display array of items
// display generated list of random ordered items

function extractRandomItem(array){
  let randNum = Math.floor(Math.random() * array.length);
  let theItem = items[randNum];
  items.splice(randNum, 1);
  return theItem;
}

const items = ['one', 'two', 'three', 'four', 'five'];
const numOfListItems = 5;
const itemList = document.querySelector('.itemList');
const availableItems = document.querySelector('.availableItems');

function renderList(){
  availableItems.innerHTML = '';
  items.forEach(function(element){
    let item = document.createElement('li');
    item.innerText = element;
    availableItems.appendChild(item);
  });
}

for(i = 0; i < numOfListItems; i++){
  let item = document.createElement('li');
  let addBtn = document.createElement('button');
  addBtn.innerText = 'add';
  addBtn.onclick = function(){
    item.innerText = extractRandomItem(items);
    renderList();
  }
  item.appendChild(addBtn);
  itemList.appendChild(item);
}

renderList();
