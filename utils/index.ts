export const trim = (str: string, seperator?: string) =>
    str.trim().replace(/\s+/g, seperator || ' ');

export const classes = (classNames: any[]) => trim(classNames.join(' '));
