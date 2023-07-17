import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PAGE_DESCRIPTION } from '../../constants/PAGE_DESCRIPTION';
import { FieldProvider } from '../../context/filed';
import { FormProvider } from '../../context/form';

function Home() {
  return (
    <Layout header={<Header content={PAGE_DESCRIPTION.HEADER} />}>
      <FormProvider>
        <FieldProvider name="keyword">
          <SearchBar />
        </FieldProvider>
      </FormProvider>
    </Layout>
  );
}

export default Home;
