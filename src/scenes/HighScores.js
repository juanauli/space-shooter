import Phaser from 'phaser'

export default class HighScores extends Phaser.Scene {
  constructor() {
    super('HighScores');
  }

  init(data) {
    this.previousSceneName = data.previousSceneName;
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.scene.get('MainMenu').addStarsBackground(this);

    this.add.image(this.width*0.5, this.height*0.5, "titled-panel").setOrigin(0.5).setScale(1.75)
    this.createText();
    this.scene.get('Credits').createBackButton(this);
  }

  createText() {
    this.add.text(this.width*0.5, this.height*0.15, 'HIGH SCORES', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#EF1DEF').setFontSize(24);
  }
}
