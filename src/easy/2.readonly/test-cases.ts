/*
 * @Description: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 * @Author: Sunly
 * @Date: 2022-10-28 13:10:02
 */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
