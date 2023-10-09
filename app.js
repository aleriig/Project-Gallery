
const project = document.getElementsByClassName('content-container');

for (i = 0; i < project.length; i++) {

    project[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};