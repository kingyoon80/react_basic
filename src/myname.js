export default function MyName(props) {
  const { name, age, children } = props;

  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{children}</h1>
    </>
  );
}
