// Liste des codes de touches qui sont écoutés par le script.
const keys = [81, 83, 68, 70, 71, 72, 74, 75, 76];

// Fonction pour jouer le son et ajouter l'animation
function playSound(keyID) {
  // Récupère l'élément audio dont l'ID correspond au code de la touche enfoncée.
  const sound = document.getElementById(keyID);
  // Récupère l'élément 'div' avec la classe 'key' et l'attribut 'data-key' correspondant au code de la touche enfoncée.
  const key = document.querySelector(`.key[data-key="${keyID}"]`);

  // Si l'élément audio existe, exécute le bloc suivant.
  if (sound) {
    // Réinitialise le temps de lecture de l'audio à 0, permettant de rejouer le son depuis le début.
    sound.currentTime = 0;
    // Joue le fichier audio.
    sound.play();
    // Ajoute la classe 'playing' à l'élément 'key', déclenchant une animation définie dans le CSS.
    key.classList.add('playing');
    // Ajoute un écouteur d'événement pour l'événement 'transitionend' sur l'élément 'key'.
    // Cet événement se déclenche lorsque la transition CSS (animation) sur l'élément est terminée.
    key.addEventListener('transitionend', () => {
      // Supprime la classe 'playing' de l'élément 'key' une fois l'animation terminée.
      key.classList.remove('playing');
    });
  }
}

// Ajout d'un écouteur d'événement pour l'événement 'keydown' sur l'objet 'window'.
// Cet événement se déclenche chaque fois qu'une touche du clavier est enfoncée.
window.addEventListener('keydown', e => {
  // Récupère le code de la touche enfoncée.
  // 'e.keyCode' est utilisé pour les navigateurs plus anciens et 'e.which' est une alternative.
  const keyID = e.keyCode ? e.keyCode : e.which;

  // Vérifie si le code de la touche enfoncée fait partie du tableau 'keys'.
  if (keys.includes(keyID)) {
    playSound(keyID);
  }
});

// Ajout d'un écouteur d'événement 'click' pour chaque élément 'key'
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const keyID = key.getAttribute('data-key');
    playSound(keyID);
  });
});
