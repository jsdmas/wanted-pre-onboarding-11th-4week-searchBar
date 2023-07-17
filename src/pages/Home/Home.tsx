import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PAGE_DESCRIPTION } from '../../constants/PAGE_DESCRIPTION';
import { FormProvider } from '../../context/form';

function Home() {
  return (
    <Layout header={<Header content={PAGE_DESCRIPTION.HEADER} />}>
      <FormProvider>
        <SearchBar />
      </FormProvider>
    </Layout>
  );
}

export default Home;
