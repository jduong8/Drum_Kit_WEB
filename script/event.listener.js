var keys = [81, 83, 68, 70, 71, 72, 74, 75, 76]

this.addEventListener('keydown', e => {

    var keyID = e.keyCode ? e.keyCode : e.which;

    if (keys.includes(keyID)) {
        var sound = document.getElementById(keyID)
        sound.play();
    }
})