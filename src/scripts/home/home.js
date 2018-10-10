// function display the next image from the array
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function goToHalloween() {
    window.location.href = 'haloween.html';
}

function animatedScroll(elem) {
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 800);
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("startPicture").style.backgroundImage = "url(./images/home/" + images[x] + ")";
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [],
    x = -1;
images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";


//Loads blog post data to home page
$(function () {
    $.getJSON('./scripts/home/blog.json', (data) => {
        let posts = data.posts;
        posts.forEach((post) => {
            let postObject = '<div class="col-6 " >' +
                '<div class="blog-card row">' +
                '<div class="col-5">' +
                '<div class=" blog-image-container">' +
                '<img class="blog-image" src="' + post.image + '"/>' +
                '</div>' +
                '</div>' +

                '<div class="col-7">' +
                '<div class=" blog-text">' +
                '<div class="blog-title">' +
                post.title +
                '</div>' +

                '<div class="blog-description">' +
                post.description +
                '</div>' +
                '<div class="blog-link">' +
                '<a target="_blank" href=' + post.link + '>Read Full Post</a>' +
                '</div>' +
                '</div>'
            '</div>'

            '</div>'
            '</div>';

            $(postObject).appendTo("#blog_container");

        })
    })
})

function addPost() {
    let post = {
        title: "joke",
        description: "Peter piper picked a pair of pickled peppers, a pair of pickled peppers petter piper picked",
        link: "https://www.google.com"
    }
    let postObject = '<div class="col-6 " >' +
        '<div class="blog-card row">' +
        '<div class="col-5">' +
        '<div class=" blog-image"> </div>' +
        '</div>' +

        '<div class="col-7">' +
        '<div class=" blog-text">' +
        '<div class="blog-title">' +
        post.title +
        '</div>' +

        '<div class="blog-description">' +
        post.description +
        '</div>' +
        '<div class="blog-link">' +
        '<a href=' + post.link + '>Read Full Post</a>' +
        '</div>' +
        '</div>'
    '</div>'

    '</div>'
    '</div>';

    $(postObject).appendTo("#blog_container");
}