const items = ['item1', 'item2', 'item3']

const elementMenu = document.querySelector('#root')

if(elementMenu){
  // const map =  items.map(item =>{
  //   return `<li>${item}</li>`
  // }).join('')
  // elementMenu.innerHTML = map
  for(let i = 0; i < items.length; i++){
    elementMenu.innerHTML += `<li>${items[i]}</li>`
  }
}