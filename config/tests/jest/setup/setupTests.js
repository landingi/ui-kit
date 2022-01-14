import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() })
