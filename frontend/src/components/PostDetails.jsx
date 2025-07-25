import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Spinner, Image } from "@chakra-ui/react";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://waste-x-gamma.vercel.app/posts")
      .then((res) => {
        const foundPost = res.data.find((p) => p._id === id);
        setPost(foundPost);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (!post) return <Text>Post not found!</Text>;

  return (
    <Box padding="2rem">
      <Image src={post.image} alt={post.title} borderRadius="10px" />
      <Text fontSize="2xl" fontWeight="bold" marginTop="1rem">
        {post.title}
      </Text>
      <Text marginTop="1rem">{post.description}</Text>
    </Box>
  );
}