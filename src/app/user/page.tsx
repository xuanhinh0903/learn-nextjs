export default async function User() {
  const res = await fetchData();
  return (
    <div>
      <p>Day la Users</p>
      {res.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
