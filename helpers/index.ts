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

export const getDevelopmentsData = (list: any[]) => {

  const obj: any = {};

  const roofed_surface = list.map(item => Math.round(item.roofed_surface))
  const total_surface = list.map(item => item?.total_surface)
  const unroofed_surface = list.map(item => item?.unroofed_surface)
  
  const semiroofed_surface = list.map(item => item?.total_surface)
  const room_amount = list.map(item => item?.room_amount)
  const price = list.map(item => item?.operations[0]?.prices[0]?.price)

  obj['roofed_surface'] = `${Math.min(...roofed_surface)} a ${Math.max(...roofed_surface)}`
  obj['total_surface'] = `${Math.min(...total_surface)} a ${Math.max(...total_surface)}`
  obj['unroofed_surface'] = `${Math.min(...unroofed_surface)} a ${Math.max(...unroofed_surface)}`
  obj['semiroofed_surface'] = `${Math.min(...semiroofed_surface)} a ${Math.max(...semiroofed_surface)}`
  obj['room_amount'] = `${Math.min(...room_amount)} a ${Math.max(...room_amount)}`
  obj['price'] = `${formatToMoney(Math.min(...price))} a ${formatToMoney(Math.max(...price))}`
  obj['currency'] = list[0]?.operations[0]?.prices[0]?.currency;
  
  return obj
}

export const getKeyByValue = (object: any, value: any) => {
  return Object.keys(object).find(key => object[key] === value);
}

export const getPropertyValuesForFilter = (v: string) => {
  switch (v) {
    case "todos":
      return [{value: 1, label: "Venta"}, {value: 2, label: "Alquiler"}]
    case "venta":
      return [{value: 1, label: "Venta"}]
    case "alquiler":
      return [{value: 2, label: "Alquiler"}]
  }
}

export const getDropdownValue = (min: any, max: any, type: string) => {
  let st = ''
  if(min > 0 && max == 0) st = `Min: ${min}`
  if(max > 0 && min == 0) st = `Max: ${max}`
  if(max > 0 && min > 0) st = `${min} - ${max}`
  if(max === min) st = `${min} ${type}`
  return st
}