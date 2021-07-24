import PropTypes from 'prop-types'

const shape = PropTypes.shape({
  before_values: PropTypes.shape({
    first: PropTypes.number,
    prev: PropTypes.number
  }),
  values: PropTypes.shape({
    before: PropTypes.arrayOf(PropTypes.number),
    current: PropTypes.arrayOf(PropTypes.number),
    after: PropTypes.arrayOf(PropTypes.number)
  }),
  after_values: PropTypes.shape({
    next: PropTypes.number
  })
}).isRequired

export default shape
