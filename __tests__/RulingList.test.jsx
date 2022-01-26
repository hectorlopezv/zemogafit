import { render, screen } from '@testing-library/react'
import RulingList from '../components/Ruling/RulingList/RulingList'
const mockData = [
  {
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
  },
  {
    lastUpdated: '2020-12-10T23:41:07.120Z',
    picture: 'cristina.webp',
    description:
      'Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.',
    category: 'politics',
    votes: {
      positive: 45,
      negative: 97,
    },
    name: 'Cristina Fernández de Kirchner',
    id: 'HGqAR6BgvKj6C5uoVm38',
  },
  {
    description:
      "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
    lastUpdated: '2022-01-25T17:20:24.628-05:00',
    name: 'Greta Thumberg',
    category: 'environment',
    votes: {
      negative: 45,
      positive: 123,
    },
    picture: 'greta.webp',
    id: 'I02hOdzSzFa788kvZ6sI',
  },
  {
    picture: 'mark.webp',
    category: 'business',
    lastUpdated: '2021-02-14T23:10:19.134Z',
    name: 'Mark Zuckerberg',
    votes: {
      negative: 324,
      positive: 418,
    },
    description:
      'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
    id: 'dDHkZfuN6hvDr2RkW93u',
  },
  {
    category: 'entertainment',
    picture: 'kayne.webp',
    name: 'Kanye West',
    lastUpdated: '2020-03-10T23:08:57.892Z',
    votes: {
      positive: 23,
      negative: 36,
    },
    description:
      'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
    id: 'dtbOAY8SynssKX7bsnUN',
  },
  {
    votes: {
      negative: 894,
      positive: 1237,
    },
    lastUpdated: '2020-12-20T23:43:38.041Z',
    name: 'Elon Musk',
    category: 'business',
    description:
      'In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.',
    picture: 'elon.webp',
    id: 'lmVW2sTKMxTStgcw93BM',
  },
]
describe('RulingList', () => {
  it('check all Posts are rendered', () => {
    const { debug } = render(<RulingList cards={mockData} />)

    expect(
      screen.getByRole('heading', {
        name: /malala yousafzai/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /cristina fernández de kirchner/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /greta thumberg/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /mark zuckerberg/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /elon musk/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /kanye west/i,
      })
    ).toBeInTheDocument()
  })
})
