


// get user 
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser(data) )
}

function displayUser(data){
    const ul = document.getElementById('user')
    for(const user of data ){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerHTML =`<p>${user.name}</p>
                        <p>${user.email}</p>`;

        ul.appendChild(li)
    }
}





function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data){
    const div = document.getElementById('comment')
    for(const comments of data){
        // console.log(comments.name)
        const h3 = document.createElement('h3');

        h3.innerText =`${comments.id} ${comments.title}`;
        div.appendChild(h3);

    }
}