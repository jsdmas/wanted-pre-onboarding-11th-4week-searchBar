import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { PAGE_DESCRIPTION } from '../../constants/PAGE_DESCRIPTION';

function Home() {
  return <Layout header={<Header content={PAGE_DESCRIPTION.HEADER} />}></Layout>;
}

export default Home;
