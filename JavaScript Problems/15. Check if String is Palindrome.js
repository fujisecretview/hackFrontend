// Write a function isPalindrome(str) that checks whether a string reads the same forward and backward.
// Ignore letter case, spaces, and punctuation.

function isPalindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters.
  const normalized = str
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, '');
  // Compare the normalized string with its reverse.
  return normalized === normalized.split('').reverse().join('');
}
