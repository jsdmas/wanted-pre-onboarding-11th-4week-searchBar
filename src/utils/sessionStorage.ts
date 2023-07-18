import { SESSIONSTORAGE_KEY } from '../constants/sessionStorage';

function getSessionStorageData() {
  const existingData = sessionStorage.getItem(SESSIONSTORAGE_KEY);
  const existingArray = existingData ? [...JSON.parse(existingData)] : [];
  return existingArray;
}

export default getSessionStorageData;
