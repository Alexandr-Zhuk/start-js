let getStartInfo = document.querySelector('.hov');

let info = getStartInfo.innerHTML;

getStartInfo.addEventListener('mouseenter', () => {
    getStartInfo.innerHTML = 'Ай молодец!';
});

getStartInfo.addEventListener('mouseleave', () => {
    getStartInfo.innerHTML = info;
});

console.log(typeof getStartInfo);

console.log(info);