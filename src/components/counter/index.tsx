export function Counter() {
  return (
    <div x-data="counter" style={{ display: "flex", flexDirection: "column" }}>
      <input type="number" pattern="/\d/g" x-bind={"input"} />
      <span x-bind="display"></span>
    </div>
  );
}
