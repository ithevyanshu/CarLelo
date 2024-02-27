import { useEffect } from "react"
import axios from "axios"
import useTitle from "../hooks/useTitle"

const Dashboard = () => {
  useTitle("Dashboard")
  useEffect(() => {
    axios.get("localhost:300/car")
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard