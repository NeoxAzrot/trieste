const $puzzles = $('.puzzle');

$puzzles.each(function () {
    const rotation = 90 * Math.round(Math.random() * 3);
    this.setAttribute('data-rotation', rotation);
    this.style.transform = 'rotate(' + rotation + 'deg)';
});

$puzzles.on('click', function () {
    let rotation = this.getAttribute('data-rotation');
    // Ici on transforme une chaîne de caractères en entier
    rotation = parseInt(rotation);

    if (rotation === 270) {
        rotation = 0;
    } else {
        rotation += 90;
    }

    this.setAttribute('data-rotation', rotation);
    this.style.transform = 'rotate(' + rotation + 'deg)';

    checkPuzzlePieces ()
});

function checkPuzzlePieces () {
    let completed = true,
        rotation = 0;

    $puzzles.each(function () {
        rotation = this.getAttribute('data-rotation');
        rotation = parseInt(rotation);
        if (rotation != 0) {
            completed = false;
        }
    });
    if (completed === true) {
        console.log("WIN")
    }
}

// $(".puzzle").click( ()=>{
//     $(this).animate({
//         'transform': 'rotate(' + 90 + 'deg)'
//     })
//     console.log($(this));
//})


