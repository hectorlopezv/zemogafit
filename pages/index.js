import { TEST_URL } from '../constants/routes'
import React from 'react'

export default function Home({ data = null }) {
  if (data === null) {
    return <div>Something went wrong, please try again</div>
  }
  return (
    <div>
      <main>
        <ul>
          {data?.posts?.map(({ title, body }, index) => {
            return (
              <li key={index}>
                <h2>{title}</h2>
                <span>{body}</span>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch(TEST_URL)
    const data = await res.json()

    if (!data.posts) {
      return {
        props: { notFound: true, data: null },
      }
    }
    return {
      props: { data },
    }
  } catch (error) {
    console.log('error', error)
    return {
      props: { notFound: true, data: null },
    }
  }
}
