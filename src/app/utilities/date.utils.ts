export const toDate = (dateString: string | Date): Date => {
  return new Date(dateString);
};

export const formatDate = (dateString: string | Date): string => {
  return new Intl.DateTimeFormat('pl-PL').format(toDate(dateString));
};

export const formatForHtmlDateInput = (
  dateString: string | Date | undefined
): string | undefined => {
  return dateString && toDate(dateString).toISOString().split('T')[0];
};
