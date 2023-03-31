import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export function getStaticProps() {
const projects = [
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
      "/images/movieDB.png"
    ],
    stack: "Svelte | CSS"
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
      "/images/quote-generator.png", 
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
