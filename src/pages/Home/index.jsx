import styles from '@src/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState([]);
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

  return (
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
    </div>
  );
}
