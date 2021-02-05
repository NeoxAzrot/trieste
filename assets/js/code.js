const password = 1806
let tries
let disabled = false

const sound_code= new Howl({
  src: ['assets/sounds/' + 'code.mp3'],
  volume: 1
})

$(document).ready(function() {
	start()
})

function start(){
	tries = 0
	
	$(".key").click(function(){
    if(!disabled) {
      sound_code.play()
      
      var n = $(this).html()
      $('.screen').append( n )
      tries++
      updateFlasher()
      validate()
    }
	})
}

function updateFlasher(){
	if (tries <=3){
		var dis = tries * 65
		$('.flasher').css({
			'left' : dis + 'px'
		})
	}
	else{
    disabled = true
		$('.flasher').css({
			'left' : '40px',
			'display' : 'none'
		})
	}
}

function validate(){
	if (tries >= 4){
    setTimeout(() => {
      checkWin()
      $('.screen').html('')
      tries = 0
      $('.flasher').css({
        'display' : 'block'
      })
    }, 500)
	}
}

function checkWin(){
	var w = $('.screen').html()
	if (w == password){
		$('.success').show().delay(5000).queue(function(n) {
      $('.success').hide()
      disabled = false
      n()
    })
    // Gagné
    $('#coffre_soldat').hide()

    setTimeout(() => {
      $('.code_container').removeClass('show')
  
      nb_coins++
      showObjects()
    }, 2000)
	}
	else{
		$('.error').show().delay(1000).queue(function(n) {
      $('.error').hide()
      disabled = false
      n()
		})
  }
  disabled = true
}

// Fermer le puzzle au clique sur la croix
$('#close_code').click(() => {
  $('.code_container').removeClass('show')
})