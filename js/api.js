


// get user 
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser(data) )
}

function displayUser(data){
    for(const user of data ){
        console.log(user.name);
    }
}


// get post 

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))
}

function displayPost(post){
    for(const posts of post ){
        console.log(posts.title);
    }
}

