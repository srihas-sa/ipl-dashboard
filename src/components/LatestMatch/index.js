// Write your code here
import './index.css'

const LatestMatch = prop => {
  const {detail} = prop
  const {
    umpires,
    result,
    manofthematch,
    id,
    date,
    venue,
    competingteam,
    competingteamlogo,
    firstinnings,
    secondinnings,
    matchstatus,
  } = detail
  return (
    <div className="outercontainer">
      <div>
        <p>{competingteam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingteamlogo} alt={`latest match ${competingteam}`} />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstinnings}</p>
        <p>Second Innings</p>
        <p>{secondinnings}</p>
        <hp>Man of the match</hp>
        <p>{manofthematch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
