
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



    create () // Ici on ajoute ce que l'on a preload et on modifie pour l'etat de base du jeu
    {

        var hero_id = 'waiter';

        
        console.log('Connection to serv ');

        // Create WebSocket connection.
        const socket = new WebSocket('ws://192.168.1.32:2002');

        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Jean');
        });

        
        console.log('web setup');

        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
            if (message == 'Elf'){
                hero_id = 'Elf';
            }
            if (message == 'Dude'){
                hero_id = 'Dude';
            }
        });


        console.log('creating game');
 

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
    
      //  this.snack = this.add.image(Phaser.Math.Between(100,200),Phaser.Math.Between(100,200),'donj');
         this.snack = this.matter.add.image(300,200,'demon');
      // 3 65 12 79

 
        this.snack.scale = 4

    }

    update () // Ici on s'occupe des interractions
    {
        
        while(hero_id == 'waiter'){
            console.log('waiting for serv');
            sleep(2000);

        }

        if(this.input.keyboard.checkDown(this.touches.left, 0)) {
            this.player.x -= 5;
        } else if(this.input.keyboard.checkDown(this.touches.right, 0)) {
            this.player.x += 5;
        } else if(this.input.keyboard.checkDown(this.touches.down, 0)) {
            this.player.y += 5;
        } else if(this.input.keyboard.checkDown(this.touches.up, 0)) {
            this.player.y -= 5; 
        } 

        if(this.touches.keys.A.isDown || this.touches.keys.Q.isDown) {
            this.player2.x -= 5;
        } else if(this.touches.keys.D.isDown) {
            this.player2.x += 5;
        } else if(this.touches.keys.S.isDown) {
            this.player2.y += 5;
        } else if(this.touches.keys.W.isDown || this.touches.keys.Z.isDown) {
            this.player2.y -= 5;
        }   

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
