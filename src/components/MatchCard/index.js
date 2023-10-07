// Write your code here
import TeamCard from '../TeamCard'

const TeamMatches = prop => {
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
    <div>
      <img src={competingteamlogo} alt={`competing team ${competingteam}`} />
      <p>{competingteam}</p>
      <p>{result}</p>
      <p>{matchstatus}</p>
    </div>
  )
}

export default TeamMatches
