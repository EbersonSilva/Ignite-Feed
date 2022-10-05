import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

// Dados dos usuario lateral
export function Sidebar(){
  return(
<aside className={styles.sidebar}>
  <img 
  className={styles.cover} 
  src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />

  <div className={styles.profile}>

    <Avatar src="https://github.com/ebersonsilva.png"/>
    <strong>Eberson Silva</strong>
    <span>Web Developer</span>

    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    </footer>

  </div>
</aside>
  );
}