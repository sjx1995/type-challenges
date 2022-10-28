/*
 * @Description: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 * @Author: Sunly
 * @Date: 2022-10-28 13:09:24
 */
// type MyReadonly<T> = any;

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
