import '../../App.css'
type Props = {}

const Typing = (props: Props) => {
  return (
    <div className="typing-indicator">
    <div className="typing-circle"></div>
    <div className="typing-circle"></div>
    <div className="typing-circle"></div>
    <div className="typing-shadow"></div>
    <div className="typing-shadow"></div>
    <div className="typing-shadow"></div>
</div>
  )
}

export default Typing