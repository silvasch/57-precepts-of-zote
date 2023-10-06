let preceptHeader = document.querySelector(".precept-header");
let preceptDesc = document.querySelector(".precept-desc");

let precepts = [
  {
    header: "Precept One: 'Always Win Your Battles'",
    desc:
      "Losing a battle earns you nothing and teaches you nothing. Win your battles, or don't engage in them at all!"
  },
  {
    header: "Precept Two: 'Never Let Them Laugh at You'",
    desc:
      "Fools laugh at everything, even at their superiors. But beware, laughter isn't harmless! Laughter spreads like a disease, and soon everyone is laughing at you. You need to strike at the source of this perverse merriment quickly to stop it from spreading."
  },
  {
    header: "Precept Three: 'Always Be Rested'",
    desc:
      "Fighting and adventuring take their toll on your body. When you rest, your body strengthens and repairs itself. The longer you rest, the stronger you become."
  },
  {
    header: "Precept Four: 'Forget Your Past'",
    desc:
      "The past is painful, and thinking about your past can only bring you misery. Think about something else instead, such as the future, or some food."
  },
  {
    header: "Precept Five: 'Strength Beats Strength'",
    desc:
      "Is your opponent strong? No matter! Simply overcome their strength with even more strength, and they'll soon be defeated."
  },
  {
    header: "Precept Six: 'Choose Your Own Fate'",
    desc:
      "Our elders teach that our fate is chosen for us before we are even born. I disagree."
  },
  {
    header: "Precept Seven: 'Mourn Not the Dead'",
    desc:
      "When we die, do things get better for us or worse? There's no way to tell, so we shouldn't bother mourning. Or celebrating for that matter."
  },
  {
    header: "Precept Eight: 'Travel Alone'",
    desc:
      "You can rely on nobody, and nobody will always be loyal. Therefore, nobody should be your constant companion."
  },
  {
    header: "Precept Nine: 'Keep Your Home Tidy'",
    desc:
      "Your home is where you keep your most prized possession - yourself. Therefore, you should make an effort to keep it nice and clean."
  },
  {
    header: "Precept Ten: 'Keep Your Weapon Sharp'",
    desc:
      "I make sure that my weapon, 'Life Ender', is kept well-sharpened at all times. This makes it much easier to cut things."
  },
  {
    header: "Precept Eleven: 'Mothers Will Always Betray You'",
    desc: "This Precept explains itself."
  },
  {
    header: "Precept Twelve: 'Keep Your Cloak Dry'",
    desc:
      "If your cloak gets wet, dry it as soon as you can. Wearing wet cloaks is unpleasant, and can lead to illness."
  },
  {
    header: "Precept Thirteen: 'Never Be Afraid'",
    desc:
      "Fear can only hold you back. Facing your fears can be a tremendous effort. Therefore, you should just not be afraid in the first place."
  },
  {
    header: "Precept Fourteen: 'Respect Your Superiors'",
    desc:
      "If someone is your superior in strength or intellect or both, you need to show them your respect. Don't ignore them or laugh at them."
  },
  {
    header: "Precept Fifteen: 'One Foe, One Blow'",
    desc:
      "You should only use a single blow to defeat an enemy. Any more is a waste. Also, by counting your blows as you fight, you'll know how many foes you've defeated."
  },
  {
    header: "Precept Sixteen: 'Don't Hesitate'",
    desc:
      "Once you've made a decision, carry it out and don't look back. You'll achieve much more this way."
  },
  {
    header: "Precept Seventeen: 'Believe In Your Strength'",
    desc:
      "Others may doubt you, but there's someone you can always trust. Yourself. Make sure to believe in your own strength, and you will never falter."
  },
  {
    header: "Precept Eighteen: 'Seek Truth in the Darkness'",
    desc: "This Precept also explains itself."
  },
  {
    header: "Precept Nineteen: 'If You Try, Succeed'",
    desc:
      "If you're going to attempt something, make sure you achieve it. If you do not succeed, then you have actually failed! Avoid this at all costs."
  },
  {
    header: "Precept Twenty: 'Speak Only the Truth'",
    desc:
      "When speaking to someone, it is courteous and also efficient to speak truthfully. Beware though that speaking truthfully may make you enemies. This is something you'll have to bear."
  },
  {
    header: "Precept Twenty-One: 'Be Aware of Your Surroundings'",
    desc:
      "Don't just walk along staring at the ground! You need to look up every so often, to make sure nothing takes you by surprise."
  },
  {
    header: "Precept Twenty-Two: 'Abandon the Nest'",
    desc:
      "As soon as I could, I left my birthplace and made my way out into the world. Do not linger in the nest. There is nothing for you there."
  },
  {
    header: "Precept Twenty-Three: 'Identify the Foe's Weak Point'",
    desc:
      "Every foe you encounter has a weak point, such as a crack in their shell or being asleep. You must constantly be alert and scrutinising your enemy to detect their weakness!"
  },
  {
    header: "Precept Twenty-Four: 'Strike the Foe's Weak Point'",
    desc:
      "Once you have identified your foe's weak point as per the previous Precept, strike it. This will instantly destroy them."
  },
  {
    header: "Precept Twenty-Five: 'Protect Your Own Weak Point'",
    desc:
      "Be aware that your foe will try to identify your weak point, so you must protect it. The best protection? Never having a weak point in the first place."
  },
  {
    header: "Precept Twenty-Six: 'Don't Trust Your Reflection'",
    desc:
      "When peering at certain shining surfaces, you may see a copy of your own face. The face will mimic your movements and seems similar to your own, but I don't think it can be trusted."
  },
  {
    header: "Precept Twenty-Seven: 'Eat As Much As You Can'",
    desc:
      "When having a meal, eat as much as you possibly can. This gives you extra energy, and means you can eat less frequently."
  },
  {
    header: "Precept Twenty-Eight: 'Don't Peer Into the Darkness'",
    desc:
      "If you peer into the darkness and can't see anything for too long, your mind will start to linger over old memories. Memories are to be avoided, as per Precept Four."
  },
  {
    header: "Precept Twenty-Nine: 'Develop Your Sense of Direction'",
    desc:
      "It's easy to get lost when travelling through winding, twisting caverns. Having a good sense of direction is like having a magical map inside of your head. Very useful."
  },
  {
    header: "Precept Thirty: 'Never Accept a Promise'",
    desc:
      "Spurn the promises of others, as they are always broken. Promises of love or betrothal are to be avoided especially."
  },
  {
    header: "Precept Thirty-One: 'Disease Lives Inside of Dirt'",
    desc:
      "You'll get sick if you spend too much time in filthy places. If you are staying in someone else's home, demand the highest level of cleanliness from your host."
  },
  {
    header: "Precept Thirty-Two: 'Names Have Power'",
    desc:
      "Names have power, and so to name something is to grant it power. I myself named my nail 'Life Ender' Do not steal the name I came up with! Invent your own!"
  },
  {
    header: "Precept Thirty-Three: 'Show the Enemy No Respect'",
    desc:
      "Being gallant to your enemies is no virtue! If someone opposes you, they don't deserve respect or kindness or mercy."
  },
  {
    header: "Precept Thirty-Four: 'Don't Eat Immediately Before Sleeping'",
    desc: "This can cause restlessness and indigestion. It's just common sense."
  },
  {
    header: "Precept Thirty-Five: 'Up is Up, Down is Down'",
    desc:
      "If you fall over in the darkness, it can be easy to lose your bearing and forget which way is up. Keep this Precept in mind!"
  },
  {
    header: "Precept Thirty-Six: 'Eggshells are brittle'",
    desc: "Once again, this Precept explains itself."
  },
  {
    header: "Precept Thirty-Seven: 'Borrow, But Do Not Lend'",
    desc:
      "If you lend and are repayed, you gain nothing. If you borrow but do not repay, you gain everything."
  },
  {
    header: "Precept Thirty-Eight: 'Beware the Mysterious Force'",
    desc:
      "A mysterious force bears down on us from above, pushing us downwards. If you spend too long in the air, the force will crush you against the ground and destroy you. Beware!"
  },
  {
    header: "Precept Thirty-Nine: 'Eat Quickly and Drink Slowly'",
    desc:
      "Your body is a delicate thing and you must fuel it with great deliberation. Food must go in as fast as possible, but fluids at a slower rate."
  },
  {
    header: "Precept Forty: 'Obey No Law But Your Own'",
    desc:
      "Laws written by others may inconvenience you or be a burden. Let your own desires be the only law."
  },
  {
    header: "Precept Forty-One: 'Learn to Detect Lies'",
    desc:
      "When others speak, they usually lie. Scrutinise and question them relentlessly until they reveal their deceit."
  },
  {
    header: "Precept Forty-Two: 'Spend Geo When You Have It'",
    desc:
      "Some will cling onto their Geo, even taking it into the dirt with them when they die. It is better to spend it when you can, so you can enjoy various things in life."
  },
  {
    header: "Precept Forty-Three: 'Never Forgive'",
    desc:
      "If someone asks forgiveness of you, for instance a brother of yours, always deny it. That brother, or whoever it is, doesn't deserve such a thing."
  },
  {
    header: "Precept Forty-Four: 'You Can Not Breathe Water'",
    desc:
      "Water is refreshing, but if you try to breathe it you are in for a nasty shock."
  },
  {
    header: "Precept Forty-Five: 'One Thing Is Not Another'",
    desc:
      "This one should be obvious, but I've had others try to argue that one thing, which is clearly what it is and not something else, is actually some other thing, which it isn't. Stay on your guard!"
  },
  {
    header: "Precept Forty-Six: 'The World is Smaller Than You Think'",
    desc:
      "When young, you tend to think that the world is vast, huge, gigantic. It's only natural. Unfortunately, it's actually quite a lot smaller than that. I can say this, now having travelled everywhere in the land."
  },
  {
    header: "Precept Forty-Seven: 'Make Your Own Weapon'",
    desc:
      "Only you know exactly what is needed in your weapon. I myself fashioned 'Life Ender' from shellwood at a young age. It has never failed me. Nor I it."
  },
  {
    header: "Precept Forty-Eight: 'Be Careful With Fire'",
    desc:
      "Fire is a type of hot spirit that dances about recklessly. It can warm you and provide light, but it will also singe your shell if it gets too close."
  },
  {
    header: "Precept Forty-Nine: 'Statues are Meaningless'",
    desc:
      "Do not honour them! No one has ever made a statue of you or I, so why should we pay them any attention?"
  },
  {
    header: "Precept Fifty: 'Don't Linger on Mysteries'",
    desc:
      "Some things in this world appear to us as puzzles. Or enigmas. If the meaning behind something is not immediately evident though, don't waste any time thinking about it. Just move on."
  },
  {
    header: "Precept Fifty-One: 'Nothing is Harmless'",
    desc:
      "Given the chance, everything in this world will hurt you. Friends, foes, monsters, uneven paths. Be suspicious of them all."
  },
  {
    header: "Precept Fifty-Two: 'Beware the Jealousy of Fathers'",
    desc:
      "Fathers believe that because they created us we must serve them and never exceed their capabilities. If you wish to forge your own path, you must vanquish your father. Or simply abandon him."
  },
  {
    header: "Precept Fifty-Three: 'Do Not Steal the Desires of Others'",
    desc:
      "Every creature keeps their desires locked up inside of themselves. If you catch a glimpse of another's desires, resist the urge to claim them as your own. It will not lead you to happiness."
  },
  {
    header: "Precept Fifty-Four: 'If You Lock Something Away, Keep the Key'",
    desc:
      "Nothing should be locked away for ever, so hold onto your keys. You will eventually return and unlock everything you hid away."
  },
  {
    header: "Precept Fifty-Five: 'Bow to No-one'",
    desc:
      "There are those in this world who would impose their will on others. They claim ownership over your food, your land, your body, and even your thoughts! They have done nothing to earn these things. Never bow to them, and make sure to disobey their commands."
  },
  {
    header: "Precept Fifty-Six: 'Do Not Dream'",
    desc:
      "Dreams are dangerous things. Strange ideas, not your own, can worm their way into your mind. But if you resist those ideas, sickness will wrack your body! Best not to dream at all, like me."
  },
  {
    header: "Precept Fifty-Seven: 'Obey All Precepts'",
    desc:
      "Most importantly, you must commit all of these Precepts to memory and obey them all unfailingly. Including this one! Hmm. Have you truly listened to everything I've said? Let's start again and repeat the 'Fifty-Seven Precepts of Zote'"
  }
];

function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}

function yearProgress() {
    var firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
    var firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
    const curDay = new Date().getTime();
    return (curDay - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear);
}

let current_day = Math.floor(daysInYear(new Date().getFullYear()) * yearProgress())
let preceptIndex = current_day % precepts.length;

let precept = precepts[preceptIndex];

preceptHeader.innerHTML = precept.header;
preceptDesc.innerHTML = precept.desc;
