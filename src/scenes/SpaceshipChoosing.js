import Phaser from 'phaser'

export default class SpaceshipChoosing extends Phaser.Scene {
  constructor() {
    super('SpaceshipChoosing');
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.scene.get('MainMenu').addStarsBackground(this);

    this.add.text(this.width*0.5, this.height*0.5, 'This is the spaceship choosing scene', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(24)
  }
}
