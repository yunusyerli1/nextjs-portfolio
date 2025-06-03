export function getYearsCount(startYear = 2019): number {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }