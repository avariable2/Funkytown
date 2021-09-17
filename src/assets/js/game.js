class Game extends Phaser.Scene {
    touches;
    player;

    constructor() {
        super();
    }

    preload () // Ici on charge les assets
    {
        this.load.spritesheet('dude',
        'assets/assetsGame/DWARF.png',
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
        
        this.touches = this.input.keyboard.createCursorKeys();
        this.player = this.add.sprite(400, 300, 'dude').play('default');
        this.player.setScale(4);
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
