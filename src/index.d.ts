import { Component, ComponentType } from 'react';

type MakeFragmentOptions = {
  key: string;
  forceMount?: boolean;
  getFragmentNode: () => HTMLElement;
}

type UseFragmentProps = {
  key: string;
  uri?: string;
  html?: string;
  fragmentProps?: Object;
  getFragmentContainer: () => Element | DocumentFragment;
  onFragmentWillMount: () => any;
  onFragmentDidMount: () => any;
}

type UIFragmentProps = {
  key: string;
  id: string;
  uri?: string;
  html?: string;
  fragmentProps?: Object;
  onFragmentWillMount: () => any;
  onFragmentDidMount: () => any;
}

declare const makeFragment: (options: MakeFragmentOptions) => (component: ComponentType<any>) => Component<any>;

declare const useFragment: (props: UseFragmentProps) => any;

declare const UIFragment: (props: UIFragmentProps) => Component<any>;

export { makeFragment, useFragment, UIFragment };

export default UIFragment;
