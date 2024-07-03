import Phaser from 'phaser';

import './assets/style.css';
import config from './Config/config.js';
import Model from './Model.js';
import BootScene from './Scenes/BootScene.js';
import PreloaderScene from './Scenes/PreloaderScene.js';
import TitleScene from './Scenes/TitleScene.js';
import OptionsScene from './Scenes/OptionsScene.js';
import CreditsScene from './Scenes/CreditsScene.js';
import GameScene from './Scenes/GameScene.js';
import gameOverScene from './Scenes/gameOverScene.js';
import ScoreBoardScene from './Scenes/ScoreBoardScene.js';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', gameOverScene);
    this.scene.add('ScoreBoard', ScoreBoardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();