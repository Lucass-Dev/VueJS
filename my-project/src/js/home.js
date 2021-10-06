export function load(cb) {
    window.onscroll = function() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            cb()
        }
    };
    
}

export function scrollTop() {
    window.scrollTo(0,0)
}

export function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}