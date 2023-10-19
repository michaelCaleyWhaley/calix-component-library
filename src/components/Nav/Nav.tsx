export type NavInput = { value: string };

function Nav({ value }: NavInput) {
  return <h1 data-caley="true">{value} test</h1>;
}

export { Nav };
