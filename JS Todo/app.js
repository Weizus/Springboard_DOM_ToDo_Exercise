//runs script once the page is loaded
window.addEventListener('load', () => {
    const toDoForm = document.querySelector('#itemSubmitter');
    const list = document.querySelector('#list');

    //localStorage adding to the page
    if (localStorage.length > 0) {
        for (let i = localStorage.length-1; i >= 0; i--) {
            let newElem = document.createElement('li');
            newElem.innerText = localStorage.key(i);
            if (JSON.parse(localStorage.getItem(localStorage.key(i))) === true) {
                newElem.classList.add('crossout');
            }
            list.append(newElem);
        }
    }

    toDoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newElem = document.createElement('li');
        newElem.innerText = document.querySelector('#New_Item').value;
        
        list.append(newElem);
        localStorage.setItem(newElem.innerText, false);
        
        toDoForm.reset();
    });

    list.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle('crossout');
            localStorage.setItem(e.target.innerText, !(JSON.parse(localStorage.getItem(e.target.innerText))));
            console.log(localStorage.getItem(e.target.innerText));
        }
    });
    list.addEventListener('dblclick', (e) => {
        if (e.target.tagName === "LI") {
            localStorage.removeItem(e.target.innerText);
            e.target.remove();
        }
    })
});