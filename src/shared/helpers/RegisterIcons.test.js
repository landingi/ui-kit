import RegisterIcons from './RegisterIcons'

const mockRegisterIcons = jest.fn()

jest.mock('@helpers/icons', () => ({
  __esModule: true,
  default: () => {
    mockRegisterIcons()
  }
}))

describe('Register Icons Component', () => {
  it('Call registerIcons func', () => {
    RegisterIcons({ children: 'test' })
    expect(mockRegisterIcons).toBeCalled()
  })
})
