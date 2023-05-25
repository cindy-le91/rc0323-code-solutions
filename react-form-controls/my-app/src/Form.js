import{ useState } from 'react';
import './Form.css'

export default function Form () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
    <button >Sign Up</button>
    </form>
    </>
  )
}
