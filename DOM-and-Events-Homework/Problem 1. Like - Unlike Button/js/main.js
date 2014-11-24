var likeButton = document.getElementById('likeButton');
likeButton.addEventListener("click", likeOrUnlike, false);

function likeOrUnlike() {
    if(likeButton.innerHTML == 'Like') {
        likeButton.innerHTML = 'Unlike';
    } else {
        likeButton.innerHTML = 'Like';
    }
}