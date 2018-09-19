//Creating variables to idendify the parts of the html that we will need
const toDoInputElm = document.getElementById('toDoInput');
const notesInputElm = document.getElementById('notesInput');
const submitToDoButtonElm = document.getElementById('submitToDoButton'); 
//This function activates the delete buttons.  When the page loads initally, there arent any delete buttons.  
//To avoid an error in loadin the js file, this function isnt called until there is a delete button on the page to affect.
//
const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++){
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            //card the the button was on
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            //could also be .... const CardToDelete = e.target.parentNode.parentNode;
            cardToDelete.remove();
            //.parentNode
            //.remove() takes stuff off the DOM
        })
    }
}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
};
//This function builds the to do card to the page
const buildNewToDoCard = (toDo, notes) => {
  let domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${toDo}</h5>
    <p class="card-text">${notes}</p>
    <button href="#" class="btn btn-primary deleteButton">Delete this shit.</button>
  </div>
</div>`;

    printToDom(domString, 'toDoCards')
    activateDeletes();
}

submitToDoButtonElm.addEventListener("click", (e) => {
  e.preventDefault();

  buildNewToDoCard(toDoInputElm.value, notesInputElm.value);
})