import { format } from 'date-fns';

export const transactionDate = date => {
  return format(new Date(date), 'Pp');
};

// 'dd/MM/yyyy, h:mm aa'
