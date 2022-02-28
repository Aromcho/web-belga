type ClassCondition = { [key: string]: boolean | undefined };
type ClassType = undefined | string | string[] | ClassCondition;

export const classes = (...args: ClassType[]): string => {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (argType === 'object') {
      for (const key of Object.keys(arg)) {
        if ((arg as ClassCondition)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
};

export const getCookie = (c_name: string) => {
  let c_value: string | null = ' ' + document.cookie;
  let c_start = c_value.indexOf(' ' + c_name + '=');
  if (c_start === -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf('=', c_start) + 1;
    var c_end = c_value.indexOf(';', c_start);
    if (c_end === -1) c_end = c_value.length;
    c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
};