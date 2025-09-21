import type { JSX } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleTheme, selectTheme } from "../../store/themeSlice"

export const ThemeToggle = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const themeColor = useAppSelector(selectTheme)

  const handleSwitchTheme = () => {
    const newTheme = themeColor === "white" ? "grey" : "white"
    dispatch(toggleTheme(newTheme))
  }

  return (
    <div>
      <button onClick={handleSwitchTheme}>
        {themeColor === "white" ? "Переключить на темную" : "Переключить на светлую"}
      </button>
      <p>Текущая тема: {themeColor}</p>
    </div>
  )
}