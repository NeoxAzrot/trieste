const sound_fish = new Howl({
  src: ['assets/sounds/' + 'fish.mp3'],
  loop: true,
  volume: 1
})

$('#fish_answer').on('input', () => {
  let answer = $('#fish_answer').val().toLowerCase().replace('é', 'e')

  sound_fish.play()
  setTimeout(() => {
    sound_fish.stop()
  }, 150);
  
  if(answer == 'emeraude') {
    $('#fish_answer').prop('disabled', true)
    $('.right_answer').fadeIn()
    $('#homme_poisson').hide()
    $('#homme_poisson').addClass('done')
    tool_clickable = false

    setTimeout(() => {
      $('.fish_question_container').removeClass('show')
      changeInfoText()
      tool_clickable = true
  
      nb_fishs++
      showObjects()
    }, 2000)
  }
});

$('#close_fish').click(() => {
  $('.fish_question_container').removeClass('show')
  changeInfoText()
})