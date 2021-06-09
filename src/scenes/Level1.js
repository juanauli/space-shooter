import Phaser from 'phaser'

export default class Level1 extends Phaser.Scene {
  constructor() {
    super('Level1');
  }

  init(data) {
    this.characterInfo = data.characterInfo;
  }

  create() {
    console.log(this.characterInfo) //testing mode
    this.scene.get('Title').setWidthHeight(this);
    this.add.text(this.width*0.5, this.height*0.5, 'THIS IS LEVEL 1', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(28);
  }
}
