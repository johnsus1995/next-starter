import * as React from 'react';

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Register() {
  await wait(4000);

  return <div>Register page</div>;
}
