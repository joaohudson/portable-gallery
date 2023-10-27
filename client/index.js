import { buildImageDiv } from "./components/image.js"

const addButton = document.getElementById('addButton')
const addLinkDialog = document.getElementById('addLinkDialog')
const addLinkField = document.getElementById('addLinkField')
const addLinkButton = document.getElementById('addLinkButton')
const imagesDiv = document.getElementById('images')
const cancelLinkButton = document.getElementById('cancelLinkButton')

const data = loadData()

function addLink(link) {
   data.images.push(link)
   save(data)
   update()
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

function update() {
    imagesDiv.innerText = ''
    data.images.forEach(image => {
        imagesDiv.appendChild(buildImageDiv(image))
    })
}

function save(data) {
    localStorage.setItem('data', JSON.stringify(data))
}

function loadData() {
    if(localStorage.getItem('data') != null) {
        const dataJson = localStorage.getItem('data')
        return JSON.parse(dataJson)
    }
    else {
        return {images: []}
    }
}

update()