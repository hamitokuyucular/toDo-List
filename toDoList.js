const taskDOM = document.querySelector("#task")
const listDOM = document.querySelector("#list")

liveToastBtn.addEventListener("click", newElement)

// sayfa açıldığında görevleri yükle
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    listDOM.innerHTML = savedTasks;

    // eventleri geri ekle
    listDOM.querySelectorAll("li").forEach(li => {
      checkFunction(li);
      removeElement(li);
    });
  }
});

function newElement() {
  if (taskDOM.value.trim() !== "") {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `${taskDOM.value}<span class="deleteItem">&times</span>`;
    listDOM.append(liDOM);
    taskDOM.value = "";
    
    checkFunction(liDOM);
    removeElement(liDOM);

    localStorage.setItem("tasks", listDOM.innerHTML);

    $("#liveToast-s").toast("show");
  } else {
    $("#liveToast-e").toast("show");
  }
}


function removeElement(element) {
  element.querySelector('.deleteItem').addEventListener("click", function () {
    element.remove();

    localStorage.setItem("tasks", listDOM.innerHTML)
  });
}

function checkFunction(item) {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    localStorage.setItem("tasks", listDOM.innerHTML);
  });
}
