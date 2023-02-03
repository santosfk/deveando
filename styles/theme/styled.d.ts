import "styled-components";
import { DefaultTheme } from "styled-components";

import dark from "./dark";

export type Theme = typeof dark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
