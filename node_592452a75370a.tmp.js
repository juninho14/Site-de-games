@import url('https://fonts.googleapis.com/css2?family=Nova+Square&family=Roboto:wght@300&display=swap');
 
body{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);}


a {
    color: #ffffff;
    text-decoration: none;
    transition: 0.3;
}

a:hover {
    opacity: 0.7;
} 

.logo {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
}

i{
    font-size: 24px;
} 

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family:  'Nova Square', sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    height: 12vh;   
} 

main {
    background-size: cover;

}

.nav-list {
    list-style: none;
    display: flex;
}

.nav-list, li {
    letter-spacing:4px ;
    margin-left: 32px;
}

.mobile-menu {
    display: none;
    cursor: pointer;
    
}

.mobile-menu div {
    width: 32px;
    height: 2px;
    background: #000000;
    margin: 5px;
    transition: 0.3s;
    

}

@media (max-width: 999px) {
    body{
        overflow-x: hidden;
    }
    .nav-list {
        position: fixed;
        top: 8vh;
        right: 0;
        width: 50vw;
        height: 92vh;
        background: #ffffff;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transform: translateX(100%);
        transition: transform 0.3s ease-in;
        z-index: 10;
    } 
    .nav-list li{
        margin-left: 0;
        opacity: 0;
    }
    .mobile-menu {
        display: block
    }
}

.nav-list.active{
    transform: translateX(0);
} 

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}  

.mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
}
.mobile-menu.active .line2 {
    opacity: 0;
}
.mobile-menu.active .line3 {
   transform: rotate(45deg) translate(-5px, -7px);
} 

.mobile-menu.active .line4 {
    transform: rotate(45deg) translate(-5px, -7px);
 }

  /*image parte   */

  
 .image-slider {
    border-radius: 20px;
    min-height: 40em;
    height: 300px;
    position: relative;
    background-image: url(img/1316184.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.3s;
} 

.image-slider * {
    box-sizing: border-box;
} 

.rubrica {
    background: linear-gradient(rgba(8, 8, 8, 0.027),#beb4b4);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 4em 1em 2em 1em;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} 

.caption h1 {
    margin: 0;
    color: #fff;
} 

p {
    color: #000000;
} 

.seta-esquerda, .seta-direita {
    background: #fff;
    position: absolute;
    top: 40%;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
} 

.seta-esquerda:hover, 
.seta-direita:hover {
    background: #000;
    color: #fff;
}

.seta-esquerda {
    left: 1em;
} 


.seta-direita {
    right: 1em;
} 

.image-fade {
    animation: imgFade 0.5s ease-in-out;
} 

@keyframes imgFade {
    0% {opacity: 0;}
    100% {opacity: 1;}
} 


.divisor-cards{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 50px;
    font-size: 36px;
    font-weight: bold;
    color: #000000;
    padding: 20px;
    background-color: #ffffff; /* Cor de fundo amarela */
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase; /* Transforma o texto em maiúsculas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* parte dos cards de games */ 

.card-container {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);}
  
  .card-container {
     margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
  
  .card1, .card2, .card3, .card4, .card5 {
    width: 200px;
    height: 200px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    border-radius: 10px;
    transition: transform 0.3s ease; /* Adiciona uma transição suave */
    
  }
  .card1{
    background-image: url(img/card-mortal.jpg);
    background-size: cover;
  }

  .card2{
    background-image: url(img/tekken-card.jpg);
    background-size: cover;
    background-position: center;
  }
  
  .card3{
    background-image: url(img/download.jpg);
    background-size: cover;
    background-position: center;
  }

  .card4{
    background-image: url(img/card-street.jpg);
    background-size: cover;
    background-position: center;
  }

  .card5{
    background-image: url(img/card-samurai.jpg);
    background-size: cover;
    background-position: center;
  }

  .card1:hover {
    transform: scale(1.1); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
  }
  .card2:hover {
    transform: scale(1.1); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
  }
  .card3:hover {
    transform: scale(1.1); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
  }
  .card4:hover {
    transform: scale(1.1); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
  }
  .card5:hover {
    transform: scale(1.1); /* Aumenta o tamanho do card ao passar o mouse sobre ele */
  }

/* banner de baixo */

.janelas-container{
    display: flex;
    justify-content: space-around;
}

.card-banner1, .card-banner2, .card-banner3{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 40px;
    width: 370px; /* Largura do card */
    border: 1px solid  #ffffff; /* Borda do card */
    overflow: hidden; /* Garante que o conteúdo não ultrapasse o card */
    justify-content: space-around;
    background-color: #bcb9b9;
}

.background-image1 {
    align-items: center;
    width: 100%; 
    height: 200px; 
    background-image: url('./img/naruto.jpg'); 
    background-size: contain; 
}

.background-image2{
    align-items: center;
    width: 100%; 
    height: 200px; 
    background-image: url('./img/jojo2.jpg'); 
    background-size: cover;
}

.background-image3{
    align-items: center;
    width: 100%; 
    height: 200px; 
    background-image: url('./img/fight.jpg'); 
    background-size: cover;
}

.text {
    padding: 60px; /* Espaçamento interno para o texto */

}

.text p {
    margin: 0; /* Remove a margem padrão do parágrafo */
}


.container-clasicos{
    margin-top: 50px;mm
    border:solid black ;
    display: flex;
}

.image-clasico{
    display: flex;
    justify-content: start;
}


/* parte do quadro preto */

.quadro-jogos {
   background-image: url(./img/duel1.jpeg);
   background-size: cover;
   background-color: #ffffffba;
   padding: 80px;
   margin-top: 50px;
   color: #f0f0f0;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.footer {
    background-color: #000000;
    color: #fff;
    padding: 20px 0;
}

.container-footer {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

.container-footer p{
    color: #ffffff;
}

