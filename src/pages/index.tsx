import styles from '../styles/pages/Home.module.css'
import { ExperienceBar } from '../components/ExperienceBar';
import { CompleteChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountDownProvider } from '../contexts/CountdownContext';


import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
