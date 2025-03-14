// mplement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

interface String {
  // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  const regex: RegExp = /^[0-9]$/;
  return regex.test(this.toString());
};
