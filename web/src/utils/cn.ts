/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-02 12:53:16
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-02 12:53:25
 * @FilePath: \Hoffmann_web_page\web\src\utils\cn.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
