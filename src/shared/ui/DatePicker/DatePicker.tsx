import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
} from 'date-fns';
import { useState } from 'react';
import { classnames } from 'shared/utils/classnames/classnames';
import classes from './DatePicker.module.scss';
import { Day } from './ui/Day';

export function DatePicker() {
  const [currentDay, setCurrentDay] = useState(new Date());

  const monthYearTitle = format(currentDay, 'MMMM yyyy');

  const firstDayInCurrentMonth = startOfMonth(currentDay);
  const lastDayInCurrentMonth = endOfMonth(currentDay);

  const currentMonthDays = eachDayOfInterval({
    start: firstDayInCurrentMonth,
    end: lastDayInCurrentMonth,
  });

  const nextMonth = () => setCurrentDay((prev) => add(prev, { months: 1 }));
  const prevMonth = () => setCurrentDay((prev) => add(prev, { months: -1 }));

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{monthYearTitle}</p>
        <div>
          <button onClick={prevMonth}>
            <span />
          </button>
          <button onClick={nextMonth}>
            <span />
          </button>
        </div>
      </div>
      <div className={classes.body}>
        <div
          className={classnames(
            classes.grid,
            classes[`start-${getDay(firstDayInCurrentMonth)}`],
          )}
        >
          {currentMonthDays.map((date) => (
            <Day key={`${date.getTime()}`}>{format(date, 'd')}</Day>
          ))}
        </div>
      </div>
    </div>
  );
}
