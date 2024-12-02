//@vitest-environment jsdom

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
  vitest,
} from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'
import { renderWithQuery } from '../../setup'
import RequestPage from './RequestPage'

// Mock out auth0
vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'

const mockBaskets = [
  {
    id: 10,
    userId: 'auth0|67476f8defa904b4cd515493',
    username: 'superhenry',
    description: 'Leftover drinks from a flat party',
    categories: 'Beverages',
    dietaryContent: 'Vegetarian,Vegan',
    location: 'East Auckland',
    status: 'inactive',
    image: '',
    createdAt: 1698578400000,
    updatedAt: 1698578700000,
  },
  {
    id: 9,
    userId: 'auth0|67476f8defa904b4cd515493',
    username: 'superhenry',
    description:
      'I hijacked a milk delivery truck, and need to sell all this milk before it goes off',
    categories: 'Dairy',
    dietaryContent: 'Vegetarian',
    location: 'East Auckland',
    status: 'active',
    image: '',
    createdAt: 1698576000001,
    updatedAt: 1698576300001,
  },
]

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'auth0|67476f8defa904b4cd515493', nickname: 'henry' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

describe('<Request Page />', () => {
  it('shoulder render a loading page', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/baskets')
      .reply(200, mockBaskets)
    renderWithQuery(<RequestPage />)
    const loading = await waitFor(() => screen.getByText(/loading/i))
    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it.todo('should render a basket')

  it.todo('should show an error message when there is an error')
})
