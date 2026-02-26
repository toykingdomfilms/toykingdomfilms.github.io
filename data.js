/* -------------------------- WEBSITE MENU DATA -------------------------- */
// only edit this file, it contains all the data of the website.
// tip: press ctrl+f on your keyboard to navigate around easily!

// Metadata
const lastUpdated = '2026-2-24';
const version = '1.0.0';




// Orbit data (categories)

// You can assign each orbit a name and description here.
// Currently only appear on SIMPLE_MODE

// orbitData attributes:
// orbit: int            - which orbit id these attributes apply to
// title: string         - the title of this orbit
// desc: string          - the description of this orbit
// orbitNum: int         - the actual orbit layer which determine how far it is from the center. defaults to orbit
orbitData = [
    {
        orbit: 1,
        title: "Characters",
        desc: "Character collections",
    },
    {
        orbit: 2,
        title: "World",
        desc: "Worldbuilding lore",
    },
    {
        orbit: 4,
        title: "Others",
        desc: "Miscellanous",
    },
];




// Main menu data array

// menu attributes:
// menuId: string           - REQUIRED: unique identifier for the menu (alphanumeric, no spaces)
// title: string            - menu name and title
// subtitle: string         - short description of menu
// showTitle: bool          - show name in orbit?
// orbit: float             - orbit id and default layer placement
// image: string            - path to the menu thumbnail image. optional
// color: string            - CSS color of menu. optional
// scale: float             - if set, modify the menu button scale
// hidden: bool             - if set, hide menu from orbit (accessible via links only)
// invisible: bool          - if set, exclude from search
// labels: array            - cards inside this menu. optional. if a menu has only one card it'll open that automatically

// card attributes:
// cardId: string           - unique identifier for the card (alphanumeric, no spaces). if unset, this becomes a separator
// title: string            - card title
// subtitle: string         - short description / excerpt of card
// detail: string           - the HTML contents of this card
// image: string            - path to the card thumbnail image. optional
// url: string              - if set, this card becomes a URL-type card
// unclickable: bool        - if set, this card becomes unclickable
// blank: bool              - if set, make this card textless (image-only)
// banner: bool             - if set, this card becomes a banner-type card
// linkId: string           - if set as the only attribute, this card links to another menu (menuId)
// reference: string        - if set as the only attribute, this card copies another card (menuId:cardId)
// isCharacter: bool        - if set, this is a character card
// cSpecies: string         - the character species. optional
// cAge: string             - the character age. optional
// cGender: string          - the character gender. optional
// cBirthday: string        - the character birthday. optional
// cNicknames: string       - the character nicknames. optional
// cAddOns: string          - extra HTML put above the reference art of the character. optional
// cReference: string       - path to the character reference art. optional
// cGallery: array          - array of path to character images. optional
// cardParentId: string     - DEV ONLY: contains the automatically-assigned menuId of this card
menuItems = [
    // Orbit 1
    {   //TOTS
        orbit: 1,
        menuId: 'trippytots',
        title: 'TOTS',
        subtitle: '',
        image: 'icons/heart.png',
        color: 'var(--color-6)',
        scale: 1,
        hidden: true,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About TOTS',
                detail: `
                        <h2>Trivia</h2>
                        <ul>
                            <li>Cutetuzi is a symbol of the word famous, known to her bow.</li>
                            <li>TOTS babies did not play before. Babies just bring toys and that made them buy toys.</li>
                        </ul>
                `,
                banner: true,
                image: 'icons/heart.png'
            },
            { linkId: 'tots-main' },
            { linkId: 'tots-kids' },
            { linkId: 'tots-classmates' },
            { linkId: 'tots-employees' },
            { linkId: 'tots-misc' },
            { linkId: 'tots-antagonists' },
        ]
    },
    {
        title: 'Main',
        menuId: 'tots-main',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
    {
        title: 'Kids',
        menuId: 'tots-kids',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
    {
        title: 'Classmates',
        menuId: 'tots-classmates',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
    {
        title: 'Employees',
        menuId: 'tots-employees',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
    {
        title: 'Miscellanous',
        menuId: 'tots-misc',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
    {
        title: 'Antagonists',
        menuId: 'tots-antagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'trippytots',
        labels: [
                ], 
    },
     {   // Crochet Collection
        orbit: 1,
        menuId: 'collection',
        title: 'Collection',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-1)',
        scale: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Collection',
                detail: `
                    This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.
                `,
                banner: true,
                image: 'images/temp2.png'
            },
            { title: 'Animals' },
            { linkId: 'puppyplanet' },
            { linkId: 'cats' },
            { linkId: 'fruityfrogs' },
            { title: 'Food' },
            { linkId: 'fruitcubes' },
            { title: 'Vehicles' },
            { linkId: 'cafecars' },
            { linkId: 'racecars' },
                ], 
    },
    {
        title: 'Puppy Planet',
        menuId: 'puppyplanet',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-11)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {
        title: 'Cats',
        menuId: 'cats',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-6)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {
        title: 'Fruity Frogs',
        menuId: 'fruityfrogs',
        subtitle: '',
        image: 'icons/frog.png',
        color: 'var(--color-12)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {
        title: 'Fruit Cubes',
        menuId: 'fruitcubes',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-14)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {
        title: 'Café Cars',
        menuId: 'cafecars',
        subtitle: '',
        image: 'icons/coffee.png',
        color: 'var(--color-13)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {
        title: 'Race Cars',
        menuId: 'racecars',
        subtitle: '',
        image: 'icons/race-flag.png',
        color: 'var(--color-4)',
        hidden: true,
        parent: 'collection',
        labels: [
                ], 
    },
    {   //SGF
        orbit: 1,
        menuId: 'supergoldenflash',
        title: 'Super Golden Flash',
        subtitle: 'SGF powerlist',
        image: 'icons/lightning-bolt-yellow.png',
        color: 'var(--color-9)',
        scale: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Super Golden Flash',
                detail: `
                    <h2>Theme</h2>
                    <ul>
                    <li><b>Original:</b> Regular/Ground/Insects/Disabillity/Water/Trick or Treat/Random/Food</li><br>
                    <li><b>Aesthetic:</b> Color changing/Glowing/Glitter/Mystical/Snow/Space</li><br>
                    <li><b>Leaders:</b> Coleader (Irregular)/Nathan's 8 special assistants</li><br>
                    <li><b>Careers:</b> Detective/Career</li><br>
                    <li><b>The Holidays:</b> Valentines/Easter/Halloween (mostly trick or treat)/Christmas</li><br>
                    </ul>
                `,
                banner: true,
                image: 'icons/lightning-bolt-yellow.png'
            },
            {
                title: 'SGF',
                subtitle: '',
            },
            { linkId: 'sgf1' },
            { linkId: 'sgf2' },
            { linkId: 'sgf3' },
            { linkId: 'sgf4' },
            {
                title: 'Helpers',
                subtitle: '',
            },
            { linkId: 'helpers1' },
            { linkId: 'helpers2' },
            { linkId: 'helpers3' },
            {
                title: 'No Owner',
                subtitle: ''
            },
            { reference: 'blog:452023' },
        ]
    },
    {
        title: '1',
        menuId: 'sgf1',
        subtitle: '',
        image: 'icons/lightning-bolt.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '2',
        menuId: 'sgf2',
        subtitle: '',
        image: 'icons/lightning-bolt.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '3',
        menuId: 'sgf3',
        subtitle: '',
        image: 'icons/lightning-bolt.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '4',
        menuId: 'sgf4',
        subtitle: '',
        image: 'icons/lightning-bolt.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '1',
        menuId: 'helpers1',
        subtitle: '',
        image: 'icons/plug.png',
        color: 'var(--color-9)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '2',
        menuId: 'helpers2',
        subtitle: '',
        image: 'icons/plug.png',
        color: 'var(--color-9)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: '3',
        menuId: 'helpers3',
        subtitle: '',
        image: 'icons/plug.png',
        color: 'var(--color-9)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {
        title: 'Antagonists',
        menuId: 'sgf-antagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'supergoldenflash',
        labels: [
                
                ], 
    },
    {   //Innova
        orbit: 1,
        menuId: 'innovaa',
        title: 'Innova',
        subtitle: '',
        image: 'icons/car-side.png',
        color: 'var(--color-7)',
        scale: 1,
        hidden: true,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Innova',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'icons/car-side.png'
            },
            { linkId: 'innova-protagonists' },
            { linkId: 'innova-Rlabs' },
            { linkId: 'innova-antagonists' },
        ]
    },
    {
        title: 'Protagonists',
        menuId: 'innova-protagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-7)',
        hidden: true,
        parent: 'innovaa',
        labels: [
                ], 
    },
    { 
        title: 'R Labs',
        menuId: 'innova-Rlabs',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-7)',
        hidden: true,
        parent: 'innovaa',
        labels: [
                ], 
    },
    {
        title: 'Antagonists',
        menuId: 'innova-antagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-7)',
        hidden: true,
        parent: 'innovaa',
        labels: [
                ], 
    },
    {   //Benjamin
        orbit: 1,
        menuId: 'benjaminn',
        title: 'Benjamin',
        subtitle: '',
        image: 'icons/taxi.png',
        color: 'var(--color-8)',
        scale: 1,
        hidden: true,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Benjamin',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'icons/taxi.png'
            },
            { linkId: 'benjamin-protagonists' },
            { linkId: 'benjamin-antagonists' },
        ]
    },
    {
        title: 'Protagonists',
        menuId: 'benjamin-protagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'benjaminn',
        labels: [
                ], 
    },
    {
        title: 'Antagonists',
        menuId: 'benjamin-antagonists',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-8)',
        hidden: true,
        parent: 'benjaminn',
        labels: [
                ], 
    },
    {   // Filmy Kingdom
        orbit: 1,
        menuId: 'filmykingdom',
        title: 'Filmy Kingdom',
        subtitle: '',
        image: 'icons/crown.png',
        color: 'var(--color-4)',
        scale: 1,
        hidden: true,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Filmy Kingdom',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'icons/crown.png'
            },
            { linkId: 'space2go' },
            { linkId: 'kingdomunite' },
        ]
    },
    {
        title: 'Space2Go',
        menuId: 'space2go',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-3)',
        hidden: true,
        parent: 'filmykingdom',
        labels: [
                ], 
    },
    {
        title: 'Kingdom Unite',
        menuId: 'kingdomunite',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-5)',
        hidden: true,
        parent: 'filmykingdom',
        labels: [
                ], 
    },
    // Orbit 2
    {   // Companies
        orbit: 2,
        menuId: 'companies',
        title: 'Companies',
        subtitle: '',
        image: 'icons/companies.png',
        color: 'var(--color-10)',
        scale: 1,
        labels: [
            {
                cardId: 'thinkingMonkey',
                title: 'Thinking Monkey',
                subtitle: '',

                isCharacter: true, 
                cSpecies: 'Monkey',
                cAge: 'unknown',
                cGender: 'male',
                cBirthday: 'mm/dd/yyyy',
                cNicknames: '',
                cAddOns: `Source: <a href="https://knowyourmeme.com/memes/thinking-monkey">knowyourmeme.com</a>`,
                cReference: 'images/r/thinking-monkey-r.jpg',
                cGallery: [
                   'images/r/thinking-monkey-r.jpg',
                   'images/r/thinking-monkey-r.jpg',
                   'images/r/thinking-monkey-r.jpg',
                   'images/r/thinking-monkey-r.jpg',
                   'images/r/thinking-monkey-r.jpg',
                   'images/r/thinking-monkey-r.jpg',
                    ],
                detail: `
                    <span style="border-left: 6px solid var(--white); padding-right: 8px"></span><span> The only limit to our realization of tomorrow is our doubts of today.</span><br> 
                    <span style="border-left: 6px solid var(--white); padding-right: 8px"></span>— person <br><br>
                    Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something. The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something. The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after 2020.
                    <h2>Appearance</h2>
                    Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something. The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something. The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after 2020.
                    <hr> 
                    <h2>Personality</h2>
                    Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something. The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something. The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after 2020.
                    <hr> 
                    <h2>History</h2>
                    Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something. The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something. The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after 2020. <br><br>
                    Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something. The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something. The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after 2020.
                    <hr>
                    <h2>Abilities</h2>
                    <ul>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    </ul>
                    <hr> 
                    <h2>Trivia</h2>
                    <ul>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    <li>test trivia lalalalallalalalalalaaaaa</li>
                    </ul> 
                    `,
                cPositive: [
                    {
                        cardId: 'companies:thinkingMonkey',
                        relation: 'caption'
                    },
                ],
                cNegative: [
                    {
                        cardId: 'companies:thinkingMonkey',
                        relation: 'caption'
                    },
                ],
                image: 'images/i/thinking-monkey-i.jpg'
            },
            { linkId: 'kinetics' },
                ], 
    },
    {
        title: 'Kinetics',
        menuId: 'kinetics',
        subtitle: '',
        image: 'images/temp2.png',
        color: 'var(--color-15)',
        hidden: true,
        parent: 'companies',
        labels: [
                ], 
    },

    // Orbit 3
    {   // Blog
        orbit: 4,
        title: 'Blog',
        menuId: 'blog',
        subtitle: 'archive',
        image: 'icons/blog.png',
        color: 'var(--color-3)',
        scale: 1.5,
        labels: [
            {
                cardId: 'webinfo',
                title: ``,
                subtitle: `
                    Updated: ${lastUpdated}<br>
                    Version: ${version}<br><br>
                    <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                    <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                    <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                    <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div><br>
                    <a href="https://github.com/blurplebun/omniversetemp.github.io" target="_blank">Code by Artifyber</a>
                        `,
                unclickable: true,
            },
            {
                cardId: 'todolist',
                title: 'To do List',
                subtitle: `By Admin  • 2026-2-17 <br>Updated: 2026-2-20`,
                detail: `
                    <h2>High priority</h2>
                    <ul>
                        <li>Add all character info</li>
                    </ul>
                    <h2>Mid priority</h2>
                    <ul>
                        <li>Move all character info to a mini infobox</li>
                    </ul>
                    <h2>Low priority</h2>
                    <ul>
                        <li>Add random generators</li>
                        <li>Make a homepage</li>
                        <li>Make a list of crochet wips and the abillity to add new ones</li>
                    </ul>
                        `,
            },
            {
                cardId: '2222023',
                title: '2nd Dollhouse Advent',
                subtitle: 'By Sami  • 2023-2-22',
                detail: `
                    First at 12:03, we eat in the restaurant. There are other people but, (when Sami is rude) they run away! So we decided eat there ourselves instead. It might be fun for us only, though. 
                    <br><br>
                    Then at 2:04, when go to rocky mountain. We roasted marshmallows on the campfire and did a short camping session.  We didn't walk there unlike usual because we might run out of time. Then, we take 4 pictures there. We've gone here 3 times before & it was so fun!
                    <br><br>
                    Next, we go to Fluttershy's Garden, and played one game there. There, we also did a bit of strolling. Taked only one ugly picture because of lighting conditions. But its fun! Went here two times, but, many other people also went here!
                    <br><br>
                    After that, we go to Tiffy National Park to do some snow activities. Sledding, Skiing, snow ball fighting, everything you could imagine! You see, we had lots of fun the we almost never go to the clubhouse! Theres a big fire that actually went off!! Taked 4!
                    <br><br>
                    Next, we go to do some bonding with the pets, but we also played with a kite and we saw an owl! We did not own it and ate lunch.
                    <br><br>
                    We did 4 wallpapers for dollhouse. We packed our things away. We also did a celebration! Then, we spend time in the clubhouse bonding, we played 3 games. We ate dinner (and some of us ate midnight snack and) prepared for bed. The next day, for the last time we said bye!  Then we ate snack packed our bag and go home.
                `
            },
            {
                cardId: '452023',
                title: 'Kidnap Cases: A TOTS Story',
                subtitle: 'By Tiggy  • 2023-4-5',
                detail: `
                    <img src="images/boo-running.jpg" align="right" height="400px">
                    My baby brother is in danger. Boo may not seem in danger. This is a image of Boo running away on the sidewalk. This image was token by the kidnapper. The person who find kidnapper ask to give any images if he took any pictures and this is the result. Boo was injured badly. He had marks of sharp mirrors, his asma became worse, and he was weak. But I am thankful he did not die. The kidnapper do take care of Boo but made him injured too. I've been worried because it took so long before I see Boo. Actually Boo was 6 months in that time. 7 months when we found him.
                    <br><br>
                    The person who found Boo took Boo to the orphanage. But as soon saw our post. He went to the orphanage showing the post. Before he chatted about Boo, he sent him in the hospital. Then after he feels well, he chatted he found Boo. That's why it might took long before we saw him. It took 10 days with the kidnapper, and 14 days in the hospital. Boo cried when he saw the kidnapper, the person who found him, and the mother who took care of him. Speaking of mother who took care of him it took 6 days before he discovered this was our child.
                    <br><br>
                    We finally saw him again and give thanks to the person who find Boo. And the kidnapper was in prison. Actually they might be days that you notice we skipped, actually those days are mysterious, but I actually think that those moments might be more moments with the kidnapper. This is why you should be thankful. I love my baby brother Boo.
                        `
            },
            {
                cardId: '12172023',
                title: 'Adventure Mischiefs',
                subtitle: 'By Cute Doggie  • 2023-12-17',
                detail: `
                    <h2>The Begginning</h2>
                    Hello guys, do you want to see a whole adventure that brings joy? Hi I am Cute Doggie and this is my pal Grace Tuzi. Today is the beginning of the adventure and you're invited. You'll be seeing our bravery and the things we gone through.
                    <br><br>
                    It wasn't even sunrise when I woke up and found a treasure map under my bed. <br><br>
                    "Looks like a new adventure is driving my curiosity again," I said. <br><br>
                    The map has drawings of different treasures sparkling in the treasure chest. <br><br>
                    "I think this is the beginning of my adventure." I didn't take a moment to think about it when the sun rises up. I had to eat breakfast. I pulled out my pajamas and went down stairs. A secret note was on the breakfast table. I read the note:
                    <br><br>
                    "Your adventure starts now! You can start discovering the water. Well it's up to you. Start your Adventure!"<br><br>
                    Hmm, I was thinking, a new adventure in the sea? Aha! Perfect, a treasure map! That will be a good start for a sea adventure.
                    <h2>Treasure Key</h2>
                    Finally, the day soon arrived when me and my pal will go for a sea adventure. You know how tough I sailed in the sea? The waves keep flopping over our boat. We had to be brave. It took some time to arrive in the island. In front of our eyes was that huge treasure chest waiting in the sand. 
                    <br><br>
                    "I got to get you now," I said hoping. I grabbed the chest and pulled it with a wink. Nothing happened. <br><br>
                    Grace Tuzi laughed. "No key? "<br><br>
                    "This gotta have a key." I knew this chest gotta have a key. So I grasped the shovel nearby and digged as fast as I can. 
                    <br><br>
                    "No clue for the key," I said after searching for long. When I was about to leave, a scream screeched my ear. <br><br>
                    It was Grace Tuzi yelling, "The key is waiting in the tree come get it!" <br><br>
                    We opened the chest and kept the coins. We sailed back home.
                    <h2>Charming Gems</h2>
                    Finally, the day soon arrived when me and (i'll finish this up soon)
                `
            },
        ]
    },
    {   // Random
        orbit: 4,
        title: 'Random Character',
        menuId: 'random',
        image: 'icons/random.png',
        color: 'var(--color-2)',
        scale: 1.5,
        invisible: true,
        labels: [],
    },
];






// Special search responses
specialSearch = [];










/*
 * Generate placeholder cards for testing
 * @param {number} n - Number of placeholder cards to generate
 * @param {string} prefix - Prefix for card titles
 * @returns {Array} Array of placeholder card objects
 */
function generateLabels(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        subtitle: `This is a short placeholder subtitle for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = { menuItems };
}