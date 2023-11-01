export function buildImageDiv(url, onClick) {
    const img = document.createElement('img')
    img.src = url
    img.onclick = onClick
    img.classList.add('galleryImage')
    const imgDiv = document.createElement('div')
    imgDiv.appendChild(img)
    return img
}