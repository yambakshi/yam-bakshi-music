import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stutter-ep',
  templateUrl: './stutter-ep.component.html',
  styleUrls: ['./stutter-ep.component.scss']
})
export class StutterEpComponent implements OnInit {
  releaseData = {
    meta: {
      name: "Stutter EP",
      type: "EP",
      released: true,
    },
    graphics: {
      favicon: "v1589725229/releases/stutter-ep/favicon_rqrnvr.ico",
      artwork: "v1589194126/releases/stutter-ep/artwork_ehv7fz.png",
      background: "v1589194126/releases/stutter-ep/background_qlkzad.png",
      og: ""
    },
    links: {
      "Spotify": "https://open.spotify.com/album/4Rjpjmd2QvNsfwAz6Mst7M?si=p32BbfvBRVqBZTNmuek1Qw",
      "AppleMusic": "https://music.apple.com/il/album/stutter-ep/1510122304",
      "iTunesStore": "https://music.apple.com/il/album/stutter-ep/1510122304",
      "Deezer": "https://www.deezer.com/album/144372412?utm_source=deezer&utm_content=album-144372412&utm_term=3486418944_1590269988&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=sa_JQ1aZcRs&list=OLAK5uy_l6CpVywxDEHoxDk-u5knBF97iz5Q3whRQ",
      "AmazonMusic": "https://www.amazon.com/Stutter-EP-Explicit-Yam-Bakshi/dp/B0886GC83K/ref=sr_1_3?dchild=1&keywords=yam+bakshi&qid=1590271060&sr=8-3",
      "Soundcloud": "https://soundcloud.com/yambakshi/sets/stutter-ep",
      "Bandcamp": "https://yambakshi.bandcamp.com/album/stutter-ep"
    },
    lyrics: [{
      name: 'Shy',
      lyrics: `If you'll stay awake
Between early and too late
Circles will appear in the sphere
No one sees a thing
Between you and me
You are a bit skeptical

Go and take a ride on the stupid thing
No one ever listens
No I won’t be surprised
If you won't take me
Flying in your tin can

You are a bit selfish

If you'll stay awake
Between early and too late
Circles will appear in the sphere
No one sees a thing
Between you and me
You are a bit selfish

Go and take a ride on the stupid thing
No one ever listens
No I won’t be surprised
If you won't take me
Flying in your tin can

I smell the pesticides
Connection advertisement
With an appetite
For something far more real

Than what you offer so
Leave me the fuck alone
And I’ll be grateful
For what you give`
    },
    {
      name: 'Stutter',
      lyrics: `I guess it's best I keep it to myself
Write it down and rip the page
Why did you stop fighting?
How did you become like this?
One after the other

I guess it's best I get it off my chest
Maybe there's a common thread
Sucked into the vacuum
Disappeared without a trace
One after the other

Memories take form
Anything you want
A coward’s decision stuck in the past

It's just like you imagined it
It's just a little scratch
And if you stop fighting
You'll be able to escape
One after the other

These are the grotesque
Impossible to tame
Piranhas that swim around in my brain

For now it'll do
Amplifying the good
So why did you give up?

(Chorus)

For now it'll do
Amplifying the good
So, how did you ended up here?

Steep slope
Treading lightly
Guess not`
    },
    {
      name: 'Transparent',
      lyrics: `A drug that changes
My behavior
And pulls me further away from you

Soft as a feather
I'll calm your anger
I'll eat the pieces that you can't chew

Move the curtains
Leave them open
Let the sunbeams into the room

Because I know I can't
Romanticize my suicide
I'll come prepared

So that when the clock strikes twelve
I'll overcome both my fear of heights
And my fear of death

I'll crash`
    },
    {
      name: 'Ticklish',
      lyrics: `We're not the same
But we can lie
Lie to ourselves

Unequal halves
Are always caught
Never admit

Now, I know we're told
We're almost there
But I can't wait

Wait

For the last call
For new lows
It's too much
I can't hold
A clear thought
With all this noise

Switch on the apathy
To us it’s just a game

You might as well
Be in denial
They’re closing in

I know we're told
We're not the same
But I can't tell

(Pre chorus)

(Chorus)

And knives that pierce right through
My iron suit
She feels it too
My shield’s no use
My bleeding wounds
She feels them too

We can't turn around
If we could go back
We would go back

To another time
To lose this moment
To be stronger

Can't turn around
If we could go back
We would go back

To another time
If we could go back
Go back, go back, go back

Can't turn around
If we could go back
We would go back`
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }
}