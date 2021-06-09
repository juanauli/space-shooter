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
    this.add.image(this.width*0.37, this.height*0.35, "pixelated-juan").setOrigin(0.5).setScale(0.3)
    this.createBackButton(this);
  }

  createText() {
    this.add.text(this.width*0.5, this.height*0.15, 'CREDITS', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#EF1DEF').setFontSize(24);

    const headlines = [
      {text: 'CREATED BY:', widthFactor: 0.5, heightFactor: 0.25},
      {text: 'MUSIC:', widthFactor: 0.306, heightFactor: 0.48},
      {text: 'BY:', widthFactor: 0.332, heightFactor: 0.537},
      {text: 'ASSETS BY:', widthFactor: 0.5, heightFactor: 0.664},
      {text: 'FAVICON BY:', widthFactor: 0.5, heightFactor: 0.792}
    ];
    for (let headline of headlines) {
      this.add.text(this.width*headline.widthFactor, this.height*headline.heightFactor, headline.text, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#F57C2D').setFontSize(14);
    }

    const contents = [
      {text: 'Juan S. Auli', widthFactor: 0.56, heightFactor: 0.35},
      {text: 'Life After Death Star', widthFactor: 0.564, heightFactor: 0.48},
      {text: 'Otaku Gang\n\n(Biggie x Star Wars)', widthFactor: 0.557, heightFactor: 0.56},
      {text: 'CraftPix.net', widthFactor: 0.5, heightFactor: 0.714},
      {text: 'Freepik from www.flaticon.com', widthFactor: 0.5, heightFactor: 0.842}
    ];
    for (let content of contents) {
      this.add.text(this.width*content.widthFactor, this.height*content.heightFactor, content.text, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(14);
    }
  }

  createBackButton(scene) {
    scene.back = scene.add.image(scene.width*0.07, scene.height*0.11, "small-button");
    scene.backArrow = scene.add.text(scene.width*0.07, scene.height*0.1018, '\u2190', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(20).setScale(2).setColor('black');
    scene.scene.get('Credits').createButtonHoverEffect(scene, scene.back, scene.previousSceneName);
    scene.back.on("pointerup", () => {
      scene.scene.get('Title').playClickSound(scene);
      scene.scene.start(scene.previousSceneName, {previousSceneName: scene.scene.key})
    })
  }

  createButtonHoverEffect(scene, target) {
    target.setInteractive();
    target.on("pointerover", () => {
      target.setTint(0xEF1DEF);
      scene.scene.get('MainMenu').playHoverSound(scene)
    })
    target.on("pointerout", () => {
      target.clearTint();
    })
  }
}
