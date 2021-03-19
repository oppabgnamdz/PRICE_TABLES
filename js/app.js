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
$('#carouselId2').on('slid.bs.carousel', function (e) {
   
    let arrSlide = $('#carouselId2 .carousel-indicators div');
    for (item of arrSlide) {
        item.style.backgroundColor = `#2c2e3d`
    }
    console.log(arrSlide)
    let IsActive = $('#carouselId2 .carousel-indicators div.active');
    let slideActive = IsActive.data('slideTo');
    let itemSelect = document.querySelector(`.item${slideActive + 4}`)
    itemSelect.style.backgroundColor = `#00bcd4`
})