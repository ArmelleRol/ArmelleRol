

/**********************

   Variable et Class

**********************/

:root {
    --grisC: #cacaca;
    --gris7: #8a8a8a;
    --border: #aaa;
    --vert: #85C630;
    --texte: #555;
    --bgNoir: #111;
}
body {
    
}
.container {
    display: flex;
    flex-direction: column; /* Organise le contenu en colonne */
    align-items: center; /* Centre les éléments horizontalement */
    justify-content: flex-start; /* Aligne les éléments en haut */
    text-align: center; /* Centre le texte dans la div */
    margin-top: 20px; /* Espace au-dessus de la section */
}

.photo img {
    max-width: 200px; /* Ajuste la taille de l'image selon vos besoins */
    border-radius: 50%; /* Si vous voulez un effet de cercle */
    margin-bottom: 20px; /* Espace entre la photo et le texte */
}

.info {
    font-size: 16px; /* Ajuste la taille du texte */
    color: #333; /* Couleur du texte */
}

#prenom {
    display: block;
    font-weight: bold;
    font-size: 30px;
}

#titre{
    display: block;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}

header {
    background: #cecece;
    color: #fff;
    padding: 20px;
}

header::before {
    content: "";
    background-image: url('OIP.jfif');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5; /* Ajuste l'opacité ici */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
 }

/**********************

          CV

**********************/

main {
    display: flex; /* Utilise Flexbox pour aligner les sections horizontalement */
    flex-wrap: wrap; /* Permet aux sections de passer à la ligne si nécessaire */
    justify-content: space-around; /* Espace entre les sections */
    margin: 20px; 
}

h1{
    font-size: 20px;
}
.bulles{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  
}
.bulles h2{
    color: var(--vert);
    text-align: center;
}

.apropos-info{
    text-align: center;
}

.info-container {
    position: fixed; /* ou fixed si vous voulez qu'il reste visible même lors du scroll */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    z-index: 10; /* S'assurer qu'il est au-dessus des autres éléments */
    overflow-y:auto;
}

#infoContent {
    margin-top: 20px;
}
button {
    display: block;
    margin-top: 20px;
}
#competencesBtn{
    background-color: var(--vert);
    border-radius : 50px;
    text-decoration: none;
    color:#111;
    padding:20px;
    width:100%;
    display: inline-block; /* Permet au bouton de s'adapter au texte */
    text-align: center; /* Centrer le texte à l'intérieur */
    white-space: normal; /* Permet au texte de retourner à la ligne si nécessaire */
    word-wrap: break-word;
}

.hidden {
    display: none;
}
article {
    margin-top: 20px;
}

#bullesApropos, #bullesCompetences, #bullesExperiences, #bullesFormations{
    width: 170px; /* Ajustez la taille du cercle */
    height: 170px; /* Hauteur égale à la largeur pour un cercle parfait */
    background-color: var(--vert); /* La couleur de fond du cercle */
    color: white; /* Couleur du texte */
    display: flex; /* Flexbox pour centrer le texte */
    justify-content: center; /* Centre le texte horizontalement */
    align-items: center; /* Centre le texte verticalement */
    border-radius: 50%; /* Crée le cercle */
    text-align: center; /* Centre le texte à l'intérieur */
    cursor: pointer; /* Ajoute un curseur pour indiquer que c'est cliquable */
    margin: 20px auto; /* Centrer horizontalement avec de l'espace */
    font-size: 1.2em; /* Ajuste la taille du texte */
    font-weight: bold; /* Rendre le texte en gras */
    transition: background-color 0.3s ease; /* Animation pour hover */
    text-decoration: none;
}
#bullesApropos :hover, #bullesCompetences :hover, #bullesExperiences :hover, #bullesFormations :hover {
    background-color: #444; /* Change la couleur de fond au survol */
    width: 170px; /* Ajustez la taille du cercle */
    height: 170px;
    background-color: #444; /* Change la couleur de fond au survol */
    color: white; /* Couleur du texte */
    display: flex; /* Flexbox pour centrer le texte */
    justify-content: center; /* Centre le texte horizontalement */
    align-items: center; /* Centre le texte verticalement */
    border-radius: 50%; /* Crée le cercle */
    text-align: center; /* Centre le texte à l'intérieur */
    cursor: pointer; /* Ajoute un curseur pour indiquer que c'est cliquable */
    margin: 20px auto; /* Centrer horizontalement avec de l'espace */
    font-size: 1.2em; /* Ajuste la taille du texte */
    font-weight: bold; /* Rendre le texte en gras */
    transition: background-color 0.3s ease; /* Animation pour hover */
    text-decoration: none;
}
.clickable {
    color: var(--vert);
    text-decoration: underline;
    cursor: pointer;
}

.competences-section, .apropos-info, .formations-info, .experiences{
    background-color: #cecece; /* Couleur de fond gris clair */
    border: 1px solid #ccc; /* Bordure grise */
    border-radius: 8px; /* Coins arrondis */
    padding: 15px; /* Espacement interne */
    margin: 10px 0; 
    width:500px;

}

.competences-section h2 {
    text-align: center; /* Centre le titre */
    margin-bottom: 20px; /* Espace sous le titre */
}

.content {
    display: flex;
    flex-direction: column; /* Aligne les éléments de contenu en colonne */
    align-items: flex-start; /* Aligne les éléments à gauche */
    margin-bottom: 20px; /* Espace entre les différents blocs de contenu */
    padding:20px;
}

.content h3 {
    margin-bottom: 10px; /* Espace sous chaque sous-titre */
}

.content ul {
    list-style-type: disc; /* Type de puce pour la liste */
    padding-left: 20px; /* Espacement à gauche pour les listes */
}


#competencesList .overlay {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Fond semi-transparent */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colonnes */
    margin:20px;
}

#competencesList .content {
    background-color: white;
    padding: 20px;
    margin:20px;
    border-radius: 10px;
    text-align: center;
}
#competencesList h3 {
    font-size: 20px;
    font-weight: bold;
 }
#competencesList ul {
    list-style-type: none;
    padding: 0;
}

#competencesList ul li {
    margin: 10px 0;
    font-size: 16px;
}

#closeBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--vert);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

nav ul {
    display: flex; /* Aligne les <li> horizontalement */
    justify-content: space-around; /* Espace entre les éléments */
    padding: 0; /* Supprime le padding par défaut */
    list-style-type: none; /* Supprime les puces */
}

nav ul li {
    margin: 0 20px; /* Ajoute un espacement entre les éléments */
    padding: 10px 20px; /* Ajoute du padding pour rendre les éléments plus gros */
    background-color: var(--vert); /* Ajoute une couleur de fond */
    color: white; /* Couleur du texte */
    border-radius: 5px; /* Coins arrondis */
    cursor: pointer; /* Change le curseur pour indiquer qu'ils sont cliquables */
    transition: background-color 0.3s ease; /* Transition pour l'effet de survol */
}

nav ul li:hover {
    background-color: #444; /* Change la couleur de fond au survol */
}



#container {
    display : flex ; 
    flex-direction : column ; 
    justify-content : center ; 
    align-items : center ;  
    position:relative;
    }
   
   .line {
    width : 3px ;
    background-color : var(--vert) ; 
    height : auto ; 
    position : absolute ; 
    left: 50%;
    top:350px;
    bottom:20px;
   }

   .card {
    transition : 0.3s ;
    border-radius : 10px ; 
    max-height : 200px ; 
    width : 100px ; 
    opacity : 0 ; 
    position : relative ; 
    border : 2px solid var(--vert) ;
   }

   .right {
    padding : 30px ;
    margin-left: 300px ; 
    transform : translateX(100%) ; 
   }
   
   .left {
    padding : 30px ;
    margin-right : 300px ; 
    transform : translateX(-100%) ; 
   }
   
   /* Pointes de flèches */
   .card.left ::after {
    content : '' ;
    position : absolute ; 
    right : 0 ; 
    top : 80% ; 
    width : 0 ; 
    height : 0 ; 
    border : 22px solid transparent ; 
    border-left-color : var(--vert) ; 
    border-right : 0 ; 
    margin-top : -30px ; 
    margin-right : -30px ; 
   }
   
   .card.right ::after {
    content : '' ;
    position : absolute ; 
    left : 0 ; 
    top: 80% ; 
    width: 0 ; 
    height : 0 ; 
    border : 22px solid transparent ; 
    border-right-color : var(--vert) ; 
    border-radius : 10px ; 
    border-left : 0 ; 
    margin-top : -30px ; 
    margin-left : -30px;
   }
