import Image from "next/image"
import { quotesCardType } from "@/utils/types"
import styles from "./quotesCard.module.css"

const QuotesCard = ({ data }: quotesCardType) => {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialDescription}>{data.description}</p>
      <div className={styles.testimonialWrapper}>
        <p className={styles.testimonialPersonName}>{data.name}</p>
        <p className={styles.testimonialPersonDesignation}>
          {data.designation}
        </p>
      </div>
    </div>
  )
}

export default QuotesCard
