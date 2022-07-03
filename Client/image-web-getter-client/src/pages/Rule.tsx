
import React from 'react'
import { Data } from '../constants/index';
import { useFetch } from '../hooks/fetch-hook';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import AttentionBar from '../components/AttentionBar';
import GridLayout from '../layouts/GridLayout';
import ImageCard from '../components/ImageCard';

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

  
            <GridLayout id="gallery" columns=" md:grid-cols-3" >
                {data.map((item, index) => (
                  <ImageCard key={item.id} id={item.id} colSpan="1" containerlink={item.container_link} imglink={item.image_link} title={item.name} isNsfw={false} />
                ))}
            </GridLayout>

          </>
        )
        : <p />}
    </section>
  )
}

export default Rule;