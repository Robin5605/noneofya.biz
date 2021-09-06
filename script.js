$(document).ready(function() {
    copy = $('#copy')
    short = $('#short')
    copy.click(function() {
        navigator.clipboard.writeText(short.val());
        copy.text('Copied!');
    })

    $('#gen').click(function() {
        short.val('random_link');
    })

    copy.mouseleave(function() {
        copy.text('Copy to clipboard');
    })
})