import { Link } from "react-router";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/" className="link-top"><h4>TOPへ</h4></Link>
    this is header.
    <div id="clock">
      <span id="hour">00</span>
      :<span id="min">00</span>
      :<span id="sec">00</span>
    </div>
    </div>
  )
}