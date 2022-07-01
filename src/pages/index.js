import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <video
      autoPlay={true}
      muted={true}
      controls={true}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    >
      <source src="/assets/videos/55-Tv-1July.mp4" type="video/mp4" />
    </video>
  );
}