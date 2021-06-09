import Phaser from 'phaser'
import store from '../store'
import { setChosenCharacter } from '../store/player'

export default class SpaceshipChoosing extends Phaser.Scene {
  constructor() {
    super('SpaceshipChoosing');
    this.selected = 0;
    this.players = [
      {index: 0, name: "Sarah Kim", spaceship: "SS Rebellious"},
      {index: 1, name: "Alice Santana", spaceship: "BC Francesca"},
      {index: 2, name: "Diana Rodriguez", spaceship: "SC Serpent"}
    ]
  }

  init(data) {
    this.previousSceneName = data.previousSceneName;
  }

  create() {
    this.scene.get('Title').setWidthHeight(this);
    this.scene.get('MainMenu').addStarsBackground(this);
    this.scene.get('Credits').createBackButton(this)
    this.addPanel();
    this.addNextButton();
    this.addPreviousButton();
    this.addChooseButton();
    this.addCharacterInfo(this.selected);
  }

  addPanel() {
    this.add.image(this.width*0.5, this.height*0.5, "titled-panel").setOrigin(0.5).setScale(1.75)
    this.add.text(this.width*0.5, this.height*0.15, 'CHARACTER SELECT', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setColor('#EF1DEF').setFontSize(20);
    this.add.image(this.width*0.5, this.height*0.27, "top-decor-button").setOrigin(0.5).setScale(2.5, 1.5);
  }

  addCharacterInfo(selected) {
    this.playerLastName = this.add.text(this.width*0.5, this.height*0.28, `${this.players[this.selected].name.split(' ')[1].toUpperCase()}`, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(18).setColor('black');

    this.playerPicture = this.add.image(this.width*0.28, this.height*0.55, `character${selected+1}`).setOrigin(0.5, 0.5).setScale(0.2);

    this.add.image(this.width*0.62, this.height*0.55, "info-cell").setOrigin(0.5, 0.5).setScale(0.15, 0.2);

    this.add.text(this.width*0.62, this.height*0.4, "COMMANDER", { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(16).setColor('#F57C2D');
    this.playerFullName = this.add.text(this.width*0.62, this.height*0.46, `${this.players[this.selected].name}`, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(16);

    this.add.text(this.width*0.62, this.height*0.54, "SPACESHIP", { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(16).setColor('#F57C2D');
    this.playerShip = this.add.image(this.width*0.62, this.height*0.63, `ship${selected+1}`).setOrigin(0.5, 0.5).setScale(0.8);
    this.playerShipName = this.add.text(this.width*0.62, this.height*0.71, `${this.players[this.selected].spaceship}`, { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(16);
  }

  addChooseButton() {
    this.chooseButton = this.add.image(this.width*0.5, this.height*0.82, "choose-button").setOrigin(0.5).setScale(3, 1.5);
    this.add.text(this.width*0.5, this.height*0.82, "CHOOSE", { fontFamily: '"Press Start 2P"' }).setOrigin(0.5).setFontSize(16).setColor('black');
    this.scene.get('Credits').createButtonHoverEffect(this, this.chooseButton, 'Level1');
    this.chooseButton.on("pointerup", () => {
      this.scene.get('Title').playClickSound(this);
      this.scene.start('Level1', {characterInfo: this.players[this.selected]})
    })
  }

  addNextButton() {
    this.nextButton = this.add.image(this.width*0.75, this.height*0.27, "play-button").setOrigin(0.5).setScale(0.8);
    this.setNextPreviousButtons(this.nextButton)
  }

  addPreviousButton() {
    this.previousButton = this.add.image(this.width*0.25, this.height*0.27, "reverse-play-button").setOrigin(0.5).setScale(0.8);
    this.setNextPreviousButtons(this.previousButton)
  }

  setNextPreviousButtons(button) {
    button.setInteractive();
    button.on("pointerover", () => {
      button.setTint(0xEF1DEF)
      this.scene.get('MainMenu').playHoverSound(this)
    })
    button.on("pointerout", () => {
      button.clearTint();
    })
    button.on("pointerup", () => {
      this.scene.get('Title').playClickSound(this);
      if (button === this.nextButton) {
        this.selected = (this.selected + 1) % 3;
      } else {
        const newSelected = (this.selected - 1) % 3;
        this.selected = (newSelected >= 0 ? newSelected : newSelected + 3)
      }
      this.updatePlayer(this.selected);
    })
  }

  updatePlayer(selected) {
    this.playerLastName.text = this.players[selected].name.split(' ')[1].toUpperCase();
    this.playerPicture.setTexture(`character${this.selected+1}`);
    this.playerFullName.text = `${this.players[selected].name}`;
    this.playerShip.setTexture(`ship${this.selected+1}`);
    this.playerShipName.text = this.players[selected].spaceship;
  }
}
