function openLetter() {
    var frontFlap = document.querySelector('.letter .letter-flap.front');
    var backFlap = document.querySelector('.letter .letter-flap.back');
    var letterContent = document.getElementById('letterContent');
    
    // Nascondi il bottone e fai aprire la lettera
    document.querySelector('.letter-button').style.display = 'none';
    letterContent.style.display = 'block';

    // Ruota il flap per simulare l'apertura
    frontFlap.style.transform = 'rotateY(-180deg)';
    backFlap.style.transform = 'rotateY(0deg)';
}
