import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return (
        <div className={styles.comment}> 
        
            <Avatar 
                src="https://avatars.githubusercontent.com/u/19316132?v=4" 
                hasBorder={false}    
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Barreto</strong>
                            <time title="20 de setembro às 20:42" dateTime="2023-09-20 20:42:12">Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>
                        Comentário teste
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}