import { getSubstackPosts } from "@/utils/substack";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export async function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allPosts = await getSubstackPosts();

  if (exclude.length) {
    allPosts = allPosts.filter((post) => !exclude.includes(post.slug));
  }

  // already sorted by date desc from getSubstackPosts()
  const displayedPosts = range
    ? allPosts.slice(range[0] - 1, range.length === 2 ? range[1] : allPosts.length)
    : allPosts;

  return (
    <>
      {displayedPosts.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedPosts.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
