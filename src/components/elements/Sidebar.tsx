import {BookOpen, MagnifyingGlass} from 'phosphor-react';
import Avatar from '../base/Avatar';
import Button from '../base/Button';

const Sidebar: React.FC = () => {
  return (<div className='w-[225px] h-[100vh] bg-gray-800 flex flex-col items-center justify-around liner border-white border-r-2'>
    <div className='flex flex-col gap-1 items-center justify-center'>
      <Avatar src='https://github.com/alvarobasia.png'/>
      <h1 className='text-gray-200 font-bold text-2xl'>Álvaro Basílio</h1>
      <span className='font-serif italic text-gray-300'>Fullstack developer @ T10</span>
    </div>


    <div className='flex flex-col gap-2'>
      <Button icon={<MagnifyingGlass size={24} />} onClick={() => {}} text={'Pesquisar'} variant={'primary'}/>
      <Button icon={<BookOpen size={24} />} onClick={() => {}} text={'Sobre mim'} variant={'primary'}/>
    </div>

  </div>);
};

export default Sidebar;
