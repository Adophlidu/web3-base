function App() {
  console.log(process.env.ENV);
  return (
    <div>
      <h1>当前的环境：{process.env.ENV}</h1>
    </div>
  );
}

export default App;
