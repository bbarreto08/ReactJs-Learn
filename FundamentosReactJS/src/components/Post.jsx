import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar 
                        src="https://avatars.githubusercontent.com/u/19316132?v=4"                        
                    />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Barreto</strong>
                        <span>Tech Lead</span>
                    </div>
                </div>

                <time title="18 de setembro às 08:13" dateTime="2022-05-11 08:13:30">
                    Publicado há 1h
                </time>

            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>Reiciendis eveniet numquam, illum quia placeat optio,</p> 
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea placeholder="Deixe seu comentário" />

                <footer className={styles.footer}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>


        </article>
    )
}