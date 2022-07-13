// document.getElementsByClassName(filter-button).add



document.querySelector('.filter-button').addEventListener('click', () => { document.querySelector('.dropdown-list').classList.toggle('hidden-list') })

document.querySelector('body').addEventListener('click', (event) => {
    if (!event.target.closest(".search-filter"))
        document.querySelector('.dropdown-list').classList.add('hidden-list')
})

document.querySelectorAll(".menu li").forEach((el) => {
    if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
        el.classList.add("active");
    }
})
