export function sontTableauxIdentiques(tab1: string[], tab2: string[]): boolean;
export function sontTableauxIdentiques(tab1: number[], tab2: number[]): boolean;
export function sontTableauxIdentiques(tab1:any[], tab2:any[]):boolean {
  if (tab1.length !== tab2.length) {
    return false;
  }

  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] !== tab2[i]) {
      return false;
    }
  }

  return true;
}
export function csvToJson(csv: string, separator = ','): any[] {
  let lines = csv.split('\n');
  let result = [];
  let headers = lines[0].split(separator);
  for (let i = 1; i < lines.length; i++) {
    let obj:Record<string, string> = {};
    let currentline = lines[i].split(separator);
    for (let j = 0; j < headers.length; j++) {
      obj[slugify(headers[j])] = currentline[j];
    }
    result.push(obj);
  }
  return result;
}
function slugify(text: string, separator = '_'): string {
  return text
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, ' ') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
}
