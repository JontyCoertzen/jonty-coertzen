import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Top() {
  return (
    <video
      autoPlay={true}
      muted={true}
      controls={true}
      loop={true}
      preload="auto"
      style={{ width: "100%", height: "100%" }}
      src="/assets/videos/55-Tv-1July.mp4"
      type="video/mp4"
    />
  );
}
