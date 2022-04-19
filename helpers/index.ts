type ClassCondition = { [key: string]: boolean | undefined };
type ClassType = undefined | string | string[] | ClassCondition;

export const classes = (...args: ClassType[]): string => {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (argType === "object") {
      for (const key of Object.keys(arg)) {
        if ((arg as ClassCondition)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
};

export const getCookie = (c_name: string) => {
  let c_value: string | null = " " + document.cookie;
  let c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start === -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end === -1) c_end = c_value.length;
    c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
};

export const formatToMoney = (
  number: string | number,
  withCurrency: boolean = false,
  currency: string = "USD",
  short: boolean = false
) => {
  if (withCurrency) {
    if (short) {
      if (number.toString().length >= 7) {
        const n = number.toString().slice(0, -6);
        return `${currency} ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} M`;
      } else {
        return `${currency} ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
      }
    } else {
      return `${currency} ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }
  }
  
  if(!withCurrency || !short){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};


export interface Property {
  location: {
    name: string;
  };
  operations: {
    operation_type: string;
    prices: {
      currency: string;
      price: number;
    }[];
  }[];
  address: string;
  total_surface: number;
  suite_amount: number;
  bathroom_amount: number;
  parking_lot_amount: number;
  photos: {
    image: string;
  }[];
  id: number;
  name?: string;
}