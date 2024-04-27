document.addEventListener("DOMContentLoaded", function () {

function shareOnFacebook() {

const urlToShare = 'https://www.example.com';
const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
}
function shareOnTwitter() {

const urlToShare = 'https://j0shua-l.github.io/itec362-coinfacts/';
const textToShare = 'Check out this awesome website!';
const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
}

const shareFacebookButton = document.getElementById("share-facebook");
const shareTwitterButton = document.getElementById("share-twitter");
shareFacebookButton.addEventListener("click", shareOnFacebook);
shareTwitterButton.addEventListener("click", shareOnTwitter);
});