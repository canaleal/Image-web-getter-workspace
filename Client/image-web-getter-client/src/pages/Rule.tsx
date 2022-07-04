
import React from 'react'
import { Data } from '../constants/index';
import { useFetch } from '../hooks/fetch-hook';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import AttentionBar from '../components/AttentionBar';
import ImageCard from '../components/ImageCard';
import { Pagination } from '../layouts/Pagination';



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

            <Pagination
              data={data}
              RenderComponent={ImageCard}
              pageLimit={10}
              dataLimit={18}
            />

          </>
        )
        : <p />}
    </section>
  )
}


export default Rule;