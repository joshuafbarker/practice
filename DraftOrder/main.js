
const items = ['Josh', 'Shawn', 'Chris', 'Tim', 'Ryan', 'Mike', 'Jim', 'Keith', 'David', 'Adam'];
const numOfListItems = items.length;

const itemList = document.querySelector('.itemList');
const availableItems = document.querySelector('.availableItems');
const addItemInput = document.querySelector('.addItemInput');

function extractRandomItem(array){
  let randNum = Math.floor(Math.random() * array.length);
  let theItem = items[randNum];
  items.splice(randNum, 1);
  return theItem;
}

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
  addBtn.innerText = `Pick ${i + 1}`;
  addBtn.onclick = function(){
    item.innerText = extractRandomItem(items);
    renderList();
  }
  item.appendChild(addBtn);
  itemList.appendChild(item);
}

renderList();
