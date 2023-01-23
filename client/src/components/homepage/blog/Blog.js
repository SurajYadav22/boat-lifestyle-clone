import { BlogCard } from "./BlogCard";
import styled from "styled-components";

const blog = [
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_2048x_7b64dfd0-6b1f-4672-849c-bf487e89f74f_900x.jpg?v=1632817901",
    blogTital: "The Ultimate Smartwatch Guide - Get The World On Your Wrist",
  },
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/3FAD8F6A-B4E6-4D1E-83B0-E3F77AF9076D_2048x.jpg?v=1632898277",
    blogTital:
      "Do Whatever #FloatsYourBoat: How Content Creators Are Making and Breaking the Internet",
  },
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/98BBAAB3-1ED8-4D27-A3C4-7ECC5243CB69_900x.jpg?v=1632900475",
    blogTital: "Understanding the Phenomenon Called Low Latency",
  },
];

const BlogContainer = styled.section`
  width: 100%;
  height: 532px;
  color: var(--white);
  text-align: center;

  & > h2 {
    margin-top: 50px;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 61px;
    letter-spacing: 0em;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Blog = () => {
  return (
    <BlogContainer>
      <h2>Boat Blog</h2>
      <div>
        {blog.map(({ blogThumbnail, blogTital }) => (
          <BlogCard blogThumbnail={blogThumbnail} blogTital={blogTital} />
        ))}
      </div>
    </BlogContainer>
  );
};
