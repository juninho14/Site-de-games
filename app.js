class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active" ;

        this.handleClick = this.handleClick.bind(this);
    } 

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    
    
    


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    } 

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }  

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        } 
        return this;

    }
} 

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list", 
    ".nav-list li",
); 
mobileNavbar.init(); 

// Parte da image 

const slider = 
   document.querySelector('.image-slider');
const arrLeft = 
   document.querySelector('.seta-esquerda');
const arrRight =
   document.querySelector('.seta-direita');
const heading = 
   document.querySelector('.rubrica h1');
const description = 
   document.querySelector('.rubrica p');
   
   //    variação image 

const images = ["./img/resident.jpg", "./img/the-wicher.jpg", "./img/ac-rogue.jpg",
"./img/dead-space.jpg", "./img/call-black.jpg", "./img/far-cry.jpg", "./img/Midnight-Club-3.jpg", 
"./img/bomba-pach.jpeg", "./img/crash.jpg", "./img/red-dead-2.jpg", "./img/fortnite.jpg", "./img/metal.jpg", "./img/batle.jpg", "./img/gta5.jpg", "./img/undertale.jpg"];
   
const headings = [
    "Resident Evil 5", "The witcher 3", "Assassin's Creed® Roque", "Dead space", "Call of Duty®: Black Ops II", "Far Cry Primal", "Midnight Club 3: Edição DUB Remix", "Bomba Patch", "Crash Bandicoot", "Red Dead Redemption 2", "Fortnite", "Metal Gear Rising: Revengeance", "Battlefield V ", "GTA RP", "Undertale"
]; 

const descriptions = [
     "Uma década após o incidente na Mansão de Spencer, Chris Redfield continua na batalha contra a proliferação de armas biológicas, mesmo após o fim da Umbrella. Um dos fundadores da B.S.A.A. (Bioterrorism Security Assesment Alliance, ou Aliança de Avaliação de Segurança em Bioterrorismo), o ex-S.T.A.R.S. é atormentado por lembranças de seu passado e pela perda de sua parceira, Jill Valentine, dada como morta após uma missão mal-sucedida.", "Você é Geralt de Rívia, mercenário matador de monstros. O lugar é um continente devastado pela guerra e infestado de monstros que você pode explorar à vontade. Seu contrato atual? Encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.",
     "Vivencie a história de Basim, um ladrão de rua astuto em busca de respostas e justiça, enquanto percorre as agitadas ruas de Bagdá do século IX.", "Isaac Clarke é um engenheiro comum com a missão de consertar uma imensa nave de mineração, a USG Ishimura. Porém, logo vê que há algo terrivelmente errado. A tripulação foi massacrada e a amada parceira de Isaac, Nicole, está perdida em algum lugar da nave.",
     "Call of Duty: Black Ops 2 é o novo capítulo de uma das franquias mais bem sucedidas da história dos games. O título opta por levar o jogador a uma espécie de nova Guerra Fria, agora no ano de 2025, mas sem deixar de lado os elementos que tornam o título um dos grandes favoritos a jogo do ano.","A galardoada série Far Cry, que conquistou os trópicos e escalou aos Himalaias, retrata agora a luta original da humanidade pela sobrevivência com a sua inovadora jogabilidade em mundo aberto ao juntar enormes feras, cenários arrebatadores e confrontos selvagens e imprevisíveis.", "Midnight Club 3: DUB Edition é um jogo de corrida desenvolvido pela Rockstar San Diego e publicado pela Rockstar Games. É o terceiro jogo da série Midnight Club. Como os jogos anteriores da série, o jogo é um jogo de corrida no estilo arcade e se concentra em corridas selvagens e de alta velocidade, em vez de física e direção realistas.", "Bomba Patch é uma série de modificações (mods) da série de jogos eletrônicos de futebol Pro Evolution Soccer, criada pelo brasileiro Allan Jefferson. Originou-se em 2007 a partir de um campeonato do sexto título da série, organizado por ele em sua locadora.", "O protagonista da série é um bandicoot geneticamente aprimorado chamado Crash, que vive uma vida tranquila nas Ilhas Wumpa até que interrompido pelo principal antagonista dos jogos, Doutor Neo Cortex, que criou Crash e deseja o matá-lo, pois ele é um experimento fracassado.", "Estados Unidos, 1899. Após um assalto que deu errado na cidade de Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e caçadores de recompensas se reunindo em sua caçada, a gangue deve assaltar, roubar e lutar para sobreviver.", "Crie, jogue e lute com amigos gratuitamente no Fortnite. Seja o último jogador em Battle Royale e Zero Build, assista a um concerto ou evento ao vivo ou descubra mais de um milhão de jogos criados por criadores, incluindo corrida, parkour, sobrevivência de zumbis e muito mais.", "O jogo apresenta Raiden como personagem principal um soldado infantil transformado em um ninja ciborgue metade homem e metade máquina, equipado com uma lâmina de katana de alta frequência e com uma alma abastecida por vingança.", "m Battlefield V é o que temos: um retorno ao maior conflito armado que a humanidade protagonizou, com um multiplayer sólido e divertido mas ao mesmo tempo, experiências offline interessantes e muito bem desenvolvidas.",
     "GTA RP ou Roleplay é uma modalidade com regras criadas pelos usuários. O Grand Theft Auto 5 para PC conta com uma grande comunidade de mods que adicionam novidades ao jogo. Grupos de jogadores usaram um desses modos para criar uma categoria, chamada de GTA 5 Roleplay, em que eles interpretam o papel de personagens comuns da cidade de Los Santos em vez de protagonistas ou criminosos de GTA Online.", "Undertale conta uma história onde o mundo era governado por duas raças sendo elas Humanos e Monstros, até que um dia uma guerra começou entre essas duas raças. Os humanos venceram essa guerra e os monstros ficaram selados debaixo da terra com um feitiço, mais precisamente dentro de uma montanha conhecida como Monte Ebott, que mais tarde no ano 20XX ganhará a fama de que quem se lá aventurar nunca mais será visto. Nisto uma criança decide aventurar-se neste mesmo local e acaba por cair num buraco que dá acesso ao mundo dos monstros tornando-se o principio para o desenrolar da história."
     
]; 

// id do slider 

let id = 0; 

// função do slider 

function slide(id) {
    slider.style.backgroundImage = `url(${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}
// adiciona um evento de clique a seta para esquerda
arrLeft.addEventListener('click', () => {

    // diminue id da image 
    id--; 
    /* verifica se o id é menor que o numero de 
    slides disponiveis */
    if(id < 0) {
        // altera a ultima imagem
        id = images.length - 1; 
    }
    // executa a função deslizante
    slide(id);
});

// adiciona um evento de clicar na seta da direita 
arrRight.addEventListener('click', () => {

    // incrementar image ao id 
    id++;

    //verifique se o id é maior que o numero disponivel no slide
    
    if (id > images.length - 1) {
        // muda para primeira image 

        id = 0;
    } 
    // execute a função do slide 
    slide(id);
});







