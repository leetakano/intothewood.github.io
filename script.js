



// for carousel
var flky = new Flickity('.carousel', {
    groupCells: false,
    // group cells together in slides
    pageDots: false,
    wrapAround: true

});

// for accordion

var select = document.querySelector('select')
select.addEventListener('change', function (event) {
    console.log(event.target.value)
    flky.select(event.target.value - 1)
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (event) {
        event.currentTarget.closest(".accordion-item").classList.toggle("active");
        var panel = this.nextElementSibling;
        console.log(event.target)
        // if (panel.style.maxHeight) {
        //     panel.style.maxHeight = null;
        //     } else {
        //         panel.style.maxHeight = panel.scrollHeight + "px";
        //     }
    });
}