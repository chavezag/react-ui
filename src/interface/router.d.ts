type JSXComponent = () => JSX.Element;
export interface MRouter {
  name: string;
  path: string;
  component: JSXComponent;
  exact: boolean;
  access?: boolean;
  icon?: React.ReactElement;
  children?: MRouter[];
  sidebar?: boolean;
}
