import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
        author="Bruno Barreto" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis error praesentium quaerat perferendis molestias sequi non enim adipisci provident quae illo, eaque accusamus, minus expedita excepturi quam? Iure, reiciendis velit?"
      />
      
      <Post 
        author="Jovem Dev" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis error praesentium quaerat perferendis molestias sequi non enim adipisci provident quae illo, eaque accusamus, minus expedita excepturi quam? Iure, reiciendis velit?"
      />

    </div>
    
  )
}

