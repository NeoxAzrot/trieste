const sound_menu = new Howl({
  src: ['assets/sounds/' + 'outro.mp3'],
  loop: true,
  volume: 1
})

jQuery(document).ready(function($) {
  $(window).on('load', function(){
    $('.sk-cube-grid').hide()
    $('.loader_text').hide()
    $('.start').show()
  });
});

const startMenu = () => {
  $('.menu').show()
  $('.loader').addClass('hide')
  sound_menu.play()
}