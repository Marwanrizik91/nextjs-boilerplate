import type { ReactNode } from 'react';

const ExampleComponent = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ExampleComponent;
