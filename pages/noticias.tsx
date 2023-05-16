import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logosprov from "@/components/Logosprov";

interface Post {
  id: string;
  titulo_destaque: string;
  copete: string;
}

export default function Noticias() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<Post[]>('http://localhost:1337/admin/content-manager/collectionType/api::nota.nota/1');
        setPosts(res.data);
        console.log(res.data, "RES DEL GET"); // for debugging purposes
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <Logosprov/>
      <Navbar />
      
      <div>
        {Array.isArray(posts) && posts.map((post) => (
          <div key={post.id}>
            <h2>{post.titulo_destaque}</h2>
            <p>{post.copete}</p>
          </div>
        ))}
        {!Array.isArray(posts) && (
          <p>No se pudo obtener la lista de noticias.</p>
        )}
      </div>
    </>
  );
}