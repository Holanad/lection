const demoButtonElems = document.querySelectorAll('.demo');

const demoButtonClick = () => {
    demoButtonElems.forEach((i) => {
        i.addEventListener('click', () => {
            alert(`
            Упс...
            Данный сайт работает в режиме демо.`)
        })
    })
}
demoButtonClick();