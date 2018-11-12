export const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const MAJOR_SCALE_RULE = [2, 2, 1, 2, 2, 2, 1];
export const MAJOR_CHORD_RULE = [0, 4, 3];
export const MINOR_CHORD_RULE = [0, 3, 4];

export function ruleIncrementor(rule, limit) {
  let result = 0;

  for(let i = 0; i <= limit; i++) {
    result += rule[i];
  }

  return result;
}

export function getNoteIndex(note) {
  return NOTES.indexOf(note);
}

export function getNoteByIndex(noteIndex) {
  return NOTES[noteIndex];
}

export function createArray(length, defaultValue) {
  return Array.from({ length }, () => defaultValue);
}

export function toNoteText(array) {
  return array.map(element => getNoteByIndex(element));
}
