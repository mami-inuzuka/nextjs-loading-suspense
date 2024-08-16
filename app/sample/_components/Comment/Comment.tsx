type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Comment = async () => {
  async function delayedFetch(url: string): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch(url);
        resolve(response);
      }, 5000); // 5秒の遅延
    });
  }

  const result = await delayedFetch("https://jsonplaceholder.typicode.com/comments/1");
  const data: Comment = await result.json();

  return <p>{data.name}</p>;
};
