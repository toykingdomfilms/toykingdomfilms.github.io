// generate-e.js
// Creates /e/<menuId>/index.html and /e/<menuId>/<cardId>/index.html

// After you done setting up menu data in data.js, run this script to automatically generate embed links.

// You'll need to have Node.js installed. Then, run:
// >node generate-e.js



// !! REPLACE WITH YOUR ACTUAL WEBSITE DOMAIN !!
const DOMAIN = 'https://toykingdomfilms.github.io';
const fs = require("fs");
const path = require("path");
const { menuItems } = require("./data.js");

const OUT = path.join(__dirname, "e");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

function esc(s) {
    return String(s || "").replace(/"/g, "&quot;");
}

function pickCardImage(c, menu) {
    if (c.cReference) return c.cReference;
    if (Array.isArray(c.cGallery) && c.cGallery.length > 0)
        return c.cGallery[0];
    if (c.image) return c.image;
    if (menu.image) return menu.image;
    return "";
}

// Builds the HTML with OG tags + redirect
function buildHTML({ title, desc, image, url, cardId, cardTitle, cardExcerpt, cardDetail, cardImage, cardMenu, twitterType = "summary" }) {
    return `<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#4b5499">
        <title>${cardTitle}</title>
        <link rel="icon" type="image" href="/icons/fav-icon.png">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" id="vp">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="ToykingdomFilms">
        <meta property="og:title" content="${esc(title)}">
        <meta property="og:description" content="${esc(desc)}">
        <meta property="og:image" content="${DOMAIN}/${esc(image)}">
        <meta property="og:url" content="${esc(url)}">
        <meta name="twitter:card" content="${twitterType}">
        <meta name="twitter:title" content="${esc(title)}">
        <meta name="twitter:description" content="${esc(desc)}">
        <meta name="twitter:image" content="${DOMAIN}/${esc(image)}">${cardId ? '<link rel="stylesheet" href="/style.css" type="text/css">' : ''}
    </head>
    <body>${cardId ? `
            <div id="detailView" class="detail-view preview-mode">
                <div id="detailViewHeader" class="detail-view-header">
                    <div class="card active" data-id="${esc(cardId)}">
                        <img class="thumb" src="/${esc(cardImage)}">
                        <div class="card-text">
                            <div class="card-text-title">${cardTitle}</div>${cardExcerpt ? `<div class="card-text-excerpt">${cardExcerpt}</div>` : ''}
                        </div>
                    </div>
                </div>
                <div id="detailViewContent" class="detail-view-content">
                    <div class="detail-section detail-main">
                        <small>Previewing "${cardTitle}" - <a href="${esc(url)}">See more in Wiki</a></small>
                        ${cardDetail}
                    </div>
                </div>
            </div>
            `
        : ''}
        <script>
             ${cardId ? '//' : ''}location.href = "${esc(url)}";
        </script>
    </body>
</html>`;
}

// HTML builder for character cards
function characterHTMLBuilder(c, html) {
    const species = c.species ? `Species: ${c.species}<br>` : '';
    const age = c.age ? `Age: ${c.age}<br>` : '';
    const gender = c.gender ? `Gender: ${c.gender}<br>` : '';
    const birthday = c.birthday ? `Birthday: ${c.birthday}<br>` : '';
    const nicknames = c.nicknames ? `Nickname: ${c.nicknames}<br>` : '';
    const refsheet = c.refsheet ? `<img src="${c.refsheet}" align="right" width="400px">` : '';
    // const cGallery = c.cGallery ? c.cGallery.length != 0 ? `<hr><h2>Picked Image:</h2>` + `<img src="${c.cGallery[0]}">` + `<br>` : '' : '';
    const gallery = c.gallery ? c.gallery.length != 0 ? `<hr><h2>Top Images:</h2><div class="imgContainer">` + c.gallery.slice(0, 3).map(imgSrc => `<img src="${imgSrc}">`).join('') + `</div><br>` : '' : '';
    const addOns = c.addOns ? `<br>${c.addOns}<br>` : '';
    const details = c.detail ? `<hr>${html}<br>` : '';

    html = `
        ${refsheet}
        ${species}
        ${age}
        ${gender}
        ${birthday}
        ${nicknames}
        ${addOns}
        ${details}
        ${gallery}
    `;
    return html;
}



menuItems.forEach(menu => {
    const menuId = menu.menuId;

    if (menu.invisible) {
        console.log("Skipped hidden menu:", menuId);
        return;
    }

    const menuFolder = path.join(OUT, menuId);
    if (!fs.existsSync(menuFolder)) fs.mkdirSync(menuFolder);

    const menuHTML = buildHTML({
        title: menu.title || menuId,
        desc: menu.subtitle || "View menu",
        image: menu.image || "",
        url: `/?m=${menuId}`
    });

    fs.writeFileSync(path.join(menuFolder, "index.html"), menuHTML, "utf8");
    console.log("Generated menu:", menuId);

    // CARDS
    if (menu.labels) {
       menu.labels.forEach(c => {
            if (!c.cardId || c.url || c.unclickable) return;

            const cardId = c.cardId;
            const cardFolder = path.join(menuFolder, cardId);
            if (!fs.existsSync(cardFolder)) fs.mkdirSync(cardFolder);

            // PICK BEST IMAGE
            const chosenImage = pickCardImage(c, menu);

            // CHARACTER DESCRIPTION
            let desc = c.subtitle || "View card";
            if (c.isCharacter) {
                const species = c.species ? `Species: ${c.species}<br>` : '';
            const age = c.age ? `Age: ${c.age}<br>` : '';
            const gender = c.gender ? `Gender: ${c.gender}<br>` : '';
            const birthday = c.birthday ? `Birthday: ${c.birthday}<br>` : '';
            const nicknames = c.nicknames ? `Nickname: ${c.nicknames}<br>` : '';

                desc = `${species}${age}${gender}${birthday}${nicknames}`.trim();
            }

             // CARD DETAIL
            let html = c.detail || '';
            if (c.isCharacter) html = characterHTMLBuilder(c, html)

            // HANDLE HTML IMAGES
            html = html.replaceAll('src="', 'src="/')


            // TWITTER CARD TYPE
            const twitterType = c.isCharacter
                ? "summary_large_image"
                : "summary";

            const cardHTML = buildHTML({
                title: c.title || cardId,
                desc,
                image: chosenImage,
                url: `/?m=${menuId}&i=${cardId}`,
                cardId: cardId,
                cardTitle: c.title,
                cardExcerpt: c.subtitle,
                cardDetail: `
                    <h1>
                        ${c.title}
                    </h1>
                    <hr>
                    ${html}`,
                cardImage: c.image,
                cardMenu: menuItems.find(m => m.labels.includes(c)).menuId,
                twitterType,
            });

            fs.writeFileSync(path.join(cardFolder, "index.html"), cardHTML, "utf8");
            console.log("Generated card:", `${menuId}/${cardId}`);
        });
    }
});

console.log("\nAll embed pages generated in /e/");