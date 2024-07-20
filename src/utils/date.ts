import { addMinutes, format, parse } from "date-fns";

export const formatDate = (date: Date | string, formatString?: string) => {
  /**
   * Solução para o problema do timezone estar tirando
   * um dia da data por conta do horário ser 00
   */
  if (typeof date === "string") {
    date = new Date(date);
    date = addMinutes(date, date.getTimezoneOffset());
  } else {
    date = addMinutes(date, date.getTimezoneOffset());
  }

  return format(date, formatString || "dd/MM/yyyy");
};

export const parseDate = (date: string, format?: string) => {
  return parse(date, format || "yyyy-MM-dd", new Date());
};
