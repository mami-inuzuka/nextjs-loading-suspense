import { Post } from "./_components/Post/Post";
import { Comment } from "./_components/Comment/Comment";

export default function SamplePage() {
  return (
    <>
      <section>
        <h2>POST</h2>
        <Post />
      </section>
      <section>
        <h2>COMMENT</h2>
        <Comment />
      </section>
    </>
  );
}
