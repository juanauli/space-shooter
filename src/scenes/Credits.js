import Phaser from 'phaser'

export default class Credits extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  init(data) {
    this.previousSceneName = data.previousSceneName;
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.scene.get('MainMenu').addStarsBackground(this);

    this.add.image(this.width*0.5, this.height*0.5, "titled-panel").setOrigin(0.5).setScale(1.75)
    this.createText();
    this.add.image(this.width*0.33, this.height*0.38, "pixelated-juan").setOrigin(0.5).setScale(0.3)
    this.createBackButton(this);
  }

  createText() {
    this.add.text(this.width*0.5, this.height*0.15, 'CREDITS', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#EF1DEF').setFontSize(24);

    const headlines = [
      {text: 'CREATED BY', widthFactor: 0.5, heightFactor: 0.27},
      {text: 'ASSETS BY', widthFactor: 0.5, heightFactor: 0.55},
      {text: 'FAVICON BY', widthFactor: 0.5, heightFactor: 0.75}
    ];
    for (let headline of headlines) {
      this.add.text(this.width*headline.widthFactor, this.height*headline.heightFactor, headline.text, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#4DF3F5').setFontSize(20);
    }

    const contents = [
      {text: 'Juan S. Auli', widthFactor: 0.57, heightFactor: 0.38},
      {text: 'CraftPix.net', widthFactor: 0.5, heightFactor: 0.62},
      {text: 'Freepik from www.flaticon.com', widthFactor: 0.5, heightFactor: 0.82}
    ];
    for (let content of contents) {
      this.add.text(this.width*content.widthFactor, this.height*content.heightFactor, content.text, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(20);
    }
  }

  createBackButton(scene) {
    scene.back = scene.add.image(scene.width*0.07, scene.height*0.11, "small-button");
    scene.backArrow = scene.add.text(scene.width*0.07, scene.height*0.1018, '\u2190', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(20).setScale(2);
    this.scene.get('MainMenu').addButtonToText(scene, scene.back, 'white', this.previousSceneName, scene.backArrow);
  }
}
