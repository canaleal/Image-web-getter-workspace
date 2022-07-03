
import React from 'react'
import { Data } from '../constants/index';
import { useFetch } from '../hooks/fetch-hook';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import AttentionBar from '../components/AttentionBar';

const Rule = () => {
  const { data, error, isLoaded } = useFetch(Data.RULE_URL);

  return (
    <section>
      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="Gallery" color="bg-green" zHeight="z-10" />

            <AttentionBar message="This page contains my work, as well as my favorite pieces from other artists." />

            <GridLayout id="gallery" columns=" md:grid-cols-3">
              {data.map((artElement) => (
                <GalleryCard key={artElement.id} artElement={artElement} />
              ))}
            </GridLayout>

          </>
        )
        : <p />}
    </section>
  )
}

export default Rule;