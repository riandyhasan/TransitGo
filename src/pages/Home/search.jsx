import styles from "@src/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home({ setShow, show }) {
  const [query, setQuery] = useState("");
  return (
    <div className={show ? styles.searchbox : ""}>
      {/* Header */}
      <div className={styles.searchbox_s}>
        <input
          className={styles.searchbar}
          type={"text"}
          value={query}
          placeholder={"Where do you want to go?"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div onClick={() => setShow(false)}>Cancel</div>
      </div>
    </div>
  );
}
