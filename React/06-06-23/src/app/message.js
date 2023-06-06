import Greet from './greet'
const Message = (props)=> {
    let {msg, receiveInfo} = props
    receiveInfo('I am the message component')
    return <Greet msg={msg}/>
}

export default Message;