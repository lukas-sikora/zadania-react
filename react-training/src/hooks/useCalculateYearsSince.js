export const useCalculateYearsSince = (eventDate) => {
  const currentDate = new Date();
  const eventYear = new Date(eventDate).getFullYear();
  return currentDate.getFullYear() - eventYear;
};
