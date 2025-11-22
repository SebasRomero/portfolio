export function calculateAge(): number {
  const birth = new Date(2001, 7, 16);
  var diff_ms = Date.now() - birth.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
