import MetaMaskCard from '@components/MetaMaskCard'

function App() {
  console.log(process.env.ENV)
  return (
    <div>
      <h1>当前的环境：{process.env.ENV}</h1>
      <MetaMaskCard />
    </div>
  )
}

export default App
