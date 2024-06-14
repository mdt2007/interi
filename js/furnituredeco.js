const productlist= document.querySelector('.product-list')

fetch('https://657e76bf3e3f5b189463bc05.mockapi.io/music/furnituredeco', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
        console.log(tasks);
        tasks.forEach((task) => {
            const product = document.createElement("div");
            product.innerHTML =`
            <div class="full decorate_blog">
                <img src=${task.image}
                 alt="...">
                <a  class=" decorate_blog_bt" href="hd.html">${task.title}</a>
                </div>
            `
            productlist.appendChild(product);
        })
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})