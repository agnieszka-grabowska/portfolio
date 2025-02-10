import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { getThemeCookie } from "../../../actions";
import ThemeIconButton from "./ThemeIconButton";

export default async function ThemeIcon() {
  const theme = await getThemeCookie();
  const size = 24;

  return (
    <ThemeIconButton>
      {theme === "dark" ? <MdLightMode size={size} /> : <MdDarkMode size={size} />}
    </ThemeIconButton>
  );
}
