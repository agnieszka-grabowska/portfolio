"use server";

import { cookies } from "next/headers";

export async function getThemeCookie() {
  return cookies().get("theme")?.value ?? "light";
}

export async function toggleThemeCookie() {
  const currentTheme = await getThemeCookie();
  cookies().set("theme", currentTheme === "dark" ? "light" : "dark");
}
