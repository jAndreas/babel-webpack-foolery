(function() {

function mix( targetClass ) {
  let composedClass;
  return {
    with: function( ...sources ) {
      composedClass = sources.reduce( ( composition, mixinFnc ) => mixinFnc( composition ), targetClass );
      return this;
    },
    spawn:          ( args ) => new composedClass( args ),
    spawnFrozen:    ( args ) => Object.freeze( new composedClass( args ) )
  };
}



class Human {
  constructor( spec ) {
    Object.assign( this, spec );
  }

  getData() {
    return this;
  }

  setName( nname ) {
    this.name = nname;
  }

  birthday() {
    this.age++;
    return this;
  }

  walk() {
    console.log( `${this.name} is walking the street as human being.` );
    super.walk && super.walk();
    return this;
  }

  die() {
    console.log( `${this.name} has a default die method.` );
  }
}

let Pianist = (target) => class extends target {
  play() {
    console.log( `${this.name} is playing the piano...aged ${this.age}` );
    super.play && super.play();
    return this;
  }

  walk() {
    console.log( `${this.name} is walking down the street fiddling on his fiddle.` );
    super.walk && super.walk();
    return this;
  }
}

let DJ = (target) => class extends target {
  play() {
    console.log( `${this.name} is spinning the turntables hard...` );
    super.play && super.play();
    return this;
  }

  walk() {
    console.log( `${this.name} as DJ is rolling the streets with beats.` );
    super.walk && super.walk();
    return this;
  }
}

 

var res = mix( Human ).with( DJ, Pianist ).spawn({ name: 'ROFL', age: 21 });
//res.walk = null;
//res.play().walk();
//var jim = new Human({ name: 'Jim' });
//jim.walk();
res.birthday().birthday();
res.walk();

var test = Object.create( res );
test.setName('Ralf');
test.walk = function() {
   console.log(`${this.name} is also walking!`);
   this.__proto__.walk();
};

console.log(test);
console.log(res);
test.walk();
test.play();
//var newHuman = mix( Human ).with( Pianist, DJ ).spawn( Object.assign( res.getData(), { name: 'Jimmy' } ) );


//newHuman.play();


}());