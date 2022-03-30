import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export async function getServerSideProps() {
  const response = await fetch(process.env.DB);
  const data = await response.json();
  return {props: {data} };
}

export default function Home( {data} ) {
  return (
    <div>
      <Nav />
      <p>{!data?.message ? "Loading..." : data.message}</p>
    </div>
  )
}