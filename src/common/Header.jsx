import { Link } from "react-router";
import useClock from "../component/clock";

export default function Header() {
  const { hours, minutes, seconds } = useClock();

  return (
    <div className="Header">
      <Link to="/" className="link-top"><h4>TOPへ</h4></Link>
      <div className="hdr__hide-msg">this is header.</div>
      <div id="clock">
        <span>{hours}</span>
        :<span>{minutes}</span>
        :<span>{seconds}</span>
    </div>
    </div>
  )
}