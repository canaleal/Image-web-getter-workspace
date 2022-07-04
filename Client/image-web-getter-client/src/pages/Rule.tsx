
import React, { useState } from 'react'
import { Data } from '../constants/index';
import { useFetch } from '../hooks/fetch-hook';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import AttentionBar from '../components/AttentionBar';
import GridLayout from '../layouts/GridLayout';
import ImageCard from '../components/ImageCard';
import { Rule_Image } from '../types/Rule_Image';


function Pagination({ data, RenderComponent, pageLimit, dataLimit }: any) {
  const [totalPages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function goToFirstPage(){
    setCurrentPage(1);
  }

  function goToLastPage(){
    setCurrentPage(totalPages);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let group = new Array(pageLimit).fill(0).map((_, idx) => { 
      
      let pageNumber = start + idx + 1;
      if (pageNumber <= totalPages) {
        return pageNumber;
      }
      else{
        return null;
      }
    });
    
    return group.filter(n => n); 
  };
  
  return (
    <>
      <GridLayout id="gallery" columns=" md:grid-cols-6">
        {getPaginatedData().map((item: Rule_Image) => (
          <RenderComponent key={item.id} id={item.id} colSpan="1" containerlink={item.container_link} imglink={item.image_link} title={item.name} isNsfw={false} />
        ))}
      </GridLayout>


      <div className="pagination">

        <button onClick={goToFirstPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          <i className="fa fa-chevron-left" /><i className="fa fa-chevron-left" />
        </button>
    
        <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          <i className="fa fa-chevron-left" />
        </button>

     
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

     
        <button
          onClick={goToNextPage} className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>
          <i className="fa fa-chevron-right" />
        </button>

        <button onClick={goToLastPage} className={`prev ${currentPage === totalPages ? 'disabled' : ''}`}>
          <i className="fa fa-chevron-right" /><i className="fa fa-chevron-right" />
        </button>
      </div>
    </>
  );
}


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
              pageLimit={15}
              dataLimit={18}
            />

          </>
        )
        : <p />}
    </section>
  )
}


export default Rule;