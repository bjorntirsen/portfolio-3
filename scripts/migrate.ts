// import createStoryblokComponent from './createStoryblokComponent';
import fetchData from './fetchApiData';

async function main() {
  const apiData = await fetchData();
  for (const item of apiData) {
    console.log('item: ', item);
    // const storyblokData = {
    //   story: {
    //     name: item.title,
    //     slug: item.slug,
    //     content: {
    //       // Adjust content structure according to your needs
    //       // For example, you might want to use "item.description" for component content
    //     },
    //   },
    // };
    // await createStoryblokComponent(storyblokData);
  }
}

main();
