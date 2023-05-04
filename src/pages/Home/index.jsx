import styles from '@src/styles/Home.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Searchbox from './search';
import firebase from '@src/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState([]);
  const [seat, setSeat] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const router = useRouter();
  const db = getDatabase();
  const seatRef = ref(db, 'is_avail');

  const TYPES = [
    {
      name: 'Bus',
      value: 'bus',
    },
    {
      name: 'Train',
      value: 'train',
    },
    {
      name: 'Angkot',
      value: 'angkot',
    },
    {
      name: 'Taxi',
      value: 'taxi',
    },
  ];

  const getType = (t) => {
    let find = false;
    type.map((item) => {
      if (item === t) find = true;
    });
    return find;
  };

  const changeType = (t) => {
    const isContain = getType(t);
    if (!isContain) {
      let temp = [];
      type.map((item) => {
        temp.push(item);
      });
      temp.push(t);
      setType(temp);
    } else {
      let temp = [];
      type.map((item) => {
        if (item !== t) temp.push(item);
      });
      setType(temp);
    }
  };

  useEffect(() => {
    onValue(seatRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setSeat(data);
    });
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.pin}>
            <img src='/assets/svg/pin.svg' />
          </div>
          <div className={styles.header_c}>
            <p>Current Location</p>
            <h3>Institut Teknologi Bandung</h3>
          </div>
        </div>
        {/* Search */}
        <div className={styles.search}>
          <input
            className={styles.searchbar}
            type={'text'}
            value={query}
            placeholder={'Where do you want to go?'}
            onChange={(e) => setQuery(e.target.value)}
            // onClick={(e) => setIsShowSearch(true)}
          />
          <div className={styles.searchbar_button}>
            <img src={'/assets/svg/search.svg'} />
          </div>
        </div>
        {/* Type */}
        <div className={styles.type}>
          <div className={styles.type_h}>
            <p>What are you looking for?</p>
            <p
              style={{ color: '#808080', cursor: 'pointer' }}
              onClick={() => setType(['bus', 'train', 'angkot', 'taxi'])}>
              Select all
            </p>
          </div>
          <div className={styles.type_l}>
            {TYPES.map((_, idx) => (
              <div
                key={idx}
                className={type.includes(_.value) ? styles.type_i_active : styles.type_i}
                onClick={() => changeType(_.value)}>
                {_.name}
              </div>
            ))}
          </div>
        </div>
        {/* Station */}
        <div className={styles.station}>
          <h3>Nearest Station</h3>
          <div className={styles.station_l}>
            <div className={styles.station_c} onClick={() => router.push('/route?station=dago')}>
              <div className={styles.station_c_info}>
                <img src='/assets/svg/bus.svg' />
                <div className={styles.station_c_detail}>
                  <div className={styles.station_c_info_detail}>
                    <div className={styles.station_number}>34</div>
                    <h4>Terminal Dago</h4>
                  </div>
                  <p>1.5 km ~ 22 min walk</p>
                </div>
              </div>
              <div className={!seat ? styles.station_c_seat_avail : styles.station_c_seat_full}>
                {!seat ? 'Available Seats: 1' : 'Full'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Searchbox setShow={setIsShowSearch} show={isShowSearch} />
    </div>
  );
}
