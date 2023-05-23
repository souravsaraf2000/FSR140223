import X from "./components/Button/Button"
import Greet from "./components/Greet/Greet"

import {add , subs, product, divide, Welcome} from "./Utils"

const Home = () => {
  console.log(add(5,10))
  return <div>
    <Greet/>
    <X/>
    <Welcome/>
  </div>
}

export default Home