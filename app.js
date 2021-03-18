


$('#carouselId').on('slid.bs.carousel', function (e) {

    let arrSlide = $('#carouselId .carousel-indicators div');
    for (item of arrSlide) {
        item.style.backgroundColor = `#2c2e3d`
    }
    let IsActive = $('#carouselId .carousel-indicators div.active');
    let slideActive = IsActive.data('slideTo');

    let itemSelect = document.querySelector(`.item${slideActive + 1}`)

    itemSelect.style.backgroundColor = `#00bcd4`



})