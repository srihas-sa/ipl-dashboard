import {Link} from 'react-router-dom'

const TeamCard = prop => {
  const {eachdee} = prop
  const {teamimageurl, name, id} = eachdee
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="individual">
        <img src={teamimageurl} alt={name} className="teamlogo" />
        {console.log(name)}
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
