/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-02 12:32:03
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-02 13:05:09
 * @FilePath: \Hoffmann_web_page\web\astro.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()] // preact()]
});