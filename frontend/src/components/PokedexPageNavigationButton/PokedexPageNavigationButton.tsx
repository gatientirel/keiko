import { FC } from "react"
import { Link } from "react-router-dom"
import NextIcon from "./caret-right.svg"
import PrevIcon from "./caret-left.svg"
import styles from "./PokedexPageNavigationButton.module.css"

type PokedexPageNavigationButtonProps = {
  type: "next" | "prev"
  targetPage: number
  disabled?: boolean
}

export const PokedexPageNavigationButton: FC<PokedexPageNavigationButtonProps> = ({ type, targetPage, disabled }) => {
  return (
    <Link className={disabled ? styles.disabled : ""} to={`../${targetPage}`} relative={"path"}>
      <div className={styles.icon_container}>{type === "next" ? <img src={NextIcon} /> : <img src={PrevIcon} />}</div>
    </Link>
  )
}
