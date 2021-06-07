import Phaser from 'phaser'

export default class Controls extends Phaser.Scene {
  constructor() {
    super('Controls');
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.scene.get('MainMenu').addStarsBackground(this);

    this.add.text(this.width*0.5, this.height*0.5, 'These are the controls', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(24)
  }
}