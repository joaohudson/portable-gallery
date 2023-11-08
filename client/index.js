import { buildImageDiv } from "./components/image.js"
import { showConfirmationMessage } from "./panels/confirmation.js"
import { showAddLinkPanel } from "./panels/add-link.js"
import { showOptions } from "./panels/options.js"

const addButton = document.getElementById('addButton')
const imagesDiv = document.getElementById('images')

const data = loadData()

function addLink(link) {
   data.images.push(link)
   save()
   update()
}

function showLinkDialog() {
    addButton.hidden = true
    showAddLinkPanel(
        (url) => {
            addLink(url)
            addButton.hidden = false
        },
        () => {
            addButton.hidden = false
        }
    )
}

addButton.onclick = () => showLinkDialog()

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