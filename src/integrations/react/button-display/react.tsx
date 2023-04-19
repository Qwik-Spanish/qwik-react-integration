/** @jsxImportSource react */
export function Button({ onClick }: { onClick: () => void }) {
  console.log("React <Button/> Render");
  return <button onClick={onClick}>+1</button>;
}

export function Display({ count }: { count: number }) {
  console.log("React <Display count=" + count + "/> Render");
  return <p className="react">Count: {count}</p>;
}
