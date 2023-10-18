function downloadCV() {
    // Specify the URL of your CV file
    var cvUrl = 'images/Prithvi CV_1.pdf'; // Replace with the correct file path or URL

    // Create a hidden anchor element
    var a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);

    // Set the anchor's href to the CV file URL and specify the download attribute
    a.href = cvUrl;
    a.setAttribute('download', 'Prithvi_CV.pdf');

    // Trigger a click event on the anchor element to initiate the download
    a.click();

    // Clean up by removing the anchor element from the document
    document.body.removeChild(a);
}
document.querySelector('.btn-box').addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        e.preventDefault();
        downloadCV();
    }
});

// Add an event listener to the "Hire Me" button to prevent its default behavior
// document.querySelector('.btn-box .btn').addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent the default behavior (scrolling to the top)
//     downloadCV(); // Call the downloadCV function to initiate the download
// });
// function downloadCV() {
//     // Specify the URL of your CV file
//     var cvUrl = 'C:\Users\soory\Desktop\MERN\JS\pfl2\images';

//     // Create a hidden anchor element
//     var a = document.createElement('a');
//     a.style.display = 'none';
//     document.body.appendChild(a);

//     // Set the anchor's href to the CV file URL and specify the download attribute
//     a.href = cvUrl;
//     a.setAttribute('download', 'Prithvi CV1.pdf');

//     // Trigger a click event on the anchor element to initiate the download
//     a.click();

//     // Clean up by removing the anchor element from the document
//     document.body.removeChild(a);
// }

// // Add an event listener to the "Hire Me" button
// document.querySelector('.btn-box .btn').addEventListener('click', downloadCV);

// //toggle icons
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar')    

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     menuIcon.classList.toggle()
// }

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            })
        }
    })

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

}