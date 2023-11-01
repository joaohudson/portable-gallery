const rootPanel = document.getElementById('rootPanel')

export async function showConfirmationMessage(message, onConfirm, onCancel) {

    const label = document.createElement('label')
    label.innerText = message
    const textDiv = document.createElement('div')
    textDiv.appendChild(label)
    
    const okButton = document.createElement('button')
    okButton.onclick = () => {
        rootPanel.innerText = ''
        if(onConfirm) onConfirm()
    }
    okButton.innerText = 'V'
    const cancelButton = document.createElement('button')
    cancelButton.onclick = () => {
        rootPanel.innerText = ''
        if(onCancel) onCancel()
    }
    cancelButton.innerText = 'X'
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('horizontalButtonGroup')
    buttonDiv.appendChild(okButton)
    buttonDiv.appendChild(cancelButton)

    const contentPanel = document.createElement('div')
    contentPanel.classList.add('modalContent')
    contentPanel.appendChild(textDiv)
    contentPanel.appendChild(buttonDiv)
    
    const confirmationPanel = document.createElement('div')
    confirmationPanel.classList.add('modal')
    confirmationPanel.appendChild(contentPanel)

    rootPanel.appendChild(confirmationPanel)
}