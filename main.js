const toDoInputElm = document.getElementById('toDoInput');
const notesInputElm = document.getElementById('notesInput');
const submitToDoButtonElm = document.getElementById('submitToDoButton'); 
const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++){
        const element = deleteButtons[i];
        element.addEventListener('click', () => {
            console.log('they clicked delete!!!');
        })
    }
}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
};

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