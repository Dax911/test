import Link from "next/link"
import User from "./../../lib/interfaces"


const User = (props: Values) => {
 
  return (
    <div>
      <h1>{props.user_id}</h1>
      <p>{props.username}</p>
      <p>{props.profile_picture}</p>
      <p>{props.state}</p>
      <p>{props.stage_id}</p>
      <p>{props.colors}</p>
      <p>{props.badges}</p>



      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}
export default User

export const getServerSideProps = async (context: any) => {
  const { id } = context.query
  const res = await fetch(`https://api.getmoonbounce.com/api/v3/user/${id}`);
  const result = await res.json();
  return {
    props: {
      result
    }
  }
}
