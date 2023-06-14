export function newPlayerForm(){
    const addForm = {
        form: null,
        createForm: function(){
            const newForm = document.createElement('form')
            newForm.setAttribute('class','add-player-form w-100 h-100 d-flex justify-content-end align-items-center me-2')
            newForm.addEventListener('submit', (e)=>{
                e.preventDefault()
                addForm.submit()
            })
            this.form = newForm
        },
        inputs: function (){
            const fieldset = document.createElement('fieldset')
            fieldset.setAttribute('class','player-name-field d-flex justify-content-end align-items-center w-100 h-100')
            addForm.form.appendChild(fieldset)
            const elements = {
                label: function(){
                    const newLabel = document.createElement('label')
                    newLabel.setAttribute('class','add-player-label text-white px-2')
                    newLabel.textContent = 'Enter name!'
                    fieldset.appendChild(newLabel)
                },
                input: function(){
                    const newInput = document.createElement('input');
                    newInput.setAttribute('class','add-player-name w-50 h-75 rounded px-2');
                    newInput.type = 'text';
                    newInput.placeholder = 'Player Name'
                    fieldset.appendChild(newInput)
                    
                }
            };
            elements.label()
            elements.input()
        },
        submit: function(){
            const startButton = document.createElement('button');
            startButton.setAttribute('class', 'start btn btn-primary btn-lg w-25 h-75');
            startButton.textContent = 'Start';
            this.form.appendChild(startButton);

        },
        build: function(){
            addForm.createForm()
            addForm.inputs()
            addForm.submit()

        }
    }
    addForm.build()
    return addForm.form

}