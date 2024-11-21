import { useState } from "react"
import "./App.css"
import { useEffect } from "react"

function App() {
  const [trafficLight, setTrafficLight] = useState("green")

  const bulbChangeTiming = [
    { color: "green", timer: 3000 },
    { color: "yellow", timer: 2000 },
    { color: "red", timer: 5000 },
    { color: "yellow", timer: 2000 },
  ]

  useEffect(() => {
    let curr = 0

    let id = setInterval(() => {
      setTrafficLight(bulbChangeTiming[curr].color)
      curr = curr + 1

      if (curr > bulbChangeTiming.length - 1) {
        curr = 0
      }
    }, [bulbChangeTiming[curr].timer])

    return () => clearInterval(id)
  }, [])

  console.log(trafficLight)

  return (
    <div>
      <p>Traffic Signal:</p>
      <div style={{width:"300px", height:"300px", borderRadius:"50%", backgroundColor:trafficLight,}}></div>
    </div>
  )
}

export default App
