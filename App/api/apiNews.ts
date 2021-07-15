import apiClient from './apiClient';

import dummyData from './dummy-data';

export const getNews = async () => {
  try {
    // const response = await apiClient.get(
    //   '/MXXTRgRO?token=X3wlyxgVSqpQneYHhL4T2Q',
    // );
    // console.log(JSON.stringify(response, null, 4))
    return JSON.stringify(dummyData);
  } catch (error) {
    console.log(error);
  }
};

export const getNewsItem = async (newsItemId: string) => {
  try {
    return JSON.stringify(dummyData.find(item => item.id === +newsItemId));
  } catch (error) {
    console.log(error);
  }
};
