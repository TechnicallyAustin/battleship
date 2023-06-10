export function headerContent(){
    const header = document.querySelector('.header');

    const title = document.createElement('h1');
    title.setAttribute('class', "header-title text-white mb-0 ms-2")
    title.textContent = 'Battleship'

    header.appendChild(title);

    
    
}

