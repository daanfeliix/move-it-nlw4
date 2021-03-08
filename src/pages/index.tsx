import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css'
import { ExperienceBar } from '../components/ExperienceBar';
import { CompleteChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { CountDownProvider } from '../contexts/CountdownContext';


import Head from 'next/head'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props:HomeProps) {
  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>

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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {



  const { level, currentExperience, challengesCompleted } = ctx.req.cookies



  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}
