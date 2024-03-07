export function ConvertToPersianNumber(englishNumber: string) {
  const englishToPersianMap: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  let ConvertedNumber = "";
  for (const digit of englishNumber) {
    if (englishToPersianMap[digit]) {
      ConvertedNumber += englishToPersianMap[digit];
    } else {
      ConvertedNumber += digit;
    }
  }

  return ConvertedNumber;
}

export function ConvertToEnglishNumber(persianNumber: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const englishNumber = persianNumber
    .split("")
    .map((char) => {
      const index = persianDigits.indexOf(char);
      return index !== -1 ? index.toString() : char;
    })
    .join("");

  return englishNumber;
}

export function ConvertNumber(text: string, lang: string) {
  const validRegex = /[۰-۹0-9,.-]+/g;

  const filteredText = text.replace(/[^۰-۹0-9,.-]/g, "");

  if (validRegex.test(filteredText)) {
    if (lang == "en") {
      return ConvertToEnglishNumber(filteredText);
    } else {
      return ConvertToPersianNumber(filteredText);
    }
  } else {
    return "";
  }
}

export function DeConvertNumber(text: string) {
  const filteredText = text.replace(/[^۰-۹0-9.]/g, "");

  return ConvertToEnglishNumber(filteredText);
}
