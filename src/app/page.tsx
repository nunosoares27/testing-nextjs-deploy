import Image from 'next/image';
import { createClient, groq } from 'next-sanity';
import { Roboto } from '@next/font/google';
import styles from './page.module.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '900'] });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2022-03-25',
  useCdn: true,
});

export const revalidate = 60 * 3;

export default async function Home() {
  async function getJobs() {
    const res = await client.fetch(
      groq`
        *[_type == "jobs"]{
  _id,
  name,
  description,
  startDate,
  endDate,
  created_at,
  edited_at,
  "image": image.asset->url,
  "caption": image.caption
}
    `,
      // ,
      //   { next: { revalidate: 60 * 3 } }, this not working for now, issues on next-sanity package. need to use the const
      // revalidate above for this to work
    );
    return res;
  }

  const jobs = await getJobs();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={roboto.className} style={{ fontWeight: 900 }}>
          My Cv
        </h1>
        {jobs.map((job: any) => (
          <div key={job._id}>
            <Image src={job.image} width={500} height={500} alt={job.caption} />
            <p className={roboto.className} style={{ fontWeight: 400 }}>
              {job.name}
            </p>
            <p className={roboto.className} style={{ fontWeight: 400 }}>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
