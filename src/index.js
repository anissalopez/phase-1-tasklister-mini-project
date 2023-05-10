document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      buildToDo(e.target['new-task-description'].value)
    
     // buildToDo(//e.targetvalue goes Headers)
      form.reset()

  })
})

function buildToDo(toDo){
  let p = document.createElement('p')
  p.textContent = ` ${toDo} `
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = `  x  `
  document.getElementById('list').appendChild(p)
  p.appendChild(btn)
}

function handleDelete (e){
  e.target.parentNode.remove()
}