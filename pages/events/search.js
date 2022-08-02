import qs from 'qs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from 'components/EventItem';
import styles from '@/styles/Search.module.css';

export default function SearchPage({ events }) {
  // console.log(events);
  const router = useRouter();
  return (
    <Layout title='Search Results'>
      <h1>Search Results for : {router.query.term}</h1>
      <hr />
      <Link href='/events'>
        <a className={styles.back}>&larr; Go Back</a>
      </Link>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

// Will execute each time we come to the page
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  // console.log(events)will show on the terminal(server) not on the client(browser)

  return {
    props: {
      events,
    },
  };
}

// *****************************************

// What was applied before adding search query
/* export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: {
      events,
      // Static props will render at build time add revalidate (1s) so it re-validates after 1s if data changes.
      revalidate: 1,
    },
  };
} */
