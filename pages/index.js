import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Submit from '../components/Submit'
import Alert from '../components/Alert'
import { colRef } from '../store/firebase'
import Header from '../components/Header'
import DropDown from '../components/DropDown'
import CardMap from '../components/CardMap'
import { LIST } from '../constants'
import { getDocs } from 'firebase/firestore'
const Home = ({ cardData }) => {
  const [cards, _] = useState(cardData)
  const [isOpen, setisOpen] = useState(false)
  const [selected, setselected] = useState(LIST)

  return (
    <>
      <NavBar />
      <Header />
      <div className="max-centered">
        <Alert />
        <main role="main">
          <div className="flex">
            <h2 className="text-3xl">Previous Rulings</h2>
            <DropDown setisOpen={setisOpen} setselected={setselected} selected={selected} isOpen={isOpen} />
          </div>
          <CardMap cards={cards} selected={selected} />
        </main>
        <Submit />
        <hr role="separator" />
        <Footer />
      </div>
    </>
  )
}
export default Home

export const getServerSideProps = async () => {
  try {
    const cardData = []
    const getData = await getDocs(colRef)

    getData?.docs?.forEach(thumb => cardData.push({ ...thumb.data(), id: thumb.id }))
    return {
      props: {
        cardData,
      },
    }
  } catch (error) {
    console.error('error', error)
    return {
      props: { cardData: null },
    }
  }
}
