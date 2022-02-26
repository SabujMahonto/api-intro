

function addPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}


function displayPhoto(data){
    // console.log(data)
    const imgContainer = document.getElementById('container')
    for(const photo of data){
        const li = document.createElement('li')
        li.classList.add('album')
        li.innerHTML = ` <img src="${photo.url}" >
        
        `;
        imgContainer.appendChild(li)
        // console.log(photo);
    }
}