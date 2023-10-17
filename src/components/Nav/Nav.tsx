export type NavInput = { value: string };

function Nav({ value }: NavInput) {
  return <h1 data-caley="true">{value}</h1>;
}

export { Nav };
