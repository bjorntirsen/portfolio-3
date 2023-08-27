import axios from 'axios';
import 'dotenv/config';

export interface ProjectData {
  _id: string;
  imageCoverUrl: string;
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  dateFirstCompleted: string;
  siteLink: string;
  whatILearned: Array<{
    icons: string[];
    _id: string;
    paragraph: string;
  }>;
  githubRepo: string;
  slug: string;
  imageCoverFilename: string;
}

interface ApiData {
  status: string;
  results: number;
  data: {
    data: ProjectData[];
  };
}

async function fetchData(): Promise<Array<ApiData['data']['data'][0]> | []> {
  try {
    if (!process.env.PORTFOLIO_API_URL)
      throw new Error('Missing env variable PORTFOLIO_API_URL');
    const response = await axios.get<ApiData>(process.env.PORTFOLIO_API_URL);
    return response.data.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchData;
