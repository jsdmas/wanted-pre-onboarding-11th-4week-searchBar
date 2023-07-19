import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PAGE_DESCRIPTION } from '../../constants/PAGE_DESCRIPTION';
import { IndexProvider } from '../../context/indexState';
import { DataProvider } from '../../context/data';
import { FieldProvider } from '../../context/filed';
import { FormProvider } from '../../context/form';

function Home() {
  return (
    <Layout header={<Header content={PAGE_DESCRIPTION.HEADER} />}>
      <IndexProvider>
        <DataProvider>
          <FormProvider>
            <FieldProvider name="q">
              <SearchBar />
            </FieldProvider>
          </FormProvider>
        </DataProvider>
      </IndexProvider>
    </Layout>
  );
}

export default Home;
