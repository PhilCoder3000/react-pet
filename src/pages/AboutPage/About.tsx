import React from 'react';

interface AboutProps {
  uuid?: string;
}

export default function About({
  uuid,
}: AboutProps) {
  return (
    <h1>About</h1>
  );
}
