const project = document.getElementsByClassName('container');

for (i = 0; i < project.length; i++) {

    project[i].addEventListener('click', function () {
        this.classlist.toggle('active')
    })
}

// function hide() {
//     document.getElementsByClassName('project-explanation').hidden = true
// }

// function show() {
//     document.getElementsByClassName('').hidden = false
// }