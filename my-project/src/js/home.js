export function load() {
    
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            alert("you're at the bottom of the page");
            console.log(ev);
        }
    };
}