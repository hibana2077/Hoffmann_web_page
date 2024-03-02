/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-02 12:55:20
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-02 13:18:47
 * @FilePath: \Hoffmann_web_page\web\src\components\GoogleGeminiEffect.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Research With Hoffmann System"
        description="The Hoffmann System is a new way to research and develop new products. It is a set of tools and methods that help you to create new products and services."
      />
    </div>
  );
}
