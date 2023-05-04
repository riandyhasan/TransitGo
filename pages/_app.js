import "@src/styles/globals.css";
import Splash from "@src/pages/Splash";
import { useEffect } from "react";
import firebase from "@src/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default function App({ Component, pageProps }) {
  const db = getDatabase();
  const seatRef = ref(db, "is_avail");
  const latRef = ref(db, "latitude");
  const lonRef = ref(db, "longitude");

  onValue(seatRef, (snapshot) => {
    const data = snapshot.val();
    localStorage.setItem("seat", data);
  });
  onValue(latRef, (snapshot) => {
    const data = snapshot.val();
    localStorage.setItem("car_lat", data);
  });
  onValue(lonRef, (snapshot) => {
    const data = snapshot.val();
    localStorage.setItem("car_lon", data);
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      // save to local
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Splash />
    </>
  );
}
