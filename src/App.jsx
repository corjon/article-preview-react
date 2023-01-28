import { useState } from 'react';
import styles from './App.module.css';
import drawers from  './assets/drawers.jpg';
import avatar from './assets/avatar-michelle.jpg';
import shareIcon from './assets/icon-share.svg';
import facebook from './assets/icon-facebook.svg';
import twitter from './assets/icon-twitter.svg';
import pinterest from './assets/icon-pinterest.svg';

function ShareSection() {
  return (
    <div className={styles.shareSection}>
      <p>share</p>
      <div className={styles.links}>
        <a href="#"><img src={facebook} alt="" aria-label="facebook" /></a>
        <a href="#"><img src={twitter} alt="" aria-label="twitterk" /></a>
        <a href="#"><img src={pinterest} alt="" aria-label="pinterest" /></a>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
}

function ShareContainer() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
  }

  return (
    <>
      <button type="button" aria-label="share" onClick={handleClick} className={styles.shareButton} style={{backgroundColor: isActive && "#6E8098"}}>
        <img src={shareIcon} alt="" style={{filter: isActive && "brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(2448%) hue-rotate(22deg) brightness(116%) contrast(100%)"}}/>
      </button>
      {isActive && <ShareSection />}
    </>
  );
}

export default function App() {
  return (
    <main className={styles.mainContainer}>
      <img src={drawers} alt="Plant in vase on a dresser" className={styles.drawers}/>
      <div>
        <div className={styles.bottomContainer}>
          <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to   help you make any room feel complete.</p>
        </div>
        <div className={styles.profile}>
          <img src={avatar} alt="Michelle"/>
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>Michelle Appleton</p>
            <p className={styles.profileDate}>28 Jun 2020</p>
          </div>
          <ShareContainer />
        </div>
      </div>
    </main>
  );
}