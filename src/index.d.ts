import { Component } from 'react';

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
  getFragmentContainer: () => HTMLElement;
  onFragmentWillMount: () => any;
  onFragmentDidMount: () => any;
}

declare const makeFragment: (options: MakeFragmentOptions) => (component: Component) => Component;

declare const useFragment: (props: UseFragmentProps) => any;

export { makeFragment, useFragment };
