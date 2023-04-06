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
    images: [
      "/images/sn/sn1.png", 
      "/images/sn/sn2.png",
      "/images/sn/sn3.png",
      "/images/sn/sn4.png",
      "/images/sn/sn5.png", 
      "/images/sn/sn6.png",
      "/images/sn/sn7.png",
      "/images/sn/sn8.png",
    ],
    stack: "Next.js | tRPC | daisyui | PlanetScale | Prisma | Tailwind CSS | Clerk"
  },
  {
    title: "Expenses Tracker",
    url: "https://www.expensesify.online/",
    source: "https://github.com/wardalhadid/Expensesify",
    description: "Expenses tracker Web Application. The UI was built in React, state management using Redux, database is managed using MongoDB, styles using Flowbite and Tailwind CSS, and the backend was bult with NodeJs and Express. The app allows the user to search, sort, add, update and delete expenses.",
    images: [
      "/images/expenses1.png", 
      "/images/expenses2.png",
      "/images/expenses4.png",
      "/images/expenses3.png"
    ],
    stack: "React | NodeJS | React-Router | Redux | MongoDB | Tailwind CSS"
  },
  {
    title: "Movie DB",
    url: "https://github.com/wardalhadid/movieDB",
    source: "https://github.com/wardalhadid/movieDB",
    description: "Popular movies database web application. The UI was built using Svelte, API from TMDB and styled using CSS.",
    images: [
      "/images/movieDB/mdb1.png",
      "/images/movieDB/mdb2.png",
      "/images/movieDB/mdb3.png",
      "/images/movieDB/mdb4.png",

    ],
    stack: "Svelte | CSS"
  },
  {
    title: "TinDog",
    url: "https://wardalhadid.github.io/TinDog-landingpage/",
    source: "https://github.com/wardalhadid/TinDog-landingpage",
    description: "Tinder landing page clone using HTML and Bootstrap.",
    images: [
      "/images/tindog/tin2.png",
      "/images/tindog/tin3.png",
      "/images/tindog/tin4.png",
      "/images/tindog/tin5.png",
      "/images/tindog/tin6.png",
      "/images/tindog/tin7.png",

    ],
    stack: "HTML | CSS | Bootstrap"
  },
  {
    title: "Dual Keys Caesar Cipher",
    url: "https://wardalhadid.github.io/Dual-Keys-Caeser-Cipher/",
    source: "https://github.com/wardalhadid/Dual-Keys-Caeser-Cipher",
    description: "A dual keys instead of the regular one key Caesar Cipher Encrypter-Decrypter built with HTML, CSS, Bootsrap, and JavaScript.",
    images: [
      "/images/caesarCipher/c1.png",
      "/images/caesarCipher/c2.png",
      "/images/caesarCipher/c3.png",
      "/images/caesarCipher/c4.png",
    ],
    stack: "HTML | CSS | Bootstrap | JavaScript"
  },
  {
    title: "Markdown Previewer",
    url: "https://codepen.io/ward-alhadid/pen/wvrXKzm",
    source: "https://codepen.io/ward-alhadid/pen/wvrXKzm",
    description: "Markdown previewer web application. The UI was built using React and styled using CSS.",
    images: [
      "/images/markdown-previewer.png"
    ],
    stack: "React | CSS"
  },
  {
    title: "Drum Machine",
    url: "https://codepen.io/ward-alhadid/pen/eYGxxea",
    source: "https://codepen.io/ward-alhadid/pen/eYGxxea",
    description: "Drum machine web application. The UI was built using React and styled using CSS. Users are able to use the keyboard or click the buttons on the screen to play drum sounds.",
    images: [
      "/images/drum-machine.png", 
    ],
    stack: "React | CSS"
  },
  {
    title: "Random Quote Generator",
    url: "https://codepen.io/ward-alhadid/pen/dyVmyPR",
    source: "https://codepen.io/ward-alhadid/pen/dyVmyPR",
    description: "Random quote generator web application. The UI was built using React and styled using CSS. users can generate random quotes and share them on twitter.",
    images: [
      "/images/quotes/q1.png", 
      "/images/quotes/q2.png", 
      "/images/quotes/q3.png", 

    ],
    stack: "React | CSS"
  },
  {
    title: "Calculator",
    url: "https://codepen.io/ward-alhadid/pen/NWwPzKM",
    source: "https://codepen.io/ward-alhadid/pen/NWwPzKM",
    description: "Calculator web application. The UI was built using React and styled using CSS.",
    images: [
      "/images/calculator.png", 
    ],
    stack: "React | CSS"
  },
  {
    title: "Pomodoro Clock",
    url: "https://codepen.io/ward-alhadid/pen/vYRObRW",
    source: "https://codepen.io/ward-alhadid/pen/vYRObRW",
    description: "Pomodoro clock web application. The UI was built using React and styled using CSS. Users can set focus time and break time and start the countdown.",
    images: [
      "/images/pomodoro.png", 
    ],
    stack: "React | CSS"
  },
  {
    title: "URL Shortner",
    url: "https://replit.com/@WardHadid/boilerplate-project-urlshortener#index.js",
    source: "https://replit.com/@WardHadid/boilerplate-project-urlshortener#index.js",
    description: "NodeJS application that allows customers to enter a url and get a shorter url.",
    images: [
      "/images/url-shortener1.png", 
      "/images/url-shortener2.png"
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
