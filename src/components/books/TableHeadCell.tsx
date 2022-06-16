import not_sort from '../../icons/sort.png'
import sort_asc from '../../icons/caret-down.png'
import sort_desc from '../../icons/arrow-up.png'

type headCellType = {
  label: string
  sortType: {
    label: string
    order: string
  }
  sortFunc: (label: string) => void
}

const TableHeadCell = (props: headCellType) => {
  return (
    <th className='text-md p-2 border-2 border-purple-200 text-gray-70'>
      <div
        onClick={(e) => props.sortFunc(props.label)}
        className='w-full flex flex-row justify-between items-center cursor-pointer'>
        <span className='capitalize'>{props.label}</span>
        <img
          src={props.sortType.label !== props.label ? not_sort : props.sortType.order === 'asc' ? sort_asc : sort_desc}
          className='h-5 w-5'
        />
      </div>
    </th>
  )
}

export default TableHeadCell
