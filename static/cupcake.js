const cupcake_to_delete = document.querySelector(".delete-cupcake")
cupcake_to_delete.addEventListener("click", function () {
  const id = cupcake_to_delete.dataset.id
  alert('I\'m clicked')
})
