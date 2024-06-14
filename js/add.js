
const image=document.querySelector('#img')
const title=document.querySelector('#title')
const button=document.querySelector('#bn')
//arrow function
button.addEventListener('click',
(e)=>{
    e.preventDefault();
    const imageValue=image.value
    console.log(imageValue);
    const titleValue=title.value
    console.log(titleValue);

    const product={
        image: imageValue,
        title: titleValue,
    }
      fetch('https://657e76bf3e3f5b189463bc05.mockapi.io/music/homedecor', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {console.log(task);
        window.location.href = "./home-deco.html";
        // do something with the new task
      }).catch(error => {
        // handle error
      })
})