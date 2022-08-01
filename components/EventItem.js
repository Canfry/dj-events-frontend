import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : './images/event-default.png'}
          alt='event-image'
          width={170}
          height={100}
        ></Image>
      </div>
      <div className={styles.info}>
        <h2>{evt.name}</h2>
        <p>
          {evt.date} at {evt.time}
        </p>
      </div>

      <div className={styles.link}>
        <Link href={`./events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  );
}
