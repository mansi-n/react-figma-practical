/* eslint-disable react/prop-types */
import UserProfile from "../UserProfile";

const TeamCard = (data) => {
  const teamData = data.data
  return (
    <>
    {teamData && (
      <div className="team-member-profile">
        {teamData.map((data, key) => (
          <div key={key}>
              {data.avatar ? <UserProfile src={data.avatar} alt={data.name}/> : <UserProfile name={data.name}/>}
          </div>
        ))}
      </div>
    )}
    </>
  )
}

export default TeamCard;