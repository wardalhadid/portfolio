import Head from 'next/head'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export function getStaticProps() {
const projects = [
  {
    title: "SupaNotes",
    url: "https://supa-notes-vghz-bxseuaaq7-wardalhadid.vercel.app/",
    source: "https://github.com/wardalhadid/SupaNotes",
    description: "Notes web app that allows users to login, create, edit, and delete notes. built with Next.js, daisyui, PlanetScale, Prisma and tRPC",
    images:[ 
      {src: "/images/sn/sn1.png", width: 2880, height: 1754}, 
      {src: "/images/sn/sn2.png", width: 2854, height: 1650},
      {src: "/images/sn/sn3.png", width: 2874, height: 1754},
      {src: "/images/sn/sn4.png", width: 1443, height: 872},
      {src: "/images/sn/sn5.png", width: 2876, height: 1746}, 
      {src: "/images/sn/sn6.png", width: 2876, height: 1756},
      {src: "/images/sn/sn7.png", width: 2880, height: 1750},
      {src: "/images/sn/sn8.png", width: 2878, height: 1750},
    ],
    stack: "Next.js | tRPC | daisyui | PlanetScale | Prisma | Tailwind CSS | Clerk"
  },
  {
    title: "Expenses Tracker",
    url: "https://www.expensesify.online/",
    source: "https://github.com/wardalhadid/Expensesify",
    description: "Expenses tracker Web Application. The UI was built in React, state management using Redux, database is managed using MongoDB, styles using Flowbite and Tailwind CSS, and the backend was bult with NodeJs and Express. The app allows the user to search, sort, add, update and delete expenses.",
    images: [
     {src: "/images/expenses1.png", width: 1920, height: 879}, 
     {src: "/images/expenses2.png", width: 1920, height: 821}, 
     {src: "/images/expenses3.png", width: 1920, height: 864}, 
     {src: "/images/expenses4.png", width: 1920, height: 868}, 
    ],
    stack: "React | NodeJS | React-Router | Redux | MongoDB | Tailwind CSS"
  },
  {
    title: "Movie DB",
    url: "https://github.com/wardalhadid/movieDB",
    source: "https://github.com/wardalhadid/movieDB",
    description: "Popular movies database web application. The UI was built using Svelte, API from TMDB and styled using CSS.",
    images: [
     {src: "/images/movieDB/mdb1.png", width: 1920, height: 883},
     {src: "/images/movieDB/mdb2.png", width: 1176, height: 663},
     {src: "/images/movieDB/mdb3.png", width: 1920, height: 886},
     {src: "/images/movieDB/mdb4.png", width: 564, height: 681},
    ],
    stack: "Svelte | CSS"
  },
  {
    title: "TinDog",
    url: "https://wardalhadid.github.io/TinDog-landingpage/",
    source: "https://github.com/wardalhadid/TinDog-landingpage",
    description: "Tinder landing page clone using HTML and Bootstrap.",
    images: [
      {src: "/images/tindog/tin1.png", width: 374, height: 659},
      {src: "/images/tindog/tin2.png", width: 1920, height: 886},
      {src: "/images/tindog/tin3.png", width: 1920, height: 893},
      {src: "/images/tindog/tin4.png", width: 1920, height: 855},
      {src: "/images/tindog/tin5.png", width: 1920, height: 854},
      {src: "/images/tindog/tin6.png", width: 1920, height: 887},
      {src: "/images/tindog/tin7.png", width: 1920, height: 883},
    ],
    stack: "HTML | CSS | Bootstrap"
  },
  {
    title: "Dual Keys Caesar Cipher",
    url: "https://wardalhadid.github.io/Dual-Keys-Caeser-Cipher/",
    source: "https://github.com/wardalhadid/Dual-Keys-Caeser-Cipher",
    description: "A dual keys instead of the regular one key Caesar Cipher Encrypter-Decrypter built with HTML, CSS, Bootsrap, and JavaScript.",
    images: [
      {src: "/images/caesarCipher/c1.png", width: 1920, height: 881},
      {src: "/images/caesarCipher/c2.png", width: 1920, height: 890},
      {src: "/images/caesarCipher/c3.png", width: 1920, height: 887},
      {src: "/images/caesarCipher/c4.png", width: 1920, height: 880},
    ],
    stack: "HTML | CSS | Bootstrap | JavaScript"
  },
  {
    title: "Flappy Bird",
    url: "https://wardalhadid.github.io/flappyBird/",
    source: "https://github.com/wardalhadid/flappyBird",
    description: "Flappy Bird game built with vanilla Javascript, html, and css using html Canvas.",
    images: [
      {src: "/images/flappybird.png", width: 839, height: 854}
    ],
    stack: "Javascript | CSS"
  },
  {
    title: "Markdown Previewer",
    url: "https://codepen.io/ward-alhadid/pen/wvrXKzm",
    source: "https://codepen.io/ward-alhadid/pen/wvrXKzm",
    description: "Markdown previewer web application. The UI was built using React and styled using CSS.",
    images: [
      {src: "/images/markdown-previewer.png", width: 1384, height: 783}
    ],
    stack: "React | CSS"
  },
  {
    title: "Drum Machine",
    url: "https://codepen.io/ward-alhadid/pen/eYGxxea",
    source: "https://codepen.io/ward-alhadid/pen/eYGxxea",
    description: "Drum machine web application. The UI was built using React and styled using CSS. Users are able to use the keyboard or click the buttons on the screen to play drum sounds.",
    images: [
      {src: "/images/drum-machine.png", width: 1127, height: 693}, 
    ],
    stack: "React | CSS"
  },
  {
    title: "Random Quote Generator",
    url: "https://codepen.io/ward-alhadid/pen/dyVmyPR",
    source: "https://codepen.io/ward-alhadid/pen/dyVmyPR",
    description: "Random quote generator web application. The UI was built using React and styled using CSS. users can generate random quotes and share them on twitter.",
    images: [
      {src: "/images/quotes/q1.png", width: 1619, height: 754}, 
      {src: "/images/quotes/q2.png", width: 1626, height: 753}, 
      {src: "/images/quotes/q3.png", width: 1625, height: 753},
    ],
    stack: "React | CSS"
  },
  {
    title: "Calculator",
    url: "https://codepen.io/ward-alhadid/pen/NWwPzKM",
    source: "https://codepen.io/ward-alhadid/pen/NWwPzKM",
    description: "Calculator web application. The UI was built using React and styled using CSS.",
    images: [
     {src: "/images/calculator.png", width: 626, height: 590}, 
    ],
    stack: "React | CSS"
  },
  {
    title: "Pomodoro Clock",
    url: "https://codepen.io/ward-alhadid/pen/vYRObRW",
    source: "https://codepen.io/ward-alhadid/pen/vYRObRW",
    description: "Pomodoro clock web application. The UI was built using React and styled using CSS. Users can set focus time and break time and start the countdown.",
    images: [
     {src: "/images/pomodoro.png", width: 1579, height: 744}, 
    ],
    stack: "React | CSS"
  },
  {
    title: "URL Shortner",
    url: "https://replit.com/@WardHadid/boilerplate-project-urlshortener#index.js",
    source: "https://replit.com/@WardHadid/boilerplate-project-urlshortener#index.js",
    description: "NodeJS application that allows customers to enter a url and get a shorter url.",
    images: [
      {src: "/images/url-shortener1.png", width: 1030, height: 581},
      {src: "/images/url-shortener2.png", width: 817, height: 435}, 

    ],
    stack: "NodeJS | MongoDB"
  },
];
return {props: {projects}}
}

export default function Home({projects}) {
  return (
    <>
      <Head>
        <title>Ward Alhadid Portfolio</title>
        <meta name="description" content="port" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <main>
        <Layout projects={projects}/>
      </main>
    </>
  )
}
