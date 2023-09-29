import { Post } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/19316132?v=4",
      name: "Bruno Barreto",
      role: "Tech Lead"
    },

    content: [
      { type: 'paragraph', content: "Fala galera :)" },
      { type: 'paragraph', content: "Testes com array de objetos, usados como parâmetros." },
      { type: 'link', content: "https://www.behance.net/alinesena2/moodboards"}
    ],

    publishedAt: new Date("2023-09-24 11:19:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/19316132?v=4",
      name: "Bruno Barreto",
      role: "Tech Lead"
    },

    content: [
      { type: 'paragraph', content: "Fala galera :)" },
      { type: 'paragraph', content: "Testes com array de objetos, usados como parâmetros." },
      { type: 'link', content: "https://www.behance.net/alinesena2/moodboards"}
    ],

    publishedAt: new Date("2023-09-24 11:19:00")
  }
];

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>

        <Sidebar></Sidebar>

        <main>
          { posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </div>
    
  )
}

