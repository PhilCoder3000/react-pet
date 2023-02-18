import React from 'react';

interface MainProps {
  uuid?: string;
}

export default function Main({
  uuid,
}: MainProps) {
  return (
    <h1>Main</h1>
  );
}
