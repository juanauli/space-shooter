/** @type {import("../typings/phaser")} */
/* The above loads the phaser.d.ts file so that VSCode has autocomplete for the Phaser API.
If you experience problems with autocomplete, try opening the phaser.d.ts file and scrolling up and down in it.
That may fix the problem -- some weird quirk with VSCode. A new typing file is released with
every new release of Phaser. Make sure it's up-to-date!

At some point, the typings will
be officially added to the official release so that all you'll have to do is do:

npm install @types/phaser

But this hasn't happened yet!
*/

// Bring in all the scenes
import 'phaser';
import config from './config/config'
import Title from './scenes/Title'
import MainMenu from './scenes/MainMenu'
import SpaceshipChoosing from './scenes/SpaceshipChoosing'
import Level1 from './scenes/Level1'
import HighScores from './scenes/HighScores'
import Controls from './scenes/Controls'
import Credits from './scenes/Credits'

class Game extends Phaser.Game {
  constructor() {
    // Add the config file to the game
    super(config);
    //Add scenes
    this.scene.add('Title', Title)
    this.scene.add('MainMenu', MainMenu)
    this.scene.add('SpaceshipChoosing', SpaceshipChoosing)
    this.scene.add('Level1', Level1)
    this.scene.add('HighScores', HighScores)
    this.scene.add('Controls', Controls)
    this.scene.add('Credits', Credits)

    //Start game
    this.scene.start('Title')
  }
}
// Create new instance of game
window.onload = function () {
  window.game = new Game();
}
