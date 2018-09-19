const toDoInputElm = document.getElementById('toDoInput');
const notesInputElm = document.getElementById('notesInput');
const submitToDoButtonElm = document.getElementById('submitToDoButton'); 

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
};

const buildNewToDoCard = (toDo, notes) => {
  let domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${toDo}</h5>
    <p class="card-text">${notes}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

    printToDom(domString, 'toDoCards')
}

submitToDoButtonElm.addEventListener("click", (e) => {
  e.preventDefault();

  buildNewToDoCard(toDoInputElm.value, notesInputElm.value);
})