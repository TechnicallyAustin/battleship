export function headerContent(){
    const header = document.querySelector('.header');

    const content = {
        logo: function(){
            const title = document.createElement('h1');
            title.setAttribute('class', "header-title text-white mb-0 ms-2 w-25")
            title.textContent = 'Battleship'
            header.appendChild(title);
        },
        gameButtons: function(){
            const buttonContainer = document.createElement('div');
            buttonContainer.setAttribute('class', ' h-100 w-25 d-flex justify-content-around align-items-center me-2');
            header.appendChild(buttonContainer);
            const buttons = {
                start: function(){
                    const startButton = document.createElement('button');
                    startButton.setAttribute('class', 'btn btn-primary btn-lg w-50 h-75');
                    startButton.textContent = 'Start';
                    buttonContainer.appendChild(startButton);
                },
                cancel: function(){
                    const cancelButton = document.createElement("button");
                    cancelButton.setAttribute("class", "btn border-danger text-danger btn-lg w-50 h-75");
                    cancelButton.textContent = "Cancel";
                    buttonContainer.appendChild(cancelButton);
                }
            };
            buttons.start();
            buttons.cancel();
        }   
    };
    content.logo()
    content.gameButtons()

    
}

