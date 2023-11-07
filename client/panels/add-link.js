const rootPanel = document.getElementById('rootPanel')

export function showAddLinkPanel(onAdd, onCancel) {

    const confirmButton = document.createElement('button')
        confirmButton.innerText = '>>'
    const linkInput = document.createElement('input')
        linkInput.classList.add('textInput')
        linkInput.type = 'text'
    const cancelButton = document.createElement('button')
        cancelButton.innerText = 'X'
    const addLinkContent = document.createElement('div')
        addLinkContent.classList.add('modalContent')
        addLinkContent.appendChild(cancelButton)
        addLinkContent.appendChild(linkInput)
        addLinkContent.appendChild(confirmButton)
    const addLinkPanel = document.createElement('div')
        addLinkPanel.classList.add('modal')
        addLinkPanel.appendChild(addLinkContent)
    

    confirmButton.onclick = () => {
        addLinkPanel.remove()
        onAdd(linkInput.value)
    }

    cancelButton.onclick = () => {
        addLinkPanel.remove()
        onCancel()
    }
    
    rootPanel.appendChild(addLinkPanel)
}