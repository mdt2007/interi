const productlist = document.querySelector(".product-list");
fetch("https://657e76bf3e3f5b189463bc05.mockapi.io/music/homedecor", {
  method: "GET",
  headers: { "content-type": "application/json" },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  })
  .then((tasks) => {
    console.log(tasks);
    tasks.forEach((task) => {
      const product = document.createElement("div");
      product.innerHTML = `
        <div class="full decorate_blog">
            <img class="post" src='${task.image}'
             alt="...">
            <a  class="decorate_blog_bt" >${task.title}</a>
            <div class="fix">
            <button class=" delete_btn btn-remove"> Delete</button> 
            </div>
            </div>`;
      const btnRemove = product.querySelector(".btn-remove");
      btnRemove.addEventListener("click", async () => {
        await deleteProduct(task.id);
        product.remove();
      });
      productlist.appendChild(product);
    });
    // Do something with the list of tasks
  })
  .catch((error) => {
    // handle error
  });


//arrow function
const deleteProduct = async (productId) => {
  const res = await fetch(
    `https://657e76bf3e3f5b189463bc05.mockapi.io/music/homedecor/${productId}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with deleted task
    })
    .catch((error) => {
      // handle error
    });
};

