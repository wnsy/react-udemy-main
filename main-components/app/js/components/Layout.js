import React from 'react';

import Button from './Button';

export default class Layout extends React.Component {
  constructor() { //normal in a cls
    //get the context of the cls (when we call this. it needs to
    //refer to the actual component itself, so will need super to do that)
    super();
    this.state = { //takes a normal js object
      firstName: 'Chloe'
    }
  }

  changeName() {
    this.setState({
      firstName: 'Jamie'
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <h2>{this.state.firstName}</h2>
        <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)} />
        <p>My cat stared at me he was sipping his tea, too. With tail in the air gnaw the corn cob or flop over, but meow meow, so where is my slave? I'm getting hungry purr when being pet walk on car leaving trail of paw prints on hood and windshield. Hack up furballs roll on the floor purring your whiskers off rub whiskers on bare skin act innocent litter kitter kitty litty little kitten big roar roar feed me and jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. Dream about hunting birds. Shake treat bag knock dish off table head butt cant eat out of my own dish for toilet paper attack claws fluff everywhere meow miao french ciao litterbox this human feeds me, i should be a god so cat not kitten around lick human with sandpaper tongue for meow. Allways wanting food a nice warm laptop for me to sit on but licks your face for sit in window and stare oooh, a bird, yum or scream for no reason at 4 am yet stare at wall turn and meow stare at wall some more meow again continue staring wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good ears back wide eyed and sleep nap. Pounce on unsuspecting person fight an alligator and win meeeeouw, pet me pet me pet me pet me, bite, scratch, why are you petting me for litter kitter kitty litty little kitten big roar roar feed me but jump off balcony, onto stranger's head or nya nya nyan. Eat grass, throw it back up disappear for four days and return home with an expensive injury; bite the vet for all of a sudden cat goes crazy warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. Chew iPad power cord kitten is playing with dead mouse run up and down stairs catch mouse and gave it as a present, yet attack feet.
        </p>
      </div>
    )
  }
}
