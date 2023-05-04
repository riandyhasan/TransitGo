import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@src/styles/Home.module.css";
import { Transition } from "react-transition-group";

export default function Home() {
  const ref = useRef(null);
  const [splashState, setSplashState] = useState("splash-show");

  useEffect(() => {
    // Change state to 'splash-exit' after 2 seconds
    const exitTimeout = setTimeout(() => {
      setSplashState("splash");
    }, 2000);

    // Clear timeouts when component unmounts
    return () => {
      clearTimeout(exitTimeout);
    };
  }, []);
  return (
    <>
      <Transition in={true} timeout={200} unmountOnExit appear nodeRef={ref}>
        <div className={styles[splashState]}>
          <Image src={"/assets/img/logo.png"} width={226} height={79} />
        </div>
      </Transition>
    </>
  );
}
