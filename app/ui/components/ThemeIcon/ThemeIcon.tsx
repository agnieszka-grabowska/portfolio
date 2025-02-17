import { getThemeCookie } from "../../../actions";
import ThemeIconButton from "./ThemeIconButton";

export default async function ThemeIcon() {
  const theme = await getThemeCookie();

  return <ThemeIconButton theme={theme} />;
}
