/**
 * @author john
 */

Game.Modules.Title = function(game) {
   this.game = game;
   this.x = 0;
}
Game.Modules.Title.prototype.init = function() {
   
}
Game.Modules.Title.prototype.destroy = function() {
   
}
Game.Modules.Title.prototype.update = function() {

}
Game.Modules.Title.prototype.paint = function(ctx) {
   ctx.fillStyle = 'black';
   ctx.font = '30pt Arial';
   ctx.fillText('Breakout', 100, 100);
   ctx.font = '16pt Arial';
   ctx.fillText('Enter to play', 100, 120);
}
