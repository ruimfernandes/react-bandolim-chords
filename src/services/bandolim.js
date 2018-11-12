import { getNoteIndex, NOTES, toNoteText } from './helpers';
const FRET_LIMIT = 12;
const MAX_FRET_SPACE = 5;
const STRINGS = ['G', 'D', 'A', 'E'];
const INDEXED_STRINGS = STRINGS.map(element => getNoteIndex(element));

export function Bandolim() {
  this.toFrets = function(chord) {
    console.log('chord ', toNoteText(chord));
    console.log('computeToFrets ', toNoteText(computeToFrets(chord)));
    console.log('computeToFrets ', computeToFrets(chord));
    const stringsNotes = computeToFrets(chord);
    //const fretsNumbers =
  };
  this.firstString = computeFullString(STRINGS[0]);
  this.secondString = computeFullString(STRINGS[1]);
  this.thirdString = computeFullString(STRINGS[2]);
  this.fourthString = computeFullString(STRINGS[3]);
}

function computeFullString(stringInitialNote) {
  let result = [];
  const numericNote = getNoteIndex(stringInitialNote);
  for (let i = 0; i < FRET_LIMIT; i++) {
    const currentNote = (numericNote + i) % NOTES.length;
    result.push(currentNote);
  }
  return result;
}

function computeToFrets(chord) {
  let result = [];
  STRINGS.forEach(string => {
    result.push(computeStringFret(getNoteIndex(string), chord));
  });

  return result;
}

function computeStringFret(numericNote, chord) {
  const nextNoteFret = (numericNote + 1) % NOTES.length;

  return chord.includes(numericNote)
    ? numericNote
    : computeStringFret(nextNoteFret, chord);
}

function transformToFretsNumbers(stringsChord) {}
