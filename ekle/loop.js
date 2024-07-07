// components/LoopingVideo.js

import styles from '../ekle/stil.module.css'; // CSS dosyasını ekleyin

const LoopingVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="https://forum.ve3.plus/assets/files/2024-04-28/docs-turkce/introduction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default LoopingVideo;