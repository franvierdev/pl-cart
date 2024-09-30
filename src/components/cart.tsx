export default function Cart(data: any) {
  {
    console.log(data);
  }
  return (
    <div className="flex flex-col">
      {data.data.map(({ image, name, price }: any) => (
        <p>{name}</p>
      ))}
      <h2>Your Cart ()</h2>
    </div>
  );
}
