import { useFetch } from '../hooks/fetch-hook';
import GridLayout from "../layouts/GridLayout";
import ImageCard from '../components/ImageCard';
import { Data } from '../constants/index';
import { General_Image } from '../types/General_Image';
import Error from '../components/Error';
import PageHeader from '../components/PageHeader';
import InfiniteScroll from 'react-infinite-scroll-component';

const RuleScroll = () => {
    const { data, error, isLoaded } = useFetch(Data.RULE_URL);


    const fetchData = () => {
        // a fake async api call like which sends

    };

    return (

        <section>
            {error === true
                ? <Error />
                : <p />}

            {isLoaded === true && error === false

                ? (
                    <>

                        <PageHeader title="RULE IMAGES" color="bg-green" zHeight="z-10" />


                        <InfiniteScroll
                            dataLength={data.length} //This is important field to render the next data
                            next={fetchData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }

                        >
                            <GridLayout id="gallery" columns=" md:grid-cols-6">
                            {data.map((item: General_Image) => (
                                <ImageCard key={item.id} id={item.id} colSpan="1" containerlink={item.container_link} imglink={item.image_link} title={item.name} isNsfw={false} />
                            ))}
                            </GridLayout>
                        </InfiniteScroll>







                    </>
                )
                : <p />}
        </section>
    );
}

export default RuleScroll;