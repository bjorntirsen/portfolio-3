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

async function fetchProjects(): Promise<
  Array<ApiData['data']['data'][0]> | []
> {
  try {
    if (!process.env.PORTFOLIO_API_URL)
      throw new Error('Missing env variable PORTFOLIO_API_URL');
    const response = await fetch(process.env.PORTFOLIO_API_URL);
    const data: ApiData = await response.json();
    return data.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchProjects;
