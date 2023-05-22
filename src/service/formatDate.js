import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export const formattedDate = date => {
  return format(new Date(date), 'MM/dd/yyyy, HH:mm a');
};

export const dateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
