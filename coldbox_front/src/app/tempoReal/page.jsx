import styles from './page.css'
import Image from 'next/image';


export default function tempoReal() {
  return (
   <div className='sidebar'>
       <div className='logo'>
            <img src="/logo.png" alt="ColdBox Logo" />
            <span>ColdBox</span>
       </div>
        <nav>
            <ul>
                <li> <a>Tempo Real</a></li>
                <li> <a>Relatórios</a></li>
                <li> <a>Dispositivos</a></li>
                <li> <a>Parâmetros</a></li>
                <li> <a>Usuários</a></li>
                <li> <a>Suporte ColdBox</a></li>
            </ul>
        </nav>
   </div>
  );
}

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="logo">
//         <img src="/logo.png" alt="ColdBox Logo" />
//         <span>ColdBox</span>
//       </div>
//       <nav>
//         <ul>
//           <li><Link href="#"><a>Tempo Real</a></Link></li>
//           <li><Link href="#"><a>Relatórios</a></Link></li>
//           <li><Link href="#"><a>Dispositivos</a></Link></li>
//           <li><Link href="#"><a>Parâmetros</a></Link></li>
//           <li><Link href="#"><a>Usuários</a></Link></li>
//           <li><Link href="#"><a>Suporte ColdBox</a></Link></li>
//         </ul>
//       </nav>
//       <div className="logout">
//         <Link href="#"><a>Logout</a></Link>
//       </div>
//     </div>
//   );
// };


