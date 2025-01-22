import { useState } from "react";

import { useMutationUpdatePost } from "@/features/posts";

import { Post } from "@/entities/posts";

import { Button, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "@/shared/ui";

interface PostUpdateModal {
  post: Post;
}

export const PostUpdateModal = ({ post }: PostUpdateModal) => {
  const { mutate: updatePost } = useMutationUpdatePost();

  const [editedPost, setEditedPost] = useState(post);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>게시물 수정</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <Input
          placeholder="제목"
          value={post.title}
          onChange={(e) => setEditedPost({ ...post, title: e.target.value })}
        />
        <Textarea
          rows={15}
          placeholder="내용"
          value={post.body}
          onChange={(e) => setEditedPost({ ...post, body: e.target.value })}
        />
        <Button onClick={() => updatePost(editedPost)}>게시물 업데이트</Button>
      </div>
    </DialogContent>
  );
};
