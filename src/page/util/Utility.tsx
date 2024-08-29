export const capitalizeName = (name: string | undefined) => {
  if (name === undefined) return "";
  return name
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string by spaces into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the array back into a string
};
