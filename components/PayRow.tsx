'use client'

const PayRow = ({title,sub_title}: {title: string; sub_title: any}) => {
  return (
    <div  className="mb-6">
      <span className="text-black/30">{title}</span>
      <p>{sub_title}</p>
    </div>
  )
}

export default PayRow