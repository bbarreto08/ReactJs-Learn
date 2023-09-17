import { Post } from './Post';
import { Header } from './components/Header.jsx';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>

        <Sidebar></Sidebar>

        <main>
          <Post 
            author="Bruno Barreto" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis error praesentium quaerat perferendis molestias sequi non enim adipisci provident quae illo, eaque accusamus, minus expedita excepturi quam? Iure, reiciendis velit?"
          />
      
          <Post 
            author="Jovem Dev" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis error praesentium quaerat perferendis molestias sequi non enim adipisci provident quae illo, eaque accusamus, minus expedita excepturi quam? Iure, reiciendis velit?"
          />
        </main>

      </div>

    </div>
    
  )
}

