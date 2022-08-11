import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, Key } from "react";
import useSWR from 'swr'

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())
const Home: NextPage = ( ) => {
  const getData = async () => {

  const data = await fetch('https://api.getmoonbounce.com/api/v3/user/1').then((res) => res.json())
const userdata = await JSON.stringify(JSON.parse(data), null, 2)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  //alert(JSON.stringify(data, null, 2))
  return (
    <div>
      <h1>{userdata.user_id}</h1>
      <p>{userdata.username}</p>
      <p>{userdata.profile_picture}</p>
      <p>{userdata.state}</p>
      <p>{userdata.stage_id}</p>
      <p>{userdata.colors}</p>
      <p>{userdata.badges}</p>
      <p>{userdata.updated_at}</p>
      <p>{userdata.friend_list}</p>
      <p>{userdata.inventory.items.id}</p>
      <p>{userdata.inventory.items.stack}</p>



    </div>
  )
}
}
export default Home