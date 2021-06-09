import Phaser from 'phaser'
import WebFontFile from '../files/WebFontFile'

export default class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preloadImages() {
    this.load.image("stars-background", "assets/backgrounds/stars-background.png");
    this.load.image("title-background", "assets/backgrounds/title-background.png");
    this.load.image("menu-panel", "assets/sprites/gui/menu-panel.png");
    this.load.image("titled-panel", "assets/sprites/gui/titled-panel.png");
    this.load.image("pixelated-juan", "assets/sprites/gui/pixelated-juan.png");
    this.load.image("small-button", "assets/sprites/gui/small-button.png");
    this.load.image("info-cell", "assets/sprites/gui/info-cell.png");
    this.load.image("choose-button", "assets/sprites/gui/choose-button.png");
    this.load.image("top-decor-button", "assets/sprites/gui/top-decor-button.png");
    this.load.image("play-button", "assets/sprites/gui/play-button.png");
    this.load.image("reverse-play-button", "assets/sprites/gui/reverse-play-button.png");
    this.load.image("character-cell-border", "assets/sprites/gui/character-cell-border.png");

    [1, 2, 3].forEach((n) => {
      this.load.image(`character${n}`, `assets/sprites/character-profiles/character${n}.png`);
      this.load.image(`ship${n}`, `assets/sprites/spaceships/ship${n}.png`);
    })
  }

  preloadSounds() {
    this.load.audio("click", "assets/audio/effects/click.wav");
    this.load.audio("hover", "assets/audio/effects/hover.wav");
    this.load.audio("ten-crack-commandments", "assets/audio/music/ten-crack-commandments.wav");
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'));

    this.preloadImages();
    this.preloadSounds();
  }

  create() {
    this.setWidthHeight(this);
    this.add.image(this.width*0.5, this.height*0.5, "title-background").setOrigin(0.5, 0.5);

    this.createText(this);
    this.playMusic(this, "ten-crack-commandments", 0.15, true);
  }

  playMusic(scene, title, volume, isLooping) {
    scene.sound.pauseOnBlur = false; //prevent music from cutting when leaving tab
    scene.game.sound.stopAll(); //stop previous music
    scene.music = scene.sound.add(title);
    scene.music.setLoop(isLooping);
    scene.music.volume = volume;
    scene.music.play();
  }

  setWidthHeight(scene) {
    scene.width = scene.game.config.width;
    scene.height = scene.game.config.height;
  }

  createText(scene) {
    scene.add.text(scene.width*0.93, scene.height*0.275, 'TM', { fontFamily: '"Press Start 2P"' }).setFontSize(12)

    scene.add.text(scene.width*0.5, scene.height*0.95, '\u00A9 2021', { fontFamily: '"Press Start 2P"' }).setOrigin(0.5)

    scene.start = scene.add.text(scene.width*0.5, scene.height*0.6, 'PRESS ENTER TO START', { fontFamily: '"Press Start 2P"' }).setFontSize(20).setOrigin(0.5);
    scene.playTextBlink(scene, scene.start)

    //listen to event to transition to next scene
    scene.input.keyboard.on('keydown-ENTER', () => {
      scene.playClickSound(scene)
      scene.scene.start('MainMenu');
    })
  }

  playClickSound(scene) {
    if (!scene.click ) {
      scene.click = scene.sound.add('click');
      scene.click.volume = 0.05;
    }
    scene.click.play();
  }

  playTextBlink(scene, target) {
    scene.tweens.add({
      targets: target,
      duration: 650,
      delay: 300,
      repeat: -1,
      ease: Phaser.Math.Easing.Expo.InOut,
      alpha: 0,
      yoyo: true
    })
  }
}
