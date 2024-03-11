export default function Display ({ input, result }) {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      <div>{result}</div>
    </div>
  );
};

