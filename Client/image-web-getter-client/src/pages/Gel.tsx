
import React from 'react'
import { Data } from '../constants/index';
import { useFetch } from '../hooks/fetch-hook';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import AttentionBar from '../components/AttentionBar';
import TableCard from '../components/TableCard';
import { Pagination } from '../layouts/Pagination';



const Rule = () => {
  const { data, error, isLoaded } = useFetch(Data.GEL_URL);


  return (
    <section>
      {error === true
        ? <Error />
        : <p />}

      {isLoaded === true && error === false

        ? (
          <>

            <PageHeader title="GEL IMAGES" color="bg-green" zHeight="z-10" />

        
            <Pagination
              data={data}
              RenderComponent={TableCard}
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