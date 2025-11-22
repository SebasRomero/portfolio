export function calculateAge(): number {
  const birth = new Date(2001, 7, 16);
  // Calculate the difference in milliseconds between the current date and the provided date of birth
  var diff_ms = Date.now() - birth.getTime();
  // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
  var age_dt = new Date(diff_ms);

  // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
