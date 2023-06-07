export function headerContent(){
    const header = document.querySelector('.header');
    const title = document.createElement('h1');

    title.textContent = 'Battleship'
    title.setAttribute('class', "header-title text-white mb-0 ms-2")
    header.appendChild(title);
    
}

