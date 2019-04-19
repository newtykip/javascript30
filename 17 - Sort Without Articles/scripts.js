const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

/*
            =============================================
            ================ MY SOLUTION ================
            =============================================

            function removeArticles(band) {
                words = band.split(" ");
                if (words.length <= 1) return band;
                if (words[0] == 'a' || words[0] == 'the' || words[0] == 'an')
                    return words.splice(1).join(" ");
                return band;
            }

            const sortedBands = bands.sort((a, b) => {
                const newA = a.toLowerCase();
                const newB = b.toLowerCase();

                if (removeArticles(newA) > removeArticles(newB)) return 1;
                else return -1;
            });

            console.log(sortedBands);

            */

/* ==========================================
            =============== WES' SOLUTION ===============
            ========================================== */

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands
	.map(band => `<li>${band}</li>`)
	.join('');
