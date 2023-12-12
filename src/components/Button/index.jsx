/* eslint-disable react/prop-types */
import { Button } from "antd"

const BaseButton = ({value,type,icon,onClick}) => {
  return (
    <Button type={type} icon={icon} onClick={onClick}>{value}</Button>
  )
}

export default BaseButton