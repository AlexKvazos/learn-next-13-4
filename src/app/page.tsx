export const revalidate = 0;

export default async function Home() {
  await new Promise((res) => setTimeout(res, 2000));

  return <div>{Math.random()}</div>;
}
