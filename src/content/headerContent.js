import {newPlayerForm} from '../player/newPlayerForm.js'
export function headerContent(){
    const header = document.querySelector('.header');

    const content = {
        logo: function(){
            const title = document.createElement('h1');
            title.setAttribute('class', "header-title text-white mb-0 ms-2 w-25")
            title.textContent = 'Battleship'
            header.appendChild(title);
        },
        form: function(){
            header.append(newPlayerForm())
        }
    };
    content.logo()
    content.form()

    
}

