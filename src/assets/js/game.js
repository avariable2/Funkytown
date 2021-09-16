class Game extends Phaser.Scene {
    touches;
    player;
    player2;

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
    }

    create () // Ici on ajoute ce que l'on a preload et on modifie pour l'etat de base du jeu
    {
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
        this.player = this.add.sprite(400, 300, 'dude').play('default');
        this.player.setScale(4);

        this.touches.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.touches.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.touches.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.touches.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);



        this.player2 = this.add.sprite(400, 300, 'elf').play('default_elf');
        this.player2.setScale(5);
    }

    update () // Ici on s'occupe des interractions
    {
        if(this.input.keyboard.checkDown(this.touches.left, 0)) {
            this.player.x -= 5;
        } else if(this.input.keyboard.checkDown(this.touches.right, 0)) {
            this.player.x += 5;
        } else if(this.input.keyboard.checkDown(this.touches.down, 0)) {
            this.player.y += 5;
        } else if(this.input.keyboard.checkDown(this.touches.up, 0)) {
            this.player.y -= 5; 
        } 

        if(this.input.keyboard.checkDown(this.touches.keyA, 0)) {
            this.player2.x -= 5;
        } else if(this.input.keyboard.checkDown(this.touches.keyD, 0)) {
            this.player2.x += 5;
        } else if(this.input.keyboard.checkDown(this.touches.keyS, 0)) {
            this.player2.y += 5;
        } else if(this.input.keyboard.checkDown(this.touches.keyW, 0)) {
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
            gravity: { y: 200 }
        }
    },
    scene: [Game]
};

var game = new Phaser.Game(config);
