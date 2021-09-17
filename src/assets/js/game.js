

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

class Game extends Phaser.Scene {
    touches;
    player;
    player2; 
    snack;
    socket;

    constructor() {
        super();
    }

    preload () // Ici on charge les assets
    {
        this.load.spritesheet('dude',
        'assets/assetsGame/DWARF.png',
        { frameWidth: 31, frameHeight: 31, startFrame: 0, endFrame: 3}
        );
        this.load.spritesheet('elf',
        'assets/assetsGame/ELF.png',
        { frameWidth: 31, frameHeight: 31, startFrame: 0, endFrame: 3}
        );
        this.load.image('bg', 'assets/assetsGame/bg.jpg');
        
        this.load.image('demon', 'assets/assetsGame/demon.png');
        
    }

    hero_id = 'waiter';

    create () // Ici on ajoute ce que l'on a preload et on modifie pour l'etat de base du jeu
    {
        
        console.log('Connection to serv ...');

        // Create WebSocket connection.
        try {
            //this.socket = new WebSocket('ws://86.245.16.8:2002/');
            this.socket = new WebSocket('ws:localhost:3000');
            
            // Connection opened
            this.socket.addEventListener('open', function (event) {
                this.socket.send('Jean');
            });



            console.log(' -> Web setup : connection reussi !');

            // Listen for messages
            this.socket.onmessage = (event) => {
                console.log(event.data);
            };

            this.socket.onclose = (event) => {
                console.log('Deconnexion : le serveur ne repond plus.');
            }
        } catch (error) {
            console.log(' -> Erreur lors de la connexion.');
        }

        console.log('Creating game ...');
        this.add.image(0,0, 'bg').setOrigin(0,0);
        this.anims.create({
            key: 'default', // nom de l'animation
            frames: 'dude', 
            frameRate: 5, // vitesse de l'animation
            repeat : -1 // infini
        });
        this.anims.create({
            key: 'default_elf', // nom de l'animation
            frames: 'elf', 
            frameRate: 5, // vitesse de l'animation
            repeat : -1 // infini
        });
        


        this.touches = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.sprite(400, 300, 'dude').play('default');
        this.player.setScale(4);

        this.touches.keys = this.input.keyboard.addKeys('W,A,S,D,Z,Q');

        this.player2 = this.physics.add.sprite(400, 300, 'elf').play('default_elf');
        this.player2.setScale(5);
   
   
        this.player.setCollideWorldBounds(true);
        this.player2.setCollideWorldBounds(true);

        console.log(" -> creation reussi !");
    }

    update () // Ici on s'occupe des interractions
    {

        if(this.input.keyboard.checkDown(this.touches.left, 0)) {
            this.socket.send(JSON.stringify({move: 'left'}));
            this.player.x -= 5;
        } else if(this.input.keyboard.checkDown(this.touches.right, 0)) {
            this.socket.send(JSON.stringify({move: 'right'}));
            this.player.x += 5;
        } else if(this.input.keyboard.checkDown(this.touches.down, 0)) {
            this.socket.send(JSON.stringify({move: 'down'}));
            this.player.y += 5;
        } else if(this.input.keyboard.checkDown(this.touches.up, 0)) {
            this.socket.send(JSON.stringify({move: 'up'}));
            this.player.y -= 5; 
        } 

        /*if(this.touches.keys.A.isDown || this.touches.keys.Q.isDown) {
            this.player2.x -= 5;
        } else if(this.touches.keys.D.isDown) {
            this.player2.x += 5;
        } else if(this.touches.keys.S.isDown) {
            this.player2.y += 5;
        } else if(this.touches.keys.W.isDown || this.touches.keys.Z.isDown) {
            this.player2.y -= 5;
        }  */
    }
}

// La variable config permet d'initialiser la fenetre ainsi que son type
// (soit en webBg soit avec un canvas mais AUTO sert a selectionner le meilleur) 
// et de definir le type de gravité
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [Game]
};

var game = new Phaser.Game(config);
