/*
 * @Description: https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md
 * @Author: Sunly
 * @Date: 2022-10-28 11:20:00
 */
import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
