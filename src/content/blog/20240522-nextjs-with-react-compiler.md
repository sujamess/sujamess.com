---
title: 'ใช้ React Compiler คู่กับ Next.js กัน'
description: 'ลองใช้ React Compiler บน Next.js ว่าจะเร็วขึ้น/ดีขึ้นไหม'
pubDate: '2024-05-22'
heroImage: '/20240522-nextjs-with-react-compiler/placeholder.jpg'
tags: Next.js, React
---

หลังจากที่ทาง React ได้มีการปล่อย React Compiler ออกมา ก็ได้เรียกเสียงฮือฮาให้ Community มาก เพราะตัว React Compiler มันจะช่วย memoized ต่าง ๆ ให้แบบอัตโนมัติ แถม Meta ได้เอาไป applied กับแอปพลิเคชั่นตัวเองแล้วด้วย คือ Quest Store กับ [Instagram](https://instagram.com) ซึ่งจาก statistics ที่ Meta เอามาให้ดูพบว่า user interactions เร็วขึ้น 2.5 เท่า, initial load times เร็วขึ้น 12% แถมไม่ใช้ memory เพิ่มขึ้นเลยอีกต่างหาก

## มันช่วยอะไรนะ?

หลาย ๆ คนคงจะคุ้นชินกับ memoization ดีอยู่แล้วเช่นพวก `useMemo`, `useCallback`, `React.memo` งั้นมันช่วยอะไรให้ชีวิตนะ? ทาง React Team ก็เลยให้เหตุผลว่า พวก memoization มันทรงพลังแหละ แต่บางคนก็ลืมใช้บ้าง หรือใช้แล้วแต่ก็ใช้มันผิด ๆ ไปบ้าง ตัว React Compiler ก็เลยเกิดขึ้นมาด้วยประมาณฉะนี้ มันจะ follows JavaScript and [Rules of React](https://react.dev/reference/rules) ให้ แล้วถ้ามันเจอว่ามัน breakages the rules เมื่อไหร่ มันก็จะ skip ไปเลย ทำให้ลดการ rerender ลงแบบอัตโนมัติ

ถ้าใครสนใจตัว React Compiler ตอนนี้เค้า Open Sourced แล้ว ไปนัวกันได้ที่ [GitHub](https://github.com/facebook/react/tree/main/compiler)

## แล้ว Next.js ล่ะ?

หลังจากที่ปล่อย React Compiler ออกมา เราที่ใช้ Next.js อยู่ก็อยากจะลองบ้าง เพราะมีโปรเจกต์นึงใช้อยู่พอดี และเป็นโปรเจกต์ที่กึ่ง ๆ sandbox ไว้ทดลองอยู่แล้ว ก็เลยเป็นฤกษ์งามยามดีในการเขียน blog แถมได้ลองของใหม่อีก ประกอบกับเจอ [PR](https://github.com/vercel/next.js/pull/65804) นี้ของ Next.js ที่ experimental support ตัว React Compiler แล้ว + Documentation [React Compiler Usage with Next.js](https://react.dev/learn/react-compiler#usage-with-nextjs) 🤤 หวานล่ะทีนี้

## ช้าอยู่ใย ไปลุยกันเลย

*เตือนไว้ก่อนว่าสิ่งนี้ยังไม่เหมาะกับการใช้บน production ในตอนนี้ เพราะยังเป็น Experimental อยู่ครับ*

ก่อนอื่นมา install Next.js Canary, React Canary, React Dom Canary กับตัว `babel-plugin-react-compiler` ฮะ
```bash
pnpm install next@canary babel-plugin-react-compiler react@canary react-dom@canary
```

แล้วก็ปรับ config ใน `next.config.{js|mjs}` ให้ใช้ Experimental React Compiler เป็นอันเสร็จสิ้นพิธี สั้น ๆ ง่าย ๆ ฮะ
```next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
```

ผลหลังจากติดตั้งและลองใช้งานเบื้องต้น คือ หน้าเว็ปยังรันได้ปกติ และไม่ได้รู้สึกว่าต่างจากเดิมเท่าไหร่ 😂 เพราะดูด้วยตาเนื้ออย่างเดียว ยังไม่ได้ลอง profiling เพิ่มเติมฮะ
