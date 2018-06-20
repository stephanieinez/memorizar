const wordList = require("./words");

module.exports = class ticker {
  constructor(props) {
    this.index = 0;
    this.io = props;
    this.interval = this.run();
  }

  // stops the ticker
  pause() {
    clearInterval(this.interval);
  }

  // resumes the ticker
  resume() {
    this.interval = this.run();
  }

  run() {
    return setInterval(() => {
      const word = wordList.words[this.index++ % wordList.words.length];
      this.io.sockets.emit("showWord", word);
    }, 2000);
  }
};
