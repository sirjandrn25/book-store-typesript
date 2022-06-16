


type headCellType = {
    label:string
}


const TableHeadCell = (props:headCellType) => {
  return (
    <div className='w-full flex flex-row justify-between items-center'>
        <span>{props.label}</span>
        <span>>></span>
    </div>
  )
}

export default TableHeadCell
