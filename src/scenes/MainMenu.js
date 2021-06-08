import Phaser from 'phaser'

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.addStarsBackground(this);
    this.add.image(this.width*0.5, this.height*0.5, "menu-panel").setOrigin(0.5).setScale(2.3)
    this.addMenuOptions();
  }

  addStarsBackground(scene) {
    scene.add.image(scene.width*0.5, scene.height*0.5, "stars-background").setOrigin(0.5, 0.5);
  }

  addMenuOptions() {
    const options = ['Standard Game', 'Quick Game', 'High Scores', 'Controls', 'Credits'];
    options.forEach((option, index) => {
      const optionName = option.split(' ').join('');
      let targetSceneName = optionName;
      if (option === 'Standard Game') {
        targetSceneName = 'CharacterChoosing';
      } else if (option === 'Quick Game') {
        targetSceneName = 'Level1';
      }

      this.optionName = this.add.text(this.width*0.5, this.height*(0.24 + 0.13*index), option, { fontFamily: '"Press Start 2P"' }).setFontSize(26).setOrigin(0.5)

      this.addButtonToText(this, this.optionName, 'white', targetSceneName);
    })
  }

  addButtonToText(scene, target, initialColor, nextSceneName, textTarget) {
    if (!textTarget) textTarget = target;

    target.setInteractive();
    target.on("pointerover", () => {
      textTarget.setColor('#EF1DEF')
      scene.scene.get('MainMenu').playHoverSound(scene)
    })
    target.on("pointerout", () => {
      textTarget.setColor(initialColor);
    })
    target.on("pointerup", () => {
        scene.scene.get('Title').playClickSound(scene);
        scene.scene.start(nextSceneName, {previousSceneName: scene.scene.key})
    })
  }

  playHoverSound(scene) {
    if (!scene.hover ) {
      scene.hover = scene.sound.add('hover');
      scene.hover.volume = 0.05;
    }
    scene.hover.play();
  }
}
