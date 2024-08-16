type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Post = async () => {
  async function delayedFetch(url: string): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch(url);
        resolve(response);
      }, 3000); // 3秒の遅延
    });
  }

  const result = await delayedFetch("https://jsonplaceholder.typicode.com/posts/1");
  const data: Post = await result.json();

  return <p>{data.title}</p>;
};
