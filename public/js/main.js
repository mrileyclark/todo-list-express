//create variable assigning to selection all with elements class of fa-trash
const deleteBtn = document.querySelectorAll(".fa-trash");
//create var assigning to selection of all span inside parent with item class
const item = document.querySelectorAll(".item span");
//create var assigning to selection of all span with completed class that are
//inside parent with item class
const itemCompleted = document.querySelectorAll(".item span.completed");
//create of array of deletebtn and starting loop
Array.from(deleteBtn).forEach((element) => {
  //add event listener to current item waits for a click then calls a
  //function called deletebtn
  element.addEventListener("click", deleteItem);
  //close loop
});
//create array and starting loop
Array.from(item).forEach((element) => {
  //add event listener to current item waits for a click then calls a
  //function called markcomplete
  element.addEventListener("click", markComplete);
  //close loop
});
//create array and starting loop
Array.from(itemCompleted).forEach((element) => {
  //add event listener to only completed item waits for a click then calls a
  //function called markUncomplete
  element.addEventListener("click", markUnComplete);
  //close loop
});

//declare async function
async function deleteItem() {
  //create var and assigning innertext of list span to it
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("deleteItem", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markUnComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
