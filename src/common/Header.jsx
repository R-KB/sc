import { Link } from "react-router";
import useClock from "../component/clock";

export default function Header() {
  const { hours, minutes, seconds } = useClock();

  return (
    <div className="Header">
      <Link to="/" className="link-top"><h4>TOPへ</h4></Link>
      this is header.
      <div id="clock">
        <span>{hours}</span>
        :<span>{minutes}</span>
        :<span>{seconds}</span>
    </div>
    </div>
  )
}