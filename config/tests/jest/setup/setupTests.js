import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

configure({ adapter: new Adapter() })
