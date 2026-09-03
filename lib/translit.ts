
const MULTI: [RegExp, string][] = [
  [/sh/g, "ш"], [/SH/g, "Ш"], [/Sh/g, "Ш"],
  [/ch/g, "ч"], [/CH/g, "Ч"], [/Ch/g, "Ч"],
  [/yo/g, "ё"], [/YO/g, "Ё"], [/Yo/g, "Ё"],
  [/yu/g, "ю"], [/YU/g, "Ю"], [/Yu/g, "Ю"],
  [/ya/g, "я"], [/YA/g, "Я"], [/Ya/g, "Я"],
  [/(g['ʻʼ`’])/g, "ғ"], [/(G['ʻʼ`’])/g, "Ғ"],
  [/(o['ʻʼ`’])/g, "ў"], [/(O['ʻʼ`’])/g, "Ў"],
  [/ng/g, "нг"], [/NG/g, "НГ"], [/Ng/g, "Нг"],
];

const SINGLE: Record<string, string> = {
  a: "а", A: "А", b: "б", B: "Б", d: "д", D: "Д",
  e: "е", E: "Е", f: "ф", F: "Ф", g: "г", G: "Г",
  h: "ҳ", H: "Ҳ", i: "и", I: "И", j: "ж", J: "Ж",
  k: "к", K: "К", l: "л", L: "Л", m: "м", M: "М",
  n: "н", N: "Н", o: "о", O: "О", p: "п", P: "П",
  q: "қ", Q: "Қ", r: "р", R: "Р", s: "с", S: "С",
  t: "т", T: "Т", u: "у", U: "У", v: "в", V: "В",
  x: "х", X: "Х", y: "й", Y: "Й", z: "з", Z: "З",
  "'": "ъ", "ʻ": "ў", // yolg'iz qolgan tutuq belgisi
};

export function toCyrillic(text: string): string {
  let result = text;
  for (const [re, rep] of MULTI) result = result.replace(re, rep);
  result = result.replace(/[a-zA-Z']/g, (ch) => SINGLE[ch] ?? ch);
  return result;
}