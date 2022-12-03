import {ReactElement} from 'react';
import {Texture} from '../../styles/Texture';
import Sidebar from '../elements/Sidebar';

interface WrapperLayoutProps {
  children: ReactElement;
}
const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
}: WrapperLayoutProps) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row">
      <Sidebar />
      {children}
      <Texture />
    </div>
  );
};

export default WrapperLayout;
