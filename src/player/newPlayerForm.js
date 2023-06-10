export function newPlayerForm(){
    const addForm = {
        form: null,
        createForm: function(){},
        inputs: function (){
            const elements = {
                label: function(){},
                input: function(){}
            };
            elements.label()
            elements.input()
        },
        submit: function(){},
        build: function(){
            addForm.createForm()
            addForm.inputs()
            addForm.submit()
        }
    }
    addForm.build()

}