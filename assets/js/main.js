jQuery(document).ready(function ($) {
    $(".admin-tools > ul a").on('click', function (e) {
        e.preventDefault()
        $(".admin-tools > ul a").removeClass('active')
        $(this).addClass('active')
    })
    $("#open-tool").on('click', function (e) {
        e.preventDefault()
        $('#overlay').addClass('show')
        $(".admin-tools").toggleClass('show')
    })
    $('#overlay').on('click', function (){
        $('#overlay').removeClass('show')
        $(".admin-tools").removeClass('show')
    })
})