import {
  createArray,
  getNoteByIndex,
  getNoteIndex,
  NOTES,
  MAJOR_CHORD_RULE,
  MAJOR_SCALE_RULE,
  MINOR_CHORD_RULE,
  ruleIncrementor
} from './helpers';

export function Chord(name) {
  const isMajor = name.indexOf('m') === -1;
  const initialIndex = getNoteIndex(isMajor ? name : name.slice(0, -1));
  this.name = name;
  this.isMajor = isMajor;
  this.notes = computeChord(initialIndex, this.isMajor);
  this.scale = computeScale(initialIndex);
  this.clock = initialIndex + 1;
}

/* Object.prototype.toNoteText = function indexToNoteText(array) {
  return Object.prototype.valueOf.apply(this, arguments).map(element => getNoteByIndex(element));
}*/

function computeChord(noteIndex, isMajor) {
  let chord = createArray(MAJOR_CHORD_RULE.length, noteIndex);
  const chordRule = isMajor ? MAJOR_CHORD_RULE : MINOR_CHORD_RULE;
  let result = chord.map(
    (element, index) =>
      (element + ruleIncrementor(chordRule, index)) % NOTES.length
  );

  return result;
}

function computeScale(noteIndex) {
  return createArray(MAJOR_SCALE_RULE.length, noteIndex).map(
    (element, index) =>
      (element + ruleIncrementor(MAJOR_SCALE_RULE, index)) % NOTES.length
  );
}