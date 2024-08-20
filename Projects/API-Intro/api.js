// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function loadPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data));
}

loadPosts();