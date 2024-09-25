
// Function to find and return the entry for today's date
function getEntryForToday() {
    return [
      { date: "25/09/2024", word: "Serendipity", definition: "Finding something good without looking for it." },
      { date: "26/09/2024", word: "Ephemeral", definition: "Lasting for a very short time." },
      { date: "27/09/2024", word: "Petrichor", definition: "The pleasant smell after the first rain after a long period of warm, dry weather." },
      // Include all other entries here
      { date: "25/09/2024", word: "Serendipity", definition: "Finding something good without looking for it." },
      { date: "26/09/2024", word: "Ephemeral", definition: "Lasting for a very short time." },
      { date: "27/09/2024", word: "Petrichor", definition: "The pleasant smell after the first rain after a long period of warm, dry weather." },
      { date: "28/09/2024", word: "Ethereal", definition: "Extremely delicate and light in a way that seems not to be of this world." },
      { date: "29/09/2024", word: "Ineffable", definition: "Too great or extreme to be expressed or described in words." },
      { date: "30/09/2024", word: "abate", definition: "to reduce in amount, degree, intensity, etc.; lessen; diminish" },
      { date: "01/10/2024", word: "abrogate", definition: "to abolish by formal or official means; annul by an authoritative act; repeal" },
      { date: "02/10/2024", word: "abscond", definition: "to depart in a sudden and secret manner, especially to avoid capture and legal prosecution" },
      { date: "03/10/2024", word: "bellicose", definition: "inclined or eager to fight; aggressively hostile; belligerent; pugnacious" },
      { date: "04/10/2024", word: "capitulate", definition: "to surrender unconditionally or on stipulated terms" },
      { date: "05/10/2024", word: "defenestration", definition: "the act of throwing a person or thing out of a window" },
      { date: "06/10/2024", word: "effulgent", definition: "shining forth brilliantly; radiant" },
      { date: "07/10/2024", word: "funambulist", definition: "a tightrope walker" },
      { date: "08/10/2024", word: "halcyon", definition: "calm, peaceful, tranquil" },
      { date: "09/10/2024", word: "lachrymose", definition: "tending to cause tears; mournful" },
      { date: "10/10/2024", word: "mellifluous", definition: "sweetly or smoothly flowing; sweet-sounding" },
      { date: "11/10/2024", word: "nefarious", definition: "extremely wicked or villainous; iniquitous" },
      { date: "12/10/2024", word: "obfuscate", definition: "to confuse, bewilder, or stupefy" },
      { date: "13/10/2024", word: "pugnacious", definition: "inclined to quarrel or fight readily; quarrelsome; belligerent; combative" },
      { date: "14/10/2024", word: "quixotic", definition: "extravagantly chivalrous or romantic; visionary, impractical, or impracticable" },
      { date: "15/10/2024", word: "recalcitrant", definition: "resisting authority or control; not obedient or compliant; refractory" },
      { date: "16/10/2024", word: "susurrus", definition: "a soft murmuring or rustling sound; whisper" },
      { date: "17/10/2024", word: "truculent", definition: "fierce; cruel; savagely brutal" },
      { date: "18/10/2024", word: "verisimilitude", definition: "the appearance or semblance of truth; likelihood; probability" },
      { date: "19/10/2024", word: "winsome", definition: "sweetly or innocently charming; winning; engaging" },
      { date: "20/10/2024", word: "zephyr", definition: "a gentle, mild breeze" },
      { date: "21/10/2024", word: "abrogate", definition: "to abolish by formal or official means; annul by an authoritative act; repeal" },
      { date: "22/10/2024", word: "abscond", definition: "to depart in a sudden and secret manner, especially to avoid capture and legal prosecution" },
      { date: "23/10/2024", word: "bellicose", definition: "inclined or eager to fight; aggressively hostile; belligerent; pugnacious" },
      { date: "24/10/2024", word: "capitulate", definition: "to surrender unconditionally or on stipulated terms" },
      { date: "25/10/2024", word: "defenestration", definition: "the act of throwing a person or thing out of a window" },
      { date: "26/10/2024", word: "effulgent", definition: "shining forth brilliantly; radiant" },
      { date: "27/10/2024", word: "funambulist", definition: "a tightrope walker" },
      { date: "28/10/2024", word: "halcyon", definition: "calm, peaceful, tranquil" },
      { date: "29/10/2024", word: "lachrymose", definition: "tending to cause tears; mournful" },
      { date: "30/10/2024", word: "mellifluous", definition: "sweetly or smoothly flowing; sweet-sounding" },
      { date: "31/10/2024", word: "nefarious", definition: "extremely wicked or villainous; iniquitous" },
      { date: "01/11/2024", word: "obfuscate", definition: "to confuse, bewilder, or stupefy" },
      { date: "02/11/2024", word: "pugnacious", definition: "inclined to quarrel or fight readily; quarrelsome; belligerent; combative" },
      { date: "03/11/2024", word: "quixotic", definition: "extravagantly chivalrous or romantic; visionary, impractical, or impracticable" },
      { date: "04/11/2024", word: "recalcitrant", definition: "resisting authority or control; not obedient or compliant; refractory" },
      { date: "05/11/2024", word: "susurrus", definition: "a soft murmuring or rustling sound; whisper" },
      { date: "06/11/2024", word: "truculent", definition: "fierce; cruel; savagely brutal" },
      { date: "07/11/2024", word: "verisimilitude", definition: "the appearance or semblance of truth; likelihood; probability" },
      { date: "08/11/2024", word: "winsome", definition: "sweetly or innocently charming; winning; engaging" },
      { date: "09/11/2024", word: "zephyr", definition: "a gentle, mild breeze" },
      { date: "10/11/2024", word: "abstruse", definition: "hard to understand; recondite; esoteric" },
      { date: "11/11/2024", word: "apocryphal", definition: "of doubtful authorship or authenticity" },
      { date: "12/11/2024", word: "bloviate", definition: "to speak pompously or boastfully" },
      { date: "13/11/2024", word: "cachinnate", definition: "to laugh loudly or immoderately" },
      { date: "14/11/2024", word: "desultory", definition: "lacking in consistency, constancy, or visible order; disconnected; fitful" },
      { date: "15/11/2024", word: "ebullient", definition: "overflowing with fervor, enthusiasm, or excitement; high-spirited" },
      { date: "16/11/2024", word: "fustian", definition: "pompous or bombastic, as language" },
      { date: "17/11/2024", word: "garrulous", definition: "excessively talkative in a rambling, roundabout manner, especially about trivial matters" },
      { date: "18/11/2024", word: "hapless", definition: "unlucky; luckless; unfortunate" },
      { date: "19/11/2024", word: "ineffable", definition: "incapable of being expressed or described in words; inexpressible" },
      { date: "20/11/2024", word: "jejune", definition: "without interest or significance; dull; insipid" },
      { date: "21/11/2024", word: "kismet", definition: "fate; destiny" },
      { date: "22/11/2024", word: "languid", definition: "lacking in vigor or vitality; slack or slow" },
      { date: "23/11/2024", word: "mendacious", definition: "telling lies, especially habitually; dishonest; lying; untruthful" },
      { date: "24/11/2024", word: "nugatory", definition: "of no real value; trifling; worthless" },
      { date: "25/11/2024", word: "obstreperous", definition: "resisting control or restraint in a difficult manner; unruly" },
      { date: "26/11/2024", word: "perfidy", definition: "deliberate breach of faith or trust; faithlessness; treachery" },
      { date: "27/11/2024", word: "querulous", definition: "full of complaints; complaining" },
      { date: "28/11/2024", word: "recondite", definition: "dealing with very profound, difficult, or abstruse subject matter" },
      { date: "29/11/2024", word: "salubrious", definition: "favorable to or promoting health; healthful" },
      { date: "30/11/2024", word: "taciturn", definition: "inclined to silence; reserved in speech; reluctant to join in conversation" },
      { date: "01/12/2024", word: "umbrage", definition: "offense; annoyance; displeasure" },
      { date: "02/12/2024", word: "vexillology", definition: "the study of flags" },
      { date: "03/12/2024", word: "welter", definition: "to roll, toss, or heave, as waves or the sea" },
      { date: "04/12/2024", word: "xenophile", definition: "a person who is attracted to foreign peoples, cultures, or customs" },
      { date: "05/12/2024", word: "yare", definition: "quick; agile; lively" },
      { date: "06/12/2024", word: "zeitgeist", definition: "the spirit or mood of a particular period of history as shown by the ideas and beliefs of the time" },
      { date: "07/12/2024", word: "alacrity", definition: "cheerful readiness, promptness, or willingness" },
      { date: "08/12/2024", word: "bucolic", definition: "of, relating to, or suggesting an idyllic rural life" },
      { date: "09/12/2024", word: "cognizant", definition: "having knowledge or being aware of" },
      { date: "10/12/2024", word: "diaphanous", definition: "very sheer and light; almost completely transparent or translucent" },
      { date: "11/12/2024", word: "enervate", definition: "to deprive of force or strength; destroy the vigor of; weaken" },
      { date: "12/12/2024", word: "farrago", definition: "a confused mixture; hodgepodge; medley" },
      { date: "13/12/2024", word: "gossamer", definition: "something extremely light, flimsy, or delicate" },
      { date: "14/12/2024", word: "hobbledehoy", definition: "an awkward, gawky young fellow" },
      { date: "15/12/2024", word: "insouciant", definition: "free from concern, worry, or anxiety; carefree; nonchalant" },
      { date: "16/12/2024", word: "juxtapose", definition: "to place close together or side by side, especially for comparison or contrast" },
      { date: "17/12/2024", word: "kaleidoscopic", definition: "continually changing, extremely varied" },
      { date: "18/12/2024", word: "lachrymose", definition: "suggestive of or tending to cause tears; mournful" },
      { date: "19/12/2024", word: "miasma", definition: "a dangerous, foreboding, or deathlike influence or atmosphere" },
      { date: "20/12/2024", word: "nidificate", definition: "to build a nest" },
      { date: "21/12/2024", word: "obdurate", definition: "unmoved by persuasion, pity, or tender feelings; stubborn; unyielding" },
      { date: "22/12/2024", word: "palimpsest", definition: "a manuscript or piece of writing material on which the original writing has been effaced to make room for later writing but of which traces remain" },
      { date: "23/12/2024", word: "pavonine", definition: "of or like a peacock" },
      { date: "24/12/2024", word: "raconteur", definition: "a person who is skilled in relating stories and anecdotes interestingly" },
      { date: "25/12/2024", word: "serendipity", definition: "an aptitude for making desirable discoveries by accident" },
      { date: "26/12/2024", word: "susurration", definition: "a soft murmur; whisper" },
      { date: "27/12/2024", word: "tatterdemalion", definition: "a person in tattered clothing; a shabby person" },
      { date: "28/12/2024", word: "ululate", definition: "to howl, as a dog or a wolf; hoot, as an owl" },
      { date: "29/12/2024", word: "vicissitude", definition: "a change or variation occurring in the course of something" },
      { date: "30/12/2024", word: "widdershins", definition: "in a direction contrary to the sun's course, considered as unlucky; counterclockwise" },
      { date: "31/12/2024", word: "xanthous", definition: "yellow or yellowish" },
      { date: "01/01/2025", word: "yonderly", definition: "mentally or emotionally distant; absent-minded" },
      { date: "02/01/2025", word: "zephyr", definition: "a gentle, mild breeze" },

      { date: "02/01/2025", word: "Zephyr", definition: "A gentle, mild breeze" }
    ].find(function(item) {
      return item.date === (('0' + new Date().getDate()).slice(-2) + '/' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '/' + new Date().getFullYear());
    }) || "No entry found for today's date.";
  }
  

  
const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');

function displayWord() {
    const randomWord = getEntryForToday();
    wordElement.textContent = randomWord.word;
    definitionElement.textContent = randomWord.definition;
}

// Display the first word when the page loads
displayWord();