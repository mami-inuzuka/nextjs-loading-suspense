import { Post } from "./_components/Post/Post";
import { Comment } from "./_components/Comment/Comment";
import { Suspense } from "react";

export default function SamplePage() {
  return (
    <>
      <section>
        <h2>POST</h2>
        <Suspense fallback={<div>Loading Post...</div>}>
          <Post />
        </Suspense>
      </section>
      <section>
        <h2>COMMENT</h2>
        <Suspense fallback={<div>Loading Comment...</div>}>
          <Comment />
        </Suspense>
      </section>
    </>
  );
}
