import Image from 'next/image';
import {useState} from "react"

interface AvatarProps {
    src: string;
}

const Avatar: React.FC<AvatarProps> = (props:AvatarProps) => {

  return <div className='overflow-hidden w-[100px] h-[100px] rounded-full bg-slate-700 border-2 border-white'>
    <Image src={props.src} width={100} height={100} alt="Imagem do desenvolvedor do blog"/>
  </div>;
};

export default Avatar;
