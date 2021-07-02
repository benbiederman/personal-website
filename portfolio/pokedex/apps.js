class Pokemon {
    constructor(name, img, altImg, height, weight, description, evolutionFrom, evolutionInto, evolutionTrigger, number, pokemonRed, pokemonBlue, pokemonYellow, seen, caught) {
        this.name = name;
        this.img = img;
        this.altImg = altImg;
        this.height = height;
        this.weight = weight;
        this.description = description;
        this.evolutionFrom = evolutionFrom
        this.evolutionInto = evolutionInto;
        this.evolutionTrigger = evolutionTrigger;
        this.number = number;
        this.pokemonRed = pokemonRed;
        this.pokemonBlue = pokemonBlue;
        this.pokemonYellow = pokemonYellow;
        this.seen = seen;
        this.caught = caught;
    }
}

//List of Pokemon
const bulbasaur = new Pokemon('bulbasaur', `img/pokedex/bulbasaur.jpg`, `img/pokemon/1.png`, `2' 4''`, `15 lbs`, `Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.`, false, ['ivysaur', 'venusaur'], false, 1, true, true, true, false, false);

const ivysaur = new Pokemon('ivysaur', 'img/pokedex/ivysaur.jpg', 'img/pokemon/2.png', `3' 3''`, '29 lbs', `There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.`, ['bulbasaur'], ['venusaur'], 'lvl 16', 2, true, true, true, false, false);

const venusaur = new Pokemon('venusaur', 'img/pokedex/venusaur.jpg', 'img/pokemon/3.png', `6' 7''`, `221 lbs`, `There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.`, ['bulbasaur', 'ivysaur'], false, 'lvl 32', 3, true, true, true, false, false);

const charmander = new Pokemon('charmander', 'img/pokedex/charmander.jpg', 'img/pokemon/4.png', `2' 0''`, '19 lbs', `The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.`, false, ['charmeleon', 'charizard'], false, 4, true, true, true, false, false);

const charmeleon = new Pokemon('charmeleon', 'img/pokedex/charmeleon.jpg', 'img/pokemon/5.png', `3' 7''`, '42 lbs', `Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.`, ['charmander'], ['charizard'], 'lvl 16', 5, true, true, true, false, false);

const charizard = new Pokemon('charizard', 'img/pokedex/charizard.jpg', 'img/pokemon/6.png', `5' 7''`, '200 lbs', `Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.`, ['charmander', 'charmeleon'], false, 'lvl 36', 6, true, true, true, false, false);

const squirtle = new Pokemon('squirtle', 'img/pokedex/squirtle.jpg', 'img/pokemon/7.png', `1' 8''`, '20 lbs', `Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.`, false, ['wartortle', 'blastoise'], false, 7, true, true, true, false, false);

const wartortle = new Pokemon('wartortle', 'img/pokedex/wartortle.jpg', 'img/pokemon/8.png', `3' 3''`, '50 lbs', `Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.`, ['squirtle'], ['blastoise'], 'lvl 16', 8, true, true, true, false, false);

const blastoise = new Pokemon('blastoise', 'img/pokedex/blastoise.jpg', 'img/pokemon/9.png', `5' 3''`, '189 lbs', `Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet`, ['squirtle', 'wartortle'], false, 'lvl 36', 9, true, true, true, false, false);

const caterpie = new Pokemon('caterpie', 'img/pokedex/caterpie.jpg', 'img/pokemon/10.png', `1' 0''`, '6 lbs', `Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.`, false, ['metapod', 'butterfree'], false, 10, true, true, true, false, false);

const metapod = new Pokemon('metapod', 'img/pokedex/metapod.jpg', 'img/pokemon/11.png', `2' 4''`, '22 lbs', `The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.`, ['caterpie'], ['butterfree'], 'lvl 7', 11, true, true, true, false, false);

const butterfree = new Pokemon('butterfree', 'img/pokedex/butterfree.jpg', 'img/pokemon/12.png', `3' 7''`, '71 lbs', 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.', ['caterpie', 'metapod'], false, 'lvl 10', 12, true, true, true, false, false);

const weedle = new Pokemon('weedle', 'img/pokedex/weedle.jpg', 'img/pokemon/13.png', `1' 0''`, '7 lbs', `Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose)`, false, ['kakuna', 'beedrill'], false, 13, true, true, false, false, false);

const kakuna = new Pokemon('kakuna', 'img/pokedex/kakuna.jpg', 'img/pokemon/14.png', `2' 0''`, '22 lbs', `Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.`, ['weedle'], ['beedrill'], 'lvl 7', 14, true, true, false, false, false);

const beedrill = new Pokemon('beedrill', 'img/pokedex/beedrill.jpg', 'img/pokemon/15.png', `3' 3''`, '65 lbs', `Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.`, ['weedle', 'kakuna'], false, 'lvl 10', 15, true, true, true, false, false);

const pidgey = new Pokemon('pidgey', 'img/pokedex/pidgey.jpg', 'img/pokemon/16.png', `1' 0''`, '4 lbs', `Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.`, false, ['Pidgeotto', 'Pidgeot'], false, 16, true, true, true, false, false);

const pidgeotto = new Pokemon('pidgeotto', 'img/pokedex/pidgeotto.jpg', 'img/pokemon/17.png', `3' 7''`, '66 lbs', `Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.`, ['pidgey'], ['pidgeot'], 'lvl 18', 17, true, true, true, false, false);

const pidgeot = new Pokemon('pidgeot', 'img/pokedex/pidgeot.jpg', 'img/pokemon/18.png', `4' 11''`, '87 lbs', `This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.`, ['pidgey', 'pidgeotto'], false, 'lvl 36', 18, true, true, true, false, false);

const rattata = new Pokemon('rattata', 'img/pokedex/rattata.jpg', 'img/pokemon/19.png', `1' 0''`, '8 lbs', `Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.`, false, ['raticate'], false, 19, true, true, true, false, false);

const raticate = new Pokemon('raticate', 'img/pokedex/raticate.jpg', 'img/pokemon/20.png', `2'4''`, '41 lbs', `Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.`, ['rattata'], false, 'lvl 20', 20, true, true, true, false, false );

const spearow = new Pokemon('spearow', 'img/pokedex/spearow.jpg', 'img/pokemon/21.png', `1' 0''`, '4 lbs', `Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.`, false, ['fearow'], false, 21, true, true, true, false, false);

const fearow = new Pokemon('fearow', 'img/pokedex/fearow.jpg', 'img/pokemon/22.png', `3' 11''`, '84 lbs', `Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.`, ['spearow'], false, 'lvl 20', 22, true, true, true, false, false);

const ekans = new Pokemon('ekans', 'img/pokedex/ekans.jpg', 'img/pokemon/23.png', `6' 7''`, '15 lbs', `Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.`, false, ['arbok'], false, 23, true, false, false, false, false);

const arbok = new Pokemon('arbok', 'img/pokedex/arbok.jpg', 'img/pokemon/24.png', `11' 6''`, '143 lbs', `This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crushing embrace is impossible.`, ['ekans'], false, 'lvl 22', 24, true, false, false, false, false);

const pikachu = new Pokemon('pikachu', 'img/pokedex/pikachu.jpg', 'img/pokemon/25.png', `1' 4''`, '13 lbs', `Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.`, false, ['raichu'], false, 25, true, true, true, false, false);

const raichu = new Pokemon('raichu', 'img/pokedex/raichu.jpg', 'img/pokemon/26.png', `2' 7''`, '66 lbs', `If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.`, ['pikachu'], false, 'thunder stone', 26, true, true, false, false, false );

const sandshrew = new Pokemon('sandshrew', 'img/pokedex/sandshrew.jpg', 'img/pokemon/27.png', `2' 0''`, '26 lbs', `Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.`, false, ['sandslash'], false, 27, false, true, true, false, false);

const sandslash = new Pokemon('sandslash', 'img/pokedex/sandslash.jpg', 'img/pokemon/28.png', `3' 3''`, '65 lbs', `Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.`, ['sandshrew'], false, 'lvl 22', 28, false, true, true, false, false);

const nidoranF = new Pokemon('nidoran ♀', 'img/pokedex/nidoran-f.jpg', 'img/pokemon/29.png', `1' 4''`, '15 lbs', `Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.`, false, ['nidorina', 'nidoqueen'], false, 29, true, true, true, false, false);

const nidorina = new Pokemon('nidorina', 'img/pokedex/nidorina.jpg', 'img/pokemon/30.png', `2' 7''`, '44 lbs', `When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.`, ['nidoran♀'], ['nidoqueen'], 'lvl 16', 30, true, true, true, false, false);

const nidoqueen = new Pokemon('nidoqueen', 'img/pokedex/nidoqueen.jpg', 'img/pokemon/31.png', `4' 3''`, '132 lbs', `Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.`, ['nidoran♀', 'nidorina'], false, 'moon stone', 31, true, true, true, false, false);

const nidoranM = new Pokemon('nidoran ♂', 'img/pokedex/nidoran-m.jpg', 'img/pokemon/32.png', `1' 8''`, '20 lbs', `Nidoran ♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.`, false, ['nidorino', 'nidoking'], false, 32, true, true, true, false, false);

const nidorino = new Pokemon('nidorino', 'img/pokedex/nidorino.jpg', 'img/pokemon/33.png', `2' 11''`, '43 lbs', `Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.`, ['nidoran ♂'], ['nidoking'], 'lvl 16', 33, true, true, true, false, false);

const nidoking = new Pokemon('nidoking', 'img/pokedex/nidoking.jpg', 'img/pokemon/34.png', `4' 7''`, '137 lbs', `Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.`, ['nidoran ♂', 'nidorino'], false, 'moon stone', 34, true, true, true, false, false);

const clefairy = new Pokemon('clefairy', 'img/pokedex/clefairy.jpg', 'img/pokemon/35.png', `2' 0''`, '17 lbs', `On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.`, false, ['clefable'], false, 35, true, true, true, false, false);

const clefable = new Pokemon('clefable', 'img/pokedex/clefable.jpg', 'img/pokemon/36.png', `4' 3''`, '88 lbs', `Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.`, ['clefairy'], false, 'moon stone', 36, true, true, true, false, false);

const vulpix = new Pokemon('vulpix', 'img/pokedex/vulpix.jpg', 'img/pokemon/37.png', `2' 0''`, '22 lbs', `At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.`, false, ['ninetales'], false, 37, false, true, true, false, false);

const ninetales = new Pokemon('ninetales', 'img/pokedex/ninetales.jpg', 'img/pokemon/38.png', `3'7''`, '44 lbs', `Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.`, ['vulpix'], false, 'fire stone', 38, false, true, true, false, false);

const jigglypuff = new Pokemon('jigglypuff', 'img/pokedex/jigglypuff.jpg', 'img/pokemon/39.png', `1' 8''`, '12 lbs', `Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.`, false, ['wigglytuff'], false, 39, true, true, true, false, false);

const wigglytuff = new Pokemon('wigglytuff', 'img/pokedex/wigglytuff.jpg', 'img/pokemon/40.png', `3' 3''`, '26 lbs', `Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.`, ['jigglypuff'], false, 'moon stone', 40, true, true, true, false, false);

const zubat = new Pokemon('zubat', 'img/pokedex/zubat.jpg', 'img/pokemon/41.png', `2' 7''`, '17 lbs', `Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.`, false, ['golbat'], false, 41, true, true, true, false, false);

const golbat = new Pokemon('golbat', 'img/pokedex/golbat.jpg', 'img/pokemon/42.png', `5' 3''`, '121 lbs', `Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.`, ['zubat'], false, 'lvl 22', 42, true, true, true, false, false);

const oddish = new Pokemon('oddish', 'img/pokedex/oddish.jpg', 'img/pokemon/43.png', `1' 8''`, '12 lbs', `During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.`, false, ['gloom', 'vileplume'], false, 43, true, false, true, false, false);

const gloom = new Pokemon('gloom', 'img/pokedex/gloom.jpg', 'img/pokemon/44.png', `2' 7''`, '19 lbs', `Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.`, ['oddish'], ['vileplume'], 'lvl 21', 44, true, false, true, false, false);

const vileplume = new Pokemon('vileplume', 'img/pokedex/vileplume.jpg', 'img/pokemon/45.png', `3' 11''`, '41 lbs', `Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.`, ['oddish', 'gloom'], false, 'leaf stone', 45, true, false, true, false, false);

const paras = new Pokemon('paras', 'img/pokedex/paras.jpg', 'img/pokemon/46.png', `1' 0''`, '12 lbs', `Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.`, false, ['parasect'], false, 46, true, true, true, false, false);

const parasect = new Pokemon('parasect', 'img/pokedex/parasect.jpg', 'img/pokemon/47.png', `3' 3''`, '65 lbs', `Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.`, ['paras'], false, 'lvl 24', 47, true, true, true, false, false);

const venonat = new Pokemon('venonat', 'img/pokedex/venonat.jpg', 'img/pokemon/48.png', `3' 3''`, '66 lbs', `Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.`, false, ['venomoth'], false, 48, true, true, true, false, false);

const venomoth = new Pokemon('venomoth', 'img/pokedex/venomoth.jpg', 'img/pokemon/49.png', `4' 11''`, '28 lbs', `Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.`, ['venonat'], false, 'lvl 31', 49, true, true, true, false, false);

const diglett = new Pokemon('diglett', 'img/pokedex/diglett.jpg', 'img/pokemon/50.png', `0' 8''`, '2 lbs', `Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.`, false, ['dugtrio'], false, 50, true, true, true, false, false);

const dugtrio = new Pokemon('dugtrio', 'img/pokedex/dugtrio.jpg', 'img/pokemon/51.png', `2' 4''`, '73 lbs', `Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.`, ['diglett'], false, 'lvl 26', 51, true, true, true, false, false);

const meowth = new Pokemon('meowth', 'img/pokedex/meowth.jpg', 'img/pokemon/52.png', `1' 4''`, '9 lbs', `Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.`, false, ['persian'], false, 52, false, true, false, false, false);

const persian = new Pokemon('persian', 'img/pokedex/persian.jpg', 'img/pokemon/53.png', `3' 3''`, '71 lbs', `Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.`, ['meowth'], false, 'lvl 28', 53, false, true, false, false, false);

const psyduck = new Pokemon('psyduck', 'img/pokedex/psyduck.jpg', 'img/pokemon/54.png', `2' 7''`, '43 lbs', `Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.`, false, ['golduck'], false, 54, true, true, true, false, false);

const golduck = new Pokemon('golduck', 'img/pokedex/golduck.jpg', 'img/pokemon/55.png', `5' 7''`, '169 lbs', `The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.`, ['psyduck'], false, 'lvl 33', 55, true, true, true, false, false);

const mankey = new Pokemon('mankey', 'img/pokedex/mankey.jpg', 'img/pokemon/56.png', `1' 8''`, '62 lbs', `When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.`, false, ['primeape'], false, 56, true, false, true, false, false);

const primeape = new Pokemon('primeape', 'img/pokedex/primeape.jpg', 'img/pokemon/57.png', `3' 3''`, '71 lbs', `When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.`, ['mankey'], false, 'lvl 28', 57, true, false, true, false, false);

const growlithe = new Pokemon('growlithe', 'img/pokedex/growlithe.jpg', 'img/pokemon/58.png', `2' 4''`, '42 lbs', `Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.`, false, ['arcanine'], false, 58, true, false, true, false, false);

const arcanine = new Pokemon('arcanine', 'img/pokedex/arcanine.jpg', 'img/pokemon/59.png', `6' 3''`, '342 lbs', `Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.`, ['growlithe'], false, 'fire stone', 59, true, false, true, false, false);

const poliwag = new Pokemon('poliwag', 'img/pokedex/poliwag.jpg', 'img/pokemon/60.png', `2' 0''`, '27 lbs', `Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.`, false, ['poliwhirl', 'poliwrath'], false, 60, true, true, true, false, false);

const poliwhirl = new Pokemon('poliwhirl', 'img/pokedex/poliwhirl.jpg', 'img/pokemon/61.png', `3' 3''`, '44 lbs', `The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.`, ['poliwag'], ['poliwrath'], 'lvl 25', 61, true, true, true, false, false);

const poliwrath = new Pokemon('poliwrath', 'img/pokedex/poliwrath.jpg', 'img/pokemon/62.png', `4' 3''`, '119 lbs', `Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.`, ['poliwag', 'poliwhirl'], false, 'water stone', 62, true, true, true, false, false);

const abra = new Pokemon('abra', 'img/pokedex/abra.jpg', 'img/pokemon/63.png', `2' 11''`, '43 lbs', `Abra sleeps for 18 hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.`, false, ['kadabra', 'alakazam'], false, 63, true, true, true, false, false);

const kadabra = new Pokemon('kadabra', 'img/pokedex/kadabra.jpg', 'img/pokemon/64.png', `4' 3''`, '125 lbs', `Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon.`, ['abra'], ['alakazam'], 'lvl 16', 64, true, true, true, false, false);

const alakazam = new Pokemon('alakazam', 'img/pokedex/alakazam.jpg', 'img/pokemon/65.png', `4' 11''`, '106 lbs', `Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.`, ['abra', 'kadabra'], false, 'trade', 65, true, true, true, false, false);

const machop = new Pokemon('machop', 'img/pokedex/machop.jpg', 'img/pokemon/66.png', `2' 7''`, '43 lbs', `Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.`, false, ['kadabra', 'alakazam'], false, 66, true, true, true, false, false);

const machoke = new Pokemon('machoke', 'img/pokedex/machoke.jpg', 'img/pokemon/67.png', `4' 1''`, '155 lbs', `Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.`, ['machop'], ['machamp'], 'lvl 28', 67, true, true, true, false, false);

const machamp = new Pokemon('machamp', 'img/pokedex/machamp.jpg', 'img/pokemon/68.png', `5' 3''`, '287 lbs', `Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.`, ['machop', 'machoke'], false, 'trade', 68, true, true, true, false, false);

const bellsprout = new Pokemon('bellsprout', 'img/pokedex/bellsprout.jpg', 'img/pokemon/69.png', `2' 4''`, '9 lbs', `Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.`, false, ['weepinbell', 'victreebel'], false, 69, false, true, true, false, false);

const weepinbell = new Pokemon('weepinbell', 'img/pokedex/weepinbell.jpg', 'img/pokemon/70.png', `3' 3''`, '14 lbs', `Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.`, ['bellsprout'], ['victreebel'], 'lvl 21', 70, false, true, true, false, false);

const victreebel = new Pokemon('victreebel', 'img/pokedex/victreebel.jpg', 'img/pokemon/71.png', `5' 7''`, '34 lbs', `Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.`, ['bellsprout', 'weepinbell'], false, 'leaf stone', 71, false, true, true, false, false);

const tentacool = new Pokemon('tentacool', 'img/pokedex/tentacool.jpg', 'img/pokemon/72.png', `2' 11''`, '100 lbs', `Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.`, false, ['weepinbell'], false, 72, true, true, true, false, false);

const tentacruel = new Pokemon('tentacruel', 'img/pokedex/tentacruel.jpg', 'img/pokemon/73.png', `5' 3''`, '121 lbs', `Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.`, ['tentacool'], false, 'lvl 30', 73, true, true, true, false, false);

const geodude = new Pokemon('geodude', 'img/pokedex/geodude.jpg', 'img/pokemon/74.png', `1' 4''`, '44 lbs', `The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.`, false, ['graveler', 'golem'], false, 74, true, true, true, false, false);

const graveler = new Pokemon('graveler', 'img/pokedex/graveler.jpg', 'img/pokemon/75.png', `3' 3''`, '232 lbs', `Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.`, ['geodude'], ['golem'], 'lvl 25', 75, true, true, true, false, false);

const golem = new Pokemon('golem', 'img/pokedex/golem.jpg', 'img/pokemon/76.png', `4' 7''`, '622 lbs', `Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.`, ['geodude', 'graveler'], false, 'trade', 76, true, true, true, false, false);

const ponyta = new Pokemon('ponyta', 'img/pokedex/ponyta.jpg', 'img/pokemon/77.png', `3' 3''`, '66 lbs', `Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.`, false, ['rapidash'], false, 77, true, true, true, false, false);

const rapidash = new Pokemon('rapidash', 'img/pokedex/rapidash.jpg', 'img/pokemon/78.png', `5' 7''`, '209 lbs', `Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.`, ['ponyta'], false, 'lvl 40', 78, true, true, true, false, false);

const slowpoke = new Pokemon('slowpoke', 'img/pokedex/slowpoke.jpg', 'img/pokemon/79.png', `3' 11''`, '79 lbs', `Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.`, false, ['slowbro'], false, 79, true, true, true, false, false);

const slowbro = new Pokemon('slowbro', 'img/pokedex/slowbro.jpg', 'img/pokemon/80.png', `5' 3''`, '173 lbs', `Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.`, ['slowpoke'], false, 'lvl 37', 80, true, true, true, false, false);

const magnemite = new Pokemon('magnemite', 'img/pokedex/magnemite.jpg', 'img/pokemon/81.png', `1' 0''`, '13 lbs', `Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.`, false, ['magneton'], false, 81, true, true, true, false, false);

const magneton = new Pokemon('magneton', 'img/pokedex/magneton.jpg', 'img/pokemon/82.png', `3' 3''`, '132 lbs', `Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.`, ['magnemite'], false, 'lvl 30', 82, true, true, true, false, false);

const farfetchd = new Pokemon(`farfetch'd`, `img/pokedex/farfetch'd.jpg`, 'img/pokemon/83.png', `2' 7''`, '33 lbs', `Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.`, false, false, false, 83, true, true, true, false, false);

const doduo = new Pokemon('doduo', 'img/pokedex/doduo.jpg', 'img/pokemon/84.png', `4' 7''`, '86 lbs', `Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.`, false, ['dodrio'], false, 84, true, true, true, false, false);

const dodrio = new Pokemon('dodrio', 'img/pokedex/dodrio.jpg', 'img/pokemon/85.png', `5' 11''`, '188 lbs', `Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you.`, ['doduo'], false, 'lvl 31', 85, true, true, true, false, false);

const seel = new Pokemon('seel', 'img/pokedex/seel.jpg', 'img/pokemon/86.png', `3' 7''`, '198 lbs', `Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.`, false, ['dewgong'], false, 86, true, true, true, false, false);

const dewgong = new Pokemon('dewgong', 'img/pokedex/dewgong.jpg', 'img/pokemon/87.png', `5' 7''`, '265 lbs', `Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.`, ['seel'], false, 'lvl 34', 87, true, true, true, false, false);

const grimer = new Pokemon('grimer', 'img/pokedex/grimer.jpg', 'img/pokemon/88.png', `2' 11''`, '66 lbs', `Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.`, false, ['muk'], false, 88, true, true, true, false, false);

const muk = new Pokemon('muk', 'img/pokedex/muk.jpg', 'img/pokemon/89.png', `3' 11''`, '66 lbs', `From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.`, ['grimer'], false, 'lvl 38', 89, true, true, true, false, false);

const shellder = new Pokemon('shellder', 'img/pokedex/shellder.jpg', 'img/pokemon/90.png', `1' 0''`, '9 lbs', `At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.`, false, ['cloyster'], false, 90, true, true, true, false, false);

const cloyster = new Pokemon('cloyster', 'img/pokedex/cloyster.jpg', 'img/pokemon/91.png', `4' 11''`, '292 lbs', `Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.`, ['shellder'], false, 'water stone', 91, true, true, true, false, false);

const gastly = new Pokemon('gastly', 'img/pokedex/gastly.jpg', 'img/pokemon/92.png', `4' 3''`, '0.2 lbs', `Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.`, false, ['haunter', 'gengar'], false, 92, true, true, true, false, false);

const haunter = new Pokemon('haunter', 'img/pokedex/haunter.jpg', 'img/pokemon/93.png', `5' 3''`, '0.2 lbs', `Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.`, ['gastly'], ['gengar'], 'lvl 25', 93, true, true, true, false, false);

const gengar = new Pokemon('gengar', 'img/pokedex/gengar.jpg', 'img/pokemon/94.png', `4' 11''`, '89 lbs', `Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.`, ['gastly', 'haunter'], false, 'trade', 94, true, true, true, false, false);

const onix = new Pokemon('onix', 'img/pokedex/onix.jpg', 'img/pokemon/95.png', `28' 10''`, '463 lbs', `Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.`, false, false, false, 95, true, true, true, false, false);

const drowzee = new Pokemon('drowzee', 'img/pokedex/drowzee.jpg', 'img/pokemon/96.png', `3' 3''`, '71 lbs', `If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.`, false, ['hypno'], false, 96, true, true, true, false, false);

const hypno = new Pokemon('hypno', 'img/pokedex/hypno.jpg', 'img/pokemon/97.png', `5' 3''`, '167 lbs', `Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.`, ['drowzee'], false, 'lvl 26', 97, true, true, true, false, false);

const krabby = new Pokemon('krabby', 'img/pokedex/krabby.jpg', 'img/pokemon/98.png', `1' 4''`, '14 lbs', `Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.`, false, ['kingler'], false, 98, true, true, true, false, false);

const kingler = new Pokemon('kingler', 'img/pokedex/kingler.jpg', 'img/pokemon/99.png', `4' 3''`, '132 lbs', `Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.`, ['krabby'], false, 'lvl 28', 99, true, true, true, false, false);

const voltorb = new Pokemon('voltorb', 'img/pokedex/voltorb.jpg', 'img/pokemon/100.png', `1' 8''`, '23 lbs', `Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.`, false, ['electrode'], false, 100, true, true, true, false, false);

const electrode = new Pokemon('electrode', 'img/pokedex/electrode.jpg', 'img/pokemon/101.png', `3' 11''`, '147 lbs', `Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.`, ['voltorb'], false, 'lvl 30', 101, true, true, true, false, false);

const exeggcute = new Pokemon('exeggcute', 'img/pokedex/exeggcute.jpg', 'img/pokemon/102.png', `1' 4''`, '6 lbs', `This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.`, false, ['exeggutor'], false, 102, true, true, true, false, false);

const exeggutor = new Pokemon('exeggutor', 'img/pokedex/exeggutor.jpg', 'img/pokemon/103.png', `6' 7''`, '265 lbs', `Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.`, ['exeggcute'], false, 'leaf stone', 103, true, true, true, false, false);

const cubone = new Pokemon('cubone', 'img/pokedex/cubone.jpg', 'img/pokemon/104.png', `1' 4''`, '14 lbs', `Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.`, false, ['marowak'], false, 104, true, true, true, false, false);

const marowak = new Pokemon('marowak', 'img/pokedex/marowak.jpg', 'img/pokemon/105.png', `3' 3''`, '99 lbs', `Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.`, ['cubone'], false, 'lvl 28', 105, true, true, true, false, false);

const hitmonlee = new Pokemon('hitmonlee', 'img/pokedex/hitmonlee.jpg', 'img/pokemon/106.png', `4' 11''`, '110 lbs', `Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.`, false, false, false, 106, true, true, true, false, false);

const hitmonchan = new Pokemon('hitmonchan', 'img/pokedex/hitmonchan.jpg', 'img/pokemon/107.png', `4' 7''`, '111 lbs', `Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.`, false, false, false, 107, true, true, true, false, false);

const lickitung = new Pokemon('lickitung', 'img/pokedex/lickitung.jpg', 'img/pokemon/108.png', `3' 11'`, '144 lbs', `Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.`, false, false, false, 108, true, true, true, false, false);

const koffing = new Pokemon('koffing', 'img/pokedex/koffing.jpg', 'img/pokemon/109.png', `2' 0''`, '2 lbs', `If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.`, false, ['weezing'], false, 109, true, true, false, false, false);

const weezing = new Pokemon('weezing', 'img/pokedex/weezing.jpg', 'img/pokemon/110.png', `3' 11''`, '21 lbs', `Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.`, ['koffing'], false, 'lvl 35', 110, true, true, false, false, false);

const rhyhorn = new Pokemon('rhyhorn', 'img/pokedex/rhyhorn.jpg', 'img/pokemon/111.png', `3' 3''`, '254 lbs', `Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.`, false, ['rhydon'], false, 111, true, true, true, false, false);

const rhydon = new Pokemon('rhydon', 'img/pokedex/rhydon.jpg', 'img/pokemon/112.png', `6' 3''`, '265 lbs', `Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.`, ['rhyhorn'], false, 'lvl 42', 112, true, true, true, false, false);

const chansey = new Pokemon('chansey', 'img/pokedex/chansey.jpg', 'img/pokemon/113.png', `3' 7''`, '76 lbs', `Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.`, false, false, false, 113, true, true, true, false, false);

const tangela = new Pokemon('tangela', 'img/pokedex/tangela.jpg', 'img/pokemon/114.png', `3' 3''`, '77 lbs', `Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.`, false, false, false, 114, true, true, true, false, false);

const kangaskhan = new Pokemon('kangaskhan', 'img/pokedex/kangaskhan.jpg', 'img/pokemon/115.png', `7' 3''`, '176 lbs', `If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.`, false, false, false, 115, true, true, true, false, false);

const horsea = new Pokemon('horsea', 'img/pokedex/horsea.jpg', 'img/pokemon/116.png', `1' 4''`, '18 lbs', `Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.`, false, ['seadra'], false, 116, true, true, true, false, false);

const seadra = new Pokemon('seadra', 'img/pokedex/seadra.jpg', 'img/pokemon/117.png', `3' 11''`, '55 lbs', `Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.`, ['horsea'], false, 'lvl 32', 117, true, true, true, false, false);

const goldeen = new Pokemon('goldeen', 'img/pokedex/goldeen.jpg', 'img/pokemon/118.png', `2' 3''`, '33 lbs', `Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.`, false, ['seaking'], false, 118, true, true, true, false, false);

const seaking = new Pokemon('seaking', 'img/pokedex/seaking.jpg', 'img/pokemon/119.png', `4' 3''`, '86 lbs', `In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.`, ['goldeen'], false, 'lvl 33', 119, true, true, true, false, false);

const staryu = new Pokemon('staryu', 'img/pokedex/staryu.jpg', 'img/pokemon/120.png', `2' 7''`, '276 lbs', `Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.`, false, ['starmie'], false, 120, true, true, true, false, false);

const starmie = new Pokemon('starmie', 'img/pokedex/starmie.jpg', 'img/pokemon/121.png', `3' 7''`, '176 lbs', `Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea.`, ['staryu'], false, 'water stone', 121, true, true, true, false, false);

const mrMime = new Pokemon('mr. mime', 'img/pokedex/mr-mime.jpg', 'img/pokemon/122.png', `4' 3''`, '120 lbs', `Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.`, false, false, false, 122, true, true, true, false, false);

const scyther = new Pokemon('scyther', 'img/pokedex/scyther.jpg', 'img/pokemon/123.png', `4' 11''`, '123 lbs', `Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.`, false, false, false, 123, true, false, true, false, false);

const jynx = new Pokemon('jynx', 'img/pokedex/jynx.jpg', 'img/pokemon/124.png', `4' 7''`, '90 lbs', `Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.`, false, false, false, 124, true, true, false, false, false);

const electabuzz = new Pokemon('electabuzz', 'img/pokedex/electabuzz.jpg', 'img/pokemon/125.png', `3' 7''`, '66 lbs', `When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.`, false, false, false, 125, true, false, false, false, false);

const magmar = new Pokemon('magmar', 'img/pokedex/magmar.jpg', 'img/pokemon/126.png', `4' 3''`, '98 lbs', `In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.`, false, false, false, 126, false, true, false, false, false);

const pinsir = new Pokemon('pinsir', 'img/pokedex/pinsir.jpg', 'img/pokemon/127.png', `4' 1''`, '121 lbs', `Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.`, false, false, false, 127, false, true, true, false, false);

const tauros = new Pokemon('tauros', 'img/pokedex/tauros.jpg', 'img/pokemon/128.png', `4' 7''`, '195 lbs', `This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.`, false, false, false, 128, true, true, true, false, false);

const magikarp = new Pokemon('magikarp', 'img/pokedex/magikarp.jpg', 'img/pokemon/129.png', `2' 11''`, '22 lbs', `Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.`, false, ['gyarados'], false, 129, true, true, true, false, false);

const gyarados = new Pokemon('gyarados', 'img/pokedex/gyarados.jpg', 'img/pokemon/130.png', `21' 4''`, '518 lbs', `When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.`, ['magikarp'], false, 'lvl 20', 130, true, true, true, false, false);

const lapras = new Pokemon('lapras', 'img/pokedex/lapras.jpg', 'img/pokemon/131.png', `8' 2''`, '485 lbs', `People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.`, false, false, false, 131, true, true, true, false, false);

const ditto = new Pokemon('ditto', 'img/pokedex/ditto.jpg', 'img/pokemon/132.png', `1' 0''`, '9 lbs', `Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.`, false, false, false, 132, true, true, true, false, false);

const eevee = new Pokemon('eevee', 'img/pokedex/eevee.jpg', 'img/pokemon/133.png', `1' 0''`, '14 lbs', `Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.`, false, ['vaporeon', 'jolteon', 'flareon'], false, 133, true, true, true, false, false);

const vaporeon = new Pokemon('vaporeon', 'img/pokedex/vaporeon.jpg', 'img/pokemon/134.png', `3' 3''`, '64 lbs', `Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.`, ['eevee'], ['jolteon', 'flareon'], 'water stone', 134, true, true, true, false, false);

const jolteon = new Pokemon('jolteon', 'img/pokedex/jolteon.jpg', 'img/pokemon/135.png', `2' 7''`, '54 lbs', `Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.`, ['eevee', 'vaporeon'], ['flareon'], 'thunder stone', 135, true, true, true, false, false);

const flareon = new Pokemon('flareon', 'img/pokedex/flareon.jpg', 'img/pokemon/136.png', `2' 1''`, '55 lbs', `Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.`, ['eevee', 'vaporeon', 'jolteon'], false, 'fire stone', 136, true, true, true, false, false);

const porygon = new Pokemon('porygon', 'img/pokedex/porygon.jpg', 'img/pokemon/137.png', `2' 7''`, '80 lbs', `Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.`, false, false, false, 137, true, true, true, false, false);

const omanyte = new Pokemon('omanyte', 'img/pokedex/omanyte.jpg', 'img/pokemon/138.png', `1' 4''`, '17 lbs', `Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from Helix Fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.`, false, ['omastar'], false, 138, true, true, true, false, false);

const omastar = new Pokemon('omastar', 'img/pokedex/omastar.jpg', 'img/pokemon/139.png', `3' 3''`, '77 lbs', `Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.`, ['omanyte'], false, 'lvl 40', 139, true, true, true, false, false);

const kabuto = new Pokemon('kabuto', 'img/pokedex/kabuto.jpg', 'img/pokemon/140.png', `1' 8''`, '25 lbs', `Kabuto is a Pokémon that has been regenerated from a Dome Fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.`, false, ['kabutops'], false, 140, true, true, true, false, false);

const kabutops = new Pokemon('kabutops', 'img/pokedex/kabutops.jpg', 'img/pokemon/141.png', `4' 3''`, '89 lbs', `Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.`, ['kabuto'], false, 'lvl 40', 141, true, true, true, false, false);

const aerodactyl = new Pokemon('aerodactyl', 'img/pokedex/aerodactyl.jpg', 'img/pokemon/142.png', `5' 11''`, '130 lbs', `Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.`, false, false, false, 142, true, true, true, false, false);

const snorlax = new Pokemon('snorlax', 'img/pokedex/snorlax.jpg', 'img/pokemon/143.png', `6' 11''`, '1,014 lbs', `Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.`, false, false, false, 143, true, true, true, false, false);

const articuno = new Pokemon('articuno', 'img/pokedex/articuno.jpg', 'img/pokemon/144.png', `5' 7''`, '122 lbs', `Articuno is a Legendary Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.`, false, false, false, 144, true, true, true, false, false);

const zapdos = new Pokemon('zapdos', 'img/pokedex/zapdos.jpg', 'img/pokemon/145.png', `5' 3''`, '116 lbs', `Zapdos is a Legendary Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.`, false, false, false, 145, true, true, true, false, false);

const moltres = new Pokemon('moltres', 'img/pokedex/moltres.jpg', 'img/pokemon/146.png', `6' 7''`, '132 lbs', `Moltres is a Legendary Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.`, false, false, false, 146, true, true, true, false, false);

const dratini = new Pokemon('dratini', 'img/pokedex/dratini.jpg', 'img/pokemon/147.png', `5' 11''`, '7 lbs', `Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.`, false, ['dragonair', 'dragonite'], false, 147, true, true, true, false, false);

const dragonair = new Pokemon('dragonair', 'img/pokedex/dragonair.jpg', 'img/pokemon/148.png', `13' 1''`, '36 lbs', `Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.`, ['dratini'], ['dragonite'], 'lvl 30', 148, true, true, true, false, false);

const dragonite = new Pokemon('dragonite', 'img/pokedex/dragonite.jpg', 'img/pokemon/149.png', `7' 3''`, '463 lbs', `Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.`, ['dratini', 'dragonair'], false, 'lvl 55', 149, true, true, true, false, false);

const mewtwo = new Pokemon('mewtwo', 'img/pokedex/mewtwo.jpg', 'img/pokemon/150.png', `6' 7''`, '269 lbs', `Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.`, false, false, false, 150, true, true, true, false, false);

const mew = new Pokemon('mew', 'img/pokedex/mew.jpg', 'img/pokemon/151.png', `1' 4''`, '9 lbs', `Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.`, false, false, false, 151, true, true, true, false, false);


const pokemon = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactyl, snorlax, articuno, zapdos, moltres, dratini, dragonair, dragonite, mewtwo, mew];

const pokedexScreen = document.querySelector('.pokedex-screen');
const pokedex = document.querySelector('.pokedex');
const progress = document.querySelector('.progress');
const pokedexBtn = document.querySelector('.pokedex-btn');
const progressBtn = document.querySelector('.progress-btn');

//End of Pokemon - Start of code 

let myPokemon = JSON.parse(localStorage.getItem("myArray"));

if(myPokemon !== null){
    for(let i = 0; i < myPokemon.length; i++){
        pokemon[i].caught = myPokemon[i].caught;
        pokemon[i].seen = myPokemon[i].seen;
    }
}



// Pokedex / Progress toggle
pokedexBtn.addEventListener('click', () => {
    modeToggle(pokedexBtn, progressBtn, pokedex, progress, 'block');
})

progressBtn.addEventListener('click', () => {
    modeToggle(progressBtn, pokedexBtn, progress, pokedex, 'flex');
})

//If desktop, show both Pokedex and Progress
window.addEventListener('resize', () => {
    if(window.innerWidth > 1024){
        pokedex.style.display = 'block';
        progress.style.display = 'flex';
    } else {
        pokedex.style.display = 'block';
        progress.style.display = 'none';
    }
})

function modeToggle(aBtn, bBtn, a, b, style){
    if(bBtn.classList.contains('btn-active')){
        bBtn.classList.remove('btn-active');
        aBtn.classList.add('btn-active');
        b.style.display = 'none';
        a.style.display = style;
    }
}


// Progress 
buildProgress();
progressBar();

function buildProgress() {
    for(let i = 0; i < pokemon.length; i++){
        createPokemon(pokemon[i]);
    }
}

function progressBar(){
    const progressHeader = document.querySelector('.progress-header');
    clear(progressHeader);
    let seen = 0;
    let caught = 0;

    for(let i = 0; i < pokemon.length; i++) {
        if(pokemon[i].seen){
            seen++
        }

        if(pokemon[i].caught){
            caught++
        }
    }

    const seenElement = document.createElement('p');
    seenElement.textContent = `Seen: ${seen} / 151`;
    progressHeader.appendChild(seenElement);

    const caughtElement = document.createElement('p');
    caughtElement.textContent = `Caught: ${caught} / 151`;
    progressHeader.appendChild(caughtElement);


}

function createPokemon(pokemon) {
    const newPokemon = document.createElement('div');
    newPokemon.classList.add('pokemon');
    if(pokemon.caught){
        newPokemon.classList.add('pokemon-caught');
    }
    progress.appendChild(newPokemon);
    

    const pokemonNumber = document.createElement('p');
    pokemonNumber.textContent = `- ${pokemon.number} -`;
    newPokemon.appendChild(pokemonNumber);

    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${pokemon.altImg}`;
    pokemonImg.alt = `${pokemon.name}`;
    newPokemon.appendChild(pokemonImg);

    // Click Image causes it to show on Pokedex
    pokemonImg.addEventListener('click', () => {
        createPokedexResult(pokemon)
        modeToggle(pokedexBtn, progressBtn, pokedex, progress, 'block');
    })


    // Add H3 Element - Name to follow based on if seen or unseen
    const pokemonName = document.createElement('h3');
    newPokemon.appendChild(pokemonName);

    //Progress Button Container
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress-status');
    newPokemon.appendChild(progressDiv);

    // Create Seen Button
    const seenBtn = document.createElement('button');
    seenBtn.classList.add('seen-btn');
    if(pokemon.seen){
        seenBtn.innerHTML = `<img src="img/seen.png">`
        pokemonName.textContent = `${pokemon.name}`;
    } else {
        seenBtn.innerHTML = `<img src="img/unseen.png">`
        pokemonName.textContent = `??????`;
        
    }
    progressDiv.appendChild(seenBtn);

    //Activate the Pokemon has been seen
    seenBtn.addEventListener('click', () => {
        if(pokemon.seen){
            pokemon.seen = false;
            seenBtn.innerHTML = `<img src="img/unseen.png">`;
            pokemon.caught = false;
            caughtBtn.innerHTML = `<img src="img/uncaught-icon.png">`;
            newPokemon.classList.remove('pokemon-caught');
            pokemonName.textContent = `??????`;            
            progressBar();
            saveToLocal();
        } else {
            pokemon.seen = true;
            seenBtn.innerHTML = `<img src="img/seen.png">`;
            pokemonName.textContent = `${pokemon.name}`;
            progressBar();
            saveToLocal();
        }
    })

    // Create Caught Button
    const caughtBtn = document.createElement('button');
    caughtBtn.classList.add('caught-btn');
    if(pokemon.caught){
        caughtBtn.innerHTML = `<img src="img/caught-icon.png">`;
        newPokemon.classList.add('pokemon-caught');
    } else {
        caughtBtn.innerHTML = `<img src="img/uncaught-icon.png">`;
    }
    progressDiv.appendChild(caughtBtn);

    // Activate the Pokemon has been caught
    caughtBtn.addEventListener('click', () => {
        if(pokemon.caught) {
            // Change Status
            pokemon.caught = false;

            // Update Icon
            caughtBtn.innerHTML = `<img src="img/uncaught-icon.png">`;

            // Remove Classlist
            newPokemon.classList.remove('pokemon-caught');

            // Update Progress Bar
            progressBar();

            //Save to Local Drive
            saveToLocal();

        } else {
            pokemon.caught = true;
            caughtBtn.innerHTML = `<img src="img/caught-icon.png">`;
            pokemon.seen = true;
            seenBtn.innerHTML = `<img src="img/seen.png">`;
            newPokemon.classList.add('pokemon-caught');
            pokemonName.textContent = `${pokemon.name}`;
            progressBar();
            saveToLocal();
        }
    })
}






// Pokedex 
search();

// Search Form
function search() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input')
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let searchResults = [];
        let search = searchInput.value.toLowerCase();

        for(let i = 0; i < pokemon.length; i++){
            if(pokemon[i].name.includes(search) || pokemon[i].number == search){
                searchResults.push(pokemon[i])
            }
        }


        if(searchResults.length === 1){
            // If Single Result
            createPokedexResult(searchResults[0]);

        } else if (searchResults.length > 1){
            // If Multiple Result
            resultsList(searchResults);

        } else {
            // If No Result
            console.log(searchResults)
            console.log('No Results');
        }

        //Reset Input Form
        searchInput.value = ''
    })
}

function resultsList(array){
    clear(pokedexScreen);

    //Create list of Pokemon from search
    const resultsHeaderDiv = document.createElement('div');
    resultsHeaderDiv.classList.add('results-header');
    pokedexScreen.appendChild(resultsHeaderDiv);

    const resultsHeader = document.createElement('h3');
    resultsHeader.textContent = `${array.length} results found!`
    resultsHeaderDiv.appendChild(resultsHeader);
    
    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results');
    pokedexScreen.appendChild(resultsDiv);

    const resultsUl = document.createElement('ul');
    resultsDiv.appendChild(resultsUl);

    //For each Pokemon in the array - add a list item
    for(let i = 0; i < array.length; i++){
        const result = document.createElement('li');
        result.textContent = array[i].name;
        resultsUl.appendChild(result);

        //Clicking on a list item creates the result
        result.addEventListener('click', ()=> {
            createPokedexResult(array[i]);
        })
    }
}

function createPokedexResult(p){
    clear(pokedexScreen);
    let indexOf = pokemon.indexOf(p);
    
    // Create Pokemon search results
    const pokedexHeaderDiv = document.createElement('div');
    pokedexHeaderDiv.classList.add('pokedex-header');
    pokedexScreen.appendChild(pokedexHeaderDiv);

    const gameStatusDiv = document.createElement('div');
    gameStatusDiv.classList.add('game-status');
    pokedexHeaderDiv.appendChild(gameStatusDiv);

    //Pokemon Red
    const pokemonRedStatus = document.createElement('div');
    pokemonRedStatus.classList.add('pokemon-red');
    if(p.pokemonRed){
        pokemonRedStatus.style.backgroundColor = '#FF0000';
    } else {
        pokemonRedStatus.style.backgroundColor = '#aaaaaa';
    }
    gameStatusDiv.appendChild(pokemonRedStatus);

    //Pokemon Blue
    const pokemonBlueStatus = document.createElement('div');
    pokemonBlueStatus.classList.add('pokemon-blue');
    if(p.pokemonBlue){
        pokemonBlueStatus.style.backgroundColor = '#3B4CCA';
    } else {
        pokemonBlueStatus.style.backgroundColor = '#aaaaaa';
    }
    gameStatusDiv.appendChild(pokemonBlueStatus);

    //Pokemon Yellow
    const pokemonYellowStatus = document.createElement('div');
    pokemonYellowStatus.classList.add('pokemon-yellow');
    if(p.pokemonYellow){
        pokemonYellowStatus.style.backgroundColor = '#FFDE00';
    } else {
        pokemonYellowStatus.style.backgroundColor = '#aaaaaa';
    }
    gameStatusDiv.appendChild(pokemonYellowStatus);

    // Pokemon Number
    const pokemonNumberDiv = document.createElement('div');
    pokemonNumberDiv.classList.add('pokemon-number');
    pokedexHeaderDiv.appendChild(pokemonNumberDiv);

    const pokemonNumber = document.createElement('p');
    pokemonNumber.textContent = `- ${p.number} -`;
    pokemonNumberDiv.appendChild(pokemonNumber);

    const pokemonStatusDiv = document.createElement('div');
    pokemonStatusDiv.classList.add('pokemon-status');
    pokedexHeaderDiv.appendChild(pokemonStatusDiv);

    // Seen Status
    const seenStatus = document.createElement('img');
    if(p.seen) {
        seenStatus.src = 'img/seen.png';
        seenStatus.alt = 'Seen icon'
    } else {
        seenStatus.src = 'img/unseen.png';
        seenStatus.alt = 'Unseen icon'
    }
    pokemonStatusDiv.appendChild(seenStatus);

    // Caught Status
    const caughtStatus = document.createElement('img');
    if(p.caught){
        caughtStatus.src = 'img/caught-icon.png';
        caughtStatus.alt = 'Caught icon'
    } else {
        caughtStatus.src = 'img/uncaught-icon.png';
        caughtStatus.alt = 'Uncaught icon';
    }
    pokemonStatusDiv.appendChild(caughtStatus);
    
    // Pokemon Information Container
    const pokemonInformationDiv = document.createElement('div');
    pokemonInformationDiv.classList.add('pokemon-information');
    pokedexScreen.appendChild(pokemonInformationDiv);

    // Pokemon Image
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${p.img}`;
    pokemonImg.alt = `${p.name}`;
    pokemonInformationDiv.appendChild(pokemonImg);

    // Pokemon Name
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = `${p.name}`;
    pokemonInformationDiv.appendChild(pokemonName);
    
    //Pokemon Information - Height | Weight
    const pokemonDetails = document.createElement('p');
    pokemonDetails.textContent = `${p.height} | ${p.weight}`;
    pokemonInformationDiv.appendChild(pokemonDetails);

    // Pokemon Description
    const pokemonDescription = document.createElement('p');
    pokemonDescription.textContent = `${p.description}`;
    pokemonInformationDiv.appendChild(pokemonDescription);

    // Evolution Container
    const pokemonEvolutionDiv = document.createElement('div');
    pokemonEvolutionDiv.classList.add('pokemon-evolution');
    pokedexScreen.appendChild(pokemonEvolutionDiv);

    if(p.evolutionFrom || p.evolutionInto){
    //Checks for Pokemon this Pokemon evolves from
        if(p.evolutionFrom){
            let indexAdjustment = indexOf - p.evolutionFrom.length;
            for(let i = 0; i < p.evolutionFrom.length; i++){
                evolution(pokemonEvolutionDiv, pokemon[indexAdjustment]);
                indexAdjustment++
            }
        }

        //Adds its current form
        evolution(pokemonEvolutionDiv, p);


        //Checks for evolution - adds if valid
        if(p.evolutionInto){
            let indexAdjustment = indexOf;
            for(let i = 0; i < p.evolutionInto.length; i++){
                indexAdjustment++
                evolution(pokemonEvolutionDiv, pokemon[indexAdjustment]);
            }
        }
    }
}

//Builds every stage of the Pokemon
function evolution(container, pokemon){
    const newDiv = document.createElement('div');
    newDiv.classList.add('evolution');
    container.appendChild(newDiv);

    const newImg = document.createElement('img');
    newImg.src = pokemon.altImg;
    newImg.alt = pokemon.name;
    newDiv.appendChild(newImg);

    newDiv.addEventListener('click', () => {
        createPokedexResult(pokemon);
    })

    if(pokemon.evolutionTrigger){
        const newP = document.createElement('p');
        newP.textContent = pokemon.evolutionTrigger;
        newDiv.appendChild(newP);
    }
}

function clear(section){
    if(section.innerHTML !== ''){
        section.innerHTML = '';
    }
}

// Local Storage
function saveToLocal(){
    // let test = JSON.parse(localStorage.getItem("myArray"));
    let myArray_serialized = JSON.stringify(pokemon);
    localStorage.setItem("myArray", myArray_serialized); 
}
