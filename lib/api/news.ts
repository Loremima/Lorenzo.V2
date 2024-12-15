export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  url: string;
}

// Cache the news data for 5 minutes
let cachedNews: NewsPost[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getNews(): Promise<NewsPost[]> {
  // Check if we have cached data that's still valid
  if (cachedNews && Date.now() - lastFetchTime < CACHE_DURATION) {
    return cachedNews;
  }

  try {
    // Make.com webhook URL (you'll need to create this in Make.com)
    const response = await fetch('YOUR_MAKE_WEBHOOK_URL');
    const data = await response.json();
    
    // Transform and validate the data
    const news = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      date: new Date(item.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      category: item.category,
      image: item.image,
      slug: item.slug,
      url: item.url
    }));

    // Update cache
    cachedNews = news;
    lastFetchTime = Date.now();
    
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return cached data if available, even if expired
    return cachedNews || [];
  }
}