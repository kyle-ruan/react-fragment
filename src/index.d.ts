import { ComponentType } from 'react';

type MakeFragmentOptions = {
  key: string;
  forceMount?: boolean;
  getFragmentNode: () => HTMLElement;
}

type UseFragmentProps = {
  key: string;
  uri?: string;
  html?: string;
  fragmentProps: Object;
  getFragmentContainer: () => Element | DocumentFragment;
  onFragmentWillMount: () => any;
  onFragmentDidMount: () => any;
}

declare const makeFragment: (options: MakeFragmentOptions) => (component: ComponentType<any>) => Component<any>;

declare const useFragment: (props: UseFragmentProps) => any;

export { makeFragment, useFragment };
