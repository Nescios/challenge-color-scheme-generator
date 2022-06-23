const colorInput = document.getElementById('color-input')
const selectColorScheme = document.getElementById('select-color-scheme')
const getColorBtn = document.getElementById('get-color-btn')
const colorStrip = document.querySelectorAll('.color-strip')
const colorName = document.querySelectorAll('.color-name')

let colorArray = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
let colorChoose = colorInput.value
let colorScheme = selectColorScheme.value

const urlAPI = 'https://www.thecolorapi.com/scheme'
const queryParams = '?hex=' + colorChoose + '&mode=' + colorScheme

function renderColor(colorArray) {
    for (let i = 0; i < colorArray.length; i++) {
      colorStrip[i].style.backgroundColor = colorArray[i]
        colorName[i].innerHTML = colorArray[i]
    }
}

function getColor() {
    fetch(urlAPI + queryParams)
        .then(response => response.json())
        .then(data => {
            colorArray = data.colors.map(color => color.hex.value)
            renderColor(colorArray)
        })
}

getColorBtn.addEventListener('click', (e) => {
  e.preventDefault()
  getColor()
})

// Initial render
colorInput.value = colorArray[0]
renderColor(colorArray)