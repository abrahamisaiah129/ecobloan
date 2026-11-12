export function maskSensitiveValue(value: string, visibleCharacters = 4) {
  // const normalizedValue = value.trim();

  // if (!normalizedValue) {
  //   return "";
  // }

  // if (normalizedValue.length <= visibleCharacters) {
  //   return "*".repeat(normalizedValue.length);
  // }

  // return `${"*".repeat(normalizedValue.length - visibleCharacters)}${normalizedValue.slice(-visibleCharacters)}`;
  return value;
}
