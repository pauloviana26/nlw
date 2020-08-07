// Procurar botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos, quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function (field) {
        // pega o field do momento e limpa
        field.value = ""
    })

    // colocar na página, qual página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}