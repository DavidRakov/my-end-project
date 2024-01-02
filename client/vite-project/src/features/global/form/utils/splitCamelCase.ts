const splitCamelCase = (word: string) =>
  word.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();

export default splitCamelCase;