export function formatSubstring(str: string): string {

    if (!str) {
        return '';
    }

    // Split the string by spaces
    const words = str.split(' ');

    // Get the first and last words
    const firstWord = words[0];
    const lastWord = words[words.length - 1];

    // Extract the first letter of each and convert to uppercase
    const firstInitial = firstWord.charAt(0).toUpperCase();
    const lastInitial = lastWord.charAt(0).toUpperCase();

    // Return the concatenated initials
    return firstInitial + lastInitial;
}
