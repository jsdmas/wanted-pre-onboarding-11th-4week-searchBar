import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PAGE_DESCRIPTION } from '../../constants/PAGE_DESCRIPTION';

function Home() {
  return (
    <Layout header={<Header content={PAGE_DESCRIPTION.HEADER} />}>
      <SearchBar />
    </Layout>
  );
}

export default Home;
