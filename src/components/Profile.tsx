import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){

    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent.fmoc4-1.fna.fbcdn.net/v/t1.0-9/59435147_2192174094208765_5160731371710185472_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHYNLN39kTtMXafEUCy4HqmuJbWnggTrNK4ltaeCBOs0rK1SLlfxhuqsQgg47jPK5HWst-3vTsOc1GY2numPs_p&_nc_ohc=r_CVfBM95xwAX-8NxZd&_nc_ht=scontent.fmoc4-1.fna&oh=31a7965e9f2dda3833522bb12758ebee&oe=60693519" alt="Daniel Felix"/>
            <div>
                <strong>Daniel Felix</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>

        </div>
    )
}