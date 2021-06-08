import Phaser from 'phaser'

export default class Controls extends Phaser.Scene {
  constructor() {
    super('Controls');
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
    this.add.text(this.width*0.5, this.height*0.15, 'CONTROLS', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#EF1DEF').setFontSize(24);

    const contents = [
      {text: 'Accelerate --- Right Arrow', heightFactor: 0.27},
      {text: 'Break -------- Left Arrow', heightFactor: 0.38},
      {text: 'Move Up ------ Up Arrow', heightFactor: 0.49},
      {text: 'Move Down ---- Down Arrow', heightFactor: 0.6},
      {text: 'Fire --------- Space Bar', heightFactor: 0.71},
      {text: 'Pause/\nUnpause ------ p', heightFactor: 0.82}
    ];

    for (let content of contents) {
      const widthFactor = 0.18;
      this.add.text(this.width*widthFactor, this.height*content.heightFactor, content.text, { fontFamily: '"Press Start 2P"' }).setFontSize(20).setOrigin(0, 0.5)
    }
  }
}
