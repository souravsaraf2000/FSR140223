"use client"
import Message from "./components/Message/Message"
import Counter from "./components/Counter/Counter"
import User from "./components/User/User"

const Home = () => {

  return <div>
    {/* <Message msg="Hello Everyone!" color="cyan"/>
    <Message msg="Login Success!" color="orange"/>
    <Message msg="Signup Failed!" isError={true}/> */}
    <Counter/>
    <User/>
  </div>
}

export default Home