const addButton = document.getElementById('addButton')
const addLinkDialog = document.getElementById('addLinkDialog')
const addLinkField = document.getElementById('addLinkField')
const addLinkButton = document.getElementById('addLinkButton')
const images = document.getElementById('images')

function addLink(link) {
    const img = document.createElement('img')
    img.src = link
    img.classList.add('galleryImage')
    const imgDiv = document.createElement('div')
    imgDiv.appendChild(img)
    images.appendChild(imgDiv)
}

addLinkButton.onclick = () => {
    addLink(addLinkField.value)
    addLinkDialog.hidden = true
    addLinkField.value = ''
}

addButton.onclick = () => {
    addLinkDialog.hidden = false
}