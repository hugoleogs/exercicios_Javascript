/*

Sort Names According to the Length of Their Last Names
Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

Examples
lastNameLensort([
  "Jennifer Figueroa",
  "Heather Mcgee",
  "Amanda Schwartz",
  "Nicole Yoder",
  "Melissa Hoffman"
]) ➞ ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
Notes
If last names are of the same length, sort alphabetically by last name.

URL: https://edabit.com/challenge/PcSNdgbfiDf9JYJjz

*/
Lista_names = ["Hitagi Senjougahara","Edward Elric","Light Yagami","Rintaro Okabe","Kurisu Makise"]
// ['Edward Elric', 'Rintaro Okabe', 'Kurisu Makise', 'Light Yagami', 'Hitagi Senjougahara']

function lastNameLensort(names) {

    return names.sort((x, y) => {

        const compara = (x.split(" ")[1]).length - (y.split(" ")[1]).length
        if (compara != 0) return compara
        return x.split(" ")[1].localeCompare(y.split(" ")[1])
    }
    )
}


console.log(lastNameLensort(Lista_names))