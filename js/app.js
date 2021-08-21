document.getElementById("add-button").addEventListener('click', function () {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    const listContainer = document.getElementById("item-container");
    let li = document.createElement('li');
    li.classList.add("item");
    if (inputFieldText != '') {
        li.innerText = inputFieldText;
        listContainer.appendChild(li);
        const totalTask = document.getElementById("total-task");
        totalTaskText = totalTask.innerText;
        let totalTaskNumber = parseInt(totalTaskText);
        totalTaskNumber++;
        totalTask.innerText = totalTaskNumber;

        // add korle tarpor click korlei delete hoe jabe 

        const items = document.getElementsByClassName("item");
        for (const item of items) {
            item.addEventListener('click', function (event) {
                event.target.parentNode.removeChild(event.target);
                totalTaskNumber--;
                totalTask.innerText = totalTaskNumber;
            })
        }
    }
    inputField.value = '';
})
