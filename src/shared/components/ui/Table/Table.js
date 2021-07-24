/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo
} from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import {
  useTable,
  usePagination,
  useBlockLayout,
  useFilters,
  useRowSelect,
  useGlobalFilter
} from 'react-table'
import Checkbox from './Row/Checkbox'
import Radio from './Row/Radio'
import Options from './Row/Options'
import { styles } from 'shared/helpers/css'
import { isEmpty } from 'shared/helpers/data'
import scss from './Table.scss'
import Loader from 'shared/components/ui/Loader'
import ClientPagination from 'shared/components/ui/ClientPagination'
import { selectedFlatRowsMap } from 'shared/helpers/table'
import { paginationShape } from 'shared/shapes'
import useQueryString from 'shared/helpers/hooks/useQueryString'
import emitter from 'shared/lib/emitter'
import { setLocalStorage, getLocalStorage } from 'shared/helpers/storage'
import { cancelRequests } from 'shared/services/http/client'
import { usePermissions } from 'shared/helpers/hooks/usePermissions'
import { READ_ONLY } from 'shared/constants/permissionTypes'
import { selectFilter } from 'shared/components/ui/Table/Filters'
import Spacer from 'shared/components/ui/Spacer'
import Spreader from 'shared/components/ui/Spreader'
import Tooltip from 'shared/components/ui/Tooltip'
import {
  TABLE_REFRESH,
  TABLE_FILTER_REFRESH,
  TABLE_RESET_PAGE
} from 'shared/constants/eventTypes'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Table - stateless presentational component
 * @see {@link https://github.com/tannerlinsley/react-table} for further information related to react-table.
 * @param {object} props - props
 * @param {string | array} props.className - list of class names, default: `table__wrapper`
 * @param {array} props.columns - columns
 * @param {array} props.data - data
 * @param {func} props.fetchData - fetch data
 * @param {array} props.deleteRow - list of selected id's to delete
 * @param {number} props.detailsRow - id of selected item to init details view
 * @param {boolean} props.isLoading - loading
 * @param {boolean} props.hasSelect - checkbox option
 * @param {boolean} props.hasRadio - radio option
 * @param {array} props.userPermissions - user permissions
 * @param {array} props.customFilters - custom filters
 * @param {array} props.customOptions - custom options
 * @param {string} props.tableName - tableName
 * @param {number} props.totalRows - totalRows
 * @param {func} props.handleSelect - trigger on select/unselect row
 * @param {func} props.handleSelectRow - trigger on select/unselect row details
 * @param {bool} props.hasBorder - table border, default false
 * @param {number} props.constantPageLimit - option to increase the number of items on the page
 * @param {bool} props.hasPagination - option to disable rendering pagination, default true
 * @param {object} props.customMessage - define full customized message, if table is empty
 * @param {bool} props.hideHeader - default false, hide table header (columns name)
 * @param {bool} props.renderFiltersAbove - default false, render filters above table, not in cell heading
 * @return {object} An object of children
 */
const table = ({
  columns,
  data,
  className,
  fetchData,
  isLoading,
  hasSelect,
  hasRadio,
  deleteRow,
  tableName,
  userPermissions,
  customFilters,
  customOptions,
  totalRows,
  handleSelect,
  handleSelectRow,
  hasBorder,
  constantPageLimit,
  hasPagination,
  customMessage,
  hideHeader,
  renderFiltersAbove,
  optionsComponent
}) => {
  /**
   * query string params - a temporary solution, to be removed once we move to SPA
   */
  const [checkedRow, setCheckedRow] = useState({})
  const [queryStringPage, setPageIndex] = useQueryString('page')
  const [queryStringLimit, setLimitValue] = useQueryString('limit')
  const [previousPageIndex, setPreviousPageIndex] = useState(0)
  /**
   * Default filter type
   */
  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true
        })
      }
    }),
    []
  )

  /**
   * Default filter column
   */
  const defaultColumn = useMemo(
    () => ({
      Filter: selectFilter
    }),
    []
  )

  /**
   * useTable - react table hook
   * @see {@link https://react-table.js.org/api/useTable}
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    selectedFlatRows,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize, filters },
    pageCount
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      usePagination,
      initialState: {
        pageIndex: pageIndex || Number(queryStringPage) || 0,
        pageSize:
          constantPageLimit ||
          getLocalStorage(`table-${tableName}-pageSize`) ||
          Number(queryStringLimit) ||
          10,
        hiddenColumns: usePermissions(userPermissions, READ_ONLY)
          ? ['selection']
          : [],
        filters: customFilters || [],
        options: customOptions || [],
        selectedRowIds: checkedRow
      },
      pageCount:
        (constantPageLimit &&
          Math.ceil(totalRows / Number(constantPageLimit))) ||
        Math.ceil(
          totalRows / parseInt(getLocalStorage(`table-${tableName}-pageSize`))
        ) ||
        Math.ceil(totalRows / Number(queryStringLimit)) ||
        Math.ceil(totalRows / 10),
      manualPagination: true,
      manualFilters: true,
      disablePageResetOnDataChange: false,
      autoResetPage: false
    },
    /**
     * useBlockLayout - react table row and cell render hook
     * @see {@link https://react-table.js.org/api/useBlockLayout}
     */
    useBlockLayout,
    /**
     * useFilters - is the hook that implements row filtering
     * @see {@link https://react-table.js.org/api/useFilters}
     */
    useFilters,
    /**
     * useGlobalFilter - react table row and cell render hook
     * @see {@link https://react-table.js.org/api/useGlobalFilter}
     */
    useGlobalFilter,
    /**
     * usePagination - react table pagination hook
     * @see {@link https://react-table.js.org/api/usePagination}
     */
    usePagination,
    /**
     * useRowSelect - react table row select hook
     * @see {@link https://react-table.js.org/api/useRowSelect}
     */
    useRowSelect,
    hooks => {
      hasSelect &&
        hooks.flatColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ])

      hasRadio &&
        hooks.flatColumns.push(columns => [
          {
            id: 'selection',
            Header: () => <Spreader />,
            Cell: ({ row, toggleAllRowsSelected }) => (
              <Radio
                {...row.getToggleRowSelectedProps()}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setRadio(row, toggleAllRowsSelected)}
              />
            )
          },
          ...columns
        ])
    }
  )

  const setRadio = (row, toggle) => {
    toggle(false)
    row.toggleRowSelected(true)
  }

  /**
   * check for selected row ID
   * @return {boolean}
   */
  const hasSelectedId = selectedFlatRows.length > 0

  /**
   * get selected rows data
   * @return {array}
   */
  const selectedRowId = selectedFlatRowsMap(selectedFlatRows)

  /**
   * Pass read data to deleteRow prop
   * @type {func}
   * @return {func}
   */
  const deleteRowData = useCallback(
    () => deleteRow(selectedRowId, tableName),
    [selectedRowId]
  )

  /**
   * Handle page size
   * @type {func}
   * @param {object} event
   * @return {func}
   */
  const handlePageSize = useCallback(event => {
    const value = event.target.value

    setLocalStorage(`table-${tableName}-pageSize`, Number(value))
    const getPageSizeFromLocalStorage = getLocalStorage(
      `table-${tableName}-pageSize`
    )

    if (
      getPageSizeFromLocalStorage === 'undefined' ||
      getPageSizeFromLocalStorage === null
    ) {
      setLimitValue(getLocalStorage(`table-${tableName}-pageSize`))
      setPageSize(parseInt(getLocalStorage(`table-${tableName}-pageSize`)))
    }

    setLimitValue(getPageSizeFromLocalStorage)
    setPageSize(getPageSizeFromLocalStorage)

    gotoPage(0)
    setPageIndex(0)
  }, [])

  /**
   * useEffect
   */
  useEffect(() => {
    emitter.on(TABLE_REFRESH, handleReference)
    emitter.on(TABLE_FILTER_REFRESH, handleRefreshFilter)
    emitter.on(TABLE_RESET_PAGE, handleResetPage)

    fetchData({
      pageIndex,
      pageSize,
      filters,
      cursorOffset: pageIndex - previousPageIndex
    })

    setPreviousPageIndex(pageIndex)

    return () => {
      cancelRequests()

      emitter.off(TABLE_REFRESH, handleReference)
      emitter.off(TABLE_RESET_PAGE, handleReference)
      emitter.off(TABLE_FILTER_REFRESH, handleRefreshFilter)
    }
  }, [fetchData, pageIndex, pageSize, filters])

  const handleRefreshFilter = filter =>
    fetchData({ pageIndex, pageSize, filter })
  const handleReference = () => fetchData({ pageIndex, pageSize, filters })
  const handleResetPage = () => gotoPage(0)

  useEffect(() => {
    const checked_row = {}

    if (data.length) {
      data.map((row, index) => {
        if (row.checked) {
          checked_row[index] = true
        }
      })

      setCheckedRow(checked_row)
    }
  }, [data])

  /**
   * useEffect
   * to inform parent component, that row is selected
   */
  useEffect(() => {
    handleSelect(hasSelectedId)
  }, [hasSelectedId])

  /**
   * useEffect
   * pass selected row details back to parent component
   */
  useEffect(() => {
    handleSelectRow(selectedRowId)
  }, [selectedRowId])

  /**
   * Options elements
   */
  const renderOptions = () =>
    hasSelectedId > 0 &&
    !hasRadio && (
      <Options
        options={customOptions}
        handleDelete={deleteRowData}
        selected={selectedRowId}
        component={optionsComponent}
      />
    )

  /**
   * Head element
   */
  const thead = () => (
    <Fragment>
      {renderFiltersAbove && (
        <div className={cssClass('table__filters')}>
          {headerGroups.map(headerGroup =>
            headerGroup.headers.map(column => (
              <div
key={uuid()}
className={cssClass('table__thead__filter')}>
                <div>{column.canFilter && column.render('Filter')}</div>
              </div>
            ))
          )}
        </div>
      )}

      {!hideHeader && (
        <div className={cssClass('table__thead')}>
          {headerGroups.map(headerGroup => (
            <div
              key={uuid()}
              className={cssClass('table__thead__tr')}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map(column => (
                <div
                  key={uuid()}
                  className={cssClass(
                    'table__thead__th',
                    `table__thead__th--${column?.class}`
                  )}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header', columns)}

                  <div>
                    {column.canFilter && !renderFiltersAbove
                      ? column.render('Filter')
                      : null}
                  </div>
                </div>
              ))}

              {renderOptions()}
            </div>
          ))}
        </div>
      )}
    </Fragment>
  )

  /**
   * Body element
   */
  const tbody = () => (
    <div
className={cssClass('table__tbody')}
{...getTableBodyProps()}>
      {page.map(row => {
        const { is_read, isDisabled, tooltip } = row.original
        const elementClasses = cssClass(
          is_read === undefined || is_read === true
            ? 'table__tbody__tr--is_read'
            : null,
          isDisabled && 'table__tbody__tr--disabled'
        )

        prepareRow(row)

        return (
          <Tooltip
            key={uuid()}
            className={cssClass('table__tbody__tr', elementClasses)}
            effect="float"
            content={tooltip}
            disabled={!tooltip}
            {...row.getRowProps()}
          >
            {row.cells.map(cell => (
              <div
                key={uuid()}
                className={cssClass('table__tbody__td')}
                {...cell.getCellProps()}
              >
                {cell.render('Cell')}
              </div>
            ))}
          </Tooltip>
        )
      })}
    </div>
  )

  const renderTable = () => (
    <div className={cssClass(className)}>
      <div
        className={
          hasBorder
            ? cssClass('table__main', 'table__border')
            : cssClass('table__main')
        }
        {...getTableProps()}
      >
        {thead()}

        {isLoading ? (
          <Loader />
        ) : !isEmpty(data) ? (
          <Fragment>
            {tbody()}

            {hasPagination ? (
              <ClientPagination
                goToPage={gotoPage}
                pageIndex={pageIndex}
                pageCount={pageCount}
                activePageLimit={parseInt(pageSize)}
                pageLimit={handlePageSize}
                constantPageLimit={constantPageLimit}
              />
            ) : null}

            {hasBorder && <Spacer space="small" />}
          </Fragment>
        ) : (
          customMessage
        )}
      </div>
    </div>
  )
  /**
   * Table element
   */

  return renderTable()
}
/**
 * Display name
 * @type {string}
 */
table.displayName = 'Table'

/**
 * The properties.
 * @type {Object}
 */
table.propTypes = {
  /**
   * Columns
   */
  columns: PropTypes.oneOfType([PropTypes.objectOf, PropTypes.array])
    .isRequired,
  /**
   * Data
   */
  data: PropTypes.oneOfType([PropTypes.objectOf, PropTypes.array]).isRequired,
  /**
   * Pagination data
   */
  dataPagination: PropTypes.shape(paginationShape),
  /**
   * Classname, default `table__wrapper`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * fetchData
   */
  fetchData: PropTypes.func.isRequired,
  /**
   * isLoading
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * hasActions
   */
  hasActions: PropTypes.bool,
  /**
   * hasSelect
   */
  hasSelect: PropTypes.bool,
  /**
   * deleteRow list of id's to delete
   */
  deleteRow: PropTypes.func,
  /**
   * tableName
   */
  tableName: PropTypes.string.isRequired,
  /**
   * userPermissions
   */
  userPermissions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  /**
   * totalRows
   */
  totalRows: PropTypes.number,
  /**
   * trigger on select/unselect row
   */
  handleSelect: PropTypes.func,
  /**
   * trigger on select/unselect row details
   */
  handleSelectRow: PropTypes.func,
  /**
   * hasBorder
   */
  hasBorder: PropTypes.bool,
  /**
   * constantPageLimit
   */
  constantPageLimit: PropTypes.number,
  /**
   * hasPagination
   */
  hasPagination: PropTypes.bool,
  /**
   * has radio option
   */
  hasRadio: PropTypes.bool,
  /**
   * custom message, if table is empty
   */
  customMessage: PropTypes.instanceOf(Object),
  /**
   * render filters above table, default: false
   */
  renderFiltersAbove: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
table.defaultProps = {
  className: 'table__wrapper',
  hasActions: false,
  deleteRow: () => null,
  dataPagination: null,
  totalRows: 0,
  features: [],
  hasSelect: true,
  handleSelect: () => null,
  handleSelectRow: () => null,
  hasBorder: false,
  constantPageLimit: 0,
  hasPagination: true,
  hasRadio: false,
  customMessage: null,
  hideHeader: false,
  renderFiltersAbove: false
}

export default memo(table)
