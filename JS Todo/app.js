//runs script once the page is loaded
window.addEventListener('load', () => {
    const toDoForm = document.querySelector('#itemSubmitter');
    const list = document.querySelector('#list');
    toDoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newElem = document.createElement('li');
        newElem.innerText = document.querySelector('#New_Item').value;
        
        list.append(newElem);
        
        toDoForm.reset();
    });

    list.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('crossout');
        }
    });
    list.addEventListener('dblclick', (e) => {
        if (e.target.tagName === "LI") {
            e.target.remove();
        }
    })
});