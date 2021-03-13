import type { CSSProperties } from "react";
interface Styled {
  "class": Record<string, CSSProperties>;
  "class2": Record<string, CSSProperties>;
  "classname": Record<string, CSSProperties>;
  "id": Record<string, CSSProperties>;
  "my-id": Record<string, CSSProperties>;
}
declare const styled: Styled;
export default styled;
