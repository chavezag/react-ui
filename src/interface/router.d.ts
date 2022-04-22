import { IconProp } from "@fortawesome/fontawesome-svg-core";

type JSXComponent = () => JSX.Element;
export interface MRouter {
  name: string;
  path: string;
  component: JSXComponent;
  exact: boolean;
  access?: boolean;
  icon?: IconProp;
  children?: MRouter[];
  sidebar?: boolean;
}
