import { render, screen } from '@testing-library/react'
import RulingListMap from '../components/Ruling/RulingList/RulingListMap'

const mockData = {
  category: 'politics',
  picture: 'malala.webp',
  votes: {
    positive: 34,
    negative: 3,
  },
  lastUpdated: '2022-01-25T23:53:43.433-05:00',
  name: 'Malala Yousafzai',
  id: '2mfJqICCe6QsDgYmE4uj',
  description:
    'The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.',
}

describe('RulingList', () => {

  it('check all Posts are rendered', () => {
    const { debug } = render(
      <RulingListMap {...mockData} positive={mockData.votes.positive} negative={mockData.votes.negative} />
    )
      expect(screen.getByTestId('listdvoteup')).toBeInTheDocument()
      expect(screen.getByTestId('listdvotedown')).toBeInTheDocument()
  })
})
