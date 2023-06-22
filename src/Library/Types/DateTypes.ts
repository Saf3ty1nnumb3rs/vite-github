import { TranslatableMessageKey } from 'Library/Messages';

export enum DateFormats {
  FULLMONTH_DAY_RD_TH_FULLYEAR = 'MMMM Do, YYYY', // August 12th, 2022
  FULLMONTH_DAY_FULLYEAR = 'MMMM D, YYYY', // August 12, 2022
  DAYOFWEEK_FULLMONTH_DAY = 'ddd MMMM D', // Fri August 12
  FULLDAY_MONTH_FULLYEAR = 'DD/MM/YYYY', // 21/12/2022
  MONTH_FULLDAY_FULLYEAR = 'MM/DD/YYYY', // 12/21/2022
  MONTH_FULLDAY_YEAR = 'MM/DD/YY', // 12/21/22
  MONTH_DAY_YEAR = 'MM/D/YY', // 12/4/22
  MONTH_DAY_YEAR_SHORT = 'M/D/YY', // 2/4/22
  MONTH_DAY = 'M/D', // 12/4
  UTC_DATE_TIME_STRING = 'YYYY-MM-DDTHH:mm:ss[Z]', // 2022-12-21T16:20:12
  FULLYEAR_MONTH_FULLDAY_DASH = 'YYYY-MM-DD', // 2022-12-21
  MONTH_FULLDAY_YEAR_TIME = 'MM/DD/YY h:mm A', // 1/20/21 12:00 AM
}

export type DateRangeType = Extract<
  TranslatableMessageKey,
  | 'today'
  | 'last7Days'
  | 'last30Days'
  | 'monthToDate'
  | 'year'
  | 'YTD'
  | 'QTD'
  | 'yesterday'
  | 'currentMonth'
  | '3Months'
  | '6Months'
  | '12Months'
  | 'closedDate'
  | 'deliveredDate'
  | 'receivedDate'
  | 'allTime'
  | 'custom'
>;

// * This type just excludes out Custom from the above, if you need to handle custom you'll need to implement that within the component.
export type StandardDateRange = Exclude<DateRangeType, 'custom'>;
export type CustomDateRange = Extract<DateRangeType, 'custom'>;

export type DateFormat = 'MM/DD/YYYY' | 'YYYY-MM-DD';

export type DateDisplayFormat =
  | DateFormats.FULLMONTH_DAY_RD_TH_FULLYEAR
  | DateFormats.DAYOFWEEK_FULLMONTH_DAY
  | DateFormats.FULLMONTH_DAY_FULLYEAR
  | DateFormats.FULLDAY_MONTH_FULLYEAR
  | DateFormats.MONTH_FULLDAY_FULLYEAR
  | DateFormats.MONTH_FULLDAY_YEAR
  | DateFormats.MONTH_DAY_YEAR
  | DateFormats.MONTH_DAY_YEAR_SHORT
  | DateFormats.MONTH_DAY
  | DateFormats.UTC_DATE_TIME_STRING
  | DateFormats.FULLYEAR_MONTH_FULLDAY_DASH
  | DateFormats.MONTH_FULLDAY_YEAR_TIME;
