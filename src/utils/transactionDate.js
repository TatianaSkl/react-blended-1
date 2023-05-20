import { format } from 'date-fns';

export const transactionDate = date => {
  return format(Date.parse(date), 'dd/MM/yyyy, h:mm aa');
};
