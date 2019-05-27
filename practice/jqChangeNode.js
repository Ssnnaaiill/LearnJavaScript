$('.target').before('<div>before</div>');
$('.target').after('<div>after</div>');
$('.target').prepend('<div>prepend</div>');
$('.target').append('<div>append</div>');

$('#btn1').click(function() {
    $('#target1').remove();
})

$('#btn2').click(function() {
    $('#target2').empty();
})

$('#btn3').click(function() {
    $('<div>replaceAll</div>').replaceAll('#target1');
})

$('#btn4').click(function() {
    $('#target2').replaceWith('<div>replaceWith</div>');
})