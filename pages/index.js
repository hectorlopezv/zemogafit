import { TEST_URL } from '../constants/routes'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import RulingHeader from '@/components/RulingHeader'
import Footer from '@/components/Footer'
import Submit from '@/components/Submit'
import Alert from '@/components/Alert'
import Closing from '@/components/Closing'
import { getData } from '../store/firebase'
import Header from '@/components/Header'
import Ruling from '@/components/Ruling'

export default function Home() {
  const [cards, setcard] = useState(null)
  useEffect(() => {
    const getCards = async () => {
      const tempData = []
      await (await getData).docs.forEach(thumb => tempData.push({ ...thumb.data() }))
      setcard(tempData)
    }
    getCards()
  }, [])
  return (
    <>
      <NavBar />

      <Header />
      <div className="max-centered">
        <Alert />

        <main role="main">
          <h2 className="text-3xl">Previous Rulings</h2>
          <div className="flex relative overflow-x-auto w-full  items-center h-96 space-x-4 ">
            {cards?.map(card => {
              console.log('card', card)
              return (
                <Ruling
                  key={card.name}
                  name={card.name}
                  description={card.description}
                  lastUpdated={card.lastUpdated}
                  category={card.category}
                  picture={card.picture}
                  positive={card.votes.positive}
                  negative={card.votes.negative}
                />
              )
            })}
          </div>
        </main>
        <Submit />
        <hr role="separator" />
        <Footer />
      </div>
    </>
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
