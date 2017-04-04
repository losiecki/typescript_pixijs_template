import {display} from "./display/Stage";

export class Main {
  stage:display.Stage;
  constructor(msg: string) {
      console.log(msg);
      this.stage = new display.Stage();
  }
}

let main = new Main('Main Pixi');
