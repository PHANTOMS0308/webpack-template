import './main.css';
import welcomeImg from './assets/welcome.jpg';

export default function App() {
  return (
    < >
      <h1 className='text-cyan-800'>Hello World</h1>
      <img src={welcomeImg} width={200}/>
    </>
  );
}
