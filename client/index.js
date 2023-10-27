const addButton = document.getElementById('addButton')
const addLinkDialog = document.getElementById('addLinkDialog')
const addLinkField = document.getElementById('addLinkField')
const addLinkButton = document.getElementById('addLinkButton')
const imagesDiv = document.getElementById('images')
const cancelLinkButton = document.getElementById('cancelLinkButton')

let data = {
    images: [] 
}

if(localStorage.getItem('data') != null) {
    const dataJson = localStorage.getItem('data')
    data = JSON.parse(dataJson)
}

function buildImageDiv(url) {
    const img = document.createElement('img')
    img.src = url
    img.classList.add('galleryImage')
    const imgDiv = document.createElement('div')
    imgDiv.appendChild(img)
    return img
}

function update() {
    imagesDiv.innerText = ''
    data.images.forEach(image => {
        imagesDiv.appendChild(buildImageDiv(image))
    })
}

function save() {
    localStorage.setItem('data', JSON.stringify(data))
}

function addLink(link) {
   data.images.push(link)
   update()
   save()
}

function showLinkDialog(show) {
    if(show) {
        addButton.hidden = true
        addLinkDialog.hidden = false
        addLinkDialog.value = ''
    } else {
        addButton.hidden = false
        addLinkDialog.hidden = true
    }
}

addLinkButton.onclick = () => {
    addLink(addLinkField.value)
    showLinkDialog(false)
}

cancelLinkButton.onclick = () => {
    showLinkDialog(false)
}

addButton.onclick = () => {
    showLinkDialog(true)
}

update()