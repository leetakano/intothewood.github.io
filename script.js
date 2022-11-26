var flky = new Flickity('.carousel', {
    groupCells: false,
    // group cells together in slides
    pageDots: false,
    wrapAround: true

});

var select = document.querySelector('select')
select.addEventListener('change', function (event) {
    console.log(event.target.value)
    flky.select(event.target.value - 1)
});