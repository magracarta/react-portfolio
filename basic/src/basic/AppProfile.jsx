import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avartar';

function AppProfile() {
  const handleClick=(event)=>{
    console.log(event);
    alert('버튼이 클릭됨');
  }
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avartar   isNew={true}
      image='https://images.unsplash.com/photo-1668202034854-099897c3b693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
      <Profile image = 'https://images.unsplash.com/photo-1668202034854-099897c3b693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        name='james' title='프론트엔드 개발자' isNew={true}
      />
      <Profile image ='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
          name='dia' title='프론트엔드 개발자'
      />
      <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name ='nono' title ='백엔드 개발자' 
      />
    </>
  );
}

export default AppProfile;
