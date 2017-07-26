function Superhero (realname, power, justice, height, health)
{
    this.realname=realname;
    this.superpower=power;
    this.justice=justice;// this is a boolean
    this.height =height;
    this.health = health
};

var superman = new Superhero ("Clark kent", "flying",true, "6'3");

var batman= new Superhero ("Bruce Wayne", "wealth", true, "6'2");

console.log(batman.superpower);

this.fight = function () {
    var num = Math.floor(Math.random(100)) ;
}

