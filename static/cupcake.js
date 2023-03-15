"use strict";
const cupcake_to_delete = document.querySelectorAll(".delete-cupcake")

cupcake_to_delete.forEach{
  (cupcake) => {
    cupcake.addEventListener("click", function () {
      const id = cupcake.dataset.id
      alert(`I\'m clicked with ${id}`)
    })
  }
}
