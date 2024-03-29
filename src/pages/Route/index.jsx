import styles from '@src/styles/Route.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Route() {
  const router = useRouter();
  const latitude = '';
  const longitude = '';

  if (typeof window !== 'undefined') {
    const latitude = localStorage.getItem('latitude');
    const longitude = localStorage.getItem('longitude');
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Route</h2>
          <div className={styles.header_back}>
            <img src={'/assets/svg/back.svg'} onClick={() => router.back()} />
          </div>
        </div>

        {/* Routes */}
        <div className={styles.route}>
          <div className={styles.route_b}>
            <div className={styles.border_outline} />
            <p>Your Current Location</p>
          </div>
          <div className={styles.line} />
          <div className={styles.route_b}>
            <div className={styles.border_full} />
            <div className={styles.destination}>
              <img src={'/assets/svg/bus.svg'} />
              <div className={styles.station_number}>34</div>
              <div style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Terminal Dago</div>
            </div>
          </div>
        </div>
        <div className={styles.time}>3 min</div>
      </div>
      {/* Maps */}
      <div className={styles.map}>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8589.75454094518!2d${latitude}!3d${longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d-6.8772645!2d107.6157733!4m5!1s0x2e68e6e214c374b1%3A0xd38ade4910eec904!2sterminal%20dago!3m2!1d-6.867056!2d107.62100149999999!5e0!3m2!1sen!2sid!4v1683191935372!5m2!1sen!2sid`}
          style={{ border: 0, width: '100%', height: '70.7vh' }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <h3>
          22 min <span style={{ color: '#C0C0C0' }}>(1.5 km)</span>
        </h3>
      </div>
    </div>
  );
}
