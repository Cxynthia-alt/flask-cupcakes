"use strict";
const cupcakeClass = document.querySelector('.list-group')

cupcakeClass.addEventListener("click", async function (event) {
  event.preventDefault();
  const id = event.target.dataset.id
  await axios.delete(`/api/cupcakes/${id}`)
  this.parentNode.remove()
})
