declare module '*.css';

declare const require: {
  context(
    path: string,
    recursive?: boolean,
    match?: RegExp
  ): {
    keys(): string[];
    (id: string): string;
  };
};