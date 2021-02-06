const sound_menu = new Howl({
  src: ['assets/sounds/' + 'intro.mp3'],
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
  playIntro = false
  playStart = true
  //sound_menu.play() // A remettre si on remodifie la vidéo
}