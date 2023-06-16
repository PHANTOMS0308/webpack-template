import * as React from 'react';
import './App.scss';

interface props {
  name: string
}

export default function App({ name }: props): React.ReactNode {
  return (
    < >
      <h1>Hello { name }</h1>
    </>
  );
}
