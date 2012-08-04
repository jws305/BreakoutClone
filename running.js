/**
 * @author john
 */

Game.Modules.Running = function(game) {
   this.game = game;
   this.x = 0;
}
Game.Modules.Running.prototype.init = function() {
   
}
Game.Modules.Running.prototype.destroy = function() {
   
}
Game.Modules.Running.prototype.update = function() {
   this.x ++;
   if (this.x == 20) {
      this.game.running2title();
   }
}
Game.Modules.Running.prototype.paint = function(ctx) {
   ctx.fillStyle = 'black';
   ctx.fillText('Running: '+this.x, 100, 100);
}
