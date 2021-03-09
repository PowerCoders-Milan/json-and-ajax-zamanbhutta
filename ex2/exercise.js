fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
      console.log(data)
      var body = document.querySelector("body");
      var ptag = document.createElement("p");
       ptag.innerHTML = data.title;
       body.appendChild(ptag);
       console.log(ptag);
});