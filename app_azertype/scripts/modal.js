let btnSender = document.querySelector('.sender');
btnSender.addEventListener('click', (event) => {
    event.stopPropagation()
    let getModal = document.querySelector('.modal');
    getModal.style.display = "flex"
});

let btnClose = document.querySelector('.fermer');
    btnClose.addEventListener('click', (event) => {
        event.stopPropagation()
        let getModal = document.querySelector('.modal');
        getModal.style.display = "none";
});

