const rootPanel = document.getElementById('rootPanel')

export function showOptions(options, onSelected) {
    
    const content = document.createElement('div')
    content.classList.add('modalContent')
    const panel = document.createElement('div')
    panel.classList.add('modal')
    panel.appendChild(content)
    
    for(const option of options) {
        const button = document.createElement('button')
        button.innerText = option
        button.onclick = () => {
            panel.remove()
            onSelected(option)
        }
        content.appendChild(button)
    }

    rootPanel.appendChild(panel)
}