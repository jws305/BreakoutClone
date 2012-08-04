/**
 * @author john
 */

Game = {
   
   canvas : undefined,
   ctx    : undefined,
   
   module  : undefined,
   Modules : {},
   
   interval : undefined,
   
   start : function() {
      this.canvas = document.getElementById('GameCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.ctx.canvas.width  = 400;
      this.ctx.canvas.height = 400;
      this.module = new this.Modules.Title(this);
      this.module.init();
      this.interval = setInterval(this.loop.bind(this), 100);
   },
   
   loop : function() {
      this.module.update();
      this.ctx.clearRect(0,0,400,400);
      this.module.paint(this.ctx);
   },
   
   title2running : function() {
      this.module.destroy();
      this.module = new this.Modules.Running(this);
      this.module.init();
   },
   
   running2title : function() {
      this.module.destroy();
      this.module = new this.Modules.Title(this);
      this.module.init();
   }
}