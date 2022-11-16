import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Text } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Text h5>
            Built by Andrew Do
        </Text>
      </footer>
    </div>
  )
}
