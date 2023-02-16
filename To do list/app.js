// ****** SELECT ITEMS **********
const alertt = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);
//clear items
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded',setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id/dataset
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        //append child
        list.appendChild(element);
        //display alert
        displayAlert("item added to the list", "success");
        //show container
        container.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id,value);

        //set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML=value;
        displayAlert("value changed", "success");
        editLocalStorage(editID,value);
        setBackToDefault();
    } else {
        displayAlert("please enter value", "danger")
    }
    setBackToDefault();
};
//display alert
function displayAlert(text, action) {
    alertt.textContent = text;
    alertt.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function () {
        alertt.textContent = "";
        alertt.classList.remove(`alert-${action}`);
    }, 1000);
}
//clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        })
    } container.classList.remove("show-container");
    displayAlert('empty list', "danger");
    setBackToDefault();
}
//delete funtion
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id=element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
}
//edit funtion
function editItem(e) {
    const eleme=e.currentTarget.parentElement.parentElement;
    editElement=e.currentTarget.parentElement.previousElementSibling;
    grocery.value=editElement.innerHTML;
}

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
    const grocery={id,value};
    let items=localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items)); 
}

function removeFromLocalStorage(id){
    //localStorage API
    //setITem
    //getITem
    //removeItem
    //save as strings
    let items=getLocalStorage(id);
    items.filter(function(item){
        if(item.id!==id){
            return item;
        }
    });
    localStorage.setItem("list",JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items=getLocalStorage();
    items=items.map(function(item){
        if(item.id===id){
            item.value=value;
        }
        return item;
    })
}
function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}
// ****** SETUP ITEMS **********
function setupItems(){
    let items=getLocalStorage();
    if(items.length>0){
        
    }
}