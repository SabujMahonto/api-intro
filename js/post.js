// get post 
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))
}

function displayPost(post){
    const postContainer = document.getElementById('post');
    for(const posts of post ){
        const div = document.createElement('div')
        div.classList.add('new_post')
        div.innerHTML = `<h1>${posts.title}</h1>
                        <p>${posts.body}</p>
        `;
        postContainer.appendChild(div)
        // console.log(posts.title)

    }
}