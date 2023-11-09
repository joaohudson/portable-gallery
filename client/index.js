import { buildImageDiv } from "./components/image.js"
import { showConfirmationMessage } from "./panels/confirmation.js"
import { showAddLinkPanel } from "./panels/add-link.js"
import { showOptions } from "./panels/options.js"

const addButton = document.getElementById('addButton')
const floatButtonDiv = document.getElementById('floatButtonDiv')
const imagesDiv = document.getElementById('images')
const exportButton = document.getElementById('exportButton')

const data = loadData()

function addLink(link) {
   data.images.push(link)
   save()
   update()
}

function showLinkDialog() {
    floatButtonDiv.style.display = 'none'
    showAddLinkPanel(
        (url) => {
            addLink(url)
            floatButtonDiv.style.display = null
        },
        () => {
            floatButtonDiv.style.display = null
        }
    )
}

addButton.onclick = () => showLinkDialog()

exportButton.onclick = () => exportData()

async function deleteImage(image) {
    showConfirmationMessage('Tem certeza que deseja deletar esta imagem?', () => {
        data.images = data.images.filter(img => img != image)
        update()
        save()
    })
}

function update() {
    imagesDiv.innerText = ''
    data.images.forEach(image => {
        imagesDiv.appendChild(buildImageDiv(image, (_) => {
            showOptions(['Apagar', 'Cancelar'], (option) => {
                if(option == 'Apagar') {
                    deleteImage(image)
                }
            })
        }))
    })
}

function exportData() {
    const downloadName = 'gallery-' + Date.now() + '.json'
    const jsonData = JSON.stringify(data)
    const blob = new Blob([jsonData], {type: 'application/json'})
    const blobUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = blobUrl
    a.download = downloadName
    a.click()
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000)
}

function save() {
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