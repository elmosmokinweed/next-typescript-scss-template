/**
 * Returns the plural form of the word, according to number. Input example: getPlural(2, 'секунда', 'секунды', 'секунд')
 * @param number - the number, which to word form should be changed
 * @returns the plural form of the word
 */
export const getPlural = (
  number: number,
  one: string,
  two: string,
  five: string
) => {
  let amount = Math.abs(number) % 100;
  if (amount >= 5 && amount <= 20) {
    return five;
  }
  amount %= 10;
  if (amount === 1) {
    return one;
  } else if (amount >= 2 && amount <= 4) {
    return two;
  }
  return five;
};
